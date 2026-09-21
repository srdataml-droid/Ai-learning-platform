# Lesson writing plan

Generated 2026-09-21 by `tools/lesson-plan.mjs`. Regenerate after each batch; completed items disappear from it because it is derived from `content/lessons/`, not ticked by hand.

A batch is one writing session and never spans two tracks.

## Order of work

| # | Track | Missing | Batches | Why here |
|---|---|---|---|---|
| 1–2 | **K** Neural networks | 14 | 2 | Neural networks. Dates and papers throughout, so these want seeds, not just prose. |
| 3–4 | **L** AI engineering | 23 | 2 | AI engineering. Fastest-moving material, so the most likely to date badly. |
| 5–6 | **B** System design | 19 | 2 | System design. The largest single track and the heaviest research load. |

**56 lessons across 6 batches.**

---

### Batch 1 — Track K: Neural networks (part 1 of 2)

12 lessons.

- [ ] `K.1` A neuron: weights, bias, activation
- [ ] `K.3` Why non linearity is the whole trick
- [ ] `K.4` Loss functions: what you are actually minimising
- [ ] `K.5` Gradient descent, by hand, on paper, once
- [ ] `K.7` Overfitting, regularisation, train and test splits
- [ ] `K.8` Why the 1990s stalled: data, compute, vanishing gradients
- [ ] `K.9` Convolutional networks, LeCun, cheque reading by 1998
- [ ] `K.10` Recurrent networks and LSTM, 1997
      <br>_note: built to fix forgetting, and still forgot_
- [ ] `K.12` Embeddings: meaning as geometry
- [ ] `K.14` Pretraining and transfer: BERT 2018, GPT-2 2019, GPT-3 2020
- [ ] `K.15` Scaling laws, 2020
- [ ] `K.16` Instruction tuning and RLHF
      <br>_note: why ChatGPT in 2022 felt different from GPT-3 in 2020. The base model was not the change, the alignment step was_

### Batch 2 — Track K: Neural networks (part 2 of 2)

2 lessons.

- [ ] `K.17` Tokenisation, context windows, and why cost grows the way it does
- [ ] `K.18` Inference versus training: completely different engineering problems

### Batch 3 — Track L: AI engineering (part 1 of 2)

12 lessons.

- [ ] `L.1` Prompting as an engineering discipline, not a trick
- [ ] `L.2` Structured output, and why JSON mode changed what was buildable
- [ ] `L.3` Context engineering: what goes in the window and in what order
- [ ] `L.4` Chunking strategies, and why they decide retrieval quality
- [ ] `L.5` Embeddings in practice: model choice, dimensions, cost
- [ ] `L.7` Reranking
- [ ] `L.8` Grounding and citation
- [ ] `L.10` Evaluation: golden sets, offline scoring, human review, regression gates
- [ ] `L.11` Tool calling: schemas, validation, failure handling
- [ ] `L.13` Memory and state across turns
- [ ] `L.14` Guardrails: input filtering, output checking, prompt injection
- [ ] `L.15` Cost control: caching, model routing, batching, token accounting

### Batch 4 — Track L: AI engineering (part 2 of 2)

11 lessons.

- [ ] `L.16` Latency: streaming, parallel calls, speculative work
- [ ] `L.17` Observability for AI: trace every step, log every prompt, watch drift
- [ ] `L.18` When to fine tune, and the three cheaper things to try first
- [ ] `L.19` Deploying a model: container, endpoint, autoscale, monitor
- [ ] `L.20` Running small models locally, and when that actually wins
- [ ] `L.21` Model versioning
- [ ] `L.22` Reproducibility
- [ ] `L.23` Drift detection
- [ ] `L.24` Shadow deployment
- [ ] `L.25` Feedback loops into evaluation
- [ ] `L.26` Safety: bias, red teaming, failure disclosure

### Batch 5 — Track B: System design (part 1 of 2)

12 lessons.

- [ ] `B.20` Connection pooling, the thing that quietly kills serverless apps
- [ ] `B.23` Authentication versus authorisation
- [ ] `B.25` Queues: moving slow work out of the request
- [ ] `B.26` Idempotency and retries
- [ ] `B.27` Rate limiting and backpressure
- [ ] `B.34` Reliability patterns: circuit breakers, graceful degradation, health checks
      <br>_note: Chaos Monkey 2011_
- [ ] `B.35` Observability: logs, metrics, traces, and what deserves an alert
- [ ] `B.36` Deploying: containers, orchestration, canary releases
- [ ] `B.37` Cost and capacity estimation
- [ ] `B.38` Serving a model: batch versus real time, cold starts, GPU versus CPU
- [ ] `B.40` RAG architecture: chunking, embedding, retrieval, reranking, grounding
- [ ] `B.41` Agentic systems: tool loops, state, cost explosion, compounding failure

### Batch 6 — Track B: System design (part 2 of 2)

7 lessons.

- [ ] `B.42` Evaluation pipelines: offline, online, golden sets, regressions
- [ ] `B.43` AI observability: tracing a chain, logging prompts, drift
- [ ] `B.44` Event driven AI: queues in front of models
- [ ] `B.45` Distributed inference: replicas, batching, autoscaling expensive hardware
- [ ] `B.46` Back of envelope estimation drills
- [ ] `B.47` How to open, scope and drive a design round
- [ ] `B.48` Practice designs in order: link shortener, rate limiter, chat, feed, retrieval service, agent platform

---

## Done so far

- **Track 0 — Before any code: complete (12).**
- **Track C — Languages: the chain of walls: complete (34).**
- **Track D — Software development craft: complete (13).**
- **Track E — Data structures and algorithms: complete (28).**
- **Track F — Logic: complete (13).**
- Track B — System design: 29 of 48.
- **Track P — Security: complete (13).**
- **Track M — Math for machines: complete (16).**
- **Track N — Data work: complete (15).**
- **Track O — Classical ML: complete (20).**
- Track K — Neural networks: 4 of 18.
- Track L — AI engineering: 3 of 26.
- **Track A — Systems thinking: complete (11).**
- **Track G — Critical thinking: complete (11).**
- **Track H — Observation: complete (9).**
- **Track I — Planning: complete (10).**
- **Track J — Debugging: complete (16).**

