---
id: EjPEcAkZIDgzHaVMk4teA
title: "0.68"
desc: ''
updated: 1639537554017
created: 1636478484110
---

Dendron 0.68 has sprouted  🌱

Take a look at the latest [Dendron wiki](https://wiki.dendron.so), and you'll see some new features directly from these highlights:

* Local TOC in the right-hand nav for each page in the published docs
* Newly combined search bar that can go directly to a note, or search note contents using the `?` prefix

### Highlights
* feat(schemas): adding new command - create schema from hierarchy ([[docs|dendron.topic.schema.create-from-hierarchy]])
* feat(views): better webviews - faster loading and more stable performance
* feat(publish): add local table of contents, of current note, in right-hand nav ([[docs|dendron.topic.publish.features#table-of-contents]])
* feat(publish): merge lookup and search fields ([[docs|dendron.topic.publish.features#lookup-and-search]])

### Everything Else
* enhance(schemas): adding error messaging and additional validation for when schemas are malformed
* enhance(schemas): cmd create-schema-from-hierarchy allow schema to end with `*`
* enhance(schema): update schemas on save instead of having to reload workspace
* enhance(commands): move header supports multi vault
* enhance(commands): allow creation of new notes when move header destination doesn't exist yet
* fix(pods): GitHub import pod handle deleted authors
* fix(workspace): warning to remove stub property if the note has content
* fix(publish): table of contents layout
* fix(server): improving error response on api server
* fix(workspace): Change Workspace command recognizes native workspaces

#### Breaking Changes
* enhance(publish): migrate publish related commands to Next.js @hikchoi

Transitioning site build and previewing commands to use Next.js (instead of 11ty), along with the renaming of commands to be more inline with CLI:
* `Dendron: Site Preview` is renamed to `Dendron: Publish Dev`
* `Dendron: Site Build` is renamed to `Dendron: Publish Export`

### Community

#### General Updates

- We'll be refactoring the hierarchies within the Dendron wiki this week, optimizing for a better user experience. We're open to feedback!
- We are making some changes to our [newsletter](https://link.dendron.so/newsletter) (heads up, we have a newsletter). We are changing it from a monthly (lets be honest, once every few months) newsletter to a weekly one. The newsletter will feature release highlights, community highlights, and more! For more details, see the [[community.email-newsletter]].
- New Discord channel, `#today-i-learned`, is a great place to share discoveries about Dendron and anything else

#### Google Docs Import Pod: Sign up for the beta

We're rolling out [[direct integration with google docs|dendron.topic.pod.builtin.google-docs.import]] from inside of Dendron. we have used this extensively, internally, and are now looking for external beta testers before rolling it out generally. If interested, please [fill out the survey](https://airtable.com/shrP1yKjIDPFU4wHN) to get access to the beta, as we'll need to whitelist your gmail account with our Google App API.

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]].

![[community.reading-series.journal.2021.11.09]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [SR--](https://github.com/SR--) `Tika#9526`
  - [typo in RFC: Todo Notes](https://github.com/dendronhq/dendron-site/pull/259)
- [NZ John](https://github.com/nz-john) `@NZ-John#0569`
  - [HTML tables in Next.js is not formatted and ugly - basic formatting would help](https://github.com/dendronhq/dendron/issues/1674)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - #dendron.bugcatcher
  - [Schema note template overrides selection extract](https://github.com/dendronhq/dendron/issues/1675)
- [Claus Conrad](https://github.com/cconrad) `@cconrad#0514`
	- #dendron.bugcatcher
	- [Next letter after non-ascii character capitalized](https://github.com/dendronhq/dendron/issues/1668)
- [Dave Richardson](https://github.com/djradon) `@djradon#9077`
	- [lookup (without spaces) should be case-insensitive](https://github.com/dendronhq/dendron/issues/1654)
- [Guilherme Costa](https://github.com/guilhermesfc) `@Guilherme Costa#9124`
	- [Mardown Preview Enhanced does not open](https://github.com/dendronhq/dendron/issues/1657)
- [Johndendron](https://github.com/johndendron) `@johndendron29#1873`
	- #dendron.bugcatcher
	- [Show Preview does not show contents of all children under a scope](https://github.com/dendronhq/dendron/issues/1663)

### Changelog
![[changelog#0680,1:#0660]]
