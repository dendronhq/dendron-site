---
id: 3c80629b-4048-48f0-bdfd-352645bda2ec
title: Dev
desc: |
  Development related
updated: 1627026457377
created: 1622079130106
---


## Gotchas
Do not use any libraries in `common-all` that cannot run in the browser. It is used as a dependency for both browser based and server based versions of Dendron. This means modules like `fs` cannot be used in common-all. 

For server based modules, put them into [[Common Server|pkg.common-server]] instead

## NoteProps
- try having plain objects on the note props
