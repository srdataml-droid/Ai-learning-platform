#!/usr/bin/env node
/**
 * Compile content/comparisons/*.json into the script compare.html loads.
 *
 * A comparison belongs to a task — C.27.6 asks for the same program in three
 * languages — so the bundle is keyed by both, and the lesson page can ask
 * whether the exercise it sets has a worked version to read afterwards.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';

export function buildComparisonsBundle(comparisons) {
  const ordered = [...comparisons].sort((a, b) => a.id.localeCompare(b.id));
  const byId = Object.fromEntries(ordered.map((c) => [c.id, c]));
  const byTask = {};
  for (const c of ordered) {
    if (!c.taskId) continue;
    (byTask[c.taskId] ??= []).push(c.id);
  }

  return `// GENERATED FILE — do not edit by hand.
// Source: content/comparisons/*.json — regenerate with \`npm run build:data\`.
(function () {
  window.CurriculumComparisons = window.CurriculumComparisons || {};

  const COMPARISONS = ${JSON.stringify(byId, null, 2)};

  const BY_TASK = ${JSON.stringify(byTask, null, 2)};

  window.CurriculumComparisons.get = function (id) {
    return Object.prototype.hasOwnProperty.call(COMPARISONS, id) ? COMPARISONS[id] : null;
  };

  window.CurriculumComparisons.all = function () {
    return Object.keys(COMPARISONS).map(function (id) { return COMPARISONS[id]; });
  };

  // null, never [] — a task with no comparison and a task with an empty one
  // must not look the same to the page.
  window.CurriculumComparisons.forTask = function (taskId) {
    return Object.prototype.hasOwnProperty.call(BY_TASK, taskId) ? BY_TASK[taskId] : null;
  };
})();
`;
}

export async function loadComparisons(dir = new URL('../content/comparisons/', import.meta.url)) {
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  } catch {
    return [];
  }
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const comparisons = await loadComparisons();
  await writeFile(new URL('../public/comparisons-data.js', import.meta.url), buildComparisonsBundle(comparisons));
  const impls = comparisons.reduce((n, c) => n + c.implementations.length, 0);
  console.log(`built public/comparisons-data.js from ${comparisons.length} comparison(s), ${impls} implementations`);
}
