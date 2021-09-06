---
id: ENeBSPWAtTlQclXYWNm6c
title: Architecture
desc: ''
updated: 1630901706166
created: 1629988601634
---

## Summary 

This goes over the major architectural components of Dendron.

## Components
- You can find an index of all Dendron packages [[here|pkg]]

## Lifecycle
- Startup
  - Plugin startup: [[Summary|pkg.dendron-plugin.arch.startup#summary]]
  - Migrations: [[Migration|pkg.dendron-engine.t.migration]]

- Regular Execution
  - Running a plugin command: [[Base Command Lifecycle|pkg.dendron-plugin.t.commands#base-command-lifecycle]]
  - Lookup: [[Internal|pkg.dendron-plugin.t.lookup.internal]]
  - Dendron Engine: [[Initialization|pkg.dendron-engine.arch#initialization]]

- Specifics
  - Analytics

## Other
- NextJS
  - Layout: [[Layout|pkg.nextjs-template.t.layout]]

## Related
- [[Dendron Plugin|pkg.dendron-plugin.arch]]
