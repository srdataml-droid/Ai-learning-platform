# Tasks with no lesson

Regenerated 2026-09-18. Derived from content/lessons/ against the curriculum — not maintained by hand, so it cannot drift.

Study order: the sequence first, then the five habits running underneath.

## Track 0 — Before any code

**Complete.** All 12 written.

## Track C — Languages: the chain of walls

10 of 34 still missing.

- [ ] `C.24` HTML and CSS
- [ ] `C.25` Bash and the shell
- [ ] `C.26` Regular expressions
- [ ] `C.27.1` Write year, wall, solved and blueprint for each language above, from memory
- [ ] `C.27.2` Compiler versus interpreter, properly
- [ ] `C.27.3` Static versus dynamic typing, and what each buys at what cost
- [ ] `C.27.4` Memory management: manual, reference counting, garbage collection, ownership
- [ ] `C.27.5` Why Python is slow, precisely, not vaguely
      <br>_note: the interpreter loop and the global interpreter lock_
- [ ] `C.27.6` Write the same small program in Python, JavaScript and Go
- [ ] `C.27.7` Defend a language choice for three different hypothetical systems

## Track D — Software development craft

10 of 13 still missing.

- [ ] `D.2` Commit messages that explain why, not what
- [ ] `D.3` Reading other people's code fast
- [ ] `D.4` Naming things: variables, functions, files, endpoints
- [ ] `D.5` Error handling: fail loudly, fail early, fail with information
- [ ] `D.6` The testing pyramid, and why most people invert it by accident
- [ ] `D.7` Writing a test that would actually have caught a real bug
- [ ] `D.8` Refactoring without changing behaviour
- [ ] `D.9` Continuous integration: what to run on every push
- [ ] `D.10` Documentation that survives: README, architecture notes, decision records
- [ ] `D.11` Code review, on both sides of it

## Track E — Data structures and algorithms

20 of 28 still missing.

- [ ] `E.2` Arrays and dynamic arrays
- [ ] `E.3` Strings and the operations that quietly cost O(n)
- [ ] `E.5` Sets
- [ ] `E.8` Stacks
- [ ] `E.9` Queues and deques
- [ ] `E.10` Linked lists
      <br>_note: rare in production, common in interviews, know why both are true_
- [ ] `E.11` Trees and tree traversal
- [ ] `E.12` Binary search trees
- [ ] `E.13` Heaps and priority queues
- [ ] `E.14` Tries
- [ ] `E.15` Graphs: adjacency list versus matrix
- [ ] `E.16` Breadth first search
- [ ] `E.17` Depth first search
- [ ] `E.18` Topological sort
- [ ] `E.20` Recursion, and converting recursion to iteration
- [ ] `E.21` Backtracking
- [ ] `E.23` Dynamic programming: memoisation then tabulation
- [ ] `E.26` Bit manipulation basics
- [ ] `E.27` The cadence: a small near daily block, medium difficulty, timed after month one
- [ ] `E.28` A log of every pattern you miss, revisited a week later

## Track F — Logic

10 of 13 still missing.

- [ ] `F.2` Implication, and why "if A then B" confuses everyone
- [ ] `F.4` De Morgan's laws
      <br>_note: used on every complex conditional and every SQL WHERE clause_
- [ ] `F.5` Quantifiers: for all, there exists
- [ ] `F.6` Boolean algebra and simplification
- [ ] `F.7` Short circuit evaluation, and the bugs it hides
- [ ] `F.9` Proof techniques: direct, contradiction, induction
- [ ] `F.10` Induction as the basis of recursion correctness
- [ ] `F.11` Invariants: the thing that must stay true
- [ ] `F.12` Type systems as logic, lightly
- [ ] `F.13` Computability: what Turing proved cannot be done, 1936

## Track B — System design

37 of 48 still missing.

- [ ] `B.3` Memory: fast, small, forgetful
- [ ] `B.4` Storage: why disk is slow and why files exist
- [ ] `B.5` The operating system as traffic warden
      <br>_note: Unix 1969, rewritten in C 1973_
- [ ] `B.6` Concurrency: why "at the same time" is usually a lie
- [ ] `B.7` Networking: packets, addresses, ports
- [ ] `B.9` DNS: names into numbers
- [ ] `B.10` HTTP: requests, methods, status codes
      <br>_note: proposed 1989, first site 1991, designed for documents_
- [ ] `B.11` Client and server: what lives where
- [ ] `B.12` HTTPS and what encryption costs you
- [ ] `B.13` Latency, bandwidth, throughput: the three everyone confuses
- [ ] `B.15` Tables, keys, relationships
- [ ] `B.17` Indexes: why your query is slow
- [ ] `B.19` The NoSQL families and when each wins
      <br>_note: Dynamo paper 2007, Cassandra open sourced 2008_
- [ ] `B.20` Connection pooling, the thing that quietly kills serverless apps
- [ ] `B.21` APIs and REST as a contract
- [ ] `B.23` Authentication versus authorisation
- [ ] `B.25` Queues: moving slow work out of the request
- [ ] `B.26` Idempotency and retries
- [ ] `B.27` Rate limiting and backpressure
- [ ] `B.29` Scaling up versus scaling out
- [ ] `B.30` Replication: copies, leaders, and lag
- [ ] `B.31` Partitioning and the hot key problem
- [ ] `B.33` Failure modes: timeouts, partial failure, cascades, thundering herd
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

10 of 13 still missing.

- [ ] `P.1` Threat modelling
- [ ] `P.2` Secrets, and never in git
- [ ] `P.4` XSS and CSRF
- [ ] `P.6` Roles and row level security
- [ ] `P.7` HTTPS and certificates
- [ ] `P.8` Input validation everywhere
- [ ] `P.9` Dependency vulnerabilities
- [ ] `P.10` Rate limiting as defence
- [ ] `P.12` Prompt injection and tool abuse
- [ ] `P.13` PII, retention, consent

## Track M — Math for machines

14 of 16 still missing.

- [ ] `M.1` How much math you actually need, precisely
- [ ] `M.2` Vectors
- [ ] `M.3` Matrices and matrix multiplication
- [ ] `M.5` Shape and dimension errors
- [ ] `M.6` Functions and graphs
- [ ] `M.7` Slope and the derivative
- [ ] `M.9` Gradients in many dimensions
- [ ] `M.10` Probability basics
- [ ] `M.11` Distributions
- [ ] `M.12` Mean, variance, standard deviation
- [ ] `M.13` Conditional probability and Bayes
- [ ] `M.14` Sampling and bias
- [ ] `M.15` Logs and exponents, and why loss functions use them
- [ ] `M.16` Do all of the above in numpy

## Track N — Data work

14 of 15 still missing.

- [ ] `N.1` Where data comes from: files, APIs, databases, scraping
- [ ] `N.2` CSV, JSON, Parquet
- [ ] `N.3` numpy arrays
- [ ] `N.4` pandas: load, inspect, select, filter, group
- [ ] `N.5` Missing data
- [ ] `N.6` Duplicates and keys
- [ ] `N.7` Type coercion errors
- [ ] `N.8` Dates and timezones
- [ ] `N.9` Encoding categorical data
- [ ] `N.10` Scaling and normalising
- [ ] `N.11` Exploratory analysis: look before you model
- [ ] `N.12` Plotting to understand, not to present
- [ ] `N.14` Splitting data honestly
- [ ] `N.15` A reusable pipeline

## Track O — Classical ML

19 of 20 still missing.

- [ ] `O.1` What learning from data actually means
- [ ] `O.2` Supervised versus unsupervised
- [ ] `O.3` Features and labels
- [ ] `O.4` Linear regression
- [ ] `O.5` Logistic regression
- [ ] `O.6` Decision trees
- [ ] `O.7` Random forests
- [ ] `O.8` Gradient boosting
- [ ] `O.9` k nearest neighbours
- [ ] `O.10` k means clustering
- [ ] `O.11` PCA
- [ ] `O.12` Train, validation, test
- [ ] `O.13` Cross validation
- [ ] `O.14` Overfitting and underfitting
- [ ] `O.15` Bias variance tradeoff
- [ ] `O.16` Accuracy, precision, recall, F1, ROC AUC
- [ ] `O.18` Feature importance
- [ ] `O.19` When classical ML beats a neural network, which is often
- [ ] `O.20` Always build the dumb baseline first

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

**Total remaining: 181 of 313.**

Regenerate: `node tools/missing-lessons.mjs > docs/MISSING-LESSONS.md`

