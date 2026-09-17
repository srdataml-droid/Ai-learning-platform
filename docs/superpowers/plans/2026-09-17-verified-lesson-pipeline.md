# Verified Lesson Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make it impossible for the site to show a fact it cannot trace, and delete the template that currently stands in for 243 lessons.

**Architecture:** Hand-researched seeds hold claims, sources and the checkable atoms each claim licenses. A mechanical gate extracts every year, figure and proper noun from a lesson's prose and rejects it unless every one is licensed. Lessons that fail the gate are never written to `content/`, so status is a fact about a file that exists rather than a label anyone can apply. A build step compiles `content/` into the bundle the pages already load.

**Tech Stack:** Node 22 (`node:test`, ESM `.mjs`), JSON content, vanilla JS site.

**Spec:** `docs/superpowers/specs/2026-09-17-verified-lesson-pipeline-design.md`

## Global Constraints

- **No new runtime dependencies.** `@google/genai` returns as a `devDependency` used only by `tools/generate.mjs`; the site never calls a model.
- **`npm test` passes with no `node_modules` present.** Anything needing a network or a key is a separate script, never part of `test`.
- **Three statuses only: `unsourced`, `traced`, `verified`.** There is no status for "failed the gate" because such a lesson is never written.
- **Generated files carry a header saying so** and are committed, so the site stays static.
- **The gate's allowlist requires a `reason` per entry.** An allowlist that grows without argument turns the gate into theatre.

## Deviation from the spec, recorded

The spec's status table lists four states, including `generated` for prose that exists but has not passed the gate. Implementation collapses that to three: the gate runs *before* the file is written, so prose that fails it does not reach `content/` at all. This is strictly stronger than the spec and removes the state in which a reader could see unlicensed prose.

The spec also assumed the 44 existing handcrafted lessons were sound. They are not sourced, and the first one read closely (`B.32`) had the CAP keynote in the wrong year. They migrate as `unsourced`, which is a work queue rather than a judgment.

---

### Task 1: Seed schema and its validator

**Files:**
- Create: `tools/lib/seed-schema.mjs`, `tests/seed-schema.test.mjs`
- Create: `content/allowlist.json`

**Interfaces:**
- Produces: `validateSeed(seed: object): string[]` — one problem string per fault, empty when sound.
- Produces: `loadAllowlist(): Promise<Map<string, string>>` — token to reason.

- [ ] **Step 1: Write the failing test** covering: a sound seed returns `[]`; a claim with no source is reported; a source with no url is reported; a claim with empty `tokens` is reported; a claim `type` outside the enum is reported; an allowlist entry with no `reason` is reported.
- [ ] **Step 2: Run it, confirm it fails** with a module-not-found error.
- [ ] **Step 3: Implement `validateSeed` and `loadAllowlist`.**
- [ ] **Step 4: Run the tests, confirm green.**
- [ ] **Step 5: Commit.**

---

### Task 2: The traceability gate

The load-bearing task. Evidence that the gate works is a poisoned fixture it rejects, never a real lesson it accepts.

**Files:**
- Create: `tools/lib/gate.mjs`, `tests/gate.test.mjs`

**Interfaces:**
- Produces: `extractAtoms(prose: string): string[]` — every year, figure-with-magnitude, capitalised multi-word proper noun and acronym.
- Produces: `checkTraceable(lesson, seed, allowlist): { ok: boolean, unlicensed: string[] }`.

- [ ] **Step 1: Write the failing tests.** Must include: a year in the prose absent from every claim's tokens is unlicensed; an acronym absent from tokens is unlicensed; a token present in a claim passes; a token present only in the allowlist passes; the task title's own words never count as violations; prose whose atoms are all licensed returns `ok: true`. Plus the poisoned fixture: take a real lesson, change one year by one digit, assert the gate rejects it.
- [ ] **Step 2: Run, confirm failure.**
- [ ] **Step 3: Implement.**
- [ ] **Step 4: Run, confirm green.**
- [ ] **Step 5: Commit.**

---

### Task 3: Migrate the 44 handcrafted lessons to `content/`

**Files:**
- Create: `content/lessons/<taskId>.json` × 44
- Create: `tools/migrate-lessons.mjs` (one-shot, kept for the record)
- Create: `tools/build-data.mjs`, `tests/build-data.test.mjs`
- Modify: `public/lessons-data.js` → becomes generated output

**Interfaces:**
- Produces: `buildLessonsBundle(lessons): string` — the generated `lessons-data.js` source text.

- [ ] **Step 1: Write the failing test** — the bundle exposes `getLesson` and `getAdjacentLessons`, returns a migrated lesson by id, returns `null` for a task with no content file, and carries a generated-file header.
- [ ] **Step 2: Run, confirm failure.**
- [ ] **Step 3: Write the migration, run it, eyeball three outputs.**
- [ ] **Step 4: Write `build-data.mjs`, regenerate the bundle, confirm the suite and validator stay green.**
- [ ] **Step 5: Commit.**

---

### Task 4: Delete `generateFallbackLesson` and render honesty

**Files:**
- Modify: `lesson.html` (status banners, "not written yet" state)
- Modify: `track.html`, `index.html` (mark which tasks have lessons)
- Modify: `styles.css` (banner styles)

- [ ] **Step 1: Write the failing test** — no file under `content/` or `public/` contains the fallback's tell-tale string `represents a critical engineering threshold`.
- [ ] **Step 2: Run, confirm failure** (243 tasks currently produce it).
- [ ] **Step 3: Delete the generator; make `getLesson` return `null`.**
- [ ] **Step 4: Render the four states in `lesson.html`.**
- [ ] **Step 5: Run the suite, confirm green. Commit.**

---

### Task 5: The generator

**Files:**
- Create: `tools/model.mjs`, `tools/generate.mjs`
- Modify: `package.json` (`@google/genai` devDependency, `generate` script)

- [ ] **Step 1: Write the failing test** — the prompt builder includes every claim and forbids unlisted atoms; the writer refuses to emit a lesson that fails the gate.
- [ ] **Step 2: Run, confirm failure.**
- [ ] **Step 3: Implement the adapter and the generate loop.**
- [ ] **Step 4: Confirm it exits with a clear message and no crash when no API key is set.**
- [ ] **Step 5: Commit.**

---

## Self-review

**Spec coverage.** Offline generation (Task 5), the three-layer split (Tasks 1, 2, 5), the gate (Task 2), status lifecycle and rendering (Tasks 3, 4), `build-data` (Task 3), deletion of `generateFallbackLesson` (Task 4), the allowlist with required reasons (Task 1). The spec's language storyline work is Plan 3 and is not in scope here.

**Placeholder scan.** Steps here name the assertions rather than spelling out every code block, because this plan is executed in the same session by its author. A plan handed to a fresh engineer would need the code inline; that is the standard this one knowingly trades against, and the tests named per step are specific enough to be checked.
