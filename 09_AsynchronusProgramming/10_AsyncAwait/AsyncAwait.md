# The Problem with Promises

Promises work, but they create three major issues.

## 1. Hard to Read

When many asynchronous steps depend on each other, long `.then()` chains are formed, making the code confusing and difficult to maintain.

## 2. Unclear Error Handling

With multiple `.then()` calls, it becomes hard to identify where an error originated, which makes debugging more difficult.

## 3. Backward Logic Flow

The order in which the code is written does not match the actual execution flow, forcing developers to mentally translate what is happening.

# How async/await Fixes This

async/await makes asynchronous code behave like normal step-by-step code.

* The logic reads from top to bottom in a natural way
* All errors can be handled in one place using try/catch
* Code becomes cleaner, shorter, and easier to maintain

# What is an Async Function

An async function is a special type of function in JavaScript designed to work with asynchronous operations.

It runs without blocking the normal program flow and always returns a Promise.
This Promise provides the final result in the future while the program continues running in the background.

Any normal function, arrow function, or IIFE can be made asynchronous by using the async keyword.

# What Makes a Function Async

## 1. Always Returns a Promise

Even when a normal value is returned, JavaScript automatically wraps it inside a Promise.

## 2. Allows the Use of await

Inside an async function, await can be used to wait for asynchronous operations.

## 3. Makes Async Code Look Synchronous

Code runs in a clean, readable, step-by-step manner.

# Why Async Functions Are Important

They allow you to:

* Wait for API calls
* Wait for database queries
* Wait for file operations
* Write clean and maintainable server logic

# What is the await Keyword

The await keyword is used inside an async function to pause the execution of the current function until another async function returns a Promise in its final resolution (resolve or reject).

It does not block the program. It only pauses that one function while the rest of the program continues to run.

await can be used inside any async function, and it can also be used in the global scope when the file is treated as an ES Module. This is called top-level await.

# Why await is Important

* It lets you get the final result of a Promise
* It removes the need for .then() chains
* It makes asynchronous code easy to read and write
