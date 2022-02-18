---
id: fJtzFwKpMU9hrYBBvwTcY
title: hierarchyDisplayTitle
desc: "Set the text to be used as the heirarchy display block's title"
updated: 1645171955040
created: 1645171858085
---

- type: `string`
- default: `Children` 
- required: `false`

## Description
{{fm.desc}}

[[enableHierarchyDisplay|dendron.topic.publish.config.enableHierarchyDisplay]] needs to be enabled for this to be in effect.

## Example

```yml
  publishing:
    enableHierarchyDisplay: true
    hierarchyDisplayTitle: Children
```