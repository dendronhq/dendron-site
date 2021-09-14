---
id: 3c80629b-4048-48f0-bdfd-352645bda2ec
title: Dev
desc: |
  Development related
updated: 1630794193403
created: 1622079130106
---


## Gotchas
Do not use any libraries in `common-all` that cannot run in the browser. It is used as a dependency for both browser based and server based versions of Dendron. This means modules like `fs` cannot be used in common-all. 

For server based modules, put them into [[Common Server|pkg.common-server]] instead

## NoteProps
- try having plain objects on the note props

### Adding a new frontmatter property

In VSCode, you can use the "Goto symbol in workspace" command and type the function name or class name to find the following locations.

1. In `DNodeProps`, add the prop to the type. Unless the prop has to be mandatory for all notes, it should be optional (`prop?: type`). Most props don't have to be mandatory!
1. In `DNodeUtils.create` add prop name to `optionalProps`.
1. In `NoteUtils.serializeMeta` add prop name to `builtinProps`.
1. In `DNodeUtils.getCustomProps` add prop name to `blacklist`.

## Configuration

### Adding a new property to Dendron Config

Dendron configuration is managed by [DendronConfig](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/workspace.ts).

Whenever you add a new entry with a default, make sure to do the following as well.
- [ ] update `Extension.test.ts` (we have a test that checks for default config values that will break)
- [ ] document it under [[dendron config|dendron.topic.config.dendron]]

Before you submit, make sure to run the following at the root of the dendron repo

```sh
yarn gen:data
```

This will update the json schema definitions for `DendronConfig` which is used downstream by other packages

### Using dendron.yml for config instead of .code-workspace
- see commit 68556bf2
- [fix: Use new config when creating special notes by hikchoi · Pull Request #984 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/984)