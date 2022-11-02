---
id: 2kb9bl9378k9w45wfrtkrnr
title: '0.92'
desc: ''
updated: 1650998076621
created: 1650943220412
---

Dendron 0.92 has sprouted  🌱

**Graph View**: We've improved the loading speed of the graph view. You should notice a drastic improvement in load times-up to 100x in larger workspaces 🚀🚀🚀.

**Tree View**: We've improved the stability of the tree view and fixed an error with `Dendron: Rename Note` that caused the tree view to fall out of sync. 

**Self Contained Vaults**: You can now move self contained vaults between local and remote locations using the `Dendron: Vault Convert` command. 

- More information can be found in our [[documentation on vaults|dendron.topic.vaults#convert-vault]]

## Highlights
- enhance(views): optimize graph view load times - 100x improvement on large workspaces
- fix(views): multiple stability fixes for tree view
- enhance(workspace): `vault convert` now works with self contained vaults

## Everything Else
- enhance(workspace): general speed ups across multipel commands
- enhance(workspace): doctor command can detect and fix misconfigured self contained vaults
- fix(pods): exporting as markdown will add `.md` extension to markdown files
- fix(workspace): hovering an asset link while holding `ctrl` no longer opens the asset
- fix(view): some views don't update for new notes with self contained vaults 
- fix(view): broken preview for links with sub-hierarchy starting with .md 
- fix(workspace): remove stale entries from cache when initializing

## Community

### General Updates

**Greenhouse Talk**: Interested in learning about how other Dendron users go about sharing their notes? Have a cool workflow of your own to share? We are having a Greenhouse Talk on Friday (04/29) at 4PM PST to discuss workflows for publishing Dendron content. 

We are still looking for a few last minute speakers, so please don't hesitate to sign up. Prospective speakers are invited to fill out [a proposal form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal). If you have something to share or are just curious, we'd love to see you there!
- For more information on Greenhouse Talks, see [[details here|dendron://dendron.dendron-site/community.events.greenhouse]]

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `@codeluggage#5635` shared a link to [a gist on how to setup shortcuts for task management](https://gist.github.com/codeluggage/857b944fc503ff9ff8b20cf6d871943f): _"I've been learning and getting into task management in Dendron lately, and found myself reaching for shortcuts to manage checkboxes. Cobbled together these macros to quickly work with the current line, as well as quickly run through the current file when clearing out old tasks."_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

<!-- TODO: REMOVE WHEN READING SERIES COMPLETE -->
![[|dendron://dendron.dendron-site/community.events.reading-series.2022.04.26]]

### Event Reminders
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Apr 28, 11:00 AM PDT / 18:00 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: Publishing workflows with Dendron.
    - Description: Interested speakers will present their workflows for publishing content, followed by an open discussion. The event will be recorded and later published online.
    
    This is a good opportunity to share tips and tricks about nifty things about your workflow, and ask for advice and input on challenges and pain-points in your current system.
    - Next: [Fri, Apr 29, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, May 04, 09:00 AM PDT / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
    - Notes for this past weeks Office Hours can be found [[here|dendron://dendron.dendron-site/community.events.office-hours.2022.04.06]], and the [recording here](https://www.youtube.com/watch?v=-CK7DmkvNzA).
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, May 10, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
    - 
### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Kumudan](https://github.com/kzilla-git) `@kzilla#8818`
  - [Error rendering note/image in Preview](https://github.com/dendronhq/dendron/issues/2802)
  
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Renamed note is shown in the wrong vault when its parent hierarchy is the same](https://github.com/dendronhq/dendron/issues/2817)
  
- [Daniel Bradenburg](https://github.com/danbburg)
  - #role.bugcatcher
  - [[Bug] Dendron preview broken in code-server](https://github.com/dendronhq/dendron/issues/2788)
  
- [Jody Foo](https://github.com/fnurl)
  - #role.taxonomist
  - [Less ambigous link examples](https://github.com/dendronhq/dendron-site/pull/424)
  
- [Paolo Dina](https://github.com/paolodina) `@pdina#0608`
  - #role.taxonomist
  - [Update dendron.topic.schema.md](https://github.com/dendronhq/dendron-site/pull/481)
  
- [Alexandru Ichim](https://github.com/agichim) `@ichimga#3577`
  - #role.taxonomist
  - [Update dendron.topic.publish.quickstart.md](https://github.com/dendronhq/dendron-site/pull/479)
  
- [Derek Ardolf](https://github.com/ScriptAutomate) `@icanteven#0264`
  - #role.taxonomist
  - [Fix note ref on upgrading CLI in publish notes](https://github.com/dendronhq/dendron-site/pull/478)
  
- [Byron Wall](https://github.com/byronwall) `@byronwall#1313`
  - [Update dendron.topic.templates.schema-template.md](https://github.com/dendronhq/dendron-site/pull/475)


#### Surveyors

The following community members provided feedback in the Dendron user survey:

- `@marshyon#6669`
- `@Bill M#4550`

## Changelog
![[changelog#0920,1:#0910]]
