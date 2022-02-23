---
id: nISb8ctZKwMj7ya4U2GxW
title: enableNoteTitleForLink
desc: 'Enable using note titles when displaying naked links in a published note.'
updated: 1645172043635
created: 1645171968108
---

> ❗ Note that this is not yet fully supported for multi-vault. Specifically, [[cross vault links|dendron.topic.links#cross-vault-links]] are not supported.

- type: `boolean`
- default: `true` 
- required: `false`

## Description
{{fm.desc}}

This also applies to note references. 

If set to `false`, the entire hierarchy string will be used for rendering the links.

## Example

```yml
  publishing:
    enableNoteTitleForLink: true
```