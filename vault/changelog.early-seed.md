---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1656679777260
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.102.0
July 01, 2022

Dendron 0.102 has sprouted 🌱

**New Template Variables:** We've added some new template variables like `Current_Quarter` and `Current-Month-Name` to enhance your journaling experience!
- More Information: [[Template Variables|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]]

### Enhancements
- enhance(markdown): add new template variables (#3159) @hayata [[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]]

### Fixes
- fix(workspace): Sync fails in shared workspaces if users update workspace config first before syncing migrated vaults (#3141) @kaan
- fix(structure): quickpick stuck issue for refactor hierarchy cmd (#3152) @jonathan
- fix(workspace): removing vault with a name different than their `fsPath` doesn't remove them from `duplicateNoteBehavior` (#3151) @kaan
- fix(workspace): duplicate note id detected even after a file is removed #3155 @hikchoi
- fix(views): backlink tree item labels are trimmed excessively #3169 @hikchoi
