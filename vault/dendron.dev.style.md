---
id: 773e0b5a-510f-4c21-acf4-2d1ab3ed741e
title: Style
desc: ''
updated: 1609550434732
created: 1609550314371
---
Code style guidelines. We use [prettier](https://prettier.io/) to autoformat the code on every commit which helps with most conventional styling conventions. This page lists some additional conventions not covered by prettier.

- when importing modules, unless your working with an all javascript package, we want to use `import` syntax over `require` syntax
- unless there's an obvious performance penalty, we prefer using `async/await` and `Promises` over callbacks

