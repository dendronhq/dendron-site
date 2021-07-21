---
id: 773e0b5a-510f-4c21-acf4-2d1ab3ed741e
title: Style
desc: ''
updated: 1626832326273
created: 1609550314371
---

## Summary

This page covers code styleguidelines and conventions.  


## Auto Styling
We use [eslint](https://eslint.org/) and [prettier](https://prettier.io/) to autoformat all Dendron code before a commit. You can see our styling options [here](https://github.com/dendronhq/dendron/blob/master/.eslintrc.js#L29:L29)



## Time

We use [`luxon`](https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html) for all time related tasks. This is the successor of [`moment.js`](https://sebastiandedeyne.com/moment-js-thank-you-for-your-service/)


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
