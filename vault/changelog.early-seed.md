---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1654868229258
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.99.0

Dendron 0.99 has sprouted 🌱

**Better Task Notes**: Get things done - task notes now have custom commands to set their status and mark them as complete.
More information: [[Set Task Status|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]]

**Obsidian Import**: Vault to vault - we now have a dedicated command to import your notes from obsidian into Dendron!
More information: [[Import Obsidian Vault|dendron://dendron.dendron-site/dendron.ref.commands#import-obsidian-vault]]

### Features
- feat(structure): add set task status commands (#3033) @kaan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]])
- feat(structure): add complete task commands (#3033) @kaan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#complete-task]])
- feat(sync): obsidian import flow (#3014) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#import-obsidian-vault]])
- feat(workspace): detect duplicate note id on lifecycle events (#2991) @hikchoi

### Enhancements
- enhance(publish): make the private link colors customizable (#3035) @kaan ([[docs|dendron://dendron.dendron-site/dendron.topic.theme.publish.cook#change-the-color-of-a-private-link]])
- enhance(views): configure creation of notes on click of graph node with `createStubs` #3032 @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#create-stub]])

### Fixes
- fix(workspace): fix duplicated panel titles (#3016) @jonathan
- fix(edit): email addresses and hash symbols inside words are parsed as tags (#3064) @kaan
- fix(views): gracefully handle tree view sort error to avoid crashing the tree view (#3053) @hikchoi