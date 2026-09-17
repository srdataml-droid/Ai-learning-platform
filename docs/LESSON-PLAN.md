# Lesson writing plan

Generated 2026-09-17 by `tools/lesson-plan.mjs`. Regenerate after each batch; completed items disappear from it because it is derived from `content/lessons/`, not ticked by hand.

A batch is one writing session and never spans two tracks.

## Order of work

| # | Track | Missing | Batches | Why here |
|---|---|---|---|---|
| 1 | **I** Planning | 10 | 1 | Planning. Conceptual, completable in one batch, and the vocabulary the other tracks assume. |
| 2–3 | **J** Debugging | 13 | 2 | Debugging. Pairs directly with Track H, which is already written. |
| 4 | **A** Systems thinking | 8 | 1 | Systems thinking. Finishes the five habits running underneath. |
| 5–7 | **C** Languages: the chain of walls | 34 | 3 | Languages. Feeds the storyline pages already built; C.27.x are the synthesis tasks. |
| 8 | **D** Software development craft | 10 | 1 | Software development craft. Small and self-contained. |
| 9 | **F** Logic | 10 | 1 | Logic. Small, and underpins the debugging and ML tracks. |
| 10 | **P** Security | 10 | 1 | Security. Small, and every claim in it needs care. |
| 11–13 | **E** Data structures and algorithms | 26 | 3 | Data structures and algorithms. Large, and the most citation-heavy of the foundations. |
| 14–15 | **M** Math for machines | 14 | 2 | Math for machines. Notation-heavy; blueprints matter more than prose here. |
| 16–17 | **N** Data work | 14 | 2 | Data work. Practical; much of it is about failure modes rather than history. |
| 18–19 | **O** Classical ML | 19 | 2 | Classical ML. Large, and needs real sourcing for every named method. |
| 20–21 | **K** Neural networks | 14 | 2 | Neural networks. Dates and papers throughout, so these want seeds, not just prose. |
| 22–23 | **L** AI engineering | 23 | 2 | AI engineering. Fastest-moving material, so the most likely to date badly. |
| 24–27 | **B** System design | 37 | 4 | System design. The largest single track and the heaviest research load. |

**242 lessons across 27 batches.**

---

### Batch 1 — Track I: Planning

10 lessons.

- [ ] `I.1` Write down what this is not, before what it is
- [ ] `I.2` Break work into pieces you can finish in one sitting
- [ ] `I.3` Estimate, record the estimate, compare afterwards
      <br>_note: do it twenty times and estimates become real_
- [ ] `I.4` Map dependencies, including ones that depend on other people replying
- [ ] `I.5` Identify the riskiest assumption and test it first
- [ ] `I.6` Write a one page design doc before anything non trivial: problem, options, choice, why, failure modes
- [ ] `I.7` Define done, in writing, before starting
- [ ] `I.8` Cut scope deliberately rather than slipping deadlines accidentally
- [ ] `I.9` Sequence for learning: do the thing that teaches you most, earliest
- [ ] `I.10` Plan for the version where you have half the time you expected

### Batch 2 — Track J: Debugging (part 1 of 2)

12 lessons.

- [ ] `J.2` Reduce it: smallest input that still fails
- [ ] `J.3` Form one hypothesis at a time, and write it down
- [ ] `J.4` Change one thing per test
- [ ] `J.6` Use a real debugger, not only print statements
- [ ] `J.7` Know when print statements are genuinely faster
- [ ] `J.8` Read the source of the library you are blaming
      <br>_note: it is usually not the library_
- [ ] `J.10` Debugging across a network: tracing, correlation IDs, timeouts
- [ ] `J.11` Debugging concurrency: race conditions, deadlocks, ordering
- [ ] `J.12` Debugging data: silent corruption, encoding, timezones, floats
- [ ] `J.13` Debugging models: is it the data, the label, the metric or the code
      <br>_note: label leakage looks like brilliance until production_
- [ ] `J.14` Root cause versus symptom, and the five whys
- [ ] `J.15` Write the postmortem: what happened, why, what prevents a repeat

### Batch 3 — Track J: Debugging (part 2 of 2)

1 lessons.

- [ ] `J.16` Add the test that would have caught it, before closing it

### Batch 4 — Track A: Systems thinking

8 lessons.

- [ ] `A.1` Name the parts, flows and boundaries of any system
- [ ] `A.5` Constraints as the real design input, not the requirements
- [ ] `A.6` Local versus global optimum
- [ ] `A.7` Failure as a system property, not a component property
- [ ] `A.8` Draw five systems you use daily, from memory, on paper
- [ ] `A.9` Trace one request end to end through something you built
- [ ] `A.10` Ask what happens if this doubles, of every component
- [ ] `A.11` Spot what is missing, not just what is wrong

### Batch 5 — Track C: Languages: the chain of walls (part 1 of 3)

12 lessons.

- [ ] `C.0` Learn the chain itself first, as one story
- [ ] `C.1` 1940s. Machine code and assembly
- [ ] `C.2` 1957. Fortran. Backus, IBM
- [ ] `C.3` 1959. COBOL. CODASYL, Hopper's influence
- [ ] `C.4` 1958. LISP. McCarthy
- [ ] `C.5` 1960. ALGOL
- [ ] `C.6` 1964. BASIC. Kemeny and Kurtz
- [ ] `C.7` 1972. C. Ritchie, Bell Labs
- [ ] `C.8` 1972 to 1980. Smalltalk. Kay, Xerox PARC
- [ ] `C.9` 1983. C++. Stroustrup
- [ ] `C.10` 1987. Perl. Wall
- [ ] `C.11` 1991. Python. van Rossum

### Batch 6 — Track C: Languages: the chain of walls (part 2 of 3)

12 lessons.

- [ ] `C.12` 1995. Java. Gosling, Sun
- [ ] `C.13` 1995. JavaScript. Eich, Netscape, about ten days
- [ ] `C.14` 1995. PHP. Lerdorf
- [ ] `C.15` 1995 and 2004. Ruby, then Rails. Matsumoto, then Hansson
- [ ] `C.16` 1986 and 2012. Erlang, then Elixir. Ericsson
- [ ] `C.17` 2000. C#. Hejlsberg, Microsoft
- [ ] `C.18` 2009. Go. Griesemer, Pike, Thompson at Google
- [ ] `C.19` 2012. TypeScript. Microsoft
- [ ] `C.20` 2015. Rust reaches 1.0. Mozilla
- [ ] `C.21` 2011 and 2014. Kotlin and Swift
- [ ] `C.22` 1974. SQL. Chamberlin and Boyce, IBM
- [ ] `C.23` 2007. CUDA. NVIDIA

### Batch 7 — Track C: Languages: the chain of walls (part 3 of 3)

10 lessons.

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

### Batch 8 — Track D: Software development craft

10 lessons.

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

### Batch 9 — Track F: Logic

10 lessons.

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

### Batch 10 — Track P: Security

10 lessons.

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

### Batch 11 — Track E: Data structures and algorithms (part 1 of 3)

12 lessons.

- [ ] `E.2` Arrays and dynamic arrays
- [ ] `E.3` Strings and the operations that quietly cost O(n)
- [ ] `E.5` Sets
- [ ] `E.6` Two pointers
- [ ] `E.7` Sliding window
- [ ] `E.8` Stacks
- [ ] `E.9` Queues and deques
- [ ] `E.10` Linked lists
      <br>_note: rare in production, common in interviews, know why both are true_
- [ ] `E.11` Trees and tree traversal
- [ ] `E.12` Binary search trees
- [ ] `E.13` Heaps and priority queues
- [ ] `E.14` Tries

### Batch 12 — Track E: Data structures and algorithms (part 2 of 3)

12 lessons.

- [ ] `E.15` Graphs: adjacency list versus matrix
- [ ] `E.16` Breadth first search
- [ ] `E.17` Depth first search
- [ ] `E.18` Topological sort
- [ ] `E.19` Shortest path: Dijkstra, 1956, published 1959
- [ ] `E.20` Recursion, and converting recursion to iteration
- [ ] `E.21` Backtracking
- [ ] `E.22` Greedy algorithms, and when greedy is provably wrong
- [ ] `E.23` Dynamic programming: memoisation then tabulation
- [ ] `E.24` Binary search, including on the answer rather than the array
- [ ] `E.25` Sorting: what your language actually uses, and why
- [ ] `E.26` Bit manipulation basics

### Batch 13 — Track E: Data structures and algorithms (part 3 of 3)

2 lessons.

- [ ] `E.27` The cadence: a small near daily block, medium difficulty, timed after month one
- [ ] `E.28` A log of every pattern you miss, revisited a week later

### Batch 14 — Track M: Math for machines (part 1 of 2)

12 lessons.

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

### Batch 15 — Track M: Math for machines (part 2 of 2)

2 lessons.

- [ ] `M.15` Logs and exponents, and why loss functions use them
- [ ] `M.16` Do all of the above in numpy

### Batch 16 — Track N: Data work (part 1 of 2)

12 lessons.

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

### Batch 17 — Track N: Data work (part 2 of 2)

2 lessons.

- [ ] `N.14` Splitting data honestly
- [ ] `N.15` A reusable pipeline

### Batch 18 — Track O: Classical ML (part 1 of 2)

12 lessons.

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

### Batch 19 — Track O: Classical ML (part 2 of 2)

7 lessons.

- [ ] `O.13` Cross validation
- [ ] `O.14` Overfitting and underfitting
- [ ] `O.15` Bias variance tradeoff
- [ ] `O.16` Accuracy, precision, recall, F1, ROC AUC
- [ ] `O.18` Feature importance
- [ ] `O.19` When classical ML beats a neural network, which is often
- [ ] `O.20` Always build the dumb baseline first

### Batch 20 — Track K: Neural networks (part 1 of 2)

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

### Batch 21 — Track K: Neural networks (part 2 of 2)

2 lessons.

- [ ] `K.17` Tokenisation, context windows, and why cost grows the way it does
- [ ] `K.18` Inference versus training: completely different engineering problems

### Batch 22 — Track L: AI engineering (part 1 of 2)

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

### Batch 23 — Track L: AI engineering (part 2 of 2)

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

### Batch 24 — Track B: System design (part 1 of 4)

12 lessons.

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

### Batch 25 — Track B: System design (part 2 of 4)

12 lessons.

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

### Batch 26 — Track B: System design (part 3 of 4)

12 lessons.

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

### Batch 27 — Track B: System design (part 4 of 4)

1 lessons.

- [ ] `B.48` Practice designs in order: link shortener, rate limiter, chat, feed, retrieval service, agent platform

---

## Done so far

- **Track 0 — Before any code: complete (12).**
- Track D — Software development craft: 3 of 13.
- Track E — Data structures and algorithms: 2 of 28.
- Track F — Logic: 3 of 13.
- Track B — System design: 11 of 48.
- Track P — Security: 3 of 13.
- Track M — Math for machines: 2 of 16.
- Track N — Data work: 1 of 15.
- Track O — Classical ML: 1 of 20.
- Track K — Neural networks: 4 of 18.
- Track L — AI engineering: 3 of 26.
- Track A — Systems thinking: 3 of 11.
- **Track G — Critical thinking: complete (11).**
- **Track H — Observation: complete (9).**
- Track J — Debugging: 3 of 16.

