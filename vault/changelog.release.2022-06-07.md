---
id: 14h6ul847l9o4ve0rlfshcs
title: 2022 06 07
desc: ''
updated: 1654616780467
created: 1654609429512
---

Dendron 0.98 has sprouted  🌱

**Template Helpers:** Templates just got more powerful in Dendron. Make your notes programable using built-in helpers like equality checking or date fetching. 
- More information: [[Template Helpers|dendron://dendron.dendron-site/dendron.topic.templates.template-helpers]]

**Custom Themes in Preview**: You asked for it and now its here. Customize the preview with your own css (and share them in our new #themes channel).
- More information: [[Theme|dendron://dendron.dendron-site/dendron.topic.theme]]

**Hovers Are Coming to Backlinks**: Backlinks will now preview the contents of the note when hovering over a link.
- More information: [[Backlinks|dendron://dendron.dendron-site/dendron.topic.sidebar.backlinks]]

### Deprecated 
Old style templates are being replaced with [[Handlebar Templates|dendron://dendron.dendron-site/dendron.topic.templates.handlebars]]. See the [[migration guide|dendron://dendron.dendron-site/dendron.topic.templates.handlebars.migration]] for changes.

## Highlights
- feat(views): preview uses your vscode theme colors  
- feat(views): custom theme support for preview 
- feat(navigate): backlink panel with hover
- feat(edit): template helpers 

## Everything Else
- enhance(view): decrease min zoomed font-size for node labels in graph panel
- enhance(workspace): "migrate to self contained vault" updates logopath and moves gitignore file 
- enhance(extend): add axios to hook function 
- fix(publish): export gets stuck if `logoPath` is set but the logo doesn't exist
- fix(views): added default initial theme for webviews
- fix(views): bullet points missing in new theme-matching style
- fix(views): backlinks panel tweaks
- fix(views): images with encoded uri are not rendered in the preview

## Community

### General Updates

**Notes from Previous Office Hours:** [[2022-06-01 Office Hours|dendron://dendron.dendron-site/community.events.office-hours.2022.06.01]]
NOTE: we only have partial audio for this session. Apologies - Kevin is still figuring out how to use OBS 😅

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Video from and notes from our last talk now available - [[Implementing Capture/Configure/Control in Dendron, and Dendron Local Config Overrides|dendron://dendron.dendron-site/community.events.greenhouse.2022-05-27-ccc-bujo-local-config-override]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `kevins8#0590` shared a workflow tip for [Private Images](https://kevinslin.com/notes/chwe5ewde3wfh09we9n1rfi): _"for folks interested in a portable way of referencing private images across multiple machines, my setup involves using dropbox + nginx"_
- ⭐ `kfischer_okarin#2663` shared a way to [insert an agenda depending on the weekday](https://kfischer-okarin.github.io/digital-garden/notes/bjccjlfn0yonezff3yhauoa/): _"first attempt at combining a schema template with custom frontmatter + a hook to initialize my work journal notes with specific agenda headers depending on the weekday"_

- 💡`kevins8#0590` shared information about showing the difference between multiple commits on github using github.com/<username>/<repo_name>/compare/<commit1>...<commit2>. [See Example](https://github.com/dendronhq/handbook/compare/6adc8f73e8abe060541d209daf5005dd730eb456..532f429bfdd9a293f7c1bbca3805c16ef84ea48f). 


### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[What happened to tagging?|dendron://dendron.dendron-site/community.events.reading-series.2022.06.07]]

### Event Reminders

- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Jun 09, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jun 14, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [lordfrikk]() `@lordfrikk#3247`
    - #role.taxonomist
    - [wrong example in `nav_exclude_children`](https://wiki.dendron.so/notes/4l0mnzhwcos8kdn5aif1we9/)

- [Marek Lukasiewicz](https://github.com/Maarrk) `@Maarrk#9537`
    - #role.horticulturalist
    - [enhance: Add axios to hook function](https://github.com/dendronhq/dendron/pull/3001)

- [Riccardo Dozzo](https://github.com/rioka) `@rioka#2156`
  - #role.bugcatcher
  - [OS dependent path for vaults](https://github.com/dendronhq/dendron/issues/3040)

- [bugfixd](https://github.com/bugfixd)
  - #role.bugcatcher
  - [Unable to prevent Dendron from treating @ as a user tag by escaping it](https://github.com/dendronhq/dendron/issues/3039)

- [Tika](https://github.com/SR--) `Tika#9526`
  - [Incorrect handling of colons after the task square brackets](https://github.com/dendronhq/dendron/issues/3037)
  
- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
  - [EBUSY resource when migrating to self-contained vault](https://github.com/dendronhq/dendron/issues/3021)    

- [Mihai Constantin](https://github.com/mihaiconstantin) `mihaiconstantin#9440`
    -#role.speaker
    - Spoke at the last Dendron greenhouse!

## Changelog
![[changelog#0980,1:#0970]]
