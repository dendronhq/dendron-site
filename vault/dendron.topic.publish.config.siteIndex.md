---
id: MRFiZNswI42Cg5kxytUqq
title: siteIndex
desc: 'Set the note that will be the home of your published site.'
updated: 1645170561724
created: 1645170356393
---

- type: `string`
- default: first element of first element of [[siteHierarchies|dendron://dendron.dendron-site/dendron.topic.publishing.config.siteHierarchies]]
- required: `false`

## Description
{{fm.desc}}

## Example

```yml
  publishing:
    siteIndex: foo
    siteHierarchies:
      - dendron
      - foo
      - bar
```
