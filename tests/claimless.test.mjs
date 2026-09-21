import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { extractAtoms, checkTraceable } from '../tools/lib/gate.mjs';
import { proseOf, STATUSES } from '../tools/lib/lesson-schema.mjs';
import { loadAllowlist } from '../tools/lib/seed-schema.mjs';

/**
 * `claimless` exists because `unsourced` was doing two jobs.
 *
 * A lesson about how to debug, or how to plan, or what to look at first, can
 * be complete and correct and still cite nothing — because it asserts nothing
 * that could be false. Marking it `unsourced` said "not checked yet", which
 * implied work outstanding that was never going to be done, and which is a
 * different situation from a history lesson nobody has sourced.
 *
 * The status is only worth having if it cannot be claimed falsely, so it is
 * machine-checked in the same way `traced` is: a `claimless` lesson must
 * contain no checkable atom at all. The moment somebody adds a date or a
 * percentage to one, the suite fails and the status has to be reconsidered.
 * That is the whole point — it is a assertion about the prose, not a label.
 */

test('claimless is a status the site knows about', () => {
  assert.ok(STATUSES.includes('claimless'));
});

test('a claimless lesson may not contain a checkable atom', async () => {
  const allowlist = await loadAllowlist();
  const dir = new URL('../content/lessons/', import.meta.url);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  const offenders = [];

  for (const file of files) {
    const lesson = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    if (lesson.status !== 'claimless') continue;
    const { ok, unlicensed } = checkTraceable(proseOf(lesson), { claims: [] }, allowlist);
    if (!ok) offenders.push(`${lesson.id}: ${unlicensed.join(', ')}`);
  }

  assert.deepEqual(offenders, []);
});

test('a claimless lesson may not name a seed', async () => {
  const dir = new URL('../content/lessons/', import.meta.url);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  const offenders = [];

  for (const file of files) {
    const lesson = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    if (lesson.status === 'claimless' && lesson.seed) offenders.push(lesson.id);
  }

  assert.deepEqual(offenders, []);
});

test('the check rejects a claimless lesson that gained a date', () => {
  // The poisoned fixture. A lesson that was legitimately claimless and then
  // acquired one factual claim must stop passing, or the status is decoration.
  const prose = 'Read the error message before changing anything. This was established in 1976.';
  const { ok, unlicensed } = checkTraceable(prose, { claims: [] }, new Map());
  assert.equal(ok, false);
  assert.ok(unlicensed.includes('1976'));
});

test('the check accepts prose that genuinely asserts nothing checkable', () => {
  const prose = 'Read the error message before changing anything, then reproduce it reliably.';
  assert.deepEqual(extractAtoms(prose), []);
  const { ok } = checkTraceable(prose, { claims: [] }, new Map());
  assert.equal(ok, true);
});
