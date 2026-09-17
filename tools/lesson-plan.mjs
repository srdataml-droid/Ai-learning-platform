#!/usr/bin/env node
/**
 * Emit the remaining lesson work as ordered batches.
 *
 * A batch is one writing session's worth (about 8-12 lessons) and is never
 * split across tracks, so finishing a batch always means finishing something
 * legible rather than stopping mid-track.
 *
 * Order is deliberate and recorded in docs/LESSON-PLAN.md:
 *   1. the habits running underneath (I, J, A) — conceptual, no research
 *      bottleneck, and referenced by every other track
 *   2. C — feeds the language storylines already built
 *   3. the small technical tracks (D, F, P) — each completable in one batch
 *   4. the large technical tracks — heaviest research load, done last, and
 *      the ones most likely to be cut if the curriculum is trimmed
 */
import { loadCurriculum } from './lib/load-curriculum.mjs';

const ORDER = ['I', 'J', 'A', 'C', 'D', 'F', 'P', 'E', 'M', 'N', 'O', 'K', 'L', 'B'];
const BATCH_MAX = 12;

const WHY = {
  I: 'Planning. Conceptual, completable in one batch, and the vocabulary the other tracks assume.',
  J: 'Debugging. Pairs directly with Track H, which is already written.',
  A: 'Systems thinking. Finishes the five habits running underneath.',
  C: 'Languages. Feeds the storyline pages already built; C.27.x are the synthesis tasks.',
  D: 'Software development craft. Small and self-contained.',
  F: 'Logic. Small, and underpins the debugging and ML tracks.',
  P: 'Security. Small, and every claim in it needs care.',
  E: 'Data structures and algorithms. Large, and the most citation-heavy of the foundations.',
  M: 'Math for machines. Notation-heavy; blueprints matter more than prose here.',
  N: 'Data work. Practical; much of it is about failure modes rather than history.',
  O: 'Classical ML. Large, and needs real sourcing for every named method.',
  K: 'Neural networks. Dates and papers throughout, so these want seeds, not just prose.',
  L: 'AI engineering. Fastest-moving material, so the most likely to date badly.',
  B: 'System design. The largest single track and the heaviest research load.',
};

const { CURRICULUM, CurriculumLessons } = await loadCurriculum();

let out = `# Lesson writing plan\n\nGenerated ${new Date().toISOString().slice(0, 10)} by \`tools/lesson-plan.mjs\`. Regenerate after each batch; completed items disappear from it because it is derived from \`content/lessons/\`, not ticked by hand.\n\nA batch is one writing session and never spans two tracks.\n\n`;

const rows = [];
let batchNo = 0;
let grandTotal = 0;

for (const id of ORDER) {
  const track = CURRICULUM.tracks.find((t) => t.id === id);
  const missing = track.tasks.filter((t) => !CurriculumLessons.hasLesson(t.id));
  if (missing.length === 0) continue;
  grandTotal += missing.length;
  const batches = Math.ceil(missing.length / BATCH_MAX);
  rows.push({ id, name: track.name, missing: missing.length, batches, first: batchNo + 1, last: batchNo + batches });
  batchNo += batches;
}

out += `## Order of work\n\n| # | Track | Missing | Batches | Why here |\n|---|---|---|---|---|\n`;
for (const r of rows) {
  out += `| ${r.first === r.last ? r.first : `${r.first}–${r.last}`} | **${r.id}** ${r.name} | ${r.missing} | ${r.batches} | ${WHY[r.id]} |\n`;
}
out += `\n**${grandTotal} lessons across ${batchNo} batches.**\n\n---\n\n`;

batchNo = 0;
for (const id of ORDER) {
  const track = CURRICULUM.tracks.find((t) => t.id === id);
  const missing = track.tasks.filter((t) => !CurriculumLessons.hasLesson(t.id));
  if (missing.length === 0) continue;

  for (let i = 0; i < missing.length; i += BATCH_MAX) {
    batchNo += 1;
    const slice = missing.slice(i, i + BATCH_MAX);
    const part = missing.length > BATCH_MAX ? ` (part ${Math.floor(i / BATCH_MAX) + 1} of ${Math.ceil(missing.length / BATCH_MAX)})` : '';
    out += `### Batch ${batchNo} — Track ${track.id}: ${track.name}${part}\n\n${slice.length} lessons.\n\n`;
    for (const t of slice) {
      out += `- [ ] \`${t.id}\` ${t.text}${t.note ? `\n      <br>_note: ${t.note}_` : ''}\n`;
    }
    out += '\n';
  }
}

out += `---\n\n## Done so far\n\n`;
for (const id of [...CURRICULUM.sequence, ...CURRICULUM.underneath]) {
  const track = CURRICULUM.tracks.find((t) => t.id === id);
  const done = track.tasks.filter((t) => CurriculumLessons.hasLesson(t.id)).length;
  if (done === track.tasks.length) out += `- **Track ${track.id} — ${track.name}: complete (${done}).**\n`;
  else if (done > 0) out += `- Track ${track.id} — ${track.name}: ${done} of ${track.tasks.length}.\n`;
}
console.log(out);
