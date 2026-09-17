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

export function buildLessonsBundle(lessons) {
  const byId = Object.fromEntries(lessons.map((l) => [l.id, l]));

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

export async function loadLessons(dir = new URL('../content/lessons/', import.meta.url)) {
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const lessons = await loadLessons();
  const out = new URL('../public/lessons-data.js', import.meta.url);
  await writeFile(out, buildLessonsBundle(lessons));
  const byStatus = lessons.reduce((acc, l) => ({ ...acc, [l.status]: (acc[l.status] || 0) + 1 }), {});
  console.log(`built public/lessons-data.js from ${lessons.length} lessons:`, byStatus);
}
