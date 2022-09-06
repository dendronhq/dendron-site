---
id: 70m7iwf643w0m2rc22ddcez
title: repoId
desc: 'ID of the repository where the discussion is stored'
updated: 1662438361392
created: 1662438226408
---

> Please use the [configuration tool](https://giscus.app) to figure out your repository ID.  
> When you select your public repository from the tool, the ID will be automatically generated.

- type: `string`
- default: N/A
- required: `true`

## Description

{{fm.desc}}

## Example
```yml
  publishing:
    giscus:
      repoId: "1234567890"
```