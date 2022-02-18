---
id: h5afVt8ss9e4wXye78oUi
title: siteRootDir
desc: 'Set the directory where your website will be built.'
updated: 1645170756809
created: 1645170673383
---

- type: `string`
- default: `docs` 
- required: `true`

## Description
{{fm.desc}}
This path is relative to your workspace root.

## Example

```yml
  publishing:
    siteRootDir: docs # will build site under {workspace root}/docs/
```
