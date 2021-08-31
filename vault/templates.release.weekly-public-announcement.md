---
id: 1ec8d588-7c8a-47a2-b79e-1dd02d10b600
title: Weekly Public Announcement
desc: ''
updated: 1630430146152
created: 1622484182130
---


Dendron 0.57 has sprouted  🌱

https://wiki.dendron.so/notes/W5mqxShkKlwHarz90flG2.html

### Highlights

- (workspace) Workspace initialization up to 60% faster 🚀🚀🚀
- (workspace) Seed Browser: Users can now browse the Seed Registry directly from their workspace, and interactily download them into their workspace ([docs](https://wiki.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#seed-browse1)
- (workspace) Insert note has a bunch of new modes  ([docs](https://wiki.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#insert-note-link))
- (workspace) Tag colors now show up in graph view
- (workspace) Progress indicators are now displayed for all long running actions
- (workspace) The legacy preview has been removed as a recommended extension
- (workspace): Nicer refactor preview
- (workspace): Better hover message
- (markdown) Dendron natively supports `@user` notes ([docs](https://wiki.dendron.so/notes/ESqOqSOEo54lqvGLlQXM6.html))
- (pods) The GitHub pod can now use publish to create new issues ([docs](https://wiki.dendron.so/notes/8JECQzntY2P5ha3U.html))
- (fix:workspace) Backlinks properly update on frontmatter tag changes
- (fix:workspace) Issue with browse note command on windows
- (fix:workspace) Unhandled error when escaping from insert note command

### Docs

Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

- A new resource link was added for the mobile markdown editor, [Markor](https://github.com/gsantner/markor) (Android only), in the [mobile support section of the cookbook](https://wiki.dendron.so/notes/401c5889-20ae-4b3a-8468-269def4b4865.html#mobile-support) ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/173))
- Added [lookup section](https://wiki.dendron.so/notes/f83c1d87-eac0-48f3-a5cf-8a69989d8ec1.html#lookup) to the Dendrons Config docs, detailing some custom configuration around lookup behavior ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/172/))
- Added docs on inserting note links into the current document using lookup ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/170)):
  - [Dendron commands: Insert Note Link](https://wiki.dendron.so/notes/eea2b078-1acc-4071-a14e-18299fc28f47.html#insert-note-link)
  - [Dendrong Config: insertNoteLink](https://wiki.dendron.so/notes/f83c1d87-eac0-48f3-a5cf-8a69989d8ec1.html#insertnotelink)


### Community

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [here](https://wiki.dendron.so/notes/7c00d606-7b75-4d28-b563-d75f33f8e0d7.html)

- [Dave Richardson](https://github.com/djradon) [@gunaar](https://wiki.dendron.so/notes/42917c62-a456-44b8-af22-d0360abcc489.html)#9077 
  - [#dendron.taxonomist](https://wiki.dendron.so/notes/42917c62-a456-44b8-af22-d0360abcc489.html)
  - bad config in journal notes
  - [References to list items include sub-items when rendered in Preview v2 · Issue #1233 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1233)
  - [Preview v2 inconsistent behaviour around block-referenced list items · Issue #1235 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1235)
- [Ding](https://github.com/Ding-Fan) [@rainmaker](https://wiki.dendron.so/notes/a3df7b38-bb18-4c3b-acf7-03f81e5a277a.html)#7370 
  - [#dendron.taxonomist](https://wiki.dendron.so/notes/a3df7b38-bb18-4c3b-acf7-03f81e5a277a.html)
  - add Markor to list of mobile apps 
- [Bassmann](https://github.com/Bassmann) [@Bassmann](https://wiki.dendron.so/notes/8e61867b-aa77-46c4-9078-b7a08181d770.html)#5300 
  - issue with browse note
- NZ-John#0569
  - [#dendron.bugcatcher](https://wiki.dendron.so/notes/a3df7b38-bb18-4c3b-acf7-03f81e5a277a.html)
  - [Logo and site name when published, does not apply consistently across pages · Issue #1236 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1236)
- [HopperTech](https://github.com/HopperTech)
  - [#dendron.bugcatcher](https://wiki.dendron.so/notes/a3df7b38-bb18-4c3b-acf7-03f81e5a277a.html)
  - [New note stuck in with "stub: true" · Issue #1231 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1231)
- [people.aleksey-rowan](https://wiki.dendron.so/notes/QFkFEma6W2MqnKOfopw93.html)
  - [Cross-vault reference links are not rendered in V2 without `dendron//` prefix · Issue #1213 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1213)
- [Ryan Randall](https://github.com/ryan-p-randall)
  - [#dendron.bugcatcher](tags.dendron.bugcatcher)
  - [Rename note command doesn't update wikilinks to the renamed note if they are inside the renamed note · Issue #1207 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1207)
- [CyberFoxar](https://github.com/CyberFoxar)
  - [#dendron.bugcatcher](tags.dendron.bugcatcher)
  - [Preview v2 does not properly follow anchor links · Issue #1203 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1203)
- [people.tika](people.tika)
  - [Rename Note should apply to the Schema ID in the case of templates · Issue #1245 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1245)
  - ["Note does not exist. Create?" should read "Schema does not exist. Create?" in Schema Lookup · Issue #1246 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1246)
