---
id: d508e0f9-8bbe-43b4-83c1-0ff022b1d4fb
title: Release Notes (version 0.24)
desc: ''
updated: 1610992516921
created: 1610403349466
---

Dendron 0.24 has sprouted :seedling:

### Highlights
- updated note ref syntax ([[docs|dendron.topic.refs]])
  - use `![[foo]]` to create a note ref
- frontmatter variable substitution ([[docs|dendron.topic.markdown#frontmatter-variable-substitution]])
  - use variables defined in your frontmatter inside your notes!
- markdown improvements for preview and publishing ([[docs|dendron.topic.markdown#extended-syntax]])
- bugs and performance related changes

### Breaking Changes
- update date format for journal and scratch notes to use [Luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html) ([[docs|dendron.topic.config#dendrondefaultjournaldateformat]])
  - this affects you if you updated `dendron.default*DateFormat` to something other than the default 
  - we made this change because [moment.js](https://momentjs.com/docs/#/-project-status/), our original date library, is now a legacy project and won't be receiving any new updates

### Community

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 

- new role assignments
  - grndstt: @grndstt#1420 
- all contributions
  - grndstt: @grndstt#1420 
    - issue publishing with subdomain
  - [Mike](https://github.com/ms3056) @TokyoMike#2771 
    - [links in preview not rendering correctly](https://github.com/dendronhq/dendron/issues/442)
  - [Bassmann](https://github.com/Bassmann) @Bassmann#5300 
    - windows Dendron publishing QA work

### Versions Numbers
This release comes with the following versions:
- dendron plugin: 0.24.0
- dendron markdown preview: 0.10.19
- dendron cli: 0.24.0
- dendron 11ty: 1.24.0

- dendron plugin and dendron markdown preview will be auto-installed by VSCode
- See the upgrade instructions [[here for dendron-11ty and dendron cli|dendron.guides.upgrading#dendron-cli-and-dendron-11ty]]

![[dendron.release.changelog#0232:#0222]]