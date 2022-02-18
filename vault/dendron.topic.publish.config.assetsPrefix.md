---
id: zvFzP2vGufKPBZJ2KvvfQ
title: assetsPrefix
desc: 'Set the asset prefix for the published website.'
updated: 1645176662926
created: 1645176362328
---

- type: `string`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

By default, assets are served from the root. 

- If you are publishing to GitHub Pages and followed the instructions [here](https://pages.github.com/) by creating a repo named `{username}.github.io`, then no further action is needed. 
  - This is because GitHub will make your site available at `https://{username}.github.io`. 
- If you created a custom repo, you will need to set the prefix to the name of your repo 
  - This is because GitHub will make your site available at `https://{username}.github.io/{your-repo-name/}`

## Example

```yml
  publishing:
    assetsPrefix: foo
```