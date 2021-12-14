---
id: fRAyMtRmwkCwdRBj24eb0
title: '0.73'
desc: ''
updated: 1639502619092
created: 1639501218244
---

Dendron 0.73 has sprouted  🌱

Want to hunt down broken, internal links in your notes? Try out the new `findBrokenLinks` action for **Dendron Doctor** and you can diagnose your problems!

- `Ctrl+Shift+P` / `Cmd+Shift+P` -> `Dendron: Doctor` -> `findBrokenLinks`

- note traits
- goto note for non-note
- rename

### Highlights

- feat(commands): find broken links ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#findbrokenlinks]])
- feat(notes): Note Trait System Prototype (Phase 1) ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.quickstart]])
- feat(navigation): implement goto definition for non-note files
- feat(navigation): `Goto Note` can open links to non-note files
- enhance(navigation): allow `Goto Note` to work inside code blocks
- feat(refactor): add rename provider

### Everything Else

- feat(pods): early version of Orbit import pod ([[docs|dendron.topic.pod.builtin.orbit]])
- enhance(markdown): add `depth` metadata to header anchors
- enahnce(workspace): simplify `InitializeWorkspace` command
- enhance(publish): better layout for Table of Contents / TOC
- enhance(pods): small tweaks to pod v2 UI
- enhance(publish): Fallback to default SEO image if no image is set for published pages.
- fix(workspace): tutorial initializer with existing workspace in default paths
- fix(refactor): revert match text default value to active note name
- fix(extension): note traits not working after webpack
- fix(schema): use patterns when ids are auto generated and there is no manually set title for a schema
- fix(views): double open link from preview

### Community

#### General Updates

- mention ness lab
- vscode talk

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

![[10 - The values of Emacs, the Neovim revolution, and the VSCode gorilla|dendron://dendron.dendron-site/community.reading-series.journal.2021.12.07]]

#### Office Hours

We will be hosting Office Hours next week! Event details [here](https://lu.ma/s6r2cq39)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- [Tika](https://github.com/SR--) `@Tika#9526`
  - #dendron.bugcatcher
  - [Preview does not display images](https://github.com/dendronhq/dendron/issues/1856)
- [r-good](https://github.com/r-good)`@rgood#4010`
  - #dendron.bugcatcher
  - [Refactor Hierarchy causing error with mixed case parent](https://github.com/dendronhq/dendron/issues/1870)
- [Sagar Behere](https://github.com/sagarbehere)
  - [UI issues in published site](https://github.com/dendronhq/dendron/issues/1871)
  - #dendron.bugcatcher

### Changelog
![[changelog#0730:#0720]]
