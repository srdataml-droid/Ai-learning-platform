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
