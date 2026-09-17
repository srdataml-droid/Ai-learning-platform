/**
 * The traceability gate.
 *
 * A model writes fluent prose, and its facts and its sentences arrive fused:
 * you cannot check the date without re-reading the paragraph, and by then you
 * have absorbed its framing. So the check is mechanical and refuses to read
 * for meaning at all. It pulls every atom out of the prose that could be
 * wrong — a year, a figure, a name — and demands that a sourced claim licensed
 * each one. Anything else is a violation, and a violated lesson is never
 * written to content/.
 *
 * Its own evidence is the poisoned fixture in tests/gate.test.mjs: a real
 * lesson with one digit changed, which the gate must reject. A gate proved
 * only by the lessons it accepts is proof of nothing.
 */

const YEAR = /\b(?:1[89]|20)\d{2}\b/g;
// A figure only counts when it carries a magnitude or unit; a bare "two" or a
// list index is not a claim about the world.
const FIGURE = /\b\d[\d,.]*\s*(?:%|x\b|ms\b|GB\b|MB\b|KB\b|TB\b|bits?\b|bytes?\b)|\$\d[\d,.]*[KMB]?\b/gi;
const ACRONYM = /\b[A-Z][A-Z0-9]{1,}\b/g;
// Two or more capitalised words in a row: "Ken Thompson", "Bell Labs".
const PROPER_NOUN = /\b[A-Z][a-z]+(?:\s+(?:of|the|and)\s+)?(?:\s[A-Z][a-z]+)+\b/g;
// A lone capitalised word is only an atom when it is not sentence-initial.
const MID_SENTENCE_NAME = /(?<![.!?]\s)(?<!^)\b[A-Z][a-z]{2,}\b/gm;

/**
 * Every checkable atom in a piece of prose, in order of first appearance.
 * @param {string} prose
 * @returns {string[]}
 */
export function extractAtoms(prose) {
  const found = [];
  const add = (value) => {
    const trimmed = value.trim();
    if (trimmed && !found.includes(trimmed)) found.push(trimmed);
  };

  for (const m of prose.matchAll(YEAR)) add(m[0]);
  for (const m of prose.matchAll(FIGURE)) add(m[0]);
  for (const m of prose.matchAll(ACRONYM)) add(m[0]);
  for (const m of prose.matchAll(PROPER_NOUN)) add(m[0]);

  // A single capitalised word counts only if it is not already inside a
  // multi-word name and not the first word of a sentence.
  for (const m of prose.matchAll(MID_SENTENCE_NAME)) {
    const inside = found.some((f) => f.includes(m[0]) && f !== m[0]);
    if (!inside) add(m[0]);
  }

  return found;
}

/**
 * @param {string} prose the lesson text under test
 * @param {object} seed the seed whose claims license it
 * @param {Map<string,string>} allowlist token to the reason it needs no claim
 * @returns {{ ok: boolean, unlicensed: string[] }}
 */
export function checkTraceable(prose, seed, allowlist = new Map()) {
  const licensed = new Set();

  for (const claim of seed.claims ?? []) {
    for (const token of claim.tokens ?? []) licensed.add(token);
    // A claim's own wording licenses what it literally says.
    for (const atom of extractAtoms(claim.text ?? '')) licensed.add(atom);
  }
  // The task's own title is the subject of the lesson, not an assertion in it.
  for (const atom of extractAtoms(seed.title ?? '')) licensed.add(atom);
  for (const token of allowlist.keys()) licensed.add(token);

  const unlicensed = extractAtoms(prose).filter((atom) => {
    if (licensed.has(atom)) return false;
    // "Ken Thompson" licenses "Thompson"; a licensed multi-word name covers
    // the parts it is made of, but never the reverse.
    return ![...licensed].some((token) => token.split(/\s+/).includes(atom));
  });

  return { ok: unlicensed.length === 0, unlicensed };
}
