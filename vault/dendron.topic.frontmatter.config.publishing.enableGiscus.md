---
id: kgnufytpadq0512gboskao2
title: enableGiscus
desc: 'Enable Giscus discussion widget in this page?'
updated: 1662440983905
created: 1662440616045
---

## Summary

- type: `boolean`
- default: `false`
- required: `false`

## Description
{{fm.desc}}

[Giscus.app](https://giscus.app) is a comment system that is powered by Github Discussions.

You can add a comment thread at the bottom of each page by setting `enableGiscus` in the note's frontmatter.

In order for this to have effect, you need to have the [[giscus|dendron.topic.publish.config.giscus]] configurations properly set up.

Please use the [configuration tool](https://giscus.app) that Giscus provides to populate the configurations.

## Example

```
---
id: 123
title: "Some note"
desc: "A note with Giscus enabled"
updated: 1234567890
created: 1234567890
enableGiscus: true
---

...
```