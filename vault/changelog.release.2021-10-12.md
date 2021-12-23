---
id: 7Y1f7gPmzhdLaepIfBvcj
title: '0.63'
desc: ''
updated: 1634068566278
created: 1634061545899
---

Dendron 0.63 has sprouted  🌱

### Highlights
- feat(workspace): native workspace support - use Dendron in your own workspace ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace.native]])
    - status: [[Seed|dendron://dendron.dendron-site/tags.stage.seed]]
- feat(workspace): contextual UI - native code actions and right click support for common operations ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#contextual-ui]])

### Everything Else
- fix(preview): some links not resolving on preview 
- fix(schemas): schema templates copy over frontmatter tags  
- fix(views): tree view order 
- fix(lookup): bad journal note name  

### House Cleaning

1. [[RFC 23: Consolidate Configurations|dendron://dendron.docs/rfc.23-config-consolidation]]

Dendron configuration can be overwhelming - we are working on making it less so by consolidating configuration by function via a gradual rollout. This week, we are migrating all command related options to their own [[namespace|dendron://dendron.dendron-site/dendron.ref.config.commands#summary]]. We will migrate the remaining configuration over the new few weeks. This should be transparent to you as an end user - a backup of your current configuration will be created before migrating .

### Community

#### Greenhouse Series - Typescript Development with Dendron and VS Code

![[dendron://dendron.dendron-site/community.greenhouse#^Ddu3OTwrJYvI:#*]]

![[dendron://dendron.dendron-site/community.greenhouse.2021-10-15-ts-dev-vscode]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|community.reading-series]]. Small update to the format - the entry for the reading series will now be pinned in the `#teatime` channel which is now open for everyone!

![[community.reading-series.journal.2021.10.12]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.roles]]

- Philippe Leveque `@ZorbaCodium#9873`
    - #dendron.bugcatcher
    - mermaid not working in preview
- [Miguel Pereira](https://github.com/doctorboyMP) `doctorboy#9882`
    - issue with Dendron snapshots
- [Laurentiu Nicola](https://github.com/lnicola)
    - #dendron.bugcatcher
    - ["Taking Notes" tutorial link doesn't work in the preview pane · Issue #1476 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1476)
    - [Preview is not updated when editing the front matter · Issue #1477 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1477)
- [Eric Marthinsen](https://github.com/emarthinsen)
    - #dendron.bugcatcher
    - [Apostrophes are not allowed in link labels · Issue #1498 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1498)
- [Jack](https://github.com/imalightbulb) `@I'm a lightbulb#6986`
    - issue with github link on dendron-site

### Changelog
![[changelog#0630,1:#062]]
