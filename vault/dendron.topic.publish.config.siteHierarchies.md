---
id: 8Qpabm7YvMzxJ7Xs5uFU9
title: siteHierarchies
desc: 'Set the list of hierarchies to publish'
updated: 1662516027309
created: 1645170580284
---

- type: `string[]`
- default: `[root]`
- required: `true`

## Description
{{fm.desc}}

> NOTE: `root` is a special value. When this is set, all hierarchies are published. If you want to publish specific hierarchies, remove `root` and list out hierarchies that you want to publish

## Example

- publishing all notes
```yml
  publishing:
    siteHierarchies:
      - root
```

- publishing specific colors
```yml
  publishing:
    siteHierarchies:
      - dendron
      - community
      - topic
```