---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1647629183354
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.89.0

Dendron 0.89 has sprouted 🌱

Interested in contributing to the development of Dendron? We've added a [CONTRIBUTING.md](https://github.com/dendronhq/dendron/blob/master/CONTRIBUTING.md) file so that you can find out how to get started shaping the future of Dendron!

### Features
- feat(workspace): detect and fill missing default configs on extension upgrade ([[docs|dendron://dendron.dendron-site/dendron.topic.doctor#addmissingdefaultconfigs]]) (#2602)  @hikchoi

### Enhancements
- enhance: create CONTRIBUTING.md file (#2567) @kevin

### Fix
- fix(workspace): typo in dendron.yml (#2636) @kevin
- fix(markdown): issue with angle brackets syntax in mermaid  (#2637) @kaan
- fix(workspace): updated timestamp not updating properly on save (#2651) @tuling
- fix(workspace): copyNoteLink not getting updated title if note isn't saved (#2631) @tuling
- fix(views): dendron-next-server to pass port-forwarded url (#2671) @joshi