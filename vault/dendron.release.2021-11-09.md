---
id: EjPEcAkZIDgzHaVMk4teA
title: Release Notes (version 0.68)
desc: ''
updated: 1636480628276
created: 1636478484110
---

Dendron 0.68 has sprouted  🌱

Take a look at the latest [Dendron wiki](https://wiki.dendron.so), and you'll see some new features directly from these highlights:

* Local TOC in the right-hand nav for each page in the published docs
* Newly combined search bar that can go directly to a note, or search note contents using the `?` prefix

Also: an enhancement in this release delivers breaking changes announced last week, due to some renaming of commands, which can be referenced in the changelog.

### Highlights
* feat(schemas): adding new command - create schema from hierarchy
* feat(views): native dendron preview
* feat(publish): add local table of contents, of current note, in right-hand nav
* feat(publish): merge lookup and search fields
* enhance(publish): migrate publish related commands to nextjs

### Everything Else
* enhance(schemas): adding error messaging and additional validation for when schemas are malformed
* enhance(schemas): cmd create-schema-from-hierarchy allow schema to end with `*`
* enhance(schema): update schemas on save instead of having to reload workspace
* enhance(commands): move header supports multi vault
* enhance(commands): allow creation of new notes when move header destination doesn't exist yet
* fix(pods): github import pod handle deleted authors
* fix(workspace): warning to remove stub property if the note has content
* fix(publish): table of contents layout
* fix(server): improving error response on api server
* fix(workspace): Change Workspace command recognizes native workspaces

### Community

#### General Updates

- New Discord channel, `#today-i-learned`, is a great place to share discoveries about Dendron and anything else!
- Make sure to subscribe to the [weekly newsletter](https://buttondown.email/dendron), which kicked off last week

#### Google Docs Import Pod: Sign up for the beta!

Ongoing development of the [[Google Docs Import Pod|dendron.topic.pod.builtin.google-docs.import]] allows you to import google docs directly into Dendron with a managed OAuth flow. If you would like to beta test this feature, please send us your gmail account (either message us on Discord or mail to support@dendron.so) and we will add it to our beta testing group.

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [SR--](https://github.com/SR--) `Tika#9526`
  - [typo in RFC: Todo Notes](https://github.com/dendronhq/dendron-site/pull/259)
- [NZ John](https://github.com/nz-john) `@NZ-John#0569`
  - [HTML tables in NextJS is not formatted and ugly - basic formatting would help](https://github.com/dendronhq/dendron/issues/1674)
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
![[dendron.release.changelog#0680,1:#0661]]
