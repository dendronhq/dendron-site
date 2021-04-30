---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1619793972593
created: 1604539200840
published: true
nav_exclude: true
---


## 0.39.1

### Features

#### More Caching Improvements

Even if your workspace is +10k notes, initialization of said workspace should happen in the matter of seconds. You can read about the details [[here|dendron.ref.caching]]

### Enhancements
- show progress bar when adding a remote vault
- init engine from cli
- add html pod
- move note shows lookup 
- rename note shows lookup 

### Bug Fixes
- Tree widget doesn't update when new files are added
- Goto note prefer existing note for multi-vault workspace
- Nested note refs in preview not rendering well
- MarkdownPod still using legacy note refs
- Move note will sometimes error

### House Cleaning
- Rename note is now mapped to move note and should be considered deprecated