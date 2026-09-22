import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyAll } from '../tools/verify.mjs';
import { validateWordList, rowsOf, licensedByRow } from '../tools/lib/wordlist-schema.mjs';

/**
 * A word list is reference material, and that makes it a third kind of
 * content rather than a lesson with short paragraphs.
 *
 * A lesson argues; a row documents. The row's subject is the construct in its
 * `code`, and naming your own subject is not a claim that could be wrong —
 * which is the same reasoning that already licenses atoms from a seed's title
 * and already keeps `code` out of the checked prose. So a row's code licenses
 * the tokens that appear in it, for that row only, and everything else in the
 * row is gated exactly as a lesson is.
 *
 * The scope of that rule is the point. It is not an allowlist: it cannot
 * license a token that is not literally on display beside the sentence using
 * it, and it says nothing about the next row.
 */

async function fixture({ list, seed, allowlist = {} }) {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-words-'));
  await mkdir(join(dir, 'lessons'));
  await mkdir(join(dir, 'seeds'));
  await mkdir(join(dir, 'languages'));
  await mkdir(join(dir, 'words'));
  await writeFile(join(dir, 'allowlist.json'), JSON.stringify(allowlist));
  await writeFile(join(dir, 'words', `${list.id}.json`), JSON.stringify(list));
  if (seed) await writeFile(join(dir, 'seeds', `${seed.taskId}.json`), JSON.stringify(seed));
  return new URL(`${pathToFileURL(dir).href}/`);
}

const seed = {
  taskId: 'C.99',
  title: 'A language',
  claims: [{
    id: 'c1',
    text: 'It was released in 1972.',
    type: 'event',
    tokens: ['1972'],
    source: { title: 'a retrospective', url: 'https://example.org', kind: 'primary' },
  }],
  beats: { broke: 'a', fix: 'b', cost: 'c', interview: 'd' },
};

const list = (over = {}) => ({
  id: 'C.99-example',
  languageId: 'C.99',
  lang: 'Example',
  category: 'Systems & Hardware',
  summary: 'A short description of the language this table covers.',
  status: 'traced',
  seed: 'C.99',
  rows: [{
    code: 'SELECT name FROM t;',
    means: 'choose one column from a table',
    consequence: 'The SELECT clause names the columns wanted, and nothing in it says how the rows are found.',
  }],
  ...over,
});

test('a row may name the construct its own code shows', async () => {
  // SELECT appears in the row's code, so the sentence explaining it is not
  // making an unsourced claim by naming it.
  assert.deepEqual(await verifyAll(await fixture({ list: list(), seed })), []);
});

test('a row may not name a construct that is only in another row', async () => {
  const twoRows = list({
    rows: [
      { code: 'SELECT name FROM t;', means: 'choose a column', consequence: 'It names the columns wanted.' },
      { code: 'ORDER BY name;', means: 'sort the result', consequence: 'A SELECT without it has no defined order.' },
    ],
  });
  const problems = await verifyAll(await fixture({ list: twoRows, seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /SELECT/);
});

test('the rule licenses the construct and not a claim made beside it', async () => {
  // The poisoned fixture. Naming the thing on display is fine; asserting a
  // date next to it is exactly what the gate exists to catch.
  const poisoned = list({
    rows: [{
      code: 'SELECT name FROM t;',
      means: 'choose one column',
      consequence: 'The SELECT clause was standardised in 1986.',
    }],
  });
  const problems = await verifyAll(await fixture({ list: poisoned, seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /1986/);
});

test('licensedByRow only licenses what is literally in the code', () => {
  const row = { code: 'malloc(n)' };
  assert.equal(licensedByRow(row, 'malloc'), true);
  assert.equal(licensedByRow(row, 'free'), false);
});

test('an unsourced word list is allowed, and must not name a seed', async () => {
  const clean = await verifyAll(await fixture({ list: list({ status: 'unsourced', seed: undefined }), seed }));
  assert.deepEqual(clean, []);
  const stale = await verifyAll(await fixture({ list: list({ status: 'unsourced' }), seed }));
  assert.equal(stale.length, 1);
  assert.match(stale[0], /gate it or drop the seed/);
});

test('a word list must say which language it belongs to', () => {
  const problems = validateWordList(list({ languageId: undefined }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /languageId/);
});

test('a row must carry all three parts, because two of them are the lesson', () => {
  const problems = validateWordList(list({ rows: [{ code: 'x', means: 'y' }] }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /consequence/);
});

test('rowsOf returns the prose of one row, and never its code', () => {
  const prose = rowsOf(list())[0];
  assert.ok(prose.includes('choose one column'));
  assert.ok(!prose.includes('FROM t'));
});

test('every word list in content is valid and its language exists', async () => {
  const dir = new URL('../content/words/', import.meta.url);
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  } catch {
    return; // nothing migrated yet
  }
  const { loadCurriculum } = await import('../tools/lib/load-curriculum.mjs');
  const { CURRICULUM } = await loadCurriculum();
  const languageIds = new Set(CURRICULUM.languages.map((l) => l.id));
  const offenders = [];

  for (const file of files) {
    const list = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    for (const fault of validateWordList(list)) offenders.push(fault);
    if (!languageIds.has(list.languageId)) {
      offenders.push(`${list.id}: languageId ${list.languageId} is not a language in the chain`);
    }
  }

  assert.deepEqual(offenders, []);
});
