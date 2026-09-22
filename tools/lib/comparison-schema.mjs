import { STATUSES } from './lesson-schema.mjs';

/**
 * One specification, implemented several times.
 *
 * The exercise it serves is C.27.6, and the lesson there states the point:
 * not three programs solving a problem idiomatically, but one specification
 * implemented three times, so the differences are attributable to the
 * languages rather than to the author's choices. What each implementation
 * carries is therefore two lists — what the language compelled you to state,
 * and what it decided on your behalf — because those lists are the language's
 * opinion expressed as a constraint.
 */
export { STATUSES };

export function validateComparison(comparison) {
  const problems = [];
  const at = (msg) => problems.push(`${comparison.id ?? '(unnamed comparison)'}: ${msg}`);

  if (!comparison.id) return ['comparison has no id'];
  if (!comparison.title) at('has no title');
  if (!comparison.task) at('has no task; without one specification the versions are not comparable');
  if (!comparison.reading) at('has no reading; the comparison is the point, not the listings');
  if (!STATUSES.includes(comparison.status)) {
    at(`status "${comparison.status}" is not one of ${STATUSES.join(', ')}`);
  }

  const impls = comparison.implementations;
  if (!Array.isArray(impls) || impls.length < 2) {
    at('has fewer than two implementations, so there is nothing to compare');
    return problems;
  }

  for (const [i, impl] of impls.entries()) {
    const where = impl.lang ? `implementation ${impl.lang}` : `implementation ${i + 1}`;
    if (!impl.lang) at(`${where} has no lang`);
    if (!impl.languageId) at(`${where} has no languageId`);
    if (!impl.code) at(`${where} has no code`);
    if (!Array.isArray(impl.compelled) || impl.compelled.length === 0) {
      at(`${where} lists nothing under compelled; what a language makes you say is half the comparison`);
    }
    if (!Array.isArray(impl.decided) || impl.decided.length === 0) {
      at(`${where} lists nothing under decided; what it chose for you is the other half`);
    }
  }

  return problems;
}

/** The languages this comparison is about, which it may therefore name. */
export function subjectsOf(comparison) {
  return (comparison.implementations ?? []).map((impl) => impl.lang).filter(Boolean);
}

/** Prose the gate must check. Code is excluded, here as everywhere. */
export function proseOf(comparison) {
  const fromImpls = (comparison.implementations ?? []).flatMap((impl) => [
    ...(impl.compelled ?? []),
    ...(impl.decided ?? []),
    impl.note,
  ]);

  return [comparison.title, comparison.task, ...fromImpls, comparison.reading, comparison.furtherWork]
    .filter(Boolean)
    .join('\n\n');
}
