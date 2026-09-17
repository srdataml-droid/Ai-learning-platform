export const STATUSES = ['unsourced', 'traced', 'verified'];
export const BEATS = ['broke', 'fix', 'cost', 'interview'];

/**
 * The problem block: how a reader recognises when to reach for this.
 *
 * The Four Beats answer why a thing exists. They do not answer how you spot
 * the situation that calls for it, which is the part that transfers. Two
 * fields carry most of that weight:
 *
 *   invariant  what must stay true for the technique to be correct. Anyone
 *              can memorise that sliding window is linear. Knowing it needs
 *              a monotone property is what lets you choose it.
 *   breaks     the condition that voids the invariant. A technique with no
 *              stated failure condition gets applied where it does not hold.
 *
 * `name` is required because computer science names its problems, and the
 * name is the handle you search on. A reader who knows the thing in front of
 * them is the single-source shortest path problem can find fifty years of
 * work on it. A reader who only knows "find the cheapest route" cannot.
 */
const PROBLEM_RULES = [
  ['name', 'has no name; the named term is how a reader finds the prior art'],
  ['shape', 'has no shape; without it there is nothing to recognise'],
  ['move', 'has no move; the technique itself is missing'],
  ['invariant', 'has no invariant; without it the technique is a recipe rather than a choice'],
  ['breaks', 'has no breaks; a technique with no stated failure condition will be misapplied'],
];

export function validateLesson(lesson) {
  const problems = [];
  const at = (msg) => problems.push(`${lesson.id}: ${msg}`);

  if (!lesson.id) return ['lesson has no id'];
  if (!lesson.title) at('has no title');
  if (!lesson.story) at('has no story');
  if (!STATUSES.includes(lesson.status)) {
    at(`status "${lesson.status}" is not one of ${STATUSES.join(', ')}`);
  }

  for (const beat of BEATS) {
    if (!lesson.beats?.[beat]) at(`missing beat "${beat}"`);
  }

  const p = lesson.problem;
  if (p) {
    for (const [field, complaint] of PROBLEM_RULES) {
      if (!p[field]) at(`problem block ${complaint}`);
    }
    if (!Array.isArray(p.tell) || p.tell.length === 0) {
      at('problem block has an empty tell; recognising when to reach for it is the skill');
    }
    if (!p.cost?.time) at('problem block cost has no time');
  }

  return problems;
}

/** Prose the gate must check, including the problem block when present. */
export function proseOf(lesson) {
  const interview = lesson.beats?.interview ?? {};
  const p = lesson.problem ?? {};
  return [
    lesson.story,
    lesson.beats?.broke, lesson.beats?.fix, lesson.beats?.cost,
    interview.q, interview.trap, interview.answer,
    p.name, p.shape, ...(p.tell ?? []), p.move, p.invariant, p.breaks,
    p.worked?.problem, p.worked?.reasoning, p.practice,
    lesson.takeaway,
  ].filter(Boolean).join('\n\n');
}
