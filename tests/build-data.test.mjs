import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { buildLessonsBundle } from '../tools/build-data.mjs';

const lessons = [
  {
    id: '0.1', trackId: '0', trackName: 'Before any code', title: 'What a file is',
    status: 'unsourced', story: 'A story.',
    beats: { broke: 'b', fix: 'f', cost: 'c', interview: { q: 'q', trap: 't', answer: 'a' } },
    blueprint: '// code', takeaway: 'a takeaway',
  },
];

const CURRICULUM = {
  sequence: ['0'], underneath: [],
  tracks: [{ id: '0', name: 'Before any code', tasks: [{ id: '0.1', text: 'a' }, { id: '0.2', text: 'b' }] }],
  languages: [],
};

function run(bundle) {
  const context = vm.createContext({ window: { CURRICULUM }, console });
  new vm.Script(bundle, { filename: 'lessons-data.js' }).runInContext(context);
  return context.window.CurriculumLessons;
}

test('the bundle says it is generated', () => {
  assert.match(buildLessonsBundle(lessons), /GENERATED FILE/);
});

test('returns a lesson by id', () => {
  const api = run(buildLessonsBundle(lessons));
  assert.equal(api.getLesson('0.1').title, 'What a file is');
});

test('returns null for a task with no lesson, rather than inventing one', () => {
  const api = run(buildLessonsBundle(lessons));
  assert.equal(api.getLesson('0.2'), null);
});

test('carries the status through to the page', () => {
  const api = run(buildLessonsBundle(lessons));
  assert.equal(api.getLesson('0.1').status, 'unsourced');
});

test('adjacent lessons walk the curriculum order', () => {
  const api = run(buildLessonsBundle(lessons));
  // Compared field by field: the bundle runs in a VM realm, so its objects
  // have a different prototype and deepStrictEqual rejects them on that alone.
  const { prev, next } = api.getAdjacentLessons('0.2');
  assert.equal(prev, '0.1');
  assert.equal(next, null);
});

test('reports which tasks have a lesson, so pages can mark them', () => {
  const api = run(buildLessonsBundle(lessons));
  assert.equal(api.hasLesson('0.1'), true);
  assert.equal(api.hasLesson('0.2'), false);
});

/**
 * Sources on the page.
 *
 * The badge said "sources traced" and the page showed none, which asks the
 * reader to take the provenance on trust — the one thing this pipeline exists
 * not to do. The claim travels with the source deliberately: a bare list of
 * urls proves nothing, because the checkable thing is the sentence, and the
 * source is only evidence for that sentence.
 */
const seeds = [
  {
    taskId: 'C.1',
    title: 'A seeded task',
    claims: [
      {
        id: 'c1',
        text: 'EDSAC ran its first program on May 6, 1949.',
        type: 'date',
        tokens: ['EDSAC', '1949'],
        source: { title: 'A lab document', url: 'https://example.invalid/edsac', kind: 'primary' },
      },
      {
        id: 'c2',
        text: 'The initial orders occupied locations 0 to 30.',
        type: 'event',
        tokens: ['EDSAC'],
        source: { title: 'The same lab document', url: 'https://example.invalid/edsac', kind: 'secondary' },
      },
    ],
  },
];

const seededLesson = {
  id: 'C.1', trackId: 'C', trackName: 'Languages', title: 'Machine code',
  status: 'traced', seed: 'C.1', story: 'A story.',
  beats: { broke: 'b', fix: 'f', cost: 'c', interview: { q: 'q', trap: 't', answer: 'a' } },
  takeaway: 'a takeaway',
};

test('a gated lesson resolves to the claims and the sources behind them', () => {
  const api = run(buildLessonsBundle([seededLesson], seeds));
  const sources = api.getSources('C.1');
  assert.equal(sources.length, 2);
  assert.equal(sources[0].claim, 'EDSAC ran its first program on May 6, 1949.');
  assert.equal(sources[0].title, 'A lab document');
  assert.equal(sources[0].url, 'https://example.invalid/edsac');
  assert.equal(sources[0].kind, 'primary');
});

test('every claim is carried, not just the distinct sources', () => {
  const api = run(buildLessonsBundle([seededLesson], seeds));
  // Both claims lean on the same url. Collapsing them would drop a checkable
  // sentence, which is the part a reader can actually argue with.
  const sources = api.getSources('C.1');
  assert.equal(sources.length, 2);
  assert.equal(sources[0].url, sources[1].url);
});

test('a lesson with no seed has no sources, rather than an empty list that reads as checked', () => {
  const api = run(buildLessonsBundle(lessons, seeds));
  assert.equal(api.getSources('0.1'), null);
});

test('a lesson naming a seed that does not exist has no sources rather than throwing', () => {
  const orphan = { ...seededLesson, id: 'C.2', seed: 'C.99' };
  const api = run(buildLessonsBundle([orphan], seeds));
  assert.equal(api.getSources('C.2'), null);
});

test('a task with no lesson at all has no sources', () => {
  const api = run(buildLessonsBundle([seededLesson], seeds));
  assert.equal(api.getSources('Z.9'), null);
});

test('every gated lesson in the shipped bundle resolves to its sources', async () => {
  // This is the test that makes the provenance badge mean something. Without
  // it "sources traced" is a string someone typed; with it, a lesson cannot
  // claim traced status in what ships unless the evidence ships too.
  const { loadCurriculum } = await import('../tools/lib/load-curriculum.mjs');
  const { CURRICULUM, CurriculumLessons } = await loadCurriculum();

  const missing = [];
  for (const track of CURRICULUM.tracks) {
    for (const task of track.tasks) {
      const lesson = CurriculumLessons.getLesson(task.id);
      // Gated means traced or verified. `claimless` ships without sources by
      // definition — it asserts there is nothing to source — and `unsourced`
      // has not been through the gate at all.
      if (!lesson || !['traced', 'verified'].includes(lesson.status)) continue;
      const sources = CurriculumLessons.getSources(task.id);
      if (!sources || sources.length === 0) missing.push(task.id);
    }
  }

  assert.deepEqual(missing, [], `gated lessons shipping with no sources: ${missing.join(', ')}`);
});
