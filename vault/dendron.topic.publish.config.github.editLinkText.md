---
id: BJowOXSu9os9rotHOebcu
title: editLinkText
desc: 'Set the text to be used with the edit link when enabled by enableEditLink.'
updated: 1645167864120
created: 1645167343760
---

- type: `string`
- default: `Edit this page on GitHub`
- required: `false`

## Description
{{fm.desc}}

[[enableEditLink|dendron.topic.publish.config.github.enableEditLink]] needs to be set to true for this to take effect.

## Example

```yml
  publishing:
    github:
      enableEditLink: true
      editLinkText: Click here to edit this note
```
