// GENERATED FILE — do not edit by hand.
// Source: content/words/*.json — regenerate with `npm run build:data`.
(function () {
  window.CurriculumWords = window.CurriculumWords || {};

  const LISTS = [
  {
    "id": "C.1-assembly",
    "languageId": "C.1",
    "lang": "Assembly",
    "category": "Systems & Hardware",
    "summary": "Direct x86_64 machine instructions, hardware CPU registers, stack pointers, and system call execution.",
    "status": "unsourced",
    "rows": [
      {
        "code": "MOV dst, src",
        "means": "copies data between CPU registers or between memory and registers",
        "consequence": "x86_64 cannot move directly from memory to memory in a single instruction; data must load into a register first."
      },
      {
        "code": "ADD dst, src and SUB dst, src",
        "means": "performs arithmetic addition and subtraction on registers",
        "consequence": "Updates CPU condition flags (Zero Flag ZF, Carry Flag CF, Sign Flag SF, Overflow Flag OF)."
      },
      {
        "code": "CMP op1, op2",
        "means": "compares two operands by computing (op1 - op2) without saving result",
        "consequence": "Sets CPU flags based on the subtraction result, immediately followed by conditional jump instructions."
      },
      {
        "code": "JMP label",
        "means": "unconditional jump: changes instruction pointer (RIP) to target address",
        "consequence": "Direct hardware jump instruction, the assembly equivalent of goto."
      },
      {
        "code": "JE / JZ and JNE / JNZ",
        "means": "jump if equal (Zero Flag = 1) / jump if not equal",
        "consequence": "Conditional branch instructions used to implement if/else statements and loop termination checks."
      },
      {
        "code": "CALL label and RET",
        "means": "calls subroutine / returns to caller address",
        "consequence": "CALL pushes the next instruction address onto the stack; RET pops that address off the stack back into RIP."
      },
      {
        "code": "PUSH src and POP dst",
        "means": "pushes value onto stack (decrements RSP) / pops into register (increments RSP)",
        "consequence": "The x86_64 stack grows downward from high memory to low memory."
      },
      {
        "code": "RAX / EAX",
        "means": "64-bit / 32-bit accumulator register; stores function return values",
        "consequence": "By calling convention, functions return their numeric or pointer result in RAX."
      },
      {
        "code": "RSP (Stack Pointer)",
        "means": "points to the top of the current thread execution stack",
        "consequence": "Modified automatically by PUSH, POP, CALL, and RET, or adjusted manually via sub rsp, 32 to allocate local stack frames."
      },
      {
        "code": "RBP (Base Pointer)",
        "means": "frame pointer pointing to the base of current stack frame",
        "consequence": "Historically used to index function local variables and arguments; modern compilers often omit it (-fomit-frame-pointer)."
      },
      {
        "code": "RDI, RSI, RDX, RCX, R8, R9",
        "means": "System V AMD64 ABI registers holding function arguments",
        "consequence": "On Linux/macOS, the first 6 integer/pointer arguments to a function are passed in these registers, not on the stack."
      },
      {
        "code": "RIP (Instruction Pointer / Program Counter)",
        "means": "register holding the memory address of the next instruction to execute",
        "consequence": "Cannot be written directly with MOV; updated via jumps, calls, and returns."
      },
      {
        "code": "LEA dst, [src + offset]",
        "means": "Load Effective Address: computes address calculation without memory access",
        "consequence": "Commonly abused as a fast arithmetic trick: lea rax, [rdi + rsi*4 + 8] performs multiply and add in a single CPU clock cycle."
      },
      {
        "code": "SYSCALL",
        "means": "switches from user space (Ring 3) to OS kernel space (Ring 0)",
        "consequence": "Passes syscall number in RAX (e.g. 1 for sys_write on Linux) and arguments in RDI, RSI, RDX; invokes OS kernel services."
      },
      {
        "code": "NOP (0x90)",
        "means": "No Operation: advances instruction pointer by 1 byte without doing anything",
        "consequence": "Used for memory alignment of loop targets so instructions line up on 16-byte CPU cache line boundaries."
      }
    ],
    "slug": "assembly"
  },
  {
    "id": "C.25-bash",
    "languageId": "C.25",
    "lang": "Bash",
    "category": "Data & Storage",
    "summary": "Unix shell interpreter: connecting operating system processes, streams, exit codes, and automating system pipelines.",
    "status": "unsourced",
    "rows": [
      {
        "code": "| (pipe: cmd1 | cmd2)",
        "means": "connects standard output (stdout, fd 1) of cmd1 to standard input (stdin) of cmd2",
        "consequence": "Unix's fundamental pipeline operator. By default, error messages (stderr, fd 2) do NOT pass through the pipe."
      },
      {
        "code": "> file and >> file",
        "means": "redirects stdout to file (overwrite) / appends stdout to file",
        "consequence": "> truncates the destination file immediately; >> appends new lines to the end of the file."
      },
      {
        "code": "2>&1 (merge stderr into stdout)",
        "means": "redirects file descriptor 2 (stderr) to file descriptor 1 (stdout)",
        "consequence": "cmd > output.log 2>&1 sends both regular output and diagnostic error messages into the same log file."
      },
      {
        "code": "set -euo pipefail",
        "means": "the production safety preamble for all Bash shell scripts",
        "consequence": "-e exits immediately on command errors; -u exits on unset variables; -o pipefail catches failures inside piped commands."
      },
      {
        "code": "$VAR and ${VAR:-default_val}",
        "means": "expands variable / provides fallback if unset or empty",
        "consequence": "Always quote variables: \"$VAR\" prevents whitespace word-splitting and malicious pathname expansion."
      },
      {
        "code": "$? (exit code of last command)",
        "means": "status code returned by previous command (0 = success, 1-255 = error)",
        "consequence": "In Unix, an exit status of 0 means OK; any non-zero value indicates a failure code."
      },
      {
        "code": "$$ (process ID) and $! (background PID)",
        "means": "PID of current shell / PID of most recently launched background job",
        "consequence": "$$ is often used to generate unique temporary files: /tmp/tempfile.$$.txt."
      },
      {
        "code": "$# (arg count), $0 (script name), $@ (all args)",
        "means": "positional argument metadata inside shell scripts and functions",
        "consequence": "\"$@\" preserves exact argument boundary quotes when forwarding arguments to another command."
      },
      {
        "code": "cmd1 && cmd2 and cmd1 || cmd2",
        "means": "execute cmd2 only if cmd1 succeeded / execute only if cmd1 failed",
        "consequence": "mkdir -p dir && cd dir ensures you only change directory if creating it succeeded."
      },
      {
        "code": "if [ -f \"$file\" ]; then ... fi",
        "means": "tests conditions: -f (file exists), -d (directory), -z (string empty)",
        "consequence": "Inside [[ ... ]], modern Bash provides advanced string regex matching (=~) and boolean operators (&&, ||)."
      },
      {
        "code": "for item in \"${array[@]}\"; do ... done",
        "means": "loops through array elements safely preserving spaces",
        "consequence": "Looping without quotes (for x in $items) breaks on filenames containing spaces."
      },
      {
        "code": "while read -r line; do ... done < file.txt",
        "means": "reads a file line by line without corrupting backslashes",
        "consequence": "The -r flag prevents backslashes from acting as escape characters, preserving exact file contents."
      },
      {
        "code": "export ENV_VAR=\"value\"",
        "means": "marks variable to be inherited by child processes",
        "consequence": "Without export, variables are private to the current shell process and invisible to subcommands."
      },
      {
        "code": "chmod +x script.sh and chown user:group file",
        "means": "makes file executable / changes user and group ownership",
        "consequence": "chmod 755 grants read/write/execute to owner, read/execute to group and others."
      },
      {
        "code": "grep -rn \"pattern\" dir/",
        "means": "searches text matching regex recursively with line numbers",
        "consequence": "-r searches directories recursively; -n prints line numbers; -i enables case-insensitive matching."
      },
      {
        "code": "sed 's/old/new/g' file.txt",
        "means": "stream editor replacing text patterns",
        "consequence": "The s command substitutes; the g flag replaces all occurrences across the line rather than just the first."
      },
      {
        "code": "awk '{print $1, $3}' file.txt",
        "means": "pattern-directed column processing language",
        "consequence": "Splits lines by whitespace by default; $1 is the first column, $NF is the last column, NR is the line number."
      },
      {
        "code": "xargs -I {} cmd {}",
        "means": "builds and executes commands from standard input lines",
        "consequence": "find . -name \"*.tmp\" | xargs rm -f deletes all matching files efficiently in batch chunks."
      },
      {
        "code": "trap \"cleanup_fn\" EXIT INT TERM",
        "means": "registers signals and exit handlers for automatic cleanup",
        "consequence": "Ensures temporary directories and locks are removed when the script finishes or is aborted with Ctrl+C."
      },
      {
        "code": "$(command)",
        "means": "command substitution: runs command and captures its standard output",
        "consequence": "CURRENT_DATE=$(date +%Y-%m-%d) stores the command's terminal output directly into a variable."
      }
    ],
    "slug": "bash"
  },
  {
    "id": "C.7-c",
    "languageId": "C.7",
    "lang": "C",
    "category": "Systems & Hardware",
    "summary": "The foundational systems language: direct memory pointers, structs, explicit allocations, and zero runtime overhead.",
    "status": "unsourced",
    "rows": [
      {
        "code": "#include <stdio.h> / <stdlib.h>",
        "means": "preprocessor directive importing standard library header prototypes",
        "consequence": "Copies the header declaration signatures into the file before compilation so the compiler knows function arguments and return types."
      },
      {
        "code": "#define MACRO_NAME value and #ifdef / #ifndef / #endif",
        "means": "macro text substitution and conditional compilation guards",
        "consequence": "#ifndef HEADER_H prevents duplicate declaration errors when headers are included multiple times across compilation units."
      },
      {
        "code": "int, char, float, double, void",
        "means": "primitive numeric, character, and untyped data types",
        "consequence": "Directly map to hardware register sizes: char is 1 byte, int is typically 4 bytes, double is 8-byte IEEE 754 floating point."
      },
      {
        "code": "int *ptr = &x; (pointers and address-of)",
        "means": "variable holding the physical RAM memory address of another variable",
        "consequence": "*ptr accesses the value stored at that address (dereferencing); &x extracts the hexadecimal memory address of variable x."
      },
      {
        "code": "malloc(size_t size) and free(ptr)",
        "means": "allocates uninitialized heap memory / releases heap memory",
        "consequence": "Every malloc must be paired with exactly one free. Forgetting free causes memory leaks; using ptr after free causes undefined behavior."
      },
      {
        "code": "calloc(num, size) and realloc(ptr, new_size)",
        "means": "allocates zeroed memory / resizes existing heap allocation",
        "consequence": "calloc clears all bytes to zero; realloc resizes existing allocations, copying contents to a new memory block if necessary."
      },
      {
        "code": "struct User { int id; char name[32]; };",
        "means": "contiguous composite data layout in memory",
        "consequence": "Groups heterogeneous fields into a single struct. Access fields with dot (.) on values, or arrow (->) on pointers (user_ptr->id)."
      },
      {
        "code": "typedef struct User User_t;",
        "means": "creates an alias name for a type",
        "consequence": "Allows referring to User_t directly without having to write struct User on every variable declaration."
      },
      {
        "code": "union Data { int i; float f; char str[20]; };",
        "means": "shares the same memory location between multiple fields",
        "consequence": "The union is only as large as its largest member. Writing to one field overwrites the data of all other fields."
      },
      {
        "code": "enum Status { OK = 0, ERR_NOT_FOUND, ERR_SERVER };",
        "means": "enumerated named integer constants",
        "consequence": "Assigns sequential integers starting at 0 unless explicitly specified, making code more readable than raw magic numbers."
      },
      {
        "code": "const int x vs int * const ptr vs const int *ptr",
        "means": "immutable value / constant pointer address / pointer to constant value",
        "consequence": "Read backwards from right to left: const int *ptr is a pointer to constant integer (the data cannot be modified through this pointer)."
      },
      {
        "code": "static int counter;",
        "means": "limits symbol visibility to the current file or preserves local state",
        "consequence": "Inside a function, static preserves value across multiple calls; at file level, keeps functions and globals private."
      },
      {
        "code": "sizeof(type_or_variable)",
        "means": "computes byte size at compile time",
        "consequence": "Always use sizeof(*ptr) with malloc: malloc(sizeof(int) * count) guarantees correct byte allocation on any CPU architecture."
      },
      {
        "code": "printf(\"%d %s %p\\n\", count, str, ptr)",
        "means": "formatted print to standard output",
        "consequence": "%d formats signed integer, %s prints null-terminated char array, %p prints memory address in hexadecimal format."
      },
      {
        "code": "snprintf(buffer, sizeof(buffer), format, ...)",
        "means": "safely formats string into a fixed-size memory buffer",
        "consequence": "Guarantees null termination and prevents catastrophic buffer overflow attacks that plague unsafe legacy sprintf()."
      },
      {
        "code": "fopen(path, mode) and fclose(fp)",
        "means": "opens a file stream / flushes and closes the stream",
        "consequence": "mode can be \"r\" (read), \"w\" (overwrite), \"a\" (append), or \"rb\" (binary). Always check if fp == NULL before reading."
      },
      {
        "code": "fread() and fwrite()",
        "means": "reads / writes raw binary data from or to a file stream",
        "consequence": "Reads directly into memory buffers without string translation, essential for binary protocols, image processing, and databases."
      },
      {
        "code": "strlen() vs sizeof() on strings",
        "means": "scans until null byte '\\0' / returns allocated buffer size",
        "consequence": "char str[10] = \"hi\"; -> strlen is 2, sizeof is 10. String functions require strings to end with a null terminator character '\\0'."
      },
      {
        "code": "memcpy(dst, src, n) and memset(ptr, val, n)",
        "means": "fast memory block copy / fills memory block with byte value",
        "consequence": "memset(buf, 0, sizeof(buf)) zeroes out memory. memcpy is optimized using CPU SIMD vector registers."
      },
      {
        "code": "NULL",
        "means": "pointer literal representing memory address 0",
        "consequence": "Dereferencing NULL triggers an immediate hardware segmentation fault (SIGSEGV) by the CPU memory management unit."
      },
      {
        "code": "int main(int argc, char *argv[])",
        "means": "program entry point receiving command-line arguments",
        "consequence": "argc is the argument count; argv is an array of null-terminated string pointers (argv[0] is the program binary path)."
      },
      {
        "code": "errno and perror(\"Failed\")",
        "means": "system error number and diagnostic printer",
        "consequence": "When system calls (like open or socket) fail, they return -1 and set errno. perror prints the human-readable OS error string."
      },
      {
        "code": "void (*fn_ptr)(int) = &my_func;",
        "means": "pointer holding the memory address of an executable function",
        "consequence": "Allows passing functions as callbacks to other routines, powering event loops, sorting comparators (qsort), and dynamic tables."
      }
    ],
    "slug": "c"
  },
  {
    "id": "C.17-c",
    "languageId": "C.17",
    "lang": "C#",
    "category": "Backend & Enterprise",
    "summary": "Modern, type-safe, multi-paradigm language driving the cross-platform .NET runtime, cloud microservices, and enterprise systems.",
    "status": "unsourced",
    "rows": [
      {
        "code": "namespace Company.App; and using System.Text.Json;",
        "means": "organizes code into logical scopes / imports external namespaces",
        "consequence": "File-scoped namespaces (C# 10+) eliminate unnecessary indentation levels across entire source files."
      },
      {
        "code": "public class / record / struct",
        "means": "reference type / immutable data-carrier / lightweight value type",
        "consequence": "records provide value-based equality out-of-the-box; structs are allocated on the stack to minimize GC memory pressure."
      },
      {
        "code": "public string Name { get; set; }",
        "means": "auto-implemented property with encapsulation",
        "consequence": "Provides getters and setters without boilerplate. Use { get; init; } to allow setting values only during object initialization."
      },
      {
        "code": "async Task<T> MethodAsync() and await",
        "means": "asynchronous non-blocking task-based execution",
        "consequence": "Releases the operating system thread back to the thread pool while awaiting I/O operations, maximizing server throughput."
      },
      {
        "code": "LINQ: items.Where(x => x.Active).Select(x => x.Name).ToList()",
        "means": "Language Integrated Query for querying collections and databases",
        "consequence": "Executes seamlessly in memory or translates directly into optimized SQL queries when using Entity Framework Core."
      },
      {
        "code": "Null-conditional: user?.Profile?.AvatarUrl",
        "means": "evaluates member access only if the target is non-null",
        "consequence": "Returns null safely if any reference in the chain is null, eliminating deeply nested if (obj != null) checks."
      },
      {
        "code": "Null-coalescing: val ?? fallback and val ??= fallback",
        "means": "provides fallback value / assigns fallback only if currently null",
        "consequence": "string display = username ?? \"Guest\"; assigns \"Guest\" if username is null."
      },
      {
        "code": "Nullable reference types: string? vs string",
        "means": "compiler warnings when accessing potentially null references",
        "consequence": "When enabled, the compiler treats all standard types as non-null by default, catching NullReferenceException before deployment."
      },
      {
        "code": "using var stream = new FileStream(...);",
        "means": "disposes IDisposable resources automatically when scope ends",
        "consequence": "Modern using declaration automatically invokes stream.Dispose() at the end of the enclosing block, preventing leaks."
      },
      {
        "code": "Pattern matching: switch (obj) { case Circle c => ... }",
        "means": "tests objects against type shapes, ranges, and property patterns",
        "consequence": "switch expressions return values directly: var fee = user switch { VipUser => 0, RegularUser => 10, _ => 20 };."
      },
      {
        "code": "String interpolation: $\"User {user.Name} has balance {balance:C}\"",
        "means": "interpolates expressions and formats directly in strings",
        "consequence": "The :C format specifier automatically renders local currency formatting according to the current culture."
      },
      {
        "code": "Span<T> and Memory<T>",
        "means": "allocation-free contiguous memory slicing over arrays and strings",
        "consequence": "Allows slicing and parsing massive text or byte streams with zero heap allocation, powering high-performance .NET servers."
      },
      {
        "code": "Extension method: public static void Print(this string s)",
        "means": "adds methods to existing types without modifying their source code",
        "consequence": "Defined in a static class with the this keyword on the first parameter; invoked as if it were an instance method."
      },
      {
        "code": "record Pos(int X, int Y); with { X = 10 }",
        "means": "non-destructive mutation on immutable records",
        "consequence": "Creates a shallow copy of the record with specified properties updated, preserving immutability."
      },
      {
        "code": "Dependency Injection: services.AddScoped<IOrderService, OrderService>()",
        "means": "built-in IoC container lifecycle management in ASP.NET Core",
        "consequence": "Transient creates new instance each time; Scoped creates one per HTTP request; Singleton creates one for the entire application."
      }
    ],
    "slug": "c-"
  },
  {
    "id": "C.9-c",
    "languageId": "C.9",
    "lang": "C++",
    "category": "Systems & Hardware",
    "summary": "High-performance systems programming with zero-overhead abstractions, RAII resource management, and modern generic STL.",
    "status": "unsourced",
    "rows": [
      {
        "code": "#include <iostream> and std::cout << val << std::endl",
        "means": "standard stream input/output library",
        "consequence": "Type-safe stream operators (<< and >>) replace C's printf format specifiers, automatically formatting any custom object."
      },
      {
        "code": "class vs struct in C++",
        "means": "user-defined types: private by default / public by default",
        "consequence": "In C++, classes and structs are identical except for default visibility: class members are private by default; struct members are public."
      },
      {
        "code": "constructor and destructor (~ClassName)",
        "means": "initialization on creation / automated cleanup on destruction",
        "consequence": "The destructor runs deterministically as soon as an object goes out of scope, releasing memory, closing sockets, or freeing locks."
      },
      {
        "code": "RAII (Resource Acquisition Is Initialization)",
        "means": "binds lifecycle of physical resources to C++ object scope",
        "consequence": "The core architectural superpower of C++. Guarantees no resource leaks even if unexpected exceptions are thrown."
      },
      {
        "code": "std::vector<T>",
        "means": "contiguous, dynamically resizing heap array",
        "consequence": "The default collection in C++. Provides O(1) random access and cache-friendly contiguous memory locality."
      },
      {
        "code": "std::string",
        "means": "dynamically resizing managed character string",
        "consequence": "Automatically handles memory allocation and null termination, eliminating C-style buffer overflow vulnerabilities."
      },
      {
        "code": "std::unordered_map<Key, Value>",
        "means": "hash table offering average O(1) key-value lookups",
        "consequence": "Requires Key to implement std::hash and equality operator (==); use std::map if you need keys kept in sorted order."
      },
      {
        "code": "std::unique_ptr<T> and std::make_unique<T>()",
        "means": "smart pointer with exclusive, single ownership of a heap resource",
        "consequence": "Cannot be copied, only moved (std::move). Automatically deletes the underlying resource when the pointer goes out of scope."
      },
      {
        "code": "std::shared_ptr<T> and std::make_shared<T>()",
        "means": "smart pointer with reference-counted shared ownership",
        "consequence": "Maintains an atomic reference counter. Frees the resource only when the last shared_ptr pointing to it is destroyed."
      },
      {
        "code": "std::move(val) and rvalue reference (T&&)",
        "means": "casts an lvalue to an rvalue to transfer ownership without copying",
        "consequence": "Eliminates expensive deep copies of vectors, strings, and buffers by simply stealing their internal heap pointers."
      },
      {
        "code": "auto keyword",
        "means": "instructs the compiler to deduce the type automatically",
        "consequence": "auto it = map.begin() deduces std::unordered_map<std::string, int>::iterator without verbose manual type typing."
      },
      {
        "code": "template<typename T>",
        "means": "defines generic functions or classes instantiated at compile time",
        "consequence": "Generates zero-overhead specialized machine code for each concrete type used, delivering high speed with generic reuse."
      },
      {
        "code": "constexpr and consteval",
        "means": "forces code execution and value computation at compile time",
        "consequence": "Enables complex mathematical tables or validation logic to run during compilation, resulting in zero runtime CPU cycles."
      },
      {
        "code": "lambda: [capture](params) -> ret { body }",
        "means": "anonymous inline function object with variable capture",
        "consequence": "[=] captures outer variables by value; [&] captures by reference. Essential for algorithms like std::sort and multithreading."
      },
      {
        "code": "virtual void method() = 0; (pure virtual)",
        "means": "defines an abstract method interface that derived classes must implement",
        "consequence": "Enables runtime polymorphism via virtual method tables (vtables), allowing base class pointers to call derived overrides."
      },
      {
        "code": "override specifier",
        "means": "validates that a method overrides a virtual method in base class",
        "consequence": "Prevents subtle bugs where a typo in a derived method name or signature silently creates a new method instead of overriding."
      },
      {
        "code": "namespace name { ... }",
        "means": "prevents name collisions between libraries and modules",
        "consequence": "Use explicit namespace qualification (e.g. std::vector) rather than using namespace std;, which causes global namespace pollution."
      },
      {
        "code": "nullptr",
        "means": "type-safe null pointer literal (replaces integer 0 / NULL)",
        "consequence": "Has type std::nullptr_t, preventing ambiguous function overload resolution between integer 0 and pointer null."
      },
      {
        "code": "static_cast<T>(v) vs dynamic_cast<T>(v)",
        "means": "compile-time type conversion / runtime checked polymorphic downcast",
        "consequence": "dynamic_cast safely checks polymorphic class hierarchies at runtime, returning nullptr if the cast is invalid."
      },
      {
        "code": "std::optional<T>",
        "means": "container holding either a valid value or nothing (std::nullopt)",
        "consequence": "Eliminates sentinel values (like -1 or NULL pointers) for operations that may fail to produce a result."
      },
      {
        "code": "std::ranges and views (C++20)",
        "means": "composable, lazy functional pipelines over collections",
        "consequence": "auto res = vec | std::views::filter(is_even) | std::views::transform(square) executes lazily without allocating intermediate vectors."
      },
      {
        "code": "std::mutex and std::lock_guard<std::mutex>",
        "means": "mutual exclusion lock using RAII to prevent thread deadlocks",
        "consequence": "lock_guard locks the mutex on construction and automatically unlocks it when exiting scope, ensuring thread safety."
      }
    ],
    "slug": "c--"
  },
  {
    "id": "C.24-css",
    "languageId": "C.24",
    "lang": "CSS",
    "category": "Web & Frontend",
    "summary": "Cascading Style Sheets: layout engines, the box model, responsive typography, and visual animation systems.",
    "status": "unsourced",
    "rows": [
      {
        "code": "* { box-sizing: border-box; }",
        "means": "includes padding and border inside total width and height",
        "consequence": "The universal CSS reset invariant. With content-box, adding 10px padding makes a 100px element 120px wide, causing layout overflow."
      },
      {
        "code": "element, .class, #id",
        "means": "tag selector / class selector / unique ID selector",
        "consequence": "ID selectors (#) have high specificity (1-0-0) that makes them hard to override. Prefer classes (.class, specificity 0-1-0) for maintainable styles."
      },
      {
        "code": "margin vs padding",
        "means": "space outside the border / space inside the border",
        "consequence": "Margins separate sibling elements and collapse vertically. Padding adds breathing room between the border and the element's inner content."
      },
      {
        "code": "display: flex",
        "means": "activates one-dimensional flexible box layout engine",
        "consequence": "Lays out direct children along a single main axis (row or column) with automated space distribution and alignment."
      },
      {
        "code": "flex-direction: row | column",
        "means": "sets the primary axis direction of flex items",
        "consequence": "row (default) arranges items horizontally left-to-right; column arranges items vertically top-to-bottom."
      },
      {
        "code": "justify-content vs align-items",
        "means": "alignment along the main axis / alignment along the cross axis",
        "consequence": "justify-content (flex-start, center, space-between) aligns along the flow direction; align-items aligns perpendicular to it."
      },
      {
        "code": "gap: 1rem",
        "means": "space between flex or grid items",
        "consequence": "Replaces messy margin hacks on children. Automatically handles spacing without unwanted outer margins on first or last items."
      },
      {
        "code": "flex: 1 1 auto (grow, shrink, basis)",
        "means": "controls how a flex item expands or contracts",
        "consequence": "flex-grow allows the item to fill leftover space; flex-shrink allows it to contract under overflow; flex-basis sets initial size."
      },
      {
        "code": "display: grid",
        "means": "activates two-dimensional grid layout engine",
        "consequence": "Simultaneously coordinates rows and columns with explicit track definitions and gap spacing."
      },
      {
        "code": "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))",
        "means": "responsive auto-wrapping grid with no media queries",
        "consequence": "Creates as many 280px+ columns as will fit into the container width, expanding them equally to fill remaining space."
      },
      {
        "code": "position: static | relative | absolute | fixed | sticky",
        "means": "determines how an element is positioned in the viewport or parent",
        "consequence": "relative keeps space in flow; absolute removes from flow relative to closest positioned ancestor; fixed pins to viewport; sticky sticks on scroll."
      },
      {
        "code": "top / right / bottom / left and z-index",
        "means": "offset distances from anchor / stacking order along the Z-axis",
        "consequence": "z-index only takes effect on positioned elements (relative, absolute, fixed, sticky) or flex/grid children."
      },
      {
        "code": "width, max-width: 100%, min-width",
        "means": "explicit size, fluid ceiling limit, and minimum floor size",
        "consequence": "max-width: 100% prevents images, tables, and containers from breaking out of parent boundaries on mobile screens."
      },
      {
        "code": "rem vs em vs vh / vw vs %",
        "means": "font-relative and viewport-relative length units",
        "consequence": "1rem is relative to root <html> font-size (respecting user browser zoom); em is relative to parent element; vh/vw are 1% of viewport."
      },
      {
        "code": "color vs background-color",
        "means": "text foreground color / container background surface color",
        "consequence": "Always ensure at least a 4.5:1 contrast ratio between foreground and background colors to satisfy WCAG AA accessibility standards."
      },
      {
        "code": "font-family: 'Inter', system-ui, sans-serif",
        "means": "prioritized font fallback stack",
        "consequence": "The browser attempts to render the first font; if not installed or loaded, falls back down the list to system defaults."
      },
      {
        "code": "line-height: 1.5 to 1.7",
        "means": "vertical distance between text baselines",
        "consequence": "Using unitless numbers (e.g. 1.5) scales proportionally with any font-size, preventing clipped descenders and cramped paragraphs."
      },
      {
        "code": "overflow: hidden | auto | scroll",
        "means": "behavior when content exceeds its container bounds",
        "consequence": "auto adds scrollbars only when content overflows; hidden clips overflow cleanly; visible (default) spills outside container bounds."
      },
      {
        "code": "opacity vs visibility: hidden vs display: none",
        "means": "visual transparency / invisible but in layout / completely removed from layout",
        "consequence": "display: none removes element from layout and accessibility tree; visibility: hidden keeps layout space; opacity changes transparency."
      },
      {
        "code": "transition: all 0.2s cubic-bezier(...)",
        "means": "smoothly animates property changes between states",
        "consequence": "Animate transform and opacity for smooth 60fps GPU acceleration; avoid animating width, height, or top which trigger CPU layout reflows."
      },
      {
        "code": "transform: translate(x, y) rotate(deg) scale(s)",
        "means": "GPU-accelerated geometric transformations",
        "consequence": "Transforms do not trigger browser layout reflow or repaint loops, making them the primary choice for fluid UI animations."
      },
      {
        "code": "@keyframes spin { from { ... } to { ... } }",
        "means": "defines multi-step CSS keyframe animation sequence",
        "consequence": "Paired with animation: spin 1s linear infinite to create continuous or complex visual transitions."
      },
      {
        "code": ":hover, :focus-visible, :active, :disabled",
        "means": "interactive user state pseudo-classes",
        "consequence": ":focus-visible displays keyboard focus rings only for keyboard navigators, keeping mouse clicks clean while preserving accessibility."
      },
      {
        "code": ":nth-child(even | odd | 2n+1)",
        "means": "targets elements by their numeric position among siblings",
        "consequence": "Used for zebra striping tables, alternating grid cards, or styling specific rows without extra HTML classes."
      },
      {
        "code": "::before and ::after",
        "means": "pseudo-elements that insert decorative content into CSS",
        "consequence": "Requires content: '' property. Used for icons, tooltips, accent lines, and overlays without polluting the HTML DOM."
      },
      {
        "code": "--primary-color: #2563eb and var(--primary-color)",
        "means": "CSS custom properties (design tokens and variables)",
        "consequence": "Unlike preprocessor variables (Sass), CSS variables update dynamically at runtime and cascade through DOM subtrees, powering dark mode."
      },
      {
        "code": "calc(100% - 2rem)",
        "means": "performs mathematical calculations across mixed units",
        "consequence": "Allows subtracting absolute lengths (e.g. 2rem) from fluid percentages (100%), solving complex responsive layouts."
      },
      {
        "code": "clamp(min, preferred, max)",
        "means": "bounds a value between an absolute floor and ceiling",
        "consequence": "clamp(1rem, 2.5vw, 2.5rem) creates fluid responsive typography that scales with the screen without ever getting too small or huge."
      },
      {
        "code": "@media (min-width: 768px) { ... }",
        "means": "mobile-first responsive viewport breakpoint query",
        "consequence": "Applies styling rules only when the screen is at least 768px wide, allowing clean progression from mobile to tablet to desktop."
      },
      {
        "code": "@container (min-width: 400px) { ... }",
        "means": "component-level container queries",
        "consequence": "Applies styles based on the width of the parent container rather than the entire browser window, enabling truly modular components."
      },
      {
        "code": "object-fit: cover | contain",
        "means": "controls how <img> or <video> scales inside fixed bounds",
        "consequence": "cover fills the container while preserving aspect ratio (cropping excess); contain scales without cropping (leaving letterboxes)."
      },
      {
        "code": "cursor: pointer | not-allowed | grab",
        "means": "sets the mouse cursor icon for user feedback",
        "consequence": "Provides clear tactile affordance that an element can be clicked, dragged, or is currently disabled."
      }
    ],
    "slug": "css"
  },
  {
    "id": "C.23-cuda",
    "languageId": "C.23",
    "lang": "CUDA",
    "category": "AI & High Performance",
    "summary": "Massively parallel SIMD computing on NVIDIA GPU hardware: kernels, thread blocks, shared memory, and AI tensor acceleration.",
    "status": "unsourced",
    "rows": [
      {
        "code": "__global__ void kernel()",
        "means": "declares a GPU kernel function called from the CPU (host)",
        "consequence": "Executes on the GPU device asynchronously across thousands of parallel threads. Must return void."
      },
      {
        "code": "__device__ void helper()",
        "means": "GPU function callable only from other GPU kernels or functions",
        "consequence": "Compiled directly into GPU PTX assembly; executed by individual threads on streaming multiprocessors."
      },
      {
        "code": "__host__ void cpuFunc()",
        "means": "standard function that executes on the CPU host",
        "consequence": "Functions can be declared __host__ __device__ to compile for both CPU and GPU execution."
      },
      {
        "code": "kernel<<<gridDim, blockDim>>>(args)",
        "means": "kernel execution configuration launch syntax",
        "consequence": "gridDim specifies the number of thread blocks; blockDim specifies the number of threads per block (up to 1024)."
      },
      {
        "code": "threadIdx.x/y/z and blockIdx.x/y/z",
        "means": "built-in 3D coordinates of current thread and block",
        "consequence": "int idx = blockIdx.x * blockDim.x + threadIdx.x computes the unique global 1D thread index for array processing."
      },
      {
        "code": "blockDim.x and gridDim.x",
        "means": "dimensions of the thread block / dimensions of the grid",
        "consequence": "Allows writing kernels that map directly to 1D vectors, 2D image matrices, or 3D volumetric tensor data."
      },
      {
        "code": "cudaMalloc((void**)&d_ptr, size)",
        "means": "allocates raw memory on the GPU's high-bandwidth VRAM",
        "consequence": "The CPU cannot directly dereference d_ptr; data must be transferred using cudaMemcpy."
      },
      {
        "code": "cudaMemcpy(dst, src, size, cudaMemcpyHostToDevice)",
        "means": "copies data over the PCIe bus from CPU RAM to GPU VRAM",
        "consequence": "Transferring data across PCIe is often the main performance bottleneck in GPU computing; minimize transfers."
      },
      {
        "code": "cudaMemcpy(dst, src, size, cudaMemcpyDeviceToHost)",
        "means": "transfers computed results from GPU VRAM back to CPU RAM",
        "consequence": "Synchronizes execution: the CPU blocks until the memory transfer completes."
      },
      {
        "code": "cudaFree(d_ptr)",
        "means": "frees allocated VRAM memory on the GPU device",
        "consequence": "Must be called for every cudaMalloc to prevent running out of GPU memory (CUDA Out of Memory)."
      },
      {
        "code": "__shared__ float cache[256]",
        "means": "allocates ultra-fast on-chip SRAM shared by threads in a block",
        "consequence": "Shared memory has orders of magnitude lower latency and higher bandwidth than global VRAM; used for tile caching in matrix multiplication."
      },
      {
        "code": "__syncthreads()",
        "means": "barrier synchronization for all threads in the same block",
        "consequence": "Guarantees that all threads in the block reach this point before any thread continues, preventing race conditions on shared memory."
      },
      {
        "code": "cudaDeviceSynchronize()",
        "means": "CPU host halts and waits for all launched GPU kernels to finish",
        "consequence": "Kernel launches (<<<...>>>) are asynchronous. cudaDeviceSynchronize() blocks until all GPU work is complete."
      },
      {
        "code": "Warp (32 threads)",
        "means": "hardware execution unit executing the same instruction in lockstep",
        "consequence": "If threads in a warp take different branches (warp divergence), both branches are executed serially, degrading performance."
      },
      {
        "code": "atomicAdd(&val, delta)",
        "means": "hardware-level atomic addition preventing race conditions",
        "consequence": "Guarantees correct results when multiple threads update the same global or shared memory address simultaneously."
      }
    ],
    "slug": "cuda"
  },
  {
    "id": "C.16-elixir-erlang",
    "languageId": "C.16",
    "lang": "Elixir & Erlang",
    "category": "Backend & Enterprise",
    "summary": "Built on the BEAM virtual machine: millions of isolated processes, supervision trees, and nine-nines uptime fault tolerance.",
    "status": "unsourced",
    "rows": [
      {
        "code": "defmodule ModuleName do ... end",
        "means": "defines a namespace of related functions",
        "consequence": "In Elixir, all functions reside inside modules; functions are identified by name and arity (e.g. String.length/1)."
      },
      {
        "code": "|> (pipe operator)",
        "means": "passes the result of the left expression as the first argument to the right",
        "consequence": "Turns nested function calls inside out: data |> validate() |> transform() |> save() reads cleanly top-to-bottom."
      },
      {
        "code": "= (match operator)",
        "means": "pattern matches data structures rather than simple assignment",
        "consequence": "{:ok, result} = fetch_user(id) asserts that the call succeeded and binds result; crashes cleanly if {:error, _} is returned."
      },
      {
        "code": ":atom (named constant)",
        "means": "immutable identifier whose name is its own value",
        "consequence": "Atoms like :ok, :error, :nil are stored in an internal atom table; fast O(1) comparison by memory pointer."
      },
      {
        "code": "{:ok, \"value\"} (tuples) vs [1, 2, 3] (linked lists)",
        "means": "contiguous fixed-size group / singly linked list for iteration",
        "consequence": "Tuples are ideal for pattern-matching return values; lists support fast [head | tail] deconstruction."
      },
      {
        "code": "%{ key: \"value\" } and map.key",
        "means": "key-value dictionary map",
        "consequence": "Maps allow any key type. Updates (%{ map | key: \"new\" }) create efficient structural-sharing copies."
      },
      {
        "code": "spawn(fn -> ... end)",
        "means": "spawns a lightweight BEAM actor process in microseconds",
        "consequence": "BEAM processes are not OS threads; they consume only ~300 words of memory and are isolated from other processes."
      },
      {
        "code": "send(pid, msg) and receive do msg -> ... end",
        "means": "asynchronous message passing between isolated processes",
        "consequence": "Processes have private heaps and mailboxes. If a process crashes, it cannot corrupt memory in any other process."
      },
      {
        "code": "GenServer (Generic Server)",
        "means": "OTP abstraction for stateful client-server worker processes",
        "consequence": "Standardizes callbacks (init, handle_call, handle_cast, handle_info) for managing concurrent state."
      },
      {
        "code": "Supervisor: 'let it crash' philosophy",
        "means": "monitors child processes and restarts them on failure",
        "consequence": "Instead of defensive code trying to handle every rare corrupt state, crashed processes are simply restarted from clean initial state."
      },
      {
        "code": "Enum.map / Enum.filter / Enum.reduce",
        "means": "functional transformations over collections and streams",
        "consequence": "Eagerly evaluates collections; for lazy streaming over huge data sources, use the Stream module."
      }
    ],
    "slug": "elixir---erlang"
  },
  {
    "id": "C.18-go",
    "languageId": "C.18",
    "lang": "Go",
    "category": "Systems & Hardware",
    "summary": "Fast compilation, cheap goroutine concurrency, explicit error handling, and single static binaries powering cloud infrastructure.",
    "status": "unsourced",
    "rows": [
      {
        "code": "package main and import (\"fmt\"; \"net/http\")",
        "means": "declares the executable package name and imports standard libraries",
        "consequence": "Go compilers reject unused imports with a build error, guaranteeing clean dependency trees."
      },
      {
        "code": "func name(param string) (string, error)",
        "means": "defines a function with multiple return values",
        "consequence": "Returning the result and an error together is the foundation of Go's explicit error handling pattern."
      },
      {
        "code": ":= (short variable declaration)",
        "means": "declares and initializes a variable with inferred type",
        "consequence": "Only valid inside function bodies. For package-level globals, use var Name string = \"val\"."
      },
      {
        "code": "struct { Field string `json:\"field\"` }",
        "means": "composite data type with field definitions and reflection tags",
        "consequence": "Struct tags provide metadata for serialization (JSON, XML, DB). Fields starting with a capital letter are public/exported."
      },
      {
        "code": "type Reader interface { Read(p []byte) (n int, err error) }",
        "means": "implicit interface satisfied automatically by any matching type",
        "consequence": "Types do not declare 'implements Reader'. If a type provides the method signature, it satisfies the interface automatically."
      },
      {
        "code": "make(slice/map/chan, length, capacity)",
        "means": "allocates and initializes slices, maps, or channels in memory",
        "consequence": "Required for reference types; unlike new(), which only zeroes memory, make sets up internal pointer buffers."
      },
      {
        "code": "append(slice, elements...)",
        "means": "appends items to a slice, growing capacity when full",
        "consequence": "If capacity is exceeded, append allocates a new larger backing array and copies elements over, returning a new slice header."
      },
      {
        "code": "for i, val := range collection",
        "means": "iterates over slices, arrays, maps, and channels",
        "consequence": "Go has only one looping keyword: for. It handles traditional loops, while-loops, and range iterations."
      },
      {
        "code": "defer cleanupFunction()",
        "means": "schedules a function call to run when the surrounding function returns",
        "consequence": "Arguments are evaluated immediately, but execution is deferred until function exit. Ideal for f.Close() or mu.Unlock()."
      },
      {
        "code": "go workerFunction()",
        "means": "launches a function on a lightweight concurrent goroutine",
        "consequence": "Goroutines begin with only a ~2KB memory stack that grows and shrinks dynamically, allowing millions of concurrent tasks."
      },
      {
        "code": "chan Type and ch <- val / val := <-ch",
        "means": "typed channel pipe: send value / receive value",
        "consequence": "\"Do not communicate by sharing memory; instead, share memory by communicating.\" Enables safe synchronization between goroutines."
      },
      {
        "code": "select { case msg := <-ch1: ... default: ... }",
        "means": "multiplexes concurrent channel operations simultaneously",
        "consequence": "Blocks until one of its cases can proceed. If multiple cases are ready, one is chosen via pseudo-random selection."
      },
      {
        "code": "if err != nil { return nil, fmt.Errorf(\"failed: %w\", err) }",
        "means": "explicit error handling idiom",
        "consequence": "No hidden exceptions. Errors are normal values that must be inspected and propagated upward explicitly."
      },
      {
        "code": "sync.WaitGroup (Add, Done, Wait)",
        "means": "synchronization counter waiting for a collection of goroutines to finish",
        "consequence": "wg.Add(1) increments the counter; wg.Done() decrements it; wg.Wait() blocks execution until the counter reaches zero."
      },
      {
        "code": "sync.Mutex (Lock, Unlock)",
        "means": "mutual exclusion lock guarding critical shared memory regions",
        "consequence": "Always follow mu.Lock() immediately with defer mu.Unlock() to prevent deadlocks when functions exit early on errors."
      },
      {
        "code": "context.Context (WithTimeout, WithCancel)",
        "means": "carries deadlines, cancellation signals, and request-scoped values",
        "consequence": "Enables propagating cancellation across network calls and child goroutines when an HTTP client disconnects."
      },
      {
        "code": "panic(\"fatal\") and recover()",
        "means": "triggers catastrophic unwind / recovers control inside deferred function",
        "consequence": "Reserved exclusively for truly unrecoverable conditions (e.g. nil pointer dereference, out-of-bounds memory)."
      },
      {
        "code": "val, ok := anyVal.(ConcreteType)",
        "means": "type assertion checking dynamic interface value",
        "consequence": "If ok is true, val contains the concrete type. If ok is false, prevents a panic and allows safe fallback."
      }
    ],
    "slug": "go"
  },
  {
    "id": "C.24-html",
    "languageId": "C.24",
    "lang": "HTML",
    "category": "Web & Frontend",
    "summary": "HyperText Markup Language: the semantic skeleton, document tree, and accessibility foundation of the web.",
    "status": "unsourced",
    "rows": [
      {
        "code": "<!DOCTYPE html>",
        "means": "tells the browser to render using modern HTML5 standards",
        "consequence": "Required at the absolute first line of every HTML file. Without it, browsers trigger legacy 'quirks mode', breaking modern CSS box-sizing and layout standards."
      },
      {
        "code": "<html lang=\"en\">",
        "means": "the root document element wrapping everything",
        "consequence": "The lang attribute is critical: screen readers use it for phonetic pronunciation, and search engines use it for geo-targeted indexing."
      },
      {
        "code": "<head> and <body>",
        "means": "metadata container / visible user interface container",
        "consequence": "<head> holds machine data (title, meta, styles, scripts). <body> holds all rendered markup visible to the end user."
      },
      {
        "code": "<meta charset=\"UTF-8\">",
        "means": "declares Unicode character encoding",
        "consequence": "Ensures characters from all human alphabets, symbols, and emojis render correctly without garbled mojibake symbols."
      },
      {
        "code": "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "means": "instructs mobile browsers to scale to the device screen width",
        "consequence": "Without this single line, mobile phones render desktop-width pages at 980px zoom, causing tiny illegible text and horizontal scrolling."
      },
      {
        "code": "<title>Page Title — Site Name</title>",
        "means": "sets browser tab title and search engine snippet title",
        "consequence": "Crucial for both browser bookmarks and search results; also announced first by assistive screen reading technology."
      },
      {
        "code": "<link rel=\"stylesheet\" href=\"styles.css\">",
        "means": "imports external CSS stylesheets into the document",
        "consequence": "Placed in <head> so the browser applies styles before painting text, eliminating the Flash of Unstyled Content (FOUC)."
      },
      {
        "code": "<script src=\"app.js\" defer></script>",
        "means": "loads external JavaScript asynchronously without blocking HTML parsing",
        "consequence": "The defer attribute downloads scripts in parallel with HTML parsing and executes them in document order once parsing completes."
      },
      {
        "code": "<header>, <nav>, <main>, <footer>",
        "means": "semantic landmark structural regions",
        "consequence": "Landmark elements allow screen readers and keyboard users to jump directly across major page sections without navigating every individual link."
      },
      {
        "code": "<article> and <section>",
        "means": "self-contained reusable unit / thematic content grouping",
        "consequence": "<article> represents content that makes sense on its own (e.g. blog post, card). <section> represents a thematic chapter with a heading."
      },
      {
        "code": "<aside>",
        "means": "indirectly related content or sidebar",
        "consequence": "Used for sidebars, callout boxes, related links, or advertising. Screen readers treat it as secondary content."
      },
      {
        "code": "<h1> through <h6>",
        "means": "six levels of document heading hierarchy",
        "consequence": "Never skip heading levels (e.g. h1 to h3) for styling. Use CSS for font size, and reserve headings for the document outline."
      },
      {
        "code": "<p>paragraph text</p>",
        "means": "standard block of running prose",
        "consequence": "Browsers apply default vertical paragraph margins to enforce typographic rhythm and readability."
      },
      {
        "code": "<a href=\"url\" target=\"_blank\" rel=\"noopener noreferrer\">",
        "means": "hypertext anchor navigation link",
        "consequence": "When opening in a new tab (_blank), rel=\"noopener noreferrer\" prevents the new window from accessing window.opener for tab-napping exploits."
      },
      {
        "code": "<button type=\"button|submit|reset\">",
        "means": "accessible, clickable trigger for actions",
        "consequence": "Unlike a <div> with an onclick handler, <button> automatically handles keyboard Enter/Space triggers and native screen reader focus."
      },
      {
        "code": "<form action=\"/api/submit\" method=\"POST\">",
        "means": "data collection and submission container",
        "consequence": "Groups user inputs and manages form submission. Handles Enter-key submission and HTML5 constraint validation natively."
      },
      {
        "code": "<label for=\"user-email\">Email</label>",
        "means": "text label programmatically bound to an input",
        "consequence": "The for attribute matches the input's id. Clicking the label focuses the input, expanding the touch/click target area."
      },
      {
        "code": "<input type=\"text|email|password|checkbox|radio\">",
        "means": "interactive data input control",
        "consequence": "Specifying the correct type enables built-in client validation, mobile keyboards (e.g. numeric keypad for type=\"number\" or \"tel\"), and secure password masking."
      },
      {
        "code": "<textarea rows=\"4\" cols=\"50\"></textarea>",
        "means": "multi-line plain text editing field",
        "consequence": "Unlike <input>, maintains multiple lines of user prose. Preserves newline characters upon submission."
      },
      {
        "code": "<select> and <option value=\"val\">",
        "means": "drop-down selection menu",
        "consequence": "Allows user to pick one or more options from a fixed list. The selected option's value is sent upon form submit."
      },
      {
        "code": "<table>, <thead>, <tbody>, <tr>, <th>, <td>",
        "means": "tabular data display architecture",
        "consequence": "Use <th> with scope=\"col\" or scope=\"row\" so assistive screen readers read column headers aloud alongside cell data."
      },
      {
        "code": "<ul>, <ol>, and <li>",
        "means": "unordered list (bullets) / ordered list (numbered) / list item",
        "consequence": "Tells screen readers how many items are in the set (e.g. 'List of 5 items'), vastly improving navigation over raw div tags."
      },
      {
        "code": "<img src=\"pic.webp\" alt=\"Descriptive text\" loading=\"lazy\">",
        "means": "raster or vector image embedding",
        "consequence": "The alt attribute describes the image for blind users and when images fail to load. loading=\"lazy\" defers offscreen downloads."
      },
      {
        "code": "<picture> and <source srcset=\"...\" media=\"...\">",
        "means": "art direction and responsive image switching",
        "consequence": "Allows serving modern formats (AVIF/WebP) with JPEG fallback, or different crops for mobile versus desktop viewports."
      },
      {
        "code": "<video controls poster=\"preview.jpg\"> and <audio>",
        "means": "native multimedia playback controls",
        "consequence": "Eliminated legacy third-party plugins. Supports multiple <source> formats and subtitles via <track kind=\"subtitles\">."
      },
      {
        "code": "<canvas id=\"stage\" width=\"800\" height=\"600\"></canvas>",
        "means": "bitmapped pixel canvas for 2D/3D graphics and games",
        "consequence": "Provides a JavaScript drawing context (CanvasRenderingContext2D or WebGL) for immediate-mode graphics."
      },
      {
        "code": "<svg viewBox=\"0 0 24 24\">",
        "means": "scalable vector graphics element",
        "consequence": "Resolution-independent vector graphics defined mathematically via XML paths; sharp on any display density."
      },
      {
        "code": "<iframe src=\"url\" title=\"Description\" sandbox=\"...\">",
        "means": "embeds another nested browsing context (webpage)",
        "consequence": "The sandbox attribute restricts scripts, forms, and popups to prevent malicious third-party embeds from attacking the host page."
      },
      {
        "code": "<dialog id=\"modal\"> and dialog.showModal()",
        "means": "native accessible modal dialog box",
        "consequence": "Handles the backdrop, traps keyboard focus inside the modal, and closes on the Escape key without custom JavaScript."
      },
      {
        "code": "<details> and <summary>Click to toggle</summary>",
        "means": "native disclosure widget / accordion",
        "consequence": "Toggles visibility of child content natively without any JavaScript or CSS state management."
      },
      {
        "code": "aria-* attributes (e.g. aria-expanded, aria-label)",
        "means": "Accessible Rich Internet Applications accessibility overrides",
        "consequence": "Communicates dynamic state changes (e.g. menu open/closed, loading) to assistive screen readers."
      },
      {
        "code": "data-* attributes (e.g. data-user-id=\"42\")",
        "means": "stores custom private data directly on HTML elements",
        "consequence": "Accessible in JavaScript via element.dataset.userId and in CSS selectors via [data-user-id=\"42\"]."
      }
    ],
    "slug": "html"
  },
  {
    "id": "C.12-java",
    "languageId": "C.12",
    "lang": "Java",
    "category": "Backend & Enterprise",
    "summary": "Type-safe, object-oriented platform powering enterprise backends, Android runtimes, and large distributed data pipelines.",
    "status": "unsourced",
    "rows": [
      {
        "code": "public class Name { ... }",
        "means": "top-level class visible to all packages in the project",
        "consequence": "In Java, every public class must reside in a file matching its exact name (Name.java). Encapsulates state and methods."
      },
      {
        "code": "public static void main(String[] args)",
        "means": "standard program entry point executed by the JVM",
        "consequence": "public allows JVM access; static means it runs without instantiating the class; void means it returns no exit code."
      },
      {
        "code": "System.out.println(data)",
        "means": "prints formatted text followed by a newline to stdout",
        "consequence": "Buffered stream output to the operating system terminal; automatically invokes the object's toString() method."
      },
      {
        "code": "new ClassName()",
        "means": "instantiates an object on the JVM heap and invokes its constructor",
        "consequence": "All objects in Java live on the garbage-collected heap; references to objects live on the thread execution stack."
      },
      {
        "code": "extends vs implements",
        "means": "inherits from a single superclass / implements multiple interfaces",
        "consequence": "Java allows single class inheritance to prevent the diamond problem, but permits implementing any number of interface contracts."
      },
      {
        "code": "interface vs abstract class",
        "means": "pure contract of methods / partial implementation with state",
        "consequence": "Interfaces define behavior contracts (can also have default methods); abstract classes can hold instance state and constructors."
      },
      {
        "code": "final (variable / method / class)",
        "means": "constant value / cannot be overridden / cannot be subclassed",
        "consequence": "Declaring classes final (like java.lang.String) guarantees immutability, thread safety, and compiler inlining optimizations."
      },
      {
        "code": "record User(String id, String name) {}",
        "means": "compact syntax for immutable data-carrier classes (Java 14+)",
        "consequence": "Automatically generates constructor, getters, equals(), hashCode(), and toString() for clean immutable data objects."
      },
      {
        "code": "try (var res = new Resource()) { ... } (try-with-resources)",
        "means": "automatically closes AutoCloseable resources on block exit",
        "consequence": "Guarantees database connections, files, and sockets close even if exceptions occur, eliminating manual finally cleanup."
      },
      {
        "code": "throws Exception vs throw new Exception()",
        "means": "declares checked exception in method signature / throws exception",
        "consequence": "Checked exceptions must either be handled with a try/catch block or declared in the throws signature, verified by the compiler."
      },
      {
        "code": "List<String> list = new ArrayList<>()",
        "means": "dynamically resizing array backed by standard interface",
        "consequence": "Program to the interface (List), not the implementation (ArrayList), allowing you to swap in LinkedList without breaking callers."
      },
      {
        "code": "Map<String, User> map = new HashMap<>()",
        "means": "hash table providing O(1) average lookup by key",
        "consequence": "Relies on equals() and hashCode() contracts on the key class; if hashCode() is poorly implemented, lookups degrade to O(n)."
      },
      {
        "code": "Stream API: list.stream().filter(...).map(...).collect(...)",
        "means": "functional processing pipeline over collections",
        "consequence": "Executes lazily: intermediate operations (.filter, .map) only compute when a terminal operation (.collect, .count) is triggered."
      },
      {
        "code": "Optional<T> (ofNullable, map, orElse)",
        "means": "container object that may or may not contain a non-null value",
        "consequence": "Designed to eliminate NullPointerExceptions by forcing the caller to explicitly handle the empty case."
      },
      {
        "code": "enum Direction { NORTH, SOUTH, EAST, WEST }",
        "means": "type-safe enumeration with methods and fields",
        "consequence": "Java enums are full-featured classes that can implement interfaces, hold fields, and define specific constructor behaviors."
      },
      {
        "code": "@Override annotation",
        "means": "tells compiler this method must override a superclass method",
        "consequence": "Catches bugs at compile time if the method signature does not exactly match the parent class or interface method."
      },
      {
        "code": "super and this keywords",
        "means": "references parent superclass / references current object instance",
        "consequence": "super() invokes the parent constructor; this.field disambiguates between instance fields and parameter names."
      },
      {
        "code": "synchronized (lock) { ... }",
        "means": "acquires an intrinsic monitor lock for thread synchronization",
        "consequence": "Guarantees that only one thread executes the protected block at a time, preventing race conditions on shared state."
      },
      {
        "code": "volatile boolean running = true;",
        "means": "ensures reads and writes are visible immediately across all CPU threads",
        "consequence": "Prevents the JVM and CPU from caching the variable in hardware thread registers, enforcing memory visibility."
      },
      {
        "code": "var count = 42; (local variable type inference)",
        "means": "compiler infers the static type from the right-hand initializer",
        "consequence": "Available in Java 10+ for local variables. Keeps code concise without sacrificing static compile-time type safety."
      },
      {
        "code": "Lambda expression: (x, y) -> x + y",
        "means": "compact implementation of a Single Abstract Method (SAM) interface",
        "consequence": "Passed directly into methods expecting functional interfaces like Predicate, Function, or Consumer."
      },
      {
        "code": "Generics: <T extends Comparable<T>>",
        "means": "compile-time type parameters with bounded constraints",
        "consequence": "Implemented via type erasure: the compiler checks types at build time and erases them to Object in JVM bytecode."
      }
    ],
    "slug": "java"
  },
  {
    "id": "C.13-javascript",
    "languageId": "C.13",
    "lang": "JavaScript",
    "category": "Web & Frontend",
    "summary": "The dynamic runtime language of the web, Node.js servers, and asynchronous event-driven computing.",
    "status": "unsourced",
    "rows": [
      {
        "code": "let / const / var",
        "means": "reassignable variable / immutable binding / legacy function-scoped name",
        "consequence": "Always default to const. Use let only when a value must change. Never use var because its hoisting and lack of block scope cause silent bugs."
      },
      {
        "code": "function name() vs () => {}",
        "means": "standard function / arrow function with lexical this",
        "consequence": "Arrow functions inherit this from their surrounding lexical scope, avoiding the classic .bind(this) bug in object methods and callbacks."
      },
      {
        "code": "console.log / console.error / console.table",
        "means": "prints debug output, error diagnostics, and tabular arrays",
        "consequence": "console.table() formats arrays of objects into structured terminal/devtools tables for instant visual inspection."
      },
      {
        "code": "arr.map((item, index) => ...)",
        "means": "transforms each item into a new array of the same length",
        "consequence": "Pure function: never modifies the original array. Returns an entirely new array with the mapped results."
      },
      {
        "code": "arr.filter(item => condition)",
        "means": "returns a new array containing only items passing the test",
        "consequence": "Pure function: filters down items where the callback returns a truthy value, omitting everything else."
      },
      {
        "code": "arr.reduce((accumulator, item) => ..., initialVal)",
        "means": "aggregates array items into a single final value or object",
        "consequence": "The fundamental array primitive: can build totals, group records by category, or flatten nested hierarchies into a single map."
      },
      {
        "code": "arr.find(predicate) / arr.findIndex(predicate)",
        "means": "returns the first matching item / returns its array index",
        "consequence": "Stops iterating as soon as a match is found (short-circuiting). Returns undefined / -1 if no item matches."
      },
      {
        "code": "arr.includes(val) / arr.indexOf(val)",
        "means": "checks if value exists (boolean) / returns index of value",
        "consequence": "includes() correctly handles NaN comparisons, whereas indexOf() checks strict equality (===) and fails on NaN."
      },
      {
        "code": "arr.some(predicate) / arr.every(predicate)",
        "means": "checks if at least one item matches / checks if all match",
        "consequence": "Short-circuits immediately: some() stops at the first true, every() stops at the first false."
      },
      {
        "code": "arr.slice(start, end) vs arr.splice(start, deleteCount, ...items)",
        "means": "non-destructive sub-array copy / destructive in-place mutation",
        "consequence": "slice() leaves the original array untouched; splice() deletes or inserts elements directly into the original array."
      },
      {
        "code": "arr.push(x) / pop() / shift() / unshift(x)",
        "means": "add to end / remove from end / remove from start / add to start",
        "consequence": "push/pop are O(1) constant time operations; shift/unshift are O(n) because all remaining array elements must be re-indexed."
      },
      {
        "code": "Object.keys(obj) / Object.values() / Object.entries()",
        "means": "extracts property names / values / [key, value] tuples",
        "consequence": "Object.entries(obj) is ideal for looping over dictionary records using for (const [k, v] of Object.entries(obj))."
      },
      {
        "code": "Destructuring: const { id, name } = user",
        "means": "unpacks properties or array items directly into distinct names",
        "consequence": "Allows setting default values: const { role = 'guest' } = user. Works identically on arrays: const [first, second] = list."
      },
      {
        "code": "Spread syntax: { ...obj, newKey: 'val' } / [ ...arr ]",
        "means": "shallow copies and merges objects or arrays",
        "consequence": "Creates a new shallow copy with immutability, allowing clean state updates without mutating the original reference."
      },
      {
        "code": "=== vs ==",
        "means": "strict equality (checks value and type) / loose equality",
        "consequence": "Always use ===. Loose equality (==) performs arcane type coercion (e.g. '' == 0 is true, null == undefined is true)."
      },
      {
        "code": "null vs undefined",
        "means": "deliberate absence of value / variable declared but never assigned",
        "consequence": "null is an intentional assignment representing 'empty'; undefined is JavaScript's default for missing parameters or unassigned names."
      },
      {
        "code": "Optional chaining: user?.profile?.avatar",
        "means": "safely accesses nested properties without throwing TypeError",
        "consequence": "If any reference in the chain is null or undefined, evaluation stops and safely returns undefined instead of crashing."
      },
      {
        "code": "Nullish coalescing: val ?? fallback",
        "means": "provides fallback ONLY if value is null or undefined",
        "consequence": "Unlike || (OR), which treats 0, '', and false as falsy and overwrites them, ?? preserves valid falsy values."
      },
      {
        "code": "async / await",
        "means": "writes asynchronous promise code in synchronous style",
        "consequence": "Syntactic sugar over Promises. An async function always returns a Promise; await pauses execution until the promise settles."
      },
      {
        "code": "new Promise((resolve, reject) => { ... })",
        "means": "represents a future value that hasn't arrived yet",
        "consequence": "Can be in one of three states: pending, fulfilled (via resolve(val)), or rejected (via reject(err))."
      },
      {
        "code": "Promise.all([p1, p2]) vs Promise.allSettled()",
        "means": "runs promises in parallel; rejects on first error / waits for all",
        "consequence": "Promise.all fails immediately if any promise rejects; Promise.allSettled always completes and reports each status individually."
      },
      {
        "code": "fetch(url, { method: 'POST', body: JSON.stringify(data) })",
        "means": "native HTTP client for network requests",
        "consequence": "Returns a Promise resolving to a Response object. Does not reject on HTTP 404/500 errors; check res.ok === true."
      },
      {
        "code": "try { ... } catch (err) { ... } finally { ... }",
        "means": "catches and handles runtime exceptions cleanly",
        "consequence": "The finally block is guaranteed to run regardless of whether an exception occurred, making it ideal for cleaning up resources."
      },
      {
        "code": "throw new Error('Message')",
        "means": "creates and fires a custom runtime exception with stack trace",
        "consequence": "Halts the current execution path and bubbles up to the nearest enclosing catch block, preserving the exact line number."
      },
      {
        "code": "document.querySelector(selector) / querySelectorAll()",
        "means": "finds the first / all matching DOM nodes via CSS selector",
        "consequence": "querySelectorAll returns a static NodeList that can be looped over directly with .forEach()."
      },
      {
        "code": "element.addEventListener(event, handler)",
        "means": "binds an event listener to user interactions (click, input)",
        "consequence": "Supports options like { once: true } or { passive: true } to optimize mobile touch and scroll performance."
      },
      {
        "code": "element.classList.add() / remove() / toggle()",
        "means": "manipulates CSS class names on DOM elements safely",
        "consequence": "Prevents messy manual string concatenation of className, ensuring classes aren't duplicated or accidentally removed."
      },
      {
        "code": "JSON.parse(text) / JSON.stringify(data, null, 2)",
        "means": "deserializes text into JS object / serializes JS object to text",
        "consequence": "JSON.parse throws SyntaxError on malformed JSON; always wrap in try/catch when reading network or local storage data."
      },
      {
        "code": "localStorage.setItem(key, val) / getItem(key)",
        "means": "persists string key-value pairs across browser sessions",
        "consequence": "Synchronous API limited to ~5MB per domain. Stores strings only; use JSON.stringify/JSON.parse to store complex objects."
      },
      {
        "code": "setTimeout(fn, ms) / setInterval(fn, ms)",
        "means": "schedules a function call after delay / on recurring interval",
        "consequence": "Returns a numeric timer ID; cancel with clearTimeout(id) or clearInterval(id) to avoid memory leaks."
      },
      {
        "code": "class Name extends Base { constructor() { super(); } }",
        "means": "object-oriented syntax sugar over prototypal inheritance",
        "consequence": "Provides clean constructor initialization, private fields (#privateField), and static methods."
      },
      {
        "code": "Set and Map",
        "means": "collection of unique values / key-value dictionary for any type",
        "consequence": "Set guarantees O(1) deduplication; Map allows any data type (including objects or functions) to serve as lookup keys."
      },
      {
        "code": "Math.floor() / ceil() / round() / random()",
        "means": "rounds down / rounds up / rounds to nearest / pseudorandom float",
        "consequence": "Math.floor(Math.random() * (max - min + 1)) + min generates an inclusive random integer between min and max."
      },
      {
        "code": "str.split(delim) and arr.join(delim)",
        "means": "splits text into an array / joins an array into text",
        "consequence": "'a,b,c'.split(',') yields ['a', 'b', 'c']. ['a', 'b'].join('-') yields 'a-b'."
      },
      {
        "code": "str.trim() / replace(regex, replacement)",
        "means": "removes outer whitespace / replaces pattern matches",
        "consequence": "Using a global regex (e.g. /pattern/g) replaces all occurrences, or use modern str.replaceAll()."
      },
      {
        "code": "window.requestAnimationFrame(callback)",
        "means": "schedules a render update before the browser's next screen repaint",
        "consequence": "Synchronizes visual updates with the display refresh rate (typically 60Hz or 120Hz), yielding silky smooth animations."
      }
    ],
    "slug": "javascript"
  },
  {
    "id": "C.21-kotlin",
    "languageId": "C.21",
    "lang": "Kotlin",
    "category": "Mobile & Multiplatform",
    "summary": "Modern, concise, null-safe language serving as Google's premier standard for Android development and modern JVM backends.",
    "status": "unsourced",
    "rows": [
      {
        "code": "val vs var",
        "means": "read-only immutable reference / reassignable mutable variable",
        "consequence": "Prefer val by default. Immutable references prevent side-effect bugs across multithreaded Android apps."
      },
      {
        "code": "fun name(param: Type): ReturnType { ... }",
        "means": "function declaration with concise syntax",
        "consequence": "Single-expression functions can omit curly braces: fun double(x: Int) = x * 2."
      },
      {
        "code": "Nullable types: String? vs non-null String",
        "means": "type system distinguishes between nullable and non-nullable references",
        "consequence": "The compiler prevents calling methods on String? directly, eliminating the billion-dollar NullPointerException at build time."
      },
      {
        "code": "Safe call: user?.profile?.avatar",
        "means": "evaluates property access only if reference is non-null",
        "consequence": "Returns null safely if user or profile is null rather than throwing an exception."
      },
      {
        "code": "Elvis operator: name ?: \"Anonymous\"",
        "means": "provides fallback value if left-hand expression is null",
        "consequence": "val length = str?.length ?: 0 ensures length is a non-null Int with zero fallback."
      },
      {
        "code": "data class User(val id: Int, val name: String)",
        "means": "concise immutable value-carrier class",
        "consequence": "Automatically generates equals(), hashCode(), toString(), componentN() destructuring, and copy() methods."
      },
      {
        "code": "when (x) { 1 -> ...; is String -> ...; else -> ... }",
        "means": "rich pattern-matching expression replacing switch",
        "consequence": "Can evaluate expressions, type checks, and ranges; compiler checks that all enum or sealed class branches are handled."
      },
      {
        "code": "object (singleton) and companion object",
        "means": "thread-safe singleton declaration / static class members",
        "consequence": "object DatabaseManager creates a lazy thread-safe singleton instance on first access without boilerplate."
      },
      {
        "code": "Extension function: fun String.addExclamation() = \"$this!\"",
        "means": "adds methods to existing classes without inheritance",
        "consequence": "Allows extending Android framework classes (e.g. View.hide()) cleanly while maintaining full static typing."
      },
      {
        "code": "Smart cast: if (x is String) { x.length }",
        "means": "compiler automatically casts variable to target type after check",
        "consequence": "Eliminates explicit casting (as String); once checked with is, the compiler knows the exact type inside that branch."
      },
      {
        "code": "coroutine: viewModelScope.launch { val data = fetchData() }",
        "means": "lightweight asynchronous concurrency framework",
        "consequence": "suspend fun functions pause execution without blocking the underlying OS thread, keeping Android UI smooth at 60/120fps."
      },
      {
        "code": "sealed class / sealed interface",
        "means": "restricted class hierarchies representing finite state variants",
        "consequence": "Used extensively for UI states: sealed interface UiState { object Loading; data class Success(val d: Data); data class Error(val msg: String); }."
      }
    ],
    "slug": "kotlin"
  },
  {
    "id": "C.14-php",
    "languageId": "C.14",
    "lang": "PHP",
    "category": "Web & Frontend",
    "summary": "Server-side web processing language powering over 75% of content-managed websites, modern Laravel APIs, and web hosting.",
    "status": "unsourced",
    "rows": [
      {
        "code": "<?php ... ?>",
        "means": "delimiters opening and closing server-side executable PHP code",
        "consequence": "Everything outside these tags is sent directly to the client browser as raw HTML; code inside is executed on the web server."
      },
      {
        "code": "echo $message; and print",
        "means": "outputs text and values directly into the HTTP response body",
        "consequence": "echo is a language construct that accepts multiple comma-separated arguments and has no return value, making it fast."
      },
      {
        "code": "$variable_name",
        "means": "all variable names begin with a dollar sign sigil",
        "consequence": "Variables are dynamically typed and loosely scoped. Variable variables ($$name) can evaluate variable names dynamically."
      },
      {
        "code": "$_GET, $_POST, $_SERVER, $_SESSION",
        "means": "superglobal arrays holding HTTP request and server data",
        "consequence": "Always sanitize input: accessing $_GET['id'] directly in SQL queries causes SQL injection vulnerabilities."
      },
      {
        "code": "Associative array: $user = ['name' => 'Alice', 'role' => 'admin'];",
        "means": "unified ordered hash map and list data structure",
        "consequence": "In PHP, arrays serve as lists, dictionaries, stacks, and queues simultaneously. Array keys can be integers or strings."
      },
      {
        "code": "foreach ($array as $key => $value)",
        "means": "iterates through arrays and iterable objects",
        "consequence": "Can modify values in place by using a reference (&): foreach ($items as &$item) { $item *= 2; }."
      },
      {
        "code": "function add(int $a, int $b): int",
        "means": "declares functions with parameter and return type hints",
        "consequence": "PHP 7+ enforces scalar type hints. Use declare(strict_types=1); at the top of files to enforce strict type checking."
      },
      {
        "code": "Arrow function: fn($x) => $x * $multiplier",
        "means": "concise single-expression closure with auto-capture",
        "consequence": "Automatically captures outer variables by value without needing the verbose use ($multiplier) syntax of classic closures."
      },
      {
        "code": "class User { public function __construct(public string $name) {} }",
        "means": "constructor property promotion (PHP 8+)",
        "consequence": "Declaring public string $name in the constructor signature automatically defines and assigns the instance property."
      },
      {
        "code": "namespace App\\Services; and use App\\Models\\User;",
        "means": "organizes classes into hierarchical packages and imports them",
        "consequence": "Follows the PSR-4 autoloading standard, allowing Composer to map namespace paths directly to filesystem directories."
      },
      {
        "code": "null, isset($var), empty($var)",
        "means": "null constant / checks if set and not null / checks if falsy or empty",
        "consequence": "isset returns true if variable exists and is not null; empty returns true if variable is unset, empty string, 0, or false."
      },
      {
        "code": "=== (strict) vs == (loose)",
        "means": "checks value and type without coercion / checks with type coercion",
        "consequence": "Always use ===. In PHP, loose comparisons like '123' == 123 evaluate to true, and in older PHP 'test' == 0 was true."
      },
      {
        "code": "Null coalescing: $val ?? 'default'",
        "means": "returns fallback if variable is null or unset",
        "consequence": "Safe against unset variables: $name = $_GET['user'] ?? 'anonymous' will not trigger an 'Undefined index' warning."
      },
      {
        "code": "Spaceship operator: $a <=> $b",
        "means": "three-way comparison returning -1, 0, or 1",
        "consequence": "Returns -1 if $a < $b, 0 if $a == $b, and 1 if $a > $b. Ideal for sorting callback functions in usort()."
      },
      {
        "code": "match ($status) { 'active' => ..., default => ... }",
        "means": "strict-equality pattern matching expression (PHP 8+)",
        "consequence": "Evaluates to a value like a ternary operator, uses strict comparisons (===), and throws UnhandledMatchError if no arm matches."
      },
      {
        "code": "PDO: $stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');",
        "means": "PHP Data Objects abstraction layer with prepared statements",
        "consequence": "Prepared statements send SQL query structure and data parameters separately, mathematically preventing SQL injection."
      },
      {
        "code": "json_encode($data) and json_decode($json, associative: true)",
        "means": "serializes PHP data to JSON string / parses JSON into array",
        "consequence": "Passing true as the second argument to json_decode converts JSON objects into associative PHP arrays instead of stdClass."
      },
      {
        "code": "composer require vendor/package",
        "means": "dependency manager and PSR-4 autoloader for PHP",
        "consequence": "require 'vendor/autoload.php' loads all third-party libraries and project classes on demand without manual include statements."
      }
    ],
    "slug": "php"
  },
  {
    "id": "C.11-python",
    "languageId": "C.11",
    "lang": "Python",
    "category": "Backend & Enterprise",
    "summary": "Clear, readable, batteries-included language dominating scripting, backend web services, data science, and modern AI.",
    "status": "unsourced",
    "rows": [
      {
        "code": "print(*args, sep=' ', end='\\n')",
        "means": "outputs text and values to standard output",
        "consequence": "Accepts any number of objects, converts them via str(), separates them with sep, and appends end (defaults to newline)."
      },
      {
        "code": "def func_name(arg1, *args, **kwargs) -> ReturnType:",
        "means": "defines a reusable function with positional and keyword arguments",
        "consequence": "*args captures surplus positional arguments as a tuple; **kwargs captures surplus keyword arguments as a dictionary."
      },
      {
        "code": "return vs yield",
        "means": "returns a single final value / yields items lazily one at a time",
        "consequence": "yield turns a function into a memory-efficient generator, allowing streaming iteration over gigabytes of data without storing it all in RAM."
      },
      {
        "code": "if / elif / else",
        "means": "conditional branching based on truthy evaluation",
        "consequence": "Python treats 0, None, empty collections ([], {}, ''), and False as falsy; everything else evaluates to truthy."
      },
      {
        "code": "for item in iterable:",
        "means": "iterates directly over any sequence or generator",
        "consequence": "No manual index counters needed. Iterates over lists, strings, dictionaries, files, or database cursor streams."
      },
      {
        "code": "range(start, stop, step)",
        "means": "generates an immutable arithmetic progression sequence",
        "consequence": "Memory efficient: range(1000000) consumes the same tiny constant memory as range(10) because values are generated on-demand."
      },
      {
        "code": "len(collection)",
        "means": "returns the number of items in O(1) constant time",
        "consequence": "Python collections store their length directly in memory header structures, so len() never counts elements one by one."
      },
      {
        "code": "List comprehension: [x**2 for x in items if x > 0]",
        "means": "concise syntax for filtering and mapping a new list",
        "consequence": "Significantly faster than manual for loops with list.append() because the iteration executes at C-speed in the interpreter."
      },
      {
        "code": "Dict comprehension: {k: v for k, v in pairs}",
        "means": "builds a dictionary in a single readable expression",
        "consequence": "Ideal for inverting mappings or indexing list records: {user['id']: user for user in users}."
      },
      {
        "code": "lambda x, y: x + y",
        "means": "unnamed, single-expression anonymous function",
        "consequence": "Used for quick throwaway operations, such as custom sorting keys: sorted(users, key=lambda u: u['age'])."
      },
      {
        "code": "with open('file.txt', 'r') as f: (context manager)",
        "means": "guarantees setup and teardown cleanup even on exceptions",
        "consequence": "Automatically calls f.close() when the block exits, preventing file descriptor leaks and database connection exhaustion."
      },
      {
        "code": "try / except SpecificError as e / else / finally",
        "means": "handles runtime exceptions cleanly",
        "consequence": "Always catch specific exceptions rather than bare except:, which accidentally swallows KeyboardInterrupt and SystemExit."
      },
      {
        "code": "raise ValueError('Invalid argument')",
        "means": "explicitly triggers an exception",
        "consequence": "Halts the current function and bubbles up to the caller with a descriptive error message and stack trace."
      },
      {
        "code": "class Name(BaseClass): def __init__(self, val):",
        "means": "defines an object-oriented class with constructor",
        "consequence": "self is the explicit reference to the current instance, through which instance attributes and methods are accessed."
      },
      {
        "code": "def __str__(self) vs def __repr__(self):",
        "means": "human-readable text display / unambiguous developer debug string",
        "consequence": "__str__ is used by print(); __repr__ should ideally return a valid Python expression recreating the object."
      },
      {
        "code": "@property and @method_name.setter",
        "means": "exposes a method as an attribute with getter and setter logic",
        "consequence": "Allows adding validation or computed calculations to attribute access without breaking existing code that reads obj.attribute."
      },
      {
        "code": "@decorator_name",
        "means": "wraps a function to add logging, caching, or authentication",
        "consequence": "Syntactic sugar for func = decorator(func). Used everywhere in web frameworks (e.g. @app.get('/'), @login_required)."
      },
      {
        "code": "f\"Hello, {user.name}, value is {x:.2f}\"",
        "means": "interpolates expressions directly into string literals",
        "consequence": "Evaluated at runtime. Supports inline formatting like decimals ({x:.2f}), padding, and debug print ({var=})."
      },
      {
        "code": "Slicing: list[start:stop:step]",
        "means": "extracts sub-sequences or reverses arrays",
        "consequence": "list[1:4] gets items at indices 1, 2, 3. list[::-1] returns a reversed copy of the list."
      },
      {
        "code": "enumerate(iterable, start=0)",
        "means": "yields (index, item) pairs during iteration",
        "consequence": "Replaces manual counter variables: for i, val in enumerate(items): print(i, val)."
      },
      {
        "code": "zip(*iterables)",
        "means": "aggregates elements from multiple iterables in lockstep",
        "consequence": "for name, score in zip(names, scores): pairs elements up; stops as soon as the shortest iterable is exhausted."
      },
      {
        "code": "sorted(iterable, key=fn, reverse=True)",
        "means": "returns a new sorted list using Timsort algorithm",
        "consequence": "Stable O(n log n) sorting algorithm. Use the key parameter to sort by custom object attributes or dictionary keys."
      },
      {
        "code": "any(iterable) and all(iterable)",
        "means": "checks if at least one item is truthy / checks if all are truthy",
        "consequence": "Short-circuits immediately upon determining the outcome: any() stops at the first True; all() stops at the first False."
      },
      {
        "code": "isinstance(obj, (int, float))",
        "means": "checks if an object is an instance of a class or tuple of classes",
        "consequence": "Preferred over type(obj) == class because isinstance correctly handles class inheritance and subclasses."
      },
      {
        "code": "collections.defaultdict(list) and collections.Counter",
        "means": "dictionary with default factories / frequency counter",
        "consequence": "Counter(words) automatically calculates word frequencies; defaultdict(list) initializes new keys with empty lists without KeyError."
      },
      {
        "code": "@dataclasses.dataclass",
        "means": "automatically generates __init__, __repr__, and __eq__ for classes",
        "consequence": "Eliminates repetitive boilerplate when defining pure data-holding classes: @dataclass class User: id: int; name: str."
      },
      {
        "code": "typing: Optional[T], List[T], Dict[K, V], Union[A, B]",
        "means": "type annotations for static analysis tools like mypy",
        "consequence": "Provides self-documenting function contracts that can be verified during CI/CD to catch type bugs before production."
      },
      {
        "code": "is None vs == None",
        "means": "checks memory identity against the singleton / checks equality",
        "consequence": "Always use is None. None is a unique singleton in Python memory; is checks exact identity in pointer memory."
      },
      {
        "code": "if __name__ == '__main__':",
        "means": "boilerplate ensuring code runs only when executed directly",
        "consequence": "Prevents test scripts and script execution from triggering when the file is imported as a library module by other files."
      }
    ],
    "slug": "python"
  },
  {
    "id": "C.26-regular-expressions",
    "languageId": "C.26",
    "lang": "Regular Expressions",
    "category": "Data & Storage",
    "summary": "Formal language describing text patterns: character classes, greedy and lazy quantifiers, lookarounds, and capture groups.",
    "status": "unsourced",
    "rows": [
      {
        "code": ". (dot)",
        "means": "matches any single character except newline",
        "consequence": "To match a literal dot (like in a domain name or file extension), you must escape it with a backslash: \\.."
      },
      {
        "code": "* and +",
        "means": "zero or more occurrences / one or more occurrences",
        "consequence": "Quantifiers are greedy by default: a.*b will match from the very first 'a' to the very last 'b' in the entire document."
      },
      {
        "code": "? (optional quantifier)",
        "means": "matches zero or one occurrence of the preceding element",
        "consequence": "https? matches both 'http' and 'https'. Also used after * or + to make them lazy (non-greedy)."
      },
      {
        "code": "^ and $",
        "means": "anchors matching the start of string / end of string",
        "consequence": "^\\d+$ matches an entire string of digits from start to finish, preventing matching digits buried inside text."
      },
      {
        "code": "[abc] and [^abc]",
        "means": "matches any one character inside the set / negated set",
        "consequence": "[^0-9] matches any single character that is not a digit."
      },
      {
        "code": "[a-z0-9]",
        "means": "character range matching lowercase letters or digits",
        "consequence": "Hyphens represent ranges inside brackets unless placed at the start or end of the bracket expression."
      },
      {
        "code": "\\d vs \\D and \\w vs \\W and \\s vs \\S",
        "means": "shorthand character classes (digit, word, whitespace) and their inverses",
        "consequence": "\\d matches [0-9]; \\w matches [a-zA-Z0-9_]; \\s matches spaces, tabs, and newlines. Uppercase letters invert the match."
      },
      {
        "code": "\\b (word boundary)",
        "means": "zero-width assertion between a word character (\\w) and non-word",
        "consequence": "\\bcat\\b matches the standalone word 'cat', but will not match 'catalog' or 'scatter'."
      },
      {
        "code": "(pattern) (capturing group)",
        "means": "groups sub-patterns together and captures matched text",
        "consequence": "(\\d{4})-(\\d{2})-(\\d{2}) captures year, month, and day into indexed groups $1, $2, $3."
      },
      {
        "code": "(?:pattern) (non-capturing group)",
        "means": "groups sub-patterns without allocating capture memory",
        "consequence": "Optimizes regex execution performance when you need grouping for quantifiers (e.g. (?:abc)+) but don't need the matched text."
      },
      {
        "code": "(?<name>pattern) (named capture group)",
        "means": "captures matched text into a named group",
        "consequence": "Access via match.groups.name in JavaScript/Python, making code far more maintainable than numeric indices."
      },
      {
        "code": "(?=pattern) (positive lookahead)",
        "means": "asserts that what follows matches pattern without consuming characters",
        "consequence": "\\d+(?=px) matches digits only if they are immediately followed by 'px', but does not include 'px' in the match."
      },
      {
        "code": "(?!pattern) (negative lookahead)",
        "means": "asserts that what follows does NOT match pattern",
        "consequence": "foo(?!bar) matches 'foo' only if it is not followed by 'bar'. Essential for password complexity validations."
      },
      {
        "code": "(?<=pattern) and (?<!pattern) (lookbehinds)",
        "means": "positive lookbehind / negative lookbehind assertions",
        "consequence": "(?<=\\$)\\d+ matches numbers immediately preceded by a dollar sign without including the dollar sign."
      },
      {
        "code": "a|b (alternation)",
        "means": "matches either pattern a or pattern b",
        "consequence": "Evaluated from left to right: (cat|dog) matches either animal."
      },
      {
        "code": "{n} and {min,max}",
        "means": "exact repetition count / bounded repetition range",
        "consequence": "\\d{4} matches exactly 4 digits; \\d{2,4} matches between 2 and 4 digits."
      },
      {
        "code": "*? and +? (lazy / non-greedy match)",
        "means": "matches as few characters as possible to satisfy the pattern",
        "consequence": "<.*?> matches single HTML tags like <div>, whereas <.*> greedily consumes everything from the first < to the last >."
      },
      {
        "code": "Flags: /pattern/gims",
        "means": "modifiers: global, case-insensitive, multiline, dotAll",
        "consequence": "g finds all matches; i ignores case; m makes ^ and $ match line starts/ends; s allows . to match newline characters."
      }
    ],
    "slug": "regular-expressions"
  },
  {
    "id": "C.15-ruby-rails",
    "languageId": "C.15",
    "lang": "Ruby & Rails",
    "category": "Backend & Enterprise",
    "summary": "Object-oriented language prioritizing developer happiness, elegant DSLs, and convention-over-configuration web development.",
    "status": "unsourced",
    "rows": [
      {
        "code": "def method_name(param = 'default') ... end",
        "means": "defines a method with optional default parameters",
        "consequence": "In Ruby, the last evaluated expression is automatically returned without requiring an explicit return keyword."
      },
      {
        "code": "puts vs print vs p",
        "means": "print with newline / print without newline / inspect with debug quotes",
        "consequence": "p object calls object.inspect, displaying quotes on strings and showing internal array structures, ideal for debugging."
      },
      {
        "code": "@instance_var, @@class_var, $global, :symbol",
        "means": "instance state / class-shared state / global variable / immutable symbol",
        "consequence": "Symbols (:name) are immutable, internalized strings. Ruby allocates only one memory address per symbol name."
      },
      {
        "code": "attr_accessor :name, :email",
        "means": "generates getter and setter methods automatically",
        "consequence": "attr_reader generates only getters; attr_writer generates only setters; attr_accessor creates both."
      },
      {
        "code": "Blocks: [1, 2].each do |x| ... end and { |x| ... }",
        "means": "chunks of code passed into methods to execute",
        "consequence": "Use { ... } for single-line blocks; use do ... end for multi-line blocks. The bedrock of Ruby's functional enumerables."
      },
      {
        "code": "yield(arg)",
        "means": "pauses method execution to execute the passed block",
        "consequence": "Allows writing custom iteration methods and wrappers: def benchmark; t = Time.now; yield; Time.now - t; end."
      },
      {
        "code": "class Dog < Animal ... end",
        "means": "defines a class inheriting from a superclass",
        "consequence": "In Ruby, classes are open: you can reopen any existing class (even String) and add new methods at runtime (monkey patching)."
      },
      {
        "code": "nil and nil? / empty? / blank? / present?",
        "means": "the singleton null object and state check helpers",
        "consequence": "In Ruby, ONLY false and nil are falsy. The number 0 and empty string \"\" are truthy! blank? is a Rails helper checking for whitespace."
      },
      {
        "code": "unless condition ... end",
        "means": "executes the block only if condition evaluates to false",
        "consequence": "Idiomatic opposite of if. Often used as an inline guard clause: return if user.nil? or redirect_to login unless logged_in?."
      },
      {
        "code": "self keyword",
        "means": "refers to the current executing object or class context",
        "consequence": "Inside a class method definition (def self.find_by_email), self refers to the Class object itself."
      },
      {
        "code": "ActiveRecord: User.where(active: true).order(created_at: :desc)",
        "means": "object-relational mapping querying database tables",
        "consequence": "Executes lazily: chaining query methods builds an ActiveRecord::Relation; SQL executes only when records are accessed."
      },
      {
        "code": "Associations: has_many :orders, belongs_to :user",
        "means": "declares relational database foreign key relationships",
        "consequence": "Automatically injects helper methods like user.orders and order.user, handling SQL joins behind the scenes."
      },
      {
        "code": "Safe navigation: user&.profile&.avatar_url",
        "means": "calls methods only if the receiver is not nil",
        "consequence": "Returns nil safely if any link in the chain is nil, preventing NoMethodError: undefined method for nil:NilClass."
      },
      {
        "code": "Enumerable: .map, .select, .reject, .reduce",
        "means": "functional collection pipeline transformations",
        "consequence": "numbers.select(&:even?) uses the symbol-to-proc trick (&:method) to call .even? on every item in the list."
      }
    ],
    "slug": "ruby---rails"
  },
  {
    "id": "C.20-rust",
    "languageId": "C.20",
    "lang": "Rust",
    "category": "Systems & Hardware",
    "summary": "Zero-cost abstractions, compile-time memory ownership, fearless concurrency, and bare-metal performance without a garbage collector.",
    "status": "unsourced",
    "rows": [
      {
        "code": "let vs let mut",
        "means": "immutable variable binding by default / explicitly mutable binding",
        "consequence": "Variables in Rust are strictly immutable unless declared mut, preventing accidental state corruption."
      },
      {
        "code": "fn name(param: Type) -> ReturnType { ... }",
        "means": "function declaration with mandatory type signatures",
        "consequence": "The last expression without a semicolon is the returned value. Statements ending in a semicolon evaluate to unit ()."
      },
      {
        "code": "Ownership: move semantics",
        "means": "every value has exactly one owner; value moves when assigned",
        "consequence": "let s2 = s1 moves ownership of heap data to s2. s1 is no longer valid, eliminating double-free memory corruption."
      },
      {
        "code": "&T (immutable borrow) vs &mut T (mutable borrow)",
        "means": "references allowing reading / reference allowing writing",
        "consequence": "The Borrow Checker rule: you may have any number of immutable references (&T), OR exactly one mutable reference (&mut T), never both."
      },
      {
        "code": "Lifetimes: 'a in &'a str",
        "means": "compile-time annotations proving references remain valid",
        "consequence": "Ensures no reference outlives the data it points to, mathematically preventing dangling pointer bugs at compile time."
      },
      {
        "code": "Option<T>: Some(val) and None",
        "means": "type representing a value that may or may not exist",
        "consequence": "Rust has no NULL pointer. The compiler forces developers to handle the None case explicitly before unwrapping the value."
      },
      {
        "code": "Result<T, E>: Ok(val) and Err(err)",
        "means": "type representing either operation success or failure with a reason",
        "consequence": "All recoverable errors in Rust return Result. Combined with the ? operator for ergonomic error propagation."
      },
      {
        "code": "? operator (e.g. let file = File::open(path)?)",
        "means": "unwraps Ok value or immediately returns Err upward to caller",
        "consequence": "Replaces verbose match statements with concise error bubbling while preserving the original error type."
      },
      {
        "code": "match expr { PatternA => ..., PatternB => ... }",
        "means": "exhaustive pattern matching expression",
        "consequence": "The compiler guarantees that every possible enum variant or condition is handled; missing a case produces a build error."
      },
      {
        "code": "if let Some(val) = optional { ... }",
        "means": "concise pattern matching when you only care about one variant",
        "consequence": "Executes the block only if the pattern matches, ignoring all other possibilities without requiring an exhaustive match."
      },
      {
        "code": "impl Type { fn method(&self) {} }",
        "means": "associates methods and constructors with a struct or enum",
        "consequence": "Functions without &self are associated functions (constructors like Type::new()); functions taking &self are instance methods."
      },
      {
        "code": "trait TraitName { fn method(&self); }",
        "means": "defines a shared interface of behavior across types",
        "consequence": "Types implement traits via impl TraitName for Type. Enables static dispatch with zero runtime performance cost."
      },
      {
        "code": "#[derive(Debug, Clone, PartialEq)]",
        "means": "macro automatically implementing common trait behaviors",
        "consequence": "Generates code at compile time for string debugging ({:?}), deep cloning (.clone()), or equality comparisons (==)."
      },
      {
        "code": "Box<T>",
        "means": "heap allocation pointer with single ownership",
        "consequence": "Moves data from the stack to the heap. Used for recursive types where the compiler needs a known pointer size at compile time."
      },
      {
        "code": "Rc<T> and Arc<T>",
        "means": "reference counting pointer for single-thread / multi-thread shared ownership",
        "consequence": "Arc<T> (Atomic Reference Counting) allows multiple threads to safely share read-only ownership of the same heap data."
      },
      {
        "code": "Mutex<T>",
        "means": "mutual exclusion primitive that encapsulates the data it protects",
        "consequence": "In Rust, the lock protects the data itself: let mut data = mutex.lock().unwrap(); you cannot access the data without holding the lock."
      },
      {
        "code": "vec![1, 2, 3] and Vec<T>",
        "means": "dynamically growable heap-allocated array",
        "consequence": "Provides O(1) push and pop operations, continuous cache memory layout, and automatic deallocation upon dropping."
      },
      {
        "code": "iter().map().filter().collect()",
        "means": "zero-cost lazy iterator pipeline",
        "consequence": "Compiles into machine code as fast as a handwritten C while loop, optimizing bounds checks away."
      },
      {
        "code": "String vs &str",
        "means": "heap-allocated owned string / borrowed read-only string slice",
        "consequence": "String can grow and mutate; &str is an immutable view pointing into existing UTF-8 memory."
      },
      {
        "code": "unsafe { ... }",
        "means": "tells compiler to permit raw pointer dereferencing and FFI",
        "consequence": "Used internally by standard libraries to implement low-level hardware access and high-performance primitives."
      }
    ],
    "slug": "rust"
  },
  {
    "id": "C.22-sql",
    "languageId": "C.22",
    "lang": "SQL",
    "category": "Data & Storage",
    "summary": "Declarative relational database engine: describe the desired result set, and let the query optimizer find the optimal physical plan.",
    "status": "unsourced",
    "rows": [
      {
        "code": "SELECT col1, col2 FROM table_name",
        "means": "retrieves specific columns from a relational table",
        "consequence": "Never use SELECT * in production applications; fetching unneeded columns wastes memory, network bandwidth, and prevents index-only scans."
      },
      {
        "code": "WHERE condition (AND, OR, NOT)",
        "means": "filters physical rows before grouping or aggregation",
        "consequence": "Filters must be placed here rather than in HAVING so the database engine can utilize B-Tree indexes to avoid full table scans."
      },
      {
        "code": "INNER JOIN vs LEFT JOIN on col = col",
        "means": "returns matching rows only / returns all left rows plus matched right",
        "consequence": "INNER JOIN drops rows without a counterpart; LEFT JOIN preserves all left rows, filling unmatched right columns with NULL."
      },
      {
        "code": "GROUP BY column_name",
        "means": "collapses rows sharing the same value into single summary buckets",
        "consequence": "Every column in the SELECT list must either appear in the GROUP BY clause or be wrapped inside an aggregate function."
      },
      {
        "code": "HAVING aggregate_condition",
        "means": "filters aggregated summary buckets after GROUP BY",
        "consequence": "WHERE filters individual rows before grouping; HAVING filters collapsed groups (e.g. HAVING COUNT(*) > 5)."
      },
      {
        "code": "ORDER BY col ASC | DESC and LIMIT n OFFSET m",
        "means": "sorts result rows and paginates output",
        "consequence": "Without ORDER BY, relational row return order is nondeterministic. High OFFSET pagination degrades performance; prefer keyset pagination."
      },
      {
        "code": "INSERT INTO table (col1, col2) VALUES (v1, v2)",
        "means": "appends new rows to a table",
        "consequence": "Support batch inserts: INSERT INTO table VALUES (...), (...) executes in a single round-trip."
      },
      {
        "code": "UPDATE table SET col = val WHERE condition",
        "means": "modifies existing rows matching the filter",
        "consequence": "Always test the WHERE clause with a SELECT first; omitting WHERE updates every single row in the entire database table."
      },
      {
        "code": "DELETE FROM table WHERE condition",
        "means": "removes matching rows from a table",
        "consequence": "Logged row by row. For wiping an entire table instantly, prefer TRUNCATE TABLE, which resets storage extents directly."
      },
      {
        "code": "CREATE TABLE name (id SERIAL PRIMARY KEY, ...)",
        "means": "defines relational schema, column types, and constraints",
        "consequence": "Constraints (NOT NULL, UNIQUE, CHECK) enforce data integrity at the database level regardless of application bugs."
      },
      {
        "code": "PRIMARY KEY vs FOREIGN KEY ... REFERENCES",
        "means": "unique record identifier / enforces referential relationship between tables",
        "consequence": "Foreign keys guarantee data consistency: the database prevents deleting a parent record if child records still reference it."
      },
      {
        "code": "CREATE INDEX idx_name ON table (column)",
        "means": "creates a B-Tree lookup structure for fast O(log N) searches",
        "consequence": "Indexes speed up SELECT queries dramatically, but add minor overhead to INSERT, UPDATE, and DELETE operations."
      },
      {
        "code": "NULL, IS NULL, IS NOT NULL",
        "means": "represents unknown or missing data in three-valued logic",
        "consequence": "Never check col = NULL; in SQL, NULL = NULL evaluates to UNKNOWN, not TRUE. You must use IS NULL or IS NOT NULL."
      },
      {
        "code": "COUNT(*), SUM(col), AVG(col), MIN(col), MAX(col)",
        "means": "aggregate functions computing values across multiple rows",
        "consequence": "COUNT(*) counts all rows; COUNT(col) counts only rows where col is not NULL."
      },
      {
        "code": "DISTINCT",
        "means": "eliminates duplicate rows from the result set",
        "consequence": "Requires the database engine to perform an expensive sort or hash operation across all retrieved rows."
      },
      {
        "code": "LIKE '%pattern%' vs ILIKE",
        "means": "wildcard pattern matching / case-insensitive matching",
        "consequence": "Prefix wildcards ('%text') cannot utilize standard B-Tree indexes, triggering full table scans. Use full-text search indexes instead."
      },
      {
        "code": "IN (val1, val2) and NOT IN",
        "means": "checks if value matches any item in a list or subquery",
        "consequence": "Warning: NOT IN returns zero rows if the subquery contains even a single NULL value due to three-valued logic. Use NOT EXISTS."
      },
      {
        "code": "CASE WHEN cond THEN val ELSE default END",
        "means": "conditional branching expression inside queries",
        "consequence": "Allows dynamic computed columns: CASE WHEN score >= 90 THEN 'A' ELSE 'B' END."
      },
      {
        "code": "BEGIN TRANSACTION, COMMIT, ROLLBACK",
        "means": "guarantees ACID atomic transaction boundaries",
        "consequence": "All updates inside the transaction succeed together, or ROLLBACK aborts them completely if a failure occurs."
      },
      {
        "code": "EXPLAIN and EXPLAIN ANALYZE",
        "means": "displays the query execution plan and actual execution timings",
        "consequence": "Identifies sequential scans (Seq Scan), index scans (Index Scan), join algorithms, and execution bottlenecks."
      },
      {
        "code": "COALESCE(val1, val2, ...)",
        "means": "returns the first non-null argument in the list",
        "consequence": "COALESCE(user.phone, user.email, 'N/A') provides fallbacks for nullable database columns."
      },
      {
        "code": "Window function: ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)",
        "means": "calculates ranking or cumulative metrics across row subsets",
        "consequence": "Unlike GROUP BY, window functions do not collapse rows together; they compute values alongside the original individual rows."
      }
    ],
    "slug": "sql"
  },
  {
    "id": "C.21-swift",
    "languageId": "C.21",
    "lang": "Swift",
    "category": "Mobile & Multiplatform",
    "summary": "Fast, safe, modern language engineered by Apple for iOS, macOS, watchOS, and native systems development.",
    "status": "unsourced",
    "rows": [
      {
        "code": "let vs var",
        "means": "immutable constant / mutable variable",
        "consequence": "Swift strongly encourages let for all values that do not change, enabling compiler optimization and thread safety."
      },
      {
        "code": "func name(label param: Type) -> ReturnType",
        "means": "function declaration with external argument labels",
        "consequence": "Argument labels make calls read like natural English sentences: greet(person: \"Alice\", from: \"London\")."
      },
      {
        "code": "Optional<Wrapped> (Type?): .some(val) or .none",
        "means": "type representing a value that may be nil",
        "consequence": "Swift disallows nil on standard types. Optionals must be explicitly unwrapped before use."
      },
      {
        "code": "if let val = opt and guard let val = opt else { return }",
        "means": "safe optional binding constructs",
        "consequence": "guard let checks for non-null and exits early if nil, keeping the unwrapped variable in scope for the rest of the function."
      },
      {
        "code": "Nil-coalescing: opt ?? fallback",
        "means": "unwraps optional or returns fallback value if nil",
        "consequence": "let name = username ?? \"Guest\" guarantees a non-optional String value."
      },
      {
        "code": "struct (value type) vs class (reference type)",
        "means": "copied on assignment / shared reference in memory",
        "consequence": "Swift prefers structs for almost all models; structs are allocated cheaply and cannot cause unintended shared-state mutations."
      },
      {
        "code": "protocol ProtocolName { func method() }",
        "means": "defines an interface contract of methods and properties",
        "consequence": "The core of Protocol-Oriented Programming (POP). Protocols can provide default implementations via extensions."
      },
      {
        "code": "extension Type { ... }",
        "means": "adds new methods, computed properties, or protocol conformance",
        "consequence": "Allows extending built-in types (e.g. extension Int { var squared: Int { self * self } }) across codebases."
      },
      {
        "code": "enum with associated values: Result<Success, Failure>",
        "means": "enumeration variants carrying custom data payloads",
        "consequence": "enum NetworkState { case loading; case success(Data); case error(Error) } models state machines cleanly."
      },
      {
        "code": "Closures: { (params) -> ReturnType in body }",
        "means": "self-contained anonymous functional blocks",
        "consequence": "Trailing closure syntax allows omitting parentheses: numbers.map { $0 * 2 } using shorthand argument names ($0, $1)."
      },
      {
        "code": "defer { cleanup() }",
        "means": "executes code when the current code scope exits",
        "consequence": "Guarantees resource teardown (file closes, lock releases) regardless of how the function returns."
      },
      {
        "code": "async / await and Task { ... }",
        "means": "structured modern asynchronous programming",
        "consequence": "Paired with Actors (actor BankAccount) to eliminate data races and thread synchronization bugs automatically."
      }
    ],
    "slug": "swift"
  },
  {
    "id": "C.19-typescript",
    "languageId": "C.19",
    "lang": "TypeScript",
    "category": "Web & Frontend",
    "summary": "Typed JavaScript at scale: compile-time type verification, structural type modeling, and developer tooling.",
    "status": "unsourced",
    "rows": [
      {
        "code": ": string | number | boolean",
        "means": "primitive type annotations for variables and parameters",
        "consequence": "Enforces compile-time checking. If a function declares (id: string), passing a number immediately halts the build with an error."
      },
      {
        "code": "interface User { id: string; name: string; }",
        "means": "defines an extensible object shape contract",
        "consequence": "Interfaces can be extended (interface Admin extends User) and merged; ideal for public library APIs and data contracts."
      },
      {
        "code": "type ID = string | number",
        "means": "type alias for naming any type, union, or primitive",
        "consequence": "Unlike interfaces, type aliases can name unions, tuples, and primitive primitives directly: type Point = [number, number]."
      },
      {
        "code": "prop?: string (optional property)",
        "means": "indicates a property may be undefined or omitted",
        "consequence": "Equivalent to string | undefined, allowing callers to construct objects without providing that field."
      },
      {
        "code": "readonly prop: string",
        "means": "prevents modification after object initialization",
        "consequence": "Enforces immutability at compile-time: user.id = 'new' produces a TypeScript error."
      },
      {
        "code": "Union types: A | B",
        "means": "value can be either type A or type B",
        "consequence": "TypeScript requires you to narrow the union with type guards (typeof, instanceof, or in) before accessing specific properties."
      },
      {
        "code": "Intersection types: A & B",
        "means": "combines all properties of multiple types into one",
        "consequence": "type Employee = Person & { employeeId: number } requires an object to have all properties from both Person and the new type."
      },
      {
        "code": "Generics: <T>",
        "means": "parameterizes types so functions work with any type safely",
        "consequence": "function identity<T>(arg: T): T preserves the exact type passed in rather than erasing it to any or unknown."
      },
      {
        "code": "Generic constraint: <T extends Record<string, any>>",
        "means": "restricts what types may be passed to a generic parameter",
        "consequence": "Ensures T satisfies minimum requirements, such as requiring an object or requiring an id property: <T extends { id: string }>."
      },
      {
        "code": "Type assertion: value as string",
        "means": "overrides compiler inference with developer assertion",
        "consequence": "Use sparingly. Does not perform runtime conversion; if value is not actually a string, it will cause runtime bugs."
      },
      {
        "code": "satisfies operator",
        "means": "validates an expression matches a type without widening it",
        "consequence": "const config = { host: 'localhost' } satisfies Config checks that config matches Config while preserving exact string literal types."
      },
      {
        "code": "keyof T",
        "means": "extracts a union of all property keys of type T",
        "consequence": "If type User = { id: string; name: string }, keyof User evaluates to 'id' | 'name'."
      },
      {
        "code": "typeof variable",
        "means": "extracts the TypeScript type of a runtime JavaScript variable",
        "consequence": "Allows generating types directly from runtime constants: const defaultUser = { ... }; type User = typeof defaultUser;."
      },
      {
        "code": "as const",
        "means": "narrows literals to readonly immutable values",
        "consequence": "const ROLES = ['admin', 'editor'] as const infers readonly ['admin', 'editor'] instead of string[], preserving exact literal values."
      },
      {
        "code": "unknown vs any vs never",
        "means": "type-safe unknown / opt-out of checking / value that can never occur",
        "consequence": "Always prefer unknown over any. any disables all type checking; unknown forces you to check the type before using it."
      },
      {
        "code": "Partial<T>",
        "means": "utility type making all properties in T optional",
        "consequence": "Essential for PATCH update APIs where users can update any subset of an entity's fields without providing the entire object."
      },
      {
        "code": "Required<T>",
        "means": "utility type making all properties in T mandatory",
        "consequence": "Inverts Partial<T>, stripping away all ? optional markers from an interface."
      },
      {
        "code": "Readonly<T>",
        "means": "utility type freezing all properties in T against mutation",
        "consequence": "Marks all fields readonly, preventing accidental modifications in pure functional code pipelines."
      },
      {
        "code": "Record<K, V>",
        "means": "utility type for key-value dictionaries with keys K and values V",
        "consequence": "Record<string, User> models a lookup table or hash map where string IDs map to User objects."
      },
      {
        "code": "Pick<T, 'id' | 'name'>",
        "means": "utility type selecting only specified properties from T",
        "consequence": "Creates a lean sub-type containing only the chosen fields, preventing leaking sensitive fields like passwords."
      },
      {
        "code": "Omit<T, 'password'>",
        "means": "utility type excluding specified properties from T",
        "consequence": "Creates a new type with everything from T except the omitted keys, ideal for public DTO projections."
      },
      {
        "code": "ReturnType<typeof fn>",
        "means": "extracts the return type of a function",
        "consequence": "Automatically keeps types in sync when a factory function's implementation changes without needing manual type duplication."
      },
      {
        "code": "Parameters<typeof fn>",
        "means": "extracts function parameter types as a tuple",
        "consequence": "Useful for wrapping or proxying third-party functions while preserving their exact argument types."
      },
      {
        "code": "Type guard: pet is Dog",
        "means": "custom function that narrows types in conditional branches",
        "consequence": "function isDog(p: Animal): p is Dog { return 'bark' in p; }. Inside an if (isDog(pet)) block, pet is automatically typed as Dog."
      },
      {
        "code": "Discriminated union: { kind: 'circle', radius: number } | ...",
        "means": "union of types sharing a common literal tag property",
        "consequence": "Switching on the kind property lets the compiler exhaustively narrow the shape in each switch case."
      },
      {
        "code": "tsconfig: strict: true",
        "means": "enables all strict type checking flags",
        "consequence": "Turns on noImplicitAny, strictNullChecks, and strictFunctionTypes, catching the vast majority of silent JavaScript bugs at build time."
      }
    ],
    "slug": "typescript"
  }
];

  const SOURCES = {};

  window.CurriculumWords.all = function () {
    return LISTS;
  };

  window.CurriculumWords.forLanguage = function (languageId) {
    return LISTS.filter(function (l) { return l.languageId === languageId; });
  };

  // null, never [] — honest absence and empty evidence must not look alike.
  window.CurriculumWords.getSources = function (listId) {
    return Object.prototype.hasOwnProperty.call(SOURCES, listId) ? SOURCES[listId] : null;
  };

  window.CurriculumWords.rowCount = function () {
    return LISTS.reduce(function (n, l) { return n + l.rows.length; }, 0);
  };
})();
