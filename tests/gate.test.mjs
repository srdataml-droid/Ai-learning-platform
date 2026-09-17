import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractAtoms, checkTraceable } from '../tools/lib/gate.mjs';

const seed = {
  taskId: '0.1',
  title: 'What a file is, what a folder is',
  claims: [
    {
      id: 'c1',
      text: 'Multics introduced a hierarchical file system',
      type: 'event',
      tokens: ['Multics', '1965'],
      source: { title: 'Daley & Neumann FJCC 1965', url: 'https://multicians.org/fjcc4.html', kind: 'primary' },
    },
    {
      id: 'c2',
      text: 'Unix was created by Ken Thompson and Dennis Ritchie',
      type: 'person',
      tokens: ['Unix', '1971', 'Ken Thompson', 'Dennis Ritchie'],
      source: { title: 'The Unix Time-Sharing System, CACM 1974', url: 'https://example.org/unix', kind: 'primary' },
    },
  ],
};

const allowlist = new Map([['CPU', 'a category of hardware, not a claim']]);

test('extracts years from prose', () => {
  assert.deepEqual(extractAtoms('It shipped in 1965 and again in 1971.'), ['1965', '1971']);
});

test('extracts acronyms', () => {
  assert.ok(extractAtoms('The CACM paper described it.').includes('CACM'));
});

test('extracts multi-word proper nouns', () => {
  assert.ok(extractAtoms('Written by Ken Thompson at Bell Labs.').includes('Ken Thompson'));
});

test('does not treat a sentence-initial capital as a proper noun', () => {
  assert.deepEqual(extractAtoms('Files are named. Folders are indexes.'), []);
});

test('prose whose every atom is licensed passes', () => {
  const prose = 'In 1965 Multics introduced it, and Unix followed in 1971 under Ken Thompson and Dennis Ritchie.';
  assert.deepEqual(checkTraceable(prose, seed, allowlist), { ok: true, unlicensed: [] });
});

test('a year absent from every claim is unlicensed', () => {
  const prose = 'In 1965 Multics introduced it, and by 1978 everyone had copied it.';
  assert.deepEqual(checkTraceable(prose, seed, allowlist), { ok: false, unlicensed: ['1978'] });
});

test('a proper noun absent from every claim is unlicensed', () => {
  const prose = 'In 1965 Multics introduced it, following work by Grace Hopper.';
  assert.deepEqual(checkTraceable(prose, seed, allowlist), { ok: false, unlicensed: ['Grace Hopper'] });
});

test('a token present only in the allowlist passes', () => {
  const prose = 'In 1965 Multics introduced it, and the CPU never had to know.';
  assert.deepEqual(checkTraceable(prose, seed, allowlist), { ok: true, unlicensed: [] });
});

test("the task's own title never counts as a violation", () => {
  const seedWithTitle = { ...seed, title: 'Dennis Ritchie and the Bell Labs years' };
  const prose = 'Bell Labs is where it happened, in 1971.';
  assert.deepEqual(checkTraceable(prose, seedWithTitle, allowlist), { ok: true, unlicensed: [] });
});

test('POISONED FIXTURE: one digit changed in a licensed year is caught', () => {
  const honest = 'Multics introduced the hierarchical file system in 1965.';
  const poisoned = 'Multics introduced the hierarchical file system in 1966.';
  assert.equal(checkTraceable(honest, seed, allowlist).ok, true);
  const result = checkTraceable(poisoned, seed, allowlist);
  assert.equal(result.ok, false, 'a gate that accepts a falsified year is theatre');
  assert.deepEqual(result.unlicensed, ['1966']);
});

test('POISONED FIXTURE: an invented figure is caught', () => {
  const poisoned = 'Multics introduced it in 1965, cutting seek times by 40%.';
  assert.deepEqual(checkTraceable(poisoned, seed, allowlist), { ok: false, unlicensed: ['40%'] });
});

test('a unit never binds to a number on an earlier line', () => {
  // Regression: with \s* as the separator the figure pattern ran "1965."
  // across a paragraph break into an "x" in the next field and produced the
  // atom "1965.\n\nx", which no claim could license and no author could fix.
  const atoms = extractAtoms('Multics shipped it in 1965.\n\nx marks a different field entirely.');
  assert.ok(!atoms.some((a) => a.includes('\n')), `no atom may span a line break: ${JSON.stringify(atoms)}`);
  assert.ok(atoms.includes('1965'));
});

test('a figure with a unit beside it is still caught', () => {
  assert.ok(extractAtoms('It cut latency to 40 ms.').includes('40 ms'));
  assert.ok(extractAtoms('A 3x speedup.').includes('3x'));
  assert.ok(extractAtoms('Costing $2M a year.').includes('$2M'));
});
