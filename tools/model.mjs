/**
 * The one function everything else uses to reach a model.
 *
 * Swapping providers must not touch anything else, so this file is the entire
 * surface: give it a prompt, get text back. Nothing above it knows which
 * provider answered, and nothing below it knows what the text is for.
 *
 * It calls the provider's HTTP interface with the runtime's own fetch rather
 * than through a vendor SDK. The spec named the SDK, and the repository has
 * since been stripped to a single dependency on purpose — adding one back for
 * a tool that runs a handful of times a week is the worse trade. The adapter
 * is one function either way, which is what the spec was protecting.
 *
 * Absence of a key is not a crash and not a stack trace. Everything else in
 * this pipeline — seeds, validation, the gate, the site — works without one,
 * and only drafting new prose is blocked, so that is what the message says.
 */

const DEFAULT_MODEL = 'gemini-2.5-pro';

export class NoKeyError extends Error {
  constructor(variable) {
    super(
      `No ${variable} in the environment, so nothing can be drafted.\n` +
      'Everything else works without it: seeds, validation, the gate, the build and the site.\n' +
      'Set the variable, or write the lesson by hand — the gate does not care which.',
    );
    this.name = 'NoKeyError';
  }
}

/**
 * @param {object} options
 * @param {string} options.prompt
 * @param {string} [options.model]
 * @param {object} [options.env] injectable for tests
 * @param {Function} [options.fetchImpl] injectable for tests
 * @returns {Promise<string>} the model's text
 */
export async function ask({ prompt, model = DEFAULT_MODEL, env = process.env, fetchImpl = fetch } = {}) {
  const key = env.GEMINI_API_KEY;
  if (!key) throw new NoKeyError('GEMINI_API_KEY');

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const response = await fetchImpl(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      // Drafting prose that must not invent anything is not the place for
      // sampling variety; the gate will reject invention, and a rejected
      // draft costs a round trip.
      generationConfig: { temperature: 0.2, responseMimeType: 'application/json' },
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`the provider returned ${response.status}: ${body.slice(0, 400)}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') ?? '';
  if (!text) throw new Error('the provider returned no text');
  return text;
}
