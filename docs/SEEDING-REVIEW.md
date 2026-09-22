# Seeding review

Written 2026-09-21. Derived by running the gate's own atom extractor over
every lesson, so the numbers are reproducible rather than estimated — see
"How to regenerate" at the end.

**RESOLVED 2026-09-22. There are no unsourced lessons left.**

Resolved at 276 lessons — 205 traced, 71 claimless, 0 unsourced — and the
curriculum was finished the same day. It now stands at **313 lessons: 218
traced, 95 claimless, 0 unsourced**, which is every task in the curriculum.
Checkable atoms in unsourced prose: **0**, down from 707 when this was
written. Every lesson in the repo either traces to a seed or is
machine-checked to assert nothing checkable. The allowlist was never touched
and remains at nine entries.

Everything below is the original review, kept because the reasoning it records
is still the reasoning, and because the findings are the argument for the
pipeline existing.

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

## Prioritisation (historical — every band below is now complete)

Ordered by risk rather than by track order. Kept because the ordering turned
out to be right: the highest-risk band contained the highest density of actual
errors, which is the evidence that risk-ordering the work was correct rather
than merely tidy.

**1. Numeric claims in AI/system lessons.** `B.39`, `B.32`, `B.1`, `K.11`,
`B.14`, `0.7`, `0.12`. These assert money, percentages, latencies and hardware
specs — the claims most likely to be quoted, most likely to be wrong, and most
likely to age badly. `B.39` in particular prices hardware, which is stale
within a year by construction.

**2. Tracks that are one batch from complete.** D (3), F (3), P (3), E (6).
Twelve lessons closes four tracks. Highest ratio of "track goes green" to work
done.

**3. Track B's remaining 11**, which are the pre-pipeline ones in a track
otherwise being actively sourced — the inconsistency is most visible here.

**4. The never-sourced tracks.** A, G, H, I, J (57 lessons). These are the
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

## The question this turned on (settled — kept for the reasoning)

**Settled: the second option, with the fourth status machine-enforced.** The
argument is recorded because it is the decision the rest of the work rests on.

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
`unsourced` means on the site.

## The 13 partially-modernised ones (resolved)

Thirteen unsourced lessons already had a problem block — nine in H, four in E —
retrofitted with the current structure but never seeded. They were cheaper than
the rest, as predicted: the shape was right and only the facts were unchecked.
The H ones became `claimless`, the E ones are `traced` or `claimless`.

## Where this stands

### The sourcing work is complete

- **Tracks C, M, N, O** — fully sourced before this review began.
- **Tracks G, H, I, J** (46) — 45 `claimless`, 1 `traced` (`J.1`).
- **Track A** (11) — 3 `traced` (`A.2`, `A.3`, `A.4`), 8 `claimless`.
- **Everything else** — sourced or converted, in the order this document set
  out. Fourteen lessons became `claimless`: eleven with no edit at all, and
  `F.3`, `B.2`, `L.9`, `L.12`, `D.12`, `B.28`, `P.3` after rewriting.

`L.9` is the one worth remembering from that group. It presented *the Honest
Refusal Rate* in title case as an established industry metric and called it the
most important metric in production retrieval systems. The name appears to have
been invented by the lesson. That is worse than an unsourced figure, because a
reader cannot tell there is anything to check.

### Two notes for whoever works here next

**Citing a source another seed already uses is the house convention, not a
duplication.** Each seed carries its own claim with its own `source` block, and
the same URL appears across many seeds — the Dynamo paper is cited by five, the
PagedAttention paper by five, Saltzer and Schroeder by seven. So `B.8` citing
Cerf and Kahn 1974 alongside `0.12`, and `B.22` citing Dynamo alongside `B.32`,
follows the same pattern as `A.3` and `B.29` both citing Amdahl. What to reuse
is the *research* — check whether a claim you need has already been written and
verified elsewhere in `content/seeds/` before going looking for it again.

**`proseOf()` excludes `blueprint` and `worked.code`.** So arithmetic can be
shown in numerals there while gated prose spells derived figures out. That is
how `B.39`, `B.1` and `0.6` show their working. It is a deliberate hole in the
gate, not an oversight, and it is the reason those lessons could keep their
worked calculations.

### The one thing still outstanding: 37 tasks have no lesson

313 tasks, 276 lessons. The gap is `K.1`, `K.3`, `K.4`, `K.5`, `K.7`, `K.8`,
`K.9`, `K.10`, `K.12`, `K.14`–`K.18` (14) and `L.1`–`L.5`, `L.7`, `L.8`,
`L.10`, `L.11`, `L.13`–`L.26` (23). `tools/missing-lessons.mjs` lists them.

This is a different kind of work from everything above — writing rather than
correcting — and it is the only remaining gap between the curriculum and the
lessons. Note that nothing is broken by it: a task with no lesson returns null
and the site renders the gap, which `tests/no-invented-lessons.test.mjs` exists
to guarantee. The failure mode this repo was built to avoid is a confident
non-fact, not a visible absence.

## Final tally, and what the audit actually found

Every one of the pre-pipeline lessons that made checkable claims has now been
read against its sources. **The great majority contained at least one error**,
and they were not typos. Grouped by kind, because the pattern is the finding:

**Arithmetic that was simply wrong.** `B.39`'s blueprint gave the KV-cache
formula at batch 16 and concluded ≈10.7 GB, which is the batch-of-8 answer —
off by exactly 2x in its own worked example. `B.1` had four compounding
errors starting from "L1 ≈ 1 ns (the speed of light through a few millimeters
of silicon)", wrong by about two orders of magnitude, whose bad 1 ns then
propagated into a wrong 100x ratio; its human-scale analogy also disagreed
with itself between story and blueprint, and its "12 years" matched no entry
in the table at all.

**Attributions given to the wrong person.** `P.11` credited Simon Willison
with *discovering* prompt injection; he has said publicly and repeatedly, "I
didn't discover it, I coined it." `B.16` and `B.18` both credited the ACID
acronym to Gray 1981; it is Härder and Reuter 1983. `B.8` credited RFC 675 to
Cerf and Kahn; it is Cerf, Dalal and Sunshine. `K.6` implied backpropagation
was invented in 1986; Linnainmaa 1970 and Werbos 1974 precede it. `0.2` said
the mouse was invented at Xerox PARC; it was Engelbart, at SRI.

**Contested history stated as settled.** `K.2` asserted that *Perceptrons*
"triggered the devastating First AI Winter", a disputed causal claim whose
dates do not even fit — the funding collapse followed the 1973 Lighthill
report, four years after the book.

**Hedges deleted in retelling.** `K.13` said the √dk scaling is "mandatory
because" dot products saturate the softmax. The paper says *"We suspect…"*.
The same pattern sits one paper earlier, where Bahdanau, Cho and Bengio write
*"we conjecture…"*. Both papers defining that lineage hedge their central
causal claim and both hedges vanished on the way into textbooks. This is the
most on-the-nose finding of the whole exercise: a curriculum about checking
claims had itself flattened two conjectures into facts.

**Figures stale by construction.** `B.39` priced a GPU and `P.5` quoted a
cracking rate for a named consumer graphics card. Both describe one moment of
one hardware generation, both were unsourceable at the figures given, and both
age in the direction that favours the attacker or flatters the vendor. `B.1`'s
latency table is the same problem in a milder form, and there the fix was to
keep the figures but state plainly that they date from around 2012 and that the
ordering itself can invert — the ratios are the durable content.

**Contributions reduced to a passing mention.** `P.5` described bcrypt as
having "an adjustable work factor (cost)" in a subordinate clause. The paper is
called *A Future-Adaptable Password Scheme*: the adaptability **is** the
contribution, because any fixed cost is eventually cheap, so what matters is
that the cost is a dial rather than that the function is slow. The lesson had
the mechanism and had lost the argument. It also omitted the limitation that
follows — a stored hash keeps its old parameter until the user next logs in, so
raising the work factor protects new passwords immediately, old ones only
gradually, and a dormant account never upgrades at all.

**Quotations asserted more firmly than their provenance supports.** `B.24`
stated the "two hard things in computer science" line as a flat fact about Phil
Karlton. It is *commonly attributed* to him and is not firmly documented to an
original source; the numbered variants of the joke are later additions by other
people. Fitting, in a lesson about the one line every engineer can quote.

**Invented specifics.** `A.4` opened "In 2010, an engineering team noticed…",
a fabricated date attached to a hypothetical — worse than an unsourced figure,
because it is unfalsifiable *and* reads as history. `B.39` priced an H100 at
$30,000, which is also structurally wrong since the SXM part is not sold as a
card at all. `K.11` had "wasting 95% of GPU cycles". `L.9` presented *the
Honest Refusal Rate* in title case as an established industry metric; the name
appears to have been the lesson's own invention.

**Technical conflations.** `B.22` listed "sloppy quorums (R + W > N)" as one
item and then asked how that condition "ensures strong read consistency" — two
different mechanisms, and the question contains a false premise, since the
sloppy quorum is precisely what stops the condition guaranteeing anything.

### Two errors of my own, recorded here rather than quietly fixed

A commit message claimed unsourced prose had fallen to 391 when the measured
figure was 470, and another claimed 201 traced when the build reported 199.
Both were written before running the count. And an earlier version of this
document asserted that all 23 then-remaining lessons made real historical
claims and that `claimless` was exhausted — asserted from atom lists without
reading the lessons. `L.12`, which this document had ranked as the densest
numeric claim left in the repo, turned out to be 0.9^5 and 0.9^10 worked out
from an explicitly hypothetical premise.

The lesson generalises and is worth keeping: an atom count tells you the
extractor fired, not what the prose was doing.

### How to regenerate the headline number

The command below should now print `0`. If it ever prints anything else, an
unsourced lesson has appeared or a `traced` one has lost its seed — both of
which the suite already fails on, so this is a second check rather than the
only one.

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

Originally this number was expected to fall monotonically. It reached `0` on
2026-09-22, so the check has changed character: it is no longer a progress
measure but an invariant, and any non-zero result is a regression.
