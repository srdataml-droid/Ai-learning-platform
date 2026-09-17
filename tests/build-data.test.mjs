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
