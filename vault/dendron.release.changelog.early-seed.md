---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1617328509888
created: 1604539200840
published: true
nav_exclude: true
---

## 0.35.1

### Features

#### Add and Commit
![[dendron.topic.commands#workspace-add-and-commit,1:#*]]

### Enhancements
- [[useNoteTitleForLink|dendron.topic.config#usenotetitleforlink]] now true by default 
- control hierarchy display using note frontmatter ([[docs|dendron.topic.config#hierarchydisplay]])
- ability to disable appending uuid's to assets when importing markdown ([[docs|dendron.topic.pod.builtin.markdown.import#noadduuid]])
- ability to set an index file when importing markdown ([[docs|dendron.topic.pod.builtin.markdown.import#indexname]])

### Bug Fixes
- bulk importing notes would fail if payload was greater than 10mb
- punchcard pod referring to wrong commit

### Docs
- update [[example schemas|dendron.topic.schema#example-schemas]] as importable remote vault
- using dendron for [[teams|dendron.topic.teams]]
