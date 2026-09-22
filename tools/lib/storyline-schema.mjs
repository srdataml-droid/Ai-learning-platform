import { STATUSES } from './lesson-schema.mjs';

/**
 * A storyline is the language page's argument: the constraint the language
 * was built under, the decisions that constraint forced, and the syntax that
 * is a consequence of each decision.
 *
 * It shares the lesson's four statuses rather than inventing its own, because
 * a reader moving between the two pages is being told the same thing about
 * provenance and should not have to learn two vocabularies to hear it.
 */
export { STATUSES };

const SYNTAX_RULES = [
  ['code', 'has no code, so there is nothing to read as a consequence'],
  ['means', 'has no meaning given, which leaves the code as trivia'],
  ['consequence', 'has no consequence; the consequence is the entire reason it is here'],
];

/**
 * `constraint` and `wall` are required for the same reason the problem block
 * requires `invariant` and `breaks`: without them the page is a description
 * of a language rather than an account of why it looks the way it does, and
 * a description is what the site was rebuilt to stop shipping.
 */
export function validateStoryline(storyline) {
  const problems = [];
  const at = (msg) => problems.push(`${storyline.id ?? '(unnamed storyline)'}: ${msg}`);

  if (!storyline.id) return ['storyline has no id'];
  if (!storyline.name) at('has no name');
  if (!storyline.constraint) at('has no constraint; the constraint is what every decision below it follows from');
  if (!storyline.opening) at('has no opening');
  if (!storyline.wall) at('has no wall, so nothing explains why the next language exists');
  if (!STATUSES.includes(storyline.status)) {
    at(`status "${storyline.status}" is not one of ${STATUSES.join(', ')}`);
  }

  if (!Array.isArray(storyline.decisions) || storyline.decisions.length === 0) {
    at('has no decisions, which is the whole of what a storyline adds to the chain entry');
    return problems;
  }

  for (const [i, d] of storyline.decisions.entries()) {
    const where = `decision ${i + 1}`;
    if (!d.decision) at(`${where} has no name`);
    if (!d.because) at(`${where} has no because; a decision with no cause is a feature list entry`);
    if (!Array.isArray(d.syntax) || d.syntax.length === 0) {
      at(`${where} has no syntax, and the claim of the page is that syntax is a consequence of the decision`);
      continue;
    }
    for (const [j, s] of d.syntax.entries()) {
      for (const [field, complaint] of SYNTAX_RULES) {
        if (!s[field]) at(`${where}, syntax ${j + 1} ${complaint}`);
      }
    }
  }

  return problems;
}

/**
 * Prose the gate must check.
 *
 * `code` is excluded for the same reason a lesson's `worked.code` is: it is
 * something you type rather than something that could be false, and gating it
 * would force a claim to exist licensing `System.out.println`.
 */
export function proseOf(storyline) {
  const fromDecisions = (storyline.decisions ?? []).flatMap((d) => [
    d.decision,
    d.because,
    ...(d.syntax ?? []).flatMap((s) => [s.means, s.consequence]),
  ]);

  return [
    storyline.constraint,
    storyline.inherited?.wall,
    storyline.opening,
    ...fromDecisions,
    storyline.wall,
    storyline.leadsToReason,
  ].filter(Boolean).join('\n\n');
}
