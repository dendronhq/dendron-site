---
id: N1Mn5p6O2tVVkdDM0Ys1w
title: '0.75'
desc: ''
updated: 1640755861234
created: 1640715852170
---

Dendron 0.75 has sprouted  🌱

This is the last release of the year!

Make any mistakes this year you wish you could take back? Moving forward, if those mistakes involve accidentally deleting a note, Dendron will now ask for confirmation when deleting as well as show a preview of all links that will be broken from the operation. This is all thanks to the latest `Dendron: Delete Node` command enhancements!

Speaking of broken links, Dendron has an entirely new command: **Convert Link**! This command lets you convert broken links to plaintext, replacing the link with the link alias, note name, or text of your choosing. You can also use it to convert existing wiki links into other [[types|dendron://dendron.dendron-site/dendron.topic.refactoring#valid-links]] of wiki links.

By default, backlinks are listed in alphabetical order. Now you can choose to sort those backlinks by last update timestamp (`updated` attribute in note frontmatter). Learn more ([[here|dendron://dendron.dendron-site/dendron.topic.workbench#backlink-view-command-palette]]).

### Highlights

- enhance(commands): `Dendron: Delete Node` command warns about links that will break, prompting users before deletion ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#delete-node]])
- feat(refactor): New `Dendron: Convert Link` command 
- enhance(views): adding optional _last update_ sort ordering for backlinks view

### Everything Else

- enhance(pods): better support for GitHub Issue and task notes ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#aliasmapping]])
- enhance(lookup): better error message when using schema lookup
- fix(markdown): lag in the editor when there's a x-vault link to a non-existent vault
- fix(markdown): correctly offset frontmatter line count in doctor preview for `findBrokenLinks`
- fix(publish): excluding the domain of a published hierarchy will cause publishing to throw an error
- fix(publish): hamburger display in wrong position on safari
- fix(lookup): autocomplete will sometimes not initialize
- fix(views): looping behavior when performing rename when note graph is open
- fix(commands): seed commands broken by internal refactoring

### Community

#### General Updates

- **New User Tuesdays**: Starting on **January 11th**, Dendron will be having regular sessions for new users to ask questions and provide feedback on Dendron. Take a look at the [Dendron Event Calendar](https://link.dendron.so/luma) for these and other events!
- **Update to Contribution Tiers**: We updated our contributin tiers this month. If you'd like to learn more, check out the tiers [[here|dendron://dendron.dendron-site/dendron.contribute.financial]].
- **VS Code Livestream Recording**: If you haven't seen it just yet, Dendron was featured in the last livestream of the year by the VS Code team!
  - [Recording: Note Taking inside of Dendron](https://link.dendron.so/6eZ3)
  - [Our answers to in stream questions](https://link.dendron.so/6pOR)
- **Getting Started Guide Refresh**: We updated the [[Getting Started|dendron.tutorial]] this month, and would love for community members to take a look. Feel free to provide feedback in the [GitHub Discussion](https://github.com/dendronhq/dendron/discussions/1756).

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.reading-series]]. 

![[13 - Tsundoku: The Art of Buying Books and Never Reading Them|community.reading-series.journal.2021.12.28]]

#### Office Hours

You can find notes from our latest office hours [[here|dendron://dendron.dendron-site/community.office-hours.2021.12.22]].

To see what _Office Hours_, _New User Tuesdays_, and other events are coming up, take a look at the [Dendron Event Calendar](https://link.dendron.so/luma). The next Office Hours is on **January 5th, 2022 at 9AM PST.**

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron://dendron.dendron-site/community.roles]]

- [Jim Tittsler](https://github.com/jimt) `@jimt#5534`
    - #dendron.taxonomist
    - [docs: Fix typos](https://github.com/dendronhq/dendron-site/pull/332)
- [Zero King](https://github.com/l2dy) `@l2dy#9201`
    - [Publish commands still generate package.json for `@dendronhq/dendron-11ty-legacy`](https://github.com/dendronhq/dendron/issues/1946)
- [Rick Berger](https://github.com/rickbsgu) `@rickbsgu#4922`
    - #dendron.bugcatcher
    - [File with subcategory that starts with 'md' does not show up in the Tree View properly](https://github.com/dendronhq/dendron/issues/1972)
- [Denis Novikov](https://github.com/voothi) `@voothi#3159`
    - [Wikilinks (backlinks) is corrupted (view color and rename change) if there's too much text visible on the screen](https://github.com/dendronhq/dendron/issues/1976)
- [Claus Conrad](https://github.com/cconrad) `@cconrad#0514`
    - #dendron.taxonomist
    - [docs: Fix typos on note lookup output formats](https://github.com/dendronhq/dendron-site/pull/327)
    - [docs: Fix typo on unique `id` value is unique to the hook](https://github.com/dendronhq/dendron-site/pull/331)
    - [docs: Fix typo for foo/bar instead of foot/bar](https://github.com/dendronhq/dendron-site/pull/330)
    - [docs: Fix typo in Tree benefits for financial contributors to Dendron](https://github.com/dendronhq/dendron-site/pull/328)
    - #dendron.bugcatcher
    - [Broken link in GitHub issue template "Bug report"](https://github.com/dendronhq/dendron/issues/1988)
    - [Preview ignores wikilink label in rare case](https://github.com/dendronhq/dendron/issues/1989)
- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
    - #dendron.bugcatcher
    - [Typo in VaultConvert.ts](https://github.com/dendronhq/dendron/issues/1991)
- [Thibault Nocchi](https://github.com/ThibaultNocchi) 
    - #dendron.bugcatcher
    - [Workspace setting "files.autoSave" is re-added each time the VSCode extension is updated](https://github.com/dendronhq/dendron/issues/1992)

### Changelog
![[dendron://dendron.dendron-site/changelog#0750,1:#0740]]
