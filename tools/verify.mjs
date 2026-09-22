#!/usr/bin/env node
/**
 * Run the traceability gate over every lesson and storyline in content/.
 *
 * The rules this enforces, and why each exists:
 *
 *   a lesson claiming `traced` or `verified` must name a seed
 *       — otherwise the status is a label someone typed, not a fact
 *   that seed must itself be valid
 *       — a claim with no source licenses nothing
 *   every atom in the prose must be licensed by that seed
 *       — this is the gate; see tools/lib/gate.mjs
 *   a lesson claiming `unsourced` must NOT name a seed
 *       — if it has a seed it should have been gated, so the status is stale
 *   a lesson claiming `claimless` must contain no checkable atom at all
 *       — the status asserts the prose has nothing to source, and an
 *         assertion about the text is one the machine can settle
 *
 * Nothing here reads for meaning. It cannot tell you a lesson is true. It
 * tells you that every statement in it which could be checked has something
 * behind it, which is a smaller claim and the only one a machine can make.
 *
 * Language storylines go through the identical rules over their own fields.
 * They were outside the gate only because they predate it, and a site that
 * shows a sourced lesson beside an unsourced storyline is making two
 * different promises in the same voice.
 */
import { readdir, readFile } from 'node:fs/promises';
import { checkTraceable } from './lib/gate.mjs';
import { validateSeed, loadAllowlist } from './lib/seed-schema.mjs';
import { validateLesson, proseOf } from './lib/lesson-schema.mjs';
import { validateStoryline, proseOf as storylineProseOf } from './lib/storyline-schema.mjs';

const GATED = ['traced', 'verified'];

/**
 * The gate itself, over one piece of content that has a status and a seed.
 *
 * Lessons and storylines differ in their fields and not at all in what is
 * being promised, so the rules live here once and each caller supplies its
 * own idea of which fields are prose.
 */
async function gate({ item, prose, root, allowlist, problems }) {
  if (!GATED.includes(item.status)) {
    if (item.seed) {
      problems.push(`${item.id}: status is "${item.status}" but it names seed ${item.seed}; gate it or drop the seed`);
    }
    // `claimless` asserts that the prose contains nothing checkable. That is
    // an assertion about the text, so it is checked rather than trusted.
    if (item.status === 'claimless') {
      const { ok, unlicensed } = checkTraceable(prose, { claims: [] }, allowlist);
      if (!ok) {
        problems.push(`${item.id}: status "claimless" but the prose asserts ${unlicensed.length}: ${unlicensed.join(', ')}`);
      }
    }
    return;
  }

  if (!item.seed) {
    problems.push(`${item.id}: status "${item.status}" with no seed, so the status is a label rather than a fact`);
    return;
  }

  let seed;
  try {
    seed = JSON.parse(await readFile(new URL(`seeds/${item.seed}.json`, root), 'utf8'));
  } catch {
    problems.push(`${item.id}: names seed ${item.seed}, which does not exist`);
    return;
  }

  for (const fault of validateSeed(seed)) problems.push(`${item.id}: seed ${item.seed}: ${fault}`);

  const { ok, unlicensed } = checkTraceable(prose, seed, allowlist);
  if (!ok) {
    problems.push(`${item.id}: ${unlicensed.length} unlicensed in prose: ${unlicensed.join(', ')}`);
  }
}

export async function verifyAll(root = new URL('../content/', import.meta.url)) {
  const allowlist = await loadAllowlist(new URL('allowlist.json', root));
  const lessonDir = new URL('lessons/', root);
  const files = (await readdir(lessonDir)).filter((f) => f.endsWith('.json')).sort();
  const problems = [];

  for (const file of files) {
    const lesson = JSON.parse(await readFile(new URL(file, lessonDir), 'utf8'));

    // Shape is checked for every lesson. Traceability only for gated ones.
    for (const fault of validateLesson(lesson)) problems.push(fault);

    await gate({ item: lesson, prose: proseOf(lesson), root, allowlist, problems });
  }

  // The same rules over the language pages. A storyline directory that does
  // not exist is not a failure: the gate reports on what is there.
  let storylineFiles = [];
  const storylineDir = new URL('languages/', root);
  try {
    storylineFiles = (await readdir(storylineDir)).filter((f) => f.endsWith('.json')).sort();
  } catch {
    storylineFiles = [];
  }

  for (const file of storylineFiles) {
    const storyline = JSON.parse(await readFile(new URL(file, storylineDir), 'utf8'));

    for (const fault of validateStoryline(storyline)) problems.push(fault);

    await gate({ item: storyline, prose: storylineProseOf(storyline), root, allowlist, problems });
  }

  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const problems = await verifyAll();
  if (problems.length === 0) {
    console.log('every gated lesson and storyline traces to its sources');
  } else {
    for (const p of problems) console.error(`  ${p}`);
    console.error(`\n${problems.length} problem(s)`);
    process.exitCode = 1;
  }
}
