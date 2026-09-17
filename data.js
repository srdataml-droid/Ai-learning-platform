// data.js - Single Source of Truth for Curriculum Content
window.CURRICULUM = {
  sequence: ["0", "C", "D", "E", "F", "B", "P", "M", "N", "O", "K", "L"],
  underneath: ["A", "G", "H", "I", "J"],
  
  stages: [
    {
      id: "stage-1",
      number: "1",
      name: "Software Foundations",
      blurb: "From raw terminal and hardware fundamentals to language evolution and engineering hygiene.",
      trackIds: ["0", "C", "D"]
    },
    {
      id: "stage-2",
      number: "2",
      name: "Core Computer Science & Systems",
      blurb: "Provable algorithmic bounds, mathematical logic, distributed system design, and security boundaries.",
      trackIds: ["E", "F", "B", "P"]
    },
    {
      id: "stage-3",
      number: "3",
      name: "Data, Math & Machine Learning",
      blurb: "Linear algebra and calculus in numpy, data pipelines, and classical statistical machine learning baselines.",
      trackIds: ["M", "N", "O"]
    },
    {
      id: "stage-4",
      number: "4",
      name: "Deep Learning & Production AI",
      blurb: "From Perceptrons and backpropagation to LLMs, RAG, agents, evaluations, and planetary deployment.",
      trackIds: ["K", "L"]
    },
    {
      id: "undercurrent",
      number: "—",
      name: "Foundational Habits (Running Underneath)",
      blurb: "The five core disciplines active throughout the entire journey. Never studied in a silo.",
      trackIds: ["A", "G", "H", "I", "J"]
    }
  ],

  cadence: [
    { freq: "Daily, small", track: "Track E", desc: "One problem. The skill decays without repetition." },
    { freq: "Per session", track: "Track B", desc: "Two or three lessons, in order, four beats each." },
    { freq: "Attached to real work", track: "Tracks D, H, J, I", desc: "These only stick when applied to something real." },
    { freq: "Weekly, deliberate", track: "Tracks K and L", desc: "One concept built rather than read." },
    { freq: "Background, always", track: "Tracks A, C, F, G", desc: "Underlying principles active at every stage." }
  ],

  accuracyNote: "The dates above are the well established ones and they hold. Specific figures, dollar amounts and performance numbers get traced to a primary source at the lesson that uses them. A number that cannot be traced gets struck, not softened.",
  fourBeats: "Every lesson, when eventually taught, runs four beats in this order: what broke before it existed, the fix with year and people, what it cost because every fix creates the next problem, and the question an interviewer asks about it.",

  tracks: [
    {
      id: "0",
      name: "Before any code",
      stage: "Stage 1: Software Foundations",
      stageNumber: 1,
      cadence: "Per session",
      blurb: "Assumes zero knowledge. Nobody skips this, including people who think they should.",
      tasks: [
        { id: "0.1", text: "What a file is, what a folder is", note: "" },
        { id: "0.2", text: "The terminal: pwd, ls, cd, mkdir, cp, mv, rm, cat", note: "" },
        { id: "0.3", text: "Why code is plain text, not a document", note: "" },
        { id: "0.4", text: "What a program is: text, then interpreter or compiler, then a running process", note: "" },
        { id: "0.5", text: "Bits, bytes, binary, hex", note: "" },
        { id: "0.6", text: "Integers versus floats, and why 0.1 plus 0.2 is not 0.3", note: "" },
        { id: "0.7", text: "ASCII, Unicode, UTF-8, and why emojis break things", note: "" },
        { id: "0.8", text: "Variables, values, types", note: "" },
        { id: "0.9", text: "Input and output", note: "" },
        { id: "0.10", text: "Running your first program, and reading the error when it fails", note: "" },
        { id: "0.11", text: "Installing things: package managers, versions, virtual environments", note: "" },
        { id: "0.12", text: "What happens when you type a URL and press enter", note: "" }
      ]
    },
    {
      id: "C",
      name: "Languages: the chain of walls",
      stage: "Stage 1: Software Foundations",
      stageNumber: 1,
      cadence: "Background, always",
      blurb: "The rule of this track: every language was invented by someone who hit a wall in the one before it. Teach it as one continuous chain, never as a comparison table. Each entry has four parts: the wall it answered, what it solved, the blueprint (what you actually type), and the wall it hit, which is the reason the next one exists.",
      tasks: [
        { id: "C.0", text: "Learn the chain itself first, as one story", note: "" },
        { id: "C.1", text: "1940s. Machine code and assembly", note: "" },
        { id: "C.2", text: "1957. Fortran. Backus, IBM", note: "" },
        { id: "C.3", text: "1959. COBOL. CODASYL, Hopper's influence", note: "" },
        { id: "C.4", text: "1958. LISP. McCarthy", note: "" },
        { id: "C.5", text: "1960. ALGOL", note: "" },
        { id: "C.6", text: "1964. BASIC. Kemeny and Kurtz", note: "" },
        { id: "C.7", text: "1972. C. Ritchie, Bell Labs", note: "" },
        { id: "C.8", text: "1972 to 1980. Smalltalk. Kay, Xerox PARC", note: "" },
        { id: "C.9", text: "1983. C++. Stroustrup", note: "" },
        { id: "C.10", text: "1987. Perl. Wall", note: "" },
        { id: "C.11", text: "1991. Python. van Rossum", note: "" },
        { id: "C.12", text: "1995. Java. Gosling, Sun", note: "" },
        { id: "C.13", text: "1995. JavaScript. Eich, Netscape, about ten days", note: "" },
        { id: "C.14", text: "1995. PHP. Lerdorf", note: "" },
        { id: "C.15", text: "1995 and 2004. Ruby, then Rails. Matsumoto, then Hansson", note: "" },
        { id: "C.16", text: "1986 and 2012. Erlang, then Elixir. Ericsson", note: "" },
        { id: "C.17", text: "2000. C#. Hejlsberg, Microsoft", note: "" },
        { id: "C.18", text: "2009. Go. Griesemer, Pike, Thompson at Google", note: "" },
        { id: "C.19", text: "2012. TypeScript. Microsoft", note: "" },
        { id: "C.20", text: "2015. Rust reaches 1.0. Mozilla", note: "" },
        { id: "C.21", text: "2011 and 2014. Kotlin and Swift", note: "" },
        { id: "C.22", text: "1974. SQL. Chamberlin and Boyce, IBM", note: "" },
        { id: "C.23", text: "2007. CUDA. NVIDIA", note: "" },
        { id: "C.24", text: "HTML and CSS", note: "" },
        { id: "C.25", text: "Bash and the shell", note: "" },
        { id: "C.26", text: "Regular expressions", note: "" },
        { id: "C.27.1", text: "Write year, wall, solved and blueprint for each language above, from memory", note: "" },
        { id: "C.27.2", text: "Compiler versus interpreter, properly", note: "" },
        { id: "C.27.3", text: "Static versus dynamic typing, and what each buys at what cost", note: "" },
        { id: "C.27.4", text: "Memory management: manual, reference counting, garbage collection, ownership", note: "" },
        { id: "C.27.5", text: "Why Python is slow, precisely, not vaguely", note: "the interpreter loop and the global interpreter lock" },
        { id: "C.27.6", text: "Write the same small program in Python, JavaScript and Go", note: "" },
        { id: "C.27.7", text: "Defend a language choice for three different hypothetical systems", note: "" }
      ]
    },
    {
      id: "D",
      name: "Software development craft",
      stage: "Stage 1: Software Foundations",
      stageNumber: 1,
      cadence: "Attached to real work",
      blurb: "Practices that keep code readable, tested, reviewable, and resilient over years.",
      tasks: [
        { id: "D.1", text: "Version control past the three commands you already use", note: "" },
        { id: "D.2", text: "Commit messages that explain why, not what", note: "" },
        { id: "D.3", text: "Reading other people's code fast", note: "" },
        { id: "D.4", text: "Naming things: variables, functions, files, endpoints", note: "" },
        { id: "D.5", text: "Error handling: fail loudly, fail early, fail with information", note: "" },
        { id: "D.6", text: "The testing pyramid, and why most people invert it by accident", note: "" },
        { id: "D.7", text: "Writing a test that would actually have caught a real bug", note: "" },
        { id: "D.8", text: "Refactoring without changing behaviour", note: "" },
        { id: "D.9", text: "Continuous integration: what to run on every push", note: "" },
        { id: "D.10", text: "Documentation that survives: README, architecture notes, decision records", note: "" },
        { id: "D.11", text: "Code review, on both sides of it", note: "" },
        { id: "D.12", text: "Working with AI generated code", note: "read it, explain it, find the questionable choice, replace one part, test it. Every time" },
        { id: "D.13", text: "Knowing when you are overengineering", note: "if you cannot name the incident that justified it, you are building for an imaginary future" }
      ]
    },
    {
      id: "E",
      name: "Data structures and algorithms",
      stage: "Stage 2: Core Computer Science & Systems",
      stageNumber: 2,
      cadence: "Daily, small",
      blurb: "Knuth began TAOCP in 1962, first volume 1968. Dijkstra worked out shortest path in about twenty minutes in 1956, in a cafe, without a pencil. These are the only tools in this syllabus with provable properties, and the gate almost every serious company still puts in front of you.",
      tasks: [
        { id: "E.1", text: "Big O, properly: time and space, best, average, worst", note: "" },
        { id: "E.2", text: "Arrays and dynamic arrays", note: "" },
        { id: "E.3", text: "Strings and the operations that quietly cost O(n)", note: "" },
        { id: "E.4", text: "Hash maps: how they work, and when they degrade", note: "" },
        { id: "E.5", text: "Sets", note: "" },
        { id: "E.6", text: "Two pointers", note: "" },
        { id: "E.7", text: "Sliding window", note: "" },
        { id: "E.8", text: "Stacks", note: "" },
        { id: "E.9", text: "Queues and deques", note: "" },
        { id: "E.10", text: "Linked lists", note: "rare in production, common in interviews, know why both are true" },
        { id: "E.11", text: "Trees and tree traversal", note: "" },
        { id: "E.12", text: "Binary search trees", note: "" },
        { id: "E.13", text: "Heaps and priority queues", note: "" },
        { id: "E.14", text: "Tries", note: "" },
        { id: "E.15", text: "Graphs: adjacency list versus matrix", note: "" },
        { id: "E.16", text: "Breadth first search", note: "" },
        { id: "E.17", text: "Depth first search", note: "" },
        { id: "E.18", text: "Topological sort", note: "" },
        { id: "E.19", text: "Shortest path: Dijkstra, 1956, published 1959", note: "" },
        { id: "E.20", text: "Recursion, and converting recursion to iteration", note: "" },
        { id: "E.21", text: "Backtracking", note: "" },
        { id: "E.22", text: "Greedy algorithms, and when greedy is provably wrong", note: "" },
        { id: "E.23", text: "Dynamic programming: memoisation then tabulation", note: "" },
        { id: "E.24", text: "Binary search, including on the answer rather than the array", note: "" },
        { id: "E.25", text: "Sorting: what your language actually uses, and why", note: "" },
        { id: "E.26", text: "Bit manipulation basics", note: "" },
        { id: "E.27", text: "The cadence: a small near daily block, medium difficulty, timed after month one", note: "" },
        { id: "E.28", text: "A log of every pattern you miss, revisited a week later", note: "" }
      ]
    },
    {
      id: "F",
      name: "Logic",
      stage: "Stage 2: Core Computer Science & Systems",
      stageNumber: 2,
      cadence: "Background, always",
      blurb: "Boole published The Laws of Thought in 1854, turning reasoning into algebra. For eighty years it was philosophy. In 1937 Shannon noticed it described electrical switching circuits exactly, and the digital world followed. Turing had already defined, in 1936, what a machine could and could not compute.",
      tasks: [
        { id: "F.1", text: "Propositions, truth tables, AND, OR, NOT", note: "" },
        { id: "F.2", text: "Implication, and why \"if A then B\" confuses everyone", note: "" },
        { id: "F.3", text: "Contrapositive, converse, inverse", note: "debugging is mostly contrapositive reasoning" },
        { id: "F.4", text: "De Morgan's laws", note: "used on every complex conditional and every SQL WHERE clause" },
        { id: "F.5", text: "Quantifiers: for all, there exists", note: "" },
        { id: "F.6", text: "Boolean algebra and simplification", note: "" },
        { id: "F.7", text: "Short circuit evaluation, and the bugs it hides", note: "" },
        { id: "F.8", text: "Null, undefined, and three valued logic in SQL", note: "NULL is not equal to NULL" },
        { id: "F.9", text: "Proof techniques: direct, contradiction, induction", note: "" },
        { id: "F.10", text: "Induction as the basis of recursion correctness", note: "" },
        { id: "F.11", text: "Invariants: the thing that must stay true", note: "" },
        { id: "F.12", text: "Type systems as logic, lightly", note: "" },
        { id: "F.13", text: "Computability: what Turing proved cannot be done, 1936", note: "" }
      ]
    },
    {
      id: "B",
      name: "System design",
      stage: "Stage 2: Core Computer Science & Systems",
      stageNumber: 2,
      cadence: "Per session",
      blurb: "From the hardware cycle to planetary distributed inference and the interview crucible.",
      tasks: [
        { id: "B.1", part: "Part 1 — The machine itself", text: "What a computer is: CPU, RAM, disk, and why the difference matters", note: "" },
        { id: "B.2", part: "Part 1 — The machine itself", text: "Program versus process", note: "" },
        { id: "B.3", part: "Part 1 — The machine itself", text: "Memory: fast, small, forgetful", note: "" },
        { id: "B.4", part: "Part 1 — The machine itself", text: "Storage: why disk is slow and why files exist", note: "" },
        { id: "B.5", part: "Part 1 — The machine itself", text: "The operating system as traffic warden", note: "Unix 1969, rewritten in C 1973" },
        { id: "B.6", part: "Part 1 — The machine itself", text: "Concurrency: why \"at the same time\" is usually a lie", note: "" },

        { id: "B.7", part: "Part 2 — Two machines talking", text: "Networking: packets, addresses, ports", note: "" },
        { id: "B.8", part: "Part 2 — Two machines talking", text: "TCP versus UDP", note: "" },
        { id: "B.9", part: "Part 2 — Two machines talking", text: "DNS: names into numbers", note: "" },
        { id: "B.10", part: "Part 2 — Two machines talking", text: "HTTP: requests, methods, status codes", note: "proposed 1989, first site 1991, designed for documents" },
        { id: "B.11", part: "Part 2 — Two machines talking", text: "Client and server: what lives where", note: "" },
        { id: "B.12", part: "Part 2 — Two machines talking", text: "HTTPS and what encryption costs you", note: "" },
        { id: "B.13", part: "Part 2 — Two machines talking", text: "Latency, bandwidth, throughput: the three everyone confuses", note: "" },

        { id: "B.14", part: "Part 3 — Storing things properly", text: "Why databases exist at all", note: "Codd 1970, System R, SEQUEL 1974" },
        { id: "B.15", part: "Part 3 — Storing things properly", text: "Tables, keys, relationships", note: "" },
        { id: "B.16", part: "Part 3 — Storing things properly", text: "Transactions: the money must not vanish rule", note: "" },
        { id: "B.17", part: "Part 3 — Storing things properly", text: "Indexes: why your query is slow", note: "" },
        { id: "B.18", part: "Part 3 — Storing things properly", text: "Schema design, and when to deliberately break it", note: "" },
        { id: "B.19", part: "Part 3 — Storing things properly", text: "The NoSQL families and when each wins", note: "Dynamo paper 2007, Cassandra open sourced 2008" },
        { id: "B.20", part: "Part 3 — Storing things properly", text: "Connection pooling, the thing that quietly kills serverless apps", note: "" },

        { id: "B.21", part: "Part 4 — Surviving real users", text: "APIs and REST as a contract", note: "" },
        { id: "B.22", part: "Part 4 — Surviving real users", text: "Statelessness: why the server should forget you", note: "" },
        { id: "B.23", part: "Part 4 — Surviving real users", text: "Authentication versus authorisation", note: "" },
        { id: "B.24", part: "Part 4 — Surviving real users", text: "Caching: what, where, and the invalidation problem", note: "" },
        { id: "B.25", part: "Part 4 — Surviving real users", text: "Queues: moving slow work out of the request", note: "" },
        { id: "B.26", part: "Part 4 — Surviving real users", text: "Idempotency and retries", note: "" },
        { id: "B.27", part: "Part 4 — Surviving real users", text: "Rate limiting and backpressure", note: "" },
        { id: "B.28", part: "Part 4 — Surviving real users", text: "Load balancing", note: "" },
        { id: "B.29", part: "Part 4 — Surviving real users", text: "Scaling up versus scaling out", note: "" },

        { id: "B.30", part: "Part 5 — Many machines", text: "Replication: copies, leaders, and lag", note: "" },
        { id: "B.31", part: "Part 5 — Many machines", text: "Partitioning and the hot key problem", note: "" },
        { id: "B.32", part: "Part 5 — Many machines", text: "Consistency: what you give up, and CAP in plain words", note: "" },
        { id: "B.33", part: "Part 5 — Many machines", text: "Failure modes: timeouts, partial failure, cascades, thundering herd", note: "" },
        { id: "B.34", part: "Part 5 — Many machines", text: "Reliability patterns: circuit breakers, graceful degradation, health checks", note: "Chaos Monkey 2011" },
        { id: "B.35", part: "Part 5 — Many machines", text: "Observability: logs, metrics, traces, and what deserves an alert", note: "" },
        { id: "B.36", part: "Part 5 — Many machines", text: "Deploying: containers, orchestration, canary releases", note: "" },
        { id: "B.37", part: "Part 5 — Many machines", text: "Cost and capacity estimation", note: "" },

        { id: "B.38", part: "Part 6 — AI systems specifically", text: "Serving a model: batch versus real time, cold starts, GPU versus CPU", note: "" },
        { id: "B.39", part: "Part 6 — AI systems specifically", text: "LLM serving: tokens, context, streaming, and why latency behaves oddly", note: "" },
        { id: "B.40", part: "Part 6 — AI systems specifically", text: "RAG architecture: chunking, embedding, retrieval, reranking, grounding", note: "" },
        { id: "B.41", part: "Part 6 — AI systems specifically", text: "Agentic systems: tool loops, state, cost explosion, compounding failure", note: "" },
        { id: "B.42", part: "Part 6 — AI systems specifically", text: "Evaluation pipelines: offline, online, golden sets, regressions", note: "" },
        { id: "B.43", part: "Part 6 — AI systems specifically", text: "AI observability: tracing a chain, logging prompts, drift", note: "" },
        { id: "B.44", part: "Part 6 — AI systems specifically", text: "Event driven AI: queues in front of models", note: "" },
        { id: "B.45", part: "Part 6 — AI systems specifically", text: "Distributed inference: replicas, batching, autoscaling expensive hardware", note: "" },

        { id: "B.46", part: "Part 7 — The interview layer", text: "Back of envelope estimation drills", note: "" },
        { id: "B.47", part: "Part 7 — The interview layer", text: "How to open, scope and drive a design round", note: "" },
        { id: "B.48", part: "Part 7 — The interview layer", text: "Practice designs in order: link shortener, rate limiter, chat, feed, retrieval service, agent platform", note: "" }
      ]
    },
    {
      id: "P",
      name: "Security",
      stage: "Stage 2: Core Computer Science & Systems",
      stageNumber: 2,
      cadence: "Attached to real work",
      blurb: "Threat models, injection, authentication, authorization, dependency chains, and defensive boundaries.",
      tasks: [
        { id: "P.1", text: "Threat modelling", note: "" },
        { id: "P.2", text: "Secrets, and never in git", note: "" },
        { id: "P.3", text: "SQL injection", note: "" },
        { id: "P.4", text: "XSS and CSRF", note: "" },
        { id: "P.5", text: "Passwords, hashing, sessions, tokens", note: "" },
        { id: "P.6", text: "Roles and row level security", note: "" },
        { id: "P.7", text: "HTTPS and certificates", note: "" },
        { id: "P.8", text: "Input validation everywhere", note: "" },
        { id: "P.9", text: "Dependency vulnerabilities", note: "" },
        { id: "P.10", text: "Rate limiting as defence", note: "" },
        { id: "P.11", text: "Logging without leaking", note: "" },
        { id: "P.12", text: "Prompt injection and tool abuse", note: "" },
        { id: "P.13", text: "PII, retention, consent", note: "" }
      ]
    },
    {
      id: "M",
      name: "Math for machines",
      stage: "Stage 3: Data, Math & Machine Learning",
      stageNumber: 3,
      cadence: "Per session",
      blurb: "Sits before neural networks. Do all of it in numpy, not only on paper.",
      tasks: [
        { id: "M.1", text: "How much math you actually need, precisely", note: "" },
        { id: "M.2", text: "Vectors", note: "" },
        { id: "M.3", text: "Matrices and matrix multiplication", note: "" },
        { id: "M.4", text: "Dot product as similarity", note: "this is what embeddings are" },
        { id: "M.5", text: "Shape and dimension errors", note: "" },
        { id: "M.6", text: "Functions and graphs", note: "" },
        { id: "M.7", text: "Slope and the derivative", note: "" },
        { id: "M.8", text: "The chain rule", note: "literally backpropagation" },
        { id: "M.9", text: "Gradients in many dimensions", note: "" },
        { id: "M.10", text: "Probability basics", note: "" },
        { id: "M.11", text: "Distributions", note: "" },
        { id: "M.12", text: "Mean, variance, standard deviation", note: "" },
        { id: "M.13", text: "Conditional probability and Bayes", note: "" },
        { id: "M.14", text: "Sampling and bias", note: "" },
        { id: "M.15", text: "Logs and exponents, and why loss functions use them", note: "" },
        { id: "M.16", text: "Do all of the above in numpy", note: "" }
      ]
    },
    {
      id: "N",
      name: "Data work",
      stage: "Stage 3: Data, Math & Machine Learning",
      stageNumber: 3,
      cadence: "Attached to real work",
      blurb: "Pipelines, cleaning, encoding, honest validation splits, and leakage prevention.",
      tasks: [
        { id: "N.1", text: "Where data comes from: files, APIs, databases, scraping", note: "" },
        { id: "N.2", text: "CSV, JSON, Parquet", note: "" },
        { id: "N.3", text: "numpy arrays", note: "" },
        { id: "N.4", text: "pandas: load, inspect, select, filter, group", note: "" },
        { id: "N.5", text: "Missing data", note: "" },
        { id: "N.6", text: "Duplicates and keys", note: "" },
        { id: "N.7", text: "Type coercion errors", note: "" },
        { id: "N.8", text: "Dates and timezones", note: "" },
        { id: "N.9", text: "Encoding categorical data", note: "" },
        { id: "N.10", text: "Scaling and normalising", note: "" },
        { id: "N.11", text: "Exploratory analysis: look before you model", note: "" },
        { id: "N.12", text: "Plotting to understand, not to present", note: "" },
        { id: "N.13", text: "Leakage, the bug that makes you look brilliant", note: "" },
        { id: "N.14", text: "Splitting data honestly", note: "" },
        { id: "N.15", text: "A reusable pipeline", note: "" }
      ]
    },
    {
      id: "O",
      name: "Classical ML",
      stage: "Stage 3: Data, Math & Machine Learning",
      stageNumber: 3,
      cadence: "Per session",
      blurb: "The bridge into neural networks. Most real problems are solved here, and the dumb baseline wins more often than anyone admits.",
      tasks: [
        { id: "O.1", text: "What learning from data actually means", note: "" },
        { id: "O.2", text: "Supervised versus unsupervised", note: "" },
        { id: "O.3", text: "Features and labels", note: "" },
        { id: "O.4", text: "Linear regression", note: "" },
        { id: "O.5", text: "Logistic regression", note: "" },
        { id: "O.6", text: "Decision trees", note: "" },
        { id: "O.7", text: "Random forests", note: "" },
        { id: "O.8", text: "Gradient boosting", note: "" },
        { id: "O.9", text: "k nearest neighbours", note: "" },
        { id: "O.10", text: "k means clustering", note: "" },
        { id: "O.11", text: "PCA", note: "" },
        { id: "O.12", text: "Train, validation, test", note: "" },
        { id: "O.13", text: "Cross validation", note: "" },
        { id: "O.14", text: "Overfitting and underfitting", note: "" },
        { id: "O.15", text: "Bias variance tradeoff", note: "" },
        { id: "O.16", text: "Accuracy, precision, recall, F1, ROC AUC", note: "" },
        { id: "O.17", text: "Why accuracy lies on imbalanced data", note: "" },
        { id: "O.18", text: "Feature importance", note: "" },
        { id: "O.19", text: "When classical ML beats a neural network, which is often", note: "" },
        { id: "O.20", text: "Always build the dumb baseline first", note: "" }
      ]
    },
    {
      id: "K",
      name: "Neural networks",
      stage: "Stage 4: Deep Learning & Production AI",
      stageNumber: 4,
      cadence: "Weekly, deliberate",
      blurb: "Rosenblatt built the Perceptron in 1958 and the press said machines would soon walk and talk. Minsky and Papert showed in 1969 it could not learn XOR, and funding collapsed into the first AI winter. Backpropagation arrived in usable form in 1986 from Rumelhart, Hinton and Williams. LeCun had convolutional networks reading cheques by the late 1990s. Then almost nothing for a decade, because the data and the hardware were not there. In 2012 AlexNet won ImageNet using GPUs and the field turned over in a single year. Attention arrived in 2014, the transformer in 2017.",
      tasks: [
        { id: "K.1", text: "A neuron: weights, bias, activation", note: "" },
        { id: "K.2", text: "The Perceptron, 1958, and exactly why XOR broke it in 1969", note: "" },
        { id: "K.3", text: "Why non linearity is the whole trick", note: "" },
        { id: "K.4", text: "Loss functions: what you are actually minimising", note: "" },
        { id: "K.5", text: "Gradient descent, by hand, on paper, once", note: "" },
        { id: "K.6", text: "Backpropagation, 1986, derived rather than memorised", note: "build a tiny autograd engine yourself, highest value exercise in the track" },
        { id: "K.7", text: "Overfitting, regularisation, train and test splits", note: "" },
        { id: "K.8", text: "Why the 1990s stalled: data, compute, vanishing gradients", note: "" },
        { id: "K.9", text: "Convolutional networks, LeCun, cheque reading by 1998", note: "" },
        { id: "K.10", text: "Recurrent networks and LSTM, 1997", note: "built to fix forgetting, and still forgot" },
        { id: "K.11", text: "AlexNet, 2012: what actually changed was GPUs and ImageNet", note: "" },
        { id: "K.12", text: "Embeddings: meaning as geometry", note: "" },
        { id: "K.13", text: "Attention, 2014, then the transformer, 2017", note: "" },
        { id: "K.14", text: "Pretraining and transfer: BERT 2018, GPT-2 2019, GPT-3 2020", note: "" },
        { id: "K.15", text: "Scaling laws, 2020", note: "" },
        { id: "K.16", text: "Instruction tuning and RLHF", note: "why ChatGPT in 2022 felt different from GPT-3 in 2020. The base model was not the change, the alignment step was" },
        { id: "K.17", text: "Tokenisation, context windows, and why cost grows the way it does", note: "" },
        { id: "K.18", text: "Inference versus training: completely different engineering problems", note: "" }
      ]
    },
    {
      id: "L",
      name: "AI engineering",
      stage: "Stage 4: Deep Learning & Production AI",
      stageNumber: 4,
      cadence: "Weekly, deliberate",
      blurb: "The youngest thing here. It did not exist as a job title before roughly 2023, which means nobody interviewing you has twenty years of it either.",
      tasks: [
        { id: "L.1", text: "Prompting as an engineering discipline, not a trick", note: "" },
        { id: "L.2", text: "Structured output, and why JSON mode changed what was buildable", note: "" },
        { id: "L.3", text: "Context engineering: what goes in the window and in what order", note: "" },
        { id: "L.4", text: "Chunking strategies, and why they decide retrieval quality", note: "" },
        { id: "L.5", text: "Embeddings in practice: model choice, dimensions, cost", note: "" },
        { id: "L.6", text: "Retrieval: keyword, vector, hybrid", note: "" },
        { id: "L.7", text: "Reranking", note: "" },
        { id: "L.8", text: "Grounding and citation", note: "" },
        { id: "L.9", text: "Refusal and the honest \"I don't know\"", note: "measuring this separates a RAG system from a RAG demo" },
        { id: "L.10", text: "Evaluation: golden sets, offline scoring, human review, regression gates", note: "" },
        { id: "L.11", text: "Tool calling: schemas, validation, failure handling", note: "" },
        { id: "L.12", text: "Agent loops: termination, budgets, compounding error", note: "" },
        { id: "L.13", text: "Memory and state across turns", note: "" },
        { id: "L.14", text: "Guardrails: input filtering, output checking, prompt injection", note: "" },
        { id: "L.15", text: "Cost control: caching, model routing, batching, token accounting", note: "" },
        { id: "L.16", text: "Latency: streaming, parallel calls, speculative work", note: "" },
        { id: "L.17", text: "Observability for AI: trace every step, log every prompt, watch drift", note: "" },
        { id: "L.18", text: "When to fine tune, and the three cheaper things to try first", note: "" },
        { id: "L.19", text: "Deploying a model: container, endpoint, autoscale, monitor", note: "" },
        { id: "L.20", text: "Running small models locally, and when that actually wins", note: "" },
        { id: "L.21", text: "Model versioning", note: "" },
        { id: "L.22", text: "Reproducibility", note: "" },
        { id: "L.23", text: "Drift detection", note: "" },
        { id: "L.24", text: "Shadow deployment", note: "" },
        { id: "L.25", text: "Feedback loops into evaluation", note: "" },
        { id: "L.26", text: "Safety: bias, red teaming, failure disclosure", note: "" }
      ]
    },
    // The Five Foundational Habits Running Underneath the Entire Way
    {
      id: "A",
      name: "Systems thinking",
      stage: "Foundational Habit (Running Underneath)",
      stageNumber: 0,
      cadence: "Background, always",
      blurb: "The lens everything else sits inside. Codd in 1970 did not build a faster file reader. He moved the boundary between programs and their data. That is the whole skill.",
      tasks: [
        { id: "A.1", text: "Name the parts, flows and boundaries of any system", note: "" },
        { id: "A.2", text: "Feedback loops, reinforcing versus balancing", note: "retries are reinforcing, which is why they take sites down" },
        { id: "A.3", text: "The bottleneck rule: a system moves at the speed of its slowest part", note: "" },
        { id: "A.4", text: "Second order effects", note: "Redis fixed slow reads and created cache invalidation" },
        { id: "A.5", text: "Constraints as the real design input, not the requirements", note: "" },
        { id: "A.6", text: "Local versus global optimum", note: "" },
        { id: "A.7", text: "Failure as a system property, not a component property", note: "" },
        { id: "A.8", text: "Draw five systems you use daily, from memory, on paper", note: "" },
        { id: "A.9", text: "Trace one request end to end through something you built", note: "" },
        { id: "A.10", text: "Ask what happens if this doubles, of every component", note: "" },
        { id: "A.11", text: "Spot what is missing, not just what is wrong", note: "" }
      ]
    },
    {
      id: "G",
      name: "Critical thinking",
      stage: "Foundational Habit (Running Underneath)",
      stageNumber: 0,
      cadence: "Background, always",
      blurb: "Disciplines for evaluating claims, benchmarks, vendor promises, and architectural decisions.",
      tasks: [
        { id: "G.1", text: "Separate the claim from the evidence for it", note: "" },
        { id: "G.2", text: "Ask what would have to be true for this to be false", note: "" },
        { id: "G.3", text: "Base rates: how often does this actually happen", note: "" },
        { id: "G.4", text: "Correlation and causation, in performance work specifically", note: "" },
        { id: "G.5", text: "Survivorship bias", note: "every \"we rewrote in X and it was amazing\" post is written by someone whose rewrite succeeded" },
        { id: "G.6", text: "Steelman the option you rejected, out loud, before rejecting it", note: "" },
        { id: "G.7", text: "Reversible versus irreversible decisions", note: "schema and auth boundaries are irreversible, framework choice mostly is not" },
        { id: "G.8", text: "Read a benchmark critically: what was measured, on what hardware, by whom", note: "" },
        { id: "G.9", text: "Read a research paper critically: claim, method, baseline, limitation", note: "" },
        { id: "G.10", text: "Evaluate a vendor pitch: what is the lock in, what is the exit cost", note: "" },
        { id: "G.11", text: "Notice when you want something to be true", note: "" }
      ]
    },
    {
      id: "H",
      name: "Observation",
      stage: "Foundational Habit (Running Underneath)",
      stageNumber: 0,
      cadence: "Attached to real work",
      blurb: "In 1947 Grace Hopper's team found a moth in a relay and taped it into the logbook. The word bug already existed. What mattered was the habit: write down what you see, before theorising.",
      tasks: [
        { id: "H.1", text: "Read the whole error message, out loud if necessary", note: "" },
        { id: "H.2", text: "Read a stack trace: where it started, where it surfaced", note: "" },
        { id: "H.3", text: "Read logs at volume without drowning", note: "" },
        { id: "H.4", text: "Measure before you optimise, always", note: "" },
        { id: "H.5", text: "Profile a real program", note: "time is never where you guessed" },
        { id: "H.6", text: "Watch a real person use something you built, in silence", note: "" },
        { id: "H.7", text: "Notice what is absent: the missing log line, the request that never arrived", note: "" },
        { id: "H.8", text: "Keep an engineering notebook: symptom, hypothesis, test, result", note: "" },
        { id: "H.9", text: "Learn your system's normal before you need to recognise abnormal", note: "" }
      ]
    },
    {
      id: "I",
      name: "Planning",
      stage: "Foundational Habit (Running Underneath)",
      stageNumber: 0,
      cadence: "Attached to real work",
      blurb: "Amazon replaced slide decks with six page written narratives on the argument that you cannot hide a bad idea inside full sentences. Writing it down is the thinking, not the paperwork afterwards.",
      tasks: [
        { id: "I.1", text: "Write down what this is not, before what it is", note: "" },
        { id: "I.2", text: "Break work into pieces you can finish in one sitting", note: "" },
        { id: "I.3", text: "Estimate, record the estimate, compare afterwards", note: "do it twenty times and estimates become real" },
        { id: "I.4", text: "Map dependencies, including ones that depend on other people replying", note: "" },
        { id: "I.5", text: "Identify the riskiest assumption and test it first", note: "" },
        { id: "I.6", text: "Write a one page design doc before anything non trivial: problem, options, choice, why, failure modes", note: "" },
        { id: "I.7", text: "Define done, in writing, before starting", note: "" },
        { id: "I.8", text: "Cut scope deliberately rather than slipping deadlines accidentally", note: "" },
        { id: "I.9", text: "Sequence for learning: do the thing that teaches you most, earliest", note: "" },
        { id: "I.10", text: "Plan for the version where you have half the time you expected", note: "" }
      ]
    },
    {
      id: "J",
      name: "Debugging",
      stage: "Foundational Habit (Running Underneath)",
      stageNumber: 0,
      cadence: "Attached to real work",
      blurb: "Therac-25 killed patients between 1985 and 1987 through a race condition. Ariane 5 exploded in June 1996, 37 seconds after launch, over an unhandled numeric conversion in code reused from Ariane 4. The Mars Climate Orbiter was lost in 1999 because one team used metric and another imperial. Knight Capital lost around 440 million dollars in roughly 45 minutes in August 2012 through a bad deployment. None of these were people who could not code.",
      tasks: [
        { id: "J.1", text: "Reproduce it reliably before touching anything", note: "a bug you cannot reproduce is a rumour" },
        { id: "J.2", text: "Reduce it: smallest input that still fails", note: "" },
        { id: "J.3", text: "Form one hypothesis at a time, and write it down", note: "" },
        { id: "J.4", text: "Change one thing per test", note: "" },
        { id: "J.5", text: "Binary search the problem space, not just the code", note: "git bisect is this automated" },
        { id: "J.6", text: "Use a real debugger, not only print statements", note: "" },
        { id: "J.7", text: "Know when print statements are genuinely faster", note: "" },
        { id: "J.8", text: "Read the source of the library you are blaming", note: "it is usually not the library" },
        { id: "J.9", text: "Check what is actually running", note: "right code, wrong environment, is the most common wasted hour in software" },
        { id: "J.10", text: "Debugging across a network: tracing, correlation IDs, timeouts", note: "" },
        { id: "J.11", text: "Debugging concurrency: race conditions, deadlocks, ordering", note: "" },
        { id: "J.12", text: "Debugging data: silent corruption, encoding, timezones, floats", note: "" },
        { id: "J.13", text: "Debugging models: is it the data, the label, the metric or the code", note: "label leakage looks like brilliance until production" },
        { id: "J.14", text: "Root cause versus symptom, and the five whys", note: "" },
        { id: "J.15", text: "Write the postmortem: what happened, why, what prevents a repeat", note: "" },
        { id: "J.16", text: "Add the test that would have caught it, before closing it", note: "" }
      ]
    }
  ],

  languages: [
    {
      id: "C.1",
      year: "1940s",
      name: "Machine code and assembly",
      who: "Early computing pioneers",
      answered: "The physical limits of vacuum tubes, plugboards, and paper tape",
      solved: "Speaking to hardware at all",
      blueprint: "Registers, opcodes, jumps, memory addresses",
      wall: "Tied to one machine, unreadable, one mistake means rewriting everything",
      leadsTo: "C.2",
      leadsToReason: "demanded mathematical formulas instead of manual opcodes"
    },
    {
      id: "C.2",
      year: "1957",
      name: "Fortran",
      who: "Backus, IBM",
      answered: "Hand-coding formulas in assembly for each new architecture",
      solved: "Writing formulas instead of instructions, for the IBM 704",
      blueprint: "DO loops, arrays, subroutines, formatted output",
      wall: "Great at numbers, useless at text and business records",
      leadsTo: "C.3",
      leadsToReason: "forced business records and English readability"
    },
    {
      id: "C.3",
      year: "1959",
      name: "COBOL",
      who: "CODASYL, Hopper's influence",
      answered: "Mathematical notations were illegible to corporate clerks and commercial auditors",
      solved: "Business data that clerks and auditors could read",
      blueprint: "English verbs like MOVE and PERFORM, record and field definitions, fixed decimal money",
      wall: "Enormously verbose, rigid, and poor for non-numeric algorithmic symbolic logic",
      leadsTo: "C.4",
      leadsToReason: "drove symbolic computation and tree recursion"
    },
    {
      id: "C.4",
      year: "1958",
      name: "LISP",
      who: "McCarthy",
      answered: "The rigidity of fixed numeric arrays and inability to represent symbolic logic",
      solved: "Symbols, recursion and lists rather than numbers",
      blueprint: "s-expressions, lambda, car and cdr, garbage collection, the REPL, code as data",
      wall: "Slow execution, memory-heavy, parentheses isolation, lack of standardized structure",
      leadsTo: "C.5",
      leadsToReason: "necessitated formal language syntax, block structure, and lexical scope"
    },
    {
      id: "C.5",
      year: "1960",
      name: "ALGOL",
      who: "International committee (ACM / GAMM)",
      answered: "Ad-hoc language structures lacking formal mathematical grammar and scope",
      solved: "Block structure, scope, and a formal grammar to describe a language",
      blueprint: "begin and end, nested scope, recursion",
      wall: "No standard input or output, so it never shipped commercially; too academic for beginners",
      leadsTo: "C.6",
      leadsToReason: "demanded an immediate interactive system for beginners"
    },
    {
      id: "C.6",
      year: "1964",
      name: "BASIC",
      who: "Kemeny and Kurtz",
      answered: "Batch-processing punch cards created multi-day turnarounds that prevented novices from learning",
      solved: "A beginner on a shared machine could type something and see it work",
      blueprint: "PRINT, INPUT, GOTO, line numbers",
      wall: "GOTO spaghetti, unmaintainable past a few hundred lines; cannot write systems software",
      leadsTo: "C.7",
      leadsToReason: "required structured control flow with direct hardware pointer access"
    },
    {
      id: "C.7",
      year: "1972",
      name: "C",
      who: "Ritchie, Bell Labs",
      answered: "Assembly was unportable, everything else too far from hardware to write an OS",
      solved: "Portable systems programming. Proof: Unix rewritten in it, 1973",
      blueprint: "Pointers, structs, malloc and free, header files, printf, compilation units",
      wall: "Manual memory, no way to bundle data with behaviour, no safety net",
      leadsTo: "C.9",
      leadsToReason: "demanded encapsulation and zero-overhead object abstractions"
    },
    {
      id: "C.8",
      year: "1972 to 1980",
      name: "Smalltalk",
      who: "Kay, Xerox PARC",
      answered: "Procedural programs treating data as passive structures acted on by remote procedures",
      solved: "Everything is an object, objects talk by sending messages, the environment is alive while you edit it",
      blueprint: "Objects, classes, message sends",
      wall: "Slow, walled-garden image environment; commercially sidelined while ideas entered C++ and Java",
      leadsTo: "C.9",
      leadsToReason: "inspired object orientation without sacrificing native execution speed"
    },
    {
      id: "C.9",
      year: "1983",
      name: "C++",
      who: "Stroustrup",
      answered: "C had no way to organise a large program",
      solved: "Objects with no speed penalty",
      blueprint: "Classes, constructors and destructors, RAII, templates, operator overloading, the STL",
      wall: "Enormous complexity, compilation delays, and still manual memory leaks",
      leadsTo: "C.10",
      leadsToReason: "prompted lightweight scripting for rapid string munging and system reports"
    },
    {
      id: "C.10",
      year: "1987",
      name: "Perl",
      who: "Wall",
      answered: "Shell scripting was too weak for reports and C was too tedious for stream transformations",
      solved: "Text processing and system glue, regular expressions as first class",
      blueprint: "Sigils, regex operators, one liners",
      wall: "Write once, read never. Unmaintainable at size",
      leadsTo: "C.11",
      leadsToReason: "demanded a language that reads like clear English intent"
    },
    {
      id: "C.11",
      year: "1991",
      name: "Python",
      who: "van Rossum",
      answered: "C too slow to write, Perl unreadable, shell too limited",
      solved: "Code that reads like intent, batteries included",
      blueprint: "def, for x in y, indentation as syntax, lists and dicts, imports, f-strings",
      wall: "Slow CPU interpreter loop, Global Interpreter Lock (GIL), packaging pain",
      leadsTo: "C.12",
      leadsToReason: "drove cross-platform compiled bytecode with automatic garbage collection"
    },
    {
      id: "C.12",
      year: "1995",
      name: "Java",
      who: "Gosling, Sun",
      answered: "C++ memory bugs and per platform rebuilds",
      solved: "Compile once run anywhere, with garbage collection",
      blueprint: "Classes, interfaces, the JVM and bytecode, packages, checked exceptions, threads",
      wall: "Verbose, heavy, slow to start, and client apps were static outside the web browser",
      leadsTo: "C.13",
      leadsToReason: "prompted client-side scripting directly inside web browsers"
    },
    {
      id: "C.13",
      year: "1995",
      name: "JavaScript",
      who: "Eich, Netscape, about ten days",
      answered: "Web pages were frozen, validating a form meant a server round trip",
      solved: "Interactivity inside the browser",
      blueprint: "Functions as values, closures, prototypes, object and JSON literals, event handlers, callbacks then promises then async await",
      wall: "No static types, no built-in modules, type coercion bugs, large app maintenance pain",
      leadsTo: "C.19",
      leadsToReason: "compelled Microsoft to add a static structural type system"
    },
    {
      id: "C.14",
      year: "1995",
      name: "PHP",
      who: "Lerdorf",
      answered: "CGI binaries written in C or Perl crashed easily and required complex web server configuration",
      solved: "Logic sprinkled inside HTML, on hosting that cost almost nothing",
      blueprint: "The <?php ?> tags, echo, superglobals, associative arrays",
      wall: "Inconsistent standard library, easy to write insecure spaghetti code",
      leadsTo: "C.15",
      leadsToReason: "sparked convention-over-configuration and elegant web frameworks"
    },
    {
      id: "C.15",
      year: "1995 and 2004",
      name: "Ruby, then Rails",
      who: "Matsumoto, then Hansson",
      answered: "Java's bureaucratic ceremony and XML configuration files drained developer joy",
      solved: "Developer happiness, convention instead of configuration",
      blueprint: "Blocks, everything is an object, metaprogramming, domain specific languages",
      wall: "Runtime throughput limits, difficult to scale concurrently without heavy process overhead",
      leadsTo: "C.16",
      leadsToReason: "led developers to marry Ruby's syntax with Erlang's BEAM fault tolerance"
    },
    {
      id: "C.16",
      year: "1986 and 2012",
      name: "Erlang, then Elixir",
      who: "Ericsson (Erlang) & Valim (Elixir)",
      answered: "A telephone switch is not allowed to go down, ever",
      solved: "Millions of tiny processes, supervision, code replaced while running",
      blueprint: "Actors, pattern matching, let it crash, OTP supervision trees",
      wall: "Unusual functional paradigm, smaller corporate hiring pool for enterprise infrastructure",
      leadsTo: "C.17",
      leadsToReason: "drove enterprise managed runtimes with first-class IDE tooling"
    },
    {
      id: "C.17",
      year: "2000",
      name: "C#",
      who: "Hejlsberg, Microsoft",
      answered: "Java was proprietary to Sun and lacked clean language integration on Windows",
      solved: "Java's promise with better tooling on Windows",
      blueprint: "Properties, LINQ, async await — which it had first and everyone copied",
      wall: "Early versions tied heavily to Windows/.NET ecosystem; enterprise verbosity",
      leadsTo: "C.18",
      leadsToReason: "demanded fast compile times, simple syntax, and single static binaries"
    },
    {
      id: "C.18",
      year: "2009",
      name: "Go",
      who: "Griesemer, Pike, Thompson at Google",
      answered: "C++ compiled slowly, Java was verbose, Python could not hold many connections",
      solved: "Cheap concurrency, fast builds, one file to deploy",
      blueprint: "Goroutines, channels, implicit interfaces, defer, explicit error returns, gofmt",
      wall: "Repetitive error handling, no generics until 2022, still garbage-collected pauses",
      leadsTo: "C.20",
      leadsToReason: "demanded zero-cost memory safety without any garbage collector"
    },
    {
      id: "C.19",
      year: "2012",
      name: "TypeScript",
      who: "Microsoft",
      answered: "JavaScript codebases nobody could hold in their head",
      solved: "Types checked before you ship, an editor that knows every shape",
      blueprint: "Annotations, interfaces, generics, union types, structural typing",
      wall: "A build step, and the types vanish at runtime",
      leadsTo: "C.20",
      leadsToReason: "reinforced demand for compile-time verified correctness down to systems level"
    },
    {
      id: "C.20",
      year: "2015",
      name: "Rust reaches 1.0",
      who: "Mozilla",
      answered: "Memory bugs in C and C++ were a large share of every serious security vulnerability",
      solved: "Memory safety with no garbage collector",
      blueprint: "Ownership, borrowing, lifetimes, Result and Option, match, traits, cargo",
      wall: "Steep learning curve, long compiles; mobile client development required platform native safety",
      leadsTo: "C.21",
      leadsToReason: "inspired modern null-safety and expressive syntax on mobile devices"
    },
    {
      id: "C.21",
      year: "2011 and 2014",
      name: "Kotlin and Swift",
      who: "JetBrains (Kotlin) & Apple (Swift)",
      answered: "Null pointer exceptions plagued both Java on Android and Objective-C on iOS",
      solved: "The null pointer, on Android and iOS respectively",
      blueprint: "Optionals and null safety in the type system",
      wall: "Platform-bound runtimes; general languages still cannot query relational data declaratively",
      leadsTo: "C.22",
      leadsToReason: "shows why declarative relational data requires a dedicated domain language"
    },
    {
      id: "C.22",
      year: "1974",
      name: "SQL",
      who: "Chamberlin and Boyce, IBM",
      answered: "Navigational network and hierarchical databases tied code to physical storage pointers",
      solved: "Describe what you want, let the machine work out how",
      blueprint: "SELECT, FROM, WHERE, JOIN, GROUP BY, transactions",
      wall: "Not a general purpose language, never tried to be; matrix parallel computing requires SIMD",
      leadsTo: "C.23",
      leadsToReason: "shows that specialized workloads (like deep learning) require hardware parallelism"
    },
    {
      id: "C.23",
      year: "2007",
      name: "CUDA",
      who: "NVIDIA",
      answered: "Graphics cards could only do graphics",
      solved: "General parallel computation on a GPU",
      blueprint: "Kernels, threads, blocks, device memory. Why it matters: no CUDA, no AlexNet in 2012, no modern AI job",
      wall: "Proprietary hardware lock-in, extreme concurrency debugging difficulty",
      leadsTo: null
    },
    {
      id: "C.24",
      year: "1990s to present",
      name: "HTML and CSS",
      who: "Berners-Lee, Lie, Bos, W3C",
      answered: "Monolithic proprietary binary document viewers and unstyled text terminals",
      solved: "Structure and presentation of a document, separately",
      blueprint: "Tags, attributes, the box model, selectors, flexbox, grid, custom properties",
      wall: "Decades of cross-browser rendering quirks and declarative layout edge-cases",
      leadsTo: null
    },
    {
      id: "C.25",
      year: "1970s to 1989",
      name: "Bash and the shell",
      who: "Thompson, Bourne, Fox",
      answered: "Recompiling programs just to pass data between them",
      solved: "Gluing programs together without writing a program",
      blueprint: "Pipes, redirection, exit codes, variables, loops, globbing",
      wall: "Brittle string splitting, silent failures, arcane quoting rules",
      leadsTo: null
    },
    {
      id: "C.26",
      year: "1950s to 1970s",
      name: "Regular expressions",
      who: "Kleene, Thompson",
      answered: "Writing custom character-by-character state machines for every string validation",
      solved: "Describing a text pattern once instead of writing a parser",
      blueprint: "Character classes, quantifiers, anchors, groups, alternation",
      wall: "Catastrophic backtracking, unreadable complex patterns",
      leadsTo: null
    }
  ],

  words: [
  {
    "lang": "HTML",
    "category": "Web & Frontend",
    "summary": "HyperText Markup Language: the semantic skeleton, document tree, and accessibility foundation of the web.",
    "rows": [
      [
        "<!DOCTYPE html>",
        "tells the browser to render using modern HTML5 standards",
        "Required at the absolute first line of every HTML file. Without it, browsers trigger legacy 'quirks mode', breaking modern CSS box-sizing and layout standards."
      ],
      [
        "<html lang=\"en\">",
        "the root document element wrapping everything",
        "The lang attribute is critical: screen readers use it for phonetic pronunciation, and search engines use it for geo-targeted indexing."
      ],
      [
        "<head> and <body>",
        "metadata container / visible user interface container",
        "<head> holds machine data (title, meta, styles, scripts). <body> holds all rendered markup visible to the end user."
      ],
      [
        "<meta charset=\"UTF-8\">",
        "declares Unicode character encoding",
        "Ensures characters from all human alphabets, symbols, and emojis render correctly without garbled mojibake symbols."
      ],
      [
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "instructs mobile browsers to scale to the device screen width",
        "Without this single line, mobile phones render desktop-width pages at 980px zoom, causing tiny illegible text and horizontal scrolling."
      ],
      [
        "<title>Page Title — Site Name</title>",
        "sets browser tab title and search engine snippet title",
        "Crucial for both browser bookmarks and search results; also announced first by assistive screen reading technology."
      ],
      [
        "<link rel=\"stylesheet\" href=\"styles.css\">",
        "imports external CSS stylesheets into the document",
        "Placed in <head> so the browser applies styles before painting text, eliminating the Flash of Unstyled Content (FOUC)."
      ],
      [
        "<script src=\"app.js\" defer></script>",
        "loads external JavaScript asynchronously without blocking HTML parsing",
        "The defer attribute downloads scripts in parallel with HTML parsing and executes them in document order once parsing completes."
      ],
      [
        "<header>, <nav>, <main>, <footer>",
        "semantic landmark structural regions",
        "Landmark elements allow screen readers and keyboard users to jump directly across major page sections without navigating every individual link."
      ],
      [
        "<article> and <section>",
        "self-contained reusable unit / thematic content grouping",
        "<article> represents content that makes sense on its own (e.g. blog post, card). <section> represents a thematic chapter with a heading."
      ],
      [
        "<aside>",
        "indirectly related content or sidebar",
        "Used for sidebars, callout boxes, related links, or advertising. Screen readers treat it as secondary content."
      ],
      [
        "<h1> through <h6>",
        "six levels of document heading hierarchy",
        "Never skip heading levels (e.g. h1 to h3) for styling. Use CSS for font size, and reserve headings for the document outline."
      ],
      [
        "<p>paragraph text</p>",
        "standard block of running prose",
        "Browsers apply default vertical paragraph margins to enforce typographic rhythm and readability."
      ],
      [
        "<a href=\"url\" target=\"_blank\" rel=\"noopener noreferrer\">",
        "hypertext anchor navigation link",
        "When opening in a new tab (_blank), rel=\"noopener noreferrer\" prevents the new window from accessing window.opener for tab-napping exploits."
      ],
      [
        "<button type=\"button|submit|reset\">",
        "accessible, clickable trigger for actions",
        "Unlike a <div> with an onclick handler, <button> automatically handles keyboard Enter/Space triggers and native screen reader focus."
      ],
      [
        "<form action=\"/api/submit\" method=\"POST\">",
        "data collection and submission container",
        "Groups user inputs and manages form submission. Handles Enter-key submission and HTML5 constraint validation natively."
      ],
      [
        "<label for=\"user-email\">Email</label>",
        "text label programmatically bound to an input",
        "The for attribute matches the input's id. Clicking the label focuses the input, expanding the touch/click target area."
      ],
      [
        "<input type=\"text|email|password|checkbox|radio\">",
        "interactive data input control",
        "Specifying the correct type enables built-in client validation, mobile keyboards (e.g. numeric keypad for type=\"number\" or \"tel\"), and secure password masking."
      ],
      [
        "<textarea rows=\"4\" cols=\"50\"></textarea>",
        "multi-line plain text editing field",
        "Unlike <input>, maintains multiple lines of user prose. Preserves newline characters upon submission."
      ],
      [
        "<select> and <option value=\"val\">",
        "drop-down selection menu",
        "Allows user to pick one or more options from a fixed list. The selected option's value is sent upon form submit."
      ],
      [
        "<table>, <thead>, <tbody>, <tr>, <th>, <td>",
        "tabular data display architecture",
        "Use <th> with scope=\"col\" or scope=\"row\" so assistive screen readers read column headers aloud alongside cell data."
      ],
      [
        "<ul>, <ol>, and <li>",
        "unordered list (bullets) / ordered list (numbered) / list item",
        "Tells screen readers how many items are in the set (e.g. 'List of 5 items'), vastly improving navigation over raw div tags."
      ],
      [
        "<img src=\"pic.webp\" alt=\"Descriptive text\" loading=\"lazy\">",
        "raster or vector image embedding",
        "The alt attribute describes the image for blind users and when images fail to load. loading=\"lazy\" defers offscreen downloads."
      ],
      [
        "<picture> and <source srcset=\"...\" media=\"...\">",
        "art direction and responsive image switching",
        "Allows serving modern formats (AVIF/WebP) with JPEG fallback, or different crops for mobile versus desktop viewports."
      ],
      [
        "<video controls poster=\"preview.jpg\"> and <audio>",
        "native multimedia playback controls",
        "Eliminated legacy third-party plugins. Supports multiple <source> formats and subtitles via <track kind=\"subtitles\">."
      ],
      [
        "<canvas id=\"stage\" width=\"800\" height=\"600\"></canvas>",
        "bitmapped pixel canvas for 2D/3D graphics and games",
        "Provides a JavaScript drawing context (CanvasRenderingContext2D or WebGL) for immediate-mode graphics."
      ],
      [
        "<svg viewBox=\"0 0 24 24\">",
        "scalable vector graphics element",
        "Resolution-independent vector graphics defined mathematically via XML paths; sharp on any display density."
      ],
      [
        "<iframe src=\"url\" title=\"Description\" sandbox=\"...\">",
        "embeds another nested browsing context (webpage)",
        "The sandbox attribute restricts scripts, forms, and popups to prevent malicious third-party embeds from attacking the host page."
      ],
      [
        "<dialog id=\"modal\"> and dialog.showModal()",
        "native accessible modal dialog box",
        "Handles the backdrop, traps keyboard focus inside the modal, and closes on the Escape key without custom JavaScript."
      ],
      [
        "<details> and <summary>Click to toggle</summary>",
        "native disclosure widget / accordion",
        "Toggles visibility of child content natively without any JavaScript or CSS state management."
      ],
      [
        "aria-* attributes (e.g. aria-expanded, aria-label)",
        "Accessible Rich Internet Applications accessibility overrides",
        "Communicates dynamic state changes (e.g. menu open/closed, loading) to assistive screen readers."
      ],
      [
        "data-* attributes (e.g. data-user-id=\"42\")",
        "stores custom private data directly on HTML elements",
        "Accessible in JavaScript via element.dataset.userId and in CSS selectors via [data-user-id=\"42\"]."
      ]
    ]
  },
  {
    "lang": "CSS",
    "category": "Web & Frontend",
    "summary": "Cascading Style Sheets: layout engines, the box model, responsive typography, and visual animation systems.",
    "rows": [
      [
        "* { box-sizing: border-box; }",
        "includes padding and border inside total width and height",
        "The universal CSS reset invariant. With content-box, adding 10px padding makes a 100px element 120px wide, causing layout overflow."
      ],
      [
        "element, .class, #id",
        "tag selector / class selector / unique ID selector",
        "ID selectors (#) have high specificity (1-0-0) that makes them hard to override. Prefer classes (.class, specificity 0-1-0) for maintainable styles."
      ],
      [
        "margin vs padding",
        "space outside the border / space inside the border",
        "Margins separate sibling elements and collapse vertically. Padding adds breathing room between the border and the element's inner content."
      ],
      [
        "display: flex",
        "activates one-dimensional flexible box layout engine",
        "Lays out direct children along a single main axis (row or column) with automated space distribution and alignment."
      ],
      [
        "flex-direction: row | column",
        "sets the primary axis direction of flex items",
        "row (default) arranges items horizontally left-to-right; column arranges items vertically top-to-bottom."
      ],
      [
        "justify-content vs align-items",
        "alignment along the main axis / alignment along the cross axis",
        "justify-content (flex-start, center, space-between) aligns along the flow direction; align-items aligns perpendicular to it."
      ],
      [
        "gap: 1rem",
        "space between flex or grid items",
        "Replaces messy margin hacks on children. Automatically handles spacing without unwanted outer margins on first or last items."
      ],
      [
        "flex: 1 1 auto (grow, shrink, basis)",
        "controls how a flex item expands or contracts",
        "flex-grow allows the item to fill leftover space; flex-shrink allows it to contract under overflow; flex-basis sets initial size."
      ],
      [
        "display: grid",
        "activates two-dimensional grid layout engine",
        "Simultaneously coordinates rows and columns with explicit track definitions and gap spacing."
      ],
      [
        "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))",
        "responsive auto-wrapping grid with no media queries",
        "Creates as many 280px+ columns as will fit into the container width, expanding them equally to fill remaining space."
      ],
      [
        "position: static | relative | absolute | fixed | sticky",
        "determines how an element is positioned in the viewport or parent",
        "relative keeps space in flow; absolute removes from flow relative to closest positioned ancestor; fixed pins to viewport; sticky sticks on scroll."
      ],
      [
        "top / right / bottom / left and z-index",
        "offset distances from anchor / stacking order along the Z-axis",
        "z-index only takes effect on positioned elements (relative, absolute, fixed, sticky) or flex/grid children."
      ],
      [
        "width, max-width: 100%, min-width",
        "explicit size, fluid ceiling limit, and minimum floor size",
        "max-width: 100% prevents images, tables, and containers from breaking out of parent boundaries on mobile screens."
      ],
      [
        "rem vs em vs vh / vw vs %",
        "font-relative and viewport-relative length units",
        "1rem is relative to root <html> font-size (respecting user browser zoom); em is relative to parent element; vh/vw are 1% of viewport."
      ],
      [
        "color vs background-color",
        "text foreground color / container background surface color",
        "Always ensure at least a 4.5:1 contrast ratio between foreground and background colors to satisfy WCAG AA accessibility standards."
      ],
      [
        "font-family: 'Inter', system-ui, sans-serif",
        "prioritized font fallback stack",
        "The browser attempts to render the first font; if not installed or loaded, falls back down the list to system defaults."
      ],
      [
        "line-height: 1.5 to 1.7",
        "vertical distance between text baselines",
        "Using unitless numbers (e.g. 1.5) scales proportionally with any font-size, preventing clipped descenders and cramped paragraphs."
      ],
      [
        "overflow: hidden | auto | scroll",
        "behavior when content exceeds its container bounds",
        "auto adds scrollbars only when content overflows; hidden clips overflow cleanly; visible (default) spills outside container bounds."
      ],
      [
        "opacity vs visibility: hidden vs display: none",
        "visual transparency / invisible but in layout / completely removed from layout",
        "display: none removes element from layout and accessibility tree; visibility: hidden keeps layout space; opacity changes transparency."
      ],
      [
        "transition: all 0.2s cubic-bezier(...)",
        "smoothly animates property changes between states",
        "Animate transform and opacity for smooth 60fps GPU acceleration; avoid animating width, height, or top which trigger CPU layout reflows."
      ],
      [
        "transform: translate(x, y) rotate(deg) scale(s)",
        "GPU-accelerated geometric transformations",
        "Transforms do not trigger browser layout reflow or repaint loops, making them the primary choice for fluid UI animations."
      ],
      [
        "@keyframes spin { from { ... } to { ... } }",
        "defines multi-step CSS keyframe animation sequence",
        "Paired with animation: spin 1s linear infinite to create continuous or complex visual transitions."
      ],
      [
        ":hover, :focus-visible, :active, :disabled",
        "interactive user state pseudo-classes",
        ":focus-visible displays keyboard focus rings only for keyboard navigators, keeping mouse clicks clean while preserving accessibility."
      ],
      [
        ":nth-child(even | odd | 2n+1)",
        "targets elements by their numeric position among siblings",
        "Used for zebra striping tables, alternating grid cards, or styling specific rows without extra HTML classes."
      ],
      [
        "::before and ::after",
        "pseudo-elements that insert decorative content into CSS",
        "Requires content: '' property. Used for icons, tooltips, accent lines, and overlays without polluting the HTML DOM."
      ],
      [
        "--primary-color: #2563eb and var(--primary-color)",
        "CSS custom properties (design tokens and variables)",
        "Unlike preprocessor variables (Sass), CSS variables update dynamically at runtime and cascade through DOM subtrees, powering dark mode."
      ],
      [
        "calc(100% - 2rem)",
        "performs mathematical calculations across mixed units",
        "Allows subtracting absolute lengths (e.g. 2rem) from fluid percentages (100%), solving complex responsive layouts."
      ],
      [
        "clamp(min, preferred, max)",
        "bounds a value between an absolute floor and ceiling",
        "clamp(1rem, 2.5vw, 2.5rem) creates fluid responsive typography that scales with the screen without ever getting too small or huge."
      ],
      [
        "@media (min-width: 768px) { ... }",
        "mobile-first responsive viewport breakpoint query",
        "Applies styling rules only when the screen is at least 768px wide, allowing clean progression from mobile to tablet to desktop."
      ],
      [
        "@container (min-width: 400px) { ... }",
        "component-level container queries",
        "Applies styles based on the width of the parent container rather than the entire browser window, enabling truly modular components."
      ],
      [
        "object-fit: cover | contain",
        "controls how <img> or <video> scales inside fixed bounds",
        "cover fills the container while preserving aspect ratio (cropping excess); contain scales without cropping (leaving letterboxes)."
      ],
      [
        "cursor: pointer | not-allowed | grab",
        "sets the mouse cursor icon for user feedback",
        "Provides clear tactile affordance that an element can be clicked, dragged, or is currently disabled."
      ]
    ]
  },
  {
    "lang": "JavaScript",
    "category": "Web & Frontend",
    "summary": "The dynamic runtime language of the web, Node.js servers, and asynchronous event-driven computing.",
    "rows": [
      [
        "let / const / var",
        "reassignable variable / immutable binding / legacy function-scoped name",
        "Always default to const. Use let only when a value must change. Never use var because its hoisting and lack of block scope cause silent bugs."
      ],
      [
        "function name() vs () => {}",
        "standard function / arrow function with lexical this",
        "Arrow functions inherit this from their surrounding lexical scope, avoiding the classic .bind(this) bug in object methods and callbacks."
      ],
      [
        "console.log / console.error / console.table",
        "prints debug output, error diagnostics, and tabular arrays",
        "console.table() formats arrays of objects into structured terminal/devtools tables for instant visual inspection."
      ],
      [
        "arr.map((item, index) => ...)",
        "transforms each item into a new array of the same length",
        "Pure function: never modifies the original array. Returns an entirely new array with the mapped results."
      ],
      [
        "arr.filter(item => condition)",
        "returns a new array containing only items passing the test",
        "Pure function: filters down items where the callback returns a truthy value, omitting everything else."
      ],
      [
        "arr.reduce((accumulator, item) => ..., initialVal)",
        "aggregates array items into a single final value or object",
        "The fundamental array primitive: can build totals, group records by category, or flatten nested hierarchies into a single map."
      ],
      [
        "arr.find(predicate) / arr.findIndex(predicate)",
        "returns the first matching item / returns its array index",
        "Stops iterating as soon as a match is found (short-circuiting). Returns undefined / -1 if no item matches."
      ],
      [
        "arr.includes(val) / arr.indexOf(val)",
        "checks if value exists (boolean) / returns index of value",
        "includes() correctly handles NaN comparisons, whereas indexOf() checks strict equality (===) and fails on NaN."
      ],
      [
        "arr.some(predicate) / arr.every(predicate)",
        "checks if at least one item matches / checks if all match",
        "Short-circuits immediately: some() stops at the first true, every() stops at the first false."
      ],
      [
        "arr.slice(start, end) vs arr.splice(start, deleteCount, ...items)",
        "non-destructive sub-array copy / destructive in-place mutation",
        "slice() leaves the original array untouched; splice() deletes or inserts elements directly into the original array."
      ],
      [
        "arr.push(x) / pop() / shift() / unshift(x)",
        "add to end / remove from end / remove from start / add to start",
        "push/pop are O(1) constant time operations; shift/unshift are O(n) because all remaining array elements must be re-indexed."
      ],
      [
        "Object.keys(obj) / Object.values() / Object.entries()",
        "extracts property names / values / [key, value] tuples",
        "Object.entries(obj) is ideal for looping over dictionary records using for (const [k, v] of Object.entries(obj))."
      ],
      [
        "Destructuring: const { id, name } = user",
        "unpacks properties or array items directly into distinct names",
        "Allows setting default values: const { role = 'guest' } = user. Works identically on arrays: const [first, second] = list."
      ],
      [
        "Spread syntax: { ...obj, newKey: 'val' } / [ ...arr ]",
        "shallow copies and merges objects or arrays",
        "Creates a new shallow copy with immutability, allowing clean state updates without mutating the original reference."
      ],
      [
        "=== vs ==",
        "strict equality (checks value and type) / loose equality",
        "Always use ===. Loose equality (==) performs arcane type coercion (e.g. '' == 0 is true, null == undefined is true)."
      ],
      [
        "null vs undefined",
        "deliberate absence of value / variable declared but never assigned",
        "null is an intentional assignment representing 'empty'; undefined is JavaScript's default for missing parameters or unassigned names."
      ],
      [
        "Optional chaining: user?.profile?.avatar",
        "safely accesses nested properties without throwing TypeError",
        "If any reference in the chain is null or undefined, evaluation stops and safely returns undefined instead of crashing."
      ],
      [
        "Nullish coalescing: val ?? fallback",
        "provides fallback ONLY if value is null or undefined",
        "Unlike || (OR), which treats 0, '', and false as falsy and overwrites them, ?? preserves valid falsy values."
      ],
      [
        "async / await",
        "writes asynchronous promise code in synchronous style",
        "Syntactic sugar over Promises. An async function always returns a Promise; await pauses execution until the promise settles."
      ],
      [
        "new Promise((resolve, reject) => { ... })",
        "represents a future value that hasn't arrived yet",
        "Can be in one of three states: pending, fulfilled (via resolve(val)), or rejected (via reject(err))."
      ],
      [
        "Promise.all([p1, p2]) vs Promise.allSettled()",
        "runs promises in parallel; rejects on first error / waits for all",
        "Promise.all fails immediately if any promise rejects; Promise.allSettled always completes and reports each status individually."
      ],
      [
        "fetch(url, { method: 'POST', body: JSON.stringify(data) })",
        "native HTTP client for network requests",
        "Returns a Promise resolving to a Response object. Does not reject on HTTP 404/500 errors; check res.ok === true."
      ],
      [
        "try { ... } catch (err) { ... } finally { ... }",
        "catches and handles runtime exceptions cleanly",
        "The finally block is guaranteed to run regardless of whether an exception occurred, making it ideal for cleaning up resources."
      ],
      [
        "throw new Error('Message')",
        "creates and fires a custom runtime exception with stack trace",
        "Halts the current execution path and bubbles up to the nearest enclosing catch block, preserving the exact line number."
      ],
      [
        "document.querySelector(selector) / querySelectorAll()",
        "finds the first / all matching DOM nodes via CSS selector",
        "querySelectorAll returns a static NodeList that can be looped over directly with .forEach()."
      ],
      [
        "element.addEventListener(event, handler)",
        "binds an event listener to user interactions (click, input)",
        "Supports options like { once: true } or { passive: true } to optimize mobile touch and scroll performance."
      ],
      [
        "element.classList.add() / remove() / toggle()",
        "manipulates CSS class names on DOM elements safely",
        "Prevents messy manual string concatenation of className, ensuring classes aren't duplicated or accidentally removed."
      ],
      [
        "JSON.parse(text) / JSON.stringify(data, null, 2)",
        "deserializes text into JS object / serializes JS object to text",
        "JSON.parse throws SyntaxError on malformed JSON; always wrap in try/catch when reading network or local storage data."
      ],
      [
        "localStorage.setItem(key, val) / getItem(key)",
        "persists string key-value pairs across browser sessions",
        "Synchronous API limited to ~5MB per domain. Stores strings only; use JSON.stringify/JSON.parse to store complex objects."
      ],
      [
        "setTimeout(fn, ms) / setInterval(fn, ms)",
        "schedules a function call after delay / on recurring interval",
        "Returns a numeric timer ID; cancel with clearTimeout(id) or clearInterval(id) to avoid memory leaks."
      ],
      [
        "class Name extends Base { constructor() { super(); } }",
        "object-oriented syntax sugar over prototypal inheritance",
        "Provides clean constructor initialization, private fields (#privateField), and static methods."
      ],
      [
        "Set and Map",
        "collection of unique values / key-value dictionary for any type",
        "Set guarantees O(1) deduplication; Map allows any data type (including objects or functions) to serve as lookup keys."
      ],
      [
        "Math.floor() / ceil() / round() / random()",
        "rounds down / rounds up / rounds to nearest / pseudorandom float",
        "Math.floor(Math.random() * (max - min + 1)) + min generates an inclusive random integer between min and max."
      ],
      [
        "str.split(delim) and arr.join(delim)",
        "splits text into an array / joins an array into text",
        "'a,b,c'.split(',') yields ['a', 'b', 'c']. ['a', 'b'].join('-') yields 'a-b'."
      ],
      [
        "str.trim() / replace(regex, replacement)",
        "removes outer whitespace / replaces pattern matches",
        "Using a global regex (e.g. /pattern/g) replaces all occurrences, or use modern str.replaceAll()."
      ],
      [
        "window.requestAnimationFrame(callback)",
        "schedules a render update before the browser's next screen repaint",
        "Synchronizes visual updates with the display refresh rate (typically 60Hz or 120Hz), yielding silky smooth animations."
      ]
    ]
  },
  {
    "lang": "TypeScript",
    "category": "Web & Frontend",
    "summary": "Typed JavaScript at scale: compile-time type verification, structural type modeling, and developer tooling.",
    "rows": [
      [
        ": string | number | boolean",
        "primitive type annotations for variables and parameters",
        "Enforces compile-time checking. If a function declares (id: string), passing a number immediately halts the build with an error."
      ],
      [
        "interface User { id: string; name: string; }",
        "defines an extensible object shape contract",
        "Interfaces can be extended (interface Admin extends User) and merged; ideal for public library APIs and data contracts."
      ],
      [
        "type ID = string | number",
        "type alias for naming any type, union, or primitive",
        "Unlike interfaces, type aliases can name unions, tuples, and primitive primitives directly: type Point = [number, number]."
      ],
      [
        "prop?: string (optional property)",
        "indicates a property may be undefined or omitted",
        "Equivalent to string | undefined, allowing callers to construct objects without providing that field."
      ],
      [
        "readonly prop: string",
        "prevents modification after object initialization",
        "Enforces immutability at compile-time: user.id = 'new' produces a TypeScript error."
      ],
      [
        "Union types: A | B",
        "value can be either type A or type B",
        "TypeScript requires you to narrow the union with type guards (typeof, instanceof, or in) before accessing specific properties."
      ],
      [
        "Intersection types: A & B",
        "combines all properties of multiple types into one",
        "type Employee = Person & { employeeId: number } requires an object to have all properties from both Person and the new type."
      ],
      [
        "Generics: <T>",
        "parameterizes types so functions work with any type safely",
        "function identity<T>(arg: T): T preserves the exact type passed in rather than erasing it to any or unknown."
      ],
      [
        "Generic constraint: <T extends Record<string, any>>",
        "restricts what types may be passed to a generic parameter",
        "Ensures T satisfies minimum requirements, such as requiring an object or requiring an id property: <T extends { id: string }>."
      ],
      [
        "Type assertion: value as string",
        "overrides compiler inference with developer assertion",
        "Use sparingly. Does not perform runtime conversion; if value is not actually a string, it will cause runtime bugs."
      ],
      [
        "satisfies operator",
        "validates an expression matches a type without widening it",
        "const config = { host: 'localhost' } satisfies Config checks that config matches Config while preserving exact string literal types."
      ],
      [
        "keyof T",
        "extracts a union of all property keys of type T",
        "If type User = { id: string; name: string }, keyof User evaluates to 'id' | 'name'."
      ],
      [
        "typeof variable",
        "extracts the TypeScript type of a runtime JavaScript variable",
        "Allows generating types directly from runtime constants: const defaultUser = { ... }; type User = typeof defaultUser;."
      ],
      [
        "as const",
        "narrows literals to readonly immutable values",
        "const ROLES = ['admin', 'editor'] as const infers readonly ['admin', 'editor'] instead of string[], preserving exact literal values."
      ],
      [
        "unknown vs any vs never",
        "type-safe unknown / opt-out of checking / value that can never occur",
        "Always prefer unknown over any. any disables all type checking; unknown forces you to check the type before using it."
      ],
      [
        "Partial<T>",
        "utility type making all properties in T optional",
        "Essential for PATCH update APIs where users can update any subset of an entity's fields without providing the entire object."
      ],
      [
        "Required<T>",
        "utility type making all properties in T mandatory",
        "Inverts Partial<T>, stripping away all ? optional markers from an interface."
      ],
      [
        "Readonly<T>",
        "utility type freezing all properties in T against mutation",
        "Marks all fields readonly, preventing accidental modifications in pure functional code pipelines."
      ],
      [
        "Record<K, V>",
        "utility type for key-value dictionaries with keys K and values V",
        "Record<string, User> models a lookup table or hash map where string IDs map to User objects."
      ],
      [
        "Pick<T, 'id' | 'name'>",
        "utility type selecting only specified properties from T",
        "Creates a lean sub-type containing only the chosen fields, preventing leaking sensitive fields like passwords."
      ],
      [
        "Omit<T, 'password'>",
        "utility type excluding specified properties from T",
        "Creates a new type with everything from T except the omitted keys, ideal for public DTO projections."
      ],
      [
        "ReturnType<typeof fn>",
        "extracts the return type of a function",
        "Automatically keeps types in sync when a factory function's implementation changes without needing manual type duplication."
      ],
      [
        "Parameters<typeof fn>",
        "extracts function parameter types as a tuple",
        "Useful for wrapping or proxying third-party functions while preserving their exact argument types."
      ],
      [
        "Type guard: pet is Dog",
        "custom function that narrows types in conditional branches",
        "function isDog(p: Animal): p is Dog { return 'bark' in p; }. Inside an if (isDog(pet)) block, pet is automatically typed as Dog."
      ],
      [
        "Discriminated union: { kind: 'circle', radius: number } | ...",
        "union of types sharing a common literal tag property",
        "Switching on the kind property lets the compiler exhaustively narrow the shape in each switch case."
      ],
      [
        "tsconfig: strict: true",
        "enables all strict type checking flags",
        "Turns on noImplicitAny, strictNullChecks, and strictFunctionTypes, catching the vast majority of silent JavaScript bugs at build time."
      ]
    ]
  },
  {
    "lang": "Python",
    "category": "Backend & Enterprise",
    "summary": "Clear, readable, batteries-included language dominating scripting, backend web services, data science, and modern AI.",
    "rows": [
      [
        "print(*args, sep=' ', end='\\n')",
        "outputs text and values to standard output",
        "Accepts any number of objects, converts them via str(), separates them with sep, and appends end (defaults to newline)."
      ],
      [
        "def func_name(arg1, *args, **kwargs) -> ReturnType:",
        "defines a reusable function with positional and keyword arguments",
        "*args captures surplus positional arguments as a tuple; **kwargs captures surplus keyword arguments as a dictionary."
      ],
      [
        "return vs yield",
        "returns a single final value / yields items lazily one at a time",
        "yield turns a function into a memory-efficient generator, allowing streaming iteration over gigabytes of data without storing it all in RAM."
      ],
      [
        "if / elif / else",
        "conditional branching based on truthy evaluation",
        "Python treats 0, None, empty collections ([], {}, ''), and False as falsy; everything else evaluates to truthy."
      ],
      [
        "for item in iterable:",
        "iterates directly over any sequence or generator",
        "No manual index counters needed. Iterates over lists, strings, dictionaries, files, or database cursor streams."
      ],
      [
        "range(start, stop, step)",
        "generates an immutable arithmetic progression sequence",
        "Memory efficient: range(1000000) consumes the same tiny constant memory as range(10) because values are generated on-demand."
      ],
      [
        "len(collection)",
        "returns the number of items in O(1) constant time",
        "Python collections store their length directly in memory header structures, so len() never counts elements one by one."
      ],
      [
        "List comprehension: [x**2 for x in items if x > 0]",
        "concise syntax for filtering and mapping a new list",
        "Significantly faster than manual for loops with list.append() because the iteration executes at C-speed in the interpreter."
      ],
      [
        "Dict comprehension: {k: v for k, v in pairs}",
        "builds a dictionary in a single readable expression",
        "Ideal for inverting mappings or indexing list records: {user['id']: user for user in users}."
      ],
      [
        "lambda x, y: x + y",
        "unnamed, single-expression anonymous function",
        "Used for quick throwaway operations, such as custom sorting keys: sorted(users, key=lambda u: u['age'])."
      ],
      [
        "with open('file.txt', 'r') as f: (context manager)",
        "guarantees setup and teardown cleanup even on exceptions",
        "Automatically calls f.close() when the block exits, preventing file descriptor leaks and database connection exhaustion."
      ],
      [
        "try / except SpecificError as e / else / finally",
        "handles runtime exceptions cleanly",
        "Always catch specific exceptions rather than bare except:, which accidentally swallows KeyboardInterrupt and SystemExit."
      ],
      [
        "raise ValueError('Invalid argument')",
        "explicitly triggers an exception",
        "Halts the current function and bubbles up to the caller with a descriptive error message and stack trace."
      ],
      [
        "class Name(BaseClass): def __init__(self, val):",
        "defines an object-oriented class with constructor",
        "self is the explicit reference to the current instance, through which instance attributes and methods are accessed."
      ],
      [
        "def __str__(self) vs def __repr__(self):",
        "human-readable text display / unambiguous developer debug string",
        "__str__ is used by print(); __repr__ should ideally return a valid Python expression recreating the object."
      ],
      [
        "@property and @method_name.setter",
        "exposes a method as an attribute with getter and setter logic",
        "Allows adding validation or computed calculations to attribute access without breaking existing code that reads obj.attribute."
      ],
      [
        "@decorator_name",
        "wraps a function to add logging, caching, or authentication",
        "Syntactic sugar for func = decorator(func). Used everywhere in web frameworks (e.g. @app.get('/'), @login_required)."
      ],
      [
        "f\"Hello, {user.name}, value is {x:.2f}\"",
        "interpolates expressions directly into string literals",
        "Evaluated at runtime. Supports inline formatting like decimals ({x:.2f}), padding, and debug print ({var=})."
      ],
      [
        "Slicing: list[start:stop:step]",
        "extracts sub-sequences or reverses arrays",
        "list[1:4] gets items at indices 1, 2, 3. list[::-1] returns a reversed copy of the list."
      ],
      [
        "enumerate(iterable, start=0)",
        "yields (index, item) pairs during iteration",
        "Replaces manual counter variables: for i, val in enumerate(items): print(i, val)."
      ],
      [
        "zip(*iterables)",
        "aggregates elements from multiple iterables in lockstep",
        "for name, score in zip(names, scores): pairs elements up; stops as soon as the shortest iterable is exhausted."
      ],
      [
        "sorted(iterable, key=fn, reverse=True)",
        "returns a new sorted list using Timsort algorithm",
        "Stable O(n log n) sorting algorithm. Use the key parameter to sort by custom object attributes or dictionary keys."
      ],
      [
        "any(iterable) and all(iterable)",
        "checks if at least one item is truthy / checks if all are truthy",
        "Short-circuits immediately upon determining the outcome: any() stops at the first True; all() stops at the first False."
      ],
      [
        "isinstance(obj, (int, float))",
        "checks if an object is an instance of a class or tuple of classes",
        "Preferred over type(obj) == class because isinstance correctly handles class inheritance and subclasses."
      ],
      [
        "collections.defaultdict(list) and collections.Counter",
        "dictionary with default factories / frequency counter",
        "Counter(words) automatically calculates word frequencies; defaultdict(list) initializes new keys with empty lists without KeyError."
      ],
      [
        "@dataclasses.dataclass",
        "automatically generates __init__, __repr__, and __eq__ for classes",
        "Eliminates repetitive boilerplate when defining pure data-holding classes: @dataclass class User: id: int; name: str."
      ],
      [
        "typing: Optional[T], List[T], Dict[K, V], Union[A, B]",
        "type annotations for static analysis tools like mypy",
        "Provides self-documenting function contracts that can be verified during CI/CD to catch type bugs before production."
      ],
      [
        "is None vs == None",
        "checks memory identity against the singleton / checks equality",
        "Always use is None. None is a unique singleton in Python memory; is checks exact identity in pointer memory."
      ],
      [
        "if __name__ == '__main__':",
        "boilerplate ensuring code runs only when executed directly",
        "Prevents test scripts and script execution from triggering when the file is imported as a library module by other files."
      ]
    ]
  },
  {
    "lang": "C",
    "category": "Systems & Hardware",
    "summary": "The foundational systems language: direct memory pointers, structs, explicit allocations, and zero runtime overhead.",
    "rows": [
      [
        "#include <stdio.h> / <stdlib.h>",
        "preprocessor directive importing standard library header prototypes",
        "Copies the header declaration signatures into the file before compilation so the compiler knows function arguments and return types."
      ],
      [
        "#define MACRO_NAME value and #ifdef / #ifndef / #endif",
        "macro text substitution and conditional compilation guards",
        "#ifndef HEADER_H prevents duplicate declaration errors when headers are included multiple times across compilation units."
      ],
      [
        "int, char, float, double, void",
        "primitive numeric, character, and untyped data types",
        "Directly map to hardware register sizes: char is 1 byte, int is typically 4 bytes, double is 8-byte IEEE 754 floating point."
      ],
      [
        "int *ptr = &x; (pointers and address-of)",
        "variable holding the physical RAM memory address of another variable",
        "*ptr accesses the value stored at that address (dereferencing); &x extracts the hexadecimal memory address of variable x."
      ],
      [
        "malloc(size_t size) and free(ptr)",
        "allocates uninitialized heap memory / releases heap memory",
        "Every malloc must be paired with exactly one free. Forgetting free causes memory leaks; using ptr after free causes undefined behavior."
      ],
      [
        "calloc(num, size) and realloc(ptr, new_size)",
        "allocates zeroed memory / resizes existing heap allocation",
        "calloc clears all bytes to zero; realloc resizes existing allocations, copying contents to a new memory block if necessary."
      ],
      [
        "struct User { int id; char name[32]; };",
        "contiguous composite data layout in memory",
        "Groups heterogeneous fields into a single struct. Access fields with dot (.) on values, or arrow (->) on pointers (user_ptr->id)."
      ],
      [
        "typedef struct User User_t;",
        "creates an alias name for a type",
        "Allows referring to User_t directly without having to write struct User on every variable declaration."
      ],
      [
        "union Data { int i; float f; char str[20]; };",
        "shares the same memory location between multiple fields",
        "The union is only as large as its largest member. Writing to one field overwrites the data of all other fields."
      ],
      [
        "enum Status { OK = 0, ERR_NOT_FOUND, ERR_SERVER };",
        "enumerated named integer constants",
        "Assigns sequential integers starting at 0 unless explicitly specified, making code more readable than raw magic numbers."
      ],
      [
        "const int x vs int * const ptr vs const int *ptr",
        "immutable value / constant pointer address / pointer to constant value",
        "Read backwards from right to left: const int *ptr is a pointer to constant integer (the data cannot be modified through this pointer)."
      ],
      [
        "static int counter;",
        "limits symbol visibility to the current file or preserves local state",
        "Inside a function, static preserves value across multiple calls; at file level, keeps functions and globals private."
      ],
      [
        "sizeof(type_or_variable)",
        "computes byte size at compile time",
        "Always use sizeof(*ptr) with malloc: malloc(sizeof(int) * count) guarantees correct byte allocation on any CPU architecture."
      ],
      [
        "printf(\"%d %s %p\\n\", count, str, ptr)",
        "formatted print to standard output",
        "%d formats signed integer, %s prints null-terminated char array, %p prints memory address in hexadecimal format."
      ],
      [
        "snprintf(buffer, sizeof(buffer), format, ...)",
        "safely formats string into a fixed-size memory buffer",
        "Guarantees null termination and prevents catastrophic buffer overflow attacks that plague unsafe legacy sprintf()."
      ],
      [
        "fopen(path, mode) and fclose(fp)",
        "opens a file stream / flushes and closes the stream",
        "mode can be \"r\" (read), \"w\" (overwrite), \"a\" (append), or \"rb\" (binary). Always check if fp == NULL before reading."
      ],
      [
        "fread() and fwrite()",
        "reads / writes raw binary data from or to a file stream",
        "Reads directly into memory buffers without string translation, essential for binary protocols, image processing, and databases."
      ],
      [
        "strlen() vs sizeof() on strings",
        "scans until null byte '\\0' / returns allocated buffer size",
        "char str[10] = \"hi\"; -> strlen is 2, sizeof is 10. String functions require strings to end with a null terminator character '\\0'."
      ],
      [
        "memcpy(dst, src, n) and memset(ptr, val, n)",
        "fast memory block copy / fills memory block with byte value",
        "memset(buf, 0, sizeof(buf)) zeroes out memory. memcpy is optimized using CPU SIMD vector registers."
      ],
      [
        "NULL",
        "pointer literal representing memory address 0",
        "Dereferencing NULL triggers an immediate hardware segmentation fault (SIGSEGV) by the CPU memory management unit."
      ],
      [
        "int main(int argc, char *argv[])",
        "program entry point receiving command-line arguments",
        "argc is the argument count; argv is an array of null-terminated string pointers (argv[0] is the program binary path)."
      ],
      [
        "errno and perror(\"Failed\")",
        "system error number and diagnostic printer",
        "When system calls (like open or socket) fail, they return -1 and set errno. perror prints the human-readable OS error string."
      ],
      [
        "void (*fn_ptr)(int) = &my_func;",
        "pointer holding the memory address of an executable function",
        "Allows passing functions as callbacks to other routines, powering event loops, sorting comparators (qsort), and dynamic tables."
      ]
    ]
  },
  {
    "lang": "C++",
    "category": "Systems & Hardware",
    "summary": "High-performance systems programming with zero-overhead abstractions, RAII resource management, and modern generic STL.",
    "rows": [
      [
        "#include <iostream> and std::cout << val << std::endl",
        "standard stream input/output library",
        "Type-safe stream operators (<< and >>) replace C's printf format specifiers, automatically formatting any custom object."
      ],
      [
        "class vs struct in C++",
        "user-defined types: private by default / public by default",
        "In C++, classes and structs are identical except for default visibility: class members are private by default; struct members are public."
      ],
      [
        "constructor and destructor (~ClassName)",
        "initialization on creation / automated cleanup on destruction",
        "The destructor runs deterministically as soon as an object goes out of scope, releasing memory, closing sockets, or freeing locks."
      ],
      [
        "RAII (Resource Acquisition Is Initialization)",
        "binds lifecycle of physical resources to C++ object scope",
        "The core architectural superpower of C++. Guarantees no resource leaks even if unexpected exceptions are thrown."
      ],
      [
        "std::vector<T>",
        "contiguous, dynamically resizing heap array",
        "The default collection in C++. Provides O(1) random access and cache-friendly contiguous memory locality."
      ],
      [
        "std::string",
        "dynamically resizing managed character string",
        "Automatically handles memory allocation and null termination, eliminating C-style buffer overflow vulnerabilities."
      ],
      [
        "std::unordered_map<Key, Value>",
        "hash table offering average O(1) key-value lookups",
        "Requires Key to implement std::hash and equality operator (==); use std::map if you need keys kept in sorted order."
      ],
      [
        "std::unique_ptr<T> and std::make_unique<T>()",
        "smart pointer with exclusive, single ownership of a heap resource",
        "Cannot be copied, only moved (std::move). Automatically deletes the underlying resource when the pointer goes out of scope."
      ],
      [
        "std::shared_ptr<T> and std::make_shared<T>()",
        "smart pointer with reference-counted shared ownership",
        "Maintains an atomic reference counter. Frees the resource only when the last shared_ptr pointing to it is destroyed."
      ],
      [
        "std::move(val) and rvalue reference (T&&)",
        "casts an lvalue to an rvalue to transfer ownership without copying",
        "Eliminates expensive deep copies of vectors, strings, and buffers by simply stealing their internal heap pointers."
      ],
      [
        "auto keyword",
        "instructs the compiler to deduce the type automatically",
        "auto it = map.begin() deduces std::unordered_map<std::string, int>::iterator without verbose manual type typing."
      ],
      [
        "template<typename T>",
        "defines generic functions or classes instantiated at compile time",
        "Generates zero-overhead specialized machine code for each concrete type used, delivering high speed with generic reuse."
      ],
      [
        "constexpr and consteval",
        "forces code execution and value computation at compile time",
        "Enables complex mathematical tables or validation logic to run during compilation, resulting in zero runtime CPU cycles."
      ],
      [
        "lambda: [capture](params) -> ret { body }",
        "anonymous inline function object with variable capture",
        "[=] captures outer variables by value; [&] captures by reference. Essential for algorithms like std::sort and multithreading."
      ],
      [
        "virtual void method() = 0; (pure virtual)",
        "defines an abstract method interface that derived classes must implement",
        "Enables runtime polymorphism via virtual method tables (vtables), allowing base class pointers to call derived overrides."
      ],
      [
        "override specifier",
        "validates that a method overrides a virtual method in base class",
        "Prevents subtle bugs where a typo in a derived method name or signature silently creates a new method instead of overriding."
      ],
      [
        "namespace name { ... }",
        "prevents name collisions between libraries and modules",
        "Use explicit namespace qualification (e.g. std::vector) rather than using namespace std;, which causes global namespace pollution."
      ],
      [
        "nullptr",
        "type-safe null pointer literal (replaces integer 0 / NULL)",
        "Has type std::nullptr_t, preventing ambiguous function overload resolution between integer 0 and pointer null."
      ],
      [
        "static_cast<T>(v) vs dynamic_cast<T>(v)",
        "compile-time type conversion / runtime checked polymorphic downcast",
        "dynamic_cast safely checks polymorphic class hierarchies at runtime, returning nullptr if the cast is invalid."
      ],
      [
        "std::optional<T>",
        "container holding either a valid value or nothing (std::nullopt)",
        "Eliminates sentinel values (like -1 or NULL pointers) for operations that may fail to produce a result."
      ],
      [
        "std::ranges and views (C++20)",
        "composable, lazy functional pipelines over collections",
        "auto res = vec | std::views::filter(is_even) | std::views::transform(square) executes lazily without allocating intermediate vectors."
      ],
      [
        "std::mutex and std::lock_guard<std::mutex>",
        "mutual exclusion lock using RAII to prevent thread deadlocks",
        "lock_guard locks the mutex on construction and automatically unlocks it when exiting scope, ensuring thread safety."
      ]
    ]
  },
  {
    "lang": "Java",
    "category": "Backend & Enterprise",
    "summary": "Type-safe, object-oriented platform powering enterprise backends, Android runtimes, and large distributed data pipelines.",
    "rows": [
      [
        "public class Name { ... }",
        "top-level class visible to all packages in the project",
        "In Java, every public class must reside in a file matching its exact name (Name.java). Encapsulates state and methods."
      ],
      [
        "public static void main(String[] args)",
        "standard program entry point executed by the JVM",
        "public allows JVM access; static means it runs without instantiating the class; void means it returns no exit code."
      ],
      [
        "System.out.println(data)",
        "prints formatted text followed by a newline to stdout",
        "Buffered stream output to the operating system terminal; automatically invokes the object's toString() method."
      ],
      [
        "new ClassName()",
        "instantiates an object on the JVM heap and invokes its constructor",
        "All objects in Java live on the garbage-collected heap; references to objects live on the thread execution stack."
      ],
      [
        "extends vs implements",
        "inherits from a single superclass / implements multiple interfaces",
        "Java allows single class inheritance to prevent the diamond problem, but permits implementing any number of interface contracts."
      ],
      [
        "interface vs abstract class",
        "pure contract of methods / partial implementation with state",
        "Interfaces define behavior contracts (can also have default methods); abstract classes can hold instance state and constructors."
      ],
      [
        "final (variable / method / class)",
        "constant value / cannot be overridden / cannot be subclassed",
        "Declaring classes final (like java.lang.String) guarantees immutability, thread safety, and compiler inlining optimizations."
      ],
      [
        "record User(String id, String name) {}",
        "compact syntax for immutable data-carrier classes (Java 14+)",
        "Automatically generates constructor, getters, equals(), hashCode(), and toString() for clean immutable data objects."
      ],
      [
        "try (var res = new Resource()) { ... } (try-with-resources)",
        "automatically closes AutoCloseable resources on block exit",
        "Guarantees database connections, files, and sockets close even if exceptions occur, eliminating manual finally cleanup."
      ],
      [
        "throws Exception vs throw new Exception()",
        "declares checked exception in method signature / throws exception",
        "Checked exceptions must either be handled with a try/catch block or declared in the throws signature, verified by the compiler."
      ],
      [
        "List<String> list = new ArrayList<>()",
        "dynamically resizing array backed by standard interface",
        "Program to the interface (List), not the implementation (ArrayList), allowing you to swap in LinkedList without breaking callers."
      ],
      [
        "Map<String, User> map = new HashMap<>()",
        "hash table providing O(1) average lookup by key",
        "Relies on equals() and hashCode() contracts on the key class; if hashCode() is poorly implemented, lookups degrade to O(n)."
      ],
      [
        "Stream API: list.stream().filter(...).map(...).collect(...)",
        "functional processing pipeline over collections",
        "Executes lazily: intermediate operations (.filter, .map) only compute when a terminal operation (.collect, .count) is triggered."
      ],
      [
        "Optional<T> (ofNullable, map, orElse)",
        "container object that may or may not contain a non-null value",
        "Designed to eliminate NullPointerExceptions by forcing the caller to explicitly handle the empty case."
      ],
      [
        "enum Direction { NORTH, SOUTH, EAST, WEST }",
        "type-safe enumeration with methods and fields",
        "Java enums are full-featured classes that can implement interfaces, hold fields, and define specific constructor behaviors."
      ],
      [
        "@Override annotation",
        "tells compiler this method must override a superclass method",
        "Catches bugs at compile time if the method signature does not exactly match the parent class or interface method."
      ],
      [
        "super and this keywords",
        "references parent superclass / references current object instance",
        "super() invokes the parent constructor; this.field disambiguates between instance fields and parameter names."
      ],
      [
        "synchronized (lock) { ... }",
        "acquires an intrinsic monitor lock for thread synchronization",
        "Guarantees that only one thread executes the protected block at a time, preventing race conditions on shared state."
      ],
      [
        "volatile boolean running = true;",
        "ensures reads and writes are visible immediately across all CPU threads",
        "Prevents the JVM and CPU from caching the variable in hardware thread registers, enforcing memory visibility."
      ],
      [
        "var count = 42; (local variable type inference)",
        "compiler infers the static type from the right-hand initializer",
        "Available in Java 10+ for local variables. Keeps code concise without sacrificing static compile-time type safety."
      ],
      [
        "Lambda expression: (x, y) -> x + y",
        "compact implementation of a Single Abstract Method (SAM) interface",
        "Passed directly into methods expecting functional interfaces like Predicate, Function, or Consumer."
      ],
      [
        "Generics: <T extends Comparable<T>>",
        "compile-time type parameters with bounded constraints",
        "Implemented via type erasure: the compiler checks types at build time and erases them to Object in JVM bytecode."
      ]
    ]
  },
  {
    "lang": "C#",
    "category": "Backend & Enterprise",
    "summary": "Modern, type-safe, multi-paradigm language driving the cross-platform .NET runtime, cloud microservices, and enterprise systems.",
    "rows": [
      [
        "namespace Company.App; and using System.Text.Json;",
        "organizes code into logical scopes / imports external namespaces",
        "File-scoped namespaces (C# 10+) eliminate unnecessary indentation levels across entire source files."
      ],
      [
        "public class / record / struct",
        "reference type / immutable data-carrier / lightweight value type",
        "records provide value-based equality out-of-the-box; structs are allocated on the stack to minimize GC memory pressure."
      ],
      [
        "public string Name { get; set; }",
        "auto-implemented property with encapsulation",
        "Provides getters and setters without boilerplate. Use { get; init; } to allow setting values only during object initialization."
      ],
      [
        "async Task<T> MethodAsync() and await",
        "asynchronous non-blocking task-based execution",
        "Releases the operating system thread back to the thread pool while awaiting I/O operations, maximizing server throughput."
      ],
      [
        "LINQ: items.Where(x => x.Active).Select(x => x.Name).ToList()",
        "Language Integrated Query for querying collections and databases",
        "Executes seamlessly in memory or translates directly into optimized SQL queries when using Entity Framework Core."
      ],
      [
        "Null-conditional: user?.Profile?.AvatarUrl",
        "evaluates member access only if the target is non-null",
        "Returns null safely if any reference in the chain is null, eliminating deeply nested if (obj != null) checks."
      ],
      [
        "Null-coalescing: val ?? fallback and val ??= fallback",
        "provides fallback value / assigns fallback only if currently null",
        "string display = username ?? \"Guest\"; assigns \"Guest\" if username is null."
      ],
      [
        "Nullable reference types: string? vs string",
        "compiler warnings when accessing potentially null references",
        "When enabled, the compiler treats all standard types as non-null by default, catching NullReferenceException before deployment."
      ],
      [
        "using var stream = new FileStream(...);",
        "disposes IDisposable resources automatically when scope ends",
        "Modern using declaration automatically invokes stream.Dispose() at the end of the enclosing block, preventing leaks."
      ],
      [
        "Pattern matching: switch (obj) { case Circle c => ... }",
        "tests objects against type shapes, ranges, and property patterns",
        "switch expressions return values directly: var fee = user switch { VipUser => 0, RegularUser => 10, _ => 20 };."
      ],
      [
        "String interpolation: $\"User {user.Name} has balance {balance:C}\"",
        "interpolates expressions and formats directly in strings",
        "The :C format specifier automatically renders local currency formatting according to the current culture."
      ],
      [
        "Span<T> and Memory<T>",
        "allocation-free contiguous memory slicing over arrays and strings",
        "Allows slicing and parsing massive text or byte streams with zero heap allocation, powering high-performance .NET servers."
      ],
      [
        "Extension method: public static void Print(this string s)",
        "adds methods to existing types without modifying their source code",
        "Defined in a static class with the this keyword on the first parameter; invoked as if it were an instance method."
      ],
      [
        "record Pos(int X, int Y); with { X = 10 }",
        "non-destructive mutation on immutable records",
        "Creates a shallow copy of the record with specified properties updated, preserving immutability."
      ],
      [
        "Dependency Injection: services.AddScoped<IOrderService, OrderService>()",
        "built-in IoC container lifecycle management in ASP.NET Core",
        "Transient creates new instance each time; Scoped creates one per HTTP request; Singleton creates one for the entire application."
      ]
    ]
  },
  {
    "lang": "PHP",
    "category": "Web & Frontend",
    "summary": "Server-side web processing language powering over 75% of content-managed websites, modern Laravel APIs, and web hosting.",
    "rows": [
      [
        "<?php ... ?>",
        "delimiters opening and closing server-side executable PHP code",
        "Everything outside these tags is sent directly to the client browser as raw HTML; code inside is executed on the web server."
      ],
      [
        "echo $message; and print",
        "outputs text and values directly into the HTTP response body",
        "echo is a language construct that accepts multiple comma-separated arguments and has no return value, making it fast."
      ],
      [
        "$variable_name",
        "all variable names begin with a dollar sign sigil",
        "Variables are dynamically typed and loosely scoped. Variable variables ($$name) can evaluate variable names dynamically."
      ],
      [
        "$_GET, $_POST, $_SERVER, $_SESSION",
        "superglobal arrays holding HTTP request and server data",
        "Always sanitize input: accessing $_GET['id'] directly in SQL queries causes SQL injection vulnerabilities."
      ],
      [
        "Associative array: $user = ['name' => 'Alice', 'role' => 'admin'];",
        "unified ordered hash map and list data structure",
        "In PHP, arrays serve as lists, dictionaries, stacks, and queues simultaneously. Array keys can be integers or strings."
      ],
      [
        "foreach ($array as $key => $value)",
        "iterates through arrays and iterable objects",
        "Can modify values in place by using a reference (&): foreach ($items as &$item) { $item *= 2; }."
      ],
      [
        "function add(int $a, int $b): int",
        "declares functions with parameter and return type hints",
        "PHP 7+ enforces scalar type hints. Use declare(strict_types=1); at the top of files to enforce strict type checking."
      ],
      [
        "Arrow function: fn($x) => $x * $multiplier",
        "concise single-expression closure with auto-capture",
        "Automatically captures outer variables by value without needing the verbose use ($multiplier) syntax of classic closures."
      ],
      [
        "class User { public function __construct(public string $name) {} }",
        "constructor property promotion (PHP 8+)",
        "Declaring public string $name in the constructor signature automatically defines and assigns the instance property."
      ],
      [
        "namespace App\\Services; and use App\\Models\\User;",
        "organizes classes into hierarchical packages and imports them",
        "Follows the PSR-4 autoloading standard, allowing Composer to map namespace paths directly to filesystem directories."
      ],
      [
        "null, isset($var), empty($var)",
        "null constant / checks if set and not null / checks if falsy or empty",
        "isset returns true if variable exists and is not null; empty returns true if variable is unset, empty string, 0, or false."
      ],
      [
        "=== (strict) vs == (loose)",
        "checks value and type without coercion / checks with type coercion",
        "Always use ===. In PHP, loose comparisons like '123' == 123 evaluate to true, and in older PHP 'test' == 0 was true."
      ],
      [
        "Null coalescing: $val ?? 'default'",
        "returns fallback if variable is null or unset",
        "Safe against unset variables: $name = $_GET['user'] ?? 'anonymous' will not trigger an 'Undefined index' warning."
      ],
      [
        "Spaceship operator: $a <=> $b",
        "three-way comparison returning -1, 0, or 1",
        "Returns -1 if $a < $b, 0 if $a == $b, and 1 if $a > $b. Ideal for sorting callback functions in usort()."
      ],
      [
        "match ($status) { 'active' => ..., default => ... }",
        "strict-equality pattern matching expression (PHP 8+)",
        "Evaluates to a value like a ternary operator, uses strict comparisons (===), and throws UnhandledMatchError if no arm matches."
      ],
      [
        "PDO: $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');",
        "PHP Data Objects abstraction layer with prepared statements",
        "Prepared statements send SQL query structure and data parameters separately, mathematically preventing SQL injection."
      ],
      [
        "json_encode($data) and json_decode($json, associative: true)",
        "serializes PHP data to JSON string / parses JSON into array",
        "Passing true as the second argument to json_decode converts JSON objects into associative PHP arrays instead of stdClass."
      ],
      [
        "composer require vendor/package",
        "dependency manager and PSR-4 autoloader for PHP",
        "require 'vendor/autoload.php' loads all third-party libraries and project classes on demand without manual include statements."
      ]
    ]
  },
  {
    "lang": "Ruby & Rails",
    "category": "Backend & Enterprise",
    "summary": "Object-oriented language prioritizing developer happiness, elegant DSLs, and convention-over-configuration web development.",
    "rows": [
      [
        "def method_name(param = 'default') ... end",
        "defines a method with optional default parameters",
        "In Ruby, the last evaluated expression is automatically returned without requiring an explicit return keyword."
      ],
      [
        "puts vs print vs p",
        "print with newline / print without newline / inspect with debug quotes",
        "p object calls object.inspect, displaying quotes on strings and showing internal array structures, ideal for debugging."
      ],
      [
        "@instance_var, @@class_var, $global, :symbol",
        "instance state / class-shared state / global variable / immutable symbol",
        "Symbols (:name) are immutable, internalized strings. Ruby allocates only one memory address per symbol name."
      ],
      [
        "attr_accessor :name, :email",
        "generates getter and setter methods automatically",
        "attr_reader generates only getters; attr_writer generates only setters; attr_accessor creates both."
      ],
      [
        "Blocks: [1, 2].each do |x| ... end and { |x| ... }",
        "chunks of code passed into methods to execute",
        "Use { ... } for single-line blocks; use do ... end for multi-line blocks. The bedrock of Ruby's functional enumerables."
      ],
      [
        "yield(arg)",
        "pauses method execution to execute the passed block",
        "Allows writing custom iteration methods and wrappers: def benchmark; t = Time.now; yield; Time.now - t; end."
      ],
      [
        "class Dog < Animal ... end",
        "defines a class inheriting from a superclass",
        "In Ruby, classes are open: you can reopen any existing class (even String) and add new methods at runtime (monkey patching)."
      ],
      [
        "nil and nil? / empty? / blank? / present?",
        "the singleton null object and state check helpers",
        "In Ruby, ONLY false and nil are falsy. The number 0 and empty string \"\" are truthy! blank? is a Rails helper checking for whitespace."
      ],
      [
        "unless condition ... end",
        "executes the block only if condition evaluates to false",
        "Idiomatic opposite of if. Often used as an inline guard clause: return if user.nil? or redirect_to login unless logged_in?."
      ],
      [
        "self keyword",
        "refers to the current executing object or class context",
        "Inside a class method definition (def self.find_by_email), self refers to the Class object itself."
      ],
      [
        "ActiveRecord: User.where(active: true).order(created_at: :desc)",
        "object-relational mapping querying database tables",
        "Executes lazily: chaining query methods builds an ActiveRecord::Relation; SQL executes only when records are accessed."
      ],
      [
        "Associations: has_many :orders, belongs_to :user",
        "declares relational database foreign key relationships",
        "Automatically injects helper methods like user.orders and order.user, handling SQL joins behind the scenes."
      ],
      [
        "Safe navigation: user&.profile&.avatar_url",
        "calls methods only if the receiver is not nil",
        "Returns nil safely if any link in the chain is nil, preventing NoMethodError: undefined method for nil:NilClass."
      ],
      [
        "Enumerable: .map, .select, .reject, .reduce",
        "functional collection pipeline transformations",
        "numbers.select(&:even?) uses the symbol-to-proc trick (&:method) to call .even? on every item in the list."
      ]
    ]
  },
  {
    "lang": "Go",
    "category": "Systems & Hardware",
    "summary": "Fast compilation, cheap goroutine concurrency, explicit error handling, and single static binaries powering cloud infrastructure.",
    "rows": [
      [
        "package main and import (\"fmt\"; \"net/http\")",
        "declares the executable package name and imports standard libraries",
        "Go compilers reject unused imports with a build error, guaranteeing clean dependency trees."
      ],
      [
        "func name(param string) (string, error)",
        "defines a function with multiple return values",
        "Returning the result and an error together is the foundation of Go's explicit error handling pattern."
      ],
      [
        ":= (short variable declaration)",
        "declares and initializes a variable with inferred type",
        "Only valid inside function bodies. For package-level globals, use var Name string = \"val\"."
      ],
      [
        "struct { Field string `json:\"field\"` }",
        "composite data type with field definitions and reflection tags",
        "Struct tags provide metadata for serialization (JSON, XML, DB). Fields starting with a capital letter are public/exported."
      ],
      [
        "type Reader interface { Read(p []byte) (n int, err error) }",
        "implicit interface satisfied automatically by any matching type",
        "Types do not declare 'implements Reader'. If a type provides the method signature, it satisfies the interface automatically."
      ],
      [
        "make(slice/map/chan, length, capacity)",
        "allocates and initializes slices, maps, or channels in memory",
        "Required for reference types; unlike new(), which only zeroes memory, make sets up internal pointer buffers."
      ],
      [
        "append(slice, elements...)",
        "appends items to a slice, growing capacity when full",
        "If capacity is exceeded, append allocates a new larger backing array and copies elements over, returning a new slice header."
      ],
      [
        "for i, val := range collection",
        "iterates over slices, arrays, maps, and channels",
        "Go has only one looping keyword: for. It handles traditional loops, while-loops, and range iterations."
      ],
      [
        "defer cleanupFunction()",
        "schedules a function call to run when the surrounding function returns",
        "Arguments are evaluated immediately, but execution is deferred until function exit. Ideal for f.Close() or mu.Unlock()."
      ],
      [
        "go workerFunction()",
        "launches a function on a lightweight concurrent goroutine",
        "Goroutines begin with only a ~2KB memory stack that grows and shrinks dynamically, allowing millions of concurrent tasks."
      ],
      [
        "chan Type and ch <- val / val := <-ch",
        "typed channel pipe: send value / receive value",
        "\"Do not communicate by sharing memory; instead, share memory by communicating.\" Enables safe synchronization between goroutines."
      ],
      [
        "select { case msg := <-ch1: ... default: ... }",
        "multiplexes concurrent channel operations simultaneously",
        "Blocks until one of its cases can proceed. If multiple cases are ready, one is chosen via pseudo-random selection."
      ],
      [
        "if err != nil { return nil, fmt.Errorf(\"failed: %w\", err) }",
        "explicit error handling idiom",
        "No hidden exceptions. Errors are normal values that must be inspected and propagated upward explicitly."
      ],
      [
        "sync.WaitGroup (Add, Done, Wait)",
        "synchronization counter waiting for a collection of goroutines to finish",
        "wg.Add(1) increments the counter; wg.Done() decrements it; wg.Wait() blocks execution until the counter reaches zero."
      ],
      [
        "sync.Mutex (Lock, Unlock)",
        "mutual exclusion lock guarding critical shared memory regions",
        "Always follow mu.Lock() immediately with defer mu.Unlock() to prevent deadlocks when functions exit early on errors."
      ],
      [
        "context.Context (WithTimeout, WithCancel)",
        "carries deadlines, cancellation signals, and request-scoped values",
        "Enables propagating cancellation across network calls and child goroutines when an HTTP client disconnects."
      ],
      [
        "panic(\"fatal\") and recover()",
        "triggers catastrophic unwind / recovers control inside deferred function",
        "Reserved exclusively for truly unrecoverable conditions (e.g. nil pointer dereference, out-of-bounds memory)."
      ],
      [
        "val, ok := anyVal.(ConcreteType)",
        "type assertion checking dynamic interface value",
        "If ok is true, val contains the concrete type. If ok is false, prevents a panic and allows safe fallback."
      ]
    ]
  },
  {
    "lang": "Rust",
    "category": "Systems & Hardware",
    "summary": "Zero-cost abstractions, compile-time memory ownership, fearless concurrency, and bare-metal performance without a garbage collector.",
    "rows": [
      [
        "let vs let mut",
        "immutable variable binding by default / explicitly mutable binding",
        "Variables in Rust are strictly immutable unless declared mut, preventing accidental state corruption."
      ],
      [
        "fn name(param: Type) -> ReturnType { ... }",
        "function declaration with mandatory type signatures",
        "The last expression without a semicolon is the returned value. Statements ending in a semicolon evaluate to unit ()."
      ],
      [
        "Ownership: move semantics",
        "every value has exactly one owner; value moves when assigned",
        "let s2 = s1 moves ownership of heap data to s2. s1 is no longer valid, eliminating double-free memory corruption."
      ],
      [
        "&T (immutable borrow) vs &mut T (mutable borrow)",
        "references allowing reading / reference allowing writing",
        "The Borrow Checker rule: you may have any number of immutable references (&T), OR exactly one mutable reference (&mut T), never both."
      ],
      [
        "Lifetimes: 'a in &'a str",
        "compile-time annotations proving references remain valid",
        "Ensures no reference outlives the data it points to, mathematically preventing dangling pointer bugs at compile time."
      ],
      [
        "Option<T>: Some(val) and None",
        "type representing a value that may or may not exist",
        "Rust has no NULL pointer. The compiler forces developers to handle the None case explicitly before unwrapping the value."
      ],
      [
        "Result<T, E>: Ok(val) and Err(err)",
        "type representing either operation success or failure with a reason",
        "All recoverable errors in Rust return Result. Combined with the ? operator for ergonomic error propagation."
      ],
      [
        "? operator (e.g. let file = File::open(path)?)",
        "unwraps Ok value or immediately returns Err upward to caller",
        "Replaces verbose match statements with concise error bubbling while preserving the original error type."
      ],
      [
        "match expr { PatternA => ..., PatternB => ... }",
        "exhaustive pattern matching expression",
        "The compiler guarantees that every possible enum variant or condition is handled; missing a case produces a build error."
      ],
      [
        "if let Some(val) = optional { ... }",
        "concise pattern matching when you only care about one variant",
        "Executes the block only if the pattern matches, ignoring all other possibilities without requiring an exhaustive match."
      ],
      [
        "impl Type { fn method(&self) {} }",
        "associates methods and constructors with a struct or enum",
        "Functions without &self are associated functions (constructors like Type::new()); functions taking &self are instance methods."
      ],
      [
        "trait TraitName { fn method(&self); }",
        "defines a shared interface of behavior across types",
        "Types implement traits via impl TraitName for Type. Enables static dispatch with zero runtime performance cost."
      ],
      [
        "#[derive(Debug, Clone, PartialEq)]",
        "macro automatically implementing common trait behaviors",
        "Generates code at compile time for string debugging ({:?}), deep cloning (.clone()), or equality comparisons (==)."
      ],
      [
        "Box<T>",
        "heap allocation pointer with single ownership",
        "Moves data from the stack to the heap. Used for recursive types where the compiler needs a known pointer size at compile time."
      ],
      [
        "Rc<T> and Arc<T>",
        "reference counting pointer for single-thread / multi-thread shared ownership",
        "Arc<T> (Atomic Reference Counting) allows multiple threads to safely share read-only ownership of the same heap data."
      ],
      [
        "Mutex<T>",
        "mutual exclusion primitive that encapsulates the data it protects",
        "In Rust, the lock protects the data itself: let mut data = mutex.lock().unwrap(); you cannot access the data without holding the lock."
      ],
      [
        "vec![1, 2, 3] and Vec<T>",
        "dynamically growable heap-allocated array",
        "Provides O(1) push and pop operations, continuous cache memory layout, and automatic deallocation upon dropping."
      ],
      [
        "iter().map().filter().collect()",
        "zero-cost lazy iterator pipeline",
        "Compiles into machine code as fast as a handwritten C while loop, optimizing bounds checks away."
      ],
      [
        "String vs &str",
        "heap-allocated owned string / borrowed read-only string slice",
        "String can grow and mutate; &str is an immutable view pointing into existing UTF-8 memory."
      ],
      [
        "unsafe { ... }",
        "tells compiler to permit raw pointer dereferencing and FFI",
        "Used internally by standard libraries to implement low-level hardware access and high-performance primitives."
      ]
    ]
  },
  {
    "lang": "Kotlin",
    "category": "Mobile & Multiplatform",
    "summary": "Modern, concise, null-safe language serving as Google's premier standard for Android development and modern JVM backends.",
    "rows": [
      [
        "val vs var",
        "read-only immutable reference / reassignable mutable variable",
        "Prefer val by default. Immutable references prevent side-effect bugs across multithreaded Android apps."
      ],
      [
        "fun name(param: Type): ReturnType { ... }",
        "function declaration with concise syntax",
        "Single-expression functions can omit curly braces: fun double(x: Int) = x * 2."
      ],
      [
        "Nullable types: String? vs non-null String",
        "type system distinguishes between nullable and non-nullable references",
        "The compiler prevents calling methods on String? directly, eliminating the billion-dollar NullPointerException at build time."
      ],
      [
        "Safe call: user?.profile?.avatar",
        "evaluates property access only if reference is non-null",
        "Returns null safely if user or profile is null rather than throwing an exception."
      ],
      [
        "Elvis operator: name ?: \"Anonymous\"",
        "provides fallback value if left-hand expression is null",
        "val length = str?.length ?: 0 ensures length is a non-null Int with zero fallback."
      ],
      [
        "data class User(val id: Int, val name: String)",
        "concise immutable value-carrier class",
        "Automatically generates equals(), hashCode(), toString(), componentN() destructuring, and copy() methods."
      ],
      [
        "when (x) { 1 -> ...; is String -> ...; else -> ... }",
        "rich pattern-matching expression replacing switch",
        "Can evaluate expressions, type checks, and ranges; compiler checks that all enum or sealed class branches are handled."
      ],
      [
        "object (singleton) and companion object",
        "thread-safe singleton declaration / static class members",
        "object DatabaseManager creates a lazy thread-safe singleton instance on first access without boilerplate."
      ],
      [
        "Extension function: fun String.addExclamation() = \"$this!\"",
        "adds methods to existing classes without inheritance",
        "Allows extending Android framework classes (e.g. View.hide()) cleanly while maintaining full static typing."
      ],
      [
        "Smart cast: if (x is String) { x.length }",
        "compiler automatically casts variable to target type after check",
        "Eliminates explicit casting (as String); once checked with is, the compiler knows the exact type inside that branch."
      ],
      [
        "coroutine: viewModelScope.launch { val data = fetchData() }",
        "lightweight asynchronous concurrency framework",
        "suspend fun functions pause execution without blocking the underlying OS thread, keeping Android UI smooth at 60/120fps."
      ],
      [
        "sealed class / sealed interface",
        "restricted class hierarchies representing finite state variants",
        "Used extensively for UI states: sealed interface UiState { object Loading; data class Success(val d: Data); data class Error(val msg: String); }."
      ]
    ]
  },
  {
    "lang": "Swift",
    "category": "Mobile & Multiplatform",
    "summary": "Fast, safe, modern language engineered by Apple for iOS, macOS, watchOS, and native systems development.",
    "rows": [
      [
        "let vs var",
        "immutable constant / mutable variable",
        "Swift strongly encourages let for all values that do not change, enabling compiler optimization and thread safety."
      ],
      [
        "func name(label param: Type) -> ReturnType",
        "function declaration with external argument labels",
        "Argument labels make calls read like natural English sentences: greet(person: \"Alice\", from: \"London\")."
      ],
      [
        "Optional<Wrapped> (Type?): .some(val) or .none",
        "type representing a value that may be nil",
        "Swift disallows nil on standard types. Optionals must be explicitly unwrapped before use."
      ],
      [
        "if let val = opt and guard let val = opt else { return }",
        "safe optional binding constructs",
        "guard let checks for non-null and exits early if nil, keeping the unwrapped variable in scope for the rest of the function."
      ],
      [
        "Nil-coalescing: opt ?? fallback",
        "unwraps optional or returns fallback value if nil",
        "let name = username ?? \"Guest\" guarantees a non-optional String value."
      ],
      [
        "struct (value type) vs class (reference type)",
        "copied on assignment / shared reference in memory",
        "Swift prefers structs for almost all models; structs are allocated cheaply and cannot cause unintended shared-state mutations."
      ],
      [
        "protocol ProtocolName { func method() }",
        "defines an interface contract of methods and properties",
        "The core of Protocol-Oriented Programming (POP). Protocols can provide default implementations via extensions."
      ],
      [
        "extension Type { ... }",
        "adds new methods, computed properties, or protocol conformance",
        "Allows extending built-in types (e.g. extension Int { var squared: Int { self * self } }) across codebases."
      ],
      [
        "enum with associated values: Result<Success, Failure>",
        "enumeration variants carrying custom data payloads",
        "enum NetworkState { case loading; case success(Data); case error(Error) } models state machines cleanly."
      ],
      [
        "Closures: { (params) -> ReturnType in body }",
        "self-contained anonymous functional blocks",
        "Trailing closure syntax allows omitting parentheses: numbers.map { $0 * 2 } using shorthand argument names ($0, $1)."
      ],
      [
        "defer { cleanup() }",
        "executes code when the current code scope exits",
        "Guarantees resource teardown (file closes, lock releases) regardless of how the function returns."
      ],
      [
        "async / await and Task { ... }",
        "structured modern asynchronous programming",
        "Paired with Actors (actor BankAccount) to eliminate data races and thread synchronization bugs automatically."
      ]
    ]
  },
  {
    "lang": "Elixir & Erlang",
    "category": "Backend & Enterprise",
    "summary": "Built on the BEAM virtual machine: millions of isolated processes, supervision trees, and nine-nines uptime fault tolerance.",
    "rows": [
      [
        "defmodule ModuleName do ... end",
        "defines a namespace of related functions",
        "In Elixir, all functions reside inside modules; functions are identified by name and arity (e.g. String.length/1)."
      ],
      [
        "|> (pipe operator)",
        "passes the result of the left expression as the first argument to the right",
        "Turns nested function calls inside out: data |> validate() |> transform() |> save() reads cleanly top-to-bottom."
      ],
      [
        "= (match operator)",
        "pattern matches data structures rather than simple assignment",
        "{:ok, result} = fetch_user(id) asserts that the call succeeded and binds result; crashes cleanly if {:error, _} is returned."
      ],
      [
        ":atom (named constant)",
        "immutable identifier whose name is its own value",
        "Atoms like :ok, :error, :nil are stored in an internal atom table; fast O(1) comparison by memory pointer."
      ],
      [
        "{:ok, \"value\"} (tuples) vs [1, 2, 3] (linked lists)",
        "contiguous fixed-size group / singly linked list for iteration",
        "Tuples are ideal for pattern-matching return values; lists support fast [head | tail] deconstruction."
      ],
      [
        "%{ key: \"value\" } and map.key",
        "key-value dictionary map",
        "Maps allow any key type. Updates (%{ map | key: \"new\" }) create efficient structural-sharing copies."
      ],
      [
        "spawn(fn -> ... end)",
        "spawns a lightweight BEAM actor process in microseconds",
        "BEAM processes are not OS threads; they consume only ~300 words of memory and are isolated from other processes."
      ],
      [
        "send(pid, msg) and receive do msg -> ... end",
        "asynchronous message passing between isolated processes",
        "Processes have private heaps and mailboxes. If a process crashes, it cannot corrupt memory in any other process."
      ],
      [
        "GenServer (Generic Server)",
        "OTP abstraction for stateful client-server worker processes",
        "Standardizes callbacks (init, handle_call, handle_cast, handle_info) for managing concurrent state."
      ],
      [
        "Supervisor: 'let it crash' philosophy",
        "monitors child processes and restarts them on failure",
        "Instead of defensive code trying to handle every rare corrupt state, crashed processes are simply restarted from clean initial state."
      ],
      [
        "Enum.map / Enum.filter / Enum.reduce",
        "functional transformations over collections and streams",
        "Eagerly evaluates collections; for lazy streaming over huge data sources, use the Stream module."
      ]
    ]
  },
  {
    "lang": "SQL",
    "category": "Data & Storage",
    "summary": "Declarative relational database engine: describe the desired result set, and let the query optimizer find the optimal physical plan.",
    "rows": [
      [
        "SELECT col1, col2 FROM table_name",
        "retrieves specific columns from a relational table",
        "Never use SELECT * in production applications; fetching unneeded columns wastes memory, network bandwidth, and prevents index-only scans."
      ],
      [
        "WHERE condition (AND, OR, NOT)",
        "filters physical rows before grouping or aggregation",
        "Filters must be placed here rather than in HAVING so the database engine can utilize B-Tree indexes to avoid full table scans."
      ],
      [
        "INNER JOIN vs LEFT JOIN on col = col",
        "returns matching rows only / returns all left rows plus matched right",
        "INNER JOIN drops rows without a counterpart; LEFT JOIN preserves all left rows, filling unmatched right columns with NULL."
      ],
      [
        "GROUP BY column_name",
        "collapses rows sharing the same value into single summary buckets",
        "Every column in the SELECT list must either appear in the GROUP BY clause or be wrapped inside an aggregate function."
      ],
      [
        "HAVING aggregate_condition",
        "filters aggregated summary buckets after GROUP BY",
        "WHERE filters individual rows before grouping; HAVING filters collapsed groups (e.g. HAVING COUNT(*) > 5)."
      ],
      [
        "ORDER BY col ASC | DESC and LIMIT n OFFSET m",
        "sorts result rows and paginates output",
        "Without ORDER BY, relational row return order is nondeterministic. High OFFSET pagination degrades performance; prefer keyset pagination."
      ],
      [
        "INSERT INTO table (col1, col2) VALUES (v1, v2)",
        "appends new rows to a table",
        "Support batch inserts: INSERT INTO table VALUES (...), (...) executes in a single round-trip."
      ],
      [
        "UPDATE table SET col = val WHERE condition",
        "modifies existing rows matching the filter",
        "Always test the WHERE clause with a SELECT first; omitting WHERE updates every single row in the entire database table."
      ],
      [
        "DELETE FROM table WHERE condition",
        "removes matching rows from a table",
        "Logged row by row. For wiping an entire table instantly, prefer TRUNCATE TABLE, which resets storage extents directly."
      ],
      [
        "CREATE TABLE name (id SERIAL PRIMARY KEY, ...)",
        "defines relational schema, column types, and constraints",
        "Constraints (NOT NULL, UNIQUE, CHECK) enforce data integrity at the database level regardless of application bugs."
      ],
      [
        "PRIMARY KEY vs FOREIGN KEY ... REFERENCES",
        "unique record identifier / enforces referential relationship between tables",
        "Foreign keys guarantee data consistency: the database prevents deleting a parent record if child records still reference it."
      ],
      [
        "CREATE INDEX idx_name ON table (column)",
        "creates a B-Tree lookup structure for fast O(log N) searches",
        "Indexes speed up SELECT queries dramatically, but add minor overhead to INSERT, UPDATE, and DELETE operations."
      ],
      [
        "NULL, IS NULL, IS NOT NULL",
        "represents unknown or missing data in three-valued logic",
        "Never check col = NULL; in SQL, NULL = NULL evaluates to UNKNOWN, not TRUE. You must use IS NULL or IS NOT NULL."
      ],
      [
        "COUNT(*), SUM(col), AVG(col), MIN(col), MAX(col)",
        "aggregate functions computing values across multiple rows",
        "COUNT(*) counts all rows; COUNT(col) counts only rows where col is not NULL."
      ],
      [
        "DISTINCT",
        "eliminates duplicate rows from the result set",
        "Requires the database engine to perform an expensive sort or hash operation across all retrieved rows."
      ],
      [
        "LIKE '%pattern%' vs ILIKE",
        "wildcard pattern matching / case-insensitive matching",
        "Prefix wildcards ('%text') cannot utilize standard B-Tree indexes, triggering full table scans. Use full-text search indexes instead."
      ],
      [
        "IN (val1, val2) and NOT IN",
        "checks if value matches any item in a list or subquery",
        "Warning: NOT IN returns zero rows if the subquery contains even a single NULL value due to three-valued logic. Use NOT EXISTS."
      ],
      [
        "CASE WHEN cond THEN val ELSE default END",
        "conditional branching expression inside queries",
        "Allows dynamic computed columns: CASE WHEN score >= 90 THEN 'A' ELSE 'B' END."
      ],
      [
        "BEGIN TRANSACTION, COMMIT, ROLLBACK",
        "guarantees ACID atomic transaction boundaries",
        "All updates inside the transaction succeed together, or ROLLBACK aborts them completely if a failure occurs."
      ],
      [
        "EXPLAIN and EXPLAIN ANALYZE",
        "displays the query execution plan and actual execution timings",
        "Identifies sequential scans (Seq Scan), index scans (Index Scan), join algorithms, and execution bottlenecks."
      ],
      [
        "COALESCE(val1, val2, ...)",
        "returns the first non-null argument in the list",
        "COALESCE(user.phone, user.email, 'N/A') provides fallbacks for nullable database columns."
      ],
      [
        "Window function: ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)",
        "calculates ranking or cumulative metrics across row subsets",
        "Unlike GROUP BY, window functions do not collapse rows together; they compute values alongside the original individual rows."
      ]
    ]
  },
  {
    "lang": "Bash",
    "category": "Data & Storage",
    "summary": "Unix shell interpreter: connecting operating system processes, streams, exit codes, and automating system pipelines.",
    "rows": [
      [
        "| (pipe: cmd1 | cmd2)",
        "connects standard output (stdout, fd 1) of cmd1 to standard input (stdin) of cmd2",
        "Unix's fundamental pipeline operator. By default, error messages (stderr, fd 2) do NOT pass through the pipe."
      ],
      [
        "> file and >> file",
        "redirects stdout to file (overwrite) / appends stdout to file",
        "> truncates the destination file immediately; >> appends new lines to the end of the file."
      ],
      [
        "2>&1 (merge stderr into stdout)",
        "redirects file descriptor 2 (stderr) to file descriptor 1 (stdout)",
        "cmd > output.log 2>&1 sends both regular output and diagnostic error messages into the same log file."
      ],
      [
        "set -euo pipefail",
        "the production safety preamble for all Bash shell scripts",
        "-e exits immediately on command errors; -u exits on unset variables; -o pipefail catches failures inside piped commands."
      ],
      [
        "$VAR and ${VAR:-default_val}",
        "expands variable / provides fallback if unset or empty",
        "Always quote variables: \"$VAR\" prevents whitespace word-splitting and malicious pathname expansion."
      ],
      [
        "$? (exit code of last command)",
        "status code returned by previous command (0 = success, 1-255 = error)",
        "In Unix, an exit status of 0 means OK; any non-zero value indicates a failure code."
      ],
      [
        "$$ (process ID) and $! (background PID)",
        "PID of current shell / PID of most recently launched background job",
        "$$ is often used to generate unique temporary files: /tmp/tempfile.$$.txt."
      ],
      [
        "$# (arg count), $0 (script name), $@ (all args)",
        "positional argument metadata inside shell scripts and functions",
        "\"$@\" preserves exact argument boundary quotes when forwarding arguments to another command."
      ],
      [
        "cmd1 && cmd2 and cmd1 || cmd2",
        "execute cmd2 only if cmd1 succeeded / execute only if cmd1 failed",
        "mkdir -p dir && cd dir ensures you only change directory if creating it succeeded."
      ],
      [
        "if [ -f \"$file\" ]; then ... fi",
        "tests conditions: -f (file exists), -d (directory), -z (string empty)",
        "Inside [[ ... ]], modern Bash provides advanced string regex matching (=~) and boolean operators (&&, ||)."
      ],
      [
        "for item in \"${array[@]}\"; do ... done",
        "loops through array elements safely preserving spaces",
        "Looping without quotes (for x in $items) breaks on filenames containing spaces."
      ],
      [
        "while read -r line; do ... done < file.txt",
        "reads a file line by line without corrupting backslashes",
        "The -r flag prevents backslashes from acting as escape characters, preserving exact file contents."
      ],
      [
        "export ENV_VAR=\"value\"",
        "marks variable to be inherited by child processes",
        "Without export, variables are private to the current shell process and invisible to subcommands."
      ],
      [
        "chmod +x script.sh and chown user:group file",
        "makes file executable / changes user and group ownership",
        "chmod 755 grants read/write/execute to owner, read/execute to group and others."
      ],
      [
        "grep -rn \"pattern\" dir/",
        "searches text matching regex recursively with line numbers",
        "-r searches directories recursively; -n prints line numbers; -i enables case-insensitive matching."
      ],
      [
        "sed 's/old/new/g' file.txt",
        "stream editor replacing text patterns",
        "The s command substitutes; the g flag replaces all occurrences across the line rather than just the first."
      ],
      [
        "awk '{print $1, $3}' file.txt",
        "pattern-directed column processing language",
        "Splits lines by whitespace by default; $1 is the first column, $NF is the last column, NR is the line number."
      ],
      [
        "xargs -I {} cmd {}",
        "builds and executes commands from standard input lines",
        "find . -name \"*.tmp\" | xargs rm -f deletes all matching files efficiently in batch chunks."
      ],
      [
        "trap \"cleanup_fn\" EXIT INT TERM",
        "registers signals and exit handlers for automatic cleanup",
        "Ensures temporary directories and locks are removed when the script finishes or is aborted with Ctrl+C."
      ],
      [
        "$(command)",
        "command substitution: runs command and captures its standard output",
        "CURRENT_DATE=$(date +%Y-%m-%d) stores the command's terminal output directly into a variable."
      ]
    ]
  },
  {
    "lang": "Regular Expressions",
    "category": "Data & Storage",
    "summary": "Formal language describing text patterns: character classes, greedy and lazy quantifiers, lookarounds, and capture groups.",
    "rows": [
      [
        ". (dot)",
        "matches any single character except newline",
        "To match a literal dot (like in a domain name or file extension), you must escape it with a backslash: \\.."
      ],
      [
        "* and +",
        "zero or more occurrences / one or more occurrences",
        "Quantifiers are greedy by default: a.*b will match from the very first 'a' to the very last 'b' in the entire document."
      ],
      [
        "? (optional quantifier)",
        "matches zero or one occurrence of the preceding element",
        "https? matches both 'http' and 'https'. Also used after * or + to make them lazy (non-greedy)."
      ],
      [
        "^ and $",
        "anchors matching the start of string / end of string",
        "^\\d+$ matches an entire string of digits from start to finish, preventing matching digits buried inside text."
      ],
      [
        "[abc] and [^abc]",
        "matches any one character inside the set / negated set",
        "[^0-9] matches any single character that is not a digit."
      ],
      [
        "[a-z0-9]",
        "character range matching lowercase letters or digits",
        "Hyphens represent ranges inside brackets unless placed at the start or end of the bracket expression."
      ],
      [
        "\\d vs \\D and \\w vs \\W and \\s vs \\S",
        "shorthand character classes (digit, word, whitespace) and their inverses",
        "\\d matches [0-9]; \\w matches [a-zA-Z0-9_]; \\s matches spaces, tabs, and newlines. Uppercase letters invert the match."
      ],
      [
        "\\b (word boundary)",
        "zero-width assertion between a word character (\\w) and non-word",
        "\\bcat\\b matches the standalone word 'cat', but will not match 'catalog' or 'scatter'."
      ],
      [
        "(pattern) (capturing group)",
        "groups sub-patterns together and captures matched text",
        "(\\d{4})-(\\d{2})-(\\d{2}) captures year, month, and day into indexed groups $1, $2, $3."
      ],
      [
        "(?:pattern) (non-capturing group)",
        "groups sub-patterns without allocating capture memory",
        "Optimizes regex execution performance when you need grouping for quantifiers (e.g. (?:abc)+) but don't need the matched text."
      ],
      [
        "(?<name>pattern) (named capture group)",
        "captures matched text into a named group",
        "Access via match.groups.name in JavaScript/Python, making code far more maintainable than numeric indices."
      ],
      [
        "(?=pattern) (positive lookahead)",
        "asserts that what follows matches pattern without consuming characters",
        "\\d+(?=px) matches digits only if they are immediately followed by 'px', but does not include 'px' in the match."
      ],
      [
        "(?!pattern) (negative lookahead)",
        "asserts that what follows does NOT match pattern",
        "foo(?!bar) matches 'foo' only if it is not followed by 'bar'. Essential for password complexity validations."
      ],
      [
        "(?<=pattern) and (?<!pattern) (lookbehinds)",
        "positive lookbehind / negative lookbehind assertions",
        "(?<=\\$)\\d+ matches numbers immediately preceded by a dollar sign without including the dollar sign."
      ],
      [
        "a|b (alternation)",
        "matches either pattern a or pattern b",
        "Evaluated from left to right: (cat|dog) matches either animal."
      ],
      [
        "{n} and {min,max}",
        "exact repetition count / bounded repetition range",
        "\\d{4} matches exactly 4 digits; \\d{2,4} matches between 2 and 4 digits."
      ],
      [
        "*? and +? (lazy / non-greedy match)",
        "matches as few characters as possible to satisfy the pattern",
        "<.*?> matches single HTML tags like <div>, whereas <.*> greedily consumes everything from the first < to the last >."
      ],
      [
        "Flags: /pattern/gims",
        "modifiers: global, case-insensitive, multiline, dotAll",
        "g finds all matches; i ignores case; m makes ^ and $ match line starts/ends; s allows . to match newline characters."
      ]
    ]
  },
  {
    "lang": "CUDA",
    "category": "AI & High Performance",
    "summary": "Massively parallel SIMD computing on NVIDIA GPU hardware: kernels, thread blocks, shared memory, and AI tensor acceleration.",
    "rows": [
      [
        "__global__ void kernel()",
        "declares a GPU kernel function called from the CPU (host)",
        "Executes on the GPU device asynchronously across thousands of parallel threads. Must return void."
      ],
      [
        "__device__ void helper()",
        "GPU function callable only from other GPU kernels or functions",
        "Compiled directly into GPU PTX assembly; executed by individual threads on streaming multiprocessors."
      ],
      [
        "__host__ void cpuFunc()",
        "standard function that executes on the CPU host",
        "Functions can be declared __host__ __device__ to compile for both CPU and GPU execution."
      ],
      [
        "kernel<<<gridDim, blockDim>>>(args)",
        "kernel execution configuration launch syntax",
        "gridDim specifies the number of thread blocks; blockDim specifies the number of threads per block (up to 1024)."
      ],
      [
        "threadIdx.x/y/z and blockIdx.x/y/z",
        "built-in 3D coordinates of current thread and block",
        "int idx = blockIdx.x * blockDim.x + threadIdx.x computes the unique global 1D thread index for array processing."
      ],
      [
        "blockDim.x and gridDim.x",
        "dimensions of the thread block / dimensions of the grid",
        "Allows writing kernels that map directly to 1D vectors, 2D image matrices, or 3D volumetric tensor data."
      ],
      [
        "cudaMalloc((void**)&d_ptr, size)",
        "allocates raw memory on the GPU's high-bandwidth VRAM",
        "The CPU cannot directly dereference d_ptr; data must be transferred using cudaMemcpy."
      ],
      [
        "cudaMemcpy(dst, src, size, cudaMemcpyHostToDevice)",
        "copies data over the PCIe bus from CPU RAM to GPU VRAM",
        "Transferring data across PCIe is often the main performance bottleneck in GPU computing; minimize transfers."
      ],
      [
        "cudaMemcpy(dst, src, size, cudaMemcpyDeviceToHost)",
        "transfers computed results from GPU VRAM back to CPU RAM",
        "Synchronizes execution: the CPU blocks until the memory transfer completes."
      ],
      [
        "cudaFree(d_ptr)",
        "frees allocated VRAM memory on the GPU device",
        "Must be called for every cudaMalloc to prevent running out of GPU memory (CUDA Out of Memory)."
      ],
      [
        "__shared__ float cache[256]",
        "allocates ultra-fast on-chip SRAM shared by threads in a block",
        "Shared memory has orders of magnitude lower latency and higher bandwidth than global VRAM; used for tile caching in matrix multiplication."
      ],
      [
        "__syncthreads()",
        "barrier synchronization for all threads in the same block",
        "Guarantees that all threads in the block reach this point before any thread continues, preventing race conditions on shared memory."
      ],
      [
        "cudaDeviceSynchronize()",
        "CPU host halts and waits for all launched GPU kernels to finish",
        "Kernel launches (<<<...>>>) are asynchronous. cudaDeviceSynchronize() blocks until all GPU work is complete."
      ],
      [
        "Warp (32 threads)",
        "hardware execution unit executing the same instruction in lockstep",
        "If threads in a warp take different branches (warp divergence), both branches are executed serially, degrading performance."
      ],
      [
        "atomicAdd(&val, delta)",
        "hardware-level atomic addition preventing race conditions",
        "Guarantees correct results when multiple threads update the same global or shared memory address simultaneously."
      ]
    ]
  },
  {
    "lang": "Assembly",
    "category": "Systems & Hardware",
    "summary": "Direct x86_64 machine instructions, hardware CPU registers, stack pointers, and system call execution.",
    "rows": [
      [
        "MOV dst, src",
        "copies data between CPU registers or between memory and registers",
        "x86_64 cannot move directly from memory to memory in a single instruction; data must load into a register first."
      ],
      [
        "ADD dst, src and SUB dst, src",
        "performs arithmetic addition and subtraction on registers",
        "Updates CPU condition flags (Zero Flag ZF, Carry Flag CF, Sign Flag SF, Overflow Flag OF)."
      ],
      [
        "CMP op1, op2",
        "compares two operands by computing (op1 - op2) without saving result",
        "Sets CPU flags based on the subtraction result, immediately followed by conditional jump instructions."
      ],
      [
        "JMP label",
        "unconditional jump: changes instruction pointer (RIP) to target address",
        "Direct hardware jump instruction, the assembly equivalent of goto."
      ],
      [
        "JE / JZ and JNE / JNZ",
        "jump if equal (Zero Flag = 1) / jump if not equal",
        "Conditional branch instructions used to implement if/else statements and loop termination checks."
      ],
      [
        "CALL label and RET",
        "calls subroutine / returns to caller address",
        "CALL pushes the next instruction address onto the stack; RET pops that address off the stack back into RIP."
      ],
      [
        "PUSH src and POP dst",
        "pushes value onto stack (decrements RSP) / pops into register (increments RSP)",
        "The x86_64 stack grows downward from high memory to low memory."
      ],
      [
        "RAX / EAX",
        "64-bit / 32-bit accumulator register; stores function return values",
        "By calling convention, functions return their numeric or pointer result in RAX."
      ],
      [
        "RSP (Stack Pointer)",
        "points to the top of the current thread execution stack",
        "Modified automatically by PUSH, POP, CALL, and RET, or adjusted manually via sub rsp, 32 to allocate local stack frames."
      ],
      [
        "RBP (Base Pointer)",
        "frame pointer pointing to the base of current stack frame",
        "Historically used to index function local variables and arguments; modern compilers often omit it (-fomit-frame-pointer)."
      ],
      [
        "RDI, RSI, RDX, RCX, R8, R9",
        "System V AMD64 ABI registers holding function arguments",
        "On Linux/macOS, the first 6 integer/pointer arguments to a function are passed in these registers, not on the stack."
      ],
      [
        "RIP (Instruction Pointer / Program Counter)",
        "register holding the memory address of the next instruction to execute",
        "Cannot be written directly with MOV; updated via jumps, calls, and returns."
      ],
      [
        "LEA dst, [src + offset]",
        "Load Effective Address: computes address calculation without memory access",
        "Commonly abused as a fast arithmetic trick: lea rax, [rdi + rsi*4 + 8] performs multiply and add in a single CPU clock cycle."
      ],
      [
        "SYSCALL",
        "switches from user space (Ring 3) to OS kernel space (Ring 0)",
        "Passes syscall number in RAX (e.g. 1 for sys_write on Linux) and arguments in RDI, RSI, RDX; invokes OS kernel services."
      ],
      [
        "NOP (0x90)",
        "No Operation: advances instruction pointer by 1 byte without doing anything",
        "Used for memory alignment of loop targets so instructions line up on 16-byte CPU cache line boundaries."
      ]
    ]
  }
]
};
