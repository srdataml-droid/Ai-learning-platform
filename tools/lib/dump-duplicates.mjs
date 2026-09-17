import { readFile } from 'node:fs/promises';
import { findDuplicateKeys } from './find-duplicate-keys.mjs';

const source = await readFile(new URL('../../lessons-data.js', import.meta.url), 'utf8');
const lines = source.split('\n');
const dupes = findDuplicateKeys(source, { depth: 2 });

for (const { key, occurrences } of dupes) {
  console.log(`\n${'='.repeat(70)}\n${key} — ${occurrences.length} copies at lines ${occurrences.join(', ')}`);
  for (const start of occurrences) {
    const end = lines.findIndex((l, n) => n > start - 1 && /^ {4}\}/.test(l));
    console.log(`\n--- copy at line ${start}, ends ${end + 1}, ${end - start + 2} lines ---`);
    console.log(lines.slice(start - 1, end + 1).join('\n'));
  }
}
