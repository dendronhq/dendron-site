---
id: fRAyMtRmwkCwdRBj24eb0
title: '0.73'
desc: ''
updated: 1639515112033
created: 1639501218244
---

Dendron 0.73 has sprouted  🌱

Dendron notes can co-exist among other files in a project, such as code files. Now you can easily **navigate to Non-Note Files** in your workspace! `Goto Note` supports the ability to jump to **non-note files** referenced from wikilinks! This includes wikilinks inside of code blocks.

**Discover Internal Broken Links:** Want to hunt down broken, internal links in your notes? Try out the new `findBrokenLinks` action for **Dendron Doctor** and you can diagnose your problems!

- `Ctrl+Shift+P` / `Cmd+Shift+P` -> `Dendron: Doctor` -> `findBrokenLinks`

**Note Traits:** Dendron's new trait system allows you to create custom behavior and apply it to certain notes. This means you can have special actions take place at note creation, like automated updates to the name and `title`. Jump into the [[note traits quickstart|dendron://dendron.dendron-site/dendron.topic.traits.quickstart]] to take it for a test drive.

**Wikilinks is now F2 Compatible:** Dendron now makes it easy for you to rename a note by placing your cursor inside a wikilink, and pressing `F2` (the [VS Code `Rename Symbol` command](https://code.visualstudio.com/docs/editor/refactoring#_rename-symbol)).

### Highlights

- feat(commands): find broken links ([[docs|dendron.topic.doctor#findbrokenlinks]])
- feat(notes): Note Trait System Prototype (Phase 1) ([[docs|dendron://dendron.dendron-site/dendron.topic.traits.quickstart]])
- feat(navigation): implement `Go to Definition` for non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation#go-to-definition]])
- feat(navigation): `Goto Note` can open links to non-note files ([[docs|dendron://dendron.dendron-site/dendron.topic.links#file-links]])
- feat(refactor): support `Rename Symbol` with Dendron wikilinks ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring#rename-symbol]])
- enhance(navigation): allow `Goto Note` to work inside code blocks

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

Dendron was recently featured in the _Tools for Thought_ series by Ness Labs. Kevin Lin gave the rundown on Dendron features, suggestions for new users, and what the future looks like.

- [Ness Labs: Redefining knowledge management with Kevin Lin, founder of Dendron](https://link.dendron.so/6cqa)

Dendron will also be featured in the next VS Code livestream!

> In our talk, we'll go over the basics of how Dendron works and do a walkthrough of the core features that let individuals and teams manage tens of thousands of notes inside of VS Code.

- [VS Code Livestreams](https://code.visualstudio.com/livestream): Note taking inside of VS Code (with Dendron)
  - **Thursday, December 16, 8:00 AM PST**

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. 

![[11 - Cal Newport's Study Hacks Blog: In Defense of Thinking|dendron://dendron.dendron-site/community.reading-series.journal.2021.12.14]]

#### Office Hours

- We will be hosting Office Hours on **[Wed, Dec 22, 9:00 AM - 10:00 AM PST](https://link.dendron.so/6cqo)**
- Notes, and the recording, of the previous Office Hours can be found [[here|dendron://dendron.dendron-site/community.office-hours.2021.12.08]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release! You can see an overview of all roles [[here|dendron://dendron.dendron-site/community.roles]]

- [Carlos Cámara](https://github.com/ccamara) `@ccamara#5131`
  - #dendron.taxonomist
  - [Workflow for workspaces with private and shared notes](https://github.com/dendronhq/dendron-site/pull/318)
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
![[dendron://dendron.dendron-site/changelog#0730:#0720]]
