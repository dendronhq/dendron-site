---
id: yAuiMNdBK0IDWBoSAAQ4D
title: Hierarchy
desc: 'Set per-hierarchy publishing configurations.'
updated: 1645178633277
created: 1645178048428
---

- type: `object`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

For each hierarchy you wish to configure, you can set the hierarchy name as the key and use the following properties:

- [[publishByDefault|dendron.topic.publish.config.hierarchy.publishByDefault]]
- [[customFrontmatter|dendron.topic.publish.config.hierarchy.customFrontmatter]]

## Example

```yml
  publishing:
    someHierarchyName:
      publishByDefault: ...
      customFrontmatter: ...
    anotherHierarchy:
      publishByDefault: ...
    more:
      customFrontmatter: ...
```