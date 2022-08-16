---
id: zuzn72m7uu8drj59m63ssa6
title: 0.108
desc: ''
updated: 1660662994124
created: 1660571806685
---

Dendron 0.108 has sprouted  🌱
August 16, 2022


## Everything Else

- fix(workspace): always treat `begin|end` block anchors as valid
- fix(workspace): remove bad dependency which was causing error on parsing notes
- fix(navigate): do not run goto sibling if not in a dendron note
- fix(publish): deprecate Dendron: Publish Dev command
- fix(workspace): correctly focus tree view on tutorial activation
- fix(views): removes semicolon in preview


## Community

#### CROP Updates
##### CROP Shipped
This week's [CROP Shipped](https://github.com/dendronhq/dendron/issues/2467) submitted by [cconrad](https://github.com/cconrad), led to 'enhance(lookup): add space between note title and vault name.'
##### CROP In Progress
This week's Merge Notes command [CROP Selection](https://github.com/dendronhq/dendron/issues/906) was submitted by [SR--](https://github.com/SR--). 
    
Are you interested in an issue being included as part of the next CROP? If so, let us know in the [#feedback](https://discordapp.com/channels/717965437182410783/739186036495876126) channel! We have a bi-weekly rotation of issues so, even if it doesn't get picked for the next harvest, it is bound to make a comeback in the upcoming weeks!


### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `Tanamr#3739` shared a workflow tip that tags like #todo are better placed at the end of a line than at the beginning. This is because when you go to [[tags.todo]] and open the backlinks pane, it shows a preview of every line where the tag is mentioned, but only up to where the #todo occurs. [link to message](https://discord.com/channels/717965437182410783/742532267058004098/1005228165976817674)

- 💡 `bitNomad#0817` shared his learnings on how to stop "Install Mojave" from downloading by deleting most of the app contents. [link to message](https://discord.com/channels/717965437182410783/904891933284007966/1005306701639057498)


### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[Write a Note to Your Spouse Every Day|dendron://dendron.dendron-site/community.events.reading-series.2022.08.16]]

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Aug 26, 09:00 AM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Sep 07, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Aug 18, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Sep 20, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)


### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Christophe Benz](https://github.com/cbenz)
  - #role.taxonomist
  - [Fix sentence](https://github.com/dendronhq/dendron-site/pull/610)

- [Patrik Grip-Jansson](https://github.com/kap42)
  - [Minor changes to "user-interface.md"](https://github.com/dendronhq/dendron-site/pull/611)
  - [Accessibility issues with HTML publishing of "Backlinks" and "Children"](https://github.com/dendronhq/dendron/issues/3369)
  
- [ebromberg](https://github.com/ebromberg)
  - #role.bugcatcher
  - [Can't create new note](https://github.com/dendronhq/dendron/issues/3366)
  - [Block Anchors to Non Notes](https://github.com/dendronhq/dendron/issues/3372)

- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
  - [Schema template does not get populated when \`namespace: true\` is set](https://github.com/dendronhq/dendron/issues/3381)

- [Tanamr](https://github.com/samuelxyz) `@Tanamr#3739`
  - #role.bugcatcher
  - [Lookup stops working after updating schema](https://github.com/dendronhq/dendron/issues/3384)
  - [Note preview does not render spaces around links in headers](https://github.com/dendronhq/dendron/issues/3396)

- [cwtowns](https://github.com/cwtowns)
  - #role.bugcatcher
  - [note preview only update when editor obtains focus](https://github.com/dendronhq/dendron/issues/3391)

- [Henry](https://github.com/HenryC-3)
  - #role.bugcatcher
  - [Dendron preview won't update when using selection extract to create a note](https://github.com/dendronhq/dendron/issues/3398)

## Changelog
![[changelog#01080,1:#01070]]
