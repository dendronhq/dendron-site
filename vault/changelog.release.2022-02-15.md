---
id: egxM8X43CqrQLuhYQ6Wu8
title: '0.82'
desc: ''
updated: 1644904313283
created: 1644902103166
---

Dendron 0.82 has sprouted  🌱

Schema template variables can now include `CURRENT_WEEK`.

Example:

```md
Today is <%=CURRENT_YEAR%>.<%= CURRENT_MONTH%>.<%= CURRENT_DAY%>
Week <%=CURRENT_WEEK%>

Weekly goals: [[weekly.journal.<%=CURRENT_YEAR%>.week.<%=CURRENT_WEEK%>]]
```

When the template is applied by schema, it renders to:

```md
Today is 2022.02.15
Week 07

Weekly goals: [[weekly.journal.2022.week.07]]
```

### Highlights
- enhance(schemas): Extend date subsitution to include week numbers ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.schema-template#template-variables]])

### Everything Else
- fix(workspace): avoid workspace watcher crashing if folder is deleted
- fix(workspace): correct title generation of notes within sub-hierarchy starting with `md`
- fix(pod): acknowledge cli args for publish pod

### Community

#### General Updates

- What strategies do you use to maintain and take care of existing content in your digital gardens? We've added a new workflow all about how we prune and repot notes throughout our documentation: [[Pruning and Repotting|dendron://dendron.dendron-site/dendron.guides.workflows.pruning-and-repotting]]
- Thanks to all the people that have taken the 2022 dendron user survey. If you would like to help us improve dendron, please checkout the survey (and earn a shiny discord badge in the process)!
  - [2022 Dendron User Survey](https://link.dendron.so/74EI)
  - [[Surveyor Discord Role Badge|dendron://dendron.dendron-site/community.discord.roles#surveyor]]

#### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `seadude` shared a link to a timestamp showing off [[File Links|dendron.topic.links#file-links]] from [Note taking inside of VS Code](https://youtu.be/dW6m4_O0qvQ?t=1077): _"GEM at this timestamp!"_
    - `seadude` also shared: _"You can develop projects (code, etc) AND have your Dendron vault as a companion just by `File/Add Folder to Workspace`"_ ([[Native Workspaces|dendron.topic.workspace.native#summary]] can be added to existing projects!)
    - `seadude` also shared a workflow tip on adding [[Tags|dendron.topic.tags]] to your code comments as a way to aid in [[Searching you notes and code files|dendron.topic.search]]. For more information, [a video example can be found in his Discord message](https://discordapp.com/channels/717965437182410783/904891933284007966/942662051841572934).
- 💡 `scriptautomate` shared a link to [GitHub announcing support for Mermaid Diagrams](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/): _"TIL that GitHub will now render [[Mermaid diagrams, like Dendron|dendron.topic.markdown#diagrams]], right in your Markdown files!"_

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.02.15]]

#### Office Hours and New User Tuesdays

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - [YouTube Playlist](https://link.dendron.so/6yPa)
    - Next: [Wed, Feb 16, 9:00 AM - 9:30 AM PST](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Feb 22, 8:30 AM - 9:00 AM PST](https://link.dendron.so/luma)

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

### Changelog
![[changelog#0820,1:#0810]]
