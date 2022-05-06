---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1651857682293
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.94.0

Dendron 0.94 has sprouted 🌱

**Go To:** We've added a `Go To` command to help support navigating to different types of links in Dendron. Now, Dendron will respond appropriately when navigating to a note, markdown link or [[Proxy note|dendron://dendron.dendron-site/dendron.topic.special-notes#proxy-notes]].

- More information: [[Go To Command|dendron://dendron.dendron-site/dendron.ref.commands.goto]]

**Graph Themes: ** It's time your graph got a facelift! You can now choose between 3 graph themes: Block, Classic and Monokai, or create your own custom theme styled to your liking. 

- More information: [[Graph Themes|dendron://dendron.dendron-site/dendron.topic.graph-view.md#graph-theme]]

**Help and Feedback Panel**
We're rolling out a new Panel in VSCode to give you convenient access to our starting guide and documentation, as well as a direct way to give us feedback. Check it out!


### Features
- feat(navigation): add goto command: ([[docs|dendron://dendron.dendron-site/dendron.ref.commands.goto]]) (#2852) @kevin
- feat: Add doctor command to remove deprecated config and prompt on upgrade (#2841) @hikchoi

### Enhancements
- enhance(view): graph themes ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view.md#graph-theme]]) (#2806) @joshi
- enhance(workspace): use better defaults for `Create Task Note` (#2855) @kaan
- enhance: prefix command with "Dendron" for uniformity (dendronhq/dendron-paste-image#4)  @kaan
- enhance: cli will report invalid commands (#2876) [[people.ben-ang]]
- enhance: help and feedback panel (#2877) @jonathan 
- enhance: make dendron side bar visible when dendron not active (#2881) @jonathan
- enhance(workspace): detect and warn for duplicate note IDs (#2879) @kaan

### Fixes
- fix: bad wikilink is created with selection2link if selection is multi-line (#2856) @kaan
- fix: insert note index `#undefined` in case missing tags (#2789) [[people.huland]]
- fix: highlighting misidentified capitalized header anchors on links as missing (#2872) @kaan
- fix: CLI writes "cli" as the version into the meta file which breaks initialization (#2871) @kaan
