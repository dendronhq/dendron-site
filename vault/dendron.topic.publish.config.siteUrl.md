---
id: ZDAEEzEeSW0xQsMBWLQp0
title: siteUrl
desc: 'Set the URL the site will be published under.'
updated: 1645464784093
created: 1645170763884
---

- type: `string`
- default: N/A
- required: `false`

## Description
{{fm.desc}}
All links will be prefixed with this URL.

## Example
If you are publishing with a custom domain, such as `https://example.com`, `siteUrl` will be that URL.

```yml
  publishing:
    siteUrl: https://example.com
```

### Example with assetsPrefix

`siteUrl` will always be the base URL, while `assetsPrefix` may need to be used when using publishing services like GitHub Pages, GitLab Pages, and others when you aren't using a custom domain name.

![[dendron.topic.publish.config.assetsPrefix#description,1]]
