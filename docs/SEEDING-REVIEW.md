# Seeding review

Written 2026-09-21. Derived by running the gate's own atom extractor over
every lesson, so the numbers are reproducible rather than estimated — see
"How to regenerate" at the end.

Updated 2026-09-22. Current: **276 lessons, 186 traced, 67 claimless, 23
unsourced**, and **399 checkable atoms** still sitting in unsourced prose —
down from 707 at the time of writing. The section below records the state
*before* those changes, because the prioritisation was built on it and still
holds for what remains. See "Where this stands" at the end for the resume
point.

## The state, as measured before the `claimless` change

265 lessons existed against 313 tasks. 164 carried a seed and were `traced`.
**101 carried no seed and were `unsourced`.**

| track | lessons | traced | unsourced | |
|---|---|---|---|---|
| 0 | 12 | 1 | 11 | |
| A | 11 | 0 | 11 | none sourced |
| B | 37 | 26 | 11 | |
| C | 34 | 34 | 0 | **fully sourced** |
| D | 13 | 10 | 3 | |
| E | 28 | 22 | 6 | |
| F | 13 | 10 | 3 | |
| G | 11 | 0 | 11 | none sourced |
| H | 9 | 0 | 9 | none sourced |
| I | 10 | 0 | 10 | none sourced |
| J | 16 | 0 | 16 | none sourced |
| K | 4 | 0 | 4 | none sourced |
| L | 3 | 0 | 3 | none sourced |
| M | 16 | 16 | 0 | **fully sourced** |
| N | 15 | 15 | 0 | **fully sourced** |
| O | 20 | 20 | 0 | **fully sourced** |
| P | 13 | 10 | 3 | |

No seed is orphaned and no lesson names a seed that does not exist, so the
content directory is internally consistent. The gap is entirely "lessons that
predate the pipeline".

## The thing this review exists to say

The 101 unsourced lessons are **not** blank. They are short — roughly 900 to
1,400 characters of story — and they are **dense with specific factual
claims**.

Running the gate's extractor over them:

> **707 checkable atoms sit in unsourced prose.** Dates, figures with units,
> percentages, dollar amounts, proper nouns. None of them has been checked
> by anything.

Per track: 0 → 108, A → 45, B → 236, D → 30, E → 28, F → 49, G → 5, H → 12,
I → 1, J → 32, K → 70, L → 36, P → 55.

The densest individual lessons:

| atoms | lesson | a sample of what it asserts |
|---|---|---|
| 42 | `0.12` | 1974, 1989, HTML, URL, HSTS |
| 36 | `B.32` | 1999, 2000, 2002, 2007, 99.999% |
| 34 | `B.14` | 1970, 1974, IBM, IMS, CODASYL |
| 29 | `0.7` | 1963, 1988, 1992, 1 byte, 4 bytes |
| 26 | `B.39` | 2023, $20, $30,000, 80GB, 2 bytes |
| 25 | `F.8` | 1965, 2009, ALGOL, SQL, NULL |
| 23 | `B.1` | 1945, 99%, 50ms, 100,000x, 1,000,000x |
| 23 | `K.11` | 1998, 2012, 26%, 15.3%, CUDA |

This is the exposure. `B.39` asserts dollar amounts and hardware
specifications. `K.11` asserts two percentages to one decimal place. `B.32`
asserts an availability figure. Those are precisely the claims the pipeline
was built to refuse, and they are currently shipping.

### Why this is not a crisis

The status lifecycle is doing its job. These lessons render with a banner
saying they are unsourced, so the site is not passing them off as checked.
That was the point of having `unsourced` as a status rather than deleting the
lessons: a visible gap beats a confident non-fact.

### Why it is still the main outstanding risk

The audience decision recorded in the spec was two-part — a private study
instrument now, a product that could be sold later — with the binding
constraint that *every fact that does ship has to survive a stranger checking
it*. A banner protects the first audience. It does not protect the second,
because a reader who takes a number from a lesson does not carry the banner
with them.

The precedent is already set twice. `N.13` asserted a model achieving
"99.8% ROC-AUC" — an invented figure — in a lesson *about* distrusting
suspiciously good numbers. `O.17` was the same shape. Both were rewritten
from seeds rather than patched. There is no reason to think the remaining 101
are cleaner than those two were; they were generated the same way.

## Prioritisation

Ordered by risk rather than by track order.

**1. Numeric claims in AI/system lessons.** `B.39`, `B.32`, `B.1`, `K.11`,
`B.14`, `0.7`, `0.12` — *all seven now done, see below*. These assert money, percentages, latencies and hardware
specs — the claims most likely to be quoted, most likely to be wrong, and most
likely to age badly. `B.39` in particular prices hardware, which is stale
within a year by construction.

**2. Tracks that are one batch from complete.** D (3), F (3), P (3), E (6).
Twelve lessons closes four tracks. Highest ratio of "track goes green" to work
done.

**3. Track B's remaining 11**, which are the pre-pipeline ones in a track
otherwise being actively sourced — the inconsistency is most visible here.

**4. The never-sourced tracks.** A, G, H, I, J (57 lessons) — *now done, see
below*. These are the
habit tracks — systems thinking, critical thinking, observation, planning,
debugging. Note their atom counts are *low*: G → 5, I → 1, H → 12. They make
few checkable claims, because they are about practice rather than history. So
they are the largest count and the smallest risk, and they may deserve a
different treatment entirely (see below).

**5. K and L** (7 lessons, 106 atoms between them). Small count, high density,
fast-moving subject matter.

## RESOLVED 2026-09-21: the habit tracks are now `claimless`

The question below was settled by taking the second option. A fourth status
exists, and it is machine-checked.

`claimless` means "makes no checkable claims, so there is nothing to source".
It is not a weaker `traced` and not a politer `unsourced` — it is a settled
state rather than a pending one. `verify.mjs` enforces it: a `claimless`
lesson must contain **no checkable atom at all**, so the status cannot be
claimed falsely. Add a date to one and the suite fails.

Outcome across G, H, I and J: **44 of 46 are now `claimless`.**

- 31 qualified immediately with no edit.
- 13 needed the prose adjusted, in two categories:
  - **Artefacts of the extractor**, not claims — a quoted example sentence
    beginning with a capital (`'The database is slow'`), generic terms of art
    (`DNS`, `ORM`, `CI`, `PDF`), a numbered-list item starting with a verb.
    Rephrased. Note a systematic interaction worth knowing: **a quoted string
    starting with a capital always defeats the sentence-initial exclusion**,
    because the character before it is a quote mark rather than `[.!?]\s`.
  - **Hypothetical scenario figures and arithmetic identities.** `p99 latency
    dropped 30%`, `json.loads shows 94% self time`, `CPU is at 70%`,
    `a 4MB request`, `5% of runtime cannot win more than 5%`. These are *not*
    claims about the world — the first four are premises of worked problems and
    the last is true by definition. They were spelled out in words, which
    removes the atom and changes no meaning.

**The allowlist was not touched.** It remains at nine entries. Adding `DNS`,
`ORM`, `CI`, `PDF`, `IDE`, `UUID`, `PID`, `CDN` would have been defensible by
parallel with the existing `SQL` and `HTTP` entries, and was rejected anyway:
nine to seventeen is exactly the growth the spec warns turns the gate into
theatre. Rephrasing cost more effort and kept the loophole small.

### A caution about the technique

Spelling out a numeral to clear the gate is legitimate **only** where the
figure is a scenario parameter or an arithmetic identity. It is illegitimate
where the figure is an empirical claim — there, spelling it out hides an
unsourced fact instead of removing a false positive. The distinction is the
whole point and is not machine-checkable, so it is recorded here rather than
enforced.

### Both of the remaining two are now done

`J.1` was **sourceable and has been sourced.** The Inquiry Board report on the
Ariane 5 Flight 501 failure (chaired by Jacques-Louis Lions, Paris, 19 July
1996) is a primary source, and the lesson is now `traced` against a six-claim
seed. Reading the report against the existing prose turned up three errors in
it, which is the clearest justification for this whole pipeline that the repo
has produced so far:

| the lesson said | the report says |
|---|---|
| exploded **37 seconds after liftoff** | about **40 seconds after initiation of the flight sequence** — a different quantity measured from a different instant |
| the rocket **sheared itself in half** | it **veered off its flight path, broke up and exploded**, following an angle of attack of more than 20 degrees |
| had the simulation been run, **the explosion would never have occurred** | had the system been included, **the failure could have been detected** — a materially weaker claim |

The third is the one worth dwelling on. The lesson was using Ariane as
evidence for its own thesis and overstated what the evidence supports, which
is exactly the failure mode a curriculum about checking claims should not
exhibit.

`J.9` has been **rewritten** and is now `claimless`. It was a narrative dense
with environment specifics — a container runtime, a content delivery network,
process identifiers, a browser shortcut, a wall-clock time, a filesystem path
— none of which were claims about the world, all of which were brand and
setting detail that dated the lesson and tripped the extractor. The rewrite
keeps the argument (unchanged behaviour is evidence about the delivery path,
not the logic) and drops the set dressing, and it gained the problem block,
worked example and blueprint the pre-pipeline lessons lack.

**Tracks G, H, I and J are now fully resolved: 45 claimless, 1 traced, 0
unsourced.**

## RESOLVED 2026-09-22: priority band 1 is sourced

All seven of the densest lessons are now `traced`. They carried 208 unchecked
atoms between them; unsourced prose falls from 612 to 399.

The headline finding is that **every one of the seven contained at least one
error**, and the errors were not typos. Listed because the pattern is the
argument for the pipeline:

| lesson | what was wrong |
|---|---|
| `B.39` | `$30,000 NVIDIA H100` — unsourced, stale by construction, and structurally wrong: the datasheet is clear the SXM part is not sold as a standalone card at all, only on an HGX baseboard of four or eight. `$20/month` VM likewise unsourced. `30 tokens/second` invented. `wasting 95% of GPU cycles` invented. **And the blueprint's own arithmetic was off by exactly 2x** — it gave the KV cache formula with batch 16 and concluded ≈10.7 GB, which is the batch-of-8 answer (correct: 327,680 B/token = 320 KiB, x 4,096 = 1.25 GiB/sequence, x 16 = 20 GiB). |
| `B.32` | Almost entirely correct — the first pre-pipeline lesson that was. Only the `99.999%` needed removing, and it was a hypothetical provider promise inside an interview trap rather than a claim. |
| `B.1` | Four errors, compounding. `L1 ... 1 nanosecond (the speed of light through a few millimeters of silicon)`: the canonical figure is 0.5 ns and the parenthetical is wrong by ~2 orders of magnitude, since signal propagation covers centimetres per nanosecond. `RAM ~100 ns — 100 times slower`: the table itself says 200x, and the lesson's factor only works if L1 is 1 ns, so the first error propagated. `spinning disk OR a local network ~10 ms` conflates two entries 20x apart, erasing the single most useful ratio in the table. And the human-scale analogy disagreed with itself between story and blueprint, with `12 years` matching nothing at all. |
| `K.11` | Listed **dropout** among ingredients that "had all existed for years". It had not: submitted 3 July 2012, months before the December conference paper, sharing three of five authors. The lesson's own thesis needed narrowing. Also: the winning submission was an ensemble, not one network, so the margin is not a property of one architecture. |
| `B.14` | Accurate but arguing from invented material — IMS/CODASYL prose and made-up COBOL-ish traversal syntax. Replaced with Codd's own taxonomy of ordering, indexing and access path dependence, which is primary and sharper. `Chamberlin and Boyce built System R and SQL` overstated a large team's work. |
| `0.7` | `In 1988, Xerox and Apple engineers formed the Unicode Consortium` — wrong. 1988 is the *Unicode 88* draft report (29 August). The Consortium was formed **3 January 1991**. |
| `0.12` | No hard factual error, but the whole lesson was shaped as a list of stages, which cannot rank anything. Restructured around round-trip counting with every step cited to its RFC. |

Two of these are worth more than the corrections, because reading the source
produced a better lesson rather than a fixed one:

- `0.7` — Becker's *Unicode 88* argues that **16 bits per character are more
  than sufficient**, that 65,536 code points will be enough for every
  character needed for modern communication. Unicode 2.0 withdrew that in 1996
  for 1,114,112 code points across 17 planes. That retraction *is* the reason
  an emoji has a length of two: platforms built between 1991 and 1996 made a
  sixteen-bit unit their native character type and could not change it, so the
  surrogate pair is permanent scar tissue from a withdrawn promise. The lesson
  previously presented the length-of-two as a quirk; it is now a consequence,
  and the whole lesson hangs off it.
- `B.39` — the lesson's throwaway mention of a stampede is now the spine.
  Kwon et al. measured 60%-80% of memory wasted to fragmentation and
  over-reservation, with only 20.4%-38.2% of allocated KV memory holding real
  token states, and got 2-4x throughput at the same latency by applying OS
  virtual memory to the cache. The punchline the lesson was missing: the
  largest published win in LLM serving is an *allocation* result, not a
  mathematical one.

One mechanism note. `proseOf()` excludes `blueprint` and `worked.code`, so
arithmetic can be shown in numerals there while gated prose spells derived
figures out. That is how `B.39` and `B.1` show their working.

Allowlist untouched at nine entries throughout.

## RESOLVED 2026-09-22: Track A is closed

Eleven lessons, none previously sourced, 45 atoms. Resolved the same way as
the other habit tracks but with a higher sourced fraction, because three of
them cite real intellectual lineage rather than invented figures.

**Seven converted to `claimless` with no edit** — A.1, A.5, A.6, A.7, A.8,
A.9, A.11. They are about practice and assert nothing.

**A.2 and A.3 are now `traced`**, because their prose already named the people
it was standing on and the citations turned out to be correct:

- `A.2` (reinforcing versus balancing loops) credited Jay Forrester and
  Donella Meadows. Both check out. System dynamics was created in the
  mid-1950s by Jay W. Forrester at MIT, published first as a 1958 article and
  then as *Industrial Dynamics* in 1961, and developed while studying a
  General Electric appliance factory — where the simulation showed management
  practices rather than market forces were driving its boom-and-bust cycle.
  Meadows' definitions of the two loop types carry the lesson's whole
  argument, so they are now quoted from her rather than paraphrased from
  memory. Two of her secondary observations were added because they turn the
  lesson's advice into consequences of the framing rather than assertions: a
  delay in a balancing loop makes a system likely to oscillate, which is
  *why* fixed retry intervals synchronise clients; and every exponentially
  growing system needs a constraining loop because nothing grows forever in a
  finite environment, which is *why* backoff is not an optimisation.
- `A.3` (the bottleneck rule) credited Goldratt's *The Goal*, 1984, and
  Amdahl. Both check out. The five focusing steps are now stated in order,
  since the ordering is the content of the method, and the Amdahl claim reuses
  the 1967 paper already seeded for `B.29` rather than duplicating it.

**A.4 is now `traced`** and was the interesting one. Its story asserted "In
2010, an engineering team noticed…" — a fabricated date attached to a
hypothetical, which is worse than an unsourced figure because it is
unfalsifiable *and* reads as history. The date is gone. In its place the
lesson's third-order effect, which it had already named correctly as a
stampede, is now sourced to Vattani, Chierichetti and Lowenstein's VLDB 2015
paper on probabilistic cache stampede prevention. That turned a throwaway
parenthetical into the strongest part of the lesson: the stampede is a
cascading failure specifically because the concurrent recomputations lengthen
each individual recomputation, so the load is generated by the recovery — the
same structure as `A.2`'s retry storm, which is worth a student noticing.

Note the mechanism used to license the brand name: the curriculum task itself
is "Second order effects / Redis fixed slow reads and created cache
invalidation", so `Redis` cannot be rephrased away. It is licensed by the seed
title rather than by a claim token, which is the honest placement — the seed
is about that scenario, and no claim in the paper mentions the product.

**A.10 is now `claimless`** after one edit: its takeaway compared a pool at
forty percent to one at four percent in numerals. Those are the arithmetic of
the illustration, not measurements, so they were spelled out per the caution
above.

**Track A: 3 traced, 8 claimless, 0 unsourced.** Atom count in unsourced prose
falls from 657 to 612, and Track A leaves the per-track table entirely.

## A question worth settling before doing the work

Tracks G, H, I and J carry 18 checkable atoms across 46 lessons. They are
lessons about how to think, not about what happened. Seeding them would mean
finding sources for claims they barely make.

Three options:

- **Seed them anyway**, accepting that most claims will be few and the seeds
  thin. Consistent, and largely ceremonial.
- **Rewrite them to the current lesson shape** — problem block, four beats,
  worked example — without seeds, and leave them `unsourced` permanently and
  deliberately, with the status meaning "makes no historical claims" rather
  than "not yet checked". This would need a fourth status, or a documented
  convention, because today `unsourced` conflates two different situations.
- **Strip the few factual claims** they do make, after which they are honestly
  unsourceable prose about practice.

The second is probably right and needs your decision, because it changes what
`unsourced` means on the site. **Settled: the second, with the fourth status
machine-enforced. Retained for the record of why.**

## The 13 partially-modernised ones

Thirteen unsourced lessons already have a problem block — nine in H, four in E.
Those were retrofitted with the current structure but never seeded. They are
cheaper than the rest: the shape is right, only the facts are unchecked.

## How to regenerate

```
node -e "import('./tools/lib/gate.mjs').then(async g=>{ \
  const {proseOf}=await import('./tools/lib/lesson-schema.mjs'); \
  const fs=await import('node:fs/promises'); \
  const dir=new URL('./content/lessons/',import.meta.url); \
  let tot=0; for(const f of (await fs.readdir(dir)).filter(f=>f.endsWith('.json'))){ \
    const d=JSON.parse(await fs.readFile(new URL(f,dir),'utf8')); \
    if(d.status!=='unsourced') continue; tot+=g.extractAtoms(proseOf(d)).length;} \
  console.log(tot);});"
```

This number should fall monotonically. If it rises, an unsourced lesson gained
a factual claim, which is the one direction that should never happen.


## Where this stands, and what is left

### Done

- **Tracks C, M, N, O** — fully sourced before this review.
- **Tracks G, H, I, J** (46) — 45 `claimless`, 1 `traced` (`J.1`).
- **Track A** (11) — 3 `traced` (`A.2`, `A.3`, `A.4`), 8 `claimless`.
- **Priority band 1** (7) — `B.39`, `B.32`, `B.1`, `K.11`, `B.14`, `0.7`,
  `0.12`, all `traced`. Every one contained at least one error; see the table
  above.
- **Eleven concept lessons converted with no edit** — `0.3`, `0.4`, `0.5`,
  `0.8`, `0.9`, `0.10`, `0.11`, `E.6`, `E.7`, `E.22`, `E.24`.
- **Three rewritten to `claimless`** — `F.3`, `B.2`, `L.9`. The last is worth
  remembering: it presented *the Honest Refusal Rate* in title case as an
  established industry metric and called it the most important metric in
  production retrieval systems. The name appears to have been invented by the
  lesson. That is worse than an unsourced figure, because a reader cannot tell
  there is anything to check.

### The 23 lessons still `unsourced`

Every one of these makes real historical or empirical claims and needs a seed.
None can be honestly converted to `claimless` — that option is now exhausted.

| track | lessons | the subject, and what it will need |
|---|---|---|
| 0 | `0.2`, `0.6` | shell and Unix lineage; floating point and IEEE 754 |
| B | `B.8`, `B.16`, `B.18`, `B.22`, `B.24`, `B.28` | TCP/IP; transactions and write-ahead logging (Jim Gray); Dynamo; caching systems; idempotency |
| D | `D.1`, `D.12`, `D.13` | git's origin; AI-assisted development claims; YAGNI and Gall's law |
| E | `E.1`, `E.4` | Dijkstra 1956 and Knuth; hashing and Luhn 1953 |
| F | `F.1`, `F.8` | Boole 1854 and Shannon 1937; three-valued logic and `NULL` |
| K | `K.2`, `K.6`, `K.13` | the perceptron and its winter; backpropagation 1986; attention and transformers |
| L | `L.6`, `L.12` | retrieval and ranking; agent evaluation figures |
| P | `P.3`, `P.5`, `P.11` | injection; password hashing; prompt injection |

**Two of these already have their sources in the repo.** `B.8` needs Cerf and
Kahn 1974, which is claim `c1` of `content/seeds/0.12.json`. `B.22` needs the
Dynamo paper, which is claim `c5` of `content/seeds/B.32.json`. Reuse the
source rather than duplicating it, as `A.3` does with `B.29`'s Amdahl citation.

**Highest risk of the 23**, on the same reasoning as the original
prioritisation: `L.12` (asserts `90%`, `59%`, `34%`, `60%` — four unsourced
percentages, the densest numeric claim left in the repo), `P.5` (asserts
hardware cracking rates, which are stale by construction like `B.39`'s
pricing was), `P.11` (attributes prompt injection work to a named individual
and a year), `D.12` (asserts a `10x` productivity figure). Do those four
first.

### The 37 tasks with no lesson at all

`K.1`, `K.3`, `K.4`, `K.5`, `K.7`, `K.8`, `K.9`, `K.10`, `K.12`, `K.14`-`K.18`
(14) and `L.1`-`L.5`, `L.7`, `L.8`, `L.10`, `L.11`, `L.13`-`L.26` (23). These
are a different kind of work from the above — writing rather than correcting —
and `tools/missing-lessons.mjs` lists them.
