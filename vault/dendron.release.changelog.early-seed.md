---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1619798055918
created: 1604539200840
published: true
nav_exclude: true
---


## 0.39.2

### Features

#### More Caching Improvements

Even if your workspace is +10k notes, initialization of said workspace should happen in the matter of seconds. You can read about the details [[here|dendron.ref.caching]]

### Enhancements
- progress indicator when adding a remote vault
- init engine from cli ([[docs|dendron.topic.cli#launchengineserver]])
- add html pod ([[docs|dendron.topic.pod.builtin.html#publish]])
- [[move note|dendron.topic.commands#move-note]] now shows completions via lookup
- [[rename note|dendron.topic.commands#rename-note]] now shows completions via lookup

### Bug Fixes
- Tree widget doesn't update when new files are added
- Goto note prefer existing note for multi-vault workspace
- MarkdownPod still using legacy note refs
- Move note will sometimes fail
- Insert note will sometimes fail
- Vault picker toggle for move note will execute if user clicks escape

### House Cleaning
- Rename note is now just a re-mapped version of the `Move Note` command. In the future, we might deprecate `Rename` altogether and replace with `Move Note`