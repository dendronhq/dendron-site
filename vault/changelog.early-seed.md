---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1657279235401
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.103.0
July 08, 2022

Dendron 0.103 has sprouted 🌱

**Smart Note References:** With this new format for note referencing, you will only see the contents of the intended referenced section. No more, no less! 
- More Information: [[Enable Smart Ref|dendron://dendron.dendron-site/dendron.topic.note-reference.config.enable-smart-ref]]

### Deprecated
Open Link command is deprecated as it is now merged into the [[Go to|dendron://dendron.dendron-site/dendron.ref.commands.goto]] command

### Features
- feat(workspace): smart note refs (#3174) @kevin [[docs|dendron://dendron.dendron-site/dendron.topic.note-reference.config.enable-smart-ref]]
- feat(workspace): show notice for manual migration if upgrading from from legacy versions (#3161) @hikchoi

### Enhancements
- enhance(navigate): make `Go To` command also open external links #3175 @hayata [[docs|dendron://dendron.dendron-site/dendron.ref.commands.goto]]

### Fixes
- fix(retrieve): bad parsing of xvault wikilink with space #3180 @kevin