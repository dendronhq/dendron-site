---
id: K0yV3e8dJs7AjrUBVrOKT
title: editViewMode
desc: 'Set how the users should be redirected when clicking on the edit link.'
updated: 1645167825328
created: 1645167727446
---

- type: `tree | edit`
- default: `tree` 
- required: `false`

## Description
{{fm.desc}}

- `tree` mode will open the note's location in the repository.
- `edit` mode will open an editor that could be used to commit / create pull request with changes.

## Example

```yml
  publishing:
    github:
      editViewMode: `edit`
```
