---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1618008991833
created: 1604539200840
published: true
nav_exclude: true
---

## 0.36.3

### Features

#### CLI Note Commands

![[dendron.topic.cli#note-commands,1:#*]]

### Enhancements
- toggle xvault wiki links ([[docs|dendron.topic.config#noxvaultwikilink]])
- auto detect workspace root if `--wsRoot` not passed to CLI
- add `--quiet` flag to cli 

### House Cleaning
- remove legacy note references, use [[doctor|dendron.topic.commands#actions]] with `oldNoteRefToNew` to convert your old note references