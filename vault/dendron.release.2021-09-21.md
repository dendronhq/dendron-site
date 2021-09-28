---
id: N9X7MArddruHw3FXxZv8X
title: Release Notes (version 0.60)
desc: ''
updated: 1632244185738
created: 1632174465899
---

Dendron 0.60 has sprouted  🌱

### Highlights
- nextjs publishing supports fulltext search 
- nextjs publishing upgraded to next 11 - 50% faster local development experience 🚀
- better performance for notes with lots of highlights

### Everything Else
- add Google Analytics to nextjs template
- add optional image and imageAlt props to nextjs template
- notice for running in dev mode 
- various github pod improvements ([[docs|dendron.topic.pod.builtin.github-issue]])
  - imported issues now have `author` field for user who submitted issue
  - you can now update the `milestone` using pods
  - you can now create a new github discussion using pods
  - renamed to github issue pod #breaking
- rename note can leave incorrect metadata if parent is a stub 
- lots of fixes for nextjs publishing
    - fix `siteUrl` resolution with `assetPrefix`
    - fix `seoProps` not being set on static page
    - do not publish extra page for siteIndex under /notes
    - don't add .html suffix to canonical url 
    - fix various compiler issue for nextjs-template
    - set correct canonical url with asset prefix


### Ongoing 

- [Preview v2 does not properly follow anchor links · Issue #1203 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1203)

### Community

#### Office Hours

You can find notes from our latest office hours [[here|dendron.community.office-hours.2021.09.19]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron.community.roles]]

- `@doctorboy#9882`
    - #dendron.bugcatcher
    - schema match no longer works unless full path is typed in
- [Jack](https://github.com/imalightbulb) `@I'm a lightbulb#6986`
    - backlinks don't update
- `@Maxotronic#1632`
    - issue with publishing 11ty using old github action
    - issue with publishing using assetPrefix in 11ty
- [lenamio](https://github.com/lenamio)
    - [Tag autocomplete suggestion only appears if # symbol is first in line](https://github.com/dendronhq/dendron/issues/1352)
- `@binary#0486`
    - #dendron.taxonomist
    - [add react style guide by viztor](https://github.com/dendronhq/dendron-site/pull/207)


### Changelog
![[dendron.release.changelog#060,1:#059]]


