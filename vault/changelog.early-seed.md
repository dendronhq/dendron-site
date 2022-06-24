---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1656080391979
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.101.0
June 24, 2022

Dendron 0.101 has sprouted 🌱

**Depth Filter for Local Graphs:** Want to see the bigger picture? The graph depth filter now lets you control how much context you see in the [[Local Graph View|dendron://dendron.dendron-site/dendron.topic.sidebar.local-graph-view]]
- More Information: [[Other Filters|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]]

**Improved Note Traits:** Rust isn't the only language with traits! We've made a bunch of improvements to traits, including hot reloading, the ability to apply a template, bundling libraries like lodash and luxon, as well as better docs and error handling. 
- More Information: [[Traits|dendron://dendron.dendron-site/dendron.topic.traits]]

### Features
- feat(views): view more note links in local graph panel with depth customization (#3072) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]])

### Enhancements
- enhance(workspace): `Vault Add` command warns for unsupported transitive dependencies (#3087) @kaan [docs](https://wiki.dendron.so/notes/q9yo0y7czv8mxlkbnw1ugj1/)
- enhance(workspace): vaults always use UNIX style separators in config files (#3096) @kaan
- enhance(workspace): validate dendronrc.yml and emit error if invalid (#3106) @kevin
- enhance(edit): add match helper for hb templates (#3094) @kevin  ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers#match]])
- enhance(workspace): improve phrasing of sync message (#3115) @avhb
- enhance(workspace): support single-vault workspace vaults for self contained vault migration (#3118) @kaan
- enhance(edit): reduce lag on autocomplete by adding a debounce (#3116) @hikchoi
- enhance(structure): improved note traits (#3098) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.traits]])
- enhance(sync): adding import hint to tutorial (#3135) @jonathan

### Fixes
- fix(workspace): try to patch `EPERM` issues for windows (#3082) @kaan
- fix(workspace): adding an existing remote vault avoids creating workspace files (#3096) @kaan
- fix(workspace): error when native workspaces are initializing (#3123) @kaan

