import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

/**
 * The page must show the evidence it claims to have.
 *
 * A "sources traced" badge over a page with no sources asks the reader to
 * take provenance on trust, which is the one thing this pipeline exists not
 * to do. These are grep-level checks because the rendering is inline in the
 * page; they cannot prove the section looks right, only that the page asks
 * for the data and points the reader at it.
 */
const page = await readFile(new URL('../lesson.html', import.meta.url), 'utf8');

test('the lesson page asks for the sources behind the lesson', () => {
  assert.match(page, /CurriculumLessons\.getSources\(/);
});

test('the lesson page renders the claim beside its source, not just a list of urls', () => {
  assert.match(page, /source-claim/);
  assert.match(page, /source-cite/);
});

test('the lesson page marks whether a source is primary or secondary', () => {
  assert.match(page, /source-kind/);
});

test('the provenance badge points at the sources rather than asserting them alone', () => {
  assert.match(page, /href="#sources"/);
  assert.match(page, /id="sources"/);
});
