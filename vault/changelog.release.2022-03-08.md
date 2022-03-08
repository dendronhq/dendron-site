---
id: buq00kb185zpm8sqa9jozj2
title: '0.85'
desc: ''
updated: 1646709857036
created: 1646706808485
---

Dendron 0.85 has sprouted  🌱

Speed improvements in Markdown.

A variety of fixes in this release, along with a new `Dendron: Doctor` command: `fixRemoteVaults`. This command can assist in properly marking remote vaults in your `dendron.yml` configuration, if they are misconfigured.

- More information: [[fixRemoteVaults|dendron://dendron.dendron-site/dendron.topic.doctor#fixremotevaults]]

## Highlights
- enhance(workspace): doctor command, `fixRemoteVaults`, to fix remote vaults that don't have a remote set
- enhance(workspace): auto fix vaults that have missing root files
- enhance(publish): static tree menu
- enhance(views): faster loading of markdown due to parsing improvements

## Everything Else
- fix(publish): properly render mermaid and katex when published
- fix(lookup): add selection2link button for CreateScratchNoteCommand
- fix(pods): fix issue with url links not showing up when using markdown export inside a note reference
- fix(vaults): sometimes see same vault multiple times in vault dropdown
- fix(internal): some edge cases when deleting a note that interferred with tree view and refactoring
- fix(cli): add omitted migration entries
- fix(workspace): add validation for enableFrontmatterTags and enableHashesForFMTags
- fix(views): fix race condition in tree view v2 initialization logic

## Community

### General Updates

#todo

### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `tallguyjenks#3567` shared a link to his YouTube video on [Dendron: A Unique Approach To Knowledge Management](https://www.youtube.com/watch?v=nfvx8rv77NA). From his Twitter where he also shared the link: _"2 hours of solid content (that took forever to edit) about one of my favorite approaches to technical note taking."_
- ⭐ `aleksey#5276` shared a link to [Donate - Defend Ukraine](https://www.defendukraine.org/donate): _"...if you were thinking about donating to Ukrainian people, here are some links that could be helpful"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.03.08]]

### Event Reminders

- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Mar 09, 09:00 PM PST / 05:00 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: _Getting Things Done (GTD) and Other Task-Management Workflows (with Dendron!)_
    - Description: _Interested speakers from the community will take 5 - 10 minutes each to present their workflows for managing actionable information, followed by an open discussion. The event will be recorded and later published online._
    - Next: [Fri, Mar 25, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Apr 06, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Apr 12, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

#todo

## Changelog
![[changelog#0850,1:#0840]]
