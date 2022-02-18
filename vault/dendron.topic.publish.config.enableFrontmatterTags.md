---
id: XDpVGHqZ1aqSiG1j0VYGO
title: enableFrontmatterTags
desc: 'Enable rendering [[frontmatter tags|dendron.topic.tags#frontmatter-tags]] in published notes.'
updated: 1645177663367
created: 1645177553669
---

> ❗ Note that currently this will also affect how frontmatter tags will be rendered in [[Preview|dendron.topic.preview]]. This will later be fixed.

- type: `boolean`
- default: `true` 
- required: `true`

## Description
{{fm.desc}}

## Example

```yml
  publishing:
    enableFrontmatterTags: false
```
