---
id: 3abd00eb-1c1e-4253-aaf5-dcbe20c21850
title: Insider
desc: ''
updated: 1604605001779
created: 1604539200840
---

## [0.14.1](https://github.com/dendronhq/dendron/compare/v0.14.1-alpha.7...v0.14.1) (2020-11-05)

### Features

#### Lookup Copy WikiLink Modifier
- **lookup:** copy note link cmd ([e38743d](https://github.com/dendronhq/dendron/commit/e38743ddbac8486f2ac778bd546a6373a15a4f6d))

You can now copy the results of a lookup as wikilinks.

#### Lookup Multi-Select Modifier
- **lookup:** support multi-select ([b409c05](https://github.com/dendronhq/dendron/commit/b409c05d3b19797de714dbf10b6a4249758eae8a))

You can now toggle multi-select within lookup. This lets you work with multiple notes at once. You can combine this with other modifiers like **splitType** and the new **copyWikiLink** modifier. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/913ff5490ba9445787ff1063be749658" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

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