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

## 0.92.0

Dendron 0.92 has sprouted 🌱

**Graph View**: We've improved the loading speed of the graph view. You should notice a drastic improvement in load times-up to 100x in larger workspaces 🚀🚀🚀.

**Tree View**: We've improved the stability of the tree view and fixed an error with `Dendron: Rename Note` that caused the tree view to fall out of sync. 

**Self Contained Vaults**: You can now move self contained vaults between local and remote locations using the `Dendron: Vault Convert` command. 

- More information can be found in our [[documentation on vaults|dendron.topic.vaults#vault-convert]]

### Enhancements
- enhance(workspace): `vault convert` now works with self contained vaults (#2745) @kaan
- enhance(views): optimize graph view load times - 100x improvement on large workspaces (#2797) @jonathan 
- enhance(workspace): general speed ups across multiple commands (#2798) @jonathan 
- enhance(workspace): doctor command can detect and fix misconfigured self contained vaults (#2768) @kaan

### Fixes
- fix(pods): exporting as markdown will add `.md` extension to markdown files (#2771)  @kevin
- fix(views): multiple stability fixes for tree view (#2757) @hikchoi 
- fix(workspace): hovering an asset link while holding `ctrl` no longer opens the asset (#2784) @kaan
- fix(view): some views don't update for new notes with self contained vaults (#2790) @kaan
- fix(view): broken preview for links with sub-hierarchy starting with .md (#2781) @joshi
- fix(workspace): remove stale entries from cache when initializing (#2756) @tuling