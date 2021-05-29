---
id: dc72e684-8ff8-4c41-a2f7-93fc14ee0d6a
title: Arch
desc: ''
updated: 1622148140983
created: 1622147759924
---


## Markdown Parsing

We use `unified` plugins to parse markdown. Every plugin can be composed of the following three components:
- parser: classify tokens and attach metadata to tokens
- transformer: transform the entire syntax tree
- compiler: change token to output format

Unified gives a few ways of working with processors:
- `parse`: calls the `parser` and results in an abstract syntax tree
- `process`: calls `parser`, `transformer`, and `compiler` and usually results in a string output

### Compilation
Depending on what output you plan on converting Dendron into, different plugin combinations get invoked.

Dendron has a few different target outputs which are listed [here](https://github.com/dendronhq/dendron/blob/integ-publish/packages/engine-server/src/markdown/types.ts#L45:L45).

For everything except HTML, Dendron will call the `compile` of the specific plugin.

For HTML, Dendron will transform `remark` nodes into `rehype`, which means that `compile` methods on `remark` plugins will never be called. If you are writing a custom plugin, use the transformer, `dendronPub` (https://github.com/dendronhq/dendron/blob/dev-kevin/packages/engine-server/src/markdown/remark/dendronPub.ts#L157:L157), which runs after parsing but before compilation to transform the remark nodes into rehype nodes. 

You can see [[Writing a custom Dendron Unified Plugin|pro.dendron-markdown.cook#writing-a-custom-dendron-unified-plugin]] for more details on this