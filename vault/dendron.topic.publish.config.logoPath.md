---
id: ZO3Txy3c10TchaMdtQnes
title: logoPath
desc: 'Set the path to a logo image.'
updated: 1645177392648
created: 1645176901617
---

- type: `string`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

The logo will appear in the site header, and will be used as a default image if no `image` frontmatter property is set for a published note.

The value can be:

1. a path, which will be relative to the workspace root. or,
1. a web URL starting with `http` or `https`, in which case Dendron will use the provided URL as-is. 

## Example

```yml
  publishing:
    logoPath: https://example.com/logo
```
