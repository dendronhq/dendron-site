---
id: egxM8X43CqrQLuhYQ6Wu8
title: '0.82'
desc: ''
updated: 1644943654030
created: 1644902103166
---

Dendron 0.82 has sprouted  🌱

Smaller changelog this week as the team is working on some bigger architectural changes to increase the general stability and performance of Dendron (our focus for this month). More updates on those in upcoming releases!

## Highlights
- enhance(schemas): Extend date subsitution to include week numbers with `CURRENT_WEEK` ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.schema-template#template-variables]])

## Everything Else
- fix(workspace): avoid workspace watcher crashing if folder is deleted
- fix(workspace): correct title generation of notes within sub-hierarchy starting with `md`
- fix(pod): acknowledge cli args for publish pod

## Community

### General Updates

What strategies do you use to maintain and take care of existing content in your digital gardens? We've added a new workflow all about how we prune and repot notes throughout our documentation: [[Pruning and Repotting|dendron://dendron.dendron-site/dendron.guides.workflows.pruning-and-repotting]]

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `seadude` shared a link to a timestamp showing off [[File Links|dendron.topic.links#file-links]] from [Note taking inside of VS Code](https://youtu.be/dW6m4_O0qvQ?t=1077): _"GEM at this timestamp!"_
    - `seadude` also shared: _"You can develop projects (code, etc) AND have your Dendron vault as a companion just by `File/Add Folder to Workspace`"_ ([[Native Workspaces|dendron.topic.workspace.native#summary]] can be added to existing projects!)
    - `seadude` also shared a workflow tip on adding [[Tags|dendron.topic.tags]] to your code comments as a way to aid in [[Searching you notes and code files|dendron.topic.search]]. For more information, [a video example can be found in his Discord message](https://discordapp.com/channels/717965437182410783/904891933284007966/942662051841572934).
- 💡 `scriptautomate` shared a link to [GitHub announcing support for Mermaid Diagrams](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/): _"TIL that GitHub will now render [[Mermaid diagrams, like Dendron|dendron.topic.markdown#diagrams]], right in your Markdown files!"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.02.15]]

### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Feb 16, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Feb 22, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Callum Mcdonald](https://github.com/chmac) `@chmac#2931`
  - #role.taxonomist
  - update links in engine readme
- [Patrick Yates](https://github.com/opcon) `@opcon#7801`
  - #role.horticulturalist
  - #role.taxonomist
  - [enhance(schemas): Extend date subsitution to week numbers](https://github.com/dendronhq/dendron/pull/2372)
  - [update template variable replacement docs to include week number](https://github.com/dendronhq/dendron-site/pull/397)
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
    - [Renaming a note inside the `user` hierarchy turns a link into a user (@) tag](https://github.com/dendronhq/dendron/issues/2386)
- [Samuel Hobl](https://github.com/namjul) `@nam#5364`
  - #role.farmer
  - [dotfiles/dots/.config/nvim/lua/namjul/dendron at master · namjul/dotfiles](https://github.com/namjul/dotfiles/tree/master/dots/.config/nvim/lua/namjul/dendron)
- [Carlos Cámara](https://github.com/ccamara) `@ccamara#5131`
  - [Adds markdown syntax to markdown codeblocks](https://github.com/dendronhq/dendron-site/pull/399)
- [Trevor Sullivan](https://github.com/pcgeek86) `@pcgeek86#5950`
    - #role.bugcatcher
    - [Calendar View and Tree View isn't updated after deleting a journal note](https://github.com/dendronhq/dendron/issues/2421)
    - [User interface isn't centered](https://github.com/dendronhq/dendron/issues/2420)

#### Dendron User Survey

A huge thanks to the following Dendronites that provided feedback in the [2022 Dendron User Survey](https://link.dendron.so/74EI). If you would like to help us improve Dendron, please checkout the survey (and earn a shiny [[Surveyor|dendron://dendron.dendron-site/community.discord.roles#surveyor]] Discord badge in the process)!

- [Tika](https://github.com/SR--) `Tika#9526`
- [Thanos Lefteris](https://github.com/alefteris) `@alefteris#6114`
- [Vladimir Sanchez](https://github.com/vladsanchez) `@vladsanchez#1890`
- Andrey Vorontsov `@Andrey Vorontsov#7892`
- [Paolo Dina](https://github.com/paolodina) `@pdina#0608`
- Robb `@robb#2843`
- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
- [Bassmann](https://github.com/Bassmann) `@Bassmann#5300`
- Petew `@Petew#5507`

### Changelog
![[changelog#0820,1:#0810]]
