---
id: wku38tue1e4orzz80hnh4p1
title: nav_order
desc: |
    If set, denote order that item appears in the published nav bar
updated: 1654536777601
created: 1654536402677
---

## Summary
- type: `number`
- default: `none` 
- frontmatter: `only`

## Description
{{fm.desc}}

- > NOTE: `root` has `nav_order: 1` so the `nav_order` of your denoted items must be superior to 1
- > NOTE: this property affects both the workspace [[Tree View|dendron://dendron.dendron-site/dendron.topic.sidebar.tree-view]] as well as the published [[Tree View|dendron://dendron.dendron-site/dendron.topic.publish.tree-view]]

## Example

By default, all notes at a given level are organized alphabetically

```
- Dendron
  - Alpha
  - Bravo
  - Charlie
```

Same example where `Bravo` has `nav_order: 2` and `Charlie` has `nav_order: 1`

```
- Dendron
  - Charlie <-- appears first because it has the smallest nav order
  - Bravo 
  - Alpha <-- appears last because notes with `nav_order` are sorted ahead of notes without `nav_order` 
```
