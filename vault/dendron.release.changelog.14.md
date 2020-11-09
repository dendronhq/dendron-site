---
id: fadf26bc-56a3-4490-8e53-41f5d16b30ca
title: '14'
desc: ''
updated: 1604889267030
created: 1604888401151
---


## 0.14.2

### Features

### Enhancements
- **pods:** better markdown import pod  (d1eaa264)
    - address multiple edge cases that would cause import pod to fail
    - auto-convert wiki-links from folder-based systems like obsidian into dendron
- **cli:** launch engine server using cli ([25eae3f](https://github.com/dendronhq/dendron/commit/25eae3fddd6a2d26dcf9e2f3e664b377c2cca978))

((ref: [[dendron.pro.dendron-cli]]#launchengineserver:#*))

- **workspace:** write server port in workspace ([6a0ff84](https://github.com/dendronhq/dendron/commit/6a0ff845ebbf010073b271123779fc3f56ac2821))
    - used by bundled extensions to talk to dendron server
- **engine:** add sync method ([ec58d39](https://github.com/dendronhq/dendron/commit/ec58d395003640384b7764f4f8b483429cc1ece3))
    - used by bundled extensions to talk to dendron server

### Bug Fixes
- **engine:** properly handle \* in refs when refactoring ([704a14f](https://github.com/dendronhq/dendron/commit/704a14f17196e18cb5b26f5fc98ed9f8d492e16a))
- **workbench:** fix daily journal note command signature ([5ec96ef](https://github.com/dendronhq/dendron/commit/5ec96efd9a006e5e5999f2704dfb3d1e97e60a5c))


## [0.14.1](https://github.com/dendronhq/dendron/compare/v0.14.1-alpha.7...v0.14.1) (2020-11-05)

### Features

#### Lookup Copy WikiLink Modifier
- **lookup:** copy note link cmd ([e38743d](https://github.com/dendronhq/dendron/commit/e38743ddbac8486f2ac778bd546a6373a15a4f6d))

((ref: [[dendron.topic.lookup.modifiers]]#copywikilink,1:#*))

#### Lookup Multi-Select Modifier
- **lookup:** support multi-select ([b409c05](https://github.com/dendronhq/dendron/commit/b409c05d3b19797de714dbf10b6a4249758eae8a))

((ref: [[dendron.topic.lookup.modifiers]]#multiselect,1:#*))

### House Cleaning

#### Code Cleanup

With the server migration behind us, we took some time to make Dendron more hygenic by removing old code and consolidating existing code. All in all, we eliminated ~8k lines. If you are currently working on a branch, I suggest you merge with master to get the latest changes 😅 

- before cleanup
```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            73              6              0          72744
TypeScript                     246           3089           3089          31790
Markdown                        50           4682              0           5947
JavaScript                      16            168             76           1349
Bourne Shell                    23             40              9            179
YAML                            13              3              3            158
CSS                              2             17             32             72
HTML                             1              0              0             14
SVG                              1              0              0             12
-------------------------------------------------------------------------------
SUM:                           425           8005           3209         112265
-------------------------------------------------------------------------------
```

- after cleanup
```
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            73              6              0          72745
TypeScript                     224           2343           1810          24352
Markdown                        34           4772              0           5974
JavaScript                      16            168             76           1349
Bourne Shell                    24             40              9            181
YAML                             6              3              3             78
CSS                              2             17             32             72
HTML                             1              0              0             14
SVG                              1              0              0             12
-------------------------------------------------------------------------------
SUM:                           381           7349           1930         104777
-------------------------------------------------------------------------------
```
