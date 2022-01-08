---
id: N9X7MArddruHw3FXxZv8X
title: '0.60'
desc: ''
updated: 1640425250362
created: 1632174465899
---

Dendron 0.60 has sprouted  🌱

### Highlights
- Next.js publishing supports fulltext search 
- Next.js publishing upgraded to Next.js 11 - 50% faster local development experience 🚀
- better performance for notes with lots of highlights

### Everything Else
- add Google Analytics to Next.js template
- add optional image and imageAlt props to Next.js template
- notice for running in dev mode 
- various GitHub pod improvements ([[docs|dendron.topic.pod.builtin.github-issue]])
  - imported issues now have `author` field for user who submitted issue
  - you can now update the `milestone` using pods
  - you can now create a new GitHub discussion using pods
  - renamed to GitHub issue pod #breaking
- rename note can leave incorrect metadata if parent is a stub 
- lots of fixes for Next.js publishing
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

You can find notes from our latest office hours [[here|community.events.office-hours.2021.09.19]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- `@doctorboy#9882`
    - #role.bugcatcher
    - schema match no longer works unless full path is typed in
- [Jack](https://github.com/imalightbulb) `@I'm a lightbulb#6986`
    - backlinks don't update
- `@Maxotronic#1632`
    - issue with publishing 11ty using old GitHub action
    - issue with publishing using assetPrefix in 11ty
- [lenamio](https://github.com/lenamio)
    - [Tag autocomplete suggestion only appears if # symbol is first in line](https://github.com/dendronhq/dendron/issues/1352)
- `@binary#0486`
    - #role.taxonomist
    - [add React style guide by viztor](https://github.com/dendronhq/dendron-site/pull/207)


### Changelog
![[changelog#060,1:#059]]


