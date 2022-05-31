---
id: 5h7bbwppataybwelrryepks
title: 0.97
desc: ''
updated: 1653998635078
created: 1653971746953
---

Dendron 0.97 has sprouted 🌱

**Task Note Status:** Wait, did I finish that task? Dendron now displays task status information in the preview as well as when publishing.

**Handlebar Templates:** Get a handle on templates - Dendron now supports [Handlebars](https://handlebarsjs.com/guide/), a minimal templating language that lets you create flexible templates!

**Clean up your published sidebarn:** It's not too late for spring cleaning! You can now configure whether or not a published note should show it's children in the tree view.

## Highlights
- feat(markdown): handlebar based templates
- feat(views): display task note status when linking to task notes in publishing and in preview
- feat(publish): ability to exclude children in dendron side nav

## Everything Else
- feat(edit): add command to apply a template
- feat(workspace): Add a command to migrate regular vaults into self contained vaults
- feat(publish): dark theme support
- enhance(edit): additional built-in variables for templates
- enhance(views): upgrade mermaid to v9.1.1
- enhance(navigate): make wikilinks clickable in hover
- enhance(workspace): better feedback to users for invalid dendron.yml
- fix(publish): publishing to respect enableHierarchyDisplay
- fix(publish): assetsPrefix breaks images
- fix(publish): "edit this page on ..." link uses the wrong path for self contained vaults
- fix(workspace): Help and Feedback Panel not empty outside of dendron ws

## Community

### General Updates
<!-- TODO: Delete this section if not appliacble -->
- The [[Troubleshooting|dendron://dendron.dendron-site/dendron.guides.troubleshooting]] guide just got an update and we have the Dendron community to thank for it. Check out the new FAQ section sourced directly from user-submitted questions. 

### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `@Maarrk#9537` shared a video of [a Zotero integration](https://discord.com/channels/717965437182410783/766135383335370783/977542864496103426): _"Hi everyone, I think I have a cool setup for Zotero integration so I thought I'd share here."_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.05.31]]

### Event Reminders

- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jun 01, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jun 07, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: TBD
    - Description: _Interested speakers from the community will take 5 - 10 minutes each to present their workflows for a topic to be determined, followed by an open discussion. The event will be recorded and later published online._
    - Next: [Fri, Jun 24th, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)


### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.
- [abunavas](https://github.com/abunavas)
    - [submitted this week's CROP that got shipped, and triggered new feature creation](https://github.com/dendronhq/dendron/issues/2311)
    - [feat(edit): add command to apply a template · Pull Request #2982 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/2982)

## Changelog
![[changelog#0970,1:#0960]]
