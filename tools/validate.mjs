#!/usr/bin/env node
import { loadCurriculum } from './lib/load-curriculum.mjs';

/**
 * Check that the curriculum data refers only to things that exist.
 * Returns one human-readable string per problem; empty means sound.
 */
export function validate({ CURRICULUM }) {
  const problems = [];
  const trackIds = new Set(CURRICULUM.tracks.map((t) => t.id));

  const seenTaskIds = new Set();
  for (const track of CURRICULUM.tracks) {
    for (const task of track.tasks) {
      if (seenTaskIds.has(task.id)) problems.push(`duplicate task id: ${task.id}`);
      seenTaskIds.add(task.id);
    }
  }

  for (const stage of CURRICULUM.stages) {
    for (const id of stage.trackIds) {
      if (!trackIds.has(id)) problems.push(`stage ${stage.id} lists track ${id}, which does not exist`);
    }
  }

  const reachable = new Set([...CURRICULUM.sequence, ...CURRICULUM.underneath]);
  for (const track of CURRICULUM.tracks) {
    if (!reachable.has(track.id)) {
      problems.push(`track ${track.id} is in neither sequence nor underneath, so it is unreachable`);
    }
  }

  const languageIds = new Set(CURRICULUM.languages.map((l) => l.id));
  for (const language of CURRICULUM.languages) {
    if (language.leadsTo && !languageIds.has(language.leadsTo)) {
      problems.push(`language ${language.id} leadsTo ${language.leadsTo}, which does not exist`);
    }
    if (!seenTaskIds.has(language.id)) {
      problems.push(`language ${language.id} has no matching task in track C`);
    }
  }

  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const problems = validate(await loadCurriculum());
  if (problems.length === 0) {
    console.log('curriculum data is sound');
  } else {
    for (const p of problems) console.error(`  ${p}`);
    console.error(`\n${problems.length} problem(s)`);
    process.exitCode = 1;
  }
}
