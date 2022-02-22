---
id: bxAolNARbmgcGB8xxoUVz
title: siteFaviconPath
desc: 'Set the path to favicon.'
updated: 1645177458879
created: 1645177406945
---

- type: `string`
- default: N/A
- required: `false`

## Description
{{fm.desc}}

The value is relative to the workspace root.

You can also place `favicon.ico` directly in the `/public` dir and omit this configuration.

## Example

```yml
  publishing:
    siteFaviconPath: public
```
