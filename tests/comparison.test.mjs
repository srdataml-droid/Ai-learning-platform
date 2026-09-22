import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyAll } from '../tools/verify.mjs';
import { validateComparison, proseOf, subjectsOf } from '../tools/lib/comparison-schema.mjs';

/**
 * A comparison is one specification implemented several times, so that the
 * differences are attributable to the languages rather than to the author's
 * choices. Its claim is about ergonomics — what each language compelled you
 * to state, and what it decided on your behalf — which is a claim about the
 * code on the page rather than about the world.
 *
 * So the licensing rule is the word list's rule again, one level up: a
 * comparison may name the languages it is comparing, because those are its
 * subject. It may not name a fourth language, or a date, or a benchmark,
 * without a seed behind it.
 */

async function fixture({ comparison, allowlist = {} }) {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-compare-'));
  for (const sub of ['lessons', 'seeds', 'languages', 'words', 'comparisons']) {
    await mkdir(join(dir, sub));
  }
  await writeFile(join(dir, 'allowlist.json'), JSON.stringify(allowlist));
  await writeFile(join(dir, 'comparisons', `${comparison.id}.json`), JSON.stringify(comparison));
  return new URL(`${pathToFileURL(dir).href}/`);
}

const comparison = (over = {}) => ({
  id: 'read-and-sum',
  title: 'Read a file of numbers and print the total',
  status: 'claimless',
  task: 'Read a file whose lines are numbers, print their sum, and say so when the file is not there.',
  implementations: [
    {
      languageId: 'C.11',
      lang: 'Python',
      code: 'print(sum(int(l) for l in open("n.txt")))',
      compelled: ['nothing beyond the expression itself'],
      decided: ['the missing file raises, and the exception travels'],
    },
    {
      languageId: 'C.18',
      lang: 'Go',
      code: 'data, err := os.ReadFile("n.txt")\nif err != nil { return err }',
      compelled: ['the failure is handled at the call'],
      decided: ['nothing: Go leaves the reading to you'],
    },
  ],
  reading: 'Python hides the failure path and Go puts it in the way, which is the same bet made in opposite directions.',
  ...over,
});

test('a comparison may name the languages it compares', async () => {
  assert.deepEqual(await verifyAll(await fixture({ comparison: comparison() })), []);
});

test('a comparison may not name a language it does not implement', async () => {
  // Mid-sentence, because a capitalised word opening a line is sentence-initial
  // and correctly not treated as a name — the same rule everywhere else.
  const bad = comparison({
    reading: 'The same program in Rust would not compile until the failure was handled.',
  });
  const problems = await verifyAll(await fixture({ comparison: bad }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /Rust/);
});

test('the rule licenses the subject and not a claim made beside it', async () => {
  // The poisoned fixture: naming your own subject is fine, dating it is not.
  const poisoned = comparison({ reading: 'Go was released in 2009 and takes the opposite view.' });
  const problems = await verifyAll(await fixture({ comparison: poisoned }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /2009/);
});

test('code is not gated, here as everywhere', () => {
  assert.ok(!proseOf(comparison()).includes('os.ReadFile'));
});

test('subjectsOf lists exactly the languages implemented', () => {
  assert.deepEqual(subjectsOf(comparison()), ['Python', 'Go']);
});

test('a comparison needs at least two implementations to compare anything', () => {
  const problems = validateComparison(comparison({ implementations: [comparison().implementations[0]] }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /two/);
});

test('an implementation must say what it compelled and what it decided', () => {
  const problems = validateComparison(comparison({
    implementations: [
      { languageId: 'C.11', lang: 'Python', code: 'x', compelled: ['a'], decided: ['b'] },
      { languageId: 'C.18', lang: 'Go', code: 'y', compelled: [], decided: ['b'] },
    ],
  }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /compelled/);
});

test('every comparison in content is valid and names languages that exist', async () => {
  const dir = new URL('../content/comparisons/', import.meta.url);
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  } catch {
    return;
  }
  const { loadCurriculum } = await import('../tools/lib/load-curriculum.mjs');
  const { CURRICULUM } = await loadCurriculum();
  const ids = new Set(CURRICULUM.languages.map((l) => l.id));
  const offenders = [];

  for (const file of files) {
    const c = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    for (const fault of validateComparison(c)) offenders.push(fault);
    for (const impl of c.implementations ?? []) {
      if (!ids.has(impl.languageId)) offenders.push(`${c.id}: ${impl.languageId} is not a language in the chain`);
    }
  }

  assert.deepEqual(offenders, []);
});
