---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1658501264556
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.105.0
July 22, 2022

Dendron 0.105 has sprouted 🌱

### Enhancements
- enhance(views): option to filter hierarchical edges from graph panel (#3243) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.sidebar.graph-panel#toggle-edges]])
- enhance(publish): use note's `desc`field for SEO description (#3261) @sam ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.seo.description#^ygk9kha1hgzy]])
- enhance(retrieve): support end block anchor (#3248) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.note-reference#end-positional-reference]])

### Fixes
- fix(workspace): information modal to uninstall 'dendron markdown links' extension (#3238) @joshi
- fix(publish): hide sidebar when clicking a non-submenu note on mobile (#3253) @hunter
- fix(publish): current menu item on the sidebar wont collapse for a published site (#3244) @joshi
- fix(views): properly focus tree view to active note when it is first shown (#3251) @hikchoi
- fix(workspace): fix typos in getting started tutorial (#3279) @kevin