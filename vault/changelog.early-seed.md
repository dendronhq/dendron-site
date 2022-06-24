---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1656068783731
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.101.0
June 24, 2022

Dendron 0.101 has sprouted 🌱

**Depth Filter for Local Graph**: Interested in navigating beyond an active note's immediate parent, child or links in the local graph panel? With new depth filters, you can customize the graph view experience to also see an active note's grandchildren and grandparents. 
- More Information: [[Other Filters|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]]

**Improved Note Traits**: We've made some improvements to note traits to make them easier to use. If you've ever wanted to further customize the way Journal and Scratch Notes work or if you've wanted to add your own types, now's your chance!
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
- fix(publish): issue publishing note with ref without a code-worksapce file (#3114)  @kevin
- fix(cli): dendron publish --help to display full list of arguments (#3127) @joshi
- fix(workspace): error when native workspaces are initializing (#3123) @kaan
- fix(publish): compile error with no banner present (#3133) @kevin
