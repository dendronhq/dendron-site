---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Early Seed
desc: ''
updated: 1606355564957
created: 1604539200840
---

## 0.17.1

### Features
#### Automatic Hover's for Links
- add hover provider ([8d19a1b](https://github.com/dendronhq/dendron/commit/8d19a1b47f114ae738f7483fd751b62f68b46d24))

You can now preview notes and references inside the editor as a hover without ever opening the link. Previews are compatible with note references and will show references as inlined markdown.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/aee387226d5c4bb0a4e38cee76a1aa3e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Bug Fixes
- **workbench:** copy header cmd will sometimes chop of last character ([34c2530](https://github.com/dendronhq/dendron/commit/34c253036cf959ef00620db9063c8de36ae9c848))
- **markdown:** relative links sometimes don't resolve ([c1ffa54](https://github.com/dendronhq/dendron/commit/c1ffa54ab780bec98cb5b322b4d0905cc26acce7))


### Work in Progress
- continued multi-vault compatibility for existing features
- integrating [Dendron's first Web UI component](https://github.com/dendronhq/dendron/pull/351) 
- backend changes to enable new [[multi vault layout|dendron.roadmap.project.n.2020.multi-vault#initialization]]
- heaps of performance and stability improvements
