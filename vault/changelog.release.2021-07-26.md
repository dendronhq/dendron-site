---
id: oLUblPDevwOoYr06
title: '0.52'
desc: ''
updated: 1636510296064
created: 1627282161908
---

Dendron 0.52 has sprouted  🌱

### Highlights
- Non-blocking workspace initialization ([[docs|changelog#non-blocking-workspace-initialization]])
- Dendron Markdown Preview Enhanced no longer required ([[docs|changelog#deprecate-markdown-preview-enhanced]])
- Find missing links in entire workspace  ([[docs|dendron.ref.commands#createmissinglinkednotes]])
- Hide the filter view in the note graph 
- Warn against missing frontmatter ([[docs|dendron.ref.commands#fixfrontmatter]])
- Hashtag autocomplete improvements ([[docs|dendron.topic.tags#autocomplete-intellisense]])
- Doctor command to automatically fix the frontmatter ([[docs|dendron.ref.commands#fixfrontmatter]])
- Google Doc Import Pod ([[docs|dendron.topic.pod.builtin.google-docs.import]])
- Ability to control graph zoom sensitivity 
- Bug Fixes
  - Reduce size of Dendron CLI
  - Hashtag links duplicate following text
  - Issues with parsing wikilinks with unicode and special symbols
  - Autocomplete takes a long time
- A lot of internal improvements

### Docs
Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

- A new RFC for [[Rich Web Client|rfc.17-rich-web-client]].
- A new page for [[Greenhouse Talks|community.greenhouse]].
- A new job posting for [[Head of Growth|careers.head-of-growth]] position.
- A new job posting for [[Head of Content|careers.head-of-content]] position.

### Community

#### Office Hours
You can find notes from our latest office hours [[here|community.office-hours.2021.07.25]]

#### Greenhouse Series

![[community.greenhouse#summary,1:#*]]

Video from our last talk, [[community.greenhouse.2021-07-23-using-dendron-with-20k-notes#summary]], is now available [here](https://www.youtube.com/watch?v=1mXGyG9ikD4)

Details of the upcoming talk this Friday with our very own @hikchoi#8934 posted below

![[community.greenhouse.2021-07-30-cerebrarium-showcase]]


#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [kimds91](https://github.com/kimds91)
  - `+bugcatcher`
  - [Fresh install has issue initializing](https://github.com/dendronhq/dendron/issues/1000)
- [SR--](https://github.com/SR--)
  - [Footnotes in host and referenced notes clash counterintuitively](https://github.com/dendronhq/dendron/issues/1001)
  - [Minor typos](https://github.com/dendronhq/dendron-site/pull/149)
- [aleksey-rowan](https://github.com/aleksey-rowan) @aleksey#5276
  - [Ctrl + Click to create a missing note](https://github.com/dendronhq/dendron/issues/1014)
  - [fix Dendron talk date on community.greenhouse.md](https://github.com/dendronhq/dendron-site/pull/147)
- [buxel](https://github.com/buxel) @Buxel#7181
  - [Improved import/export workflow to work with external wikis](https://github.com/dendronhq/dendron/issues/1020)
- [BiosElement](https://github.com/BiosElement) @Bios Element#4381
  - [Sort Collections by Last Updated](https://github.com/dendronhq/dendron/issues/1028)
- [unamusedmon](https://github.com/unamusedmon) @Unamused Moniker#5298
  - `+bugcatcher`
  - [Full note reference breaks previewv2](https://github.com/dendronhq/dendron/issues/1035)
- [teauxfu](https://github.com/teauxfu) @teauxfu#5228
  - [fix typo](https://github.com/dendronhq/dendron-site/pull/146)
- [MaDDmin](https://github.com/MaDDmin)
  - `+taxonomist`
  - [Update dendron.topic.links.md](https://github.com/dendronhq/dendron-site/pull/148)

### Changelog
![[changelog#052,1:#051]]
