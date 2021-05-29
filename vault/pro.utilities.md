---
id: 33f8e460-99dc-49b3-baf3-cadb54e4853b
title: Utilities
desc: ''
updated: 1621875496030
created: 1619128756963
---
## Summary

This describes utilities modules. 

In general, the way to think about utilities is to add them to points where they can be most readily re-used. 

In order of precedence:

```
- [[pro.common-all]]
- [[Common Server|pro.]]
- [[Dendron Engine|pro.dendron-engine]]
- [[Dendron Plugin|pro.dendron-plugin]]
```

- Testing 
  - [[Engine Test Utils|pro.engine-test-utils]]

## By Library

### Common-All

![[pro.common-all#Utilities,1]]

### Common-Server

![[pro.common-server#utilities,1]]

### Dendron CLI

![[pro.dendron-cli#utilities]]

### Engine

![[dendron://dendron-site/pro.dendron-engine#utilities,1:#*]]

### Plugin

![[dendron://dendron-site/pro.dendron-plugin#utilities,1:#*]]

### Engine Test Utils

![[dendron://dendron-site/pro.engine-test-utils#utilities,1]]

## Git Utils
- NOTE: git support is a wrapper around the native `git` installation. we assume a minimal version of `2.20`. when adding new functionality, make sure that it is available in git 2.20

- engine-server:src/topics/git.ts
- common-server:src/git.ts

