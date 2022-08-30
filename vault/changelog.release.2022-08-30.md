---
id: 2fbbket7taz53ocm9o1s7ht
title: 0.110
desc: ''
updated: 1661873125350
created: 1661784579096
---

Dendron 0.110 has sprouted  🌱
August 30, 2022


## Highlights

**SQLite for Metadata Support**: Dendron now supports using SQLite as an backend for metadata.

As a refresher, Dendron currently creates a [[cache|dendron://dendron.dendron-site/dendron._ref.caching]] of your workspace metadata as a local json file. With this change, you can opt-in to use sqlite as the backend cache.

- More information: [[Sqlite|dendron://dendron.dendron-site/dendron.topic.workspace.sqlite#details]]

## Highlights

- feat(workspace): introduce sqlite as a plugabble metadata store (#3401) @kevin ([[docs|dendron://dendron.dendron-site/dendron.topic.workspace.sqlite]])

## Everything Else

- feat(workspace): copy note url command for codespaces (#3411) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.vscode.web#copy-note-url]])
- enhance(cli): New write notes CLI command (#3392) @tuling ([[docs|dendron://dendron.dendron-site/dendron.topic.notes.cli.write]])
- enhance(lookup): fill in current hierarchy for Move Header (#3430) [Sean Li](https://github.com/saifahn)
- fix(lookup): allow lookup accept for existing invalid hierarchy (#3421) @hikchoi
- fix(workspace): case insensitive tree view sorting (#3420) @jonathan
- fix(workspace): updated visibility of copy note url command in codespaces (#3447) @joshi
- fix(views): tree view init problem on web (#3459) @jonathan


## Community

### General Updates

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Video from and notes from our last talk now available - [[August Greenhouse: Markdown Language Server and Progressive Summarization for Developers|dendron://dendron.dendron-site/community.events.greenhouse.2022-08-26-markdown-language-server-and-progressive-summarization]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!


### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `1ccamara#5131` shared his learning that it is possible to move a note and all their children notes using the Move Note command. 
- 💡 `kevins8#0590` shared his learning that git pathspec can be used to filter out files during git add/diff/etc
- ⭐ `michaelvolk#0415` shared a link to his thesis in Dendron: https://mjvolk3.github.io/Mjvolk3/notes/14eo221bhkk4w9lk1h9rjpd/


### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

<a href=“{dendron://dendron.dendron-site/community.events.reading-series.2022.08.30}”> {[x]it! – A plain-text file format for todos and check lists} </a>


### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Sep 30, 09:00 AM PST / 00:00 UTC](https://link.dendron.so/luma)
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

- [Wilhelm Payne](https://github.com/wbpayne22902)
  - #role.bugcatcher
  - [ENOENT error when opening repository from GitHub Repositories Extension with Dendron installed](https://github.com/dendronhq/dendron/issues/3449)
  
- [Yttrium Zhao](https://github.com/Alecton4)
  - #role.bugcatcher
  - [Unable to Convert Self-contained Local Vault to Remote Vault](https://github.com/dendronhq/dendron/issues/3463)

- [Sean Li](https://github.com/saifahn)
  - #role.horticulturalist
  - [enhance(plugin-core): fill in current hierarchy for Move Header](https://github.com/dendronhq/dendron/pull/3430)

- [Carlos Cámara](https://github.com/ccamara) `@ccamara#5131`
  - #role.bugcatcher
  - [`Dendron: Migrate to self contained vault` does not migrate the vault correctly](https://github.com/dendronhq/dendron/issues/3466)
  - [Add instructions for moving multiple notes](https://github.com/dendronhq/dendron-site/pull/629)
  - [Remove broken link](https://github.com/dendronhq/dendron-site/pull/630)

## Changelog
![[changelog#01100,1:#01090]]
