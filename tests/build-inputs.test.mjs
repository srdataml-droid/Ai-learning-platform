import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import { basename } from 'node:path';
import { PAGES } from '../vite.config.mjs';

test('every page in the repo is a Vite build input', async () => {
  const root = new URL('../', import.meta.url);
  const onDisk = (await readdir(root)).filter((f) => f.endsWith('.html')).sort();
  const declared = PAGES.map((name) => `${name}.html`).sort();

  assert.deepEqual(
    onDisk.filter((page) => !declared.includes(page)),
    [],
    'a page on disk is missing from rollupOptions.input, so it will 404 in production',
  );
  assert.deepEqual(
    declared.filter((page) => !onDisk.includes(page)),
    [],
    'rollupOptions.input names a page that does not exist, so the build will fail',
  );
});
