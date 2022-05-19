---
id: wbqskxz6thownpbdaqdb4n0
title: enableTaskNotes
desc: ""
updated: 1652996665381
created: 1652996469810
---

> ❗ Note that currently this will also affect how tags will be rendered in [[Preview|dendron.topic.preview]]. This will later be fixed.

- type: `boolean`
- default: `true`
- required: `false`

## Description

{{fm.desc}}

When enabled, links to task notes will have a checkmark, and will display task
owner and due date. You can disable this view by setting this configuration to false.

## Example

```yml
publishing:
  enableTaskNotes: false
```
