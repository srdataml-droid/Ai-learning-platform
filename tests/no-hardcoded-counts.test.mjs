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
