// In JS, semicolons are end statements, but Automatic Semicolon Insertion (ASI) allows them to be optional in many cases.

// ### Required:

    // 1. Multiple statements on the same line:
    let a = 5; let b = 6;

    // 2. For loops:
        for (let i = 0; i < 10; i++) { /* function body */ }

    // 3. Before `[` or `(` on a new line to avoid misinterpretation.

    //4. After `return`, `throw`, `break` if followed by an expression.

// ### Optional:

    // 1. Single-line statements:
        let k = 5

    // 2. After function declarations:
        function sayHello() {  /* function body */  }

    // 3. After control structures like `if`, `for`, `while` as the are defined in braces.

//As Best Practice: Using semicolons consistently is recommended to avoid errors, even though they're often optional.