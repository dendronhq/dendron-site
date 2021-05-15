---
id: 773e0b5a-510f-4c21-acf4-2d1ab3ed741e
title: Style
desc: ''
updated: 1621020995148
created: 1609550314371
---

## Summary

This page covers code styleguidelines We use [prettier](https://prettier.io/) to autoformat the code on every commit which helps with most conventional styling conventions. This page lists some additional conventions not covered by prettier.

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