/**
 * Scan JavaScript source for object keys repeated at one brace depth.
 *
 * Duplicate keys in an object literal are legal JavaScript: the last value
 * silently wins. That is how 12 handcrafted lessons went missing from
 * lessons-data.js. This walks the source character by character, tracking
 * string and template state, so that braces and colons inside lesson prose
 * and code samples cannot be mistaken for structure.
 *
 * @param {string} source
 * @param {{ depth: number }} options depth 1 is the outermost object literal
 * @returns {Array<{ key: string, line: number, occurrences: number[] }>}
 */
export function findDuplicateKeys(source, { depth: targetDepth }) {
  const seen = new Map();
  let depth = 0;
  let line = 1;
  let i = 0;

  while (i < source.length) {
    const ch = source[i];

    if (ch === '\n') {
      line += 1;
      i += 1;
      continue;
    }

    // Skip comments so that a "key": inside one is never counted.
    if (ch === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i += 1;
      continue;
    }
    if (ch === '/' && source[i + 1] === '*') {
      i += 2;
      while (i < source.length && !(source[i] === '*' && source[i + 1] === '/')) {
        if (source[i] === '\n') line += 1;
        i += 1;
      }
      i += 2;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      const startLine = line;
      let value = '';
      i += 1;
      while (i < source.length && source[i] !== quote) {
        if (source[i] === '\\') {
          value += source[i + 1];
          i += 2;
          continue;
        }
        if (source[i] === '\n') line += 1;
        value += source[i];
        i += 1;
      }
      i += 1; // closing quote

      // A string is a key only if the next non-space character is a colon.
      let j = i;
      while (j < source.length && /\s/.test(source[j])) j += 1;
      if (source[j] === ':' && depth === targetDepth) {
        if (!seen.has(value)) seen.set(value, []);
        seen.get(value).push(startLine);
      }
      continue;
    }

    if (ch === '{') depth += 1;
    if (ch === '}') depth -= 1;
    i += 1;
  }

  return [...seen.entries()]
    .filter(([, occurrences]) => occurrences.length > 1)
    .map(([key, occurrences]) => ({ key, line: occurrences[0], occurrences }));
}
