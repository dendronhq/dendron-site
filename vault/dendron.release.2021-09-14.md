---
id: aURuqCucZegsCpJSb5m90
title: Release Notes (version 0.59)
desc: ''
updated: 1631659688590
created: 1631659388102
---

title: Release Notes (version 0.59)

Dendron 0.59 has sprouted  🌱

### Highlights
- feat(publish): publish using next and github pages (https://wiki.dendron.so/notes/e5st4LFLtIwwbQmC6JBaF.html#setup)
- feat(markdown): custom css for images (https://wiki.dendron.so/notes/a91fd8da-6895-49fe-8164-a17acd8d9a17.html#extended-images)
- enhance(pods) markdown import to update asset links

### Everything Else
- enhance(publish) support `assetPrefix` option with nextjs publishing
- enhance(publish) initialize nextjs template with `https` protocol 
- enhance(publish) autoset sane defaults for nextjs publishing
- enhance(publish) unpublished notes replaced with link to [[unpublished pages|dendron.ref.unpublished-pages]]
- enhance(lookup) "Create New" will be first result if no exact match
- enhance(lookup) Disallow toggle of vault selector when using "Move Note" command
- enhance(workspace) Use sentry to track errors
- fix(lookup) direct children query not filterting all results
- fix(lookup) ignore lookupConfirm if dailyVault is set
- fix(lookup) running move note highlights non-current note
- fix(lookup) running [[directChildOnly|dendron.topic.lookup.modifiers#directchildonly]] filter on root will still show all results
- fix(workspace) stop calendar from auto expanding when the last note is closed 
- fix(workspace) correctly render cross-vault note references in preview v2 
- fix(publish) exclude private vault backlinks when publishing
- fix(markdown) highlight same file wikilinks, wildcard references, links with anchors 
- fix(publish) backlinks respect assetPrefix

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


