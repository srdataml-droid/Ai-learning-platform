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
