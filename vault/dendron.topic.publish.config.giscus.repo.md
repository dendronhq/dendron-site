---
id: o0pdj7oeam8lz7uwh4jzwxn
title: Repo
desc: 'Repository where the discussion is stored.'
updated: 1662438094967
created: 1662437880425
---

> The string should be formatted in the following form:  
> `{user name}/{repo name}` for personal repositories
> `{organization name}/{repo name}` for organization repositories

- type: `${string}/${string}`
- default: N/A
- required: `true`

## Descroption

{{fm.desc}}.

## Example

```yml
  publishing:
    giscus:
      repo: "dendronhq/dendron-site"
```