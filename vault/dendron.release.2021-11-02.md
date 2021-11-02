---
id: 4q0nOxVnDvAMD18zyNebk
title: 'Release Notes (version 0.66)'
desc: ''
updated: 1635870404070
created: 1635870362508
---

Dendron 0.66 has sprouted  🌱

An early version of task notes is now available to test out! Take a look and feel free to provide feedback on [RFC 13 - Todo Notes in the GitHub Discussion](https://github.com/dendronhq/dendron/discussions/1358).

This release also includes some breaking changes due to some renaming of commands, which can be referrenced in the changelog.

### Highlights
- feat(notes): task notes (create modifier & editor highlighting) ([[docs|dendron.topic.tasks]]) (#1583) @kaan
- feat(workspace): users can convert a local vault to a remote vault, or a remote vault to a local vault with new convert vault command ([[docs|dendron.topic.vaults#vault-convert]]) (#1542) @kaan

### Everything Else
- enhance(schema): allow untyped templates in schemas ([[docs|dendron.topic.schema#shortened-template-syntax]]) (#1575) @nickolay
- enhance: add seeds directory to gitignore on workspace creation (#1629) @hikchoi
- enhance: preview command enablement (#1619) @hikchoi
- enhance(workspace): add custom icons to dendron tree view (#1635)  @kevin
- enhance(workspace): Copy Header Reference code action (#1598) @joshi
- fix: markdown publish to hide block reference anchors (#1577)  @joshi
- fix: file watcher updates backlinks (#1618) @kaan
- fix: hover & goto note should respect enableUser/HashTags (#1620) @kaan
- fix(pods): resolve same level dir wikilinks in markdown import (#1615) @joshi
- fix(schemas): replace auto generated ids with readable descriptions (#1632) @nickolay

### Community

- [[Kimsia|dendron://users/people.kimsia]]
  - #dendron.taxonomist
  - [Replace with canonical url for schema example at by simkimsia · Pull Request #255 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/255)
- [[people.hoppertech]]
  - #dendron.bugcatcher
  - [Fuzzy search in Lookup (note) has stopped working](https://github.com/dendronhq/dendron/issues/1634)
- [[people.ragamroll]]
  - #dendron.bugcatcher
  - [Links in published nextjs site exported for github display a spinner](https://github.com/dendronhq/dendron/issues/1588)
- [[people.tika]]
  - [Logo and flavicon do not work on published sites](https://github.com/dendronhq/dendron/issues/1616)
  - [GH_EDIT_LINK setting does not work](https://github.com/dendronhq/dendron/issues/1612)
- [[people.voothi]]
  - #dendron.bugcatcher
  - [Import Pod Markdown is modified my own notes body content](https://github.com/dendronhq/dendron/issues/1608)
  - [Backlinks lists not contain wikilinks after import pod markdown](https://github.com/dendronhq/dendron/issues/1607)
- [[people.mhijazi1]]
  - #dendron.bugcatcher
  - [Move Header does not create a note if it does not already exists](https://github.com/dendronhq/dendron/issues/1606)
- [[people.guilhermesfc]]
  - [Note references sometimes do not work in Preview V2](https://github.com/dendronhq/dendron/issues/1601)
- [[people.aleksey-rowan]]
  - [Don't read/write dendron.code-workspace when no changes are made to it](https://github.com/dendronhq/dendron/issues/1595)

#### General Updates

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

### Changelog
![[dendron.release.changelog#0660,1:#0650]]
