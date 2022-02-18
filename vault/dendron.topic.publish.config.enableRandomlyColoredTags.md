---
id: 0q2h2R9xS2pT7jctDhIYB
title: enableRandomlyColoredTags
desc: "Enable automatically generated colors for tags when the tag color isn't specified."
updated: 1645177756408
created: 1645177756408
---

> ❗ Note that currently this will also affect how tags will be rendered in [[Preview|dendron.topic.preview]]. This will later be fixed.

- type: `boolean`
- default: `true` 
- required: `false`

## Description
{{fm.desc}}

If disabled, only the tags that have colors explicitly set will have the color rendered, and the rest will be rendered identical to regular links.

## Example

```yml
  publishing:
    enableRandomlyColoredTags: false
```
