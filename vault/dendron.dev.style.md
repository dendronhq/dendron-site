---
id: 773e0b5a-510f-4c21-acf4-2d1ab3ed741e
title: Style
desc: ''
updated: 1622099673503
created: 1609550314371
---

## Summary

This page covers code styleguidelines We use [prettier](https://prettier.io/) to autoformat the code on every commit which helps with most conventional styling conventions. This page lists some additional conventions not covered by prettier.

## Auto Styling

We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to autoformat all Dendron code before a commit. You can see our styling options [here](https://github.com/dendronhq/dendron/blob/master/.eslintrc.js#L29:L29)

## Typescript

### prefer using `type` over `interface`

- types and interfaces are mostly interchangable, `types` are a bit more flexible and so we've standardized on using it
- see official typescript docs [here](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

```ts
// good
type Foo {

}

// boad
interface Foo {
}

```

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
