---
id: MQpi87qLnzKK5iK3FlxUp
title: '0.76'
desc: ''
updated: 1644422418065
created: 1641314638791
---

Dendron 0.76 has sprouted  🌱

Do you find yourself updating date values in the content of your inserted templates? That can now be inserted automatically with [[template variables|dendron://dendron.dendron-site/dendron.topic.templates#template-variables]]:

- Example: `Today is {{ CURRENT_YEAR }}.{{ CURRENT_MONTH }}.{{ CURRENT_DAY }}`
- Template output: `Today is 2022.01.04`

We've also added a new tutorial on [[Making Your First Schema|dendron://dendron.dendron-site/dendron.topic.schema.tutorial.first-schema]]. This walks you through creating a schema for your daily journal and automatically applying a template to it.

Another major quality of life improvement we're launching today is the ability to preview regular markdown using the `Dendron: Show Preview` command. Now you can use the same Dendron preview on all your markdown files, even if they're not inside a Dendron workspace!

## Breaking Changes

Dendron previously published backlinks and child links as header/anchor sections at the end of each note. They are now changing from `<h2>` to `<strong>`. Backlinks and child links won't appear as header sections in the local TOC for a page, and will no longer have anchors to link to (ex. `#backlinks`).

## Deprecation Notices

- deprecate(publishing): 11ty publishing will be removed with the next release, and is no longer maintained. This does not affect you if you use the current Next.js publishing
  - If you wish to continue using 11ty, you will need to lock `@dendronhq/dendron-cli@0.76`
- deprecate(refactor): Dendron Doctor will no longer include `oldNoteRefToNew`, which was used in the past to convert between `((ref: foo))` to `![[foo]]`

## Highlights
- enhance(schema): support date variable substitution for templates ([[docs|dendron://dendron.dendron-site/dendron.topic.templates#template-variables]])
- enhance(views): `Dendron: Show Preview` works for regular markdown files ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#show-preview]])
- enhance(views): adds a `Dendron: Show Preview` button in the context menu when right-clicking a markdown file in the file explorer, as well as when right-clicking a tab in the editor

## Everything Else
- enhance(lookup): add auto completion to `Go Down` command ([[docs|dendron.topic.navigation#go-down]]) and `Create Task Note` command ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]])
- enhance(workspace): improve note highlighting and autocomplete performance
- fix(workspace): typo in convert vault command
- fix(workspace): frontmatter tags are not highlighted
- fix(publish): compiler issue with nextjs
- fix(lookup): full length word matches should be case insensitive
- fix(views): update tree order when a note changes order
- fix(workspace): don't show calendar view unless dendron tree view is active
- fix(workspace): rename operations modify unnecessary files
- fix(lookup): regression on `onTriggerButton` not scoping properly
- fix(server): specify `localhost` when starting server

## Community

### Documentation Update

- Site reorg progress: The [[Community|dendron://dendron.dendron-site/community]] hierarchy has been updated. Visit [the PR for more details](https://github.com/dendronhq/dendron-site/pull/342).

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `@amar#9880` shared a write-up on [How to use a custom theme with Dendron](https://amar.io/memo/docs/tools/dendron/custom-theme/): _"Here's a write-up. Though I'm still in the process of figuring things out!"_
- ⭐ `@kzilla#8818` shared a [VS Code customization](https://gist.github.com/ScriptAutomate/2c7bd7ccf8987f40f4125d8272333d55): _"Simple VS Code customization (in `settings.json`) to change heading colors and section folding shading. Makes reading markdown heck of a lot easier."_
- ⭐ `@kevins8#0590` shared a link to [Getting a Computer Science PhD in the USA](https://parentheticallyspeaking.org/articles/us-cs-phd-faq/): _"Since we have a bunch of phds and folks considering it, this provides a good lens into current phd landscape for computer science."_
- 💡 `@kevins8#0590` shared a link to [Semantics and the Web: An Awkward History](https://news.ycombinator.com/item?id=29232814): _"A history of markup on the web as told through a lego playmation talk. See some parallels between web browsers back in the day and note taking tools today in terms of interoperability. Hopefully we'll avoid the xhtml phase..."_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]]. 

![[dendron://dendron.dendron-site/community.events.reading-series.2022.01.04]]

### Office Hours

You can find notes from our latest office hours [[here|dendron://dendron.dendron-site/community.events.office-hours.2021.12.22]].

To see what _Office Hours_, _New User Tuesdays_, and other events are coming up, take a look at the [Dendron Event Calendar](https://link.dendron.so/luma). The next Office Hours is on **January 5th, 2022 at 9AM PST.**

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron://dendron.dendron-site/community.discord.roles]]

- [emmjayvee](https://github.com/emmjayvee)
    - #role.taxonomist
    - [Update dendron.faq.md: Typo and re-wording](https://github.com/dendronhq/dendron-site/pull/343)
- [Claus Conrad](https://github.com/cconrad) `@cconrad#0514`
    - [docs: Fix inconsistent capitalization](https://github.com/dendronhq/dendron-site/pull/334)
    - ["Select Vault" shows duplicate vaults, if no note is active](https://github.com/dendronhq/dendron/issues/2016)
- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
    - #role.horticulturalist
    - [fix(workspace): convertVault Typo](https://github.com/dendronhq/dendron/pull/1999)
    - [Issue with moving non-leaf notes between vaults; broken links, stub flags in non-stubs](https://github.com/dendronhq/dendron/issues/2003)
- [redsolver](https://github.com/redsolver) `@redsolver#0372`
    - #role.bugcatcher
    - [Dendron server should restrict connections to localhost](https://discord.com/channels/717965437182410783/735365126227493004/926507322895925299)
- [jquesada2016](https://github.com/jquesada2016)
    - [Improve accessibility in Preview Pane](https://github.com/dendronhq/dendron/issues/2012)
- [Bryan Jenks](https://github.com/tallguyjenks) `@tallguyjenks#3567` 
    - #role.bugcatcher
    - [CONTRIBUTING link on website home page 404'd](https://github.com/dendronhq/dendron/issues/2024)
- [Nahom Befekadu](https://github.com/NahomBefekadu) `@That_G_LexLuther#5100`
    - #role.bugcatcher
    - [Unable to preview/delete notes, and see them in tree view or graph](https://github.com/dendronhq/dendron/issues/2030)
- [Jaroslav Knotek](https://github.com/jaroslavknotek)
    - #role.bugcatcher
    - [Cannot create scratch note when no file is opened](https://github.com/dendronhq/dendron/issues/2002)
- [Matthew Giallourakis](https://github.com/foldsters) `@Foldster#7441`
    - #role.bugcatcher
    - [Markdown Preview never renders when accessing a remote dendron workspace over Remote-SSH](https://github.com/dendronhq/dendron/issues/2010)
- [Murtaza Nazir](https://github.com/themurtazanazir)
    - #role.bugcatcher
    - [`\begin` elements not working](https://github.com/dendronhq/dendron/issues/2021)

## Changelog
![[dendron://dendron.dendron-site/changelog#0760,1:#0750]]
