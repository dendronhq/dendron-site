---
id: Badrtj2lOp7AgANdgYfBv
title: '0.58'
desc: ''
updated: 1631034061733
created: 1631032666683
---


Dendron 0.58 has sprouted  🌱

Documentation as well as additional notes for each of the changes can be found in the changelog 

### Highlights
- feat(workspace) lookup now matches words that are out of order and with much improved fuzzyness
- feat(workspace) much faster preview rendering thanks to preview caching 🚀
- feat(workspace) Dendron bundle size is now 50% smaller which means faster updates and startup 🚀
- feat(publishing) Next.js publishing integrated with Dendron CLI #stage.seed

### Enhancements
- enhance(workspace) add multi-select for Dendron: Move Note command
- enhance(workspace) add expandAll functionality to backlink view
- enhance(workspace) frontmatter tag highlighting
- enhance(workspace) missing tag notes are now highlighted as missing in the same way wikilinks show
- enhance(workspace) progress bar when refactoring a hierarchy
- enhance(publishing) nextjs-template sidebar style improvements in published docs
- enhance(publishing) frontmatter tags are displayed similarly to regular tags when published
- enhance(publishing) support for `collections` in Next.js 
- enhance(publishing) support for `customHeaderPath` in Next.js

### Fixes
- fix(publishing) block anchor in list with single top level element
- fix(publishing) allow a note reference of a list item without its children
- fix(publishing) block anchors attached to code blocks in publishing
- fix(workspace) reload index is now silent by default, unless run explicitly
- fix(workspace) bad note hover messages
- fix(workspace) tag decorators persist after text is removed
- fix(workspace) don't show multi-select modifier on rename
- fix(markdown) links at the top and bottom of a note reference were not clickable


### Docs


Our documentation changes a lot week by week. Below is a highlight of some updates from the past week.

- Introduce [[Dendron Maturity Levels|dendron.ref.stages]] which we'll slowly apply to existing and new features

### Community

#### Office Hours

<!-- TODO: update the link -->
You can find notes from our latest office hours [[here|community.events.office-hours.2021.09.05]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- [Britt](https://github.com/bs) @britt#3020
    - [Update dendron.topic.config.dendron.md by bs · Pull Request #184 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/184)
- [Dave Richardson](https://github.com/djradon) @gunaar#9077 
    #role.bugcatcher
    - issue with add and commit
- [Funnym0nk3y](https://github.com/funnym0nk3y)
    - [[Bug/Feature] HTML-images · Issue #1273 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1273)

### Changelog
![[changelog#058,1:#057]]


