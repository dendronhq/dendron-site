---
id: 8x5qwdsh05n4wry9tdhedl1
title: Host
desc: 'Host of the Giscus server'
updated: 1662437870371
created: 1662437382842
---

> This is only required if you wish to [self-host](https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md) Giscus.  
> Remove this configuration from `dendron.yml` if you are not self hosting.

- type: `string`
- default: N/A
- required: `false`

## Description

{{fm.desc}}.

## Example

```yml
  publishing:
    giscus:
      host: my-custom-host.com
```