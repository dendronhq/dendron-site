---
id: 4q0nOxVnDvAMD18zyNebk
title: '0.66'
desc: ''
updated: 1635881718467
created: 1635870362508
---

Dendron 0.66 has sprouted  🌱

This release brings native support to managing tasks in Dendron. Task management is one of the most asked for features in Dendron. Please try it out and provide any feedback in the [Task Notes GitHub Discussion](https://github.com/dendronhq/dendron/discussions/1358).

* Task notes are considered a [[seed feature|dendron://dendron.dendron-site/tags.stage.seed]] which means its still experimental and the interface is subject to change.
* We're working on slowly introducing the [[Dendron Maturity Levels|dendron://dendron.dendron-site/dendron.ref.stages]] in existing features and when describing release features.

This release also includes some breaking changes due to some renaming of commands, which can be referrenced in the changelog.

### Highlights
- feat(notes): task notes (create modifier & editor highlighting) ([[docs|dendron.topic.tasks]])
- feat(workspace): users can convert a local vault to a remote vault, or a remote vault to a local vault with new convert vault command ([[docs|dendron.topic.vaults#convert-vault]])

### Everything Else
- enhance(schema): allow untyped templates in schemas ([[docs|dendron.topic.schema#shortened-template-syntax]])
- enhance(workspace): add seeds directory to gitignore on workspace creation
- enhance(workspace): preview command enablement
- enhance(workspace): add custom icons to Dendron tree view
- enhance(workspace): Copy Header Reference code action
- fix(publishing): Markdown publish to hide block reference anchors
- fix(workspace): file watcher updates backlinks
- fix(workspace): hover & goto note should respect enableUser/HashTags
- fix(pods): resolve same level dir wikilinks in Markdown import
- fix(schemas): replace auto generated ids with readable descriptions

### Community

#### General Updates

* If you haven't yet, subscribe to the [Dendron Newsletter](https://link.dendron.so/newsletter)! Emails are soon to begin as regular, weekly roundups.
* [Dendron Blog: Highlights from VS Code 1.61](https://blog.dendron.so/notes/83fIARBsKRnUlBL433RND/)

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]]. 

![[dendron://dendron.dendron-site/community.events.reading-series.2021.11.02]]

### New Team Member: Derek Ardolf - Dendron Evangelist

I'm Derek, and I go by `@ScriptAutomate` in most places.
- I'm from Minnesota, USA
- I just started at **Dendron** as a **Dendron Evangelist**! I previously worked at VMware, working on [Salt Project](https://github.com/saltstack/salt), and am also an ex-Amazon/AWS engineer. I'll be doing blog posts, reviewing and contributing to documentation, and more.
* Fun facts about me: I love to read/write fiction, and create digital art. I've started a small publishing imprint, experimenting with the publishing of my own content where I eventually want to help others publish, too. When learning something new, I usually come up with a humorous or absurd project to help encourage the learning process.
* How I found Dendron: @kevin chatted with me once, at a [WriteTheDocs](https://www.writethedocs.org/) meetup in Seattle, when he was tinkering with an early version of it. I had just finished complaining about knowledge management in general, so after he showed me it I said I'd want to hear when it came about for all of us to play with. Now, here I am!
* Where I am on the interwebs
  * Twitter: https://twitter.com/scriptautomate
  * Website: https://icanteven.io
  * GitHub: https://github.com/scriptautomate
  * Instagram (for art/fiction): https://www.instagram.com/cspenzichwrite/

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- [Kimsia Sim](https://github.com/simkimsia) `@kimsia#3035`
  - #role.taxonomist
  - [Replace with canonical url for schema example at by simkimsia · Pull Request #255 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/255)
- [Hoppertech](https://github.com/HopperTech)
  - #role.bugcatcher
  - [Fuzzy search in Lookup (note) has stopped working](https://github.com/dendronhq/dendron/issues/1634)
- [Ragamroll](https://github.com/ragamroll)
  - #role.bugcatcher
  - [Links in published Next.js site exported for GitHub display a spinner](https://github.com/dendronhq/dendron/issues/1588)
- [Tika](https://github.com/SR--) `Tika#9526`
  - [Logo and flavicon do not work on published sites](https://github.com/dendronhq/dendron/issues/1616)
  - [GH_EDIT_LINK setting does not work](https://github.com/dendronhq/dendron/issues/1612)
- [Denis Novikov](https://github.com/voothi) `@voothi#3159`
  - #role.bugcatcher
  - [Import Pod Markdown is modified my own notes body content](https://github.com/dendronhq/dendron/issues/1608)
  - [Backlinks lists not contain wikilinks after import pod Markdown](https://github.com/dendronhq/dendron/issues/1607)
- [Mhijazi1](https://github.com/mhijazi1)
  - #role.bugcatcher
  - [Move Header does not create a note if it does not already exists](https://github.com/dendronhq/dendron/issues/1606)
- [Guilherme Costa](https://github.com/guilhermesfc) `@Guilherme Costa#9124`
  - [Note references sometimes do not work in Preview V2](https://github.com/dendronhq/dendron/issues/1601)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Don't read/write dendron.code-workspace when no changes are made to it](https://github.com/dendronhq/dendron/issues/1595)

### Changelog
![[changelog#0660:#0650]]
