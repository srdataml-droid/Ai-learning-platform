import { STATUSES } from './lesson-schema.mjs';

/**
 * A word list is the reference half of a language page: the constructs you
 * type, glossed, with what each one costs you.
 *
 * It is deliberately not part of the storyline. A storyline argues — these
 * decisions, in this order, forced by this constraint — and burying twenty
 * reference rows inside that argument would destroy it. The two are linked
 * instead, which is what the reader actually needed: a timeline that shows
 * syntax, and a dictionary that says where each word came from.
 */
export { STATUSES };

const ROW_RULES = [
  ['code', 'has no code, so there is nothing being documented'],
  ['means', 'has no gloss, which leaves the code unexplained'],
  ['consequence', 'has no consequence; a row without one is a dictionary entry rather than a lesson'],
];

export function validateWordList(list) {
  const problems = [];
  const at = (msg) => problems.push(`${list.id ?? '(unnamed word list)'}: ${msg}`);

  if (!list.id) return ['word list has no id'];
  if (!list.lang) at('has no lang');
  if (!list.languageId) at('has no languageId, so it cannot be linked to the chain');
  if (!list.category) at('has no category');
  if (!list.summary) at('has no summary');
  if (!STATUSES.includes(list.status)) {
    at(`status "${list.status}" is not one of ${STATUSES.join(', ')}`);
  }

  if (!Array.isArray(list.rows) || list.rows.length === 0) {
    at('has no rows');
    return problems;
  }

  for (const [i, row] of list.rows.entries()) {
    for (const [field, complaint] of ROW_RULES) {
      if (!row[field]) at(`row ${i + 1} ${complaint}`);
    }
  }

  return problems;
}

/**
 * The checked prose, one entry per row.
 *
 * Rows are kept apart rather than joined, because the licensing rule below is
 * per row: a construct on display in one row says nothing about the next.
 */
export function rowsOf(list) {
  return (list.rows ?? []).map((row) => [row.means, row.consequence].filter(Boolean).join('\n\n'));
}

/**
 * Whether a row's own code licenses an atom in that row's prose.
 *
 * The row's subject is the construct in its code, and naming your own subject
 * is not an assertion about the world — which is the same reasoning that lets
 * a seed's title license atoms and keeps `code` out of the gated prose
 * everywhere else. The rule is narrow on purpose: the token has to be
 * literally on display beside the sentence that uses it.
 */
export function licensedByRow(row, atom) {
  return typeof row?.code === 'string' && row.code.includes(atom);
}
