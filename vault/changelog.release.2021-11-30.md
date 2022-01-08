---
id: Ihy02jENwD3m6LBOzakeS
title: '0.71'
desc: ''
updated: 1638292696753
created: 1638290092689
---

Dendron 0.71 has sprouted  🌱

Who wouldn't love some autocomplete when using VS Code? Now you can! **Tab autocompletion** for lookup can help you get to where you need to be, faster.

<div style="position: relative; padding-bottom: 50.847457627118644%; height: 0;"><iframe src="https://www.loom.com/embed/e2e6cd06c05d45fb9ed60542b96a069e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

**Upgrading Next.js:** Dendron publishing has upgraded to the latest major version of Next.js, so make sure you aren't using a cached version. To go with the latest and greatest:

```bash
# Delete old Next.js dir
rm -rf .next
# Reinitialize with latest version
dendron publish init
```

**Dendron Preview:** A common pain point for all new users is opening the Markdown preview. The default VS Code Markdown Preview displays a menu item that cannot be disabled, even if an extension had its own Markdown preview.

We submitted an upstream contribution to VS Code, which is currently active in the Insiders Build. It will be included in the 1.63 release next month. This will mean that Dendron Workspaces can, by default, display a menu item for `Dendron: Show Preview` as the Markdown preview! Note that `Markdown: Open Preview...` options will continue to exist within the command palette as an optional preview method.

The nice thing is that ALL VS Code extension authors can now use this feature to provide a better experience for their users!

### Highlights
- feat(workspace): hide default Markdown preview button
- enhance(workspace): add Dendron preview button
- enahnce(publish): upgrade to Next.js 12
- enhance(lookup): add auto complete to note lookup

### Everything Else
- enhance(publish): support adding sitemaps ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.cli#options]])
- enhance(workspace): show stubs at the end of a dot-ended lookup
- enhance(cli): cli uses separate port file
- fix(note): correctly handle note titles containing international characters
- fix(views): allow assets to open from preview view
- fix(publish): issue with cypress dependency

### Community

#### General Updates

As part of the [Dendron Site Reorganization](https://github.com/dendronhq/dendron/discussions/1665), our developer documentation has been migrated over to [docs.dendron.so](https://docs.dendron.so/). With this, Dendronites should notice some slimming of the docs on [wiki.dendron.so](https://wiki.dendron.so/).

New GitHub discussions to get involved in:
- [Multi-vault: Potential bug or gotcha with `Cmd+Shift+I`?](https://github.com/dendronhq/dendron/discussions/1798)
- [Multi parent graph: Follow-up to RFC 7](https://github.com/dendronhq/dendron/discussions/1802)
- [Getting Started Guide: Review, community feedback, and refresh](https://github.com/dendronhq/dendron/discussions/1756)

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.events.reading-series]].

![[community.events.reading-series.2021.11.29]]

#### Office hours

Notes for the previous Office Hours can be found [[here|community.events.office-hours.2021.11.24]], with [the recording on YouTube](https://www.youtube.com/watch?v=LuoD8ibOazE).

The next Office Hours will be:

- [Wed, Dec 08, 09:00 AM PST](https://lu.ma/s6r2cq39)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.
You can see an overview of all roles [[here|community.discord.roles]].

- [Luke Carrier](https://github.com/LukeCarrier) `@lukecarrier#2081`
    - #role.bugcatcher
    - [Migrations read dendron.code-workspace as JSON, not JSONC](https://github.com/dendronhq/dendron/issues/1790)
- [maximilianigl](https://github.com/maximilianigl)
    - #role.bugcatcher
    - [Schema nodes cannot be reused in two parents in schema hierarchy](https://github.com/dendronhq/dendron/issues/1799)
- [Kimsia Sim](https://github.com/simkimsia) `@kimsia#3035`
    - [docs: 4 reference type using numbered list](https://github.com/dendronhq/dendron-site/pull/294/files)
- [Byron Wall](https://github.com/byronwall)
    - #role.taxonomist
    - [docs: Correct npm package name](https://github.com/dendronhq/dendron-site/pull/295)
- [Carlos Cámara](https://github.com/ccamara)
    - #role.taxonomist
    - [docs: Adds a note to schema](https://github.com/dendronhq/dendron-site/pull/306)
    - [docs: typo](https://github.com/dendronhq/dendron-site/pull/305)
    - [docs: removes lost sentence](https://github.com/dendronhq/dendron-site/pull/304)

### Changelog
![[changelog#0710,1:#0700]]
