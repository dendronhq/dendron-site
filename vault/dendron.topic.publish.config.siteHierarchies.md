---
id: 8Qpabm7YvMzxJ7Xs5uFU9
title: siteHierarchies
desc: 'Set the list of hierarchies to publish.'
updated: 1645170666286
created: 1645170580284
---

- type: `string[]`
- default: `[root]`
- required: `true`

## Description
{{fm.desc}}

`root` is a special value that you can use to publish all hierarchies.

## Example

```yml
  publishing:
    siteHierarchies:
      - dendron
      - community
      - topic
```