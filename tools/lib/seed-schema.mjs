import { readFile } from 'node:fs/promises';

export const CLAIM_TYPES = ['date', 'person', 'number', 'event', 'quote'];
export const BEATS = ['broke', 'fix', 'cost', 'interview'];

/**
 * A seed holds facts, never prose. A claim is something that can be wrong.
 * "This was revolutionary" is not a claim and does not belong in a seed.
 *
 * `tokens` is the load-bearing field: it enumerates the checkable atoms the
 * claim licenses the prose to use. The gate is built on it, so a claim that
 * licenses nothing is a claim that permits nothing.
 */
export function validateSeed(seed) {
  const problems = [];

  if (!seed.taskId) problems.push('seed has no taskId');
  if (!seed.title) problems.push(`seed ${seed.taskId} has no title`);

  if (!Array.isArray(seed.claims) || seed.claims.length === 0) {
    problems.push(`seed ${seed.taskId} has no claims, so no prose can be licensed`);
  } else {
    for (const claim of seed.claims) {
      const id = claim.id ?? '(unnamed)';
      if (!claim.text) problems.push(`claim ${id} has no text`);
      if (!CLAIM_TYPES.includes(claim.type)) {
        problems.push(`claim ${id} has type "${claim.type}", which is not one of ${CLAIM_TYPES.join(', ')}`);
      }
      if (!Array.isArray(claim.tokens) || claim.tokens.length === 0) {
        problems.push(`claim ${id} licenses no tokens, so it cannot license any prose`);
      }
      if (!claim.source) {
        problems.push(`claim ${id} has no source`);
      } else {
        if (!claim.source.url) problems.push(`claim ${id} has a source with no url`);
        if (!claim.source.title) problems.push(`claim ${id} has a source with no title`);
        if (!['primary', 'secondary'].includes(claim.source.kind)) {
          problems.push(`claim ${id} has source kind "${claim.source.kind}"; use primary or secondary`);
        }
      }
    }
  }

  for (const beat of BEATS) {
    if (!seed.beats?.[beat]) problems.push(`seed ${seed.taskId} is missing beat "${beat}"`);
  }

  return problems;
}

/**
 * The allowlist is the single loophole in the gate, so every entry argues for
 * itself in writing and the argument is reviewable in a diff.
 */
export function validateAllowlist(allowlist) {
  const problems = [];
  for (const [token, entry] of Object.entries(allowlist)) {
    if (!entry?.reason) {
      problems.push(`allowlist entry "${token}" has no reason; an allowlist without arguments turns the gate into theatre`);
    }
  }
  return problems;
}

export async function loadAllowlist(url = new URL('../../content/allowlist.json', import.meta.url)) {
  const raw = JSON.parse(await readFile(url, 'utf8'));
  return new Map(Object.entries(raw).map(([token, entry]) => [token, entry.reason]));
}
