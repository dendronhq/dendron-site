---
id: bcB4lCpLTOjnGHFGv0VRM
title: Tracking
desc: 'Set the optional Google Analytics Tracking ID to embed in your published website.'
updated: 1645170279044
created: 1645170104715
---

- type: `string`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

[Google Analytics](https://analytics.google.com/) tracking will not be enabled when previewing your site with `Dendron: Publish Dev`

## Example

```yml
  publishing:
    ga:
      tracking: UA-000000-2
```
