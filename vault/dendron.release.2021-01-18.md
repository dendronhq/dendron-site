---
id: 9293d889-e07f-4a01-b67f-e8aca7c1c7f7
title: Release Notes (version 0.25)
desc: ''
updated: 1614965553884
created: 1610992021546
---
Dendron 0.25 has sprouted 🌱

### Highlights

- native publication 
  - preview and build your notes for publication from within VSCode ([[docs|dendron.topic.commands#site-build]])
- custom header support
  - include your own headers when publishing ([[docs|dendron.topic.publishing.configuration#customheaderpath-optional]])
- bunch of bug fixes and enhancements

### Spring Cleaning

- [[dendron v1|dendron.topic.publishing]] publishing is now being deprecated
  - all users are encouraged to switch to [[Publishing V2|dendron.topic.publishing]]
  - support until end of January at which point we will be removing v1 related functionality 
  - this includes
    - [[Build Pod Command|dendron.topic.commands#build-pod]]
    - [[Publish Command|dendron.topic.commands#publish]]
    - [[buildSite CLI|dendron.topic.cli#buildsite]]
    - [[publishnotes CLI|dendron.topic.cli#publishnotes]]
- [[dendron.copyNoteUrlRoot|dendron.topic.config#dendroncopynoteurlroot]] deprecated for `siteUrl`

### Community

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 

- [Luke Carrier](https://github.com/LukeCarrier) @lukecarrier#2081
  - [CI/CD on push](https://github.com/dendronhq/dendron/pull/449)
  - Ryan Randall `#environmentalist`
    - contributing to dendron
- [Mark H. Choi](https://github.com/hikchoi/cerebrarium) @hikchoi#8934 `#taxonomist` `#bug-catcher`
  - [[Dendron QA Notes|dendron.dev.testing.notes]]
  - [issue with breadcrumbs](https://github.com/dendronhq/dendron-11ty/issues/9)
- [Simon Claudius](https://github.com/Simon-Claudius) @Simon-Claudius#7577 `#bug-catcher`
  - [graph view broken](https://github.com/dendronhq/dendron/issues/452)
- [Micharris42](https://github.com/micharris42) 
  - [issue with backslash in preview](https://github.com/dendronhq/dendron/issues/450)

You can see an overview of all roles [[here|dendron.community.roles]]

### Version Numbers

This release comes with the following versions:

- dendron plugin: 0.25

- dendron markdown preview: 0.10.19

- dendron cli: 0.25

- dendron 11ty: 1.25

- dendron plugin and dendron markdown preview will be auto-installed by VSCode

- See the upgrade instructions [[here for dendron-11ty and dendron cli|dendron.guides.upgrading#dendron-cli-and-dendron-11ty]]

![[dendron.release.changelog#0242:#0232]]

