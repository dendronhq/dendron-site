---
id: oai3gt1ozq65bffdq72m21j
title: Skip Levels
desc: 'If set, determines how many levels of children to skip when making the collection. For example, you might have the following hierarchy'
updated: 1647814365715
created: 1647814365715
---

## Summary

- type: ``
- default: `` 
- required: ``

## Description
{{fm.desc}}

## Example

Given a directory with the following notes

```
- blog.md
- blog.reading.md
- blog.reading.journal.md
- blog.reading.journal.2020.md
- blog.reading.journal.2020.12.md
- blog.reading.journal.2020.12.20.one.md
- blog.reading.journal.2020.12.31.two.md
```

and the following set in `blog.reading`

```yml
skipLevels: 3
```

When you publish, you might only want to show the leaf nodes and skip the intermediary levels. In the above example, setting `skipLevels: 3` on `blog.reading.md` will result in the following hierarchy being published.

```
- blog.md
- blog.reading.md
- blog.reading.journal.2020.12.20.one.md
- blog.reading.journal.2020.12.31.two.md
```

- NOTE: when you set `skipLevels`, this also affects [[children links|dendron.topic.links#children-links]]