---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1667400155468
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.117.0
November 02, 2022

Dendron 0.117 has sprouted 🌱

### Enhancements
- enhance(sync): selection export scope for pods v2 (#3619) @joshi ([[docs|dendron://dendron.dendron-site/dendron.ref.commands]])
- enhance(workspace): support adding existing vault to the workspace #3655 @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults#convert-vault]])
  #todo-merge: https://github.com/dendronhq/dendron-site/pull/675/files
- enhance(workspace): Create enableEngineV3 dev config (#3703) @tuling

([[docs|dendron://dendron.dendron-site/dendron.topic.vaults#vault-convert]])

([[docs|dendron://dendron.dendron-site/dendron.topic.vaults#convert-vault]])
[[documentation on vaults|dendron.topic.vaults#convert-vault]]
### Fixes
- fix(workspace): go to definition for wikilink with header (#3632) @joshi
- fix(lookup): cancel note creation during "Create Note with Template" if template was not selected (#3645) @hikchoi
- fix(views): task notes inside of note references should render correctly (#3640) @kevin
- fix(workspace): custom color decoration for hashtags (#3637) @joshi

