---
id: cpoqm8ed1q729m7lav31hhe
title: 0.99
desc: ''
updated: 1655144139378
created: 1655144139378
---

Dendron 0.99 has sprouted  🌱


**Better Task Notes**: Get things done - task notes now have custom commands to set their status and mark them as complete.
More information: [[Set Task Status|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]]

**Obsidian Import**: Vault to vault - we now have a dedicated command to import your notes from obsidian into Dendron!
More information: [[Import Obsidian Vault|dendron://dendron.dendron-site/dendron.ref.commands#import-obsidian-vault]]

## Highlights
- feat(structure): add set task status command
- feat(structure): add complete task command
- feat(sync): obsidian import flow

## Everything Else
- enhance(publish): make the private link colors customizable
- enhance(views): configure creation of notes on click of graph node with `createStubs`
- enhance(workspace): detect duplicate note id on lifecycle events
- fix(workspace): fix duplicated panel titles
- fix(edit): email addresses and hash symbols inside words are parsed as tags
- fix(views): gracefully handle tree view sort error to avoid crashing the tree view

## Community

### General Updates

#### Public Issues
The public data view of frequently asked questions and how to fix them is live on our [FAQ Page](https://wiki.dendron.so/notes/683740e3-70ce-4a47-a1f4-1f140e80b558/) under 'Public Issues'. We will continuously update this list with issues we seen on discord and when working with community members. Check it out and please give us feedback in the [[#feedback|dendron://dendron.dendron-site/community.discord.channels#feedback]] channel or at support@dendron.so.

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!

### Starboard Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `Gander7` shared a workflow tip to include all notes related to a task on the task note, and then referencing sections of the notes in the daily journal. [link to message](https://discordapp.com/channels/717965437182410783/749641193322971238/984539174398984233).

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[Why Stick with Ruby on Rails at GitLab|dendron://dendron.dendron-site/community.events.reading-series.2022.06.14]]

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Jun 24, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jul 06, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Jun 23, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jul 12, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Kevin Fischer](https://github.com/kfischer-okarin) @kfischer_okarin#2663
  - #role.taxonomist
  - [Clarify fnameToDate docs by kfischer-okarin · Pull Request #535 · dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/pull/535) 

- [Bugfixd](https://github.com/bugfixd)
  - #role.bugcatcher
  - [Dendon's handling of the frontmatter title attribute is inconsistent and confusing :dizzy_face: · Issue #3055 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/3055)

- [Taran Lu](https://github.com/taranlu-houzz) 
  - #role.bugcatcher
  - [Getting 404 when attempt to use the `editLink` on a published note · Issue #3074 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/3074)

- [Nikhiljha](https://github.com/nikhiljha) 
  - #role.bugcatcher
  - [incorrect note created on lookup (+ possible race condition?) · Issue #3075 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/3075)

## Changelog
![[changelog#0990,1:#0980]]
