---
id: zihyua4xcv7ypqtlqwyx8v1
title: Theme
desc: 'Theme that Giscus will be displayed in'
updated: 1662439897417
created: 1662439727887
---

> ⚠️ Due to limitations, experimental custom theme support is limited when publishing your notes with Dendron.  
> Only the provided themes are supported.

- type: 
  | `light`
  | `light_high_contrast`
  | `light_protanopia`
  | `light_tritanopia`
  | `dark`
  | `dark_high_contrast`
  | `dark_protanopia`
  | `dark_tritanopia`
  | `dark_dimmed`
  | `transparent_dark`
  | `preferred_color_scheme`
- default: N/A
- required: false

## Description

{{fm.desc}}.

## Example

```yml
  publishing:
    giscus:
      theme: preferred_color_scheme
```