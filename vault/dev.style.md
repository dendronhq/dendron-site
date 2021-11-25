---
id: 773e0b5a-510f-4c21-acf4-2d1ab3ed741e
title: Style
desc: ''
updated: 1636712784948
created: 1609550314371
---

## Summary

This page covers code styleguidelines and conventions.  


## Auto Styling
We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to autoformat all Dendron code before a commit. You can see our styling options [here](https://github.com/dendronhq/dendron/blob/master/.eslintrc.js#L29:L29)


## Time

We use [`luxon`](https://moment.github.io/luxon/api-docs/index.html#datetime) for all time related tasks. This is the successor of [`moment.js`](https://sebastiandedeyne.com/moment-js-thank-you-for-your-service/)


## General

## High Level

1. Reduce State - code written with minimal state are easier to test and reason about then code with state
1. Reduce coupling - code that is loosely coupled is better than the opposite
1. Reduce complexity - code that is simpler is better
1. Reduce code - code that is not duplicated 

### Reduce coupling

When introducing abstractions, beware of coupling. In general, we'd rather have two separate implementations of a thing than forcing two unrelated functions to use, for example, a common base class, to safe on lines of code. 

Unless you're relatively certain that something will be re-used, we default to implementing a thing two or three times. If at that point we notice that it does indeed share a lot in common, we will create a common abstraction for it.

## Conventiions

### prefer using camelCase for variables

```ts
// good
const camelCaseIsPreferred = true

// bad
const CamelCaseIsPreferred = false
```

### prefer returning objects instead of tuples

This make it easier to update return signatures and makes it explicit what is being returned

```ts
// good
const {fooValue, fooError} = foo()

// bad
const [fooValue, fooError] = foo()
```

### prefer [is, does, has, should] prefixes for boolean usages.

This makes it clear that a given variable is a boolean. And communicates finality of expression.

```ts
// good
const isFriendly = isFriendly({person});

// bad
const friendly = friendly({person});

// could be improved. 
// 
// does NOT read as finalized value since maybeFriendly=true logically 
// still reads as 'maybe' while we want to communicate that it is in 
// fact friendly.
const maybeFriendly  = maybeFriendly({person});
```

### prefer enum over strings

When we have a small set of constants, prefer using enums

```ts
// good
enum ReturnStatus {
  ok = "ok",
  fail = "fail",
}

function foo(): ReturnStatus {
  ...
}

// bad
function foo(): "ok"|"fail"{
  ...
}
```

## Typescript

### prefer using `type` over `interface`

- types and interfaces are mostly interchangable, `types` are a bit more flexible and so we've standardized on using it
- see official typescript docs [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

```ts
// good
type Foo {

}

// bad
interface Foo {
}

```

### avoid using `@ts-ignore`

Unless there is a special circumstance, avoid using this statement since it skips typechecking. Alternatives to some common use cases:
- unused variables: prefix the variable with a `_`  (eg. `_foo`) to have typescript ignore it

### prefer using `async/await` and `Promises` over callbacks

Makes code more readable

### prefer using object notation for methods ith multiple arguments

This makes code easier to refactor

```ts
// good
function foo(opts: {arg1: string, arg2: string}) {

}
// bad
function foo(arg1: string, arg2: string) {
}
```

### prefer `undefined` and `null` over implicitly incorrect values

Type checking can warn you about a potentially undefined value, but not a value that's just implied to be undefined like `""` or `-1`.

```ts
//good
function findSomething(...) {
  if (...) return 4;
  return undefined; // not found!
}
// bad
function findSomething(...) {
  if (...) return 4;
  return -1; // not found!
}
```

### prefer compile time checks for exhaustive patterns

If you have a `switch` or a chain of `if ... else if` statements where you check all possible cases, add a static assertion so that if a revision breaks this in the future it will be easily caught.

```ts
import { assertUnreachable } from "@dendronhq/common-all";

type MyOptions = "one" | "two";

// bad
function myFunction(var: MyOptions) {
  if (var === "one") {/* ... */}
  else {/* ... */}
}

// good
function myFunction(var: MyOptions) {
  if (var === "one") {/* ... */}
  else if (var === "two") {/* ... */}
  else assertUnreachable(var);
}
```

This works with properties within objects (e.g. `node.type`) too! One hint is that if the type of the object shows up as `never` in the editor, then you can use this assertion.

### prefer `forEach` when iterating through an array

This is more concise and avoids some [unexpected behaviors](https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html) that can arise from other methods of iteration.

```ts
// good
[1,2,3].forEach(elem => console.log(elem))

```

## Regular Expressions

### Prefer negated sets

`\w` matches ASCII alphanumeric characters only, this means any unicode characters will not match.

```js
> "oo".match(/[\w]+/)
[ 'oo', index: 0, input: 'oo', groups: undefined ]
> "öö".match(/[\w]+/)
null
```

As a result, describing the set of characters that should match is practically impossible if you want unicode characters to match as well. Instead, use a negated set to describe which should not match.

```js
> "öö".match(/[^\s]+/)
[ 'öö', index: 0, input: 'öö', groups: undefined ]
```

## Logging

### Sentry

We use Sentry to monitor the code for exceptions. You can use Sentry by wrapping
a function using `sentryReportingCallback`. For example:

```ts
export const provideCompletionItems = sentryReportingCallback(
  (document: TextDocument, position: Position) => {
    // ...
  }
);
```

One issue here: the sentry wrapper cause the callback function to lose its `this` value.
If you are passing a method to this function, you must bind the `this` value:

```ts
class Foo {
  private callback() { /* ... */ }

  public setupCallback() {
    const wrappedCallback = sentryReportingCallback(
      this.callback.bind(this)
    );
    // ...
  }
}
```

Otherwise, when the callback function is called the `this` value will be undefined.

## Async operations

If you have many async operations to perform, decide if they need to be done in parallel or in serial.

### In parallel

```ts
const outputs = await Promise.all(
  vaults.map(async () => {
    // Do async thing here
  })
);
```

### In series

```ts
for (const vault of vaults) {
  await // async thing here
}
```
