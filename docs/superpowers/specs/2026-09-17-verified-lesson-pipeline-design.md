# Verified lesson pipeline and language storylines

Design, 2026-09-17. Supersedes nothing; this is the first spec in the repo.

## Why this exists

The site presents 313 curriculum tasks as if each has a lesson. 44 are handcrafted,
26 are generated from real per-language data, and **243 receive the same six
paragraphs with the task title interpolated into them**. The template asserts that
the topic "represents a critical engineering threshold", and ends by asking the
identical interview question — *how do you mitigate the primary failure mode in a
production distributed environment* — about "What a file is" and about "Transformers".

That is the problem this design exists to remove, and the reason it can't be removed
by simply writing more prose: prose is exactly what the site already has too much of.
What it lacks is any mechanism that distinguishes a sentence containing a checked
fact from a sentence containing a confident-sounding non-fact. Both render identically.

The curriculum already states the policy it wants, in `data.js`:

> The dates above are the well established ones and they hold. Specific figures,
> dollar amounts and performance numbers get traced to a primary source at the
> lesson that uses them. **A number that cannot be traced gets struck, not softened.**

Nothing enforces it. This design makes that sentence executable.

## Audience and bar

Two audiences, decided 2026-09-17:

1. **Private study instrument, now.** Gaps are acceptable and must be *visible*.
   A task with no lesson says "not written yet". It never says something else.
2. **A product that could be sold, later.** Therefore every fact that does ship has
   to survive a stranger checking it. This is the binding constraint: it is cheaper
   to have 20 defensible lessons than 313 plausible ones, because one falsified date
   in a paid product discredits the other 312.

## Approach chosen

Three were considered:

- **A — hand-write, narrow.** Highest confidence, does not scale, ~months to cover 313.
- **B — pipeline: generate from researched seed facts, gate on traceability.** Chosen.
- **C — shrink the curriculum to ~120 tasks and cover all of them.** Not chosen, but
  the underlying observation stands and is revisited in "Open questions".

B was chosen with one condition recorded here: the failure mode of B is ending up
with 313 fluent lessons and no way to know which are true. Therefore the verification
gate is not a stage of this pipeline, it is the product of it. Generation is the
cheap part and is deliberately treated as replaceable.

## Architecture

### Generation happens offline and its output is committed

The generator is a Node script run from a developer machine. Its output is JSON
committed to git. The site never calls a model at runtime.

Reasons, in order of severity:

1. The site is static with no server. A runtime model call needs a key in the
   browser, which is a published key.
2. Runtime generation is non-reproducible — two readers get different lessons, and
   a reported error cannot be reproduced.
3. Nothing can be reviewed before publication if it is produced at read time. The
   review gate and runtime generation are mutually exclusive by construction.
4. Content in git is diffable, revertible, and greppable. Content in a model is not.

### Three layers, separated so that facts can be checked without reading prose

The reason generated content is hard to audit is that its claims and its sentences
arrive fused. You cannot check the date without re-reading the paragraph, and by the
time you have re-read the paragraph you have absorbed its framing. So the layers are
split, and the checkable layer is authored *first* and *by hand*.

```
content/
  seeds/<taskId>.json        layer 1  facts + sources         hand-researched
  lessons/<taskId>.json      layer 2  prose                   generated, gated
  languages/<langId>.json    storyline + syntax-as-consequence
  comparisons/<slug>.json    one program, many languages
```

#### Layer 1 — seeds. Facts only. No prose.

A seed is a list of claims. A claim is something that can be wrong.

```json
{
  "taskId": "0.1",
  "title": "What a file is, what a folder is",
  "researchedAt": "2026-09-17",
  "claims": [
    {
      "id": "c1",
      "text": "Multics introduced a hierarchical file system with directories as a special kind of file",
      "type": "event",
      "tokens": ["Multics", "1965"],
      "source": {
        "title": "A General-Purpose File System for Secondary Storage, Daley & Neumann, FJCC 1965",
        "url": "https://multicians.org/fjcc4.html",
        "kind": "primary"
      }
    }
  ],
  "beats": {
    "broke": "terse fact notes, not prose",
    "fix": "...",
    "cost": "...",
    "interview": "..."
  }
}
```

- `type` is one of `date | person | number | event | quote`. It exists to make the
  claim's checkability explicit.
- **`tokens` is the load-bearing field.** It enumerates the checkable atoms this
  claim licenses the prose to use: years, proper nouns, acronyms, figures. The gate
  is built on it.
- `kind: primary | secondary`. Secondary is allowed; it is recorded as secondary.
- "This was revolutionary" is not a claim and never enters a seed. If a sentence
  cannot be wrong, it is prose and belongs to layer 2.

Seeds are the bottleneck of this design and that is intentional. The rate at which
this curriculum gains trustworthy lessons is the rate at which someone does the
reading. The pipeline removes the writing cost, not the research cost.

#### Layer 2 — generation

`tools/generate.mjs` reads one seed plus its task/track context, calls a model, and
writes `content/lessons/<taskId>.json`. The prompt's binding instruction is that the
model may not assert anything the seed does not license, and may not introduce a
date, name or figure that is absent from `tokens`.

The model is reached through a one-function adapter (`tools/model.mjs`). Default
provider is Gemini via `@google/genai`, because `GEMINI_API_KEY` is already the
declared key in `.env.example`. Swapping providers must not touch anything else.

Absence of an API key degrades gracefully: seeds, validation, the gate, the language
storylines and the site all work without one. Only drafting new prose is blocked.

#### Layer 3 — the gate

`tools/verify.mjs` is mechanical, not a judgment call. For each lesson:

1. Extract every checkable atom from the prose:
   - years matching `\b(1[89]|20)\d{2}\b`
   - numbers carrying a unit or magnitude (`3.5x`, `40 ms`, `$2M`, `100,000`)
   - capitalised multi-word proper nouns
   - all-caps acronyms of 2+ characters
2. Build the licensed set: the union of every `claim.tokens`, plus the task title's
   own tokens, plus a small explicit allowlist file.
3. Any extracted atom not in the licensed set is a **violation**. The lesson cannot
   advance past `generated`.

The allowlist (`content/allowlist.json`) is the one loophole in the design, so it is
a reviewed file with a required `reason` per entry, kept deliberately small. An
allowlist that grows without argument turns this gate into theatre; that is the
specific way this design fails, and it fails visibly in a diff.

### Status lifecycle, and what the reader sees

| status | meaning | rendered as |
|---|---|---|
| *(no file)* | nothing written | "Not written yet", with the track it belongs to |
| `generated` | prose exists, gate not passed | draft banner, explicit |
| `traced` | every atom licensed by a sourced claim | "machine-checked, not yet human-reviewed" |
| `verified` | a human read it and accepted it | no banner; sources listed |

The reader is never shown unmarked content of unknown provenance. That is the
single behavioural difference between this site and the current one.

`tools/review.mjs` is a terminal review queue: it shows one `traced` lesson at a
time with its claims and sources beside the prose, and accepts or strikes it.

### How the site consumes content

A build step (`tools/build-data.mjs`) compiles `content/**` into the bundles the
pages already load, so the site remains static, dependency-free at runtime, and does
not fetch 313 separate JSON files. The existing `window.CURRICULUM` shape is kept for
the curriculum map; lessons move to a generated `lessons-data.js` whose handwritten
copy is retired.

`generateFallbackLesson()` is deleted the day the first pipeline lesson lands.
Nothing replaces it. A missing lesson is missing.

## Language storylines

The chain page and the word lists are currently two disconnected artefacts: a
timeline with no syntax, and 432 syntax rows with no timeline. The word tables are
sorted by topic, which makes them a dictionary — and a dictionary contradicts the
site's own Four Beats thesis, that things exist because something broke.

One page per language, running: **inherited wall → the fix, with year and people →
the syntax that fix forced → the wall it created → the next language.** The third
beat is the new work: every construct is attached to the design decision it is a
consequence of.

```json
{
  "id": "C.7",
  "kind": "chain",
  "name": "C",
  "year": "1972",
  "who": "Dennis Ritchie, Bell Labs",
  "constraint": "compile to fast machine code on a PDP-11, with no runtime",
  "inherited": { "from": "C.5", "wall": "..." },
  "decisions": [
    {
      "decision": "No runtime, therefore no garbage collector",
      "because": "a collector needs a runtime C refuses to carry",
      "syntax": [
        { "code": "malloc / free", "means": "...", "consequence": "..." },
        { "code": "int *p", "means": "...", "consequence": "..." }
      ]
    }
  ],
  "wall": "...",
  "leadsTo": "C.9",
  "leadsToReason": "..."
}
```

- The order of `decisions[]` **is** the reading order. A reader meets constructs in
  the order the language's problem forces, not alphabetically.
- The existing 432 rows migrate into `decisions[].syntax[]`. This is per-language
  judgment work, done one language at a time, and is the bulk of this workstream.
- `words.html` survives unchanged in purpose — a flat searchable lookup is genuinely
  useful — but each row gains a link into its language page's decision anchor.

### Repairs to the chain data

- `kind: "chain" | "notation"`. SQL, CUDA, HTML/CSS, Bash and regular expressions
  become `notation`. They are not links in the general-purpose chain, they are
  parallel notations, and forcing them into one numbered timeline is the only reason
  their dates appear scrambled (SQL 1974 listed after Rust 2015).
- Smalltalk (`C.8`) and PHP (`C.14`) have no predecessor pointing at them. They
  are roots, not dead ends: Smalltalk already carries `leadsTo: "C.9"` and does
  feed C++. An earlier draft of this spec said it led nowhere, which was wrong.
  The structure is a DAG with several roots and the page should render it as one.
- Four chain languages have no syntax table at all: **Fortran, LISP, Smalltalk,
  Perl.** LISP matters most — s-expressions, garbage collection, the REPL and
  code-as-data all enter the story there.
- Coverage is lopsided (JavaScript 36 rows, Elixir 11, Kotlin 12, Swift 12) and is
  levelled as each language is migrated.

### One program, many languages

Task `C.27.6` already asks the reader to write the same small program in Python,
JavaScript and Go. That becomes `compare.html`: one task, N implementations side by
side, with commentary on what each language's version reveals about its constraints.
`content/comparisons/<slug>.json` holds them.

## Structural repairs

These land first, because content work on a build that ships 404s is wasted.

1. **`lesson.html` is absent from `vite.config.ts` rollup inputs.** Every task on
   the site links to it. `npm run build` currently produces a site where every
   lesson link 404s. Add it.
2. **12 duplicate keys in the `curatedLessons` object literal** — `K.2 K.6 K.11
   K.13 L.6 L.9 L.12 J.1 E.4 F.8 A.2 B.32`. Later values silently win; roughly 37 KB
   of the 177 KB file is unreachable. Merge them, keeping the better copy in each
   case. Note that for `A.2` the *discarded* copy is the larger one (3081 B vs
   2951 B) and must be recovered by hand, not by taking the survivor.
3. **Dead React scaffold.** `src/App.tsx` renders `<div></div>` and nothing links to
   it. Delete `src/`. Drop the seven unused dependencies (react, react-dom,
   lucide-react, motion, express, dotenv, @google/genai *as a site dependency*;
   it returns as a tool-only dependency). Rename the package from `react-example`.
4. **`metadata.json` and the homepage hero both claim 330 tasks; the data has 313**,
   and the hero sits beside a live counter that computes the real number. Compute it
   everywhere; delete the constant.
5. **Nothing validates the data.** `tools/validate.mjs` + `npm test` enforce: no
   duplicate keys, schema conformance, referential integrity (every `leadsTo`
   resolves, every `lessonMap` target exists, every seed's `taskId` is a real task).
   `no-dupe-keys` alone would have prevented item 2.

## Testing

- `npm test` = `validate` + `verify` + unit tests, and must pass before any commit
  that touches content.
- Unit tests target the gate specifically, because the gate is the product: a lesson
  containing an unlicensed year must fail; a lesson whose every atom is licensed must
  pass; an allowlist entry without a `reason` must fail validation.
- Tests are written before the tool they test (TDD), per the repo's working practice.
- A generated lesson that passes the gate is not evidence the gate works. Evidence is
  a deliberately poisoned fixture that the gate rejects.

## What this design does not do

- It does not make facts true. It makes untraced facts *visible*, which is a
  different and smaller claim.
- It does not reduce research time. Seeds are hand-made on purpose.
- It does not cover 313 tasks. It makes the covered subset honest and the uncovered
  subset obvious.

## Open questions

- **The 313 number itself.** Option C above was not chosen, but the observation that
  motivated it is unaddressed: a curriculum that cannot be finished teaches less than
  one that can. Revisit once ~30 tasks have real seeds and the per-task cost is known
  from measurement rather than estimate.
- **Provider choice** defaults to Gemini on the strength of the existing
  `.env.example`. If keys are sourced from elsewhere, only `tools/model.mjs` changes.
