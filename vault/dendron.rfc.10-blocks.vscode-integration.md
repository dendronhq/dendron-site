---
id: 3b52d81b-f5c5-491c-bf9c-58bd0f5826be
title: Vscode Integration
desc: ''
updated: 1621656843373
created: 1619807895859
---

## Tasks
- [x] searching for blocks inside file
- [x] insert block id inside target
- [d] searching for existing blocks across all files
- [x] navigating to block 


## Store Block ids
- a reference of the link must be stored in [[Dendron Engine|pkg.dendron-engine]]
- currently the engine tracks `notes` and `schemas`
- each `note` tracks links, we need to add block links to tracking links
- we need to add an `anchors` field to notes and track block anchors there
- during initialization, anchors should be kept in a `anchors` dictionary of engine

- lookup
    - see [[Note Response|pkg.dendron-engine.ref.note-response]]
