#!/usr/bin/env node
/**
 * Draft one lesson from one seed, and refuse to write it if it fails.
 *
 * The refusal is the feature. verify.mjs says there is no status for "failed
 * the gate", because such a lesson is never written — and that sentence is
 * only true if this script enforces it. A failed draft that lands on disk
 * gets edited into shape by someone in a hurry, and the gate quietly becomes
 * a report you run afterwards instead of a condition of existing.
 *
 * So the order here is: ask, parse, check the shape, run the gate, and only
 * then touch content/. A draft that fails is printed, not saved.
 *
 * Usage:
 *   node tools/generate.mjs <taskId> [--force] [--show]
 */
import { readFile, writeFile, access } from 'node:fs/promises';
import { checkTraceable } from './lib/gate.mjs';
import { validateSeed, loadAllowlist } from './lib/seed-schema.mjs';
import { validateLesson, proseOf, STATUSES } from './lib/lesson-schema.mjs';
import { loadCurriculum } from './lib/load-curriculum.mjs';
import { ask as askModel, NoKeyError } from './model.mjs';

/**
 * The prompt. Its binding instruction is the gate restated in words, because
 * a model that has been told the rule fails it less often than one that has
 * not — and the rule is checked afterwards regardless, so the instruction is
 * an optimisation rather than a safeguard.
 */
export function promptFor({ task, seed }) {
  const licensed = [...new Set((seed.claims ?? []).flatMap((c) => c.tokens ?? []))];
  const claims = (seed.claims ?? []).map((c) => (
    `- [${c.id}] ${c.text}\n  source: ${c.source?.title ?? '(none)'} <${c.source?.url ?? ''}> (${c.source?.kind ?? '?'})\n  licenses: ${(c.tokens ?? []).join(', ')}`
  )).join('\n');

  return `Write one lesson for a software engineering curriculum, as JSON.

TASK ${task.id} — ${task.text}
TRACK ${task.trackId} — ${task.trackName}

THE ONLY FACTS YOU MAY ASSERT are the claims below. This is not a style note.
You may not introduce a date, a name, a figure, an acronym or a proper noun
that does not appear in the licensed tokens. If a fact would improve the
lesson and is not here, leave it out and write around the gap.

CLAIMS
${claims}

LICENSED TOKENS
${licensed.join(', ')}

BEATS the lesson must make
- broke: ${seed.beats?.broke ?? ''}
- fix: ${seed.beats?.fix ?? ''}
- cost: ${seed.beats?.cost ?? ''}
- interview: ${seed.beats?.interview ?? ''}

SHAPE — return only JSON, no commentary, with these fields:
{
  "trackId", "trackName", "id", "title",
  "status": "traced",
  "seed": "${seed.taskId}",
  "story": "several paragraphs, separated by blank lines",
  "problem": {
    "name", "aka": [], "shape", "tell": [],
    "move", "invariant", "breaks",
    "cost": { "time", "space", "beats" },
    "worked": { "problem", "reasoning", "code" },
    "practice"
  },
  "beats": {
    "broke", "fix", "cost",
    "interview": { "q", "trap", "answer" }
  },
  "blueprint": "a plain-text summary",
  "takeaway": "one sentence"
}

HOW TO WRITE IT
- Name what became possible, and what became newly expensive. The second is
  the next lesson's reason to exist.
- Where a claim can only be opinion, write it as argument rather than as fact.
- Prefer the specific consequence to the general observation.
- Do not use a capitalised word for emphasis; the checker reads it as a name.
- status must be one of: ${STATUSES.join(', ')}.`;
}

function parseDraft(text) {
  // A model asked for JSON sometimes wraps it in a fence or a sentence.
  const trimmed = text.trim().replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
  const start = trimmed.indexOf('{');
  const end = trimmed.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('no JSON object in the response');
  return JSON.parse(trimmed.slice(start, end + 1));
}

/**
 * @returns {Promise<{written: boolean, problems: string[], draft: object|null}>}
 */
export async function draftLesson({ task, root = new URL('../content/', import.meta.url), ask = askModel, force = false }) {
  const problems = [];
  const target = new URL(`lessons/${task.id}.json`, root);

  if (!force) {
    try {
      await access(target);
      return { written: false, draft: null, problems: [`${task.id}: a lesson already exists; pass --force to replace it`] };
    } catch { /* absent, which is what we want */ }
  }

  let seed;
  try {
    seed = JSON.parse(await readFile(new URL(`seeds/${task.id}.json`, root), 'utf8'));
  } catch {
    return { written: false, draft: null, problems: [`${task.id}: no seed, and a lesson without one cannot be gated`] };
  }

  const seedFaults = validateSeed(seed);
  if (seedFaults.length) {
    return { written: false, draft: null, problems: seedFaults.map((f) => `seed: ${f}`) };
  }

  // Reaching the model and reading its answer fail for different reasons and
  // want different words: one is a condition of the environment, the other is
  // a bad draft. Collapsing them told the reader their missing key was a
  // parse error.
  const text = await ask({ prompt: promptFor({ task, seed }) });

  let draft;
  try {
    draft = parseDraft(text);
  } catch (error) {
    return { written: false, draft: null, problems: [`the draft could not be read as JSON: ${error.message}`] };
  }

  // Identity is ours to set, not the model's to get right.
  draft.id = task.id;
  draft.trackId = task.trackId;
  draft.trackName = task.trackName;
  draft.seed = seed.taskId;

  problems.push(...validateLesson(draft));

  const allowlist = await loadAllowlist(new URL('allowlist.json', root));
  const { unlicensed } = checkTraceable(proseOf(draft), seed, allowlist);
  if (unlicensed.length) {
    problems.push(`${unlicensed.length} unlicensed in prose: ${unlicensed.join(', ')}`);
  }

  if (problems.length) return { written: false, draft, problems };

  await writeFile(target, `${JSON.stringify(draft, null, 2)}\n`);
  return { written: true, draft, problems: [] };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [taskId, ...flags] = process.argv.slice(2);
  if (!taskId) {
    console.error('usage: node tools/generate.mjs <taskId> [--force] [--show]');
    process.exitCode = 1;
  } else {
    const { CURRICULUM } = await loadCurriculum();
    const track = CURRICULUM.tracks.find((t) => t.tasks.some((x) => x.id === taskId));
    const found = track?.tasks.find((x) => x.id === taskId);

    if (!found) {
      console.error(`${taskId} is not a task in the curriculum`);
      process.exitCode = 1;
    } else {
      const task = { ...found, trackId: track.id, trackName: track.name };
      try {
        const { written, problems, draft } = await draftLesson({ task, force: flags.includes('--force') });
        if (written) {
          console.log(`wrote content/lessons/${taskId}.json — run npm test before committing it`);
        } else {
          for (const p of problems) console.error(`  ${p}`);
          console.error(`\nnot written. ${problems.length} problem(s), and a draft that fails the gate is not saved.`);
          if (flags.includes('--show') && draft) console.error(`\n${JSON.stringify(draft, null, 2)}`);
          process.exitCode = 1;
        }
      } catch (error) {
        console.error(error instanceof NoKeyError ? error.message : `${error}`);
        process.exitCode = 1;
      }
    }
  }
}
