import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { PAGES } from '../vite.config.mjs';

/**
 * Vite does not bundle a classic <script src> tag — it warns and leaves the
 * reference in place. If the file is not in public/ it is never copied to
 * dist, so the built page loads nothing and renders empty. That shipped: the
 * whole production build was dead, not just the missing lesson page.
 */
test('every script a page loads will exist in the build output', async () => {
  const root = new URL('../', import.meta.url);
  const missing = [];

  for (const name of PAGES) {
    const html = await readFile(new URL(`${name}.html`, root), 'utf8');
    for (const [, tag, src] of html.matchAll(/<script([^>]*)src="\.\/([^"]+)"/g)) {
      const isModule = /type\s*=\s*["']module["']/.test(tag);
      // A module is bundled by Vite; a classic script must be in public/.
      const expected = isModule ? new URL(src, root) : new URL(`public/${src}`, root);
      try {
        await access(expected);
      } catch {
        missing.push(`${name}.html loads ./${src}, which the build will not emit`);
      }
    }
  }

  assert.deepEqual(missing, []);
});
