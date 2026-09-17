#!/usr/bin/env node
/** Print the tasks with no lesson, in study order. Derived, never hand-edited. */
import { loadCurriculum } from './lib/load-curriculum.mjs';

const { CURRICULUM, CurriculumLessons } = await loadCurriculum();
const order = [...CURRICULUM.sequence, ...CURRICULUM.underneath];
const today = new Date().toISOString().slice(0, 10);

let out = `# Tasks with no lesson\n\nRegenerated ${today}. Derived from content/lessons/ against the curriculum — not maintained by hand, so it cannot drift.\n\nStudy order: the sequence first, then the five habits running underneath.\n\n`;
let total = 0;

for (const id of order) {
  const track = CURRICULUM.tracks.find((t) => t.id === id);
  const missing = track.tasks.filter((t) => !CurriculumLessons.hasLesson(t.id));
  if (missing.length === 0) {
    out += `## Track ${track.id} — ${track.name}\n\n**Complete.** All ${track.tasks.length} written.\n\n`;
    continue;
  }
  out += `## Track ${track.id} — ${track.name}\n\n${missing.length} of ${track.tasks.length} still missing.\n\n`;
  for (const t of missing) {
    out += `- [ ] \`${t.id}\` ${t.text}${t.note ? `\n      <br>_note: ${t.note}_` : ''}\n`;
  }
  out += '\n';
  total += missing.length;
}

const all = CURRICULUM.tracks.reduce((a, t) => a + t.tasks.length, 0);
out += `---\n\n**Total remaining: ${total} of ${all}.**\n\nRegenerate: \`node tools/missing-lessons.mjs > docs/MISSING-LESSONS.md\`\n`;
console.log(out);
