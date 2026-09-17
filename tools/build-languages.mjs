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
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';

export function buildLanguagesBundle(storylines) {
  const byId = Object.fromEntries(storylines.map((s) => [s.id, s]));

  return `// GENERATED FILE — do not edit by hand.
// Source: content/languages/*.json — regenerate with \`npm run build:data\`.
(function () {
  window.CurriculumStorylines = window.CurriculumStorylines || {};

  const STORYLINES = ${JSON.stringify(byId, null, 2)};

  window.CurriculumStorylines.get = function (languageId) {
    return Object.prototype.hasOwnProperty.call(STORYLINES, languageId) ? STORYLINES[languageId] : null;
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

if (import.meta.url === `file://${process.argv[1]}`) {
  const storylines = await loadStorylines();
  await writeFile(new URL('../public/storylines-data.js', import.meta.url), buildLanguagesBundle(storylines));
  console.log(`built public/storylines-data.js from ${storylines.length} storyline(s)`);
}
