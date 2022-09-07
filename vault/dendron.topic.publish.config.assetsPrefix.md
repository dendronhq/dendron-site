---
id: zvFzP2vGufKPBZJ2KvvfQ
title: assetsPrefix
desc: 'Prefix all urls with the given prefix'
updated: 1662592240133
created: 1645176362328
---

- type: `string`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

By default, assets are served from the root (`/`). Adding an `assetsPrefix` will change the url that pages are served from. 

## Example

```yml
# in this case, it will serve requests from /foo
publishing:
  assetsPrefix: foo
```