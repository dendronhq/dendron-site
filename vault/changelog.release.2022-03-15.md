---
id: 4i7t856tu1wygd2o540lc6e
title: '0.86'
desc: ''
updated: 1647363084235
created: 1647295787428
---

Dendron 0.86 has sprouted  🌱

The Airtable Export Pod now supports null entries for dates. Before this, an empty/null value for date would prompt issues when attempting to export notes to Airtable. Learn more here: ([[docs|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#date]]) 

In addition, we've improved the speed of note references - you should notice a significantly faster experience when using note references and hover previews. 

This release includes a variety of other fixes and improvements.

## Highlights
- enhance(pods): support null entries for dates in Airtable export pod v2 
- enhance(basics): improve performance around reference rendering including hover

## Everything Else
- enhance(workspace): Dendron still loads if there's a missing local vault
- fix(pods): Google Docs Export pod displays Bad Request error on export
- fix(publish): better error messages when publishing
- fix(views): block anchors showing up in the preview
- fix(basics): ensure note title is always a string to avoid errors

## Community

### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `mikhail#3816` shared a link to [dendron-citations](https://github.com/mivanit/dendron-citations): _" I've put out a major update to dendron-citations. Now, tag notes are automatically created for each keyword and author -- this lets you use dendron backlinks to see which papers a certain author has written, or which papers have a certain keyword! I've also put out a lot of other minor improvements.
"_

- 💡 `Bo Vandenberg [utc -5]#4626` shared a link to [Jupiter: The Only Planet in our Solar System That Doesn’t Orbit the Sun](https://www.thespaceacademy.org/2021/04/jupiter-only-planet-in-our-solar-system.html): _"Too cool not to share. (Not about Dendron)"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.03.15]]

### Event Reminders

- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Mar 17, 11:00 AM PDT / 06:00 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: TBD
    - Description: TBD
    - Next: [Fri, Mar 25, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Apr 06, 09:00 AM PDT / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Apr 12, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Raymond K](https://github.com/dagriefaa) `@dagriefaa#2892`
  - #role.bugcatcher
  - [Favicon not rendering when assetPrefix is set](https://github.com/dendronhq/dendron/issues/2536)
  - [Publishing crashes when customHeaderPath contains hyphen in the header filename](https://github.com/dendronhq/dendron/issues/2549)

- [Callum Mcdonald](https://github.com/chmac) `@chmac#2931`
  - [Lookup stops working properly after pressing tab](https://github.com/dendronhq/dendron/issues/2550)

- [Claus Conrad](https://github.com/cconrad) `@cconrad#0514`
  - [docs: fix typo](https://github.com/dendronhq/dendron-site/pull/428)

- [Carlos Cámara](https://github.com/ccamara) `@ccamara#5131`
  - [Fixes broken anchor](https://github.com/dendronhq/dendron-site/pull/427)
  - [Adds nextcloud mention](https://github.com/dendronhq/dendron-site/pull/426)

- [John Hoang](https://github.com/jhoan2) `@jhoang.eth#0757`
  - #role.bugcatcher
  - [Preview shows "Start anchor ... not found" when linking notes](https://github.com/dendronhq/dendron/issues/2568)

- [Andrey Jef](https://github.com/andrey-jef) `@evanAndiez#9559`
  - [The ()s in the url's image cause error with Dendron's extended image parser](https://github.com/dendronhq/dendron/issues/2564)

- [Matias Forbord](https://github.com/codeluggage) `@codeluggage#5635`
    - [chore: fix lifecycle migration doc link by codeluggage · Pull Request #2559 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/2559)

#### Surveyors

The following community members provided feedback in the Dendron user survey:

- `@WildMagic#5137`
- `@TomDuffield#6008`
- `@ccamara#5131`
- `@michaelvolk#0415`
- `@mihaiconstantin#9440`
- `@Xanaus#9249`
- `@tsqrl#1307`
- `@xerinox`
- `@Json_online#2575`

## Changelog
![[changelog#0860,1:#0850]]
