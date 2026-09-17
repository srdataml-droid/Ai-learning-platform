# Structural Repairs and Validation Harness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing site build correctly, stop silently discarding content, and add the validation harness that every later content change is gated on.

**Architecture:** Add a zero-dependency test harness on Node 22's built-in `node:test`, then use it to drive six repairs: a brace-aware duplicate-key scanner, the merge of the 12 duplicate lesson keys it finds, a referential-integrity validator over `data.js`, the missing `lesson.html` build input, removal of the dead React scaffold, and replacement of the hardcoded 330-task count with a computed one.

**Tech Stack:** Node 22 (`node --test`, ESM `.mjs`), vanilla JS site files, Vite 6 for the build only.

**Spec:** `docs/superpowers/specs/2026-09-17-verified-lesson-pipeline-design.md` (sections "Structural repairs" and "Testing")

## Global Constraints

- **No new runtime dependencies.** The site ships as static HTML/CSS/JS with nothing loaded from npm at runtime. Tools may use Node built-ins only; `@google/genai` returns in Plan 2 as a tool-only dependency.
- **Tests use `node:test` and `node:assert/strict`.** No test framework is installed. `npm test` must pass on a clean checkout with no `node_modules` present.
- **Tools live in `tools/`, are ESM `.mjs`, and are runnable directly** (`node tools/validate.mjs`).
- **TDD.** The failing test is written and run before the implementation in every task.
- **The task count is 313** and is never written as a literal in any shipped file; it is computed from `window.CURRICULUM`.
- **`node_modules/` is absent from this repo and `npm install` has never been run here.** Any step that needs Vite says so explicitly.

---

### Task 1: Duplicate-key scanner and test harness

The bug this exists to prevent: `lessons-data.js` declares `curatedLessons` as one object literal with 56 entries and 44 unique keys. Duplicate keys are legal JavaScript — the later value wins, silently. A naive regex scanner is not good enough here because the file contains braces and quotes inside template literals and inside code samples; the scanner must track string state and brace depth.

**Files:**
- Create: `tools/lib/find-duplicate-keys.mjs`
- Create: `tests/find-duplicate-keys.test.mjs`
- Modify: `package.json` (add the `test` script)

**Interfaces:**
- Consumes: nothing.
- Produces: `findDuplicateKeys(source: string, { depth: number }): Array<{ key: string, line: number, occurrences: number[] }>` — scans JavaScript source text and returns one entry per key that appears more than once at the given brace depth. `occurrences` holds the 1-based line number of every occurrence. Used by Task 2 and Task 3.

- [ ] **Step 1: Write the failing test**

Create `tests/find-duplicate-keys.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findDuplicateKeys } from '../tools/lib/find-duplicate-keys.mjs';

test('reports nothing when every key is unique', () => {
  const src = `const o = {\n  "a": { x: 1 },\n  "b": { x: 2 }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('reports a key that appears twice at the target depth', () => {
  const src = `const o = {\n  "a": { x: 1 },\n  "b": { x: 2 },\n  "a": { x: 3 }\n};`;
  const dupes = findDuplicateKeys(src, { depth: 1 });
  assert.equal(dupes.length, 1);
  assert.equal(dupes[0].key, 'a');
  assert.deepEqual(dupes[0].occurrences, [2, 4]);
});

test('ignores repeated keys nested deeper than the target depth', () => {
  const src = `const o = {\n  "a": { "q": 1, "r": 2 },\n  "b": { "q": 3, "r": 4 }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores braces and quotes inside template literals', () => {
  const src = 'const o = {\n  "a": { s: `a } brace and a "quote" and ${x}` },\n  "b": { s: `x` }\n};';
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores braces inside ordinary strings', () => {
  const src = `const o = {\n  "a": { s: "} not a real brace" },\n  "b": { s: 'also } not one' }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores a colon inside a string that looks like a key', () => {
  const src = `const o = {\n  "a": { s: "b\\": fake" },\n  "b": { s: "" }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('finds the real duplicates in lessons-data.js', async () => {
  const { readFile } = await import('node:fs/promises');
  const src = await readFile(new URL('../lessons-data.js', import.meta.url), 'utf8');
  const dupes = findDuplicateKeys(src, { depth: 2 });
  assert.deepEqual(dupes.map((d) => d.key).sort(), []);
});
```

The last test is written to expect `[]` because that is the state Task 2 delivers. It fails now, which is correct — it is the regression guard for the whole task.

- [ ] **Step 2: Run the tests to verify they fail**

```bash
node --test tests/
```

Expected: FAIL — `Cannot find module '.../tools/lib/find-duplicate-keys.mjs'`.

- [ ] **Step 3: Write the scanner**

Create `tools/lib/find-duplicate-keys.mjs`:

```javascript
/**
 * Scan JavaScript source for object keys repeated at one brace depth.
 *
 * Duplicate keys in an object literal are legal JavaScript: the last value
 * silently wins. That is how 12 handcrafted lessons went missing from
 * lessons-data.js. This walks the source character by character, tracking
 * string and template state, so that braces and colons inside lesson prose
 * and code samples cannot be mistaken for structure.
 *
 * @param {string} source
 * @param {{ depth: number }} options depth 1 is the outermost object literal
 * @returns {Array<{ key: string, line: number, occurrences: number[] }>}
 */
export function findDuplicateKeys(source, { depth: targetDepth }) {
  const seen = new Map();
  let depth = 0;
  let line = 1;
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '\n') {
      line += 1;
      i += 1;
      continue;
    }

    // Skip comments so that a "key": inside one is never counted.
    if (ch === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i += 1;
      continue;
    }
    if (ch === '/' && source[i + 1] === '*') {
      i += 2;
      while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) {
        if (source[i] === '\n') line += 1;
        i += 1;
      }
      i += 2;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      const startLine = line;
      let value = '';
      i += 1;
      while (i < source.length && source[i] !== quote) {
        if (source[i] === '\\') {
          value += source[i + 1];
          i += 2;
          continue;
        }
        if (source[i] === '\n') line += 1;
        value += source[i];
        i += 1;
      }
      i += 1; // closing quote

      // A string is a key only if the next non-space character is a colon.
      let j = i;
      while (j < source.length && /\s/.test(source[j])) j += 1;
      if (source[j] === ':' && depth === targetDepth) {
        if (!seen.has(value)) seen.set(value, []);
        seen.get(value).push(startLine);
      }
      continue;
    }

    if (ch === '{') depth += 1;
    if (ch === '}') depth -= 1;
    i += 1;
  }

  return [...seen.entries()]
    .filter(([, occurrences]) => occurrences.length > 1)
    .map(([key, occurrences]) => ({ key, line: occurrences[0], occurrences }));
}
```

- [ ] **Step 4: Add the test script**

In `package.json`, add to `scripts`:

```json
"test": "node --test tests/"
```

- [ ] **Step 5: Run the tests**

```bash
npm test
```

Expected: the six unit tests PASS; `finds the real duplicates in lessons-data.js` FAILS, listing the 12 keys `A.2, B.32, E.4, F.8, J.1, K.11, K.13, K.2, K.6, L.12, L.6, L.9`. That failure is Task 2's job and confirms the scanner works on the real file.

- [ ] **Step 6: Commit**

```bash
git add tools/lib/find-duplicate-keys.mjs tests/find-duplicate-keys.test.mjs package.json
git commit -m "test: add duplicate-key scanner that catches the silent lesson loss"
```

---

### Task 2: Merge the 12 duplicate lesson keys

Ten of the twelve duplicate pairs are near-identical, and for those the surviving (later) copy is kept and the earlier deleted. Two are not:

- **`A.2`** — the *discarded* copy is 3081 bytes and the surviving one is 2951. The larger earlier copy must be kept and the later one deleted. This is the only case where the currently-rendering text is replaced.
- **`B.32`** — the surviving copy is 9970 bytes against 3237, the richest lesson in the file. Keep the survivor, delete the earlier.

**Files:**
- Modify: `lessons-data.js` (delete 12 object entries, one of them the *later* `A.2`)
- Test: `tests/find-duplicate-keys.test.mjs` (already written in Task 1, no change)

**Interfaces:**
- Consumes: `findDuplicateKeys` from Task 1.
- Produces: a `curatedLessons` object whose 44 keys are each declared once. No signature change.

- [ ] **Step 1: Confirm the test currently fails**

```bash
node --test tests/ 2>&1 | grep -A3 "finds the real duplicates"
```

Expected: FAIL listing 12 keys.

- [ ] **Step 2: Record both copies of every duplicate before editing**

```bash
node tools/lib/dump-duplicates.mjs > /tmp/claude-1000/-home-noirxvii/scratchpad/dupes-before.txt
```

Create `tools/lib/dump-duplicates.mjs` first:

```javascript
import { readFile } from 'node:fs/promises';
import { findDuplicateKeys } from './find-duplicate-keys.mjs';

const source = await readFile(new URL('../../lessons-data.js', import.meta.url), 'utf8');
const lines = source.split('\n');
const dupes = findDuplicateKeys(source, { depth: 2 });

for (const { key, occurrences } of dupes) {
  console.log(`\n${'='.repeat(70)}\n${key} — ${occurrences.length} copies at lines ${occurrences.join(', ')}`);
  for (const start of occurrences) {
    const end = lines.findIndex((l, n) => n > start - 1 && /^ {4}\}/.test(l));
    console.log(`\n--- copy at line ${start} (${end - start + 2} lines) ---`);
    console.log(lines.slice(start - 1, end + 1).join('\n'));
  }
}
```

- [ ] **Step 3: Delete the losing copy of each duplicate**

Work from the bottom of the file upward so that earlier line numbers stay valid. For the ten near-identical pairs and for `B.32`, delete the **earlier** entry. For `A.2`, delete the **later** entry.

Verify the intent before each deletion by reading `/tmp/claude-1000/-home-noirxvii/scratchpad/dupes-before.txt`. An entry runs from its `    "KEY": {` line to the matching `    },` line at four-space indent.

- [ ] **Step 4: Verify the file still parses and keeps every lesson**

```bash
node -e "
global.window = {};
await import('./data.js');
await import('./lessons-data.js');
const ids = ['0.1','B.32','A.2','J.1','K.2','L.12'];
for (const id of ids) {
  const l = window.CurriculumLessons.getLesson(id);
  console.log(id, l ? l.title.slice(0, 50) : 'MISSING');
}
" --input-type=module
```

Expected: every id prints a real title, none print `MISSING`.

- [ ] **Step 5: Confirm A.2 is now the longer text**

```bash
node -e "
global.window = {};
await import('./data.js');
await import('./lessons-data.js');
const a2 = window.CurriculumLessons.getLesson('A.2');
console.log('A.2 story length:', a2.story.length);
console.log(a2.story.slice(0, 200));
" --input-type=module
```

Expected: the longer recovered text, not the 2951-byte copy that was winning before.

- [ ] **Step 6: Run the tests**

```bash
npm test
```

Expected: all tests PASS, including `finds the real duplicates in lessons-data.js`.

- [ ] **Step 7: Commit**

```bash
git add lessons-data.js tools/lib/dump-duplicates.mjs
git commit -m "fix: recover 12 lessons silently discarded by duplicate object keys"
```

---

### Task 3: Referential-integrity validator

Nothing currently checks that the data hangs together. This validator is what `npm test` runs on every later content change, and it is the file Plans 2 and 3 extend.

**Files:**
- Create: `tools/validate.mjs`
- Create: `tools/lib/load-curriculum.mjs`
- Create: `tests/validate.test.mjs`
- Modify: `package.json` (`test` script runs the validator too)

**Interfaces:**
- Consumes: `findDuplicateKeys` from Task 1.
- Produces:
  - `loadCurriculum(): Promise<object>` from `tools/lib/load-curriculum.mjs` — executes `data.js` and `lessons-data.js` against a stub `globalThis.window` and returns `{ CURRICULUM, CurriculumLessons }`. Every later tool loads data through this.
  - `validate(data: object): string[]` from `tools/validate.mjs` — returns an array of human-readable problem strings, empty when the data is sound. Plans 2 and 3 add checks to it.

- [ ] **Step 1: Write the failing test**

Create `tests/validate.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate } from '../tools/validate.mjs';
import { loadCurriculum } from '../tools/lib/load-curriculum.mjs';

test('the shipped curriculum data is valid', async () => {
  const data = await loadCurriculum();
  assert.deepEqual(validate(data), []);
});

test('reports a task id used twice', () => {
  const data = {
    CURRICULUM: {
      sequence: ['X'],
      underneath: [],
      stages: [{ id: 's1', trackIds: ['X'] }],
      tracks: [{ id: 'X', name: 'X', tasks: [{ id: 'X.1', text: 'a' }, { id: 'X.1', text: 'b' }] }],
      languages: [],
      words: [],
    },
  };
  assert.deepEqual(validate(data), ['duplicate task id: X.1']);
});

test('reports a leadsTo pointing at a language that does not exist', () => {
  const data = {
    CURRICULUM: {
      sequence: ['C'],
      underneath: [],
      stages: [{ id: 's1', trackIds: ['C'] }],
      tracks: [{ id: 'C', name: 'C', tasks: [{ id: 'C.1', text: 'a' }] }],
      languages: [{ id: 'C.1', name: 'Assembly', leadsTo: 'C.99' }],
      words: [],
    },
  };
  assert.deepEqual(validate(data), ['language C.1 leadsTo C.99, which does not exist']);
});

test('reports a stage naming a track that does not exist', () => {
  const data = {
    CURRICULUM: {
      sequence: ['X'],
      underneath: [],
      stages: [{ id: 's1', trackIds: ['X', 'NOPE'] }],
      tracks: [{ id: 'X', name: 'X', tasks: [{ id: 'X.1', text: 'a' }] }],
      languages: [],
      words: [],
    },
  };
  assert.deepEqual(validate(data), ['stage s1 lists track NOPE, which does not exist']);
});

test('reports a track missing from both sequence and underneath', () => {
  const data = {
    CURRICULUM: {
      sequence: ['X'],
      underneath: [],
      stages: [{ id: 's1', trackIds: ['X', 'Y'] }],
      tracks: [
        { id: 'X', name: 'X', tasks: [{ id: 'X.1', text: 'a' }] },
        { id: 'Y', name: 'Y', tasks: [{ id: 'Y.1', text: 'a' }] },
      ],
      languages: [],
      words: [],
    },
  };
  assert.deepEqual(validate(data), ['track Y is in neither sequence nor underneath, so it is unreachable']);
});

test('reports a language id that is not a real task', () => {
  const data = {
    CURRICULUM: {
      sequence: ['C'],
      underneath: [],
      stages: [{ id: 's1', trackIds: ['C'] }],
      tracks: [{ id: 'C', name: 'C', tasks: [{ id: 'C.1', text: 'a' }] }],
      languages: [{ id: 'C.1', name: 'Assembly' }, { id: 'C.77', name: 'Ghost' }],
      words: [],
    },
  };
  assert.deepEqual(validate(data), ['language C.77 has no matching task in track C']);
});
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
node --test tests/validate.test.mjs
```

Expected: FAIL — `Cannot find module '.../tools/validate.mjs'`.

- [ ] **Step 3: Write the data loader**

Create `tools/lib/load-curriculum.mjs`:

```javascript
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

/**
 * data.js and lessons-data.js are browser scripts that assign to `window`.
 * Run them in a VM with a stub window rather than importing them, so tools
 * read exactly what the pages read, with no Node globals leaking in.
 */
export async function loadCurriculum(root = new URL('../../', import.meta.url)) {
  const context = vm.createContext({ window: {}, console });
  for (const file of ['data.js', 'lessons-data.js']) {
    const path = fileURLToPath(new URL(file, root));
    const code = await readFile(path, 'utf8');
    new vm.Script(code, { filename: file }).runInContext(context);
  }
  return {
    CURRICULUM: context.window.CURRICULUM,
    CurriculumLessons: context.window.CurriculumLessons,
  };
}
```

- [ ] **Step 4: Write the validator**

Create `tools/validate.mjs`:

```javascript
#!/usr/bin/env node
import { loadCurriculum } from './lib/load-curriculum.mjs';

/**
 * Check that the curriculum data refers only to things that exist.
 * Returns one human-readable string per problem; empty means sound.
 */
export function validate({ CURRICULUM }) {
  const problems = [];
  const trackIds = new Set(CURRICULUM.tracks.map((t) => t.id));

  const seenTaskIds = new Set();
  for (const track of CURRICULUM.tracks) {
    for (const task of track.tasks) {
      if (seenTaskIds.has(task.id)) problems.push(`duplicate task id: ${task.id}`);
      seenTaskIds.add(task.id);
    }
  }

  for (const stage of CURRICULUM.stages) {
    for (const id of stage.trackIds) {
      if (!trackIds.has(id)) problems.push(`stage ${stage.id} lists track ${id}, which does not exist`);
    }
  }

  const reachable = new Set([...CURRICULUM.sequence, ...CURRICULUM.underneath]);
  for (const track of CURRICULUM.tracks) {
    if (!reachable.has(track.id)) {
      problems.push(`track ${track.id} is in neither sequence nor underneath, so it is unreachable`);
    }
  }

  const languageIds = new Set(CURRICULUM.languages.map((l) => l.id));
  for (const language of CURRICULUM.languages) {
    if (language.leadsTo && !languageIds.has(language.leadsTo)) {
      problems.push(`language ${language.id} leadsTo ${language.leadsTo}, which does not exist`);
    }
    if (!seenTaskIds.has(language.id)) {
      problems.push(`language ${language.id} has no matching task in track C`);
    }
  }

  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const problems = validate(await loadCurriculum());
  if (problems.length === 0) {
    console.log('curriculum data is sound');
  } else {
    for (const p of problems) console.error(`  ${p}`);
    console.error(`\n${problems.length} problem(s)`);
    process.exitCode = 1;
  }
}
```

- [ ] **Step 5: Run the tests**

```bash
node --test tests/validate.test.mjs && node tools/validate.mjs
```

Expected: all tests PASS and the CLI prints `curriculum data is sound`. If the real data reports a problem, that problem is real — read it and fix the data, not the test.

- [ ] **Step 6: Wire the validator into `npm test`**

In `package.json`:

```json
"test": "node --test tests/ && node tools/validate.mjs"
```

- [ ] **Step 7: Commit**

```bash
git add tools/validate.mjs tools/lib/load-curriculum.mjs tests/validate.test.mjs package.json
git commit -m "test: validate curriculum referential integrity on every run"
```

---

### Task 4: Add `lesson.html` to the build

`vite.config.ts` names five HTML inputs: index, track, languages, words, progress. `lesson.html` is not among them, and it is the page every task on the site links to. `npm run build` therefore produces a site where every lesson link 404s. The page works under `npm run dev`, which is why this was never noticed.

**Files:**
- Modify: `vite.config.ts:18-26`
- Create: `tests/build-inputs.test.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces: nothing importable. Guarantees every top-level `*.html` is a build input.

- [ ] **Step 1: Write the failing test**

Create `tests/build-inputs.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

test('every page in the repo is a Vite build input', async () => {
  const root = new URL('../', import.meta.url);
  const pages = (await readdir(root)).filter((f) => f.endsWith('.html')).sort();
  const config = await readFile(new URL('vite.config.ts', root), 'utf8');

  const missing = pages.filter((page) => !config.includes(`'${page}'`));
  assert.deepEqual(missing, [], `pages absent from rollupOptions.input: ${missing.join(', ')}`);
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
node --test tests/build-inputs.test.mjs
```

Expected: FAIL — `pages absent from rollupOptions.input: lesson.html`.

- [ ] **Step 3: Add the input**

In `vite.config.ts`, inside `rollupOptions.input`, add after the `main` line:

```typescript
          lesson: path.resolve(__dirname, 'lesson.html'),
```

- [ ] **Step 4: Run the test**

```bash
node --test tests/build-inputs.test.mjs
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add vite.config.ts tests/build-inputs.test.mjs
git commit -m "fix: build lesson.html, the page every task links to"
```

---

### Task 5: Delete the dead React scaffold

`src/App.tsx` renders `<div></div>`, `src/main.tsx` mounts it, and no HTML file references either. The package is named `react-example`. Seven dependencies — react, react-dom, lucide-react, motion, express, dotenv, `@google/genai` — appear in no shipped file; `grep -rn "genai\|express\|API_KEY"` across the site returns only unrelated prose matches. `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API` for a server that does not exist.

`@google/genai` returns in Plan 2, as a `devDependency` used only by the offline generator.

**Files:**
- Delete: `src/App.tsx`, `src/index.css`, `src/main.tsx`, `src/`
- Modify: `package.json` (name, dependencies)
- Modify: `metadata.json` (drop the false capability claim)
- Modify: `tsconfig.json` (it targets a `src/` that no longer exists)

**Interfaces:**
- Consumes: nothing.
- Produces: nothing.

- [ ] **Step 1: Prove nothing references `src/`**

```bash
grep -rn "src/\|App.tsx\|main.tsx\|root" --include="*.html" . | grep -v node_modules
```

Expected: no hit that loads `src/`. (`#main` and `main-wrapper` in the HTML are unrelated CSS class names — read each hit rather than assuming.)

- [ ] **Step 2: Delete the scaffold**

```bash
git rm -r src/
```

- [ ] **Step 3: Strip the unused dependencies and rename the package**

Replace the `name`, `dependencies` and `devDependencies` blocks of `package.json` with:

```json
  "name": "curriculum-zero-to-ai-engineer",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist",
    "test": "node --test tests/ && node tools/validate.mjs"
  },
  "devDependencies": {
    "vite": "^6.2.3"
  }
```

- [ ] **Step 4: Remove the false capability claim**

In `metadata.json`, delete the `majorCapabilities` entry — there is no server and no Gemini call at runtime:

```json
{
  "name": "Software & AI Engineering Curriculum",
  "description": "Seventeen tracks from fundamentals to AI engineer, with Four Beats lesson histories, the language evolution chain, and progress tracking.",
  "requestFramePermissions": []
}
```

- [ ] **Step 5: Point `tsconfig.json` at what still exists**

`tsconfig.json` referenced the deleted `src/`. Since no TypeScript ships any more, reduce it to what `vite.config.ts` itself needs:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["node"],
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 6: Run the tests**

```bash
npm test
```

Expected: PASS. The site is unaffected — nothing deleted was ever loaded by a page.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "chore: delete the unused React scaffold and seven unused dependencies"
```

---

### Task 6: Compute the task count instead of asserting 330

`metadata.json` and `index.html` both state 330 tasks. The data holds 313. The homepage prints the claim directly above a counter that computes the real figure, so the page contradicts itself on first paint.

**Files:**
- Modify: `index.html:7` (meta description), `index.html:38` (hero paragraph)
- Modify: `metadata.json` (description)
- Create: `tests/no-hardcoded-counts.test.mjs`

**Interfaces:**
- Consumes: `loadCurriculum` from Task 3.
- Produces: nothing importable.

- [ ] **Step 1: Write the failing test**

Create `tests/no-hardcoded-counts.test.mjs`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { loadCurriculum } from '../tools/lib/load-curriculum.mjs';

test('no shipped file states a task count as a literal', async () => {
  const root = new URL('../', import.meta.url);
  const { CURRICULUM } = await loadCurriculum();
  const real = CURRICULUM.tracks.reduce((sum, t) => sum + t.tasks.length, 0);

  const files = (await readdir(root)).filter((f) => /\.(html|json)$/.test(f));
  const offenders = [];

  for (const file of files) {
    const text = await readFile(new URL(file, root), 'utf8');
    for (const match of text.matchAll(/(\d{3})\s*(?:tasks|lessons)/gi)) {
      offenders.push(`${file}: "${match[0]}"`);
    }
  }

  assert.deepEqual(offenders, [], `stated counts drift from the real ${real}: ${offenders.join(', ')}`);
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
node --test tests/no-hardcoded-counts.test.mjs
```

Expected: FAIL, naming `index.html: "330 tasks"` and `metadata.json: "330 tasks"`.

- [ ] **Step 3: Remove the literal from the hero**

In `index.html`, change the hero paragraph so the count comes from the element the script already fills:

```html
      <p style="max-inline-size: 68ch; margin-bottom: 1.25rem;">Seventeen tracks across four progressive stages, with five engineering habits running underneath the whole journey. <span id="hero-task-count">Counting tasks…</span></p>
```

- [ ] **Step 4: Fill it from the data**

In `index.html`, inside the existing `DOMContentLoaded` handler that already sets `#total-summary-line`, add:

```javascript
      const heroCount = document.getElementById('hero-task-count');
      if (heroCount) {
        const total = window.CURRICULUM.tracks.reduce((sum, t) => sum + t.tasks.length, 0);
        heroCount.textContent = `${total} tasks in total.`;
      }
```

- [ ] **Step 5: Fix both descriptions**

In `index.html` line 7, replace the meta description:

```html
  <meta name="description" content="A rigorous curriculum in seventeen tracks, mapped from computer fundamentals to production AI engineering.">
```

`metadata.json`'s description was already rewritten without a count in Task 5, Step 4. Confirm it holds no digits followed by "tasks".

- [ ] **Step 6: Run the tests**

```bash
npm test
```

Expected: all PASS.

- [ ] **Step 7: Commit**

```bash
git add index.html metadata.json tests/no-hardcoded-counts.test.mjs
git commit -m "fix: compute the task count instead of claiming 330 beside a counter reading 313"
```

---

## Self-review

**Spec coverage.** The spec's "Structural repairs" section lists five items: `lesson.html` build input (Task 4), duplicate keys (Tasks 1–2), dead React scaffold and unused deps (Task 5), the 330/313 count (Task 6), and validation with a no-dupe-keys guard (Tasks 1 and 3). All five have a task. The spec's "Testing" section requires `npm test` to gate content changes — delivered in Task 3, Step 6 — and requires the gate's own tests to include a deliberately poisoned fixture, which belongs to Plan 2 where the gate is built.

**Not in this plan, by design.** Seeds, generation, the traceability gate, status rendering and `build-data` are Plan 2. The language storyline model, the 432-row migration, `language.html`, `compare.html` and the chain repairs (Smalltalk's orphaned `leadsTo`, the `chain`/`notation` split) are Plan 3. Task 3's validator is deliberately written so both plans extend it rather than replace it.

**Placeholder scan.** No TBDs, no "handle errors appropriately", every code step carries its actual code.

**Type consistency.** `findDuplicateKeys(source, { depth })` is defined in Task 1 and consumed with the same signature in Tasks 2 and 3. `loadCurriculum()` is defined in Task 3 and consumed in Task 6. `validate(data)` takes the `{ CURRICULUM }` shape `loadCurriculum` returns, which the Task 3 tests construct by hand to match.
