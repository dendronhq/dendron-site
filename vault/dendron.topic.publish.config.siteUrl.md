---
id: ZDAEEzEeSW0xQsMBWLQp0
title: siteUrl
desc: 'Set the URL the site will be published under.'
updated: 1645470216064
created: 1645170763884
---

- type: `string`
- default: N/A
- required: `false`

## Description
{{fm.desc}}
All links will be prefixed with this URL.

`siteUrl` will always be the base URL, while [[assetsPrefix|dendron.topic.publish.config.assetsPrefix]] may need to be used when using publishing services like GitHub Pages, GitLab Pages, and others when you aren't using a custom domain name.

## Example
If you are publishing with a custom domain, such as `https://example.com`, `siteUrl` will be that URL.

```yml
  publishing:
    siteUrl: https://example.com
```
