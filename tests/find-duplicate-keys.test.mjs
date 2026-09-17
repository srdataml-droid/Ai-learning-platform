import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findDuplicateKeys } from '../tools/lib/find-duplicate-keys.mjs';

test('reports nothing when every key is unique', () => {
  const src = `const o = {\n  "a": { x: 1 },\n  "b": { x: 2 }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('reports a key that appears twice at the target depth', () => {
  const src = `const o = {\n  "a": { x: 1 },\n  "b": { x: 2 },\n  "a": { x: 3 }\n};`;
  const dupes = findDuplicateKeys(src, { depth: 1 });
  assert.equal(dupes.length, 1);
  assert.equal(dupes[0].key, 'a');
  assert.deepEqual(dupes[0].occurrences, [2, 4]);
});

test('ignores repeated keys nested deeper than the target depth', () => {
  const src = `const o = {\n  "a": { "q": 1, "r": 2 },\n  "b": { "q": 3, "r": 4 }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores braces and quotes inside template literals', () => {
  const src = 'const o = {\n  "a": { s: `a } brace and a "quote" and ${x}` },\n  "b": { s: `x` }\n};';
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores braces inside ordinary strings', () => {
  const src = `const o = {\n  "a": { s: "} not a real brace" },\n  "b": { s: 'also } not one' }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('ignores a colon inside a string that looks like a key', () => {
  const src = `const o = {\n  "a": { s: "b\\": fake" },\n  "b": { s: "" }\n};`;
  assert.deepEqual(findDuplicateKeys(src, { depth: 1 }), []);
});

test('lessons-data.js declares every lesson key exactly once', async () => {
  const { readFile } = await import('node:fs/promises');
  const src = await readFile(new URL('../lessons-data.js', import.meta.url), 'utf8');
  const dupes = findDuplicateKeys(src, { depth: 2 });
  assert.deepEqual(dupes.map((d) => d.key), [], 'duplicate keys silently discard the earlier lesson');
});
