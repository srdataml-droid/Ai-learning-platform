// GENERATED FILE — do not edit by hand.
// Source: content/languages/*.json — regenerate with `npm run build:data`.
(function () {
  window.CurriculumStorylines = window.CurriculumStorylines || {};

  const STORYLINES = {
  "C.1": {
    "id": "C.1",
    "name": "Machine code and assembly",
    "status": "traced",
    "seed": "C.1",
    "constraint": "There is nothing underneath. The machine executes numbers, so any convenience you want has to already exist as a program before your program runs, built on a machine with barely enough memory to hold the program itself.",
    "opening": "Assembly looks like a thin coat of paint over the numbers, and that is exactly what it is. Every feature it has is one somebody could afford to build with the machine already in the room, and every feature it lacks is one they could not. Read it that way and the notation stops looking primitive and starts looking like a budget.",
    "decisions": [
      {
        "decision": "One line is one instruction, and the notation is the bit pattern with names for its parts",
        "because": "The translator has to run on the machine it translates for, and that machine has almost no memory. Anything cleverer than a direct substitution costs space that the program itself needs.",
        "syntax": [
          {
            "code": "R16S",
            "means": "operation R, address 16, short operand",
            "consequence": "An order on this machine was punched as a character that directly gave the operation code, then decimal digits giving the address, then a letter specifying the operand length bit. R16S assembled to 00100 0 0000010000 0. The notation is not a description of the instruction; it is the instruction, spelled in characters a person can type."
          },
          {
            "code": "T11L",
            "means": "operation T, address 11, long operand",
            "consequence": "The characters R and T had codes 4 and 5, so reading the notation and reading the machine word are the same skill. There is no translation to understand, which is why an assembler of this kind can be small enough to fit alongside the thing it assembles."
          }
        ]
      },
      {
        "decision": "A name for a place, rather than the number of the place",
        "because": "An address is a position, and positions move. Insert one instruction near the top and every address below it is now wrong, which makes editing a program an exercise in arithmetic rather than in thought.",
        "syntax": [
          {
            "code": "loop:  ...  JMP loop",
            "means": "jump to wherever that label ended up",
            "consequence": "The label is resolved when the program is assembled, so the programmer stops tracking positions and the assembler starts. This is the first time a tool holds a fact about the program that the programmer no longer has to hold, and nearly everything later in this chain is a larger version of the same trade."
          }
        ]
      },
      {
        "decision": "The thing that loads a program is itself a program, and it has to be there first",
        "because": "A stored-program machine runs what is in memory, so something must already be in memory to read a tape. There is no operating system to ask, and no one to ask it.",
        "syntax": [
          {
            "code": "initial orders",
            "means": "the small program that reads the tape and places what it finds",
            "consequence": "On this machine the initial orders were written by David Wheeler in May 1949 to load and enter a paper tape representation of a program, and were themselves placed in memory locations 0 to 30 by a mechanism involving uniselectors before execution started from location 0. Every bootstrap since is that shape: a fixed mechanism loads a small program whose job is to load the real one."
          }
        ]
      },
      {
        "decision": "A library of routines, and a word for joining them together",
        "because": "Routines that work are worth more than routines you understand, and the only way to reuse one is to place a copy of it into the program you are building.",
        "syntax": [
          {
            "code": "assemble A, B, C",
            "means": "put these sections together into one program",
            "consequence": "The word assembler is generally attributed to Wilkes, Wheeler and Gill in 1951, where it named a program that assembled several sections into one program rather than one that translated mnemonics. The modern meaning drifted onto the translator, and the original job, joining separately written pieces into one image, is now called linking. Worth knowing, because the problem was recognised and named before the translator was the interesting part."
          }
        ]
      }
    ],
    "wall": "Every decision here is one-to-one with one machine. The notation is the instruction set, so a program is an asset that belongs to the hardware it was written for and dies with it. Nothing is checked, because nothing above the notation knows what you meant — a wrong address is not an error, it is a different program. And the first published description of an assembly language is generally identified as a 1947 report by Andrew Booth and Kathleen Britten, later Kathleen Booth, produced while visiting the Institute for Advanced Study at Princeton; that report is not readily available in digital form, so even the origin story rests on later accounts rather than a document you can inspect.",
    "leadsTo": "C.2",
    "leadsToReason": "If the expensive part is writing formulas as instructions, and the formulas are the part the scientist already has, then the translator should take the formula."
  },
  "C.10": {
    "id": "C.10",
    "name": "Perl",
    "status": "traced",
    "seed": "C.10",
    "constraint": "It was written for a job the author actually had: reports about information being synchronised between two sites, where the existing tools ran out of capability and writing it in C was not worth the effort.",
    "inherited": {
      "from": "C.9",
      "wall": "A compiled systems language makes you declare types, manage memory and run a build for a program that exists to read a file and print a summary."
    },
    "opening": "It is a language designed to be the next thing you reach for when a shell pipeline stops being enough, which means it has to be at least as convenient as the pipeline and rather more capable. Everything below follows from that, and the manual page states the niche directly: “If you have a problem that would ordinarily use sed or awk or sh, but it exceeds their capabilities or must run a little faster, and you don't want to write the silly thing in C, then perl may be for you.”",
    "decisions": [
      {
        "decision": "Pattern matching is part of the language, not a library",
        "because": "The job is scanning arbitrary text files, extracting information from them and printing reports based on it. If that is the job, the matching operation should be as short to write as arithmetic is in a language about numbers.",
        "syntax": [
          {
            "code": "if ($line =~ /^(\\w+)\\s+(\\d+)/) { ... }",
            "means": "match the line against a pattern and capture two pieces",
            "consequence": "The pattern has its own place in the grammar and the captures land in variables without being asked for. This is the clearest example in the whole chain of a language making the common case short: the ratio of characters typed to work done is the design, and everything awkward about the language is downstream of protecting that ratio."
          }
        ]
      },
      {
        "decision": "Variables carry a symbol saying what kind of thing they are",
        "because": "A text-processing program is full of scalars, lists and tables at once, and the author wanted to see which is which while reading a dense line rather than by looking up a declaration.",
        "syntax": [
          {
            "code": "$count   @lines   %seen",
            "means": "one value, a list of values, a table of them",
            "consequence": "The marker makes a one-line program readable in a way an undecorated name would not, and makes a large program noisy in a way an undecorated name would not. The same decision produces both, which is why the language divides people so cleanly."
          }
        ]
      },
      {
        "decision": "Do what people mean, and provide several ways to say it",
        "because": "The stated preference is to be practical — easy to use rather than small, and hospitable rather than restrictive — because the competition is a shell pipeline, and a pipeline never told anybody they had written something the wrong way.",
        "syntax": [
          {
            "code": "print \"found\\n\" if $found;",
            "means": "a condition written after the thing it guards",
            "consequence": "The statement reads the way a person would say it, and the language gained a second way to write a conditional to allow that. Repeated across the grammar it produces enormous expressive range, and a program that two authors write in two visibly different dialects of the same language."
          }
        ]
      }
    ],
    "wall": "Larry Wall released version 1.0 on 18 December 1987 while working as a programmer at Unisys, posting the source to a newsgroup, and it did exactly what it promised — it combines some of the best features of C, sed, awk and sh, and for a few hundred lines it is unbeatable. Past that the bill arrives: the decisions that make one line dense make ten thousand lines unreadable, the punctuation that marks the kind of a variable also fills the screen, and the several ways to say a thing mean the next reader must know all of them. The name is a good miniature of the language's relationship with its own reputation: it is commonly expanded as Practical Extraction and Report Language, but Wall has said it is a riff on Pearl, from the parable of the pearl, with the letter dropped because a language called Pearl already existed.",
    "leadsTo": "C.11",
    "leadsToReason": "If a script survives to be read by somebody else, the property that matters most is not how short it was to write but whether the next person can see what it does."
  },
  "C.11": {
    "id": "C.11",
    "name": "Python",
    "status": "traced",
    "seed": "C.11",
    "constraint": "It was built by somebody who had already implemented a teaching language and remembered both what he learned from it and what frustrated him about it, for a job where writing system utilities in C was taking too long.",
    "inherited": {
      "from": "C.10",
      "wall": "A language that optimises for how short a line is to write produces programs nobody can read six months later, including the person who wrote them."
    },
    "opening": "In 1989 van Rossum was working on a microkernel-based distributed system, developing system utilities for it, and found that developing in C took too much time — so he decided to spend his free time building a language that would let him work faster. Implementation started that December, over a Christmas holiday, as a successor to the earlier teaching language capable of exception handling and of interfacing with that operating system. The design question it answers is narrower than people assume: not what is the best language, but what makes a utility program fast to write and still readable by somebody else.",
    "decisions": [
      {
        "decision": "Indentation is the block structure",
        "because": "Programmers indent anyway to show structure, and when the indentation and the delimiters disagree it is the indentation a reader believes. Making the visible structure the real structure removes a whole class of disagreement between what a program looks like and what it does.",
        "syntax": [
          {
            "code": "if total > limit:\n    notify(user)\n    log(total)",
            "means": "both statements are inside the condition because both are indented",
            "consequence": "There is no way to write code whose appearance and behaviour differ on this point, and no argument about where a brace goes. What you give up is the ability to have the layout ignored: a block cannot be reformatted by a tool that does not understand it, and a line pasted at the wrong depth is a different program rather than an untidy one."
          }
        ]
      },
      {
        "decision": "The common data structures are in the language, with syntax",
        "because": "A utility program is mostly lists of things and lookups by name. If those need a library and a constructor call, the short program is not short.",
        "syntax": [
          {
            "code": "counts = {}\nfor line in lines:\n    counts[line] = counts.get(line, 0) + 1",
            "means": "a table, built by looking things up in it",
            "consequence": "Several features were present in the initial release: classes with inheritance, exception handling, functions, and the core datatypes list, dict and str. Having the table and the list be first-class, with their own notation, is what lets the language be terse without any of the punctuation that made its predecessor terse."
          }
        ]
      },
      {
        "decision": "Failure is an exception, and a module is a file",
        "because": "The language existed to write system utilities, which spend their lives being interrupted by things outside them; and the parts of a growing program need boundaries that do not require a build system to declare.",
        "syntax": [
          {
            "code": "try:\n    data = open(path).read()\nexcept IOError as e:\n    ...",
            "means": "handle the failure where it matters, not at the call",
            "consequence": "The module system was borrowed from Modula-3, and the exception model also resembled that of Modula-3, with the addition of an else clause. Both were taken deliberately from a language the author admired rather than invented, which is worth noticing: the design's distinguishing quality is what it declined to invent."
          }
        ]
      }
    ],
    "wall": "The first public release, version 0.9.0, came on 20 February 1991, published to a newsgroup in 21 uuencoded messages because that was the size limit — and the properties that made it pleasant are the ones that cost. Everything is looked up at run time, so the interpreter loop is slow; the object model is dynamic, so there is little a compiler can prove; and the ease of adding a module to a program becomes, at scale, the problem of saying which versions of which modules a program needs. The name, after the British comedy series, is the last piece of evidence for what it was optimising for: not gravity, and not the machine.",
    "leadsTo": "C.12",
    "leadsToReason": "A language that is pleasant on one machine still has to answer the question of what happens when the program must run on machines you do not control, written by teams you cannot talk to."
  },
  "C.12": {
    "id": "C.12",
    "name": "Java",
    "status": "traced",
    "seed": "C.12",
    "constraint": "It was chartered to anticipate the next wave in computing, and the target was digital consumer devices such as set-top boxes and televisions — machines you do not control, cannot update easily, and cannot assume anything about.",
    "inherited": {
      "from": "C.11",
      "wall": "A language that is pleasant on the machine in front of you still has to answer what happens when the program runs somewhere you have never seen."
    },
    "opening": "The design is usually explained by where it ended up rather than by where it started, and that gets it backwards. The project began in June 1991 at Sun Microsystems, aimed at consumer devices, and only in June and July 1994 was the work retargeted to the internet, on the judgement that with the arrival of the Mosaic browser the web was moving toward the interactive vision they had had for cable television. Every property people associate with the web — running somewhere unknown, refusing to touch memory directly, carrying its own safety net — was designed for a set-top box first.",
    "decisions": [
      {
        "decision": "Compile to an instruction set that no processor implements",
        "because": "Shipping to devices you do not control means you cannot ship a build per device. A fixed, simple instruction set with a runtime for each target moves the per-machine work from you to whoever makes the machine.",
        "syntax": [
          {
            "code": "javac Main.java  ->  Main.class",
            "means": "compile to bytecode, not to this processor",
            "consequence": "Programs are compiled to bytecode which can be executed on any device with a compatible runtime, the property summarised by the slogan write once, run anywhere. The compile step stays, so you keep the type checking; the target disappears, so you lose the ability to do anything the runtime does not offer — including the pointer arithmetic that the previous link in this chain treated as the whole point."
          }
        ]
      },
      {
        "decision": "Familiar syntax, deliberately",
        "because": "A new runtime model is already a large ask. Gosling gave it a syntax in the style of C and C++ so that working programmers would find it familiar, which spends the novelty budget on the one place it mattered.",
        "syntax": [
          {
            "code": "for (int i = 0; i < n; i++) { ... }",
            "means": "a loop that looks exactly like the loop they already knew",
            "consequence": "Nothing here is new, and that is the decision. The radical parts — a managed heap, no pointers, a verified instruction set — are invisible at the level of a line, so the argument a programmer had to accept was about the runtime rather than about everything at once."
          },
          {
            "code": "public class Main { public static void main(String[] a) { } }",
            "means": "everything lives inside a class, including the entry point",
            "consequence": "The unit of code and the unit of loading were made the same thing, so a program is a set of classes a runtime can fetch, verify and link one at a time. The ceremony people complain about is the loading model showing through the syntax."
          }
        ]
      },
      {
        "decision": "The runtime owns memory",
        "because": "On a device that must not crash, in a program shipped to someone you cannot reach, the class of bugs where memory is freed twice or not at all is not acceptable — and the cost of collecting it automatically is a pause, which a set-top box can afford.",
        "syntax": [
          {
            "code": "Account a = new Account();",
            "means": "allocate, and never say when to release",
            "consequence": "The reference is not an address you can do arithmetic on, which is what makes the collector possible and the language safe in the specific sense it claims: a program cannot read memory that is not its own. What you give up is the ability to decide when work happens, and every discussion of pause times since is the invoice for this line."
          }
        ]
      }
    ],
    "wall": "Announced with the browser at SunWorld on 23 May 1995 — where John Gage of Sun and Marc Andreessen of Netscape announced on stage, as a surprise, that the technology would be incorporated into Netscape Navigator — it won the server and lost the client. What it costs is visible in every file: the ceremony of classes and declarations, a runtime that must start before anything happens, and a verbosity that comes from making every structural fact explicit. It was also named twice: first Oak, after a tree outside Gosling's office, until a trademark search found the name already registered by a video adaptor card manufacturer.",
    "leadsTo": "C.13",
    "leadsToReason": "Inside the page itself, a runtime that takes a second to start and a compile step before anything runs are both impossible, and what is needed is something that can respond to a click."
  },
  "C.13": {
    "id": "C.13",
    "name": "JavaScript",
    "status": "traced",
    "seed": "C.13",
    "constraint": "It had to be prototyped in about ten days, for client-side interactivity inside a browser, and be approachable enough that people writing pages rather than programs would use it.",
    "inherited": {
      "from": "C.12",
      "wall": "A runtime that must start before anything happens and a compile step before anything runs are both impossible inside a page that has to respond to a click."
    },
    "opening": "Eich, recently hired by Netscape Communications, was tasked in May 1995 with producing a scripting language for client-side interactivity, and prototyped it in about ten days. Ten days is the single most useful fact about the design: it explains what was borrowed rather than invented, why the borrowings sit oddly together, and why the parts that were never finished were shipped anyway and then could not be changed.",
    "decisions": [
      {
        "decision": "Borrow the good parts from three different languages",
        "because": "There was no time to invent a model. The design drew on Scheme for its functional elements, Self for prototype-based inheritance, and the syntax of Java for familiarity.",
        "syntax": [
          {
            "code": "function make(n) { return function () { return n++; }; }",
            "means": "a function that returns a function which remembers n",
            "consequence": "Functions as values, carrying the variables they closed over, arrived from the functional side and are the best thing in the language. They were also invisible to most of its users for a decade, because the surface looked like the curly-brace language the syntax was borrowed from, and nobody expects that language to do this."
          },
          {
            "code": "const child = Object.create(parent);",
            "means": "an object whose lookups fall through to another object",
            "consequence": "Inheritance is between objects rather than between classes, taken from the prototype-based side. It is simpler than a class system and unfamiliar to everyone arriving from one, so the language spent twenty years growing syntax that makes it look like the thing it deliberately is not."
          }
        ]
      },
      {
        "decision": "Never stop on an error the page can survive",
        "because": "The audience was authors of pages, and the alternative to a forgiving language was a blank screen in front of a visitor. A page that renders imperfectly is better than a page that renders not at all.",
        "syntax": [
          {
            "code": "\"5\" - 2   //  3\n\"5\" + 2   //  \"52\"",
            "means": "the operator decides how to reconcile the types",
            "consequence": "Coercion means almost nothing is an error, which is exactly what a forgiving environment requires and exactly what makes a large program hard to reason about. The rule is consistent and the results are surprising, which is the worst combination for learning: you cannot dismiss it as random, and you cannot predict it without knowing the table."
          }
        ]
      },
      {
        "decision": "The name was a marketing decision, and the confusion was the point",
        "because": "It was chosen to ride on the contemporaneous success of the other language, whose vendor had just agreed a licensing deal with the browser maker.",
        "syntax": [
          {
            "code": "(Mocha, then LiveScript, then the name it kept)",
            "means": "three names in seven months",
            "consequence": "The prototype was codenamed Mocha, renamed in September 1995 for the beta of the second version of the browser, and renamed again that December after the licensing deal. Despite the eventual name the two languages differ fundamentally — one compiled, class-based and statically typed, the other interpreted, prototype-based and dynamic — and the resulting confusion has persisted ever since. A name is an interface too, and this is the most expensive one in the chain."
          }
        ]
      }
    ],
    "wall": "Ten days buys you a working language and no time to finish it: no module system, no integers, an object model borrowed from a family nobody in the audience knew, and coercion rules that cannot be changed because pages depend on them. Eich also wrote the first engine to execute it in the browser, and when Mozilla inherited the Netscape codebase in 1998 that engine came with it; the language was taken to Ecma in 1996 and 1997 to produce a standard specification. Standardising it froze the mistakes as well as the good parts, which is the price of a language whose runtime is installed on every machine on earth.",
    "leadsTo": "C.19",
    "leadsToReason": "A language with no types and no modules is survivable for a script in a page and not for an application of a hundred thousand lines written by forty people."
  },
  "C.14": {
    "id": "C.14",
    "name": "PHP",
    "status": "traced",
    "seed": "C.14",
    "constraint": "It started as a set of small, tightly written binaries a person used to run their own home page, on shared hosting that cost almost nothing and gave the author no control over the server.",
    "inherited": {
      "from": "C.13",
      "wall": "Script inside the page handles what happens after the page arrives, and says nothing about how the page was produced or how it reaches the database."
    },
    "opening": "The thing to understand is that the model is inverted from every other language in this chain, and that inversion is the whole product. Everywhere else a program runs and may emit a document. Here a file is a document which may contain code: the page is served as written except where an escape into code occurs. Read the language that way and its reputation makes sense as a consequence rather than as a verdict.",
    "decisions": [
      {
        "decision": "The file is a page, and code is an escape inside it",
        "because": "The author already has a page. What they want is for three lines of it to change, and every alternative asks them to turn the page into a program first.",
        "syntax": [
          {
            "code": "<p>Hello, <?php echo $name; ?></p>",
            "means": "the paragraph is output as written; the escape is evaluated",
            "consequence": "There is no main, no entry point and no template to register, so the distance from a page you have to a page that changes is one tag. That is the most effective on-ramp any language in this chain has had, and it is the same property that puts logic, markup and queries in one file by default."
          }
        ]
      },
      {
        "decision": "The request is the lifetime",
        "because": "On shared hosting, a process per request is what the environment gives you. If everything is torn down afterwards, the author never has to think about state left behind by the last visitor.",
        "syntax": [
          {
            "code": "$_GET['id']",
            "means": "what this request carried, available immediately",
            "consequence": "The request's data is in the language as a variable rather than behind a framework object, and anything you allocate stops mattering when the request ends. A whole class of leaks and cross-request contamination cannot happen, and a whole class of long-running work becomes awkward — which is the trade the environment forced rather than one the language chose."
          }
        ]
      },
      {
        "decision": "Grow by accretion, from what people actually asked for",
        "because": "What was released on 8 June 1995 was a utility library and templating mechanism rather than a scripting language, and it became a language by being extended wherever users hit a wall.",
        "syntax": [
          {
            "code": "strlen($s);  str_replace($a, $b, $s);",
            "means": "functions named however they were named on the day",
            "consequence": "A complete rewrite followed in October 1995 and the second generation arrived in April 1996, but the standard library kept its origins: argument orders and naming conventions differ between functions because they arrived at different times from different people. The inconsistency is the fossil record of a library that was never designed in one sitting, and it is the most cited complaint about the language."
          }
        ]
      }
    ],
    "wall": "The on-ramp is the wall. A model where the page is the program and the request is the lifetime makes the first change trivial and offers no structure for the hundredth, and a language that puts input in a variable and output in the same file makes the insecure version the shortest version. The name records the same trajectory: originally an abbreviation of Personal Home Page, later redefined as a recursive abbreviation for Hypertext Preprocessor, which is a language growing out of its own origins and keeping the letters.",
    "leadsTo": "C.15",
    "leadsToReason": "If the first change should be trivial and the hundredth should be survivable, the structure has to come from somewhere other than the file — from conventions the framework already knows."
  },
  "C.15": {
    "id": "C.15",
    "name": "Ruby, then Rails",
    "status": "traced",
    "seed": "C.15",
    "constraint": "The language was designed for the pleasure of the person writing it, which is a real design criterion and an unusual one — and the framework was extracted from an application that already worked, so every convention in it had already earned its place.",
    "inherited": {
      "from": "C.14",
      "wall": "A model where the page is the program gives you no structure at all past the first few files, and the ceremony offered as the alternative drained the appetite of the people who had to type it."
    },
    "opening": "This entry is two things, and the join between them is the interesting part. The language was named on 24 February 1993 in a chat between Matsumoto and Ishitsuka, before any code existed, with Coral and Ruby the two proposals. The framework came a decade later, extracted by Hansson from his work on a project management application, created for the company's internal use first and open-sourced in July 2004. A language optimised for the writer, plus a framework that had already been proved by an application, is why the pair landed so hard.",
    "decisions": [
      {
        "decision": "Optimise for the person writing it, and say so",
        "because": "The stated goal is the programmer's enjoyment, which sounds soft until you notice it is the opposite of the choice the first compiler in this chain made — its designers deliberately treated the translator rather than the language as the real challenge, optimising for the machine rather than for the person.",
        "syntax": [
          {
            "code": "3.times { puts \"hi\" }",
            "means": "ask the number to do something three times",
            "consequence": "Everything is an object including the number, and a block of code can be handed to a method as an argument, so control structures read as ordinary calls. The cost is an object model and a dispatch on every operation, which is where the throughput goes."
          },
          {
            "code": "unless user.admin?\n  deny\nend",
            "means": "a negative condition, written as one",
            "consequence": "Method names may end in a question mark, and the language provides the inverse of a construct when the inverse reads better. Both are pure ergonomics with no new power, which is precisely the point: the design treats the sentence the programmer reads as a thing worth spending grammar on."
          }
        ]
      },
      {
        "decision": "Defaults derived from names and locations, rather than declarations",
        "because": "The framework is built on convention over configuration: defaults derived from names and locations stand in for declarations the developer would otherwise have to write.",
        "syntax": [
          {
            "code": "class Order < ApplicationRecord; end",
            "means": "a class with no configuration, mapped to the orders table",
            "consequence": "The table name, the primary key and the file's location are inferred, so the declaration file that other stacks require does not exist. What you gain is that a new reader who knows the conventions can find anything; what you pay is that a reader who does not cannot see where the behaviour comes from, because the configuration is absent rather than elsewhere."
          }
        ]
      },
      {
        "decision": "Extract the framework from a working application, rather than designing it first",
        "because": "A convention is only worth imposing if it has already survived contact with a real product. Extracting it means every default was chosen by somebody who had already paid for the alternative.",
        "syntax": [
          {
            "code": "app/models  app/views  app/controllers",
            "means": "a layout that is not negotiable, and does not need to be",
            "consequence": "It reached version 1.0 in December 2005, having been open-sourced the year before, and the directory layout became an industry default for a decade. This is the strongest argument in the chain for extraction over design: the conventions were not predictions about what applications need, they were observations of what one working application had needed."
          }
        ]
      }
    ],
    "wall": "The first public release of the language, version 0.95, was announced on Japanese domestic newsgroups on 21 December 1995, with version 1.0 following on 25 December 1996 — and the properties that make it a pleasure are the ones that limit it. Dispatch on every operation and an object for every value cost throughput, and the model of a process per request scales by adding processes rather than by doing more inside one. Convention makes an unfamiliar codebase navigable and makes the framework's behaviour hard to locate, because there is nothing to read where the decision was made.",
    "leadsTo": "C.16",
    "leadsToReason": "Adding processes to get concurrency is a limit you eventually hit, and the systems that never hit it were designed from the start around many small independent units that communicate rather than share."
  },
  "C.16": {
    "id": "C.16",
    "name": "Erlang, then Elixir",
    "status": "traced",
    "seed": "C.16",
    "constraint": "A telephone switch is not permitted to stop. Not for a crash, not for a bug in one call, and not to install a new version — so the language had to be designed for writing concurrent programs that run indefinitely.",
    "inherited": {
      "from": "C.15",
      "wall": "Getting concurrency by adding processes is a limit you eventually reach, and a crash anywhere in a shared-memory program is a crash everywhere in it."
    },
    "opening": "Armstrong describes the language as designed for writing concurrent programs that run indefinitely, structured around lightweight concurrent processes that belong to the language rather than the operating system, with no shared memory and asynchronous message passing, plus mechanisms for changing code in a running system. Read that sentence as a specification and the syntax is a series of deductions from it — which is why this is the least fashion-driven design in the chain and the one that has changed least.",
    "decisions": [
      {
        "decision": "Processes belong to the language, and there is no shared memory",
        "because": "If a unit of work is owned by the operating system, you can afford thousands and not millions. And if two units can touch the same memory, a fault in one can corrupt the other, which means isolation has to be a property of the language rather than a discipline.",
        "syntax": [
          {
            "code": "Pid = spawn(fun worker/0),\nPid ! {job, Data}",
            "means": "start a process, then send it a message",
            "consequence": "Creating one is a language operation, so a call can have its own process the way another language would give it its own stack frame. Nothing is shared, so the message is a copy — which costs a copy and removes every lock, every race on shared state, and every question about who owns what."
          }
        ]
      },
      {
        "decision": "Let a process crash, and let another process be responsible for it",
        "because": "In a program that must run indefinitely, the failure you have not thought of is guaranteed. Trying to handle every fault where it happens means writing code for cases you cannot enumerate, so the design moves the responsibility somewhere it can be enumerated.",
        "syntax": [
          {
            "code": "handle_call(Msg, _From, State) ->\n    {reply, work(Msg), State}.",
            "means": "handle the expected case, and nothing else",
            "consequence": "A process is written for the case it understands and dies otherwise, and a supervisor whose only job is restarting decides what happens next. The code that handles failure is separate from the code that does work, and both are simpler — which is the single most transferable idea on this page, and it is architectural rather than syntactic."
          }
        ]
      },
      {
        "decision": "Replace code in a running system",
        "because": "A switch cannot be stopped to be updated, and an upgrade that requires downtime is an outage you scheduled rather than one you avoided.",
        "syntax": [
          {
            "code": "handle_info(upgrade, State) -> ?MODULE:loop(State).",
            "means": "continue in the new version of this module",
            "consequence": "Calling a function through its module name takes the current version, so a running process can step from old code into new code between messages. This is why the design insists on isolated processes with explicit state: a unit whose entire state is one value it passes to itself can be moved to a new version at a defined moment, and a unit with shared mutable state cannot."
          }
        ]
      },
      {
        "decision": "A second language on the same machine, for the people rather than the model",
        "because": "The model was right and the surface put people off. Elixir was designed by José Valim and first appeared on 25 May 2012, running on the same virtual machine, with the stated aim of increasing its extensibility and productivity while keeping compatibility with its existing tooling and ecosystem.",
        "syntax": [
          {
            "code": "def handle_call(msg, _from, state) do\n  {:reply, work(msg), state}\nend",
            "means": "the same thing, in a surface borrowed from elsewhere",
            "consequence": "Influenced by Clojure, Erlang and Ruby, it changes the syntax and the tooling and keeps the process model exactly. It is the clearest case in this chain of a language whose contribution is ergonomic rather than semantic — and the strongest evidence that adoption is often a surface problem rather than a model problem."
          }
        ]
      }
    ],
    "wall": "The model is excellent and the market is not persuaded by models. In March 1998 Ericsson announced a switch containing over a million lines of the language, reported to achieve an availability of nine nines alongside a four-fold increase in development productivity — and in February 1998, before that announcement, Ericsson Radio Systems banned in-house use of it for new products, citing a preference for non-proprietary languages. In December 1998 the implementation was open-sourced and most of the team resigned to form Bluetail. A demonstrated result did not beat a procurement preference, which is a lesson about engineering organisations rather than about languages.",
    "leadsTo": "C.17",
    "leadsToReason": "Most organisations are not building a switch. They are building line-of-business software on one vendor's platform, and what they want is the safety of a managed runtime with tooling that fits the machines they already own."
  },
  "C.17": {
    "id": "C.17",
    "name": "C#",
    "status": "traced",
    "seed": "C.17",
    "constraint": "It had to give a large organisation the safety and productivity of a managed runtime on the platform it had already bought, without depending on a language another vendor owned.",
    "inherited": {
      "from": "C.16",
      "wall": "A process model built for a switch that must never stop asks an ordinary organisation to adopt an unfamiliar paradigm to solve a problem it does not have."
    },
    "opening": "In January 1999 Hejlsberg formed a team to build a new language, at the time called COOL, standing for C-like Object Oriented Language; the name was not kept for trademark reasons and a naming committee was convened that wanted a reference to the C heritage. The principal designers were Hejlsberg, Scott Wiltamuth and Peter Golde, and the first widely distributed implementation was released in July 2000. Read the design as a second attempt at a managed language by people who had watched the first one closely.",
    "decisions": [
      {
        "decision": "Put the language definition in a document nobody owns",
        "because": "The objection to the managed language that came before was that it belonged to a vendor. A specification held by a standards body removes that objection in the only way it can be removed, which is by giving it away.",
        "syntax": [
          {
            "code": "(a standard, not a product)",
            "means": "the definition is a document, not an implementation",
            "consequence": "A technical committee task group was formed in September 2000, development of the standard began that November, and it was adopted by the General Assembly, based on a submission from Hewlett-Packard, Intel and Microsoft, and later approved by the international bodies in 2003. The precedent is COBOL, whose specifying committees were set up at a Pentagon meeting in May 1959 and whose specification was approved in January 1960 so that the document rather than any vendor's compiler was the authority. The same move, forty years apart, for the same reason."
          }
        ]
      },
      {
        "decision": "Say explicitly what the previous language left implicit",
        "because": "Watching a design in the field for five years tells you which of its defaults were wrong, and the cheapest corrections are the ones that make a decision visible in the source rather than inferred from a rule.",
        "syntax": [
          {
            "code": "public override void Draw() { }",
            "means": "this replaces a method from the base class, and says so",
            "consequence": "Overriding requires both that the base permits it and that the derived method declares it, so a method that silently replaces another is not expressible. It is a small feature and a good example of the design's habit: prefer a keyword that makes an intention checkable over a rule a reader has to know."
          },
          {
            "code": "int? id = null;",
            "means": "a value type that is allowed to be absent",
            "consequence": "Absence is a property of the type rather than a value any reference may secretly hold, so the compiler can ask whether you handled it. This is the same move again — take something the previous language left to a run-time check and move it into the type where a tool can see it."
          }
        ]
      },
      {
        "decision": "The language and its tooling are designed together",
        "because": "The team's advantage was not the runtime; it was that the same organisation shipped the compiler, the editor and the platform, and could make features that only pay off when an editor understands them.",
        "syntax": [
          {
            "code": "var query = items.Where(i => i.Active).Select(i => i.Name);",
            "means": "a query written in the language, checked by the compiler",
            "consequence": "Queries as expressions with inferred types are pleasant to write and nearly unusable without completion and inline types, which is the point: a feature can assume a tool. The trade is that the language's ergonomics degrade outside the environment it was designed with, and for its first decade both were tied to one platform."
          }
        ]
      }
    ],
    "wall": "It got what it aimed at, and inherited the shape of the thing it was aimed at. The enterprise codebases look like the enterprise codebases of the language it replaced — layers, ceremony, and configuration — because the organisations are the same organisations. And for years the answer to whether it ran anywhere else was a qualified one, so a language explicitly standardised to avoid belonging to a vendor was in practice chosen by people who had already chosen that vendor.",
    "leadsTo": "C.18",
    "leadsToReason": "None of this helps when the problem is that the program is twenty million lines, the build takes an hour, and a thousand people are editing it at once."
  },
  "C.18": {
    "id": "C.18",
    "name": "Go",
    "status": "traced",
    "seed": "C.18",
    "constraint": "The problem was not expressiveness. Pike describes server programs grown to tens of millions of lines, worked on by hundreds or thousands of programmers, updated daily, in one source tree with a distributed build system — where build times, even on large compilation clusters, had stretched to many minutes, even hours.",
    "inherited": {
      "from": "C.17",
      "wall": "A rich managed language with excellent tooling still compiles slowly, still lets a team express the same idea in six ways, and still needs a runtime installed where it lands."
    },
    "opening": "Pike frames the work as being designed by and for people who write, read, debug and maintain large software systems, and says its purpose is improving the working environment rather than programming-language research — that it is more about software engineering than programming language research. Almost everything people criticise about the language is a feature that was refused on those grounds, so the useful question for each one is not whether it would be nice but what it would cost a thousand people and a build cluster.",
    "decisions": [
      {
        "decision": "Compile fast, by refusing anything that makes compiling slow",
        "because": "A build measured in hours changes how people work: they batch changes, they stop running tests, and the feedback loop that keeps a large codebase correct goes away. Speed here is not comfort, it is whether the process survives.",
        "syntax": [
          {
            "code": "import \"fmt\"   // unused -> compile error",
            "means": "an unused import is not a warning",
            "consequence": "Dependencies are explicit, minimal and enforced, because the cost of resolving a dependency graph is what the build spends its time on. A rule that seems petty at the scale of one file is the difference between minutes and hours at the scale of the tree — which is the general form of every decision on this page."
          }
        ]
      },
      {
        "decision": "One way to write it, and a tool that decides formatting",
        "because": "Across thousands of programmers, variation in style is a real cost: reviews argue about layout, diffs contain changes nobody made, and reading unfamiliar code takes longer.",
        "syntax": [
          {
            "code": "if err != nil {\n    return err\n}",
            "means": "the error is a value, checked where it happens",
            "consequence": "Failure is returned rather than thrown, so the path a program takes when something goes wrong is visible in the text rather than inferred from what might be caught above. It is repetitive on purpose — the repetition is what makes every early return greppable — and it is the most criticised feature in the language by people optimising for how much they type."
          }
        ]
      },
      {
        "decision": "Concurrency in the language, with communication rather than sharing",
        "because": "The programs are servers holding many connections at once, and the failure mode of threads plus locks at that scale is not slowness, it is a class of bug that cannot be reproduced.",
        "syntax": [
          {
            "code": "go handle(conn)\nresults <- value",
            "means": "start a concurrent unit; pass a value to another one",
            "consequence": "A concurrent unit is a keyword and a channel is a type, so the cheap thing to do is the thing the designers wanted done. This is the same argument made by the switch language two links back, arriving in a curly-brace syntax with a garbage collector, which is what made it acceptable to people who would not have adopted the original."
          }
        ]
      }
    ],
    "wall": "The stated goals were to eliminate slowness, eliminate clumsiness, improve effectiveness, and maintain or improve scale; it first appeared on 10 November 2009 and stabilised at version 1 in early 2012. The cost of those goals is the language people complain about: repetitive error handling, an austere feature set, and for more than a decade no generics — the last being a case where the affordability argument was made and then, eventually, lost. The argument it is making about barriers is an old one: the time-sharing system built at Dartmouth, demonstrated on 1 May 1964, removed a barrier that was the hours-long turnaround of a single attempt rather than any difficulty in the language, and this is the same claim about a build cluster.",
    "leadsTo": "C.20",
    "leadsToReason": "A garbage collector is still a pause you did not schedule, and there remain programs — a kernel, a browser engine, a device — that cannot accept one and still need memory safety."
  },
  "C.19": {
    "id": "C.19",
    "name": "TypeScript",
    "status": "traced",
    "seed": "C.19",
    "constraint": "It could not replace the language it was fixing. That language was prototyped in about ten days in May 1995 at Netscape and shipped into a client shared by everyone, which is why it could not subsequently be replaced or corrected — so the only available move was to add something on top that the existing thing would still run.",
    "inherited": {
      "from": "C.13",
      "wall": "No types and no modules is survivable for a script in a page and not for an application of a hundred thousand lines written by forty people who cannot all hold it in their heads."
    },
    "opening": "Every decision here is shaped by a constraint no other language in this chain had: the thing it improves cannot be changed, cannot be replaced, and has to keep running everything already written. Announced on 1 October 2012 as version 0.8, with the source released as open source the same day after roughly two years of internal development under the codename Strada, it is an exercise in what you can add when subtraction is not available.",
    "decisions": [
      {
        "decision": "Be a superset, so existing files are already valid",
        "because": "Nobody converts a large codebase in one step. If adoption requires a rewrite, there is no adoption; if any existing file is already a valid file, adoption can be one file at a time and can stop whenever it stops paying.",
        "syntax": [
          {
            "code": "function add(a: number, b: number): number { return a + b; }",
            "means": "the same function, with annotations the base language ignores",
            "consequence": "Rather than replacing the existing language it is a superset of it, which lets a codebase be converted file by file; version 1.0 shipped in 2014. The incremental path is the entire adoption strategy, and it is why this succeeded where cleaner replacements for the same language did not."
          }
        ]
      },
      {
        "decision": "Judge types by shape rather than by name",
        "because": "The code being described was written without types and full of object literals passed around directly. A system that required every value to belong to a declared class would fail to describe the programs it exists to describe.",
        "syntax": [
          {
            "code": "function show(p: { name: string }) { }\nshow({ name: \"a\", extra: 1 });",
            "means": "anything with that shape fits, whatever it is called",
            "consequence": "Its typing discipline is gradual and structural: convertibility depends on the parts of the type rather than on a declared name, so a value fits when its shape matches. This is what lets types be added to code that already exists, and it is why the annotations read as descriptions of what the program already does rather than as demands it be rewritten."
          }
        ]
      },
      {
        "decision": "Erase everything before it runs",
        "because": "The output has to be ordinary code the existing runtime accepts, so nothing in the type system can survive into execution. That forces every check to be a compile-time check, which is also what keeps the output fast.",
        "syntax": [
          {
            "code": "const u = JSON.parse(text) as User;",
            "means": "assert a shape the compiler cannot verify",
            "consequence": "At the boundary — a response, a file, a message — the types are a claim about data that has not been checked, and the assertion is where a wrong claim enters silently. The feature extends the base language with optional static type checking, classes, interfaces and modules, and none of it is present when the program runs, which is the price of being a superset that erases."
          }
        ]
      }
    ],
    "wall": "It buys an editor that knows every shape and a class of error caught before shipping, and it costs a build step in a language whose defining quality was not having one, plus a type system that describes the program and cannot enforce anything at the boundary where data actually arrives. Hejlsberg is among the designers, which makes this the second appearance in this chain of the same approach: take what a dynamic language leaves to a run-time surprise and move it into a place where a tool can see it.",
    "leadsTo": "C.20",
    "leadsToReason": "Checking shapes before shipping is worth a great deal, and it still cannot say anything about memory, lifetimes, or two things touching the same data at once."
  },
  "C.2": {
    "id": "C.2",
    "name": "FORTRAN",
    "status": "traced",
    "seed": "C.2",
    "constraint": "The translator had to produce object code that a hand coder could not beat, because customers' foremost objection to a compiler was that it probably could not turn out object code as good as their best programmers could.",
    "inherited": {
      "from": "C.1",
      "wall": "A program written in a machine's own notation belongs to that machine. Every formula had to be hand-coded as instructions, again, for each new architecture."
    },
    "opening": "Read this as a compiler with a language attached, rather than a language with a compiler. Backus wrote that if the system were to translate any reasonable scientific source program into an object program only half as fast as its hand coded counterpart, acceptance would be in serious danger — and that this belief caused them to regard the design of the translator as the real challenge, not the simple task of designing the language. Almost every choice below is what happens when the notation is the easy half.",
    "decisions": [
      {
        "decision": "The notation is the formula",
        "because": "The people who would use it already had the formula written down. Anything that made them rewrite it in another form was reintroducing the work the system existed to remove.",
        "syntax": [
          {
            "code": "X = (A + B) / C",
            "means": "compute the expression, then store it",
            "consequence": "An arithmetic expression, taken entirely for granted now, was the product. The machine has no notion of precedence or of nested terms; all of that is the translator's work, done once, so that the physicist does not do it by hand for every statement."
          },
          {
            "code": "DO 10 I = 1, 100",
            "means": "run everything down to the line labelled 10, counting I upwards",
            "consequence": "The loop is a counted loop because the formulas were over arrays, and the end of the loop is a statement number rather than a bracket because the card already carried a statement number. The control structure is shaped by the medium it was punched on."
          }
        ]
      },
      {
        "decision": "The card is the line, and position on the card carries meaning",
        "because": "The input device is a punched card and the reader transfers a fixed set of columns. If position is going to be fixed anyway, it may as well be load-bearing.",
        "syntax": [
          {
            "code": "      X = (A + B) / C",
            "means": "six spaces, then the statement",
            "consequence": "The manual of October 1956 gives the fixed form: a statement number occupies the first five columns, a character other than zero in the sixth column marks the card as a continuation of the one before it, the statement occupies columns seven to seventy-two, and the rest are ignored by the compiler. The leading indentation every later language treats as style was originally the shape of the card."
          },
          {
            "code": "     1   + D * E",
            "means": "this card continues the previous statement",
            "consequence": "Continuation exists because a statement can be longer than a card, and the mark for it is a column rather than a symbol at the end of the line, because the card has no end you can see. The last columns, ignored by the compiler, were used to number the cards so that a dropped deck could be put back in order — a fact about the floor of a machine room, preserved in the syntax."
          }
        ]
      },
      {
        "decision": "The translator makes the choices",
        "because": "Object code as good as a hand coder's cannot be produced by direct substitution, so the system has to rearrange what you wrote — and once it is allowed to rearrange anything, it is deciding what runs.",
        "syntax": [
          {
            "code": "DO 10 I = 1, 100\n   A(I) = B(I) * K",
            "means": "written as a loop over an array",
            "consequence": "What executes may keep values in registers across iterations, compute addresses incrementally, and look nothing like the statements above. This is the moment the executed program stops being the written program, and it is the origin of every later argument about optimisation, about debugging what the compiler produced, and about trusting a tool you cannot inspect."
          }
        ]
      }
    ],
    "wall": "What was planned as roughly a six-month effort took about three years, and the result was superb at exactly one thing. The notation is arithmetic over numbers and arrays; it has nothing to say about records, about text, or about the shape of a business document. Backus's own retrospective judgement, given at the 1978 History of Programming Languages conference, was that prioritising object program efficiency over language design had been correct — which is worth holding onto, because the resulting language is the one everybody criticises and the priority is the one that made it succeed.",
    "leadsTo": "C.3",
    "leadsToReason": "The largest buyers were not computing formulas. They were processing records, and they needed a program a non-programmer could read and a machine from another manufacturer could run."
  },
  "C.20": {
    "id": "C.20",
    "name": "Rust",
    "status": "traced",
    "seed": "C.20",
    "constraint": "Memory safety had to come without a collector. The announcement states that it achieves its goals “without requiring a garbage collector or runtime”, which is what allows its libraries to serve as a drop-in substitute for C — so every guarantee has to be proved before the program runs, because there is nothing underneath it at run time to check anything.",
    "inherited": {
      "from": "C.18",
      "wall": "A collector removes a class of bug and adds a pause you did not schedule, which rules the language out of a kernel, a browser engine, or anything with a deadline it must meet."
    },
    "opening": "Two things people usually want from a language are in tension, and this is the design that refuses to choose. The announcement describes it as combining low-level control over performance with high-level convenience and safety guarantees, and attributes the distinctiveness to its type system — described as a refinement and codification of best practices drawn from experience with C and C++. That phrase is the most useful summary available: the rules are not new discoveries, they are the disciplines careful programmers in those languages already followed, moved out of their heads and into something that checks.",
    "decisions": [
      {
        "decision": "Every value has exactly one owner, and the owner decides when it is released",
        "because": "If release happens when an owner goes out of scope, the compiler already knows where every release goes. No collector is needed, and no manual pairing can be forgotten, because there is nothing to pair.",
        "syntax": [
          {
            "code": "let s = String::from(\"x\");\nlet t = s;  // s is no longer usable",
            "means": "assignment moved ownership rather than copying",
            "consequence": "The rule that a value has one owner makes double release impossible to express, and turns use-after-release into a compile error rather than a crash later in an unrelated part of the program. What it costs is that assignment no longer means what it means everywhere else, which is the single largest thing a newcomer has to unlearn."
          }
        ]
      },
      {
        "decision": "You may have many readers or one writer, never both",
        "because": "Nearly every memory error and nearly every data race is the same shape: something is being read while something else changes it. Forbidding that one combination removes both classes at once, and it can be checked statically.",
        "syntax": [
          {
            "code": "let a = &v;      // shared, many allowed\nlet b = &mut v;  // exclusive, rejected while a lives",
            "means": "borrow the value without taking ownership, under a rule",
            "consequence": "The same rule that makes a dangling reference impossible also makes a data race impossible, which is why concurrency in this language is safe without a runtime doing anything. One constraint, two guarantees — and the reason the compiler rejects programs that would have worked: it is proving a property, and a proof has to refuse the cases it cannot verify."
          }
        ]
      },
      {
        "decision": "Failure is a value in the type, so ignoring it is not silent",
        "because": "A guarantee enforced before the program runs is only as good as its coverage, and the most common escape from a static guarantee is a result nobody looked at.",
        "syntax": [
          {
            "code": "let data = fs::read(path)?;",
            "means": "unwrap the success, or return the failure to the caller",
            "consequence": "The type of the call includes the possibility of failure, so handling it is a step the compiler can require rather than a habit a reviewer has to check. The notation is short on purpose: a guarantee that is tedious to satisfy gets bypassed, so the language spends syntax on making the safe path the brief one."
          }
        ]
      }
    ],
    "wall": "The bill for a proof is that you have to write a provable program. Ownership and borrowing must be expressed in the code even when they are obvious to you, the compiler refuses working programs it cannot verify, and the learning curve is steep in a specific way — it is not new concepts so much as being asked to state, precisely, things you previously kept in your head. Version 1.0 was announced on 15 May 2015 by the Rust Core Team, sponsored by Mozilla, and marked a stability commitment: the preceding churn ended, breaking changes largely out of scope, and a six-week release train. The announcement's own framing of the benefit is worth keeping: newcomers can write low-level code without minor mistakes leading to mysterious crashes, and experienced developers save the time they were spending on the discipline by hand.",
    "leadsTo": "C.21",
    "leadsToReason": "Most programs are not kernels. They are applications on a platform someone else controls, where the language you may use is decided by the platform vendor and the problem is the decades of code already written in the last one."
  },
  "C.21": {
    "id": "C.21",
    "name": "Kotlin and Swift",
    "status": "traced",
    "seed": "C.21",
    "constraint": "Both had to replace an entrenched language on a platform they could not break: millions of existing applications, a vendor's own frameworks written in the old language, and no possibility of asking anyone to start again.",
    "inherited": {
      "from": "C.20",
      "wall": "Proving memory safety at compile time is the right trade for a kernel and an expensive one for an application whose actual risk is a null reference in a screen nobody tested."
    },
    "opening": "These two arrived from different companies for different platforms within three years of each other, and made nearly the same decisions — which is the useful thing about putting them on one page. Kotlin was unveiled in July 2011 and open-sourced in February 2012; Swift was created by Chris Lattner, beginning in 2010 while he was director of the developer tools department at Apple, first announced in June 2014. When two independent teams solve the same constraint the same way, the constraint is doing the designing.",
    "decisions": [
      {
        "decision": "Absence is part of the type, and the compiler insists you handle it",
        "because": "The dominant crash in application code is a reference that was allowed to be nothing and was not checked. It is not an exotic failure, it is the most common one, and it is entirely preventable by moving the fact into the type.",
        "syntax": [
          {
            "code": "var name: String?      // may be absent\nname?.length           // do nothing if it is",
            "means": "the possibility of absence is written down and must be dealt with",
            "consequence": "A type that cannot be absent removes the check, and a type that can be forces it, so the most frequent crash in application development becomes a compile error. Both languages chose this and both spell it with a question mark — independent arrivals at the same answer, because the same failure dominated both platforms."
          }
        ]
      },
      {
        "decision": "Interoperate completely with the old language, in both directions",
        "because": "The platform's own frameworks are written in the old language and cannot be rewritten, and no team will adopt a language that cuts them off from the code they already have.",
        "syntax": [
          {
            "code": "(old classes callable directly; new classes visible to old code)",
            "means": "one project, two languages, no bridge to write",
            "consequence": "Adoption becomes a file-level decision rather than a project-level one, which is the only way a platform language ever changes hands. It is the same strategy as adding types to a language that could not be replaced, arriving at the same conclusion from a different direction: migration has to be incremental or it does not happen."
          }
        ]
      },
      {
        "decision": "Take the vendor's blessing, because on a platform that is the feature",
        "because": "A language for an application platform lives or dies by whether the platform's owner supports it in the tools, the documentation and the hiring market. Technical merit is necessary and nowhere near sufficient.",
        "syntax": [
          {
            "code": "(the default template in the official tool)",
            "means": "what a new project starts as",
            "consequence": "Swift shipped in the toolchain from Xcode version 6 in September 2014, and the conference application became the first publicly released application written in it that June. Google announced first-class support for Kotlin on Android in 2017 and, on 7 May 2019, that it was its preferred language for Android developers. The version 1.0 release in February 2016, with its commitment to long-term backwards compatibility, is what made that blessing possible — a vendor cannot standardise on a language that is still changing underneath it."
          }
        ]
      }
    ],
    "wall": "A language whose adoption depends on a platform owner is a language whose future is a business decision, and neither of these is meaningfully portable off the platform it was built for. Both also carry the old language's model underneath: the frameworks, the idioms and the lifecycle are inherited, so the new syntax sits on semantics designed for something else. The name records how little of this is about the language itself — one is named after Kotlin Island, off Saint Petersburg, and neither name tells you anything about the design, because the design was set by the platform.",
    "leadsTo": "C.22",
    "leadsToReason": "Every application so far has been written in the imperative voice — do this, then this. The data most applications exist to move has a notation of its own, and it works the other way round."
  },
  "C.22": {
    "id": "C.22",
    "name": "SQL",
    "status": "traced",
    "seed": "C.22",
    "constraint": "It was intended as a database sublanguage for both the professional programmer and the more infrequent database user, which means a notation that a non-programmer can write and a machine can optimise — so it had to say what was wanted without saying how to get it.",
    "inherited": {
      "from": "C.21",
      "wall": "Every language so far describes a sequence of steps, which means the person writing it must know how the data is stored in order to get at it efficiently."
    },
    "opening": "This is the one language in the chain that is not in the chain: a parallel notation, still in daily use in almost exactly its original form, and the clearest example anywhere of the trade between saying what you want and saying how to do it. The relational model it implements was set out by Codd in 1970; Chamberlin and Boyce of the research laboratory in San Jose presented the language at a workshop in Ann Arbor in 1974, refining an earlier language the same authors had worked on called SQUARE, and built for a prototype intended to demonstrate the practicality of relational technology.",
    "decisions": [
      {
        "decision": "Describe the result, not the route to it",
        "because": "The user is often not a programmer, and the route depends on facts about storage that change — an index added, a table grown — which the person writing the query cannot be expected to track.",
        "syntax": [
          {
            "code": "SELECT name FROM customers WHERE balance > 100;",
            "means": "the rows I want, described by a property",
            "consequence": "Nothing here says which order to read rows in, whether to use an index, or how to join. Those decisions belong to the system, which is free to change them as the data changes. This is the same bargain the first compiler in this chain struck — it shipped to users in April 1957, and the executed program stopped being the written one — except that here the gap between what you wrote and what runs is permanent and re-decided on every execution."
          }
        ]
      },
      {
        "decision": "A set of simple operations on tables, rather than variables and quantifiers",
        "because": "The paper states that without resorting to the concepts of bound variables and quantifiers, the language identifies a set of simple operations on tabular structures which are shown to be of equivalent power to the first-order predicate calculus.",
        "syntax": [
          {
            "code": "SELECT c.name, SUM(o.total)\nFROM customers c JOIN orders o ON o.customer_id = c.id\nGROUP BY c.name;",
            "means": "combine two tables and summarise the result",
            "consequence": "The operations compose — the result of one is a table, which is the input to another — so a complicated question is built from simple parts without a single loop or variable. The power of the calculus, without the notation that kept it in the hands of people who had studied it: that equivalence is the entire justification for the design."
          }
        ]
      },
      {
        "decision": "Keyword templates in English",
        "because": "Users are presented with a consistent set of keyword English templates, which is what makes the language writable by the infrequent user the paper names as half its audience.",
        "syntax": [
          {
            "code": "SELECT ... FROM ... WHERE ... GROUP BY ... ORDER BY ...",
            "means": "fixed slots, filled in",
            "consequence": "A query is a template with the parts filled in rather than a program composed freely, so a beginner can produce a correct one by pattern rather than by understanding. That accessibility is why the notation escaped its database and became the way an entire industry talks about data — and why a great many people who use it every day have never learned what the system does with it."
          }
        ]
      }
    ],
    "wall": "Saying what rather than how is a wonderful bargain until the system chooses badly, and then you are debugging a decision you did not make, in a plan you did not write, with no way to state your intent directly — so tuning becomes the art of persuading an optimiser by rearranging a description. The declarative surface also hides an enormous amount: the same query can be instant or ruinous depending on facts nowhere in its text. The name is a small monument to how little of this was planned: it was changed because the original was a trademark registered by an aircraft company, and Boyce died of a brain aneurysm in 1974, shortly after the work, with Chamberlin continuing the development.",
    "leadsTo": "C.23",
    "leadsToReason": "A notation that hides how the work is done is exactly wrong when the machine's shape is the whole point, and the shape in question is thousands of small units doing the same arithmetic at once."
  },
  "C.23": {
    "id": "C.23",
    "name": "CUDA",
    "status": "traced",
    "seed": "C.23",
    "constraint": "The hardware is thousands of small units doing the same arithmetic on different data, with several distinct memories of very different speeds — and the notation had to expose that shape rather than hide it, because the shape is the entire reason to use the machine.",
    "inherited": {
      "from": "C.22",
      "wall": "A notation that hides how the work is done is exactly the wrong tool when the machine's shape is the point, and before this, using the hardware for general computation required expressing the problem in terms of the graphics pipeline — as textures, shaders and rendering passes — whether or not the problem had anything to do with graphics."
    },
    "opening": "Every other entry in this chain moves the programmer further from the machine. This one deliberately moves back, and it is worth being clear about why that is not a regression: the hardware's parallelism and its memory hierarchy are not implementation details that a compiler could choose better, they are the difference between a program that runs in a minute and one that runs in a day. The work began in 2004, when Ian Buck was hired and paired with John Nickolls, then director of architecture for computing on these devices, to develop a research language called Brook into a product.",
    "decisions": [
      {
        "decision": "You write the body for one unit of work, and say how many to run",
        "because": "The machine's model is the same instruction across many units on different data. A loop would describe a sequence, which is the opposite of what the hardware does, so the notation describes one element's work and the launch describes the extent.",
        "syntax": [
          {
            "code": "__global__ void add(float* a, float* b) { int i = threadIdx.x; a[i] += b[i]; }",
            "means": "what one unit does, identified by its own index",
            "consequence": "There is no loop, and the index comes from asking where you are. The programming guide presents a model in which the programmer writes functions executed by many threads in parallel, organised into blocks and grids. The mental shift is the whole difficulty of the model: you stop describing a sequence and start describing a single point in a space of work."
          }
        ]
      },
      {
        "decision": "The memory hierarchy is in the source, not behind it",
        "because": "The speed difference between the memories is large enough that placing data correctly is most of the performance. A compiler cannot make that choice without knowing the algorithm's access pattern, so the notation asks the programmer.",
        "syntax": [
          {
            "code": "__shared__ float tile[32][32];",
            "means": "this array lives in the fast memory shared by one block",
            "consequence": "The distinct memory spaces available to those threads — per-thread, per-block shared, and device-wide — are part of the programming model rather than a detail of the implementation. Writing a fast program means moving data into the near memory once and reusing it, which is the same decomposition a cache-aware algorithm uses, except here it is explicit and mandatory rather than hoped for."
          }
        ]
      },
      {
        "decision": "Extend an existing language rather than invent one",
        "because": "The audience already wrote in the systems language, and the only thing that needed to be new was the small set of concepts the hardware actually introduces.",
        "syntax": [
          {
            "code": "add<<<blocks, threads>>>(a, b);",
            "means": "launch the function across this much work",
            "consequence": "A handful of markers and one new call syntax carry the entire model, so the learning cost is the model rather than a language. The initial public release was in February 2007, with version 1.0 of the toolkit, including the compiler, following in mid-2007 and a programming guide dated 23 June 2007."
          }
        ]
      }
    ],
    "wall": "The cost is written into the first line of every file: the code is for one manufacturer's machines. That coupling is precisely the one an industry spent the previous fifty years removing — the committees that produced the first vendor-independent business language were set up at a Pentagon meeting in May 1959 to make a written specification rather than any vendor's product the authority — and here it is accepted again, knowingly, because the performance is worth it. The other cost is that debugging is genuinely hard: a failure that depends on which units happened to run together is not reproducible in the way a sequential bug is."
  },
  "C.24": {
    "id": "C.24",
    "name": "HTML and CSS",
    "status": "traced",
    "seed": "C.24",
    "constraint": "A document has to be readable by a person whose screen, fonts, window size and preferences are unknown to its author and cannot be discovered — so presentation has to be negotiated at the far end rather than decided at this one.",
    "inherited": {
      "from": "C.22",
      "wall": "A notation for querying records says nothing about how a document is structured, and the alternative on offer was a proprietary binary format that only one vendor's program could open."
    },
    "opening": "These two are usually taught as a pair of syntaxes and are better understood as a single argument about who decides what a page looks like. The first publicly available description of the markup was a document called HTML Tags, first mentioned on the internet by Berners-Lee in late 1991; apart from the hyperlink, its elements were strongly influenced by an in-house documentation format at CERN, and thirteen of those elements still exist. The style proposal came three years later, and its title states the design: Cascading HTML style sheets.",
    "decisions": [
      {
        "decision": "Mark what a thing is, not what it should look like",
        "because": "The author does not know the reader's screen, window, font size or ability to see it. A description of meaning can be rendered sensibly by any device; a description of appearance can only be rendered by the device it was written for.",
        "syntax": [
          {
            "code": "<h1>Title</h1>\n<p>Some text.</p>",
            "means": "a heading and a paragraph, with no appearance given",
            "consequence": "The same document can be a page, a printout, a phone screen or speech, because none of those decisions are in it. This is why the markup survived and the binary document formats it competed with did not: a format that describes meaning can be rendered by devices that did not exist when it was written."
          }
        ]
      },
      {
        "decision": "Presentation cascades, rather than being fixed",
        "because": "The proposal's defining property is in its name: sheets are designed to cascade, so that the user or browser specifies initial preferences and hands the remaining influence to the sheets referenced in the incoming document.",
        "syntax": [
          {
            "code": "h1 { font-size: 2em; color: navy; }",
            "means": "a preference about headings, not a command",
            "consequence": "Presentation is negotiated between author and reader rather than dictated by the author, which is why a reader can enlarge the text, override the colours, or read the page with something that has no colours at all. Every complaint about the difficulty of controlling a layout precisely is this decision working as designed."
          },
          {
            "code": "@media (max-width: 600px) { ... }",
            "means": "a different preference when the environment differs",
            "consequence": "The original proposal already described logic to make presentation decisions based on the user's environment, such as screen size. The idea that a document adapts to its reader is not a later addition responding to phones; it is in the founding document, seventeen years before it became fashionable."
          }
        ]
      },
      {
        "decision": "Separate the two languages, and let them evolve apart",
        "because": "By 1994 the markup had established itself as a universal document format, but it was clear that even with extensions it would not meet authors' demands for presentational capability — and meeting them inside the markup would have destroyed the property that made it universal.",
        "syntax": [
          {
            "code": "<link rel=\"stylesheet\" href=\"site.css\">",
            "means": "the appearance lives somewhere else entirely",
            "consequence": "Level 1 became a recommendation on 17 December 1996, authored by Wium Lie and Bert Bos, the work having begun in October 1994 at CERN and continued from July 1995 at INRIA where Bos joined. Keeping presentation out of the document is what let the visual layer be rewritten repeatedly without invalidating a single page ever written."
          }
        ]
      }
    ],
    "wall": "Negotiated presentation means the author cannot be certain what the reader sees, and two decades of effort went into pretending otherwise — pixel-exact layouts, browser-specific hacks, and a permanent argument between designers who want a page to look like a printed one and a medium that was designed not to. The declarative layout model has genuine edge cases nobody enjoys, and the whole system is judged against a standard it was never trying to meet: it is not a page description language, it is a request."
  },
  "C.25": {
    "id": "C.25",
    "name": "Bash and the shell",
    "status": "traced",
    "seed": "C.25",
    "constraint": "It is an interactive command interpreter first and a language second, so every design decision is a trade against typing speed at a terminal — and it has to join programs that were written separately, by people who never spoke, with no agreed data format between them.",
    "inherited": {
      "from": "C.24",
      "wall": "Marking up a document says nothing about running the programs that produce it, and passing data between two programs otherwise meant editing and recompiling at least one of them."
    },
    "opening": "The first shell was written by Ken Thompson and introduced with the first version of Unix in 1971, as a command interpreter rather than a scripting language. The idea that gives it its power came earlier and from someone else: in a typewritten memo of 1964 Douglas McIlroy wrote about coupling programs like garden hose, so that a programmer could screw in another segment when data needed massaging another way. He raised it repeatedly over about nine years before Thompson implemented it. Read the language as a notation for that memo.",
    "decisions": [
      {
        "decision": "The output of one program is the input of the next, and the connector is one character",
        "because": "If joining two programs is harder than writing a new one, people write a new one. The economics of reuse are decided entirely by how much effort the connection costs.",
        "syntax": [
          {
            "code": "grep error log | cut -d' ' -f3 | sort | uniq -c",
            "means": "four programs, joined into one job",
            "consequence": "Each program knows nothing about the others and the shell knows nothing about what they do. That is what makes a program written twenty years ago useful today in a pipeline nobody imagined — the interface is a stream of bytes, which is the weakest possible contract and therefore the most widely satisfiable one."
          },
          {
            "code": "sort results > top.txt",
            "means": "send the output to a file instead",
            "consequence": "The redirection syntax was notably compact by comparison with Multics, where redirecting input or output required separate commands to start and stop the redirection; here one appended a symbol and a filename to the command line. Terseness is the feature, because this is typed by hand hundreds of times a day."
          }
        ]
      },
      {
        "decision": "Everything is text, because text is what every program already produces",
        "because": "Any richer format would require every program to agree on it, and the programs already existed and had not agreed on anything.",
        "syntax": [
          {
            "code": "for f in *.log; do process \"$f\"; done",
            "means": "loop over names, quoting because names contain spaces",
            "consequence": "The universal format has no types, so a filename with a space in it is two words unless you say otherwise, and a number is a string until something decides it is not. The quoting rules that everybody finds arcane are the price of an interface so weak that everything can speak it."
          }
        ]
      },
      {
        "decision": "Make it a scripting language too, once the commands were worth keeping",
        "because": "A sequence typed twice should be a file, and a file that runs commands wants variables, conditions and loops — but they have to be added without disturbing the interactive use that comes first.",
        "syntax": [
          {
            "code": "if [ -f \"$path\" ]; then ...; fi",
            "means": "a test that is a program call, not a keyword",
            "consequence": "The test is a command and the brackets are its name, which is why the spaces matter and why the syntax looks unlike every other language. The Bourne shell, written by Stephen Bourne, was released in 1979 as the default shell of the seventh edition and, unlike its predecessor, was intended as a scripting language as well as an interactive interpreter; Bash was later written by Brian Fox for the GNU Project with support from the Free Software Foundation as a free replacement for it, coding beginning on 10 January 1988 and the beta released on 8 June 1989."
          }
        ]
      }
    ],
    "wall": "Everything being text means nothing is checked, and a script that works is one whose failures have not happened yet: a missing quote splits a filename, a failing command in the middle of a pipeline is invisible unless you ask, and an unset variable expands to nothing rather than to an error. It is the best glue ever made and a poor material to build in, and the line between the two is crossed silently, usually around the point where somebody adds a second condition. Even its own history resists precision — accounts of when the pipe was implemented conflict, with some placing the overnight work in the autumn of 1973, though a notice circulated on 15 January 1973 already described the pipe system call and it appears in the Version 3 manual of February 1973."
  },
  "C.26": {
    "id": "C.26",
    "name": "Regular expressions",
    "status": "traced",
    "seed": "C.26",
    "constraint": "It is a notation for a class of machine rather than a language for a person: what can be expressed is exactly what a finite automaton can recognise, and everything about its power and its limits follows from that equivalence.",
    "inherited": {
      "from": "C.25",
      "wall": "Text is the universal interface, and taking anything out of it meant writing a character-by-character state machine by hand for every new shape of input."
    },
    "opening": "This one is a notation with a theorem underneath it, and the theorem is why it is both so useful and so frequently misused. Kleene introduced the notion of regular events in a research memorandum of 1951, published in 1956; Thompson published a search algorithm in Communications of the ACM in June 1968 whose construction simulates a nondeterministic finite automaton in lockstep. The practical properties people argue about — speed, catastrophic slowness, what it cannot parse — are all consequences of which machine the notation describes.",
    "decisions": [
      {
        "decision": "The notation describes a set of strings, not a procedure for recognising them",
        "because": "A description can be compiled into different machines, checked for equivalence, and reasoned about. A hand-written procedure can only be run and debugged.",
        "syntax": [
          {
            "code": "^[a-z]+[0-9]*$",
            "means": "letters, then optional digits, and nothing else",
            "consequence": "One line replaces a loop with a state variable, and it is far easier to get right because there is no state to get wrong. The compression is what made it escape the theory papers and end up in every editor and every language's standard library."
          }
        ]
      },
      {
        "decision": "Implement it by tracking the set of states you could be in",
        "because": "If several paths through the pattern are possible, you can either try them one after another and reconsider when one fails, or advance all of them at once. The second costs more per character and removes the need to reconsider at all.",
        "syntax": [
          {
            "code": "(a|aa)*b   matched by advancing every possibility together",
            "means": "one pass, carrying a set of positions",
            "consequence": "Thompson's algorithm maintains state lists of length approximately n over a string of length n, giving quadratic total time — the efficiency coming from tracking the set of reachable states without tracking which paths reached them, since an automaton of n nodes has at most n reachable states at each step. The cost is that you cannot report which path matched, which is exactly what a capturing group asks for."
          }
        ]
      },
      {
        "decision": "Most implementations chose the other way, and pay for it",
        "because": "Capturing groups and backreferences are what users want, and they require knowing which path was taken — so the common implementations try one path at a time and go back when it fails.",
        "syntax": [
          {
            "code": "a?a?a?aaa   against   aaa",
            "means": "a pattern whose optional parts can be satisfied many ways",
            "consequence": "Cox demonstrates the difference with the pattern formed of n optional letters followed by n required ones, matched against a string of n letters: a backtracking implementation tries one-then-zero for each optional element, giving two-to-the-n possibilities of which only the last leads to a match. That is the catastrophic case people meet in production, and it is not a bug in an implementation, it is the algorithm doing what it was asked."
          }
        ]
      }
    ],
    "wall": "The notation's limit is not a matter of effort: what it can recognise is what a finite automaton can recognise, so nested structure — brackets inside brackets, tags inside tags — is outside it by construction, and every attempt to parse such a thing with it is a slow rediscovery of the theorem. The other cost is denseness: a pattern is unreadable at a length where a program is still fine, because there are no names in it. And the performance lesson generalises well beyond text, in the form Cox gives it: a slow implementation of a linear-time algorithm easily outperforms a fast implementation of an exponential-time one once the exponent is large enough."
  },
  "C.3": {
    "id": "C.3",
    "name": "COBOL",
    "status": "traced",
    "seed": "C.3",
    "constraint": "It had to be readable by people who were not programmers, portable across machines from competing manufacturers, and specified by a committee working to a deadline — and the specification, not any one vendor's compiler, had to be the standard.",
    "inherited": {
      "from": "C.2",
      "wall": "A notation built for arithmetic over arrays has nothing to say about a record, a field, a currency amount, or a report — and the organisation with the most computers was buying them from more than one manufacturer."
    },
    "opening": "Almost everything people mock about this language is a consequence of who was meant to read it and who was paying. A meeting at the Pentagon on May 28 and 29, 1959 determined the need for three committees; the steering committee met on June 4 and named the whole activity the Committee on Data Systems Languages. The work was done by the Short Range Committee, chaired by Joseph Wegstein of the National Bureau of Standards, with industry representatives alongside the Air Force, the Navy and the National Bureau of Standards. Read the verbosity as a specification written for an auditor, because that is what it is.",
    "decisions": [
      {
        "decision": "English words, because the reader is not the writer",
        "because": "The specifications were inspired to a great extent by FLOW-MATIC, invented by Grace Hopper, whose major contributions were long variable names, English words for commands, and the separation of data descriptions from instructions. It was attractive to the group because it was the only language available to them that had actually been implemented.",
        "syntax": [
          {
            "code": "MOVE CUSTOMER-BALANCE TO PRINT-LINE.",
            "means": "copy one field into another",
            "consequence": "A verb, then its objects, then a full stop. It costs the writer more keystrokes and it lets somebody who has never written a program read a statement and say whether it is what the business meant. The cost falls on the author and the benefit falls on the reader, which is the whole design and the reason it reads as long-winded to the author."
          },
          {
            "code": "ADD 1 TO RECORD-COUNT.",
            "means": "increment a counter",
            "consequence": "Long names were a contribution worth taking, not an accident: a name that describes the field removes the need for the comment that would have described it. Fifty years of advice about naming is this decision rediscovered by people who found the language it came from embarrassing."
          }
        ]
      },
      {
        "decision": "Data description is separated from the instructions",
        "because": "A business record has a layout that outlives any one program, and several programs read the same file. Describing the layout inside the code that happens to process it would make every program the owner of a fact it shares.",
        "syntax": [
          {
            "code": "01  CUSTOMER-RECORD.\n    05  BALANCE   PIC 9(7)V99.",
            "means": "a record, and a field inside it holding seven digits and two decimal places",
            "consequence": "The layout is declared once, in a division of its own, and the procedural part refers to it by name. The declaration also fixes the decimal position, because money has a fixed number of decimal places and rounding it the way a binary fraction rounds is not an approximation, it is a discrepancy somebody has to explain."
          }
        ]
      },
      {
        "decision": "The written specification is the standard, and compilers are judged against it",
        "because": "The buyer was purchasing machines from several manufacturers at once, so a language defined by whatever one vendor's compiler accepted would have reproduced the lock-in it was meant to end.",
        "syntax": [
          {
            "code": "IDENTIFICATION DIVISION.\nENVIRONMENT DIVISION.",
            "means": "declare what this program is, then what machine it expects",
            "consequence": "A division exists purely to hold the machine-specific facts, so that the parts which are not machine-specific are visibly not. On December 6 and 7, 1960, essentially the same program was run on two different makes of computer — an RCA machine and a Remington-Rand UNIVAC machine — demonstrating that compatibility across manufacturers could be achieved. That demonstration is what the division exists to make possible."
          }
        ]
      }
    ],
    "wall": "Verbosity was accepted deliberately and the bill arrives anyway: programs are enormous, the structure is rigid, and anything symbolic or recursive is painful to express. The history has a dispute worth carrying too, because it is usually told wrongly. The name was chosen at a meeting on 18 September 1959, with BUSY, INFOSYL and COCOSYL among the rejected alternatives; and while Hopper served as a technical adviser and her earlier language shaped the specification, Jean Sammet, one of the lead designers, said that Hopper \"was not the mother, creator, or developer of Cobol\". A participant's correction of the popular story is the kind of source worth more than the story.",
    "leadsTo": "C.4",
    "leadsToReason": "Records and verbs handle the clerical work and cannot express a symbol, a tree, or a function that calls itself — which is exactly what the people trying to make machines reason needed."
  },
  "C.4": {
    "id": "C.4",
    "name": "LISP",
    "status": "traced",
    "seed": "C.4",
    "constraint": "It was built for symbolic computation — expressions a program takes apart and builds, rather than numbers it adds — and the first implementation ran on a machine whose word divided into parts that could be addressed separately.",
    "inherited": {
      "from": "C.3",
      "wall": "Records and verbs handle a payroll and cannot express a symbol, a tree, or a function defined in terms of itself."
    },
    "opening": "The parentheses are not a style choice and were not meant to survive. McCarthy wrote that the notation for representing functions as data was created for the purposes of the paper with no thought that it would be used to express programs in practice, and that the form was an interim measure pending another notation which never caught on. What froze it was an implementation: Russell noticed that one function could serve as an interpreter, hand coded it, and the arrival of that interpreter tended to freeze the form of the language. Everything below is what you get when the notation a theory was written in becomes the notation you type.",
    "decisions": [
      {
        "decision": "One notation for the program and for the data it works on",
        "because": "The subject is expressions that get transformed. If programs are written in a different notation from the expressions they manipulate, a program that writes a program needs a translator between the two, and the whole point was to avoid needing one.",
        "syntax": [
          {
            "code": "(plus 1 (times 2 3))",
            "means": "an expression, also a list of three things",
            "consequence": "Operator first is what makes it a list with the operation at the head, which is what lets a program take the expression apart with the same operations it uses on any other list. The uniformity is the feature, and the parentheses are the price of the uniformity."
          },
          {
            "code": "(quote (plus 1 2))",
            "means": "this list, as data, not as something to run",
            "consequence": "Because the two are the same shape, the only thing separating code from data is whether you evaluate it — which is why this family gets macros and self-modifying programs cheaply, and why the same property is what makes the language hard to reason about statically."
          }
        ]
      },
      {
        "decision": "Everything is built from atoms, pairs, and five operations",
        "because": "The paper's purpose was to show what could be computed, so the base had to be small enough to argue about. Conditional expressions and recursive definitions then build the rest.",
        "syntax": [
          {
            "code": "(car (cons a b))  ->  a",
            "means": "take the first part of a pair you just made",
            "consequence": "The paper builds everything from symbolic expressions — atoms and recursively constructed ordered pairs — and five elementary operations: atom, eq, car, cdr and cons. Substitution, structural equality, list append and symbolic differentiation are then definitions rather than features, which is why the language has so little in it and so much available."
          },
          {
            "code": "(cdr '(a b c))  ->  (b c)",
            "means": "everything after the first element",
            "consequence": "The odd names are hardware. In History of Lisp McCarthy records that car stands for Contents of the Address part of Register number, and that the motivation for implementing car and cdr separately was strengthened by the fact that the IBM 704 had instructions, connected with indexing, that made these operations easy to implement — a word on that machine being split into an address part and a decrement part holding the locations of the two subexpressions. Register there means a memory location rather than a programmer-visible address register, which that machine did not have."
          }
        ]
      },
      {
        "decision": "A function may be defined in terms of itself, and lists are defined that way too",
        "because": "A list is either empty or an element followed by a list, so the natural definition of anything over lists is recursive, and a language that could not express that would be fighting its own data structure.",
        "syntax": [
          {
            "code": "(defun length (l)\n  (cond ((null l) 0)\n        (t (plus 1 (length (cdr l))))))",
            "means": "the length of a list is one more than the length of the rest",
            "consequence": "The definition reads exactly like the inductive definition of a list, which is the strongest argument this language has. What it costs is a call for every element, on a machine where a call is not free — and the tension between the elegant definition and the loop it should have been is still with us."
          }
        ]
      },
      {
        "decision": "The program does not say when memory is finished with",
        "because": "Expressions are built and abandoned constantly by a program that is rearranging structure. Asking the programmer to track which pairs are still reachable would ask them to hold the one fact the program is busy changing.",
        "syntax": [
          {
            "code": "(cons a (cons b nil))",
            "means": "build a list, and never say when to release it",
            "consequence": "Automatic reclamation of unused storage is among the topics the 1960 paper covers, and the paper is its first published description. Every managed language since inherits the bargain: you stop writing one class of bug, and you accept a pause you did not schedule at a moment you did not choose."
          }
        ]
      }
    ],
    "wall": "The same uniformity that makes it powerful makes it slow and memory-hungry on the hardware of its time: every pair is an allocation, every call is a call, and reclamation happens when it happens. McCarthy became an assistant professor at MIT in the autumn of 1958, when he and Minsky founded the Artificial Intelligence Project and implementation began that autumn; the paper describing it appeared in Communications of the ACM in April 1960. It is a language defined by a paper and frozen by an interpreter, and what it lacks is exactly what a committee would have insisted on: a defined grammar, and an agreed way to write anything down twice the same way.",
    "leadsTo": "C.5",
    "leadsToReason": "If a language can be described precisely enough to argue about, the description should exist on its own — a formal grammar, block structure and scope, agreed between people rather than fixed by whichever implementation appeared first."
  },
  "C.5": {
    "id": "C.5",
    "name": "ALGOL",
    "status": "traced",
    "seed": "C.5",
    "constraint": "It was designed to be published rather than sold: a notation for describing algorithms in print, agreed between thirteen representatives from seven countries, with no manufacturer's machine to be faithful to.",
    "inherited": {
      "from": "C.4",
      "wall": "A notation frozen by whichever interpreter appeared first is not a definition, and a language with no definition cannot be implemented twice and compared."
    },
    "opening": "Thirteen representatives from Denmark, England, France, Germany, Holland, Switzerland and the United States conferred in Paris from January 11 to 16, 1960, taking as their basis a completely new draft report Naur had worked out beforehand. Read the result as a specification rather than a product, because that is what was being made — and read its famous omission the same way, since the decision that kept it honest is also the one that kept it out of production.",
    "decisions": [
      {
        "decision": "The grammar of the language is written down, formally, before any compiler exists",
        "because": "A language agreed between people in several countries cannot be defined by an implementation, because there is no implementation everyone shares. The definition has to be a document, and a document about syntax needs a notation of its own.",
        "syntax": [
          {
            "code": "<if statement> ::= if <boolean expression> then <statement>",
            "means": "a rule of the grammar, written in the grammar's own notation",
            "consequence": "The notation Backus had devised for the earlier specification was revised and expanded by Naur, and at Knuth's suggestion it was renamed Backus-Naur form. Once a grammar can be written down, a compiler can be generated from it and two implementations can be compared against something other than each other — which is the whole reason a language can outlive its first compiler."
          }
        ]
      },
      {
        "decision": "A region of the program is a thing, and names belong to regions",
        "because": "If every name is visible everywhere, a large program cannot be written by more than one person, because the only protection against collision is memory and courtesy.",
        "syntax": [
          {
            "code": "begin\n  integer i;\n  ...\nend",
            "means": "a block, and a name that exists only inside it",
            "consequence": "The report defines blocks delimited by begin and end, procedures nested within one another, and lexical scope, in which a name refers to the declaration enclosing it in the text. Every brace in every descendant is this decision: the text of the program, rather than the order of execution, decides which declaration a name refers to."
          },
          {
            "code": "procedure f(n); integer n;\nbegin ... f(n-1) ... end",
            "means": "a procedure that may call itself",
            "consequence": "Recursion in the definition forces a stack in the implementation, because each invocation needs its own copies of its names. The data structure underneath every modern language's function call is here as a consequence of a decision about what you were allowed to write."
          }
        ]
      },
      {
        "decision": "Input and output are left out of the language",
        "because": "Those were the parts that differed most between machines, and the committee was defining something to be published rather than run. Including them would have meant standardising the one area where no standard was possible.",
        "syntax": [
          {
            "code": "(nothing)",
            "means": "there is no statement here to show",
            "consequence": "The language as officially defined contains no input or output facilities, so implementations supplied their own, in largely incompatible ways. This is the most instructive decision in the chain: the omission that kept the definition clean is precisely the one that made programs unportable in practice, so a language that was portable on paper was not portable in a machine room. What you leave out of a specification does not go away. It gets decided by somebody else, differently each time."
          }
        ]
      }
    ],
    "wall": "It never shipped commercially, and the reason is the decision above rather than any failure of design. The ideas won completely while the language itself did not: it gave rise to CPL, Simula, BCPL, B, Pascal and C, so every language in this chain after it is carrying its block structure and its scope rules. For a beginner, meanwhile, it was hopeless — a formal grammar and a block structure are no help to somebody who cannot get an answer out of the machine today. Both halves of that are in Hoare's verdict, from his 1980 Turing Award lecture: “Here is a language so far ahead of its time that it was not only an improvement on its predecessors but also on nearly all its successors.”",
    "leadsTo": "C.6",
    "leadsToReason": "A student with a teletype and one afternoon needs to type something and see it work, which no amount of formal grammar provides and no batch of punched cards allows."
  },
  "C.6": {
    "id": "C.6",
    "name": "BASIC",
    "status": "traced",
    "seed": "C.6",
    "constraint": "A beginner sitting at a teletype on a shared machine had to type a program and see it work in one sitting, with no screen to edit on and no manual to read first.",
    "inherited": {
      "from": "C.5",
      "wall": "A precise definition and a block structure are of no use to somebody who cannot get an answer out of the machine today, and the machine answered in batches measured in days."
    },
    "opening": "Every feature here is a consequence of a teletype and a shared machine. Kemeny began work on a draft in September 1963, having applied that year for a National Science Foundation grant to bring a GE-225 computer to campus and build a general-purpose time-sharing system — a grant awarded despite referees' serious doubts about staffing the work with undergraduates. What was being designed was not really a language. It was the shortest path from a person who has never programmed to a correct answer on paper in front of them.",
    "decisions": [
      {
        "decision": "Every line carries a number, and the number is its address",
        "because": "There is no screen and no editor. The terminal prints and cannot take anything back, so the only way to change a line already typed is to type it again — and the system needs a way to know which line you meant.",
        "syntax": [
          {
            "code": "10 PRINT \"HELLO\"\n20 END",
            "means": "two lines, in the order their numbers give",
            "consequence": "Typing a line whose number already exists replaces it, and typing one in between inserts it, which is why people numbered in tens. The editor and the program are the same thing, and the numbering scheme is an interface designed for a device that cannot erase."
          },
          {
            "code": "GOTO 10",
            "means": "continue from the line numbered 10",
            "consequence": "The jump costs nothing to add because the address already exists on every line. A language whose lines are numbered will get a jump whether or not anyone designs one, and the tangle that follows is the consequence of a decision made for the sake of editing."
          }
        ]
      },
      {
        "decision": "Short, ordinary words, and no declarations before you begin",
        "because": "The user is a student in another department with an afternoon free. Anything that must be understood before the first correct answer is a reason to stop.",
        "syntax": [
          {
            "code": "20 INPUT N\n30 LET S = N * N",
            "means": "ask for a number, then square it",
            "consequence": "The original version had 14 statements and nine built-in functions, which is the design: a vocabulary small enough to hold in your head after one demonstration. There is no declaration section because a declaration is a promise about a program that does not exist yet, and a beginner has no way to make it."
          },
          {
            "code": "RUN",
            "means": "translate and execute what has been typed",
            "consequence": "One word closes the loop from typing to answer, which is the product. Unlike many later implementations that carried the name, the original was a compiler operating compile-and-go: it converted an entire program at once into machine code rather than translating line by line at each run — so the immediacy was a property of the system's design, not a consequence of interpreting."
          }
        ]
      },
      {
        "decision": "The system is shared, and being shared is the point",
        "because": "A single machine had to serve a campus, and the reason for insisting on time-sharing was that an interactive answer is what makes a beginner continue.",
        "syntax": [
          {
            "code": "(a terminal, and another terminal)",
            "means": "two people using the machine at once",
            "consequence": "Dartmouth's own account has Kemeny and a student programmer typing RUN on neighbouring terminals at 4 a.m. on May 1, 1964 and both getting back correct answers — described by the institution itself as legend rather than as a documented record, with other accounts crediting Kemeny and Kurtz jointly. The system opened to general users in June 1964, and by that autumn hundreds of students were using it on 20 terminals around campus."
          }
        ]
      }
    ],
    "wall": "A numbered line is an address, and an address invites a jump, so a program past a few hundred lines becomes a graph nobody can hold. There are no procedures worth the name, no local names, and no way to touch the hardware, so the language that teaches a beginner to program cannot be used to write the system the beginner is sitting in front of.",
    "leadsTo": "C.7",
    "leadsToReason": "Writing the system itself needs structured control flow and direct access to memory in the same language, which means a language with the machine underneath it rather than a system between."
  },
  "C.7": {
    "id": "C.7",
    "name": "C",
    "status": "traced",
    "seed": "C.7",
    "constraint": "It had to compile to fast machine code on a PDP-11, with no runtime underneath it, because the thing being written in it was the operating system itself.",
    "inherited": {
      "from": "C.5",
      "wall": "Assembly could touch the hardware but could not move between machines. The languages that were portable sat too far above the hardware to write an operating system in."
    },
    "opening": "Almost everything people find awkward about C is the same decision seen from a different angle. It was written to build an operating system, and an operating system cannot assume anything is already running underneath it, because it is itself the thing underneath. Read the syntax with that in mind and the awkwardness turns into arithmetic.",
    "decisions": [
      {
        "decision": "No runtime, so no garbage collector",
        "because": "A collector is a program that must already be running in order to work. There was nothing to run it. Somebody therefore has to say when memory is finished with, and the only somebody available is you.",
        "syntax": [
          {
            "code": "int *p;",
            "means": "p holds an address, not a value",
            "consequence": "The machine has addresses and C declines to hide them. Once addresses are in the language, arithmetic on them is unavoidable, and so is the possibility of an address that points nowhere useful."
          },
          {
            "code": "p = malloc(n); free(p);",
            "means": "ask for n bytes; hand them back",
            "consequence": "The pairing is manual because nothing is watching. Forget the second call and the memory is lost while the program runs. Make it twice, or use p afterwards, and you are reading or writing memory that now belongs to something else. Both are ordinary C bugs, not exotic ones."
          },
          {
            "code": "char buf[64];",
            "means": "sixty-four bytes, on the stack, gone when the function returns",
            "consequence": "Fast, free, and automatic. It is also why returning a pointer to a local is wrong: the storage is reclaimed at return, and the pointer outlives what it points at."
          }
        ]
      },
      {
        "decision": "A string is not a type",
        "because": "A string type needs a length stored somewhere and code to maintain it. That is a runtime cost on every string in the program, and the budget was nothing.",
        "syntax": [
          {
            "code": "char *s = \"hello\";",
            "means": "a pointer to the first character",
            "consequence": "There is no length anywhere. The convention is a zero byte at the end, so finding the length means walking the string. strlen is a loop, and calling it inside a loop is how an accidental quadratic gets written."
          },
          {
            "code": "strcpy(dst, src);",
            "means": "copy until the zero byte",
            "consequence": "It cannot check the size of dst, because dst is only an address and carries no size with it. This is the buffer overflow, and it is not a bug in strcpy. It is the absence of a length, showing up where you would expect a length to be."
          }
        ]
      },
      {
        "decision": "struct holds data and nothing else",
        "because": "A one-pass compiler translates as it reads. Binding code to data would require knowing about the code before reaching it, and the compiler had to fit on the machine it ran on.",
        "syntax": [
          {
            "code": "struct point { int x; int y; };",
            "means": "a layout: two integers, side by side in memory",
            "consequence": "It is a description of bytes, not an object. There are no methods to attach and nothing private to protect, because privacy would need a compiler that knows who is asking."
          },
          {
            "code": "void move(struct point *p, int dx);",
            "means": "the function is separate, and takes the data as an argument",
            "consequence": "This is the shape all C code takes: free functions over plain data. Passing the pointer rather than the struct also avoids copying it, which matters when the struct is large and nobody is optimising for you."
          }
        ]
      },
      {
        "decision": "The compiler sees one file at a time",
        "because": "Memory was too small to hold a whole program. Each file is compiled alone and the pieces are joined afterwards, which means each file must be told what exists elsewhere.",
        "syntax": [
          {
            "code": "#include <stdio.h>",
            "means": "paste that file in here, before compiling",
            "consequence": "It is textual substitution, running before the compiler proper. That is why a missing include is a compile error rather than a link error, and why include order can change the meaning of a program."
          },
          {
            "code": "extern int errno;",
            "means": "this exists somewhere else; trust me and let the linker find it",
            "consequence": "The split between declaration and definition, and the header file as a separate artefact you must keep in step with the code, both fall out of compiling one file at a time."
          }
        ]
      }
    ],
    "wall": "Every one of those decisions buys speed with the programmer's attention. Manual memory means the mistakes are yours; no string type means the overflows are yours; free functions over plain data means a large program has no seams. C scales down to the metal beautifully and scales up to a large team badly.",
    "leadsTo": "C.9",
    "leadsToReason": "C++ kept the compile-to-metal, zero-overhead bargain and added a way to bundle data with the code that acts on it, so that a large program could have seams."
  },
  "C.8": {
    "id": "C.8",
    "name": "Smalltalk",
    "status": "traced",
    "seed": "C.8",
    "constraint": "It was designed to fit on a personal machine that did not exist yet and to be understandable by one person, which meant the whole language had to be small enough to describe on a page and the system had to stay alive while you changed it.",
    "inherited": {
      "from": "C.7",
      "wall": "Free functions over plain data give a large program no seams: the data is passive, the procedures are somewhere else, and nothing in the language says which procedures are allowed to touch which data."
    },
    "opening": "This one starts as a bet. In a hallway conversation with Ted Kaehler and Dan Ingalls about how large a language would have to be to have real power, Kay boasted that he could define “the most powerful language in the world” in “a page of code”, and their reply was “Put up or shut up.” No money was wagered. He worked on it for roughly two weeks, arriving at PARC at 4 a.m. each day and working until 8, when Ingalls, Henry Fuchs, John Shoch and Steve Purcell would arrive to critique the morning's progress. Everything below follows from trying to win that bet.",
    "decisions": [
      {
        "decision": "There is one mechanism, and it is sending a message to an object",
        "because": "A language you can define on a page cannot have a dozen constructs. If every operation is the same operation, the definition stays small and the power comes from what the objects are rather than from what the language provides.",
        "syntax": [
          {
            "code": "3 + 4",
            "means": "send the message + with argument 4 to the object 3",
            "consequence": "Arithmetic is not built in; it is a message that a number happens to understand. The first working version computed three plus four extremely slowly — Butler Lampson called it glacial — but always returned seven, which is the right thing to be proud of, because it means the mechanism was general enough to do arithmetic without arithmetic being a special case."
          },
          {
            "code": "anAccount deposit: 50",
            "means": "ask the account to deposit, rather than modify its balance",
            "consequence": "The object decides what happens, so the data and the code that may touch it arrive as one thing. Kay described objects as little computers, “a recursion on the notion of computer itself” — which is a stronger claim than encapsulation: each one is a whole machine, not a record with functions attached."
          }
        ]
      },
      {
        "decision": "Inheritance was left out of the first version on purpose",
        "because": "The single static inheritance available in the language that inspired it seemed too limiting, and it was better to ship the mechanism that was general than the convenience that was not.",
        "syntax": [
          {
            "code": "Object subclass: #Account",
            "means": "a class, defined by sending a message to another class",
            "consequence": "When it did arrive it arrived as more message sending, not as new syntax, which is why the language stays small while gaining a feature. The omission is the lesson: the first version did not include inheritance not because it was thought unimportant but because the available form of it was judged too restrictive, and shipping without it was preferable to shipping the wrong version of it."
          }
        ]
      },
      {
        "decision": "The system stays running while you change it",
        "because": "The point was a machine a person could think with. A tool that must be stopped, edited, rebuilt and restarted puts a gap between the idea and the result, and the gap is where the thinking stops.",
        "syntax": [
          {
            "code": "(browser, inspector, debugger — all live)",
            "means": "the environment is part of the language",
            "consequence": "The modern form followed after substantial revision, with a development environment containing most of the now-familiar tools including a class library browser and editor; Ingalls described its design and implementation at the fifth symposium on Principles of Programming Languages in Tucson in January 1978. Every one of those tools is now in your editor, which is the strongest evidence that the idea won even where the language did not."
          }
        ]
      }
    ],
    "wall": "A live image is a wonderful place to work and a difficult thing to ship: the program is a running world rather than a file, so version control, deployment and interoperating with anything outside it are all awkward. It is also slow, and it arrived tied to hardware — Lampson and Thacker offered to build Kay's machine using the $230K he had earmarked for other computers, and the system was bootstrapped onto that machine after the one known as Bilbo came alive in early April 1973. The ideas left the walled garden and the language mostly did not.",
    "leadsTo": "C.9",
    "leadsToReason": "If objects are what a large program needs, and a running world is what you cannot ship, then the objects have to arrive in a language that compiles to the metal and costs nothing you did not ask for."
  },
  "C.9": {
    "id": "C.9",
    "name": "C++",
    "status": "traced",
    "seed": "C.9",
    "constraint": "Objects had to cost nothing. The design criterion Stroustrup states is that “a facility must not just be useful, it must be affordable”, which rules out any mechanism that makes a program slower than the equivalent written by hand.",
    "inherited": {
      "from": "C.8",
      "wall": "A language where every operation is a message and the system is a living image gives you seams and takes away the metal: it cannot be compiled to something a systems programmer would accept, and it cannot be shipped as a file."
    },
    "opening": "Stroustrup states the motivation as wanting to write efficient systems programs in the styles encouraged by Simula, so he added better type checking, data abstraction and object-oriented programming to C — his stated goal being “to design a language in which I could write programs that were both efficient and elegant”. Read every feature as an answer to the question that follows from the affordability criterion: what would this construct cost at run time, and can that cost be zero?",
    "decisions": [
      {
        "decision": "A class is a struct with the functions that belong to it, and no more",
        "because": "Data and the code that maintains its invariants belong together, and that grouping can be done entirely by the compiler. A call to a member function can compile into exactly the call you would have written by hand.",
        "syntax": [
          {
            "code": "class Account {\n  int balance;\npublic:\n  void deposit(int n);\n};",
            "means": "a layout, plus which functions may touch it",
            "consequence": "Work began in 1979, and by October 1979 a pre-processor named Cpre added classes in the style of Simula to C. The language it accepted was called C with Classes, and the name is the honest description: the object is a record with rules about who may modify it, which is a compile-time fact with no run-time representation."
          },
          {
            "code": "account.deposit(50);",
            "means": "call a function that receives the object as a hidden first argument",
            "consequence": "There is no lookup and no message dispatch by default, so the call costs what a free function taking a pointer costs. That is the whole bargain: you get the organisation and you do not pay for it, and the price of the bargain is that everything about who handles a call is decided before the program runs."
          }
        ]
      },
      {
        "decision": "Construction and destruction are automatic, and tied to scope",
        "because": "If a resource is acquired when an object is created and released when it goes out of scope, the release cannot be forgotten — and scope is already known to the compiler, so this costs nothing to arrange.",
        "syntax": [
          {
            "code": "{ File f(\"data\"); ... }  // closed here",
            "means": "acquire on construction, release at the closing brace",
            "consequence": "This is the single largest improvement over the language it extends, and it required no run-time support: the compiler inserts the release where the scope ends. It also explains why the language is stricter about copying than its predecessor — if a copy is made, the question of who releases the resource has to have an answer."
          }
        ]
      },
      {
        "decision": "Where dispatch has to happen at run time, you ask for it",
        "because": "Choosing behaviour by the type of an object at run time costs an indirection. That cost is worth it sometimes and not always, so the language makes it a decision rather than a default.",
        "syntax": [
          {
            "code": "virtual void draw();",
            "means": "decide which function to call from the object, at run time",
            "consequence": "The keyword exists because the affordable version is the one you did not ask for. A reader can see where the program pays for flexibility, which is the same reason the language has so many keywords: each one names a cost that a different language hides."
          }
        ]
      }
    ],
    "wall": "The features added through Cfront — the class, the derived class, strong type checking, inlining and default arguments — were designed and implemented between spring 1982 and summer 1983, and the first version was used internally at AT&T in August 1983; the name was suggested by Rick Mascitti and signifies evolution from C via the increment operator. What the bargain does not buy is simplicity. Every construct that costs nothing at run time costs something at compile time and something in the reader's head, so the language grows without a natural place to stop, builds are slow, and the memory management that was never automatic is still yours to get wrong.",
    "leadsTo": "C.10",
    "leadsToReason": "Not every program is a system. A great many are a few hundred lines that read a log, pull out three fields and print a report — and paying a compile cycle and manual memory management for that is absurd."
  }
};

  const SOURCES = {
  "C.1": [
    {
      "claim": "EDSAC was the first stored-program computer to operate a regular computing service. Maurice Wilkes led the team responsible for its design and construction, and it ran its first program successfully on May 6, 1949.",
      "title": "Richards, M., EDSAC Initial Orders and Squares Program, University of Cambridge Computer Laboratory",
      "url": "https://www.cl.cam.ac.uk/~mr10/Edsac/edsacposter.pdf",
      "kind": "primary"
    },
    {
      "claim": "The EDSAC initial orders were written by David Wheeler in May 1949 to load and enter a paper tape representation of a program. They were placed in memory locations 0 to 30 by a mechanism involving uniselectors, before execution started from location 0.",
      "title": "Richards, M., EDSAC Initial Orders and Squares Program, University of Cambridge Computer Laboratory",
      "url": "https://www.cl.cam.ac.uk/~mr10/Edsac/edsacposter.pdf",
      "kind": "primary"
    },
    {
      "claim": "An EDSAC order was punched on paper tape as a character that directly gave the 5-bit operation code, followed by zero or more decimal digits giving the address, terminated by S or L specifying the operand length bit. R16S assembled to 00100 0 0000010000 0 and T11L to 00101 0 0000001011 1; the characters R and T had codes 4 and 5 respectively.",
      "title": "Richards, M., EDSAC Initial Orders and Squares Program, University of Cambridge Computer Laboratory",
      "url": "https://www.cl.cam.ac.uk/~mr10/Edsac/edsacposter.pdf",
      "kind": "primary"
    },
    {
      "claim": "The first published description of an assembly language is generally identified as Coding for A.R.C., a 1947 report by Andrew Booth and Kathleen Britten, later Kathleen Booth, produced while visiting the Institute for Advanced Study at Princeton. The report is not readily available in digital form, so the attribution rests on later accounts rather than on a document a reader can inspect.",
      "title": "Assembly language: history, citing Booth, A. D. and Britten, K. H. V., Coding for A.R.C., Institute for Advanced Study, 1947 — an attribution repeated from secondary accounts rather than an inspectable scan",
      "url": "https://en.wikipedia.org/wiki/Assembly_language",
      "kind": "secondary"
    },
    {
      "claim": "The word assembler is generally attributed to Wilkes, Wheeler and Gill, The Preparation of Programs for an Electronic Digital Computer, 1951, where it named a program that assembled several sections into one program rather than one that translated mnemonics.",
      "title": "In Praise of Wilkes, Wheeler, and Gill, Communications of the ACM, on The Preparation of Programs for an Electronic Digital Computer, 1951",
      "url": "https://cacm.acm.org/opinion/in-praise-of-wilkes-wheeler-and-gill/",
      "kind": "secondary"
    }
  ],
  "C.10": [
    {
      "claim": "Larry Wall released version 1.0 on 18 December 1987, posting the source to the newsgroup comp.sources.misc. He was working as a programmer at Unisys at the time and needed reports about information being synchronised between two sites.",
      "title": "Perl: the 18 December 1987 release of version 1.0 to comp.sources.misc, Wall’s employment at Unisys, and the account of the name",
      "url": "https://en.wikipedia.org/wiki/Perl",
      "kind": "secondary"
    },
    {
      "claim": "Related material appeared separately in comp.sources.unix volume 13 in February 1988, posted by the moderator Rich Salz: issue 12 carried patches 6 to 10, and issue 13 carried a forwarded explanatory article and a sample program together with patches 11 to 14. The original release and these follow-on postings went to different newsgroups, which is why the release is sometimes misattributed.",
      "title": "comp.sources.unix, Volume 13, Issue 13: forwarded posting of perl code, February 1988, archived by The Unix Heritage Society",
      "url": "https://www.tuhs.org/Usenet/comp.sources.unix/1988-February/005937.html",
      "kind": "primary"
    },
    {
      "claim": "The manual page states the intended niche directly: \"If you have a problem that would ordinarily use sed or awk or sh, but it exceeds their capabilities or must run a little faster, and you don’t want to write the silly thing in C, then perl may be for you.\"",
      "title": "Wall, L., perl(1) manual page — the description text dating from the original 1987 release, carried forward essentially unchanged into later manuals",
      "url": "https://perldoc.perl.org/5.005/perl",
      "kind": "primary"
    },
    {
      "claim": "The same manual page describes it as an interpreted language optimized for scanning arbitrary text files, extracting information from those text files and printing reports based on that information, and as combining some of the best features of C, sed, awk and sh. It states the design preference as being practical — easy to use, efficient, complete — rather than beautiful, meaning tiny, elegant, minimal.",
      "title": "Wall, L., perl(1) manual page — the description text dating from the original 1987 release, carried forward essentially unchanged into later manuals",
      "url": "https://perldoc.perl.org/5.005/perl",
      "kind": "primary"
    },
    {
      "claim": "On the name: it is commonly expanded as Practical Extraction and Report Language, but Wall has said it is a riff on Pearl, from the parable of the pearl, with the letter dropped because a language called Pearl already existed.",
      "title": "Perl: the 18 December 1987 release of version 1.0 to comp.sources.misc, Wall’s employment at Unisys, and the account of the name",
      "url": "https://en.wikipedia.org/wiki/Perl",
      "kind": "secondary"
    },
    {
      "claim": "The tools it set out to subsume — sed, awk and the shell — are the standard text-processing tools of Unix, and the follow-on postings were carried in the comp.sources.unix newsgroup.",
      "title": "comp.sources.unix, Volume 13, Issue 13: forwarded posting of perl code, February 1988, archived by The Unix Heritage Society",
      "url": "https://www.tuhs.org/Usenet/comp.sources.unix/1988-February/005937.html",
      "kind": "primary"
    }
  ],
  "C.11": [
    {
      "claim": "Implementation was started in December 1989 by Guido van Rossum at CWI in the Netherlands, as a successor to ABC capable of exception handling and of interfacing with the Amoeba operating system. It was begun over a Christmas holiday.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    },
    {
      "claim": "In 1989 van Rossum was working on Amoeba, a microkernel-based distributed system, developing system utilities for it. He found that developing in C took too much time and decided to spend his free time building a language that would let him work faster.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    },
    {
      "claim": "Van Rossum had worked in the early 1980s as an implementer on the team at CWI that built ABC, and has said he feels indebted to what he learned on that project, while also remembering his frustration with it.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    },
    {
      "claim": "CWI records that the language was designed in December 1989, that the first working draft was finished some months later in 1990, and that the first public release, version 0.9.0, came on 20 February 1991.",
      "title": "25 Years of Python at CWI — Centrum Wiskunde & Informatica’s own account",
      "url": "https://www.cwi.nl/en/news/25-years-of-python-at-cwi/",
      "kind": "primary"
    },
    {
      "claim": "The code was published to the alt.sources newsgroup in February 1991; the interpreter source had to be split into 21 uuencoded messages to be posted there. Accounts differ on whether the version posted was labelled 0.9.0 or 0.9.1.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    },
    {
      "claim": "Several features were present in the initial release: classes with inheritance, exception handling, functions, and the core datatypes list, dict and str. The module system was borrowed from Modula-3, and the exception model also resembled that of Modula-3, with the addition of an else clause.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    },
    {
      "claim": "The language is named after the British comedy series Monty Python’s Flying Circus.",
      "title": "History of Python: the December 1989 start at CWI, the ABC and Amoeba context, the Modula-3 module system, and the February 1991 release to alt.sources",
      "url": "https://en.wikipedia.org/wiki/History_of_Python",
      "kind": "secondary"
    }
  ],
  "C.12": [
    {
      "claim": "James Gosling, Mike Sheridan and Patrick Naughton started the project in June 1991 at Sun Microsystems, chartered to anticipate the next wave in computing. The target was digital consumer devices such as set-top boxes and televisions.",
      "title": "Java (programming language): the Green Project, the Oak name, the 1994 retarget to the internet, and the SunWorld announcement of 23 May 1995",
      "url": "https://en.wikipedia.org/wiki/Java_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "The language was first called Oak, after a tree outside Gosling’s office. A trademark search found Oak already registered by a video adaptor card manufacturer, so it was renamed. Gosling gave it a syntax in the style of C and C++ so that working programmers would find it familiar.",
      "title": "Java (programming language): the Green Project, the Oak name, the 1994 retarget to the internet, and the SunWorld announcement of 23 May 1995",
      "url": "https://en.wikipedia.org/wiki/Java_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "In June and July 1994 the team retargeted the work from consumer devices to the internet, judging that with the arrival of the Mosaic browser the web was moving toward the interactive vision they had had for cable television. On 16 September 1994 work began on a browser called WebRunner, later renamed HotJava, demonstrated to executives on 29 September 1994.",
      "title": "Java (programming language): the Green Project, the Oak name, the 1994 retarget to the internet, and the SunWorld announcement of 23 May 1995",
      "url": "https://en.wikipedia.org/wiki/Java_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "Sun announced the language and the browser at SunWorld on 23 May 1995. John Gage of Sun and Marc Andreessen of Netscape announced on stage that the technology would be incorporated into Netscape Navigator; Andreessen’s announcement was a surprise. The team numbered fewer than 30 people at the time.",
      "title": "Java (programming language): the Green Project, the Oak name, the 1994 retarget to the internet, and the SunWorld announcement of 23 May 1995",
      "url": "https://en.wikipedia.org/wiki/Java_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "Programs are compiled to bytecode, which can be executed on any device with a compatible runtime. This is the property summarised by the slogan write once, run anywhere.",
      "title": "Java (programming language): the Green Project, the Oak name, the 1994 retarget to the internet, and the SunWorld announcement of 23 May 1995",
      "url": "https://en.wikipedia.org/wiki/Java_(programming_language)",
      "kind": "secondary"
    }
  ],
  "C.13": [
    {
      "claim": "Brendan Eich, recently hired by Netscape Communications, was tasked in May 1995 with producing a scripting language for client-side interactivity in Netscape Navigator, and prototyped it in about ten days.",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape, the Mocha and LiveScript names, and the December 1995 renaming under the Sun licensing deal",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    },
    {
      "claim": "The design drew on Scheme for its functional elements, Self for prototype-based inheritance, and the syntax of Java for familiarity. Despite the eventual name the two languages differ fundamentally: one is compiled, class-based and statically typed, the other interpreted, prototype-based and dynamically typed, and the main similarity is C-style syntax.",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape, the Mocha and LiveScript names, and the December 1995 renaming under the Sun licensing deal",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    },
    {
      "claim": "The prototype was codenamed Mocha, renamed LiveScript in September 1995 for the beta of the second version of the browser, and renamed again in December 1995 after Netscape and Sun reached a licensing deal. Eich described it in a later interview: \"in early December Netscape and Sun reached a licensing deal, and the language became JavaScript.\"",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape, the Mocha and LiveScript names, and the December 1995 renaming under the Sun licensing deal",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    },
    {
      "claim": "The name was chosen to ride on the contemporaneous success of Java, and the resulting confusion between the two has persisted ever since.",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape, the Mocha and LiveScript names, and the December 1995 renaming under the Sun licensing deal",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    },
    {
      "claim": "Eich also wrote the first engine to execute the language in the browser. When Mozilla inherited the Netscape codebase in 1998, that engine came with it. The language was taken to Ecma in 1996 and 1997 to produce a standard specification.",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape, the Mocha and LiveScript names, and the December 1995 renaming under the Sun licensing deal",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    },
    {
      "claim": "The JavaScript Object Notation data interchange format, commonly abbreviated JSON, is specified by RFC 8259, which defines it as a lightweight, text-based, language-independent syntax for interchanging structured data.",
      "title": "T. Bray, editor, The JavaScript Object Notation (JSON) Data Interchange Format, RFC 8259, December 2017",
      "url": "https://www.rfc-editor.org/rfc/rfc8259",
      "kind": "primary"
    },
    {
      "claim": "The Document Object Model, abbreviated DOM, is defined by a living standard as the tree of objects a document is represented as, which scripts read and modify.",
      "title": "DOM Standard, WHATWG living standard",
      "url": "https://dom.spec.whatwg.org/",
      "kind": "primary"
    },
    {
      "claim": "Cascading Style Sheets, abbreviated CSS, is the language for describing the presentation of documents, defined across a family of specifications collected by the W3C in its periodic snapshot.",
      "title": "CSS Snapshot, W3C",
      "url": "https://www.w3.org/TR/CSS/",
      "kind": "primary"
    }
  ],
  "C.14": [
    {
      "claim": "Rasmus Lerdorf released version 1.0, then called Personal Home Page Tools, on 8 June 1995, announcing it on the newsgroup comp.infosystems.www.authoring.cgi under the subject Announce: Personal Home Page Tools.",
      "title": "History of PHP — the project’s own account of the 1995 Personal Home Page Tools release and the rewrites that followed",
      "url": "https://www.php.net/manual/en/history.php.php",
      "kind": "primary"
    },
    {
      "claim": "What was released was a set of small, tightly written CGI binaries in C — a utility library and templating mechanism rather than a scripting language. A complete rewrite followed in October 1995, and the second generation arrived in April 1996.",
      "title": "History of PHP — the project’s own account of the 1995 Personal Home Page Tools release and the rewrites that followed",
      "url": "https://www.php.net/manual/en/history.php.php",
      "kind": "primary"
    },
    {
      "claim": "The name was originally an abbreviation of Personal Home Page, and was later redefined as a recursive abbreviation for Hypertext Preprocessor.",
      "title": "History of PHP — the project’s own account of the 1995 Personal Home Page Tools release and the rewrites that followed",
      "url": "https://www.php.net/manual/en/history.php.php",
      "kind": "primary"
    },
    {
      "claim": "The model is that a file is a document which may contain code, rather than a program which emits a document: the page is served as written except where an escape into code occurs.",
      "title": "History of PHP — the project’s own account of the 1995 Personal Home Page Tools release and the rewrites that followed",
      "url": "https://www.php.net/manual/en/history.php.php",
      "kind": "primary"
    },
    {
      "claim": "The JavaScript Object Notation data interchange format, commonly abbreviated JSON, is specified by RFC 8259, which defines it as a lightweight, text-based, language-independent syntax for interchanging structured data.",
      "title": "T. Bray, editor, The JavaScript Object Notation (JSON) Data Interchange Format, RFC 8259, December 2017",
      "url": "https://www.rfc-editor.org/rfc/rfc8259",
      "kind": "primary"
    }
  ],
  "C.15": [
    {
      "claim": "The name was chosen on 24 February 1993, in a chat between Yukihiro Matsumoto and Keiju Ishitsuka, before any code existed. Coral and Ruby were the two proposals and Matsumoto picked the latter.",
      "title": "Ruby (programming language): the February 1993 naming, the 0.95 release of 21 December 1995, and the 1.0 release of 25 December 1996",
      "url": "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "The first public release, version 0.95, was announced on Japanese domestic newsgroups on 21 December 1995. Three further versions followed within two days, and the release coincided with the launch of the language’s first mailing list. Version 1.0 followed on 25 December 1996.",
      "title": "Ruby (programming language): the February 1993 naming, the 0.95 release of 21 December 1995, and the 1.0 release of 25 December 1996",
      "url": "https://en.wikipedia.org/wiki/Ruby_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "David Heinemeier Hansson extracted the framework from his work on the project management application Basecamp at 37signals. It was created for the company’s internal use first, open-sourced in July 2004, and reached version 1.0 in December 2005. Hansson had discovered the language in 2003.",
      "title": "Ruby on Rails: extraction from Basecamp at 37signals, the July 2004 open-source release, and version 1.0 in December 2005",
      "url": "https://en.wikipedia.org/wiki/Ruby_on_Rails",
      "kind": "secondary"
    },
    {
      "claim": "The framework is built on convention over configuration: defaults derived from names and locations stand in for declarations the developer would otherwise have to write.",
      "title": "Ruby on Rails: extraction from Basecamp at 37signals, the July 2004 open-source release, and version 1.0 in December 2005",
      "url": "https://en.wikipedia.org/wiki/Ruby_on_Rails",
      "kind": "secondary"
    },
    {
      "claim": "The earlier link in this chain that this one is contrasted with is Fortran, whose designers deliberately treated the translator rather than the language as the real challenge — that is, they optimised for the machine rather than for the programmer writing it.",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    }
  ],
  "C.16": [
    {
      "claim": "The first version was developed by Joe Armstrong in 1986 at Ericsson, in a Prolog form over 1986 and 1987, with Robert Virding joining to help rewrite the prototype and improve concurrency performance. An early internal document is Armstrong’s Telephony Programming in Prolog, Ericsson internal report T/SU 86 036, dated 3 March 1986.",
      "title": "Erlang (programming language): the 1986 origin at Ericsson, the February 1998 in-house ban, and the December 1998 open-source release",
      "url": "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "Armstrong describes the language as designed for writing concurrent programs that run indefinitely, structured around lightweight concurrent processes that belong to the language rather than the operating system, with no shared memory and asynchronous message passing, plus mechanisms for changing code while the system runs. He calls the resulting model concurrency-oriented programming.",
      "title": "Armstrong, J., A History of Erlang, Third ACM SIGPLAN Conference on History of Programming Languages, San Diego, June 2007",
      "url": "https://dl.acm.org/doi/10.1145/1238844.1238850",
      "kind": "primary"
    },
    {
      "claim": "In March 1998 Ericsson announced a switch containing over a million lines of the language, reported to achieve an availability of nine nines, alongside an observed four-fold increase in development productivity.",
      "title": "Armstrong, J., A History of Erlang, Third ACM SIGPLAN Conference on History of Programming Languages, San Diego, June 2007",
      "url": "https://dl.acm.org/doi/10.1145/1238844.1238850",
      "kind": "primary"
    },
    {
      "claim": "In February 1998 Ericsson Radio Systems banned in-house use of the language for new products, citing a preference for non-proprietary languages. In December 1998 the implementation was open-sourced and most of the team resigned to form Bluetail AB. The ban was eventually relaxed and Armstrong was re-hired in 2004.",
      "title": "Erlang (programming language): the 1986 origin at Ericsson, the February 1998 in-house ban, and the December 1998 open-source release",
      "url": "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "Elixir was designed by José Valim and first appeared on 25 May 2012, running on the same virtual machine, influenced by Clojure, Erlang and Ruby. Valim’s stated aim was to increase the extensibility and productivity of that virtual machine while keeping compatibility with its existing tooling and ecosystem.",
      "title": "Elixir (programming language): design by José Valim, first appearance 25 May 2012, and its relationship to the Erlang virtual machine",
      "url": "https://en.wikipedia.org/wiki/Elixir_(programming_language)",
      "kind": "secondary"
    }
  ],
  "C.17": [
    {
      "claim": "In January 1999 Anders Hejlsberg formed a team to build a new language, at the time called COOL, standing for C-like Object Oriented Language. The name was not kept for trademark reasons; a naming committee was convened and wanted a reference to the C heritage. Other candidates considered included Safe C.",
      "title": "C Sharp (programming language): the COOL codename, the July 2000 release with the .NET Framework, and the Ecma standardisation adopted in December 2001",
      "url": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "The principal designers were Anders Hejlsberg, Scott Wiltamuth and Peter Golde. The first widely distributed implementation was released by Microsoft in July 2000 as part of the .NET Framework initiative.",
      "title": "C Sharp (programming language): the COOL codename, the July 2000 release with the .NET Framework, and the Ecma standardisation adopted in December 2001",
      "url": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "An Ecma technical committee task group was formed in September 2000 to produce a standard for the language, with a separate group formed at the same time for the common language infrastructure. Development of the standard began in November 2000 and it was adopted as an Ecma standard by the General Assembly of December 2001.",
      "title": "C Sharp (programming language): the COOL codename, the July 2000 release with the .NET Framework, and the Ecma standardisation adopted in December 2001",
      "url": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "The standard was based on a submission from Hewlett-Packard, Intel and Microsoft, and was later approved by the international standards bodies in 2003.",
      "title": "C Sharp (programming language): the COOL codename, the July 2000 release with the .NET Framework, and the Ecma standardisation adopted in December 2001",
      "url": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "The precedent for putting a language definition in a document nobody owns is COBOL, whose specifying committees were set up at a Pentagon meeting in May 1959 and whose specification was approved in January 1960, so that the document rather than any vendor’s compiler was the authority.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    }
  ],
  "C.18": [
    {
      "claim": "The language was conceived in September 2007 by Robert Griesemer, Rob Pike and Ken Thompson at Google, as an answer to problems seen while developing software infrastructure there. It first appeared on 10 November 2009 and stabilised at version 1 in early 2012.",
      "title": "Go (programming language): conception in September 2007 by Griesemer, Pike and Thompson, first appearance 10 November 2009, and Go 1 in early 2012",
      "url": "https://en.wikipedia.org/wiki/Go_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "Pike describes the environment it was designed for: server programs grown to tens of millions of lines of code, worked on by hundreds or thousands of programmers, updated daily, in one source tree with a distributed build system, written mostly in C++ with substantial amounts of Java and Python.",
      "title": "Pike, R., Go at Google: Language Design in the Service of Software Engineering, keynote at SPLASH 2012, Tucson, 25 October 2012",
      "url": "https://go.dev/talks/2012/splash.article",
      "kind": "primary"
    },
    {
      "claim": "Pike states that in that environment build times, even on large compilation clusters, had stretched to many minutes, even hours. The stated goals of the project were to eliminate slowness, eliminate clumsiness, improve effectiveness, and maintain or improve scale.",
      "title": "Pike, R., Go at Google: Language Design in the Service of Software Engineering, keynote at SPLASH 2012, Tucson, 25 October 2012",
      "url": "https://go.dev/talks/2012/splash.article",
      "kind": "primary"
    },
    {
      "claim": "Pike frames the work as being designed by and for people who write, read, debug and maintain large software systems, and says its purpose is improving the working environment rather than programming-language research — that it is more about software engineering than programming language research.",
      "title": "Pike, R., Go at Google: Language Design in the Service of Software Engineering, keynote at SPLASH 2012, Tucson, 25 October 2012",
      "url": "https://go.dev/talks/2012/splash.article",
      "kind": "primary"
    },
    {
      "claim": "The earlier link this argument is drawn from is the time-sharing system built at Dartmouth, demonstrated on 1 May 1964, where the barrier to using a computer was the hours-long turnaround of a single attempt rather than the difficulty of the language.",
      "title": "BASIC at Dartmouth, Dartmouth College",
      "url": "https://www.dartmouth.edu/basicfifty/basic.html",
      "kind": "primary"
    },
    {
      "claim": "The JavaScript Object Notation data interchange format, commonly abbreviated JSON, is specified by RFC 8259, which defines it as a lightweight, text-based, language-independent syntax for interchanging structured data.",
      "title": "T. Bray, editor, The JavaScript Object Notation (JSON) Data Interchange Format, RFC 8259, December 2017",
      "url": "https://www.rfc-editor.org/rfc/rfc8259",
      "kind": "primary"
    },
    {
      "claim": "The Extensible Markup Language, abbreviated XML, is defined by a W3C Recommendation as a subset of SGML whose goal is that documents conforming to it should be straightforwardly usable over the internet.",
      "title": "Extensible Markup Language (XML) 1.0 (Fifth Edition), W3C Recommendation",
      "url": "https://www.w3.org/TR/xml/",
      "kind": "primary"
    }
  ],
  "C.19": [
    {
      "claim": "It was announced publicly on 1 October 2012 as version 0.8, with the source released as open source under the Apache licence the same day, after roughly two years of internal development at Microsoft under the codename Strada. Anders Hejlsberg is among the designers.",
      "title": "TypeScript: the public release of version 0.8 on 1 October 2012, the internal development from 2010 under the codename Strada, and its gradual, structural typing",
      "url": "https://en.wikipedia.org/wiki/TypeScript",
      "kind": "secondary"
    },
    {
      "claim": "Rather than replacing the existing language, it is a superset of it: any existing file in the base language is a valid file in this one, which lets a codebase be converted file by file. Version 1.0 shipped in 2014.",
      "title": "TypeScript: the public release of version 0.8 on 1 October 2012, the internal development from 2010 under the codename Strada, and its gradual, structural typing",
      "url": "https://en.wikipedia.org/wiki/TypeScript",
      "kind": "secondary"
    },
    {
      "claim": "Its typing discipline is gradual and structural: convertibility between types depends on the parts of the type rather than on a declared name, so a value fits a type when its shape matches.",
      "title": "TypeScript: the public release of version 0.8 on 1 October 2012, the internal development from 2010 under the codename Strada, and its gradual, structural typing",
      "url": "https://en.wikipedia.org/wiki/TypeScript",
      "kind": "secondary"
    },
    {
      "claim": "It extends the base language with features aimed at large-scale programming, including optional static type checking, classes, interfaces and modules.",
      "title": "TypeScript: the public release of version 0.8 on 1 October 2012, the internal development from 2010 under the codename Strada, and its gradual, structural typing",
      "url": "https://en.wikipedia.org/wiki/TypeScript",
      "kind": "secondary"
    },
    {
      "claim": "The base language it is a superset of was prototyped in about ten days in May 1995 at Netscape and shipped into a client shared by everyone, which is why it could not subsequently be replaced or corrected.",
      "title": "Brendan Eich: the ten-day prototype of May 1995 at Netscape",
      "url": "https://en.wikipedia.org/wiki/Brendan_Eich",
      "kind": "secondary"
    }
  ],
  "C.2": [
    {
      "claim": "The Preliminary Report specifying the system was dated November 10, 1954, and was issued by the Programming Research Group of the Applied Science Division at IBM and distributed to prospective 704 customers.",
      "title": "Preliminary Report: Specifications for the IBM Mathematical Formula Translating System, IBM Programming Research Group, November 10, 1954",
      "url": "https://www.historyofinformation.com/detail.php?id=755",
      "kind": "secondary"
    },
    {
      "claim": "Backus proposed the project to his manager at IBM in 1953 and was given a budget to test its feasibility. The 704 was the target because it had floating-point operations built into the hardware, which Backus had lobbied for.",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    },
    {
      "claim": "Backus wrote: \"It was our belief that if FORTRAN, during its first months, were to translate any reasonable ‘scientific’ source program into an object program only half as fast as its hand coded counterpart, then acceptance of our system would be in serious danger.\" He continued: \"This belief caused us to regard the design of the translator as the real challenge, not the simple task of designing the language.\"",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    },
    {
      "claim": "What was planned as roughly a six-month effort took about three years: the language was largely defined by late 1954, the compiler was programmed and tested through 1955 and 1956, and shipment of the system to IBM 704 users began in April 1957.",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    },
    {
      "claim": "The system was described publicly as Backus et al., The FORTRAN Automatic Coding System, Proceedings of the Western Joint Computer Conference, Los Angeles, February 1957.",
      "title": "Backus, J. W. et al., The FORTRAN Automatic Coding System, Proc. Western Joint Computer Conference, Los Angeles, February 1957",
      "url": "https://dl.acm.org/doi/10.1145/1455567.1455599",
      "kind": "primary"
    },
    {
      "claim": "Customers’ foremost objection to a compiler was that it probably could not turn out object code as good as their best programmers could. Backus’s own retrospective judgement, given at the 1978 History of Programming Languages conference, was that prioritising object program efficiency over language design had been correct.",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    },
    {
      "claim": "The Programmer's Reference Manual for the FORTRAN automatic coding system for the IBM 704, dated October 1956, describes the general properties of a source program, including the fixed form in which a statement is punched on a card: a statement number occupies the first five columns, a character other than zero in the sixth column marks the card as a continuation of the one before it, the statement itself occupies columns seven to seventy-two, and the remaining columns are ignored by the compiler and used in practice to number the cards in a deck so that a dropped deck can be put back in order.",
      "title": "The FORTRAN Automatic Coding System for the IBM 704 EDPM, Programmer's Reference Manual, IBM, October 1956",
      "url": "https://bitsavers.org/pdf/ibm/704/704_FortranProgRefMan_Oct56.pdf",
      "kind": "primary"
    }
  ],
  "C.20": [
    {
      "claim": "Rust 1.0 was announced on 15 May 2015 by the Rust Core Team. The announcement states that it \"combines low-level control over performance with high-level convenience and safety guarantees\".",
      "title": "Announcing Rust 1.0, The Rust Core Team, The Rust Programming Language Blog, 15 May 2015",
      "url": "https://blog.rust-lang.org/2015/05/15/Rust-1.0/",
      "kind": "primary"
    },
    {
      "claim": "The announcement states that it achieves these goals \"without requiring a garbage collector or runtime\", which is what allows its libraries to serve as a drop-in substitute for C.",
      "title": "Announcing Rust 1.0, The Rust Core Team, The Rust Programming Language Blog, 15 May 2015",
      "url": "https://blog.rust-lang.org/2015/05/15/Rust-1.0/",
      "kind": "primary"
    },
    {
      "claim": "The announcement attributes the language’s distinctiveness to its type system, described as a refinement and codification of best practices drawn from experience with C and C++. It says newcomers can write low-level code without worrying about minor mistakes leading to mysterious crashes, and that experienced developers save time they would otherwise spend debugging.",
      "title": "Announcing Rust 1.0, The Rust Core Team, The Rust Programming Language Blog, 15 May 2015",
      "url": "https://blog.rust-lang.org/2015/05/15/Rust-1.0/",
      "kind": "primary"
    },
    {
      "claim": "The release marks a stability commitment: the announcement describes the preceding churn as ended and breaking changes as largely out of scope going forward, alongside a six-week release train.",
      "title": "Announcing Rust 1.0, The Rust Core Team, The Rust Programming Language Blog, 15 May 2015",
      "url": "https://blog.rust-lang.org/2015/05/15/Rust-1.0/",
      "kind": "primary"
    },
    {
      "claim": "The language was sponsored by Mozilla, which supported its development in the years before the 1.0 release.",
      "title": "Rust (programming language): origins and Mozilla sponsorship",
      "url": "https://en.wikipedia.org/wiki/Rust_(programming_language)",
      "kind": "secondary"
    }
  ],
  "C.21": [
    {
      "claim": "Kotlin was unveiled in July 2011 and open-sourced under the Apache licence in February 2012. Version 1.0 was released on 15 February 2016 and was the first officially stable release, with a commitment to long-term backwards compatibility from that point. It is named after Kotlin Island, off Saint Petersburg.",
      "title": "Kotlin: unveiled July 2011, open-sourced February 2012, version 1.0 on 15 February 2016, and Google’s Android announcements of 2017 and 2019",
      "url": "https://en.wikipedia.org/wiki/Kotlin",
      "kind": "secondary"
    },
    {
      "claim": "Google announced first-class support for Kotlin on Android in 2017, and on 7 May 2019 announced that it was its preferred language for Android application developers.",
      "title": "Kotlin: unveiled July 2011, open-sourced February 2012, version 1.0 on 15 February 2016, and Google’s Android announcements of 2017 and 2019",
      "url": "https://en.wikipedia.org/wiki/Kotlin",
      "kind": "secondary"
    },
    {
      "claim": "Swift was created by Chris Lattner, beginning in 2010, while he was director of the developer tools department at Apple. It was first announced at the company’s developer conference in June 2014 and shipped in the toolchain from Xcode version 6 in September 2014.",
      "title": "Swift (programming language): created by Chris Lattner from 2010, announced at WWDC in June 2014, shipped in Xcode 6 in September 2014",
      "url": "https://en.wikipedia.org/wiki/Swift_(programming_language)",
      "kind": "secondary"
    },
    {
      "claim": "On 2 June 2014 the conference application became the first publicly released application written in Swift.",
      "title": "Swift (programming language): created by Chris Lattner from 2010, announced at WWDC in June 2014, shipped in Xcode 6 in September 2014",
      "url": "https://en.wikipedia.org/wiki/Swift_(programming_language)",
      "kind": "secondary"
    }
  ],
  "C.22": [
    {
      "claim": "The relational model it implements was set out by Codd in A Relational Model of Data for Large Shared Data Banks, Communications of the ACM volume 13 number 6, pages 377 to 387, in 1970.",
      "title": "Codd, E. F., A Relational Model of Data for Large Shared Data Banks, Communications of the ACM 13(6):377-387, 1970",
      "url": "https://dl.acm.org/doi/10.1145/362384.362685",
      "kind": "primary"
    },
    {
      "claim": "Donald Chamberlin and Raymond Boyce of the IBM Research Laboratory in San Jose presented SEQUEL at the 1974 ACM SIGFIDET workshop in Ann Arbor, pages 249 to 264. Participants afterwards renamed the group SIGMOD.",
      "title": "Chamberlin, D. D. and Boyce, R. F., SEQUEL: A Structured English Query Language, Proc. 1974 ACM SIGFIDET Workshop on Data Description, Access and Control, Ann Arbor, May 1974, pp. 249-264",
      "url": "https://dl.acm.org/doi/10.1145/800296.811515",
      "kind": "primary"
    },
    {
      "claim": "The paper states that without resorting to the concepts of bound variables and quantifiers, the language identifies a set of simple operations on tabular structures which are shown to be of equivalent power to the first-order predicate calculus. Users are presented with a consistent set of keyword English templates which can be composed to form more complex queries.",
      "title": "Chamberlin, D. D. and Boyce, R. F., SEQUEL: A Structured English Query Language, Proc. 1974 ACM SIGFIDET Workshop on Data Description, Access and Control, Ann Arbor, May 1974, pp. 249-264",
      "url": "https://dl.acm.org/doi/10.1145/800296.811515",
      "kind": "primary"
    },
    {
      "claim": "It was intended as a database sublanguage for both the professional programmer and the more infrequent database user, refining an earlier language the same authors had worked on called SQUARE, and was built for a prototype intended to demonstrate the practicality of relational technology.",
      "title": "Chamberlin, D. D. and Boyce, R. F., SEQUEL: A Structured English Query Language, Proc. 1974 ACM SIGFIDET Workshop on Data Description, Access and Control, Ann Arbor, May 1974, pp. 249-264",
      "url": "https://dl.acm.org/doi/10.1145/800296.811515",
      "kind": "primary"
    },
    {
      "claim": "The name was later changed because SEQUEL was a trademark registered by the Hawker Siddeley aircraft company. Boyce died of a brain aneurysm in 1974, shortly after the work, and Chamberlin continued the development.",
      "title": "SQL: the renaming from SEQUEL owing to the Hawker Siddeley trademark, and the deaths and continuations around the 1974 work",
      "url": "https://en.wikipedia.org/wiki/SQL",
      "kind": "secondary"
    },
    {
      "claim": "The earlier link this trade is compared with is Fortran, shipped to users in April 1957, where a compiler began choosing machine instructions on the programmer’s behalf and the executed program stopped being the written one.",
      "title": "Backus, J., The History of Fortran I, II and III, in History of Programming Languages, ACM/Academic Press, 1978",
      "url": "https://cse.sc.edu/~mgv/csce330f12/Backus78.pdf",
      "kind": "primary"
    }
  ],
  "C.23": [
    {
      "claim": "The work began in 2004, when NVIDIA hired Ian Buck and paired him with John Nickolls, then director of architecture for GPU computing, to develop a research language called Brook into a product.",
      "title": "CUDA: the 2004 origin with Ian Buck and John Nickolls, the February 2007 initial release, and the July 2007 1.0 toolkit",
      "url": "https://en.wikipedia.org/wiki/CUDA",
      "kind": "secondary"
    },
    {
      "claim": "The initial public release was in February 2007, and version 1.0 of the toolkit, including the compiler, followed in mid-2007 with availability for the GeForce 8 Series, the Quadro FX 5600 and 4600, and Tesla. The version 1.0 programming guide is dated 23 June 2007.",
      "title": "CUDA: the 2004 origin with Ian Buck and John Nickolls, the February 2007 initial release, and the July 2007 1.0 toolkit",
      "url": "https://en.wikipedia.org/wiki/CUDA",
      "kind": "secondary"
    },
    {
      "claim": "The programming guide presents a model in which the programmer writes functions executed by many threads in parallel, organised into blocks and grids, and in which the distinct memory spaces available to those threads — per-thread, per-block shared, and device-wide — are part of the programming model rather than hidden by it.",
      "title": "NVIDIA CUDA Compute Unified Device Architecture Programming Guide, Version 1.0, 23 June 2007",
      "url": "https://developer.download.nvidia.com/compute/cuda/1.0/NVIDIA_CUDA_Programming_Guide_1.0.pdf",
      "kind": "primary"
    },
    {
      "claim": "Before this, using the hardware for general computation required expressing the problem in terms of the graphics pipeline — as textures, shaders and rendering passes — whether or not the problem had anything to do with graphics.",
      "title": "CUDA: the 2004 origin with Ian Buck and John Nickolls, the February 2007 initial release, and the July 2007 1.0 toolkit",
      "url": "https://en.wikipedia.org/wiki/CUDA",
      "kind": "secondary"
    },
    {
      "claim": "The coupling deliberately re-accepted here — code written against one manufacturer’s machine — is the one the COBOL committees were set up to remove at a Pentagon meeting in May 1959, by making a written specification rather than any vendor’s product the authority.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    }
  ],
  "C.24": [
    {
      "claim": "The first publicly available description of the markup language was a document called HTML Tags, first mentioned on the internet by Berners-Lee in late 1991. Apart from the hyperlink, its elements were strongly influenced by an in-house documentation format at CERN. Thirteen of those elements still existed in the fourth version of the language.",
      "title": "Raggett, D., A history of HTML, in Raggett on HTML 4, published by the World Wide Web Consortium",
      "url": "https://www.w3.org/People/Raggett/book4/ch02.html",
      "kind": "primary"
    },
    {
      "claim": "The proposal titled Cascading HTML style sheets is dated 10 October 1994, version 0.92, by Wium Lie, and describes itself as work in progress. It proposes a mapping between elements and presentation hints, with logic to make presentation decisions based on the user’s environment, such as screen size.",
      "title": "Lie, H. W., Cascading HTML style sheets — a proposal, version 0.92, 10 October 1994",
      "url": "https://w3.org/People/howcome/p/cascade.html",
      "kind": "primary"
    },
    {
      "claim": "The proposal’s defining property is in its name: sheets are designed to cascade, so that the user or browser specifies initial preferences and hands the remaining influence to the sheets referenced in the incoming document. Presentation is therefore negotiated between author and reader rather than dictated by either.",
      "title": "Lie, H. W., Cascading HTML style sheets — a proposal, version 0.92, 10 October 1994",
      "url": "https://w3.org/People/howcome/p/cascade.html",
      "kind": "primary"
    },
    {
      "claim": "Level 1 became a W3C Recommendation on 17 December 1996, authored by Wium Lie and Bert Bos. The work began in October 1994 while Lie was at CERN and continued from July 1995 at INRIA, the European host of the consortium, where Bos joined the project.",
      "title": "The World Wide Web Consortium Issues Cascading Style Sheets Recommendation, W3C press release, 17 December 1996",
      "url": "https://www.w3.org/press-releases/1996/css1-rec/",
      "kind": "primary"
    },
    {
      "claim": "The consortium’s account records that by 1994 the markup language had established itself as a universal document format, but that it was clear the language even with extensions would not meet authors’ demands for presentational capability.",
      "title": "The World Wide Web Consortium Issues Cascading Style Sheets Recommendation, W3C press release, 17 December 1996",
      "url": "https://www.w3.org/press-releases/1996/css1-rec/",
      "kind": "primary"
    },
    {
      "claim": "The markup language is now published as a living standard by the WHATWG rather than as numbered versions; the numbered name HTML5 refers to the generation of the language standardised in that era, and the living standard requires the UTF-8 encoding, treating no other as valid.",
      "title": "HTML Standard, WHATWG living standard",
      "url": "https://html.spec.whatwg.org/multipage/",
      "kind": "primary"
    },
    {
      "claim": "UTF-8 is defined by RFC 3629 as a transformation format of ISO 10646, encoding the Unicode character set as a sequence of bytes in a way that preserves the ASCII range unchanged.",
      "title": "F. Yergeau, UTF-8, a transformation format of ISO 10646, RFC 3629, November 2003",
      "url": "https://www.rfc-editor.org/rfc/rfc3629",
      "kind": "primary"
    },
    {
      "claim": "The Extensible Markup Language, abbreviated XML, is defined by a W3C Recommendation as a subset of SGML whose goal is that documents conforming to it should be straightforwardly usable over the internet.",
      "title": "Extensible Markup Language (XML) 1.0 (Fifth Edition), W3C Recommendation",
      "url": "https://www.w3.org/TR/xml/",
      "kind": "primary"
    },
    {
      "claim": "Cascading Style Sheets, abbreviated CSS, is the language for describing the presentation of documents, defined across a family of specifications collected by the W3C in its periodic snapshot.",
      "title": "CSS Snapshot, W3C",
      "url": "https://www.w3.org/TR/CSS/",
      "kind": "primary"
    }
  ],
  "C.25": [
    {
      "claim": "The first Unix shell was written by Ken Thompson and introduced with the first version of Unix in 1971. It was a command interpreter rather than a scripting language, and it was distributed with versions one through six, from 1971 to 1975.",
      "title": "Thompson shell: the first Unix shell, its 1971 introduction, and its redirection syntax against Multics",
      "url": "https://en.wikipedia.org/wiki/Thompson_shell",
      "kind": "secondary"
    },
    {
      "claim": "Its redirection syntax was notably compact by comparison with Multics, where redirecting input or output required separate commands to start and stop the redirection; here one appended a symbol and a filename to the command line.",
      "title": "Thompson shell: the first Unix shell, its 1971 introduction, and its redirection syntax against Multics",
      "url": "https://en.wikipedia.org/wiki/Thompson_shell",
      "kind": "secondary"
    },
    {
      "claim": "In a typewritten memo of 1964 Douglas McIlroy wrote about coupling programs like garden hose, so that a programmer could screw in another segment when data needed massaging another way. He raised the idea repeatedly over about nine years before Thompson implemented it, and credits Thompson with the vertical bar notation. McIlroy described the aftermath as an unforgettable orgy of one-liners.",
      "title": "The Origin of Unix Pipes, collecting McIlroy’s own accounts of the 1964 memo and the 1973 implementation",
      "url": "http://doc.cat-v.org/unix/pipes/",
      "kind": "secondary"
    },
    {
      "claim": "Accounts of when the implementation happened conflict. Some place Thompson’s overnight work in the autumn of 1973, but a notice circulated on 15 January 1973 already described the pipe system call, and pipes appear in the Version 3 manual of February 1973. The January dating is the better documented.",
      "title": "Pipes, Unix Heritage Society wiki — the dating evidence, including the notice of 15 January 1973 and the Version 3 manual",
      "url": "https://wiki.tuhs.org/doku.php?id=features%3Apipes",
      "kind": "primary"
    },
    {
      "claim": "The Bourne shell, written by Stephen Bourne at Bell Laboratories, was released in 1979 as the default shell of the seventh edition, replacing the earlier shell of the same name. Unlike its predecessor it was intended as a scripting language as well as an interactive interpreter.",
      "title": "Bourne shell: its authorship, its 1979 release with the seventh edition, and its scripting intent",
      "url": "https://en.wikipedia.org/wiki/Bourne_shell",
      "kind": "secondary"
    },
    {
      "claim": "Bash was written by Brian Fox for the GNU Project with support from the Free Software Foundation, as a free replacement for the Bourne shell. Coding began on 10 January 1988 and it was released as a beta, version 0.99, on 8 June 1989.",
      "title": "Bash (Unix shell): authorship by Brian Fox for the GNU Project, and the beta release of 8 June 1989",
      "url": "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
      "kind": "secondary"
    }
  ],
  "C.26": [
    {
      "claim": "Kleene introduced the notion of regular events in Representation of Events in Nerve Nets and Finite Automata, a RAND research memorandum of 1951, published in 1956 in Automata Studies, Annals of Mathematics Studies 34, pages 3 to 41, Princeton University Press. He offered the term as an alternative to an existing one and said he would welcome a more descriptive suggestion.",
      "title": "Kleene, S. C., Representation of Events in Nerve Nets and Finite Automata, RAND Research Memorandum RM-704, 1951; published in Automata Studies, Annals of Mathematics Studies 34, pp. 3-41, Princeton University Press, 1956",
      "url": "https://www.rand.org/pubs/research_memoranda/RM704.html",
      "kind": "primary"
    },
    {
      "claim": "Thompson published Regular expression search algorithm in Communications of the ACM volume 11 number 6, June 1968, pages 419 to 422, in the journal’s programming techniques department. The construction simulates a nondeterministic finite automaton in lockstep.",
      "title": "Thompson, K., Regular expression search algorithm, Communications of the ACM 11(6):419-422, June 1968",
      "url": "https://dl.acm.org/doi/10.1145/363347.363387",
      "kind": "primary"
    },
    {
      "claim": "Cox demonstrates the difference with the pattern formed of n optional letters followed by n required ones, matched against a string of n letters. A backtracking implementation tries one-then-zero for each optional element, giving two-to-the-n possibilities of which only the last leads to a match, so it requires exponential time and does not scale much beyond n of about 25.",
      "title": "Cox, R., Regular Expression Matching Can Be Simple And Fast (but is slow in Java, Perl, PHP, Python, Ruby, ...), January 2007",
      "url": "https://swtch.com/~rsc/regexp/regexp1.html",
      "kind": "primary"
    },
    {
      "claim": "Thompson’s algorithm instead maintains state lists of length approximately n over a string of length n, giving quadratic total time. The efficiency comes from tracking the set of reachable states without tracking which paths reached them: an automaton of n nodes has at most n reachable states at each step, although there may be two-to-the-n paths.",
      "title": "Cox, R., Regular Expression Matching Can Be Simple And Fast (but is slow in Java, Perl, PHP, Python, Ruby, ...), January 2007",
      "url": "https://swtch.com/~rsc/regexp/regexp1.html",
      "kind": "primary"
    },
    {
      "claim": "Cox observes that a slow implementation of a linear-time algorithm easily outperforms a fast implementation of an exponential-time one once the exponent is large enough.",
      "title": "Cox, R., Regular Expression Matching Can Be Simple And Fast (but is slow in Java, Perl, PHP, Python, Ruby, ...), January 2007",
      "url": "https://swtch.com/~rsc/regexp/regexp1.html",
      "kind": "primary"
    }
  ],
  "C.3": [
    {
      "claim": "A meeting held at the Pentagon on May 28 and 29, 1959 determined the need for three committees — short, intermediate and long range. The steering committee met on June 4, 1959 and named the whole activity the Committee on Data Systems Languages, abbreviated CODASYL. The intermediate range committee was formed but never operational and the long range committee was never formed.",
      "title": "CODASYL: formation and committee structure, summarising the May 1959 Pentagon meeting and the June 4, 1959 steering committee",
      "url": "https://en.wikipedia.org/wiki/CODASYL",
      "kind": "secondary"
    },
    {
      "claim": "The Short Range Committee was tasked with an interim specification for a common business-oriented language and was chaired by Joseph Wegstein of the National Bureau of Standards. Its membership included industry representatives alongside the Air Force, the Navy and the National Bureau of Standards.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    },
    {
      "claim": "The specifications were inspired to a great extent by FLOW-MATIC, invented by Grace Hopper, which was attractive to the group because it was the only language available to them that had actually been implemented. Its major contributions were long variable names, English words for commands, and the separation of data descriptions from instructions. Hopper served as a technical adviser to the Short Range Committee.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    },
    {
      "claim": "Attribution of COBOL to Hopper is disputed by a participant: Jean Sammet, one of its lead designers, said that Hopper \"was not the mother, creator, or developer of Cobol\".",
      "title": "COBOL: naming and attribution, quoting Jean Sammet on Hopper’s role",
      "url": "https://en.wikipedia.org/wiki/COBOL",
      "kind": "secondary"
    },
    {
      "claim": "The name COBOL was chosen at a meeting on 18 September 1959; rejected alternatives included BUSY, INFOSYL and COCOSYL. The specifications were approved by the executive committee on January 3, 1960 and printed by the government printing office as COBOL 60.",
      "title": "CODASYL: formation and committee structure, summarising the May 1959 Pentagon meeting and the June 4, 1959 steering committee",
      "url": "https://en.wikipedia.org/wiki/CODASYL",
      "kind": "secondary"
    },
    {
      "claim": "On December 6 and 7, 1960, essentially the same COBOL program was run on two different makes of computer — an RCA machine and a Remington-Rand UNIVAC machine — demonstrating that compatibility across manufacturers could be achieved.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    }
  ],
  "C.4": [
    {
      "claim": "The language was described in McCarthy’s paper Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I, published in Communications of the ACM in April 1960. The abstract describes LISP, for list processor, as a system developed for the IBM 704 by the Artificial Intelligence group at MIT, designed to facilitate experiments with a proposed system called the Advice Taker.",
      "title": "McCarthy, J., Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I, Communications of the ACM 3(4), April 1960",
      "url": "https://www.cs.tufts.edu/~nr/cs257/archive/john-mccarthy/recursive.pdf",
      "kind": "primary"
    },
    {
      "claim": "The paper builds everything from symbolic expressions — atoms and recursively constructed ordered pairs — and five elementary operations: atom, eq, car, cdr and cons. Conditional expressions and recursive definitions then define larger functions such as substitution, structural equality, list append and symbolic differentiation.",
      "title": "McCarthy, J., Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I, Communications of the ACM 3(4), April 1960",
      "url": "https://www.cs.tufts.edu/~nr/cs257/archive/john-mccarthy/recursive.pdf",
      "kind": "primary"
    },
    {
      "claim": "In the list-structure representation on that machine, a word is split into an address part and a decrement part, holding the locations of the subexpressions returned by car and cdr.",
      "title": "McCarthy, J., Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I, Communications of the ACM 3(4), April 1960",
      "url": "https://www.cs.tufts.edu/~nr/cs257/archive/john-mccarthy/recursive.pdf",
      "kind": "primary"
    },
    {
      "claim": "McCarthy became an assistant professor at MIT in the autumn of 1958, when he and Minsky founded the MIT Artificial Intelligence Project, and implementation of the language began that autumn.",
      "title": "McCarthy, J., History of Lisp, 12 February 1979, Stanford University — the author’s own account",
      "url": "http://www-formal.stanford.edu/jmc/history/lisp/node3.html",
      "kind": "primary"
    },
    {
      "claim": "McCarthy wrote: \"S.R. Russell noticed that eval could serve as an interpreter for LISP, promptly hand coded it, and we now had a programming language with an interpreter.\" He adds that the arrival of the interpreter tended to freeze the form of the language.",
      "title": "McCarthy, J., History of Lisp, 12 February 1979, Stanford University — the author’s own account",
      "url": "http://www-formal.stanford.edu/jmc/history/lisp/node3.html",
      "kind": "primary"
    },
    {
      "claim": "McCarthy wrote that the notation for representing functions as data was created \"for the purposes of the paper with no thought that it would be used to express LISP programs in practice\". The s-expression syntax was intended as an interim measure pending m-expressions, which never caught on.",
      "title": "McCarthy, J., History of Lisp, 12 February 1979, Stanford University — the author’s own account",
      "url": "http://www-formal.stanford.edu/jmc/history/lisp/node3.html",
      "kind": "primary"
    },
    {
      "claim": "Automatic reclamation of unused storage — garbage collection — is among the topics the 1960 paper covers, and the paper is its first published description.",
      "title": "McCarthy, J., Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I, Communications of the ACM 3(4), April 1960",
      "url": "https://www.cs.tufts.edu/~nr/cs257/archive/john-mccarthy/recursive.pdf",
      "kind": "primary"
    },
    {
      "claim": "In History of Lisp, dated 12 February 1979, McCarthy records that extracting a subexpression involved composing the extraction of the address part, and continuing along the list involved composing the extraction of the decrement part, so the compounds car, standing for Contents of the Address part of Register number, and its analogues cdr, cpr and ctr were defined. He adds that the motivation for implementing car and cdr separately was strengthened by the fact that the IBM 704 had instructions, connected with indexing, that made these operations easy to implement. The word register there means a memory location rather than a programmer-visible address register, which the 704 did not have.",
      "title": "John McCarthy, History of Lisp, 12 February 1979, section on Lisp prehistory",
      "url": "https://www-formal.stanford.edu/jmc/history/lisp/node2.html",
      "kind": "primary"
    }
  ],
  "C.5": [
    {
      "claim": "Thirteen representatives from Denmark, England, France, Germany, Holland, Switzerland and the United States conferred in Paris from January 11 to 16, 1960. Before the meeting Naur had worked out a completely new draft report, and the conference adopted that draft as the basis for its report.",
      "title": "ALGOL 60: the Paris conference of January 1960, its attendees, and the naming of Backus-Naur form at Knuth’s suggestion",
      "url": "https://en.wikipedia.org/wiki/ALGOL_60",
      "kind": "secondary"
    },
    {
      "claim": "Naur was drawn into the international discussions as editor of the ALGOL Bulletin, was selected as a member of the European language design group in November 1959, and in that capacity served as editor of the report resulting from the Paris meeting.",
      "title": "ALGOL 60: the Paris conference of January 1960, its attendees, and the naming of Backus-Naur form at Knuth’s suggestion",
      "url": "https://en.wikipedia.org/wiki/ALGOL_60",
      "kind": "secondary"
    },
    {
      "claim": "The attendees included Bauer, Rutishauser, Samelson, Vauquois, van Wijngaarden and Woodger from Europe, and Backus, Green, Katz, McCarthy, Perlis and Wegstein from the United States.",
      "title": "ALGOL 60: the Paris conference of January 1960, its attendees, and the naming of Backus-Naur form at Knuth’s suggestion",
      "url": "https://en.wikipedia.org/wiki/ALGOL_60",
      "kind": "secondary"
    },
    {
      "claim": "The notation Backus had devised for the earlier ALGOL specification was revised and expanded by Naur, and at Knuth’s suggestion it was renamed Backus-Naur form.",
      "title": "ALGOL 60: the Paris conference of January 1960, its attendees, and the naming of Backus-Naur form at Knuth’s suggestion",
      "url": "https://en.wikipedia.org/wiki/ALGOL_60",
      "kind": "secondary"
    },
    {
      "claim": "The report defines blocks delimited by begin and end, procedures that may be invoked recursively, procedures nested within one another, and lexical scope, in which a name refers to the declaration enclosing it in the text.",
      "title": "Naur, P. (ed.), Report on the Algorithmic Language ALGOL 60, Communications of the ACM 3(5), May 1960",
      "url": "https://softwarepreservation.computerhistory.org/ALGOL/report/Algol60_report_CACM_1960_June.pdf",
      "kind": "primary"
    },
    {
      "claim": "The language as officially defined contains no input or output facilities, so implementations supplied their own, in largely incompatible ways.",
      "title": "Naur, P. (ed.), Report on the Algorithmic Language ALGOL 60, Communications of the ACM 3(5), May 1960",
      "url": "https://softwarepreservation.computerhistory.org/ALGOL/report/Algol60_report_CACM_1960_June.pdf",
      "kind": "primary"
    },
    {
      "claim": "Hoare wrote of it, in his 1980 Turing Award lecture: \"Here is a language so far ahead of its time that it was not only an improvement on its predecessors but also on nearly all its successors.\"",
      "title": "Hoare, C. A. R., The Emperor’s Old Clothes, 1980 Turing Award Lecture, Communications of the ACM 24(2), February 1981",
      "url": "https://dl.acm.org/doi/10.1145/358549.358561",
      "kind": "primary"
    },
    {
      "claim": "It gave rise to CPL, Simula, BCPL, B, Pascal and C.",
      "title": "ALGOL 60: the Paris conference of January 1960, its attendees, and the naming of Backus-Naur form at Knuth’s suggestion",
      "url": "https://en.wikipedia.org/wiki/ALGOL_60",
      "kind": "secondary"
    },
    {
      "claim": "The immediately preceding attempt at a vendor-independent language, COBOL, was specified in English words for commands, on the reasoning that the specification should be readable by people who do not program.",
      "title": "Sammet, J. E., The Early History of COBOL, in History of Programming Languages, ACM SIGPLAN Notices, 1978",
      "url": "https://dl.acm.org/doi/10.1145/960118.808378",
      "kind": "primary"
    }
  ],
  "C.6": [
    {
      "claim": "At 4 a.m. on May 1, 1964, in the basement of College Hall at Dartmouth, John Kemeny and a student programmer typed RUN on neighbouring terminals and both got back correct answers to simple programs. Dartmouth’s own retrospective describes the scene as Dartmouth legend rather than as a documented record, and other accounts credit Kemeny and Thomas Kurtz jointly.",
      "title": "BASIC at Dartmouth, Dartmouth College — the institution’s own account of 1 May 1964",
      "url": "https://www.dartmouth.edu/basicfifty/basic.html",
      "kind": "primary"
    },
    {
      "claim": "The language was invented by John Kemeny and Thomas Kurtz. Kemeny began work on a draft of it in September 1963, having applied that year for a National Science Foundation grant to bring a GE-225 computer to campus and build a general-purpose time-sharing system; the grant was awarded despite referees’ serious doubts about staffing the work with undergraduates.",
      "title": "BASIC at Dartmouth, Dartmouth College — the institution’s own account of 1 May 1964",
      "url": "https://www.dartmouth.edu/basicfifty/basic.html",
      "kind": "primary"
    },
    {
      "claim": "The language ran on the Dartmouth Time-Sharing System, was implemented by undergraduate students, and opened to general users in June 1964. The original version had 14 statements and nine built-in functions.",
      "title": "Dartmouth BASIC: the Dartmouth Time-Sharing System, the original statement set, and its compile-and-go implementation",
      "url": "https://en.wikipedia.org/wiki/Dartmouth_BASIC",
      "kind": "secondary"
    },
    {
      "claim": "By the autumn of 1964 hundreds of students were using it on 20 terminals around campus, and faculty across disciplines were supplied with teletypes and began writing their own programs.",
      "title": "BASIC at Dartmouth, Dartmouth College — the institution’s own account of 1 May 1964",
      "url": "https://www.dartmouth.edu/basicfifty/basic.html",
      "kind": "primary"
    },
    {
      "claim": "Unlike many of the later implementations that carried the name, the original was a compiler operating compile-and-go: it converted an entire program at once into machine code, rather than translating it line by line at each run.",
      "title": "Dartmouth BASIC: the Dartmouth Time-Sharing System, the original statement set, and its compile-and-go implementation",
      "url": "https://en.wikipedia.org/wiki/Dartmouth_BASIC",
      "kind": "secondary"
    }
  ],
  "C.7": [
    {
      "claim": "Ritchie’s own account of the language was presented at the Second History of Programming Languages conference in Cambridge, Massachusetts in April 1993 and published in SIGPLAN Notices volume 28 number 3, pages 201 to 208.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "Ritchie describes B as the parent of the language and BCPL as its grandparent. BCPL was Martin Richards’s language and B was Ken Thompson’s; both were typeless, and the new language derived a type structure from a typeless ancestor.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "The language came into being in the years 1969 to 1973, in parallel with the early development of Unix, with the most creative period during 1972. It was created on a small machine as a tool to improve a meagre programming environment.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "By early 1973 the essentials of the modern language were complete, and the language and compiler were strong enough to permit rewriting the Unix kernel for the PDP-11 in it during the summer of that year. Ritchie notes that Thompson had made a brief attempt in 1972 to produce a system coded in an early version of the language, before structures existed, and gave up the effort.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "A second period of change peaked between 1977 and 1979, when portability of Unix was being demonstrated; the compiler was retargeted to other machines, particularly the Honeywell 635 and the IBM 360 and 370.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "The first widely available description was The C Programming Language, which appeared in 1978 and served as the language reference although it did not describe some additions that soon became common. Beginning in 1983 the ANSI X3J11 committee standardised the language.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    },
    {
      "claim": "Ritchie’s own assessment is that the most characteristic features — the relationship between arrays and pointers, and the declaration syntax — are also major sources of difficulty, and that the language offers limited support for modularisation, automatic memory management and strong type checking, while its pointer-oriented array model complicates optimisation.",
      "title": "Ritchie, D. M., The Development of the C Language, Second ACM SIGPLAN Conference on History of Programming Languages, April 1993; SIGPLAN Notices 28(3):201-208",
      "url": "https://dl.acm.org/doi/10.1145/154766.155580",
      "kind": "primary"
    }
  ],
  "C.8": [
    {
      "claim": "Kay’s own history of the language was published at the Second History of Programming Languages conference in 1993. In it he states that he centres the account on the events leading to the first version and its transition to the modern form, because most of the ideas occurred there.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "In a hallway conversation with Ted Kaehler and Dan Ingalls about how large a language would have to be to have real power, Kay boasted that he could define \"the most powerful language in the world\" in \"a page of code\". Their reply was \"Put up or shut up.\" No money was wagered. His confidence rested on McCarthy’s self-describing interpreter, which was about a page.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "Kay worked on it for roughly two weeks, arriving at PARC at 4 a.m. each day and working until 8, when Ingalls, Henry Fuchs, John Shoch and Steve Purcell would arrive to critique the morning’s progress.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "Kay writes that \"only a few days later, Dan Ingalls showed me the scheme working on the NOVA\". Ingalls had coded it in BASIC, adding a token scanner, a list maker and other details. Kay quotes Ingalls’s attitude as \"You just do it and it’s done.\"",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "The first working version emerged on the NOVA in roughly September 1972. It computed three plus four extremely slowly — Butler Lampson called it glacial — but always returned seven. It was later bootstrapped onto the Interim Dynabook, the ALTO, after the machine known as Bilbo came alive in early April 1973, and for many months was the only software system running on it.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "The first version did not include inheritance — not because it was thought unimportant, but because the single static inheritance of Simula seemed too limiting. Kay drew on the simplicity of LISP and the classes and objects of Simula, and described objects as little computers, \"a recursion on the notion of computer itself\".",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "The other bet of the period was hardware: Butler Lampson and Chuck Thacker offered to build Kay’s machine using the $230K he had earmarked for other computers. Thacker had his own wager with Bill Vitic that he could build an entire machine in three months; he started on November 22, 1972 and delivered in just over three.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    },
    {
      "claim": "The modern form followed after substantial revision, with a development environment containing most of the now-familiar tools including a class library browser and editor; Ingalls described its design and implementation at the fifth symposium on Principles of Programming Languages in Tucson in January 1978. The release version followed between 1980 and 1983.",
      "title": "Kay, A. C., The Early History of Smalltalk, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993 — the author’s own narrative",
      "url": "https://worrydream.com/EarlyHistoryOfSmalltalk/",
      "kind": "primary"
    }
  ],
  "C.9": [
    {
      "claim": "Stroustrup states the motivation as wanting to write efficient systems programs in the styles encouraged by Simula, so he added better type checking, data abstraction and object-oriented programming to C. His stated goal was \"to design a language in which I could write programs that were both efficient and elegant\", and the triggering tasks concerned distributing operating system facilities across a network.",
      "title": "Stroustrup, B., Bjarne Stroustrup’s FAQ — the author’s own answers on motivation, naming and design criteria",
      "url": "https://www.stroustrup.com/bs_faq.html",
      "kind": "primary"
    },
    {
      "claim": "Stroustrup gives the design criterion that \"a facility must not just be useful, it must be affordable\".",
      "title": "Stroustrup, B., Bjarne Stroustrup’s FAQ — the author’s own answers on motivation, naming and design criteria",
      "url": "https://www.stroustrup.com/bs_faq.html",
      "kind": "primary"
    },
    {
      "claim": "Work began in 1979. By October 1979 a pre-processor named Cpre added classes in the style of Simula to C, and by March 1980 it had been refined to support one real project and several experiments. The language it accepted was called C with Classes.",
      "title": "Stroustrup, B., A History of C++: 1979-1991, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993",
      "url": "https://www.stroustrup.com/hopl2.pdf",
      "kind": "primary"
    },
    {
      "claim": "The work and experience with C with Classes from 1979 to 1983 determined the shape of the successor. Cfront, the compiler front end, was designed and implemented between spring 1982 and summer 1983; the features added to C through it included the class, the derived class, strong type checking, inlining and default arguments.",
      "title": "Stroustrup, B., A History of C++: 1979-1991, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993",
      "url": "https://www.stroustrup.com/hopl2.pdf",
      "kind": "primary"
    },
    {
      "claim": "The first version was used internally at AT&T in August 1983. The name was suggested by Rick Mascitti; it was first used in December 1983, when it was edited into the final copies of the 1984 papers, and signifies evolution from C via the increment operator.",
      "title": "Stroustrup, B., Bjarne Stroustrup’s FAQ — the author’s own answers on motivation, naming and design criteria",
      "url": "https://www.stroustrup.com/bs_faq.html",
      "kind": "primary"
    },
    {
      "claim": "The first commercial implementation was released in October 1985, at the same time as the publication of the first edition of The C++ Programming Language.",
      "title": "Stroustrup, B., A History of C++: 1979-1991, HOPL-II, ACM SIGPLAN Notices 28(3), March 1993",
      "url": "https://www.stroustrup.com/hopl2.pdf",
      "kind": "primary"
    }
  ]
};

  window.CurriculumStorylines.get = function (languageId) {
    return Object.prototype.hasOwnProperty.call(STORYLINES, languageId) ? STORYLINES[languageId] : null;
  };

  // null, never [] — the same distinction the lessons draw: no seed and a
  // seed holding nothing must not look alike to the page.
  window.CurriculumStorylines.getSources = function (languageId) {
    return Object.prototype.hasOwnProperty.call(SOURCES, languageId) ? SOURCES[languageId] : null;
  };

  window.CurriculumStorylines.has = function (languageId) {
    return Object.prototype.hasOwnProperty.call(STORYLINES, languageId);
  };

  window.CurriculumStorylines.ids = function () {
    return Object.keys(STORYLINES);
  };
})();
