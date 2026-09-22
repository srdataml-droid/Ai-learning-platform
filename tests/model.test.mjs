import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ask, NoKeyError } from '../tools/model.mjs';

/**
 * The adapter is one function so that swapping providers touches one file.
 * What is worth testing about it is the degradation: everything else in this
 * pipeline works without a key, so its absence has to read as a condition
 * rather than as a failure.
 */

test('no key is a stated condition, not a stack trace', async () => {
  await assert.rejects(
    () => ask({ prompt: 'x', env: {} }),
    (error) => {
      assert.ok(error instanceof NoKeyError);
      assert.match(error.message, /GEMINI_API_KEY/);
      assert.match(error.message, /Everything else works without it/);
      return true;
    },
  );
});

test('the key is sent as a header rather than in the query string', async () => {
  let seen;
  const fetchImpl = async (url, init) => {
    seen = { url, init };
    return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: '{}' }] } }] }) };
  };
  await ask({ prompt: 'hello', env: { GEMINI_API_KEY: 'secret' }, fetchImpl });

  assert.equal(seen.init.headers['x-goog-api-key'], 'secret');
  assert.ok(!seen.url.includes('secret'), 'a key in a URL ends up in logs and history');
});

test('a provider error carries its status, because the caller has to tell apart a bad key and a bad prompt', async () => {
  const fetchImpl = async () => ({ ok: false, status: 429, text: async () => 'rate limited' });
  await assert.rejects(
    () => ask({ prompt: 'x', env: { GEMINI_API_KEY: 'k' }, fetchImpl }),
    /429/,
  );
});
