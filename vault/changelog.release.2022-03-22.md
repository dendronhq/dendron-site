---
id: qcwfzax4uaqj54evgp8li5y
title: '0.87'
desc: ''
updated: 1647974107111
created: 1647909143435
---

Dendron 0.87 has sprouted  🌱

**Breaking changes:** We updated the airtableId format to be a dictionary instead of a single value. This makes it possible to export a single note to multiple tables.

If you are using v2 of the airtable pod, you can migrate to the new version by following the [[instructions here|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.migration#migrating-to-0870]].

- More information in the [RFC on standardizing source-field mapping for Pods](https://docs.dendron.so/notes/N0G4s23hFDGVnsjHhh6dt.html)

**Self Contained Vaults:** We are now in early preview of self contained vaults. This lets you use and share your Dendron vaults without the need of a workspace.

If you are interested in trying this out, please fill out this [survey](https://airtable.com/shr0cwk0a9tujeipZ) and we'll add you to early-preview where we'll be holding discussions and offering support. We'll also send you specialized instructions for how to set up self contained vaults!

- More information in [in our RFC about self contained vaults](https://docs.dendron.so/notes/aOOBYTowLEKJDEtLWFiHb/)


**Speed Improvements**: `Dendron: Show Preview` refreshes faster and editing larger workspaces is more responsive.

This release also includes a number of fixes and improvements, including a new command to aid in creating and reading backup files.

- More information [in our documentation on open backup]([[docs|dendron://dendron.dendron-site/dendron.ref.commands#open-backup]]).

## Highlights
- feat(vaults): early implementation of self contained vaults
- enhance(workspace): faster preview refresh
- enhance(workspace): faster editing in large workspaces
- enhance(internal): provide a standard way to create and read backup files

## Everything Else
- fix(workspace): fix crash that can happen when bad frontmatter is present during doc save
- fix(publish): customHeaderPath breaks publishing if value is set to anything except `header.html`
- fix(basics): ensure note title is always a string to avoid errors
- fix(sync): better error message on `Workspace Add and Commit`
- fix(lookup): lookup (without spaces) should be case-insensitive
- fix(workspace): issue with notes not being saved on export
- fix(workspace): race condition when backing up configuration
- feat(workspace): doctor command to find (and suggest fix for) keyboard conflicts
- enhance(workspace): warn on keyboard conflicts on first install
- enhance(pods): support exporting a note to multiple Airtable destinations
- fix(views): unblock preview rendering when backlink is invalid
- fix(workspace): race condition when loading native workspace
- fix(workspace): prevent errors in Open Backup Command and Run Migration Command in native workspaces

## Community

### General Updates
Check out our founder, Kevin, discuss his background and how he started Dendron on the *From Zero to One* podcast! Find out more details in the [episode blurb](https://www.0011.one/posts/S3E10) and listen on [Spotify](https://open.spotify.com/episode/5JhPoOCvXl3om7m905dhC4?si=cf6240803a4940e7&nd=1) and [Xiaoyuzhoufm](https://www.xiaoyuzhoufm.com/episode/621f25f2761e0799b628feca).

### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `xg#6522` shared a fun fact: [the distance between Dendron and Hugo is 1988km by car, a 25h drive](https://pk.2markers.com/363114-369224). "I am tempted to see if I can write an exporter for my needs in less than 25h 😁"
    - We say go for it!
    
### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.03.22]]

### Event Reminders

- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Wed, Mar 23, 9:00 PM PDT / 04:00 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: Publishing workflows with Dendron.
    - Description: Interested speakers will present their workflows for publishing content, followed by an open discussion. The event will be recorded and later published online.
    
    This is a good opportunity to share tips and tricks about nifty things about your workflow, and ask for advice and input on challenges and pain-points in your current system.
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

- [raeyulca](https://github.com/raeyulca)
  - [Config frontmatter in schema template isn't copied when creating a new note](https://github.com/dendronhq/dendron/issues/2590)

- [Jeff Hopper](https://github.com/HopperTech)
  - [Hitting tab in Lookup Note to complete the path and then adding to the path does not work](https://github.com/dendronhq/dendron/issues/2579)

- [Jody Foo](https://github.com/fnurl)
  - [Unable to create wikilink alias that only differs in case from page title](https://github.com/dendronhq/dendron/issues/2575)

- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
  - [Updating backlinks can lead to conflicts in dirty editors](https://github.com/dendronhq/dendron/issues/2573)
  - [Adding past CROP events](https://github.com/dendronhq/dendron-site/pull/444)

- [Nickolay Kondratyev](https://github.com/nickolay-kondratyev) `@nickolay-kond#9861`
  - #role.bugcatcher
  - [Create New does not show after auto complete is used to complete something](https://github.com/dendronhq/dendron/issues/2588)

- [John Knowles](https://github.com/jpknwls) `@johnknowles#1154`
  - #role.taxonomist
  - [Updated local CLI installation link](https://github.com/dendronhq/dendron-site/pull/438)
  - [update Academic Workflows](https://github.com/dendronhq/dendron-site/pull/440)
  - [Adds "Indenting Wrapped Text" and Edits "Pinned Tabs"](https://github.com/dendronhq/dendron-site/pull/443)
  - [Update Publish.Cook.GithubPages to reflect current yaml](https://github.com/dendronhq/dendron-site/pull/451)

#### Surveyors

A huge thanks to the following Dendronites that provided feedback in the [2022 Dendron User Survey](https://link.dendron.so/74EI). If you would like to help us improve Dendron, please checkout the survey (and earn a shiny [[Surveyor|dendron://dendron.dendron-site/community.discord.roles#surveyor]] Discord badge in the process)!

- `@Gander7#5328`
- `@yiming#8413`
- `@siddacious#3905`
- `@Tychronos#6624`

## Changelog
![[changelog#0870,1:#0860]]
