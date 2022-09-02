---
id: dolrzp2gu8kuguoz1ogsaza
title: Go Previous Sibling
desc: Go to the next previous in the hierarchy
updated: 1657896988368
created: 1657896924975
---


## Summary

{{fm.desc}}

## Keybindings
- shortcuts:
  - key: `ctrl+shift+[`

## Details

Siblings with numeric names will be sorted numerically, whereas siblings with alphabetical names will be sorted alphabetically when determining the next sibling.

When the active note is a [[Daily Journal Note|dendron://dendron.dendron-site/dendron.topic.special-notes.daily-journal-note]], this command will traverse month boundaries (eg. `daily.journal.2022.02.01` -> `daily.journal.2022.01.31`)

- NOTE: this currently only works when `journal.dateFormat` is left as the default (`y.MM.dd`) 

![Go Sibling Example](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/hierarchy.go-sibling.gif)

## Related
- [[Go Next Sibling|dendron://dendron.dendron-site/dendron.topic.navigation.commands.go-next-sibling]]