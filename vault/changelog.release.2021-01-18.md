---
id: 9293d889-e07f-4a01-b67f-e8aca7c1c7f7
title: '0.25'
desc: ''
updated: 1619549858849
created: 1610992021546
---
Dendron 0.25 has sprouted 🌱

### Highlights

- native publication 
  - preview and build your notes for publication from within VS Code ([[docs|dendron.ref.commands#site-build]])
- custom header support
  - include your own headers when publishing ([[docs|dendron.topic.publish-legacy.configuration#customheaderpath-optional]])
- bunch of bug fixes and enhancements

### Spring Cleaning

- [[Dendron v1|dendron.topic.publish]] publishing is now being deprecated
  - all users are encouraged to switch to [[Publishing V2|dendron.topic.publish]]
  - support until end of January at which point we will be removing v1 related functionality 
  - this includes
    - [[Build Pod Command|dendron.ref.commands#build-pod]]
    - [[Publish Command|dendron.ref.commands#publish]]
    - [[buildSite CLI|dendron.ref.cli#buildsite]]
    - [[publishnotes CLI|dendron.ref.cli#publishnotes]]
- [[dendron.copyNoteUrlRoot|dendron.ref.config.vscode-config#dendroncopynoteurlroot]] deprecated for `siteUrl`

### Community

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 

- [Luke Carrier](https://github.com/LukeCarrier) @lukecarrier#2081
  - [CI/CD on push](https://github.com/dendronhq/dendron/pull/449)
  - Ryan Randall `#environmentalist`
    - contributing to Dendron
- [Mark H. Choi](https://github.com/hikchoi/cerebrarium) @hikchoi#8934 `#taxonomist` `#bug-catcher`
  - [[Dendron QA Notes|dev.process.qa.notes]]
  - [issue with breadcrumbs](https://github.com/dendronhq/dendron-11ty/issues/9)
- [Simon Claudius](https://github.com/Simon-Claudius) @Simon-Claudius#7577 `#bug-catcher`
  - [graph view broken](https://github.com/dendronhq/dendron/issues/452)
- [Micharris42](https://github.com/micharris42) 
  - [issue with backslash in preview](https://github.com/dendronhq/dendron/issues/450)

You can see an overview of all roles [[here|community.roles]]

### Version Numbers

This release comes with the following versions:

- Dendron plugin: 0.25

- Dendron Markdown Preview: 0.10.19

- Dendron CLI: 0.25

- Dendron 11ty: 1.25

- Dendron plugin and Dendron Markdown Preview will be auto-installed by VS Code

- See the upgrade instructions [[here for dendron-11ty and Dendron CLI|dendron.guides.upgrading#dendron-cli-and-dendron-11ty]]

![[changelog#0242:#0232]]

