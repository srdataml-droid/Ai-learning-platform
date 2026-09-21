import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateLesson, STATUSES } from '../tools/lib/lesson-schema.mjs';

const base = () => ({
  id: 'E.19', trackId: 'E', trackName: 'Data structures and algorithms',
  title: 'Shortest path', status: 'unsourced',
  story: 'a story', takeaway: 'a takeaway', blueprint: '// code',
  beats: { broke: 'b', fix: 'f', cost: 'c', interview: { q: 'q', trap: 't', answer: 'a' } },
});

const problem = () => ({
  name: 'Single-source shortest path',
  aka: ['SSSP'],
  shape: 'cheapest route from one origin to every other node',
  tell: ['a weighted graph', 'asking for cheapest rather than fewest hops'],
  move: 'always settle the nearest unsettled node next',
  invariant: 'a settled node has its final distance and can never improve',
  cost: { time: 'O((V+E) log V)', space: 'O(V)', beats: 'checking every path, which is exponential' },
  breaks: 'negative edge weights, which void the settling invariant',
  worked: { problem: 'a small graph', reasoning: 'settle in order', code: 'dijkstra()' },
  practice: 'do it on a grid with terrain costs',
});

test('a lesson with no problem block is valid', () => {
  assert.deepEqual(validateLesson(base()), []);
});

test('a complete problem block is valid', () => {
  assert.deepEqual(validateLesson({ ...base(), problem: problem() }), []);
});

test('a problem block must name the problem, because the name is how you find the prior art', () => {
  const p = problem();
  delete p.name;
  assert.deepEqual(validateLesson({ ...base(), problem: p }), ['E.19: problem block has no name; the named term is how a reader finds the prior art']);
});

test('a problem block must state its invariant', () => {
  const p = problem();
  delete p.invariant;
  assert.deepEqual(validateLesson({ ...base(), problem: p }), ['E.19: problem block has no invariant; without it the technique is a recipe rather than a choice']);
});

test('a problem block must state what breaks it', () => {
  const p = problem();
  delete p.breaks;
  assert.deepEqual(validateLesson({ ...base(), problem: p }), ['E.19: problem block has no breaks; a technique with no stated failure condition will be misapplied']);
});

test('tell must be a non-empty list of signals', () => {
  const p = problem();
  p.tell = [];
  assert.deepEqual(validateLesson({ ...base(), problem: p }), ['E.19: problem block has an empty tell; recognising when to reach for it is the skill']);
});

test('cost must state time', () => {
  const p = problem();
  delete p.cost.time;
  assert.deepEqual(validateLesson({ ...base(), problem: p }), ['E.19: problem block cost has no time']);
});

test('reports a lesson missing its beats', () => {
  const l = base();
  delete l.beats.cost;
  assert.deepEqual(validateLesson(l), ['E.19: missing beat "cost"']);
});

test('reports an unknown status, and names the ones that exist', () => {
  // Derived from STATUSES rather than pinned: adding a status is a deliberate
  // act, and it should not also require editing an unrelated expectation.
  assert.deepEqual(
    validateLesson({ ...base(), status: 'probably-fine' }),
    [`E.19: status "probably-fine" is not one of ${STATUSES.join(', ')}`],
  );
});

test('collects several faults at once', () => {
  const p = problem();
  delete p.name;
  delete p.breaks;
  assert.equal(validateLesson({ ...base(), problem: p }).length, 2);
});
