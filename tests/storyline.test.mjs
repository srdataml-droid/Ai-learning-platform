import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises';
import { readdir, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { verifyAll } from '../tools/verify.mjs';
import { checkTraceable } from '../tools/lib/gate.mjs';
import { validateStoryline, proseOf, STATUSES } from '../tools/lib/storyline-schema.mjs';
import { loadAllowlist } from '../tools/lib/seed-schema.mjs';

/**
 * A storyline is prose about a language's history, so it makes exactly the
 * kind of claim the gate exists for: a machine, a year, a person, a standard.
 * It was outside the gate only because it was written before the gate was,
 * which is a reason it happened and not a reason to leave it there — a page
 * that shows a sourced lesson beside an unsourced storyline is making two
 * different promises in the same voice.
 *
 * So the rules are the lesson's rules, for the same reasons, over different
 * fields. The one deliberate difference is that a syntax example's `code` is
 * not gated, exactly as a lesson's `worked.code` is not: `System.out.println`
 * is a thing you type, not an assertion about the world.
 */

async function fixture({ storyline, seed, allowlist = {} }) {
  const dir = await mkdtemp(join(tmpdir(), 'curriculum-storyline-'));
  await mkdir(join(dir, 'lessons'));
  await mkdir(join(dir, 'seeds'));
  await mkdir(join(dir, 'languages'));
  await writeFile(join(dir, 'allowlist.json'), JSON.stringify(allowlist));
  await writeFile(join(dir, 'languages', `${storyline.id}.json`), JSON.stringify(storyline));
  if (seed) await writeFile(join(dir, 'seeds', `${seed.taskId}.json`), JSON.stringify(seed));
  return new URL(`${pathToFileURL(dir).href}/`);
}

const seed = {
  taskId: 'C.99',
  title: 'A language',
  claims: [{
    id: 'c1',
    text: 'It was written on a PDP-11 in 1972.',
    type: 'event',
    tokens: ['PDP-11', 'PDP', '1972'],
    source: { title: 'a retrospective', url: 'https://example.org', kind: 'primary' },
  }],
  beats: { broke: 'a', fix: 'b', cost: 'c', interview: 'd' },
};

const storyline = (over = {}) => ({
  id: 'C.99',
  name: 'Example',
  status: 'traced',
  seed: 'C.99',
  constraint: 'It had to run on a PDP-11.',
  opening: 'Read the syntax as arithmetic on that constraint.',
  decisions: [{
    decision: 'No runtime underneath it',
    because: 'There was nothing already running to put one in.',
    syntax: [{
      code: 'int *p;',
      means: 'p holds an address',
      consequence: 'Addresses are in the language, so arithmetic on them is unavoidable.',
    }],
  }],
  wall: 'It buys speed with the programmer’s attention.',
  ...over,
});

test('a traced storyline whose atoms are all licensed passes', async () => {
  assert.deepEqual(await verifyAll(await fixture({ storyline: storyline(), seed })), []);
});

test('a traced storyline with an unlicensed atom is rejected', async () => {
  const bad = storyline({ constraint: 'It had to run on a PDP-11 by 1969.' });
  const problems = await verifyAll(await fixture({ storyline: bad, seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /1969/);
});

test('a traced storyline with no seed is rejected, because the status would be a label', async () => {
  const problems = await verifyAll(await fixture({ storyline: storyline({ seed: undefined }), seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /no seed/);
});

test('an unsourced storyline may not name a seed, because it should have been gated', async () => {
  const problems = await verifyAll(await fixture({ storyline: storyline({ status: 'unsourced' }), seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /gate it or drop the seed/);
});

test('a claimless storyline may not assert anything checkable', async () => {
  const bad = storyline({ status: 'claimless', seed: undefined, constraint: 'It had to run on a PDP-11.' });
  const problems = await verifyAll(await fixture({ storyline: bad, seed }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /claimless/);
});

test('the code of a syntax example is not gated, the same way a worked example is not', () => {
  // `System.out.println` is something you type. Gating it would force a claim
  // licensing a token that asserts nothing, which is the gate reading for
  // shape rather than for meaning.
  const withCode = storyline({
    decisions: [{
      decision: 'Everything is inside a class',
      because: 'The unit of code and the unit of loading were made the same thing.',
      syntax: [{ code: 'System.out.println(x);', means: 'print x', consequence: 'the call hangs off a class even to print.' }],
    }],
  });
  assert.ok(!proseOf(withCode).includes('System.out.println'));
});

test('a storyline missing its constraint is rejected, because the constraint is what the rest follows from', () => {
  const problems = validateStoryline(storyline({ constraint: undefined }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /constraint/);
});

test('a decision with no syntax is rejected, because the claim is that syntax is a consequence', () => {
  const problems = validateStoryline(storyline({
    decisions: [{ decision: 'A decision', because: 'A reason', syntax: [] }],
  }));
  assert.equal(problems.length, 1);
  assert.match(problems[0], /syntax/);
});

test('the four statuses are the lesson statuses, not a parallel vocabulary', () => {
  assert.deepEqual(STATUSES, ['unsourced', 'claimless', 'traced', 'verified']);
});

test('every storyline in content is gated and licensed', async () => {
  const allowlist = await loadAllowlist();
  const dir = new URL('../content/languages/', import.meta.url);
  const seedDir = new URL('../content/seeds/', import.meta.url);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  const offenders = [];

  for (const file of files) {
    const story = JSON.parse(await readFile(new URL(file, dir), 'utf8'));
    for (const fault of validateStoryline(story)) offenders.push(fault);
    if (story.status !== 'traced' && story.status !== 'verified') continue;
    const seedFile = JSON.parse(await readFile(new URL(`${story.seed}.json`, seedDir), 'utf8'));
    const { ok, unlicensed } = checkTraceable(proseOf(story), seedFile, allowlist);
    if (!ok) offenders.push(`${story.id}: ${unlicensed.join(', ')}`);
  }

  assert.deepEqual(offenders, []);
});
