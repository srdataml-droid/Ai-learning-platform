# Seeding review

Written 2026-09-21, from the state at that date. Derived by running the
gate's own atom extractor over every lesson, so the numbers are reproducible
rather than estimated — see "How to regenerate" at the end.

## The state

265 lessons exist against 313 tasks. 164 carry a seed and are `traced`.
**101 carry no seed and are `unsourced`.**

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
`unsourced` means on the site.

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
