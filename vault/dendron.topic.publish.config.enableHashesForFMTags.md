---
id: N5NAXJXFTXsBkKIY6ST1K
title: enableHashesForFMTags
desc: 'Enable rendering the [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] with the `#` symbol prefix in published notes.'
updated: 1645177730445
created: 1645177671451
---

> ❗ Note that currently this will also affect how frontmatter tags will be rendered in [[Preview|dendron.topic.preview]]. This will later be fixed.

- type: `boolean`
- default: `false` 
- required: `true`

## Description
{{fm.desc}}

## Example

```yml
  publishing:
    enableFrontmatterTags: true
    enableHashesForFMTags: true
```
