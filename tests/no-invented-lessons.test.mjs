import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { loadCurriculum } from '../tools/lib/load-curriculum.mjs';

/**
 * The template that stood in for 243 tasks. Its tell is that it interpolated
 * the task title into fixed sentences, so every lesson made the same claim and
 * asked the same interview question — of "What a file is" and of "Transformers"
 * alike. Nothing in the repo may reintroduce it.
 */
const FALLBACK_TELLS = [
  'represents a critical engineering threshold',
  'transform ad-hoc, error-prone human guesswork',
  'How do you identify and mitigate the primary failure mode',
];

test('no shipped file contains the fallback lesson template', async () => {
  const dirs = [new URL('../public/', import.meta.url), new URL('../', import.meta.url)];
  const offenders = [];

  for (const dir of dirs) {
    for (const file of await readdir(dir)) {
      if (!/\.(js|html|json)$/.test(file)) continue;
      const text = await readFile(new URL(file, dir), 'utf8');
      for (const tell of FALLBACK_TELLS) {
        if (text.includes(tell)) offenders.push(`${file}: "${tell}"`);
      }
    }
  }

  assert.deepEqual(offenders, []);
});

test('a task with no lesson returns null rather than inventing one', async () => {
  const { CURRICULUM, CurriculumLessons } = await loadCurriculum();
  // N.1 is a real task that has never had a lesson written for it.
  const track = CURRICULUM.tracks.find((t) => t.id === 'N');
  assert.ok(track, 'track N exists');
  assert.equal(CurriculumLessons.getLesson(track.tasks[0].id), null);
});

test('every lesson declares a status the site knows how to render', async () => {
  const dir = new URL('../content/lessons/', import.meta.url);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  const allowed = ['unsourced', 'traced', 'verified'];
  const bad = [];

  for (const file of files) {
    const lesson = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    if (!allowed.includes(lesson.status)) bad.push(`${file}: status "${lesson.status}"`);
    if (lesson.id !== file.replace(/\.json$/, '')) bad.push(`${file}: id "${lesson.id}" does not match its filename`);
  }

  assert.deepEqual(bad, []);
  assert.ok(files.length > 0, 'there is at least one lesson');
});
