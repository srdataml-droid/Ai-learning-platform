import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyAll } from '../tools/verify.mjs';

async function fixture({ lesson, seed, allowlist = {} }) {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-'));
  await mkdir(join(dir, 'lessons'));
  await mkdir(join(dir, 'seeds'));
  await writeFile(join(dir, 'allowlist.json'), JSON.stringify(allowlist));
  await writeFile(join(dir, 'lessons', `${lesson.id}.json`), JSON.stringify(lesson));
  if (seed) await writeFile(join(dir, 'seeds', `${seed.taskId}.json`), JSON.stringify(seed));
  return new URL(`${pathToFileURL(dir).href}/`);
}

const seed = {
  taskId: 'T.1',
  title: 'A task',
  claims: [{
    id: 'c1', text: 'Multics shipped it', type: 'event', tokens: ['Multics', '1965'],
    source: { title: 'a paper', url: 'https://example.org', kind: 'primary' },
  }],
  beats: { broke: 'a', fix: 'b', cost: 'c', interview: 'd' },
};

const lesson = (over = {}) => ({
  id: 'T.1', trackId: 'T', trackName: 'T', title: 'A task', status: 'traced', seed: 'T.1',
  story: 'Multics shipped it in 1965.',
  beats: { broke: 'x', fix: 'y', cost: 'z', interview: { q: 'q', trap: 't', answer: 'a' } },
  takeaway: 'a takeaway',
  ...over,
});

test('a traced lesson whose atoms are all licensed passes', async () => {
  assert.deepEqual(await verifyAll(await fixture({ lesson: lesson(), seed })), []);
});

test('a traced lesson asserting an unlicensed year fails', async () => {
  const root = await fixture({ lesson: lesson({ story: 'Multics shipped it in 1965, and again in 1988.' }), seed });
  const problems = await verifyAll(root);
  assert.equal(problems.length, 1);
  assert.match(problems[0], /1988/);
});

test('a traced lesson with no seed fails, because the status would be a bare label', async () => {
  const root = await fixture({ lesson: lesson({ seed: undefined }), seed });
  assert.match((await verifyAll(root))[0], /label rather than a fact/);
});

test('a traced lesson naming a seed that does not exist fails', async () => {
  const root = await fixture({ lesson: lesson({ seed: 'MISSING' }), seed });
  assert.match((await verifyAll(root))[0], /does not exist/);
});

test('an unsourced lesson is not gated, so it passes untouched', async () => {
  const root = await fixture({ lesson: lesson({ status: 'unsourced', seed: undefined, story: 'Anything at all, 1742.' }), seed });
  assert.deepEqual(await verifyAll(root), []);
});

test('an unsourced lesson that names a seed fails as a stale status', async () => {
  const root = await fixture({ lesson: lesson({ status: 'unsourced' }), seed });
  assert.match((await verifyAll(root))[0], /gate it or drop the seed/);
});

test('a seed whose claim has no source fails the lesson that leans on it', async () => {
  const broken = JSON.parse(JSON.stringify(seed));
  delete broken.claims[0].source;
  const root = await fixture({ lesson: lesson(), seed: broken });
  assert.ok((await verifyAll(root)).some((p) => /has no source/.test(p)));
});
