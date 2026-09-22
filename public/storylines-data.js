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
