---
id: dc72e684-8ff8-4c41-a2f7-93fc14ee0d6a
title: Arch
desc: ''
updated: 1630641050455
created: 1622147759924
---

## Summary

We use `unified` plugins to parse markdown. Every plugin can be composed of the following three components:
- parser: classify tokens and attach metadata to tokens
- transformer: transform the entire syntax tree
- compiler: change token to output format

Unified gives a few ways of working with processors:
- `parse`: calls the `parser` and results in an abstract syntax tree
- `process`: calls `parser`, `transformer`, and `compiler` and usually results in a string output


## Components

### Processor
Dendron has different processors depending on the desired output (eg. markdown vs HTML). Below is the interface for markdown

- source: [procRemarkFull](https://github.com/dendronhq/dendron/blob/51633edcd0817c9b4aa18ff25f492f7a00e6e088/packages/engine-server/src/markdown/utilsv5.ts#L344-L344)
```ts
static procRemarkFull(
  data: ProcDataFullOptsV5,
  opts?: { mode?: ProcMode; flavor?: ProcFlavor }
) 
```

Each processor takes the following arguments
- ProcMode
- ProcFlavor
- ProcData

- NOTE: disregard the `V5` suffix, this is an artifact of our current migration to the new processor architecture and will be removed in future versions

#### ProcMode
```ts
/**
 * What mode a processor should run in
 */
export enum ProcMode {
  /**
   * Expect no properties from {@link ProcDataFullV5} when running the processor
   */
  NO_DATA = "NO_DATA",
  /**
   * Expect all properties from {@link ProcDataFullV5} when running the processor
   */
  FULL = "all data",
  /**
   * Running processor in import mode. Notes don't exist. Used for import pods like {@link MarkdownPod}
   * where notes don't exist in the engine prior to import.
   */
  IMPORT = "IMPORT",
}
```

#### ProcFlavor
```ts
export enum ProcFlavor {
  /**
   * No special processing
   */
  REGULAR = "REGULAR",
  /**
   * Apply publishing rules
   */
  PUBLISHING = "PUBLISHING",
  /**
   * Apply preview rules
   */
  PREVIEW = "PREVIEW",
}

```

### Compilation
Depending on what output you plan on converting Dendron into, different plugin combinations get invoked.

Dendron has a few different target outputs which are listed, under `DendronASTTypes`, [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/types.ts).

For everything except HTML, Dendron will call the `compile` of the specific plugin.

For HTML, Dendron will transform `remark` nodes into `rehype`, which means that `compile` methods on `remark` plugins will never be called. If you are writing a custom plugin, use the transformer, `dendronPub` (https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/remark/dendronPub.ts), which runs after parsing but before compilation to transform the remark nodes into rehype nodes. 

You can see [[Writing a custom Dendron Unified Plugin|pkg.dendron-markdown.cook#writing-a-custom-dendron-unified-plugin]] for more details on this
