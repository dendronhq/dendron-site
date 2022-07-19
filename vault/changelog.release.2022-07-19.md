---
id: r50ffhwvk6c1ykmbj0q187q
title: 0.104
desc: ''
updated: 1658248392170
created: 1658222480416
---

Dendron 0.104 has sprouted  🌱

**Jump Notes in Chronological Order**: Navigate seamlessly between sibling notes in the hierarchy of the note open with the new `Dendron: Go Next Sibling` command. 
- More Information: ([[docs|dendron://dendron.dendron-site/dendron.topic.navigation.commands.go-next-sibling#^x8aubxke0i61]])

### Deprecated
- `Show Preview` command is now deprecated and replaced with [[Toggle Preview|dendron://dendron.dendron-site/dendron.topic.preview.commands.toggle-preview]]

## Highlights
- feat(edit): navigate through journal notes in chronological order
- feat(retrieve): add toggle preview command

## Everything Else
- enhance(navigation): sib nav journal notes in chronological order
- enhance(workspace): show names of duplicate vaults in error message
- enhance(sync): add uri field to gdoc pod
- enhance(views): filter linked edges(backlinks and outward links) from graph panel
- fix(edit): template gets applied twice if user undoes initial template
- fix(views): graph panel depth increase / decrease button not working

## Community

### General Updates

The team worked on a [[Hackathon|dendron://dendron.dendron-site/community.event.hackathon]]! Check out the projects the team worked on for our very first Hackathon, and find out how you can participate in the next one!

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `bitNomad#0817` shared his learnings on new [domain suffixes](https://www.name.com/domains) and while searching around for clever names also learned what an engram is

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[How to Intentionally Structure & Scale Company Communications|dendron://dendron.dendron-site/community.events.reading-series.2022.07.19]]

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Jul 29, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Aug 03, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Jul 21, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Aug 09, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Patrick Wilkie](https://github.com/patchworquill) `@patchwork#5510`
    - #role.bugcatcher
    - [Graph neighbour depth buttons do not work](https://github.com/dendronhq/dendron/issues/3246)

- [Michael Greene](https://github.com/VoltCruelerz)
    - #role.bugcatcher
    - [Invalid Casing during Export](https://github.com/dendronhq/dendron/issues/3255)

- [Tika](https://github.com/SR--) `Tika#9526`
    - [Footnote superscripts affects the spacing between lines](https://github.com/dendronhq/dendron/issues/3231)

- [d1onysus](https://github.com/dweisiger) `@d1onysus#1514`
    - [As a user, I'd like to visit a dendron link, and have the note highlighted in the expanded sidebar view](https://github.com/dendronhq/dendron/issues/3240)

- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
    - [Headered note refs do not work for headers with comments](https://github.com/dendronhq/dendron/issues/3242)
    
- [Taran Lu](https://github.com/taranlu-houzz)
    - [Spaces seem to be ignored when using inline code in headings](https://github.com/dendronhq/dendron/issues/3247)
    
## Changelog
![[changelog#01040,1:#01030]]