---
id: ijgipdvbffakeq7n0b6k9eq
title: 0.102
desc: ''
updated: 1657035409159
created: 1657018178037
---

Dendron 0.102 has sprouted  🌱
July 5, 2022

**New Visualization Command for Workspace**: Check out our new CLI command that shows large amounts of data with hierarchal relationships as packed-circles, and helps you navigate through them more efficiently!
- More Information: [[Packed Circles|dendron://dendron.dendron-site/dendron.topic.packed-circles]]  

## Highlights
- feat(cli): add a cli command that generates a packed-circles visualization of workspace 
- enhance(markdown): add new template variables

## Everything Else
- enhance(publish): add "link to anchor" icon by headings and block anchors
- enhance(publish): faster rendering of sidebar in published site 
- fix(workspace): sync fails in shared workspaces if users update workspace config first before syncing migrated vaults 
- fix(structure): quickpick stuck issue for refactor hierarchy cmd 
- fix(workspace): removing vault with a name different than their `fsPath` doesn't remove them from `duplicateNoteBehavior` 
- fix(workspace): duplicate note id detected even after a file is removed 
- fix(views): backlink tree item labels are trimmed excessively 
- fix(publish): regression where publishing fails if note doesn't exist 
- fix(workspace): fix init in workspace without workspace folders 

## Community

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[Double Shipping|dendron://dendron.dendron-site/community.events.reading-series.2022.07.05]]

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

- [Cameron Yick](https://github.com/hydrosquall) `@cameron#9185`
    - [docs: fix template variable documentation spelling](https://github.com/dendronhq/dendron-site/pull/574)

- [Weiming](https://github.com/woodwm)
    - #role.taxonomist
    - [Correct a latex equation in the tutorial](https://github.com/dendronhq/dendron/pull/3182)

- [José Longo](https://github.com/jlongo) `@José Longo#4828`
    - #role.bugcatcher
    - [parse error of wikilinks ?](https://github.com/dendronhq/dendron/issues/3179)
    
- [hateyouinfinity](https://github.com/hateyouinfinity)
    - #role.bugcatcher
    - [Templates get reapplied if previous application is immediately undone](https://github.com/dendronhq/dendron/issues/3185)

- [Phoebian](https://github.com/Phoebian) `@Phoebian#1004`
    - #role.taxonomist
    - [Blank journal pages](https://github.com/dendronhq/dendron-site/pull/571)

- [Patrik Grip-Jansson](https://github.com/kap42)
    - #role.taxonomist
    - [Corrected a spelling error](https://github.com/dendronhq/dendron-site/pull/562)
    
## Changelog
![[changelog#01020,1:#01010]]
