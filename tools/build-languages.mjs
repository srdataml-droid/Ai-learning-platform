#!/usr/bin/env node
/**
 * Compile content/languages/*.json into the script the language page loads.
 *
 * A storyline is the chain entry plus the part the site never had: the design
 * decisions the language's constraint forced, each carrying the syntax that is
 * a consequence of it. The word lists remain a flat lookup, which is a useful
 * thing to have; they are just not a story, and the site's whole thesis is
 * that things exist because something broke.
 *
 * Languages with no storyline file return null and the page says so, for the
 * same reason lessons do.
 *
 * A storyline's claims travel with it for the same reason a lesson's do: the
 * status badge asserts provenance, and a badge that cannot be opened is a
 * request to be taken on trust.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';

/** The claims behind one storyline, flattened for the page. */
function sourcesFor(storyline, seedsById) {
  if (!storyline.seed) return null;
  const seed = seedsById[storyline.seed];
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

export function buildLanguagesBundle(storylines, seeds = []) {
  const byId = Object.fromEntries(storylines.map((s) => [s.id, s]));
  const seedsById = Object.fromEntries(seeds.map((s) => [s.taskId, s]));
  const sourcesById = Object.fromEntries(
    storylines.map((s) => [s.id, sourcesFor(s, seedsById)]).filter(([, v]) => v !== null),
  );

  return `// GENERATED FILE — do not edit by hand.
// Source: content/languages/*.json — regenerate with \`npm run build:data\`.
(function () {
  window.CurriculumStorylines = window.CurriculumStorylines || {};

  const STORYLINES = ${JSON.stringify(byId, null, 2)};

  const SOURCES = ${JSON.stringify(sourcesById, null, 2)};

  window.CurriculumStorylines.get = function (languageId) {
    return Object.prototype.hasOwnProperty.call(STORYLINES, languageId) ? STORYLINES[languageId] : null;
  };

  // null, never [] — the same distinction the lessons draw: no seed and a
  // seed holding nothing must not look alike to the page.
  window.CurriculumStorylines.getSources = function (languageId) {
    return Object.prototype.hasOwnProperty.call(SOURCES, languageId) ? SOURCES[languageId] : null;
  };

  window.CurriculumStorylines.has = function (languageId) {
    return Object.prototype.hasOwnProperty.call(STORYLINES, languageId);
  };

  window.CurriculumStorylines.ids = function () {
    return Object.keys(STORYLINES);
  };
})();
`;
}

export async function loadStorylines(dir = new URL('../content/languages/', import.meta.url)) {
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

async function loadSeeds(dir = new URL('../content/seeds/', import.meta.url)) {
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json')).sort();
  return Promise.all(files.map(async (f) => JSON.parse(await readFile(new URL(f, dir), 'utf8'))));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const storylines = await loadStorylines();
  const seeds = await loadSeeds();
  await writeFile(new URL('../public/storylines-data.js', import.meta.url), buildLanguagesBundle(storylines, seeds));
  const gated = storylines.filter((s) => s.status === 'traced' || s.status === 'verified').length;
  console.log(`built public/storylines-data.js from ${storylines.length} storyline(s) | ${gated} carrying sources`);
}
