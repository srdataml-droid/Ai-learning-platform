# Tasks with no lesson

Regenerated 2026-09-21. Derived from content/lessons/ against the curriculum — not maintained by hand, so it cannot drift.

Study order: the sequence first, then the five habits running underneath.

## Track 0 — Before any code

**Complete.** All 12 written.

## Track C — Languages: the chain of walls

**Complete.** All 34 written.

## Track D — Software development craft

**Complete.** All 13 written.

## Track E — Data structures and algorithms

**Complete.** All 28 written.

## Track F — Logic

**Complete.** All 13 written.

## Track B — System design

19 of 48 still missing.

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
- [ ] `B.42` Evaluation pipelines: offline, online, golden sets, regressions
- [ ] `B.43` AI observability: tracing a chain, logging prompts, drift
- [ ] `B.44` Event driven AI: queues in front of models
- [ ] `B.45` Distributed inference: replicas, batching, autoscaling expensive hardware
- [ ] `B.46` Back of envelope estimation drills
- [ ] `B.47` How to open, scope and drive a design round
- [ ] `B.48` Practice designs in order: link shortener, rate limiter, chat, feed, retrieval service, agent platform

## Track P — Security

**Complete.** All 13 written.

## Track M — Math for machines

**Complete.** All 16 written.

## Track N — Data work

**Complete.** All 15 written.

## Track O — Classical ML

**Complete.** All 20 written.

## Track K — Neural networks

14 of 18 still missing.

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
- [ ] `K.17` Tokenisation, context windows, and why cost grows the way it does
- [ ] `K.18` Inference versus training: completely different engineering problems

## Track L — AI engineering

23 of 26 still missing.

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

## Track A — Systems thinking

**Complete.** All 11 written.

## Track G — Critical thinking

**Complete.** All 11 written.

## Track H — Observation

**Complete.** All 9 written.

## Track I — Planning

**Complete.** All 10 written.

## Track J — Debugging

**Complete.** All 16 written.

---

**Total remaining: 56 of 313.**

Regenerate: `node tools/missing-lessons.mjs > docs/MISSING-LESSONS.md`

