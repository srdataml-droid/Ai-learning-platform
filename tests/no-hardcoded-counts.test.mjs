import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { loadCurriculum } from '../tools/lib/load-curriculum.mjs';

test('no shipped file states a task count as a literal', async () => {
  const root = new URL('../', import.meta.url);
  const { CURRICULUM } = await loadCurriculum();
  const real = CURRICULUM.tracks.reduce((sum, t) => sum + t.tasks.length, 0);

  const files = (await readdir(root)).filter((f) => /\.(html|json)$/.test(f));
  const offenders = [];

  for (const file of files) {
    const text = await readFile(new URL(file, root), 'utf8');
    for (const match of text.matchAll(/\b\d{2,4}\s+(?:tasks|lessons)\b/gi)) {
      offenders.push(`${file}: "${match[0]}"`);
    }
  }

  assert.deepEqual(offenders, [], `a stated count will drift from the real ${real}: ${offenders.join(', ')}`);
});

/**
 * The same rule for the other things the site counts.
 *
 * The word list page asserted "21 languages and 432 definitions" in three
 * places, beside a renderer that computes both. A count in prose is a claim
 * that goes stale silently — which is the failure the rest of this suite
 * exists to prevent, so it should not get a pass for being a smaller number.
 */
test('no shipped page states a language or definition count as a literal', async () => {
  const root = new URL('../', import.meta.url);
  const files = (await readdir(root)).filter((f) => /\.(html|json)$/.test(f));
  const offenders = [];

  for (const file of files) {
    const text = await readFile(new URL(file, root), 'utf8');
    for (const match of text.matchAll(/\b\d{2,4}\+?\s+(?:languages|definitions|storylines|rows)\b/gi)) {
      offenders.push(`${file}: "${match[0]}"`);
    }
  }

  assert.deepEqual(offenders, [], `counted in the page, never asserted: ${offenders.join(', ')}`);
});
