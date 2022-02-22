---
id: IEROzlHJHdan52ov7eUsn
title: editRepository
desc: "Set the URL of the project's GitHub repository."
updated: 1645529948275
created: 1645167898297
---

- type: `string`
- default: N/A
- required: `false`

## Description
{{fm.desc}}

This will be used to redirect users to the correct repository when the edit link is clicked.

## Example

```yml
  publishing:
    github:
      editRepository: https://github.com/dendronhq/dendron-site
```
