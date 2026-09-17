#!/usr/bin/env node
/**
 * Run the traceability gate over every lesson in content/.
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
 *
 * Nothing here reads for meaning. It cannot tell you a lesson is true. It
 * tells you that every statement in it which could be checked has something
 * behind it, which is a smaller claim and the only one a machine can make.
 */
import { readdir, readFile } from 'node:fs/promises';
import { checkTraceable } from './lib/gate.mjs';
import { validateSeed, loadAllowlist } from './lib/seed-schema.mjs';

const GATED = ['traced', 'verified'];

export function proseOf(lesson) {
  const interview = lesson.beats?.interview ?? {};
  return [
    lesson.story,
    lesson.beats?.broke,
    lesson.beats?.fix,
    lesson.beats?.cost,
    interview.q,
    interview.trap,
    interview.answer,
    lesson.takeaway,
  ]
    .filter(Boolean)
    .join('\n\n');
}

export async function verifyAll(root = new URL('../content/', import.meta.url)) {
  const allowlist = await loadAllowlist(new URL('allowlist.json', root));
  const lessonDir = new URL('lessons/', root);
  const files = (await readdir(lessonDir)).filter((f) => f.endsWith('.json')).sort();
  const problems = [];

  for (const file of files) {
    const lesson = JSON.parse(await readFile(new URL(file, lessonDir), 'utf8'));

    if (!GATED.includes(lesson.status)) {
      if (lesson.seed) {
        problems.push(`${lesson.id}: status is "${lesson.status}" but it names seed ${lesson.seed}; gate it or drop the seed`);
      }
      continue;
    }

    if (!lesson.seed) {
      problems.push(`${lesson.id}: status "${lesson.status}" with no seed, so the status is a label rather than a fact`);
      continue;
    }

    let seed;
    try {
      seed = JSON.parse(await readFile(new URL(`seeds/${lesson.seed}.json`, root), 'utf8'));
    } catch {
      problems.push(`${lesson.id}: names seed ${lesson.seed}, which does not exist`);
      continue;
    }

    for (const fault of validateSeed(seed)) problems.push(`${lesson.id}: seed ${lesson.seed}: ${fault}`);

    const { ok, unlicensed } = checkTraceable(proseOf(lesson), seed, allowlist);
    if (!ok) {
      problems.push(`${lesson.id}: ${unlicensed.length} unlicensed in prose: ${unlicensed.join(', ')}`);
    }
  }

  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const problems = await verifyAll();
  if (problems.length === 0) {
    console.log('every gated lesson traces to its sources');
  } else {
    for (const p of problems) console.error(`  ${p}`);
    console.error(`\n${problems.length} problem(s)`);
    process.exitCode = 1;
  }
}
