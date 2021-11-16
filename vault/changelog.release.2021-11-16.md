---
id: NWuXh9ZreX3XKI6NhRIBJ
title: "0.69"
desc: ''
updated: 1637083059797
created: 1637081497904
---

Dendron 0.69 has sprouted  🌱

Updates include enhancements to using Lookup, troubleshooting schema errors, and tweaks to [[Native Workspaces|dendron.topic.workspace.native]].

If you haven't taken a look at what Native Workspaces entail, they are a way to have Dendron docs within an existing project (such as a docs directory of a Python project).

### Highlights
- feat(workspace): native workspace enhancements ([[docs|dendron.topic.workspace.native]])
  - Dendron will now search for `dendron.yml` in native workspaces even if `dendron.yml` is not in the root of the workspace.
- enhance(lookup): lookups with a dot at the end now look up hierarchies without having exact postfix ([[docs|dendron.topic.lookup.find#dot-at-the-end--descendent-query]])
  - Having a dot at the end of a lookup will now look up child and descendant notes (bubbling up the child notes to the top) that match the query, but without requiring the full match of the prefix note.
- fix(markdown): footnote definitions including links are rendered incorrectly

### Everything Else
- enhance(pods): add `configPath` and `query` parameters to pods ([[docs|dendron.topic.pod.cli]])
- enhance(views): support setting `sort_order` in tree view ([[docs|dendron.topic.publish-legacy.configuration#sort_order]])
- enhance(pods): include name of note with error when airtable pod encounters error
- enhance(schema): Add `Go to File` navigation prompt when schema malformation errors appear
- fix(workspace): apply enableUser/HashTags to broken wikilinks code action
- fix(views): `nav_order` property not respected in tree view
- fix(workspace): `Dendron: Vault add` avoids adding duplicate line

#### Breaking Changes
Note graph commands lose their `V2` suffix and are now simply `Dendron: Show Note Graph` and `Dendron: Show Schema Graph`. This only impacts functionality with the command palette.

### Community

#### General Updates

- Refactoring of the Dendron wiki hierarchies took place last week. Links should still work, due to Dendron magic.
- Beta testing of the Google Docs Import Pod is ongoing. [Fill out the survey](https://airtable.com/shrP1yKjIDPFU4wHN) if interested!

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]].

![[community.reading-series.journal.2021.11.16]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

TODO

### Changelog
![[changelog#0690,1:#0680]]
