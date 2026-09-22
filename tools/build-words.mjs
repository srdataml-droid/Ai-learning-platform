#!/usr/bin/env node
/**
 * Compile content/words/*.json into the script the word list page loads.
 *
 * These rows used to live inside public/data.js, which is a hand-maintained
 * blob: they could not be gated, could not be diffed usefully, and could not
 * say where they came from. Moving them into content/ puts them under the
 * same promise as everything else on the site — and makes the honest answer
 * to "is this checked?" visible per language rather than unavailable.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';

/** The claims behind one word list, flattened for the page. */
function sourcesFor(list, seedsById) {
  if (!list.seed) return null;
  const seed = seedsById[list.seed];
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

export function buildWordsBundle(lists, seeds = []) {
  const seedsById = Object.fromEntries(seeds.map((s) => [s.taskId, s]));
  // The anchor lives in the bundle so that the page linking to a table and
  // the page rendering it cannot derive it differently — which they did, and
  // which is why "Its word list" pointed at nothing for half the chain.
  const ordered = [...lists]
    .sort((a, b) => a.lang.localeCompare(b.lang))
    .map((l) => ({ ...l, slug: l.lang.toLowerCase().replace(/[^a-z0-9]/g, '-') }));
  const sourcesById = Object.fromEntries(
    ordered.map((l) => [l.id, sourcesFor(l, seedsById)]).filter(([, v]) => v !== null),
  );

  return `// GENERATED FILE — do not edit by hand.
// Source: content/words/*.json — regenerate with \`npm run build:data\`.
(function () {
  window.CurriculumWords = window.CurriculumWords || {};

  const LISTS = ${JSON.stringify(ordered, null, 2)};

  const SOURCES = ${JSON.stringify(sourcesById, null, 2)};

  window.CurriculumWords.all = function () {
    return LISTS;
  };

  window.CurriculumWords.forLanguage = function (languageId) {
    return LISTS.filter(function (l) { return l.languageId === languageId; });
  };

  // null, never [] — honest absence and empty evidence must not look alike.
  window.CurriculumWords.getSources = function (listId) {
    return Object.prototype.hasOwnProperty.call(SOURCES, listId) ? SOURCES[listId] : null;
  };

  window.CurriculumWords.rowCount = function () {
    return LISTS.reduce(function (n, l) { return n + l.rows.length; }, 0);
  };
})();
`;
}

export async function loadWordLists(dir = new URL('../content/words/', import.meta.url)) {
  let files = [];
  try {
    files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  } catch {
    return [];
  }
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

async function loadSeeds(dir = new URL('../content/seeds/', import.meta.url)) {
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const lists = await loadWordLists();
  const seeds = await loadSeeds();
  await writeFile(new URL('../public/words-data.js', import.meta.url), buildWordsBundle(lists, seeds));
  const rows = lists.reduce((n, l) => n + l.rows.length, 0);
  const gated = lists.filter((l) => l.status === 'traced' || l.status === 'verified').length;
  console.log(`built public/words-data.js from ${lists.length} word list(s), ${rows} rows | ${gated} gated`);
}
