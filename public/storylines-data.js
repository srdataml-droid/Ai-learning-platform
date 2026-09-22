// GENERATED FILE — do not edit by hand.
// Source: content/languages/*.json — regenerate with `npm run build:data`.
(function () {
  window.CurriculumStorylines = window.CurriculumStorylines || {};

  const STORYLINES = {
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
