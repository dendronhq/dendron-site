---
id: xu0sd04shixsz6wdns8hiff
title: Mapping
desc: 'Set the mapping between the parent page and the discussion'
updated: 1662439498810
created: 1662439088980
---

- type: `url` | `title` | `og:title` | `specific` | `number` | `pathname`
- default: N/A
- required: `true`

## Description

{{fm.desc}}.

## Example

```yml
  publishing:
    giscus:
      mapping: "pathname"
```