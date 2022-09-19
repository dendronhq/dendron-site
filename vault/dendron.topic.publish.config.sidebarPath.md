---
id: j2xipr21p44rc7h8pcy2w5d
title: sidebarPath
desc: Set the path to a sidebar config file
updated: 1662571436782
created: 1662570297996
---

- type: `string | false`
- default: `undefined`
- required: `false`

## Description
{{fm.desc}}

`false` will disable it so that it no sidebar is visible published site.
For details on how to setup the `./sidebar.js` config file go to [[dendron://dendron.dendron-site/dendron.topic.publish.features#sidebar]]

## Example

```yml
  publishing:
    sidebarPath: './sidebar.js'
```