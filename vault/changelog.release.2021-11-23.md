---
id: Ku1qjbDYlsxk4rfMoFEza
title: '0.70'
desc: ''
updated: 1638901033257
created: 1637687416614
---

Dendron 0.70 has sprouted  🌱

Dendronites can now use `Dendron: Initialize Workspace` to create [[native workspaces|dendron.topic.workspace.native]]. This means that you can now use Dendron inside an existing project by turning one of its folders into your Dendron workspace. For developers, this takes [Docs-as-Code](https://www.writethedocs.org/guide/docs-as-code/) to a whole new level!

This release also includes a variety of fixes and enhancements to publishing, among other improvements.

### Highlights
- feat(workspace): Initialize Workspace command can create native workspaces ([[docs|dendron.topic.workspace.native]])
- enhance(publish): Better formatting of tables on published site 
- fix(publish): syntax highlighting for code blocks
- fix(publish): make mermaid work consistently on published sites
- fix(publish): enable katex on published site 

### Everything Else
- enhance(markdown): expose `desc` frontmatter property for variable substitution ([[docs|dendron.topic.markdown#frontmatter-variable-substitution]]) ([diff](https://github.com/dendronhq/dendron-site/pull/284/files))
- enhance(publish): better position sidebar, main content and footer
- enhance(commands): copy a tag note link results in hashtags
- enhance(lookup) Add description field to lookup buttons
- fix(cli): workspace info prints message to CLI
- fix(lookup): have schema exact match suggestion in lookup show up at the top of the list
- fix(lookup): disappearing vaults in vault selection quickpick
- fix(publish): remove duplicate CSS
- fix(workspace): remove trailing whitespace in note
- fix(cli): [ajv](https://github.com/ajv-validator/ajv) (a JSON schema validator) no longer prints warning messages to console
- fix(pods): invalid configuration error

### Community

#### General Updates

As part of the [Dendron Site Reorganization](https://github.com/dendronhq/dendron/discussions/1665), our developer documentation has been migrated over to [docs.dendron.so](https://docs.dendron.so/). With this, Dendronites should notice some slimming of the docs on [wiki.dendron.so](https://wiki.dendron.so/).

New GitHub discussions to get involved in:
- [Getting Started Guide: Review, community feedback, and refresh](https://github.com/dendronhq/dendron/discussions/1756)
- [Cross-linking across workspaces](https://github.com/dendronhq/dendron/discussions/1761)

Blog posts:
- [Highlights from VS Code 1.62](https://blog.dendron.so/notes/V2Cjla9vzM69Z280j5bXB/)

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]].

![[community.events.reading-series.2021.11.23]]

#### Office hours

We are updating our office hour schedules! We will be hosting Office Hours every other Wednesday, with these events being created on our [Luma Calendar](https://lu.ma/community/com-lTfMsAZEWSwLJJL/calendar). The next Office Hours will be:

- [Wed, Nov 24, 09:00 AM PST](https://lu.ma/1qawev0b)

#### A new team member has sprouted: Tuling

I'm Tuling and I'm another software engineer working at Dendron.

Kevin and I first met back in 2012 when we were both interns at Amazon. I'll never forget our first conversation as it seemed almost impossible to believe. Like Kevin, I also grew up in Germany (born there) before moving to Toronto and then ending up in the states (NJ/WA/CA); I like to say that he's been following my literal footsteps.

When Kevin shared his journey about founding Dendron, I was in awe, but not necessarily surprised given his work ethic. Thanks to him and Dendron, it's given me the motivation to also write/journal more often instead of trusting my memory (not getting any younger...).

During my life hours, I like to dabble in all kinds of hobbies (volleyball, ice skating, rhythm games, bowling, board games). Currently I'm focusing on guitar, learning languages (japanese) and other cultures, and pottery, and I'm excited for what my future self will pick up.

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.
You can see an overview of all roles [[here|community.discord.roles]].

- [Zero King](https://github.com/l2dy) `@l2dy#9201`
  - #dendron.horticulturalist
  - [fix: remove duplicate CSS](https://github.com/dendronhq/dendron/pull/1707)
  - [fix(workspace): remove trailing whitespace in note](https://github.com/dendronhq/dendron/pull/1736)
  - [chore(publish): remove unused API routes](https://github.com/dendronhq/dendron/pull/1765)
- [benhsm] `@Jack of some quantity of trades#3247`
  - #dendron.taxonomist
  - [docs: Make special note lookup keybinds more obvious](https://github.com/dendronhq/dendron-site/pull/286)
- [icedwater](https://github.com/icedwater) `@icedwater#8514`
  - #dendron.bugcatcher
  - `dendron workspace info` has invalid output
- [Bassmann](https://github.com/Bassmann) `@Bassmann#5300`
  - [Calendar view doesn't honor the journal config](https://github.com/dendronhq/dendron/issues/1733)
  - [Tree view doesn't get updated after rename Note](https://github.com/dendronhq/dendron/issues/1734)
- [Im](https://github.com/immartian)
  - #dendron.bugcatcher
  - [Macro name in [xxxx] can't be seen in editor under VS Code "Highly Contrast" color scheme](https://github.com/dendronhq/dendron/issues/1738)
- [David Paquet Pitts](https://github.com/davidpp) `@davidpp#5603`
  - #dendron.bugcatcher
  [Wiki - Search bar is on top of navigation and hidden a portion of it (Safari 15+)](https://github.com/dendronhq/dendron/issues/1740)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Strip whitespace when using Paste Link command](https://github.com/dendronhq/dendron/issues/1741)
- [Funnym0nk3y](https://github.com/funnym0nk3y)
  - [Math rendering broken](https://github.com/dendronhq/dendron/issues/1747)
- [John Wells](https://github.com/d1rewolf) `@d1rewolf#0381`
  - #dendron.taxonomist
  - [Cmd + Enter doesn't navigate to links from editor on macOS](https://github.com/dendronhq/dendron/issues/1750)
- [Kimsia Sim](https://github.com/simkimsia) `@kimsia#3035`
  - [Move Header Works Differently When the Header Is the First Section](https://github.com/dendronhq/dendron/issues/1762)

### Changelog
![[changelog#0700,1:#0690]]
