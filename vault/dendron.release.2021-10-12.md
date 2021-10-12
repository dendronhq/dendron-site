---
id: 7Y1f7gPmzhdLaepIfBvcj
title: Release Notes (version 0.63)
desc: ''
updated: 1634064546281
created: 1634061545899
---

<!-- Replace frontmatter title-->

Dendron 0.63 has sprouted  🌱

### Highlights
- feat(workspace): native workspace support - use Dendron in your own workspace ([[docs|dendron://dendron.dendron-site/dendron.ref.workspace.native]])
    - status: [[Seed|dendron://dendron.dendron-site/tags.stage.seed]]
- feat(workspace): contextual UI - native code actions and right click support for common operations ([[docs|dendron://dendron.dendron-site/dendron.topic.commands#contextual-ui]])

### Everything Else
- fix(preview): some links not resolving on preview 
- fix(schemas): schema templates copy over frontmatter tags  
- fix(views): tree view order 
- fix(lookup): bad journal note name  

### House Cleaning

1. [[RFC 23: Consolidate Configurations|dendron://dendron.dendron-site/dendron.rfc.23-config-consolidation]]

Dendron configuration can be overwhelming - we are working on making it less so by consolidating configuration by function via a gradual rollout. This week, we are migrating all command related options to their own [[namespace|dendron://dendron.dendron-site/dendron.topic.config.dendron.commands#summary]]. We will migrate the remaining configuration over the new few weeks. This should be transparent to you as an end user - a backup of your current configuration will be created before migrating .

### Community

#### Greenhouse Series - Typescript Development with Dendron and VSCode

![[dendron://dendron.dendron-site/dendron.community.greenhouse#^Ddu3OTwrJYvI:#*]]

![[dendron://dendron.dendron-site/dendron.community.greenhouse.2021-10-15-ts-dev-vscode]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/dendron.community.teatime#dendron-reading-series]].  Small update to the format - the entry for the reading series will now be pinned in the `#teatime` channel which is now open for everyone!

[Hey Siri, what happened?](https://www.theverge.com/22704233/siri-apple-digital-assistant-10-years-development-problems-why)

Personally, I find few things as frustrating as trying to get Siri to understand me. Voice recognition is one of those things were the difference between 95% and 99% accuracy matters. 

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron.community.roles]]

### Changelog
![[dendron.release.changelog#0630,1:#062]]


