---
id: r6440eigzebewsv6shlhid7
title: 0.115
desc: ''
updated: 1665499412677
created: 1665411531341
---

Dendron 0.115 has sprouted  🌱
October 11, 2022

**Autocomplete everywhere**: Tab-autocomplete now works on all commands. This was previously just limited to `Lookup`


## Highlights

- enhance(lookup): tab autocomplete in all lookup controls

## Everything Else

- feat(lookup): Add Create New with Template label to note lookup ([[docs|dendron://dendron.dendron-site/dendron.topic.lookup.create]])
- enhance(publish): make search mode as default for search bar in published site ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.config.searchMode]])
- enhance(structure): Add day of week string template variables ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-variables]])
- fix(publish): render favicon when assetsPrefix is set
- fix (workspace): correctly update dendron.yml when adding / deleting vaults with dendronrc.yml
- fix(workspace): autocomplete past first level of hierarchy for mentions and tags
- fix(views): remove schema icon from tree view and published sidebar
- fix(publish): prevent "Table of content" overflowing container
- fix(structure): regression in apply template command


## Community

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Video from and notes from our last talk now available - [[September Greenhouse: Zettlekasten 101 with Bob Doto|dendron://dendron.dendron-site/community.events.greenhouse.2022-09-30-zettlekasten-101]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#today-i-learned` channel.

- 💡 `KiloJon#6444` shared a link to [Leadership Lessons From the Dancing Guy](https://kottke.org/13/05/leadership-lessons-from-the-dancing-guy)

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[Learn Exponentially|dendron://dendron.dendron-site/community.events.reading-series.2022.10.11]]


### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Oct 28, 09:00 AM PST / 16:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Nov 02, 09:00 AM PST / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Oct 13, 11:00 AM PST / 18:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Oct 18, 8:30 AM PST / 15:30 UTC](https://link.dendron.so/luma)


### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Joe Peterson](https://github.com/jeep) `@jeep#0301`
  - [Trace not being updated when renaming a note after move selection](https://github.com/dendronhq/dendron/issues/3611)
  - [Nesting note references don't work across vaults](https://github.com/dendronhq/dendron/issues/3613)
  - [Links to anchors are not updated when migrated with "move selection"](https://github.com/dendronhq/dendron/issues/3644)
  
- [Michael Ivanitskiy](https://github.com/mivanit) `@mikhail#3816`
  - #role.farmer
  - [GitHub - mivanit/dendron-ical-integration: allows gathering events from dendron tags and serializing in iCal format](https://github.com/mivanit/dendron-ical-integration)
  
- [tjr357](https://github.com/tjr357)
  - #role.bugcatcher
  - [Error Reading File - Wildcard in Transclusion Links](https://github.com/dendronhq/dendron/issues/3612)

- [Pedro Lima](https://github.com/pedrolimasi)
  - #role.bugcatcher
  - [User tag in yaml frontmatter breaks preview](https://github.com/dendronhq/dendron/issues/3614)
  
- [JM-Laurel](https://github.com/JM-Laurel)
  - #role.bugcatcher
  - [Refactoring hierarchies issue](https://github.com/dendronhq/dendron/issues/3622)

- [Rob Lourens](https://github.com/roblourens)
  - #role.bugcatcher
  - [Dendron fails to activate on web](https://github.com/dendronhq/dendron/issues/3626)

- [Emily Marigold Klassen](https://github.com/forivall)
  - #role.bugcatcher
  - [Toggling between dark and light theme visually breaks calendar](https://github.com/dendronhq/dendron/issues/3633)

- [Nickolay Kondratyev](https://github.com/nickolay-kondratyev) `@nickolay-kond#9861`
  - [Preview infinitely expands circular ![[]] reference](https://github.com/dendronhq/dendron/issues/3635)

- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Can no longer create a note from a stub using the "+" button in the tree view](https://github.com/dendronhq/dendron/issues/3643)

- [Harshita Joshi](https://github.com/Harshita-mindfire) `@Joshi#5537`
  - #role.bugcatcher
  - [Vault Remove command doesn't updates the folders in code-workspace file](https://github.com/dendronhq/dendron/issues/3648)

## Changelog
![[changelog#01150,1:#01140]]
