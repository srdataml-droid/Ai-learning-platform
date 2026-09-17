import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

test('every page in the repo is a Vite build input', async () => {
  const root = new URL('../', import.meta.url);
  const pages = (await readdir(root)).filter((f) => f.endsWith('.html')).sort();
  const config = await readFile(new URL('vite.config.ts', root), 'utf8');

  const missing = pages.filter((page) => !config.includes(`'${page}'`));
  assert.deepEqual(missing, [], `pages absent from rollupOptions.input: ${missing.join(', ')}`);
});
