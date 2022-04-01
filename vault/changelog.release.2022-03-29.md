---
id: l4yczmzr9el7fy9jg7a65vt
title: 0.88
desc: ''
updated: 1648503477252
created: 1648503477252
---

Dendron 0.88 has sprouted  🌱 ^71zw33gw6mli

<!-- [[Release Highlights|dendron://dendron.handbook/area.product.sop.release-highlights]] -->

**Self Contained Vaults:** 
We are continuing to add features to self contained vaults as part of the early preview process. Self contained vaults let you use and share your Dendron vaults without the need of a workspace. 

If you'd like to participate in our early preview, please fill out this [survey](https://airtable.com/shr0cwk0a9tujeipZ). We'll send you special instructions, and you'll be added to `#early-preview` on our Discord where we'll offer support and hold discussions. 

- More information: ([[docs|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained##configuration]]) 

**Deprecation Notice:**
- We will be focusing on improving Tree view V1 and will be removing V2 in the near future. The [[enableWebUI|dendron://dendron.dendron-site/dendron.ref.config#enablewebui]] feature flag will also be removed.

## Highlights
- enhance(workspace): initialize workspace can create self contained vaults 
- deprecate(views): tree view V2 and enableWebUI feature flag will be removed in the near future

## Everything Else
- enhance(workspace): improve the error message for bad or missing code-workspace file 
- enhance(common): don't reload workspace when running doctor airtable command
- fix(workspace): fix dropped keystrokes issue in lookup
- fix(internal): Engine `updateNote` not properly firing update events
- fix(markdown): support parenthesis in the image URL
- fix(views): Backlinks will no longer disappear in preview upon editing
- fix(lookup): autocomplete causes notes to be created in wrong vault
- fix(views): Preview now works in remote workspaces

## Community

### General Updates
<!-- TODO: Delete this section if not appliacble -->
We are now experimenting with Discord role Emojis! 

If you have an Emoji or icon you think would fit one of our [[Discord roles|dendron://dendron.dendron-site/community.discord.roles]], please let us know in `#feedback` on Discord. 


### Starboard and TIL Highlights
<!-- TODO: update links. Delete section is no new items-->
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `@aleksey#5276` shared a link to [a tool for finding out the size of Github repos](https://citizendot.github.io/gh-info/): _"A handy app to assess the size of a repo before cloning"_
- 💡 `@aleksey#5276` also shared [a way to write Latex mathematical equations in all Markdown editors](https://latex.codecogs.com): _"TIL you can write equations in Markdown even if your md editor doesn't support Latex:"_
- 💡 `@icanteven#0264` shared a link to [the Github changelog](https://github.blog/changelog/l): _"TIL I should be paying more attention to the GitHub Changelog. You can now follow organizations, and a new dashboard feed tab is in public beta and viewable now. I like it better than the current feed."_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[dendron://dendron.dendron-site/community.events.reading-series.2022.03.29]]

### Event Reminders
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Mar 31, 11:00 AM PDT / 18:00 UTC](https://link.dendron.so/luma)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Apr 06, 09:00 AM PDT / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Apr 12, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: Publishing workflows with Dendron.
    - Description: Interested speakers will present their workflows for publishing content, followed by an open discussion. The event will be recorded and later published online.
    
    This is a good opportunity to share tips and tricks about nifty things about your workflow, and ask for advice and input on challenges and pain-points in your current system.
    - Next: [Fri, Apr 29, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release 👨‍🌾 👩‍🌾

Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [mysoonyu](https://github.com/mysoonyu)
  - #role.bugcatcher
  - [Dendron: show preview - always in loading mode (in remote windows)](https://github.com/dendronhq/dendron/issues/2606)

- [Jody Foo](https://github.com/fnurl)
  - [Correct vault is not selected when creating note with lookup autocomplete](https://github.com/dendronhq/dendron/issues/2617)

- [gbieging](https://github.com/gbieging)
  - #role.bugcatcher
  - [Wrong preview/linking when hierarchy segment starts with "md"](https://github.com/dendronhq/dendron/issues/2644)

#### Surveyors

The following community members provided feedback in the Dendron user survey:

- `@micharris42#6073`
- `@codeluggage#5635`

## Changelog
![[changelog#0880,1:#0870]]

