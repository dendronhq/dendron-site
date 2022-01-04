---
id: 3j8izKo111vt1y8MNhjge
title: '0.72'
desc: ''
updated: 1638901153228
created: 1638893557883
---

Dendron 0.72 has sprouted  🌱

### Highlights
- enhance(commands): "find all references" for markdown headers  ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation#find-all-references]])
- enhance(lookup): enable scoping and full regex support for refactor hierarchy command ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring#refactor-hierarchy]])

### Everything Else
- enhance(lookup): have auto complete respect value that has been scrolled down to by arrows 
- enhance(lookup): add fuzzy threshold configuration ([[docs|dendron://dendron.dendron-site/dendron.ref.config.commands#fuzzthreshold]])
- enhance(views): allow navigation to preview links that do not have vault specified 
- fix(workspace): decorator lag problems 
- fix(views): do not enable dendron preview in non-dendron workspace
- fix(views): update tree view when new note is created
- fix(lookup): corner cases for auto complete 
- fix(publish): UI shifting issues with nextjs layout 
- fix(cli): cli migration now handles JSON with comments 
- fix(schema): When applying a schema template, do not override the body but append to the end to it 

### Community

#### General Updates
- doc updates
    - add section on [[navigating notes|dendron://dendron.dendron-site/dendron.topic.navigation]]
    - add section on [[refactoring|dendron://dendron.dendron-site/dendron.topic.refactoring]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]]. 

![[dendron://dendron.dendron-site/community.events.reading-series.2021.12.07]]

#### Office Hours

We will be hosting Office Hours this Wednesday! Event details [here](https://lu.ma/s6r2cq39)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- [David Bethune](https://github.com/garranplum) `@Garran Plum#2686`
  - #dendron.horticulturalist
  - #dendron.bugcatcher
  - [chore: add cross-env for win build script](https://github.com/dendronhq/dendron/pull/1824)
  - [Ignore assetPrefix in preview window to support GitHub pages which require it](https://github.com/dendronhq/dendron/issues/1848)
- [Tuling Ma](https://github.com/tma66) `@Nidoling#2917`
  - #dendron.horticulturalist
  - [fix(schema): When applying a schema template, do not override the body but append to the end to it](https://github.com/dendronhq/dendron/pull/1812)
- [not-so-smart](https://github.com/not-so-smart)
  - #dendron.taxonomist
  - [Replace `dendron` CLI commands with `npx dendron`](https://github.com/dendronhq/dendron-site/pull/310)
- [Jules Sam Randolph](https://github.com/jsamr) `@jsamr#1838`
  - #dendron.bugcatcher
  - [Vertical bars enclosed in backticks inside table cells are not rendered according to GFM spec](https://github.com/dendronhq/dendron/issues/1839)
- [Mario Kahlhofer](https://github.com/blu3r4y") `@blu3r4y#6264`
  - #dendron.bugcatcher
  - [Error t.assertUnreachable when trying Export Pod V2 on a new vault on Windows](https://github.com/dendronhq/dendron/issues/1838)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Autocomplete clears the line after if the closing pair `]]`is missing](https://github.com/dendronhq/dendron/issues/1834)
- [Anatoliy Kostin](https://github.com/tolikkostin)
  - #dendron.bugcatcher
  - [Link is opening twice in browser](https://github.com/dendronhq/dendron/issues/1851)
- [Carlos Cámara](https://github.com/ccamara) `@ccamara#5131`
  - [Embeds kebab case](https://github.com/dendronhq/dendron-site/pull/307)

### Changelog
![[changelog#0720:#0710]]
