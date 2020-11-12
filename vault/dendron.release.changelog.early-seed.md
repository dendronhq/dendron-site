---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1605156354418
created: 1604539200840
---

## 0.15.1

### Features

#### Wildcard Note Ref Links
- **refs:** wildcard note ref links ([98a1177](https://github.com/dendronhq/dendron/commit/98a117715a967492ab9d7b8749d964b07bde4055))

[[Note references|dendron.topic.refs]] now accept the `*` operator at the end which lets you grab all notes of a given level of hierarchy. This also works with typical note reference operation like block selection which means you can use it to grab specific blocks from every note in a level.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/9401e5dfe60f4f589e14d50e280d11f5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Dendron: Configure Command
- **workbench:** add configure command ([db51dc3](https://github.com/dendronhq/dendron/commit/db51dc35864d0c4434f70620ef0e88451c198fa4))

This is a quick way to update the `dendron.yml` file. You can run it by using `Dendron: Configure`



### Bug Fixes
- **notes:** fix issue when importing note that already exists ([a08a34a](https://github.com/dendronhq/dendron/commit/a08a34a0563bb4047bd9c7cfc5f2bf150873fdc8))

### House Cleaning
- add `.dendron.ws` file under workspace to store workspace specific metadata