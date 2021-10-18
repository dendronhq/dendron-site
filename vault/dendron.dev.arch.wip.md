---
id: DHCrkQj3nbKGERtytKUMp
title: Wip
desc: ''
updated: 1631285307793
created: 1630619324225
published: false
---

## Summary

Work in progress represents code that is currently being refactored

## Frontend Unification

We currently have logic for Dendron react duplicated across [[pkg.nextjs-template]] and [[pkg.dendron-next-server]]. 

As we grow our codebase, the plan is to move common logic into [[pkg.common-frontend]].

## Workspace Startup

We are splitting up Dendron initiliazation so that Dendron can work both when a code workspace is open and when it is not. 

Work remaining:
- replacing all instances of `DendronWorkspace.instance` 
- replace `getWS` with `getWSV2`

<!-- ## Markdown Parsing -->


[^1]: [[Summary|pkg.plugin-core.arch.lifecycle.startup#summary]]
