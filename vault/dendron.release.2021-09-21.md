---
id: N9X7MArddruHw3FXxZv8X
title: Release Notes (version 0.60)
desc: ''
updated: 1632174904453
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

### Docs

Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

### Ongoing 
<!-- Discuss ongoing efforts here -->

### Community

#### Office Hours

<!-- TODO: update the link -->
You can find notes from our latest office hours [[here|dendron.community.office-hours.2021.09.]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron.community.roles]]

### Changelog
![[dendron.release.changelog#051,1:#050]]


