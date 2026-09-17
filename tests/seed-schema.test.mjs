import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateSeed, validateAllowlist } from '../tools/lib/seed-schema.mjs';

const sound = {
  taskId: '0.1',
  title: 'What a file is, what a folder is',
  researchedAt: '2026-09-17',
  claims: [
    {
      id: 'c1',
      text: 'Multics introduced a hierarchical file system',
      type: 'event',
      tokens: ['Multics', '1965'],
      source: { title: 'Daley & Neumann, FJCC 1965', url: 'https://multicians.org/fjcc4.html', kind: 'primary' },
    },
  ],
  beats: { broke: 'a', fix: 'b', cost: 'c', interview: 'd' },
};

const clone = (over = {}) => JSON.parse(JSON.stringify({ ...sound, ...over }));

test('a sound seed reports nothing', () => {
  assert.deepEqual(validateSeed(sound), []);
});

test('reports a claim with no source', () => {
  const seed = clone();
  delete seed.claims[0].source;
  assert.deepEqual(validateSeed(seed), ['claim c1 has no source']);
});

test('reports a source with no url', () => {
  const seed = clone();
  delete seed.claims[0].source.url;
  assert.deepEqual(validateSeed(seed), ['claim c1 has a source with no url']);
});

test('reports a claim that licenses no tokens', () => {
  const seed = clone();
  seed.claims[0].tokens = [];
  assert.deepEqual(validateSeed(seed), ['claim c1 licenses no tokens, so it cannot license any prose']);
});

test('reports a claim type outside the enum', () => {
  const seed = clone();
  seed.claims[0].type = 'vibe';
  assert.deepEqual(validateSeed(seed), ['claim c1 has type "vibe", which is not one of date, person, number, event, quote']);
});

test('reports a seed with no claims at all', () => {
  const seed = clone({ claims: [] });
  assert.deepEqual(validateSeed(seed), ['seed 0.1 has no claims, so no prose can be licensed']);
});

test('reports a missing beat', () => {
  const seed = clone();
  delete seed.beats.cost;
  assert.deepEqual(validateSeed(seed), ['seed 0.1 is missing beat "cost"']);
});

test('an allowlist entry without a reason is rejected', () => {
  assert.deepEqual(
    validateAllowlist({ CPU: { reason: 'a unit of hardware, not a sourced claim' }, GPU: {} }),
    ['allowlist entry "GPU" has no reason; an allowlist without arguments turns the gate into theatre'],
  );
});
