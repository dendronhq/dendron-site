---
id: Ip4mAB7JDIjcm6jZgugGP
title: customFrontmatter
desc: 'Set custom frontmatter to be added to each published note in the hierarchy.'
updated: 1645178459547
created: 1645178386094
---

- type: `object[]`
- default: `[]` (empty list) 
- required: `false`

## Description
{{fm.desc}}

Note that this will override existing properties if they are already set in the note frontmatter with the same key.

## Example
> Add `toc: true` to all notes published under the `iam.*` hierarchy.

```yml
publishing:
  hierarchy:
    iam: # for all notes under the hierarchy `iam.*`
      customFrontmatter:
        - 
          key: toc # add custom frontmatter property `toc`
          value: true # and set it to `true`
```
