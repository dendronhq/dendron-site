---
id: NWuXh9ZreX3XKI6NhRIBJ
title: '0.69'
desc: ''
updated: 1640428613848
created: 1637081497904
---

Dendron 0.69 has sprouted  🌱

Updates include enhancements to lookup, troubleshooting schema errors, and better support for [[native workspaces|dendron.topic.workspace.native]].

Native workspaces are a new addition to Dendron. They let you use Dendron inside your existing projects by turning a subdirectory (eg. docs) into a Dendron (Native) workspace. Note that Dendron Native workspace is a [[seed|dendron://dendron.dendron-site/tags.stage.seed]] stage feature and that the interface is still being actively worked on between weekly releases.

### Highlights
- feat(workspace): native workspace enhancements ([[docs|dendron.topic.workspace.native]])
  - Dendron will now search for `dendron.yml` in native workspaces even if `dendron.yml` is not in the root of the workspace.
- enhance(lookup): lookups with a dot at the end now look up hierarchies without having exact postfix ([[docs|dendron.topic.lookup.find#dot-at-the-end--descendent-query]])
  - Having a dot at the end of a lookup will now look up child and descendant notes (bubbling up the child notes to the top) that match the query, but without requiring the full match of the prefix note.
- fix(markdown): footnote definitions including links are rendered incorrectly

### Everything Else
- enhance(pods): add `configPath` and `query` parameters to pods ([[docs|dendron.topic.pod.cli]])
- enhance(views): support setting `sort_order` in tree view ([[docs|dendron.topic.publish-legacy.configuration#sort_order]])
- enhance(pods): include name of note with error when Airtable pod encounters error
- enhance(schema): Add `Go to File` navigation prompt when schema malformation errors appear
- fix(workspace): apply enableUser/HashTags to broken wikilinks code action
- fix(views): `nav_order` property not respected in tree view
- fix(workspace): `Dendron: Vault add` avoids adding duplicate line

#### Breaking Changes
Note graph commands lose their `V2` suffix and are now simply `Dendron: Show Note Graph` and `Dendron: Show Schema Graph`. This only impacts functionality with the command palette.

### Community

#### General Updates

- Beta testing of the Google Docs Import Pod is ongoing. [Fill out the survey](https://airtable.com/shrP1yKjIDPFU4wHN) if interested!

#### Wiki site reorg

You may have noticed changes in the Dendron wiki docs with our recent site reorg. The changes are described in [this GitHub discussion](https://github.com/dendronhq/dendron/discussions/1665) and represent a major rehaul of how our website is organized.

We are happy to announce that those changes are now live and you can see them by visiting the [Dendron wiki](https://wiki.dendron.so/).

In terms of changes, running `git stat` yields the following after the refactor:

- dendron-site
  - 227 files changed, 1131 insertions(+), 950 deletions(-)
- org-private (internal vault used by the Dendron team)
  - 132 files changed, 541 insertions(+), 198 deletions(-)

In total, Dendron refactored **over 300 files and made over 2k line changes as part of this reorg!**

In any other tool, something like this might have taken weeks or months (or in all likelihood, not happened at all) and left-behind lots of 404s.

In Dendron, it took a few hours (most of the time was spent making additional content changes), and no active links were broken in this process (we did prune some unused pages).

Our goal with Dendron is to build a tool to help humans organize, reference, and work with any amount of knowledge. This exercise was a small demonstration of that.

Thanks, everyone for your continued support and please leave feedback about the new organization in the GitHub discussion or in the `#feedback` channel on Discord!

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]].

![[community.events.reading-series.2021.11.16]]

#### Office hours

You can find notes from our latest office hours [[here|community.events.office-hours.2021.11.14]].

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]].

- `@orang2tang#7760`
  - #dendron.bugcatcher
  - issue with Dendron site on Edge browser
- [Aaron Meese](https://github.com/ajmeese7)
  - #dendron.taxonomist
  - [Update dendron.faq.md by ajmeese7 · Pull Request #273 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/273)
- `@Jack of some quantity of trades#3247`
  - CLI issue when `enginePort` is passed
- [sidwellr](https://github.com/sidwellr)
  - #dendron.bugcatcher
  - [Clicking links to pasted files in Dendron Preview doesn't work](https://github.com/dendronhq/dendron/issues/1695)
- [Jeff Teter](https://github.com/JeffTeter)
  - #dendron.bugcatcher
  - [Preview copied and pasted should not include background colors](https://github.com/dendronhq/dendron/issues/1703)
- [Kimsia Sim](https://github.com/simkimsia) `@kimsia#3035`
  - #dendron.bugcatcher
  - [forEach of undefined bug when using native workspace](https://github.com/dendronhq/dendron/issues/1705)
- [Mari Rajaram](https://github.com/mrajaram)
  - #dendron.taxonomist
  - [space character not visible in docs by mrajaram · Pull Request #275 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/275)

### Changelog
![[changelog#0690,1:#0680]]
