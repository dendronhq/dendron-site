---
id: 3c80629b-4048-48f0-bdfd-352645bda2ec
title: Dev
desc: |
  Development related
updated: 1627027635419
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


