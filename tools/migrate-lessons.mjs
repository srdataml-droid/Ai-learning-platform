#!/usr/bin/env node
/**
 * One-shot: lift the handcrafted lessons out of the old lessons-data.js and
 * into content/lessons/<id>.json, one file per lesson.
 *
 * They arrive as `unsourced`. That is not a slight on them: they were written
 * before sourcing was required, they carry no claims, and the first one read
 * closely (B.32) had the CAP keynote in the wrong year. `unsourced` is a work
 * queue, not a verdict.
 *
 * One file per lesson also makes the duplicate-key bug that cost twelve of
 * them structurally impossible: two files cannot share a name.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { loadCurriculum } from './lib/load-curriculum.mjs';
import { readFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const { CurriculumLessons } = await loadCurriculum();
const source = await readFile(new URL('public/lessons-data.js', root), 'utf8');
const ids = [...source.matchAll(/^ {4}"([^"]+)":\s*\{/gm)].map((m) => m[1]);

await mkdir(new URL('content/lessons/', root), { recursive: true });

let written = 0;
for (const id of ids) {
  const old = CurriculumLessons.getLesson(id);
  if (!old) continue;
  const lesson = {
    id: old.id,
    trackId: old.trackId,
    trackName: old.trackName,
    title: old.title,
    status: 'unsourced',
    story: old.story,
    beats: {
      broke: old.beat1,
      fix: old.beat2,
      cost: old.beat3,
      interview: { q: old.beat4?.q, trap: old.beat4?.trap, answer: old.beat4?.answer },
    },
    blueprint: old.blueprint,
    takeaway: old.takeaway,
  };
  await writeFile(new URL(`content/lessons/${id}.json`, root), `${JSON.stringify(lesson, null, 2)}\n`);
  written += 1;
}

console.log(`wrote ${written} lessons to content/lessons/`);
