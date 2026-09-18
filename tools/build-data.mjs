#!/usr/bin/env node
/**
 * Compile content/lessons/*.json into the script the pages load.
 *
 * The site stays static and dependency-free at runtime: no fetch of 313 files,
 * no model call, no server. Content is data in git — diffable, revertible,
 * greppable — and this turns it into one committed bundle.
 *
 * What this deliberately does NOT contain is a fallback generator. The old one
 * produced the same six paragraphs for 243 tasks with the title interpolated
 * in, which reads as an explanation and contains no fact. A task with no
 * lesson now returns null, and the page says so.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';

/**
 * The claims behind one lesson, flattened for the page.
 *
 * Each entry keeps the claim beside its source, because the claim is the part
 * a reader can check and the source is only evidence for that sentence. Two
 * claims leaning on the same url stay two entries for the same reason:
 * collapsing them would show the evidence and hide what it was evidence for.
 */
function sourcesFor(lesson, seedsById) {
  if (!lesson.seed) return null;
  const seed = seedsById[lesson.seed];
  if (!seed) return null;
  return (seed.claims ?? [])
    .filter((claim) => claim.source)
    .map((claim) => ({
      claim: claim.text,
      title: claim.source.title,
      url: claim.source.url,
      kind: claim.source.kind,
    }));
}

export function buildLessonsBundle(lessons, seeds = []) {
  const byId = Object.fromEntries(lessons.map((l) => [l.id, l]));
  const seedsById = Object.fromEntries(seeds.map((s) => [s.taskId, s]));
  const sourcesById = Object.fromEntries(
    lessons.map((l) => [l.id, sourcesFor(l, seedsById)]).filter(([, v]) => v !== null),
  );

  return `// GENERATED FILE — do not edit by hand.
// Source: content/lessons/*.json — regenerate with \`npm run build:data\`.
//
// There is no fallback lesson generator here, on purpose. A task with no
// lesson returns null and the page renders "not written yet". Confident prose
// containing no fact is worse than a blank space: it is indistinguishable
// from a real lesson until you have already believed it.
(function () {
  window.CurriculumLessons = window.CurriculumLessons || {};

  const LESSONS = ${JSON.stringify(byId, null, 2)};

  const SOURCES = ${JSON.stringify(sourcesById, null, 2)};

  // null, never [] — "no seed" and "a seed with nothing in it" must not look
  // the same to the page, because one is honest absence and the other would
  // render as a checked lesson with no evidence.
  window.CurriculumLessons.getSources = function (taskId) {
    return Object.prototype.hasOwnProperty.call(SOURCES, taskId) ? SOURCES[taskId] : null;
  };

  window.CurriculumLessons.getLesson = function (taskId) {
    return Object.prototype.hasOwnProperty.call(LESSONS, taskId) ? LESSONS[taskId] : null;
  };

  window.CurriculumLessons.hasLesson = function (taskId) {
    return Object.prototype.hasOwnProperty.call(LESSONS, taskId);
  };

  window.CurriculumLessons.countByStatus = function () {
    const counts = { unsourced: 0, traced: 0, verified: 0 };
    for (const id in LESSONS) counts[LESSONS[id].status] = (counts[LESSONS[id].status] || 0) + 1;
    return counts;
  };

  window.CurriculumLessons.getAdjacentLessons = function (taskId) {
    if (!window.CURRICULUM || !window.CURRICULUM.tracks) return { prev: null, next: null };

    const order = [];
    const trackIds = [...window.CURRICULUM.sequence, ...window.CURRICULUM.underneath];
    trackIds.forEach(function (id) {
      const track = window.CURRICULUM.tracks.find(function (t) { return t.id === id; });
      if (track && track.tasks) track.tasks.forEach(function (task) { order.push(task.id); });
    });

    const at = order.indexOf(taskId);
    if (at === -1) return { prev: null, next: null };
    return {
      prev: at > 0 ? order[at - 1] : null,
      next: at < order.length - 1 ? order[at + 1] : null,
    };
  };
})();
`;
}

async function loadJsonDir(dir) {
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

export async function loadLessons(dir = new URL('../content/lessons/', import.meta.url)) {
  return loadJsonDir(dir);
}

export async function loadSeeds(dir = new URL('../content/seeds/', import.meta.url)) {
  return loadJsonDir(dir);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [lessons, seeds] = await Promise.all([loadLessons(), loadSeeds()]);
  const out = new URL('../public/lessons-data.js', import.meta.url);
  await writeFile(out, buildLessonsBundle(lessons, seeds));
  const byStatus = lessons.reduce((acc, l) => ({ ...acc, [l.status]: (acc[l.status] || 0) + 1 }), {});
  const sourced = lessons.filter((l) => l.seed).length;
  console.log(`built public/lessons-data.js from ${lessons.length} lessons:`, byStatus, `| ${sourced} carrying sources`);
}
