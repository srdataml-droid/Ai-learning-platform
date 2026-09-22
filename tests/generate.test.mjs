import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, readFile, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { draftLesson, promptFor } from '../tools/generate.mjs';

/**
 * The generator is the one part of this pipeline that can put prose nobody
 * wrote into content/, so the test that matters is the refusal.
 *
 * verify.mjs says there is no status for "failed the gate", because such a
 * lesson is never written. That sentence is only true if the generator
 * enforces it — otherwise the failed draft lands on disk, someone edits it
 * into shape, and the gate becomes a thing you run afterwards rather than a
 * condition of existing.
 */

async function fixture({ seed, lessons = {} }) {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-generate-'));
  await mkdir(join(dir, 'lessons'));
  await mkdir(join(dir, 'seeds'));
  await writeFile(join(dir, 'allowlist.json'), JSON.stringify({}));
  await writeFile(join(dir, 'seeds', `${seed.taskId}.json`), JSON.stringify(seed));
  for (const [id, lesson] of Object.entries(lessons)) {
    await writeFile(join(dir, 'lessons', `${id}.json`), JSON.stringify(lesson));
  }
  return new URL(`${pathToFileURL(dir).href}/`);
}

const seed = {
  taskId: 'T.1',
  title: 'A task about Multics',
  claims: [{
    id: 'c1',
    text: 'Multics introduced a hierarchical file system in 1965.',
    type: 'event',
    tokens: ['Multics', '1965'],
    source: { title: 'a paper', url: 'https://example.org', kind: 'primary' },
  }],
  beats: { broke: 'a', fix: 'b', cost: 'c', interview: 'd' },
};

const task = { id: 'T.1', text: 'A task about Multics', trackId: 'T', trackName: 'Test track' };

const goodLesson = {
  id: 'T.1', trackId: 'T', trackName: 'Test track', title: 'A task about Multics',
  status: 'traced', seed: 'T.1',
  story: 'Multics introduced a hierarchical file system in 1965, and everything after it inherited the idea.',
  beats: { broke: 'x', fix: 'y', cost: 'z', interview: { q: 'q', trap: 't', answer: 'a' } },
  takeaway: 'a takeaway',
};

test('a draft whose atoms are all licensed is written', async () => {
  const root = await fixture({ seed });
  const result = await draftLesson({ task, root, ask: async () => JSON.stringify(goodLesson) });

  assert.equal(result.written, true);
  assert.deepEqual(result.problems, []);
  const onDisk = JSON.parse(await readFile(new URL('lessons/T.1.json', root), 'utf8'));
  assert.equal(onDisk.id, 'T.1');
});

test('a draft that asserts something unlicensed is NOT written', async () => {
  const root = await fixture({ seed });
  const invented = { ...goodLesson, story: 'Multics introduced it in 1965, and Unix followed in 1971.' };
  const result = await draftLesson({ task, root, ask: async () => JSON.stringify(invented) });

  assert.equal(result.written, false);
  assert.ok(result.problems.some((p) => /1971/.test(p)), result.problems.join(' | '));

  // The important half: nothing reached content/.
  const files = await readdir(new URL('lessons/', root));
  assert.deepEqual(files, []);
});

test('a draft that is not valid JSON is a reported failure, not a crash', async () => {
  const root = await fixture({ seed });
  const result = await draftLesson({ task, root, ask: async () => 'I would be happy to help!' });

  assert.equal(result.written, false);
  assert.ok(result.problems.some((p) => /JSON/i.test(p)));
});

test('a draft missing a required field is refused by the schema, before the gate', async () => {
  const root = await fixture({ seed });
  const { takeaway, ...noTakeaway } = goodLesson;
  const result = await draftLesson({ task, root, ask: async () => JSON.stringify({ ...noTakeaway, beats: undefined }) });

  assert.equal(result.written, false);
  assert.ok(result.problems.length > 0);
});

test('an existing lesson is not overwritten unless asked', async () => {
  const root = await fixture({ seed, lessons: { 'T.1': { ...goodLesson, story: 'the existing one' } } });
  const result = await draftLesson({ task, root, ask: async () => JSON.stringify(goodLesson) });

  assert.equal(result.written, false);
  assert.ok(result.problems.some((p) => /exists/.test(p)));

  const kept = JSON.parse(await readFile(new URL('lessons/T.1.json', root), 'utf8'));
  assert.equal(kept.story, 'the existing one');
});

test('the prompt states the licensed tokens, because that is the binding instruction', () => {
  const prompt = promptFor({ task, seed });
  assert.ok(prompt.includes('Multics'));
  assert.ok(prompt.includes('1965'));
  assert.ok(/may not/i.test(prompt));
});

test('the prompt carries the seed claims and their sources', () => {
  const prompt = promptFor({ task, seed });
  assert.ok(prompt.includes('hierarchical file system'));
  assert.ok(prompt.includes('https://example.org'));
});

test('a failure to reach the model is not reported as a bad draft', async () => {
  const root = await fixture({ seed });
  const boom = new Error('No GEMINI_API_KEY in the environment');
  await assert.rejects(
    () => draftLesson({ task, root, ask: async () => { throw boom; } }),
    /GEMINI_API_KEY/,
  );
});
