---
id: W5mqxShkKlwHarz90flG2
title: Release Notes (version 0.57)
desc: ''
updated: 1630430694338
created: 1630414444200
---

Dendron 0.57 has sprouted  🌱

### Highlights

- (workspace) Workspace initialization up to 60% faster 🚀🚀🚀
- (workspace) Seed Browser: Users can now browse the Seed Registry directly from their workspace, and interactively download them into their workspace ([[docs|dendron.ref.commands#seed-browse,1:]])
- (workspace) Insert note has a bunch of new modes  ([[docs|dendron.ref.commands#insert-note-link]])
- (workspace) Tag colors now show up in graph view
- (workspace) Progress indicators are now displayed for all long running actions
- (workspace) The legacy preview has been removed as a recommended extension
- (workspace): Nicer refactor preview
- (workspace): Better hover message
- (markdown) Dendron natively supports `@user` notes ([[docs|dendron.topic.users]])
- (pods) The GitHub pod can now use publish to create new issues ([[docs|dendron.topic.pod.builtin.github-issue.publish]])
- (fix:workspace) Backlinks properly update on frontmatter tag changes
- (fix:workspace) Issue with browse note command on windows
- (fix:workspace) Unhandled error when escaping from insert note command

### Docs

Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

- A new resource link was added for the mobile markdown editor, [Markor](https://github.com/gsantner/markor) (Android only), in the [[mobile support section of the cookbook|dendron.guides.cook#mobile-support]] ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/173))
- Added [[lookup section|dendron.ref.config#lookup]] to the Dendrons Config docs, detailing some custom configuration around lookup behavior ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/172/))
- Added docs on inserting note links into the current document using lookup ([GitHub PR](https://github.com/dendronhq/dendron-site/pull/170)):
  - [[Dendron commands: Insert Note Link|dendron.ref.commands#insert-note-link]]
  - [[Dendrong Config: insertNoteLink|dendron.ref.config#insertnotelink]]

### Community

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [Dave Richardson](https://github.com/djradon) @gunaar#9077 
  - #dendron.taxonomist
  - bad config in journal notes
  - [References to list items include sub-items when rendered in Preview v2 · Issue #1233 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1233)
  - [Preview v2 inconsistent behaviour around block-referenced list items · Issue #1235 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1235)
- [Ding](https://github.com/Ding-Fan) @rainmaker#7370 
  - #dendron.taxonomist
  - add Markor to list of mobile apps 
- [Bassmann](https://github.com/Bassmann) @Bassmann#5300 
  - issue with browse note
- NZ-John#0569
  - #dendron.bugcatcher
  - [Logo and site name when published, does not apply consistently across pages · Issue #1236 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1236)
- [HopperTech](https://github.com/HopperTech)
  - #dendron.bugcatcher
  - [New note stuck in with "stub: true" · Issue #1231 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1231)
- [Aleksey Rowan](https://github.com/aleksey-rowan) @aleksey#5276
  - [Cross-vault reference links are not rendered in V2 without `dendron//` prefix · Issue #1213 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1213)
- [Ryan Randall](https://github.com/ryan-p-randall)
  - #dendron.bugcatcher
  - [Rename note command doesn't update wikilinks to the renamed note if they are inside the renamed note · Issue #1207 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1207)
- [CyberFoxar](https://github.com/CyberFoxar)
  - #dendron.bugcatcher
  - [Preview v2 does not properly follow anchor links · Issue #1203 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1203)
- [Tika](https://github.com/SR--) Tika#9526
  - [Rename Note should apply to the Schema ID in the case of templates · Issue #1245 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1245)
  - ["Note does not exist. Create?" should read "Schema does not exist. Create?" in Schema Lookup · Issue #1246 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1246)


### Changelog

![[dendron.release.changelog#057,1:#056]]
