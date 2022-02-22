---
id: bcB4lCpLTOjnGHFGv0VRM
title: Tracking
desc: 'Set the optional [Google Analytics](https://analytics.google.com/) [tracking ID](https://support.google.com/analytics/answer/7372977) to embed in your published website.'
updated: 1645170279044
created: 1645170104715
---

- type: `string`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

Google Analytics tracking will not be enabled when previewing your site with `Dendron: Publish Dev`

## Example

```yml
  publishing:
    ga:
      tracking: UA-000000-2
```
