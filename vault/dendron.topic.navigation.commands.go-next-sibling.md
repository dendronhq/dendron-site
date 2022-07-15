---
id: 2tfkgolv6di8g4j0yyskz2i
title: Go Next Sibling
desc: 'Go to the next sibling in the hierarchy'
updated: 1657896883618
created: 1657896704306
---

## Summary

{{fm.desc}}

## Keybindings
- shortcuts:
  - key: `ctrl+shift+]`

## Details

Siblings with numeric names will be sorted numerically, whereas siblings with alphabetical names will be sorted alphabetically when determining the next sibling.

When the active note is a [[Daily Journal Note|dendron://dendron.dendron-site/dendron.topic.daily-journal-note]], this command will traverse month boundaries (eg. `daily.journal.2022.01.31` -> `daily.journal.2022.02.01`)

- NOTE: this currently only works when `journal.dateFormat` is left as the default (`y.MM.dd`) 

![Go Sibling Example](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)