---
id: eojyowzxe8ufiqoi9jf5830
title: 0.109
desc: ''
updated: 1661275239810
created: 1661178597754
---

Dendron 0.109 has sprouted  🌱
August 23, 2022

**Dendron now supports CodeSpaces 🌌**: [Codespaces](https://github.com/features/codespaces) allows you to use VSCode in the browser and on any Github repo by pressing `.`. With this release, you can now use Dendron whereever you have a browser!

<div style="position: relative; padding-bottom: 64.5933014354067%; height: 0;"><iframe src="https://www.loom.com/embed/c8e00408f4314174b3014879f243c9f4" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

- More information: [[Web|dendron://dendron.dendron-site/dendron.topic.vscode.web]]

**Merge Note Command**: In some cases, one is better than two. With the new merge notes command, you can now combine redundant notes. This command also makes sure that all links are refactored to point to the merged note!

- More information: [[Dendron: Merge Note|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.merge-note]]

**Configuration UI**: `dendron.yml` is turning a new leaf! You can now manage configuration using a visual UI!

- More information: [[Configure (UI)|dendron://dendron.dendron-site/dendron.ref.commands#configure-ui]]

## Highlights

- feat(workspace): tree view in web ext ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web]])
- feat(views): UI to configure `dendron.yml` ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#configure-ui]])
- feat(structure): merge note command ([[docs|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.merge-note]])

## Everything Else

- feat(workspace): Create Note Command ([[docs|dendron://dendron.dendron-site/dendron.ref.commands#lookup-note--create-note]])
- enhance(views): integrated calendar with vscode theme
- enhance(edit): option to not create an alias when copying a wiki link ([[docs|dendron://dendron.dendron-site/dendron.topic.links.commands.copy-note-link.config.alias-mode]])
- fix(structure): correctly match namespace schema nodes, and correctly apply schema to new note when note existed as stub
- fix(workspace): duplicate Dendron Delete command in contextual menu
- fix(views): show whitespace for links in headers
- fix(workspace): proper visibility on views and commands for web ext

## Community

### General Updates

**Greenhouse this Friday!**

We have a [[Greenhouse Talk|dendron://dendron.dendron-site/community.events.greenhouse]] this week! 

Two awesome speakers this week:

- [Matt Bierner](https://twitter.com/mattbierner), Maintainer of JS/TS in VS Code, speak on 'Markdown Language Server'
- [Kevin Lin](https://twitter.com/kevins8), Founder of Dendron, speak on Progressive Summarization for Developers

- [Greenhouse Talk](https://lu.ma/knu8uopf) (Fri, August 26, 09:00 AM PST / 00:00 UTC)


### TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#today-i-learned` channel.

- 💡 `bitNomad#0817` shared his learning that there are places in Denver as scary/sketchy as his hometown Det[riot] where the po-po do not consider stopping at any signal
- 💡 `grndstt#1420` shared a link to [Frictionless Data Software and Standards](https://frictionlessdata.io/) and [Livemark framework](https://livemark.frictionlessdata.io/)


### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[The world map that reboots your brain|dendron://dendron.dendron-site/community.events.reading-series.2022.08.23]]
### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Aug 26, 09:00 AM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Sep 07, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Sep 01, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Sep 20, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)
    

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Patrik Grip-Jansson](https://github.com/kap42)
  - [The body of published html pages overflows](https://github.com/dendronhq/dendron/issues/3419)

- [Brian Parma](https://github.com/bj0) `@bj0#2741`
  - #role.bugcatcher
  - [Publishing: assets are still copied to output directory even if `copyAssets=false`](https://github.com/dendronhq/dendron/issues/3425)
  - [Publishing: siteHierarchies copies all notes to output directory](https://github.com/dendronhq/dendron/issues/3426)
  - [Publishing: siteRootDir ignored](https://github.com/dendronhq/dendron/issues/3427)

- [Vladimir Sanchez](https://github.com/vladsanchez) `@vladsanchez#1890`
  - #role.taxonomist
  - [Update dendron.guides.workflows.code-with-docs.md](https://github.com/dendronhq/dendron-site/pull/601)

## Changelog
![[changelog#01090,1:#01080]]
