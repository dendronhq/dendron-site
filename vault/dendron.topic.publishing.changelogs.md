---
id: e1b84d7e-9b0d-4616-917f-f3af1e7541b0
title: Changelogs
desc: ''
updated: 1615245224502
created: 1615241095799
---

## Summary
- status: 🚧

Dendron can now generate a changelog for your published site. Note that this feature is currently experimental and will only generate the changelog for your latest commit. It also requires that you be using `git` to store your notes. When enabled, this will add `Changelog` to your nav bar which will have your most recent commit. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/Fullscreen_3_8_21__2_05_PM.jpg)

## Enable Changelogs

Update `dendron.yml`
![[dendron.topic.config#generatechangelog:#*]]

## Limitations

The current version of changelogs is deliberately limited as we are iterating on the feature. Currently it will only generate a diff based off the latest local git commit. It also assumes that your entire workspace is versioned using one git repo. 

- NOTE: this currently **won't** work with the documented way of [[publishing with github actions|dendron.topic.publishing.github]]

## FAQ

### How is this different from a `git diff`?

The changelog view will only show the diff of any public notes