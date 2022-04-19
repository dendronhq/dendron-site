---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1650339050375
created: 1604539200840
published: true
nav_exclude: true
---

> This page documents the features, enhancements, and fixes in the latest early seed release. The early seed is a preview of the weekly release, so you'll see the next minor version when installing (ex. `0.78.0` instead of `0.77.1`). When dendron ships the general release, the currently installed extension will automatically be updated (but will still have same version).

## 0.91.0

Dendron 0.91 has sprouted 🌱

**Note Title Configuration**: This release introduces a configuration setting to allow notes to display their full hierarchy in their note title. For example, if this setting is enabled, a new note named `one.two.three` will be titled  `One Two Three`.

**Go to Assets**: We've expanded functionality for file assets in Dendron. For wikilinks that link to non-note files, `Dendron: Go to Note` and `Go to Definition` will now open them using your OS default app.

### Features
- feat(workspace): option to gen title using full hierarchy ([[docs|dendron://dendron.dendron-site/dendron.ref.config.workspace#enablefullhierarchynotetitle]])(#2593) @jonathan 

### Enhancements
- enhance(navigation): Goto Note and go to definition support assets in wikilinks (#2688) @kaan
- enhance(workspace): workspace vault support for self contained vaults (#2728) @kaan 

### Fix
- fix(airtable): Exporting to airtable automatically saves current document (#2696) @tuling
- fix(publish): add luxon as dev dependency (#2713) @kevin
- fix(workspace): Dendron causes errors in non-Dendron workspaces (#2731) @kaan
- fix(vaults): self contained vaults sync (#2758) @kaan
- fix(view): support custom styles for Note Graph (#2760) @joshi
- fix(view): vscode reduce motion setting changes theme (#2749) @joshi