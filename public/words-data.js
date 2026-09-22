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
    "status": "traced",
    "seed": "C.1",
    "rows": [
      {
        "code": "MOV dst, src",
        "means": "copies data between CPU registers or between memory and registers",
        "consequence": "x86_64 cannot move directly from memory to memory in a single instruction; data must load into a register first."
      },
      {
        "code": "ADD dst, src\nSUB dst, src   -- sets ZF CF SF OF",
        "means": "performs arithmetic addition and subtraction on registers",
        "consequence": "Arithmetic also writes the condition flags — zero, carry, sign and overflow — which is how the next instruction knows what happened without being told."
      },
      {
        "code": "CMP op1, op2",
        "means": "compares two operands by computing (op1 - op2) without saving result",
        "consequence": "Sets CPU flags based on the subtraction result, immediately followed by conditional jump instructions."
      },
      {
        "code": "JMP label   -- writes the instruction pointer",
        "means": "unconditional jump: replaces the instruction pointer with the target address",
        "consequence": "A direct jump: the address of the next instruction is replaced, which is what every loop, branch and function return is made of underneath."
      },
      {
        "code": "JE / JZ   (jump if equal / zero)\nJNE / JNZ (jump if not equal / not zero)",
        "means": "jump if the previous comparison was equal, or if it was not",
        "consequence": "Conditional branches read the flag the previous arithmetic set, which is why a comparison and the branch that uses it must not be separated by anything that also writes flags."
      },
      {
        "code": "CALL label\nRET   -- pushes and pops the return address",
        "means": "calls subroutine / returns to caller address",
        "consequence": "CALL puts the address of the following instruction on the stack and jumps; RET takes it off and jumps back. The call stack is not a language feature here, it is these two instructions and a register."
      },
      {
        "code": "PUSH src\nPOP dst   -- adjusts RSP",
        "means": "pushes value onto stack (decrements RSP) / pops into register (increments RSP)",
        "consequence": "The stack grows downward, from high addresses towards low ones, so pushing subtracts from the stack pointer and the deepest frame has the lowest address."
      },
      {
        "code": "RAX / EAX",
        "means": "64-bit / 32-bit accumulator register; stores function return values",
        "consequence": "By calling convention, functions return their numeric or pointer result in RAX."
      },
      {
        "code": "RSP (stack pointer)\nPUSH / POP / CALL / RET adjust it\nsub rsp, 32   -- allocate a frame by hand",
        "means": "points to the top of the current thread execution stack",
        "consequence": "Moved automatically by the stack instructions, or by hand to make room for locals — which is what a function prologue is, once the language is taken away."
      },
      {
        "code": "RBP (Base Pointer)",
        "means": "frame pointer pointing to the base of current stack frame",
        "consequence": "Historically used to index function local variables and arguments; modern compilers often omit it (-fomit-frame-pointer)."
      },
      {
        "code": "RDI, RSI, RDX, RCX, R8, R9   -- first six integer arguments",
        "means": "the registers this platform's calling convention uses for arguments",
        "consequence": "The calling convention used on these systems passes the first six integer or pointer arguments in registers rather than on the stack, which is why a function with few arguments never touches memory to receive them."
      },
      {
        "code": "RIP (instruction pointer)   -- not writable by MOV",
        "means": "register holding the memory address of the next instruction to execute",
        "consequence": "Cannot be assigned directly; it is changed by jumps, calls and returns. That restriction is the reason control flow is a small fixed set of instructions rather than arithmetic on an address."
      },
      {
        "code": "LEA dst, [src + offset]\nlea rax, [rdi + rsi*4 + 8]",
        "means": "loads an effective address: computes an address without touching memory",
        "consequence": "Computes an address without reading memory, which is why it gets used as a fast multiply-and-add: the address arithmetic unit does the work the arithmetic instructions would have."
      },
      {
        "code": "SYSCALL   -- number in RAX, arguments in RDI, RSI, RDX",
        "means": "hands control to the kernel, leaving the program's own privilege level",
        "consequence": "Hands control to the kernel with the call number in a register and the arguments in the argument registers. Everything a program cannot do for itself — open a file, write output, exit — goes through this one instruction."
      },
      {
        "code": "NOP (0x90)",
        "means": "does nothing, and occupies space while doing it",
        "consequence": "Does nothing, and is used to pad so that a loop target begins on an address the processor fetches efficiently. An instruction whose only purpose is where the next one starts."
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
    "status": "traced",
    "seed": "C.25",
    "rows": [
      {
        "code": "| (pipe: cmd1 | cmd2)",
        "means": "connects standard output (stdout, fd 1) of cmd1 to standard input (stdin) of cmd2",
        "consequence": "The fundamental pipeline operator. By default, error messages (stderr, fd 2) do not pass through the pipe, which is why a failing command in the middle of a pipeline can leave you reading an empty result and no error."
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
        "consequence": "An exit status of zero means success; any non-zero value is a failure code, which is the opposite of the convention in most languages and the source of a great many inverted conditions."
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
        "code": "awk '{print $1, $3}' file.txt    # $NF last column, NR line number",
        "means": "pattern-directed column processing language",
        "consequence": "Splits lines by whitespace by default; $1 is the first column, $NF is the last, and NR is the line number."
      },
      {
        "code": "xargs -I {} cmd {}",
        "means": "builds and executes commands from standard input lines",
        "consequence": "find . -name \"*.tmp\" | xargs rm -f deletes all matching files efficiently in batch chunks."
      },
      {
        "code": "trap \"cleanup_fn\" EXIT INT TERM",
        "means": "registers signals and exit handlers for automatic cleanup",
        "consequence": "Ensures temporary directories and locks are removed when the script finishes or is interrupted at the terminal."
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
    "status": "traced",
    "seed": "C.7",
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
        "consequence": "Their widths are not fixed by the language: the standard sets minimum ranges and lets the sizes follow the machine, which is why code that assumes a particular width stops being portable the moment it moves. The one size you may rely on is that sizeof(char) is one, by definition."
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
        "consequence": "mode can be \"r\" to read, \"w\" to overwrite, \"a\" to append, or \"rb\" for binary. The call returns a null pointer on failure, so the result is checked before it is used."
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
        "consequence": "memset(buf, 0, sizeof(buf)) zeroes a block. Both are expected to be replaced by the compiler or the library with whatever the target's fastest copy is, which is why hand-written byte loops lose to them."
      },
      {
        "code": "NULL",
        "means": "pointer literal representing the address zero",
        "consequence": "Dereferencing it is not a language-level error and not detected by the compiler; on a machine with memory protection the hardware refuses the access and the program is stopped."
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
    "status": "traced",
    "seed": "C.17",
    "rows": [
      {
        "code": "namespace Company.App; and using System.Text.Json;",
        "means": "organizes code into logical scopes / imports external namespaces",
        "consequence": "File-scoped namespaces (C# 10+) eliminate unnecessary indentation levels across entire source files."
      },
      {
        "code": "public class / record / struct",
        "means": "reference type / immutable data-carrier / lightweight value type",
        "consequence": "records give value-based equality without writing it; structs are values rather than references, which keeps them off the managed heap and out of the collector's work."
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
        "code": "items.Where(x => x.Active).Select(x => x.Name).ToList()",
        "means": "language-integrated query over collections and databases",
        "consequence": "The same expression runs in memory over a collection, or is translated into a query the database executes, depending on what it is applied to — which is convenient and is also how a query nobody meant to send ends up being sent."
      },
      {
        "code": "Null-conditional: user?.Profile?.AvatarUrl",
        "means": "evaluates member access only if the target is non-null",
        "consequence": "Returns null safely if any reference in the chain is null, eliminating deeply nested if (obj != null) checks."
      },
      {
        "code": "val ?? fallback\nval ??= fallback\nstring display = username ?? \"Guest\";",
        "means": "provides fallback value / assigns fallback only if currently null",
        "consequence": "The second form assigns only when the target is currently null, which removes the read-test-write that people write by hand and get subtly wrong."
      },
      {
        "code": "Nullable reference types: string? vs string",
        "means": "compiler warnings when accessing potentially null references",
        "consequence": "When enabled, the compiler treats all standard types as non-null by default, catching NullReferenceException before deployment."
      },
      {
        "code": "using var stream = new FileStream(...);\n// stream.Dispose() at end of scope",
        "means": "disposes IDisposable resources automatically when scope ends",
        "consequence": "The declaration form releases the resource when the enclosing block ends, on every path out of it, so a release cannot be skipped by an early return or an exception."
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
        "code": "services.AddScoped<IOrderService, OrderService>()\n// AddTransient / AddScoped / AddSingleton",
        "means": "built-in container managing how long a dependency lives",
        "consequence": "Transient creates a new instance per request for it; scoped creates one per incoming web request; singleton creates one for the life of the application. Choosing wrongly is how shared state appears where nobody intended it."
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
    "status": "traced",
    "seed": "C.9",
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
        "means": "type-safe null pointer literal, replacing the integer zero",
        "consequence": "Has type std::nullptr_t, so a function overloaded on both an integer and a pointer is no longer ambiguous when passed a null pointer."
      },
      {
        "code": "static_cast<T>(v) vs dynamic_cast<T>(v)",
        "means": "compile-time type conversion / runtime checked polymorphic downcast",
        "consequence": "dynamic_cast safely checks polymorphic class hierarchies at runtime, returning nullptr if the cast is invalid."
      },
      {
        "code": "std::optional<T>",
        "means": "container holding either a valid value or nothing (std::nullopt)",
        "consequence": "Removes the need for a sentinel value — a negative number, or a null pointer — to mean that an operation produced no result."
      },
      {
        "code": "std::ranges and views (C++20)",
        "means": "composable, lazy functional pipelines over collections",
        "consequence": "auto res = vec | std::views::filter(is_even) | std::views::transform(square) executes lazily without allocating intermediate vectors."
      },
      {
        "code": "std::mutex and std::lock_guard<std::mutex>",
        "means": "a mutual exclusion lock whose release is tied to scope",
        "consequence": "lock_guard locks the mutex when it is constructed and unlocks it when the scope exits, so an early return or a thrown exception cannot leave it held."
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
    "status": "traced",
    "seed": "C.24",
    "rows": [
      {
        "code": "* { box-sizing: border-box; }",
        "means": "includes padding and border inside total width and height",
        "consequence": "The universal CSS reset invariant. With content-box, adding 10px padding makes a 100px element 120px wide, causing layout overflow."
      },
      {
        "code": "element, .class, #id",
        "means": "tag selector / class selector / unique identifier selector",
        "consequence": "An identifier selector carries high specificity and is correspondingly hard to override later; a class selector is weaker and composes, which is why maintainable sheets are built from classes."
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
        "consequence": "rem is relative to the root font size, so it respects a reader who has changed it; em is relative to the parent, so it compounds when nested; the viewport units are a hundredth of the viewport's width or height."
      },
      {
        "code": "color vs background-color",
        "means": "text foreground color / container background surface color",
        "consequence": "Text needs a contrast ratio of at least 4.5 to 1 against its background to meet the accessibility guidelines at level AA, with large text allowed 3 to 1. The ratios are thresholds rather than targets to round towards, and the reason for them is readers with moderately low vision who are not using any assistive technology."
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
        "consequence": "Transforms do not trigger layout or repaint, which is why they are the ones to reach for when animating something the reader is watching."
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
        "code": "::before and ::after\ncontent: '';",
        "means": "pseudo-elements that insert decorative content into CSS",
        "consequence": "Requires the content property to exist at all. Used for icons, tooltips and accent lines without adding elements to the document that mean nothing."
      },
      {
        "code": "--primary-color: #2563eb and var(--primary-color)",
        "means": "CSS custom properties (design tokens and variables)",
        "consequence": "Unlike a preprocessor's variables, which are substituted before the sheet ships, these are live: they cascade, can be changed at run time, and are read by the element that uses them — which is what makes a theme switch a change to one value."
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
    "status": "traced",
    "seed": "C.23",
    "rows": [
      {
        "code": "__global__ void kernel()",
        "means": "declares a GPU kernel function called from the CPU (host)",
        "consequence": "Executes on the GPU device asynchronously across thousands of parallel threads. Must return void."
      },
      {
        "code": "__device__ void helper()",
        "means": "GPU function callable only from other GPU kernels or functions",
        "consequence": "Compiled into the device's own instruction set and run by individual threads on the hardware's processing units, so it can be called from a kernel but never from the host program."
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
        "means": "allocates raw memory in the device's own high-bandwidth memory",
        "consequence": "The host cannot dereference the pointer this returns: it addresses memory on the other side of the bus, and reaching it requires an explicit copy."
      },
      {
        "code": "cudaMemcpy(dst, src, size, cudaMemcpyHostToDevice)",
        "means": "copies data across the bus from host memory to device memory",
        "consequence": "That transfer is frequently the bottleneck in the whole program, which is why the shape of a fast solution is usually to move data once and do as much as possible while it is there."
      },
      {
        "code": "cudaMemcpy(dst, src, size, cudaMemcpyDeviceToHost)",
        "means": "transfers computed results from device memory back to the host",
        "consequence": "Synchronises as well as copies: the host waits until the transfer completes, so a result that is read too eagerly serialises a program that was meant to be parallel."
      },
      {
        "code": "cudaFree(d_ptr)",
        "means": "frees an allocation on the device",
        "consequence": "Must pair with every allocation. The device's memory is smaller than the host's and is not collected for you, so a leak in a long-running process ends as a failed allocation rather than as slow swapping."
      },
      {
        "code": "__shared__ float cache[256]",
        "means": "allocates fast on-chip memory shared by the threads of one block",
        "consequence": "Latency and bandwidth are orders of magnitude better than the device's main memory, which is why the standard shape of a fast kernel is to stage a tile of data here, work on it, and write back once."
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
    "status": "traced",
    "seed": "C.16",
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
        "means": "starts a lightweight process belonging to the runtime",
        "consequence": "These are not operating system threads: they are created and scheduled by the runtime, start with a very small amount of memory, and are isolated from one another, which is why a program can hold hundreds of thousands of them and why one dying harms nothing else."
      },
      {
        "code": "send(pid, msg) and receive do msg -> ... end",
        "means": "asynchronous message passing between isolated processes",
        "consequence": "Processes have private heaps and mailboxes. If a process crashes, it cannot corrupt memory in any other process."
      },
      {
        "code": "GenServer (Generic Server)",
        "means": "a standard behaviour for a stateful server process",
        "consequence": "Standardises the callbacks — init, handle_call, handle_cast, handle_info — so that every stateful process in a system is started, called and supervised the same way."
      },
      {
        "code": "Supervisor: 'let it crash' philosophy",
        "means": "monitors child processes and restarts them on failure",
        "consequence": "Instead of defensive code trying to handle every rare corrupt state, crashed processes are simply restarted from clean initial state."
      },
      {
        "code": "Enum.map / Enum.filter / Enum.reduce\nStream.map(...) |> Enum.to_list()",
        "means": "functional transformations over collections and streams",
        "consequence": "The eager versions build the whole collection at each step; the lazy module defers the work so a large source is walked once rather than copied repeatedly."
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
    "status": "traced",
    "seed": "C.18",
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
        "consequence": "Infers the type from the value on the right, so the type is written once where it is produced rather than repeated at every declaration. Only valid inside a function, which keeps package-level declarations explicit."
      },
      {
        "code": "struct { Field string `json:\"field\"` }",
        "means": "composite data type with field definitions and reflection tags",
        "consequence": "Struct tags carry metadata for serialisation — how this field should be named in JSON or XML, or which database column it maps to. A field whose name starts with a capital letter is exported from the package; a lower-case one is not, which makes visibility a property of the name rather than a keyword."
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
        "consequence": "Runs when the surrounding function returns, whichever path it takes, so a file close or a lock release sits next to the thing it undoes instead of at every exit."
      },
      {
        "code": "go workerFunction()",
        "means": "launches a function on a lightweight concurrent goroutine",
        "consequence": "Starts a concurrent unit managed by the runtime rather than by the operating system, with a stack that starts at a couple of kilobytes and grows as needed — which is why a program can hold hundreds of thousands of them."
      },
      {
        "code": "chan Type and ch <- val / val := <-ch",
        "means": "typed channel pipe: send value / receive value",
        "consequence": "A channel carries values between concurrent units, so state is passed rather than shared and the usual race on shared memory has nowhere to happen."
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
    "status": "traced",
    "seed": "C.24",
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
        "consequence": "Placed in the head so styles are applied before the text is painted, which is what prevents the unstyled flash a reader sees when a sheet arrives late."
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
        "consequence": "Unlike a div with a click handler, it is reachable by keyboard, activates on the usual keys without code, and is announced as a button by a screen reader."
      },
      {
        "code": "<form action=\"/api/submit\" method=\"POST\">",
        "means": "data collection and submission container",
        "consequence": "Groups inputs and owns submission, including submission from the keyboard and the validation the browser performs before anything is sent."
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
        "consequence": "Tells a screen reader how many items are in the set before it starts reading them, which is the difference between navigating a list and wading through a stack of anonymous containers."
      },
      {
        "code": "<img src=\"pic.webp\" alt=\"Descriptive text\" loading=\"lazy\">",
        "means": "raster or vector image embedding",
        "consequence": "The alt attribute describes the image for blind users and when images fail to load. loading=\"lazy\" defers offscreen downloads."
      },
      {
        "code": "<picture>\n  <source srcset=\"hero.avif\" type=\"image/avif\">\n  <source srcset=\"hero.webp\" type=\"image/webp\">\n  <img src=\"hero.jpg\" alt=\"...\">\n</picture>",
        "means": "art direction and responsive image switching",
        "consequence": "Offers newer formats first and falls back to the widely supported one, or swaps the crop entirely between a phone and a desktop — the choice being made by the browser, which knows things the author does not."
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
        "consequence": "Handles the backdrop, keeps keyboard focus inside the dialog while it is open, and closes on the usual key, none of which has to be written by hand."
      },
      {
        "code": "<details> and <summary>Click to toggle</summary>",
        "means": "native disclosure widget / accordion",
        "consequence": "Toggles visibility of child content natively without any JavaScript or CSS state management."
      },
      {
        "code": "aria-* attributes (e.g. aria-expanded, aria-label)",
        "means": "accessibility attributes describing state and role",
        "consequence": "Communicates dynamic changes — a menu opening, a region loading — to assistive technology, which otherwise sees only the markup and not what changed."
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
    "status": "traced",
    "seed": "C.12",
    "rows": [
      {
        "code": "public class Name { ... }",
        "means": "top-level class visible to all packages in the project",
        "consequence": "In Java, every public class must reside in a file matching its exact name (Name.java). Encapsulates state and methods."
      },
      {
        "code": "public static void main(String[] args)",
        "means": "the entry point the runtime looks for",
        "consequence": "public so the runtime may call it, static so it runs without an instance of the class existing, and returning nothing because the exit status is set separately."
      },
      {
        "code": "System.out.println(data)",
        "means": "prints formatted text followed by a newline to stdout",
        "consequence": "Buffered stream output to the operating system terminal; automatically invokes the object's toString() method."
      },
      {
        "code": "new ClassName()",
        "means": "allocates an object on the managed heap and runs its constructor",
        "consequence": "Objects live on the collected heap; the references to them live on the stack of the thread using them, which is the distinction that makes the collector possible."
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
        "code": "final (variable / method / class)\npublic final class java.lang.String",
        "means": "constant value / cannot be overridden / cannot be subclassed",
        "consequence": "A final class cannot be subclassed, which is what lets the standard string type promise that an instance never changes after it is made — and that promise is what makes sharing one between threads safe."
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
        "consequence": "Prevents the compiler and the processor from keeping the variable in a register or a cache, so a write by one thread is visible to the next thread that reads it."
      },
      {
        "code": "var count = 42; (local variable type inference)",
        "means": "compiler infers the static type from the right-hand initializer",
        "consequence": "Available in Java 10+ for local variables. Keeps code concise without sacrificing static compile-time type safety."
      },
      {
        "code": "(x, y) -> x + y",
        "means": "compact implementation of an interface with a single abstract method",
        "consequence": "Passed directly wherever such an interface is expected, which is what lets a method take behaviour as an argument without a named class existing for it."
      },
      {
        "code": "<T extends Comparable<T>>\n// erased to Object in the bytecode",
        "means": "compile-time type parameters with bounded constraints",
        "consequence": "Implemented by erasure: the compiler checks the types and then removes them, so the runtime sees the unparameterised type. That is why you cannot ask, at run time, what a collection was parameterised with."
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
    "status": "traced",
    "seed": "C.13",
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
        "means": "provides a fallback only when the value is null or undefined",
        "consequence": "Falls back only when the left side is null or undefined, unlike the older operator, which also falls back on zero and the empty string — which is the bug it was introduced to fix."
      },
      {
        "code": "async / await",
        "means": "writes asynchronous promise code in synchronous style",
        "consequence": "Syntax over the same underlying objects: await suspends the function until the pending value settles, so sequential-looking code does not block anything else."
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
        "consequence": "Returns a pending value that settles into a response object; the body is read with a second await, because the headers arriving and the body arriving are two different moments."
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
        "consequence": "Stores strings only, so anything structured has to be serialised on the way in and parsed on the way out, and the space available is a few megabytes and varies by browser."
      },
      {
        "code": "setTimeout(fn, ms) / setInterval(fn, ms)",
        "means": "schedules a function call after delay / on recurring interval",
        "consequence": "Returns a handle that must be kept if the timer is ever to be cancelled, and a repeating timer that nobody cancels keeps the page busy long after the thing that wanted it has gone."
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
    "status": "traced",
    "seed": "C.21",
    "rows": [
      {
        "code": "val vs var",
        "means": "read-only immutable reference / reassignable mutable variable",
        "consequence": "Prefer val by default. Immutable references prevent side-effect bugs across multithreaded Android apps."
      },
      {
        "code": "fun name(param: Type): ReturnType { ... }\nfun double(x: Int) = x * 2",
        "means": "function declaration with concise syntax",
        "consequence": "A function whose body is a single expression can drop the braces and the return, as the second form shows."
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
        "code": "name ?: \"Anonymous\"\nval length: Int = str?.length ?: 0",
        "means": "provides fallback value if left-hand expression is null",
        "consequence": "The fallback makes the result non-null, so the type after the operator has no question mark and the compiler stops asking about it."
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
        "consequence": "A suspending function pauses without blocking the thread underneath it, which is what keeps an interface responsive while work is in flight."
      },
      {
        "code": "sealed interface UiState {\n  object Loading\n  data class Success(val d: Data)\n  data class Error(val msg: String)\n}",
        "means": "restricted class hierarchies representing finite state variants",
        "consequence": "The compiler knows the whole set of variants, so a when over them can be checked for exhaustiveness and a new state cannot be forgotten at one of the places that handles them."
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
    "status": "traced",
    "seed": "C.14",
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
        "code": "namespace App\\Services;\nuse App\\Models\\User;",
        "means": "organizes classes into hierarchical packages and imports them",
        "consequence": "Follows the autoloading standard that maps a namespace path directly onto a filesystem directory, which is what lets the package manager find a class without any registration step."
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
        "code": "$val ?? 'default'\n$name = $_GET['user'] ?? 'anonymous';",
        "means": "returns fallback if variable is null or unset",
        "consequence": "Safe against a key that is not there: the fallback is used rather than a warning being raised for an undefined index."
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
        "means": "a database access layer with prepared statements",
        "consequence": "A prepared statement sends the query structure and the data separately, so a value can never be read as part of the statement — which is what closes injection rather than any amount of escaping."
      },
      {
        "code": "json_encode($data)\njson_decode($json, associative: true)",
        "means": "serializes PHP data to JSON string / parses JSON into array",
        "consequence": "Passing true as the second argument turns objects into associative arrays rather than into instances of the standard class."
      },
      {
        "code": "composer require vendor/package",
        "means": "dependency manager and class autoloader",
        "consequence": "require 'vendor/autoload.php' then loads third-party libraries and project classes on demand, without a manual include for each one."
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
    "status": "traced",
    "seed": "C.11",
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
        "consequence": "Zero, the empty collections and the absent value are all falsy; everything else is truthy — which means a check for presence and a check for non-emptiness are the same expression, and the difference matters when zero is a legitimate value."
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
        "means": "returns a new sorted list, leaving the original alone",
        "consequence": "The sort is stable, so items comparing equal keep their original order, and passing key sorts by a computed value rather than by the item itself."
      },
      {
        "code": "any(iterable)\nall(iterable)",
        "means": "checks if at least one item is truthy / checks if all are truthy",
        "consequence": "Both short-circuit: any stops at the first truthy item, all stops at the first falsy one, so an expensive generator is only consumed as far as the answer requires."
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
        "code": "@dataclasses.dataclass\nclass User:\n    id: int\n    name: str",
        "means": "automatically generates __init__, __repr__, and __eq__ for classes",
        "consequence": "Removes the repetitive constructor, representation and equality methods from a class that exists to hold data."
      },
      {
        "code": "typing: Optional[T], List[T], Dict[K, V], Union[A, B]",
        "means": "type annotations for static analysis tools like mypy",
        "consequence": "Gives a function a self-documenting contract that a checker can verify in the build, catching a class of type error before it reaches production. Nothing is enforced at run time."
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
    "status": "traced",
    "seed": "C.26",
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
        "code": "\\d \\w \\s   and   \\D \\W \\S",
        "means": "shorthand character classes (digit, word, whitespace) and their inverses",
        "consequence": "\\d matches a digit, \\w a word character, \\s whitespace; the capitalised forms match everything the lower-case one does not."
      },
      {
        "code": "\\b (word boundary)",
        "means": "zero-width assertion between a word character (\\w) and non-word",
        "consequence": "\\bcat\\b matches the standalone word 'cat', but will not match 'catalog' or 'scatter'."
      },
      {
        "code": "(\\d{4})-(\\d{2})-(\\d{2})   -- groups $1, $2, $3",
        "means": "groups sub-patterns together and captures matched text",
        "consequence": "Parentheses both group a sub-pattern and capture what it matched, which is why adding brackets for precedence quietly renumbers everything after them."
      },
      {
        "code": "(?:pattern) (non-capturing group)",
        "means": "groups sub-patterns without allocating capture memory",
        "consequence": "Optimizes regex execution performance when you need grouping for quantifiers (e.g. (?:abc)+) but don't need the matched text."
      },
      {
        "code": "(?<name>pattern) (named capture group)",
        "means": "captures matched text into a named group",
        "consequence": "Reading a group by name rather than by position, which survives someone adding a bracket earlier in the pattern — the failure that numeric groups invite."
      },
      {
        "code": "(?=pattern) (positive lookahead)",
        "means": "asserts that what follows matches pattern without consuming characters",
        "consequence": "\\d+(?=px) matches digits only if they are immediately followed by 'px', but does not include 'px' in the match."
      },
      {
        "code": "(?!pattern) (negative lookahead)",
        "means": "asserts that what follows does not match the pattern",
        "consequence": "foo(?!bar) matches foo only where bar does not follow. The assertion consumes nothing, so the position after the match is unchanged."
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
        "code": "<.*?>   lazy      -- one tag\n<.*>    greedy    -- first < to last >",
        "means": "matches as few characters as possible to satisfy the pattern",
        "consequence": "The lazy form stops at the first thing that satisfies the pattern; the greedy form takes as much as it can and gives back only when forced. Most surprising matches are this distinction."
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
    "status": "traced",
    "seed": "C.15",
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
        "code": "yield(arg)\ndef benchmark; t = Time.now; yield; Time.now - t; end",
        "means": "pauses method execution to execute the passed block",
        "consequence": "Lets you write your own iteration methods and wrappers, as the timing example shows."
      },
      {
        "code": "class Dog < Animal ... end",
        "means": "defines a class inheriting from a superclass",
        "consequence": "Classes are open: you can reopen any existing class, including one from the standard library, and add methods to it at run time. Powerful, and the reason a library can change behaviour you never asked it to touch."
      },
      {
        "code": "nil and nil? / empty? / blank? / present?",
        "means": "the singleton null object and state check helpers",
        "consequence": "Only false and nil are falsy. The number zero and the empty string are both truthy, which is the opposite of several other languages and a reliable source of bugs when moving between them."
      },
      {
        "code": "unless condition ... end",
        "means": "executes the block only if condition evaluates to false",
        "consequence": "Idiomatic opposite of if. Often used as an inline guard clause: return if user.nil? or redirect_to login unless logged_in?."
      },
      {
        "code": "self keyword\ndef self.find_by_email(...)",
        "means": "refers to the current executing object or class context",
        "consequence": "Inside a method defined with self, it refers to the class itself rather than to an instance of it."
      },
      {
        "code": "ActiveRecord: User.where(active: true).order(created_at: :desc)",
        "means": "object-relational mapping querying database tables",
        "consequence": "Executes lazily: chaining query methods builds up a query object, and the database is only asked when the records are actually read."
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
    "status": "traced",
    "seed": "C.20",
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
        "consequence": "The borrow checker's rule: any number of immutable references, or exactly one mutable reference, and never both at once. That single constraint is what makes a dangling reference and a data race both impossible to express."
      },
      {
        "code": "Lifetimes: 'a in &'a str",
        "means": "compile-time annotations proving references remain valid",
        "consequence": "Ensures no reference outlives the data it points to, mathematically preventing dangling pointer bugs at compile time."
      },
      {
        "code": "Option<T>: Some(val) and None",
        "means": "type representing a value that may or may not exist",
        "consequence": "There is no null pointer in the language. Absence is a value of the type, so the compiler can require that the absent case is handled before the value inside is used."
      },
      {
        "code": "Result<T, E>: Ok(val) and Err(err)",
        "means": "type representing either operation success or failure with a reason",
        "consequence": "All recoverable errors in Rust return Result. Combined with the ? operator for ergonomic error propagation."
      },
      {
        "code": "let file = File::open(path)?;   // returns Err to the caller",
        "means": "unwraps Ok value or immediately returns Err upward to caller",
        "consequence": "Replaces a match at every call with one character, while keeping the error type, so the short path and the careful path are the same path."
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
        "code": "trait TraitName { fn method(&self); }\nimpl TraitName for MyType { ... }",
        "means": "defines a shared interface of behavior across types",
        "consequence": "Behaviour is attached to a type after the fact rather than at its definition, and the call is resolved at compile time, so the abstraction costs nothing at run time."
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
        "means": "reference counting pointer for shared ownership, single-threaded and thread-safe",
        "consequence": "The thread-safe version counts atomically, which is why it is the one that may cross threads and why it costs slightly more than the single-threaded one. Shared ownership is opt-in rather than the default."
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
        "consequence": "The owned form can grow and change; the borrowed form is an immutable view into text that already exists somewhere else, which is why passing one costs nothing and returning one needs care about what it points into."
      },
      {
        "code": "unsafe { ... }",
        "means": "permits raw pointer dereferencing and calls into other languages",
        "consequence": "Used inside the standard library to implement the low-level primitives that the safe interfaces are built from. The block does not switch the checks off everywhere; it widens what is permitted inside it, and marks the region a reviewer has to read."
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
    "status": "traced",
    "seed": "C.22",
    "rows": [
      {
        "code": "SELECT col1, col2 FROM table_name",
        "means": "retrieves specific columns from a relational table",
        "consequence": "Never use SELECT * in production applications; fetching unneeded columns wastes memory, network bandwidth, and prevents index-only scans."
      },
      {
        "code": "WHERE condition (AND, OR, NOT)   -- not HAVING",
        "means": "filters physical rows before grouping or aggregation",
        "consequence": "A filter on individual rows belongs here rather than in HAVING, because this one runs before grouping and can be answered from an index instead of by reading the whole table."
      },
      {
        "code": "INNER JOIN vs LEFT JOIN on col = col   -- unmatched -> NULL",
        "means": "returns matching rows only / returns all left rows plus matched right",
        "consequence": "INNER JOIN drops rows with no counterpart; LEFT JOIN keeps every row from the left and fills the missing right-hand columns with NULL, which is why a left join quietly changes what a later count means."
      },
      {
        "code": "GROUP BY column_name   -- every SELECT column: grouped or aggregated",
        "means": "collapses rows sharing the same value into single summary buckets",
        "consequence": "Each column in the SELECT list must either appear in the GROUP BY clause or be wrapped in an aggregate, because anything else would be asking for one value where the group holds many."
      },
      {
        "code": "HAVING aggregate_condition   -- e.g. HAVING COUNT(*) > 5\n-- WHERE filters rows, GROUP BY collapses them, HAVING filters groups",
        "means": "filters aggregated summary buckets after GROUP BY",
        "consequence": "WHERE filters rows before they are grouped; HAVING filters the groups afterwards. Putting a row-level test in the second one works and reads the whole table to do it."
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
        "code": "UPDATE table SET col = val WHERE condition\n-- run the SELECT form of the WHERE first",
        "means": "modifies existing rows matching the filter",
        "consequence": "Test the condition as a SELECT before running it as an update. Omitting the clause entirely updates every row in the table, and the statement will not warn you."
      },
      {
        "code": "DELETE FROM table WHERE condition\nTRUNCATE TABLE name   -- whole table, no row-by-row log",
        "means": "removes matching rows from a table",
        "consequence": "Deletion is logged row by row, so removing everything that way is slow and produces an enormous log; truncation resets the storage instead, and cannot be given a condition."
      },
      {
        "code": "CREATE TABLE name (\n  id SERIAL PRIMARY KEY,\n  email TEXT NOT NULL UNIQUE,\n  age INT CHECK (age >= 0)\n)",
        "means": "defines relational schema, column types, and constraints",
        "consequence": "Constraints are enforced by the database whatever the application does, which matters because the application is not the only thing that will ever write to this table."
      },
      {
        "code": "PRIMARY KEY vs FOREIGN KEY ... REFERENCES",
        "means": "unique record identifier / enforces referential relationship between tables",
        "consequence": "Foreign keys guarantee data consistency: the database prevents deleting a parent record if child records still reference it."
      },
      {
        "code": "CREATE INDEX idx_name ON table (column)",
        "means": "builds an ordered lookup structure so a search need not read every row",
        "consequence": "Reads that can use the index get dramatically faster; every write has to maintain it, so an index is a standing charge paid on insert, update and delete in exchange for a discount on reads."
      },
      {
        "code": "NULL, IS NULL, IS NOT NULL   -- never col = NULL",
        "means": "represents unknown or missing data in three-valued logic",
        "consequence": "Comparing anything to NULL yields neither true nor false but unknown, so a row is not matched by col = NULL even when the column is empty. The IS forms exist because equality cannot answer the question."
      },
      {
        "code": "COUNT(*), COUNT(col), SUM(col), AVG(col), MIN(col), MAX(col)",
        "means": "aggregate functions computing values across multiple rows",
        "consequence": "COUNT(*) counts rows; COUNT(col) counts only the rows where that column has a value, which is the difference people discover when two counts disagree."
      },
      {
        "code": "DISTINCT",
        "means": "eliminates duplicate rows from the result set",
        "consequence": "Requires the database engine to perform an expensive sort or hash operation across all retrieved rows."
      },
      {
        "code": "LIKE '%pattern%' vs ILIKE 'Pattern%'",
        "means": "wildcard pattern matching / case-insensitive matching",
        "consequence": "A wildcard at the start means the index cannot be used, because an index is ordered by prefix and there is no prefix to look up — which is when a search quietly becomes a full read of the table."
      },
      {
        "code": "IN (val1, val2)\nNOT IN (subquery)   -- a single NULL empties the result\n-- prefer NOT EXISTS",
        "means": "checks if value matches any item in a list or subquery",
        "consequence": "NOT IN returns nothing at all if the subquery yields a single NULL, because the comparison becomes unknown for every row. The EXISTS form does not have that behaviour."
      },
      {
        "code": "CASE WHEN cond THEN val ELSE default END",
        "means": "conditional branching expression inside queries",
        "consequence": "Allows dynamic computed columns: CASE WHEN score >= 90 THEN 'A' ELSE 'B' END."
      },
      {
        "code": "BEGIN TRANSACTION; ... COMMIT; / ROLLBACK;",
        "means": "groups statements so they take effect together or not at all",
        "consequence": "Every statement inside either takes effect together or is undone together, which is what lets two updates that must agree be written as two statements. The guarantees a database makes about that are the reason this is one word rather than a protocol you implement."
      },
      {
        "code": "EXPLAIN SELECT ...\nEXPLAIN ANALYZE SELECT ...",
        "means": "displays the query execution plan and actual execution timings",
        "consequence": "Shows the plan the optimiser chose — whether it read the table sequentially or used an index, which join method it picked, and where the time went. It is the only way to see the decision, because you did not make it."
      },
      {
        "code": "COALESCE(val1, val2, ...)",
        "means": "returns the first non-null argument in the list",
        "consequence": "COALESCE(user.phone, user.email, 'N/A') provides fallbacks for nullable database columns."
      },
      {
        "code": "ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)",
        "means": "calculates ranking or cumulative metrics across row subsets",
        "consequence": "A window function computes a value alongside each row rather than collapsing rows together, so you keep the detail and the ranking in one result."
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
    "status": "traced",
    "seed": "C.21",
    "rows": [
      {
        "code": "let vs var",
        "means": "immutable constant / mutable variable",
        "consequence": "Swift strongly encourages let for all values that do not change, enabling compiler optimization and thread safety."
      },
      {
        "code": "func greet(person: String, from town: String) -> String\ngreet(person: \"Ada\", from: \"Lagos\")",
        "means": "function declaration with external argument labels",
        "consequence": "Argument labels make a call read as a sentence, which is why the label at the call site and the name inside the function are allowed to differ."
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
        "code": "opt ?? fallback\nlet name = username ?? \"anonymous\"",
        "means": "unwraps optional or returns fallback value if nil",
        "consequence": "Produces a value that is no longer optional, so everything downstream stops having to ask whether it is there."
      },
      {
        "code": "struct (value type) vs class (reference type)",
        "means": "copied on assignment / shared reference in memory",
        "consequence": "Swift prefers structs for almost all models; structs are allocated cheaply and cannot cause unintended shared-state mutations."
      },
      {
        "code": "protocol ProtocolName { func method() }",
        "means": "defines an interface contract of methods and properties",
        "consequence": "Protocols can carry default implementations through extensions, which is what makes composing behaviour from several of them practical rather than relying on a base class."
      },
      {
        "code": "extension Type { ... }\nextension Int { var squared: Int { self * self } }",
        "means": "adds new methods, computed properties, or protocol conformance",
        "consequence": "Adds methods and computed properties to a type you did not write, including a built-in one, without subclassing it."
      },
      {
        "code": "enum NetworkState { case loading; case success(Data); case error(Error) }",
        "means": "enumeration variants carrying custom data payloads",
        "consequence": "Each case can carry its own payload, so a state machine and the data belonging to each state are one type rather than two that must be kept in step."
      },
      {
        "code": "{ (params) -> ReturnType in body }\nnumbers.map { $0 * 2 }",
        "means": "self-contained anonymous functional blocks",
        "consequence": "A trailing closure can drop the parentheses, and the positional shorthand names its arguments, which is why so much code in this language reads as a chain of small blocks."
      },
      {
        "code": "defer { cleanup() }",
        "means": "executes code when the current code scope exits",
        "consequence": "Guarantees resource teardown (file closes, lock releases) regardless of how the function returns."
      },
      {
        "code": "async / await and Task { ... }\nactor BankAccount { ... }",
        "means": "structured modern asynchronous programming",
        "consequence": "An actor serialises access to its own state, so concurrent callers cannot race on it and the compiler can check that they do not try."
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
    "status": "traced",
    "seed": "C.19",
    "rows": [
      {
        "code": ": string | number | boolean",
        "means": "primitive type annotations for variables and parameters",
        "consequence": "Enforces compile-time checking. If a function declares (id: string), passing a number immediately halts the build with an error."
      },
      {
        "code": "interface User { id: string; name: string; }\ninterface Admin extends User { level: number }",
        "means": "defines an extensible object shape contract",
        "consequence": "Interfaces can be extended and merged, which is what makes them the usual choice for a shape a library publishes and other code adds to."
      },
      {
        "code": "type ID = string | number\ntype Point = [number, number]",
        "means": "type alias for naming any type, union, or primitive",
        "consequence": "Unlike an interface, an alias can name a union, a tuple or a primitive directly — the shapes that are not objects."
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
        "code": "A & B\ntype Employee = Person & { employeeId: number }",
        "means": "combines all properties of multiple types into one",
        "consequence": "Requires a value to satisfy both sides at once, which is how a base shape and the extra fields one context adds are combined without inheritance."
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
        "code": "const config = { host: 'localhost' } satisfies Config",
        "means": "validates an expression matches a type without widening it",
        "consequence": "Checks the value against the type while keeping the exact literal types it was written with, which a type annotation would have widened away."
      },
      {
        "code": "keyof T\ntype User = { id: string; name: string }  // keyof User = 'id' | 'name'",
        "means": "extracts a union of all property keys of type T",
        "consequence": "Gives the property names as a union of string literals, so a function can be constrained to take only a key that actually exists."
      },
      {
        "code": "typeof variable\nconst defaultUser = { ... }; type User = typeof defaultUser;",
        "means": "extracts the TypeScript type of a runtime JavaScript variable",
        "consequence": "Derives the type from a value that already exists, so a constant and its type cannot drift apart."
      },
      {
        "code": "as const\nconst ROLES = ['admin', 'editor'] as const",
        "means": "narrows literals to readonly immutable values",
        "consequence": "Infers a readonly tuple of exact literals rather than an array of strings, which is what lets those values be used as a type."
      },
      {
        "code": "unknown vs any vs never",
        "means": "type-safe unknown / opt-out of checking / value that can never occur",
        "consequence": "Always prefer unknown over any. any disables all type checking; unknown forces you to check the type before using it."
      },
      {
        "code": "Partial<T>",
        "means": "utility type making all properties in T optional",
        "consequence": "What a partial-update endpoint needs: a caller may send any subset of an entity's fields without providing the whole object."
      },
      {
        "code": "Required<T>",
        "means": "utility type making all properties in T mandatory",
        "consequence": "The inverse of the optional-making utility, stripping the question marks from every property."
      },
      {
        "code": "Readonly<T>",
        "means": "utility type freezing all properties in T against mutation",
        "consequence": "Marks all fields readonly, preventing accidental modifications in pure functional code pipelines."
      },
      {
        "code": "Record<K, V>\nRecord<string, User>",
        "means": "utility type for key-value dictionaries with keys K and values V",
        "consequence": "Models a lookup table where an identifier maps to an entity, with both halves of the mapping typed."
      },
      {
        "code": "Pick<T, 'id' | 'name'>",
        "means": "utility type selecting only specified properties from T",
        "consequence": "Creates a lean sub-type containing only the chosen fields, preventing leaking sensitive fields like passwords."
      },
      {
        "code": "Omit<T, 'password'>",
        "means": "utility type excluding specified properties from T",
        "consequence": "Creates a new type with everything from the original except the named keys — the usual way to publish a shape with its secrets removed."
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
        "code": "function isDog(p: Animal): p is Dog { return 'bark' in p; }",
        "means": "custom function that narrows types in conditional branches",
        "consequence": "Inside a branch guarded by that call, the value is treated as the narrower type, so the check a person makes and the check the compiler makes are the same check."
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

  const SOURCES = {
  "C.1-assembly": [
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
  "C.25-bash": [
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
  "C.7-c": [
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
  "C.17-c": [
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
  "C.9-c": [
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
  ],
  "C.24-css": [
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
    },
    {
      "claim": "The Web Content Accessibility Guidelines, abbreviated WCAG, define success criterion 1.4.3, Contrast (Minimum), at conformance level AA: the visual presentation of text and images of text has a contrast ratio of at least 4.5 to 1, with large-scale text required to reach 3 to 1, and with exceptions for incidental text and for logotypes. The stated intent is to provide enough contrast that text can be read by people with moderately low vision who do not use contrast-enhancing assistive technology. The ratios are thresholds and are not rounded up to.",
      "title": "Web Content Accessibility Guidelines (WCAG) 2.2, success criterion 1.4.3 Contrast (Minimum), W3C Recommendation",
      "url": "https://www.w3.org/TR/WCAG22/#contrast-minimum",
      "kind": "primary"
    }
  ],
  "C.23-cuda": [
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
  "C.16-elixir-erlang": [
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
  "C.18-go": [
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
  "C.24-html": [
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
    },
    {
      "claim": "The Web Content Accessibility Guidelines, abbreviated WCAG, define success criterion 1.4.3, Contrast (Minimum), at conformance level AA: the visual presentation of text and images of text has a contrast ratio of at least 4.5 to 1, with large-scale text required to reach 3 to 1, and with exceptions for incidental text and for logotypes. The stated intent is to provide enough contrast that text can be read by people with moderately low vision who do not use contrast-enhancing assistive technology. The ratios are thresholds and are not rounded up to.",
      "title": "Web Content Accessibility Guidelines (WCAG) 2.2, success criterion 1.4.3 Contrast (Minimum), W3C Recommendation",
      "url": "https://www.w3.org/TR/WCAG22/#contrast-minimum",
      "kind": "primary"
    }
  ],
  "C.12-java": [
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
  "C.13-javascript": [
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
  "C.21-kotlin": [
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
  "C.14-php": [
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
  "C.11-python": [
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
  "C.26-regular-expressions": [
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
  "C.15-ruby-rails": [
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
  "C.20-rust": [
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
  "C.22-sql": [
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
  "C.21-swift": [
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
  "C.19-typescript": [
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
  ]
};

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
