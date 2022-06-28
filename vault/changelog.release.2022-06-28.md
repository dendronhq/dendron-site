---
id: 4kaa0j0a3t02zjvgtd476nd
title: 0.101
desc: ''
updated: 1656423652542
created: 1656411101601
---

Dendron 0.101 has sprouted  🌱

June 28, 2022

**Highlight type:** Description here.

**Depth Filter for Local Graphs:** Want to see the bigger picture? The graph depth filter now lets you control how much context you see in the [[Local Graph View|dendron://dendron.dendron-site/dendron.topic.sidebar.local-graph-view]]
- More Information: [[Other Filters|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]]

**Improved Note Traits:** Rust isn't the only language with traits! We've made a bunch of improvements to traits, including hot reloading, the ability to apply a template, bundling libraries like lodash and luxon, as well as better docs and error handling. 
- More Information: [[Traits|dendron://dendron.dendron-site/dendron.topic.traits]]

## Highlights
- feat(views): view more note links in local graph panel with depth customization (#3072) @joshi ([[docs|dendron://dendron.dendron-site/dendron.topic.graph-view#other-filters]])

- enhance(structure): improved note traits (#3098) @jonathan ([[docs|dendron://dendron.dendron-site/dendron.topic.traits]])

## Everything Else
- enhance(workspace): `Vault Add` command warns for unsupported transitive dependencies (#3087) @kaan [docs](https://wiki.dendron.so/notes/q9yo0y7czv8mxlkbnw1ugj1/)
- enhance(workspace): vaults always use UNIX style separators in config files (#3096) @kaan
- enhance(workspace): validate dendronrc.yml and emit error if invalid (#3106) @kevin
- enhance(edit): add match helper for hb templates (#3094) @kevin  ([[docs|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers#match]])
- enhance(workspace): improve phrasing of sync message (#3115) @avhb
- enhance(workspace): support single-vault workspace vaults for self contained vault migration (#3118) @kaan
- enhance(edit): debounce completion provider trigger to reduce lag when autocompleting wikilinks (#3116) @hikchoi
- enhance(sync): adding import hint to tutorial (#3135) @jonathan
- fix(workspace): try to patch `EPERM` issues for windows (#3082) @kaan
- fix(workspace): adding an existing remote vault avoids creating workspace files (#3096) @kaan
- fix(publish): issue publishing note with ref without a code-worksapce file #3114  @kevin
- fix(cli): dendron publish --help to display full list of arguments (#3127) @joshi
- fix(workspace): error when native workspaces are initializing (#3123) @kaan
- fix(publish): compile error with no banner present(#3133) @kevin
- fix(structure): hot reload in note traits + no template by default #3154 @jonathan

## Community

### General Updates

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!

### TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#today-i-learned` channel.

- 💡 `icanteven#0264` shared a link to the additional benefits around GitLab land. [Link to Message](https://discordapp.com/channels/717965437182410783/904891933284007966/988905979695472640).

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Jul 30, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jul 06, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Jul 07, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jul 12, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

## Changelog
![[changelog#01000,1:#01010]]
