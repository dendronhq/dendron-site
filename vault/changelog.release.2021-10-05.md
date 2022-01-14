---
id: K6ssYNLMW27BSV6rSZJ5P
title: '0.62'
desc: ''
updated: 1640428604255
created: 1633454409770
---

Dendron 0.62 has sprouted  🌱

### Highlights
- enhance(pods): export pods support `ignore` and `vault` filters ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.export#configuration]]) 
- fix(view): anchor links clicked in preview now scroll to location within the note (not within preview).
- fix(views): preview will now update when note reference change

### Everything Else
- feat(pods): Airtable publish pod ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.publish#summary]]) 
- enhance(pods): Airtable export pod is now [idempotent](https://en.wikipedia.org/wiki/Idempotence) ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#idempotency]])
- enahnce(pods): Airtable export pod has better support for mapping [[Tags|dendron://dendron.dendron-site/dendron.topic.tags]] and dates ([[docs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.airtable.export#object-value]]) 
- enhance(commands): OpenLink can open more links and works on partial selection (thank you `@Stephen#8544` for the PR)
- enhance(commands): Improve user messaging on node delete by specifying the vault of the deleted node 
- enhance(lookup): Allow creation of duplicate file name if there is a vault without such file name 
- fix(markdown): highlighting for wildcard note refs with header offsets 
- fix(publish): Next.js search not working 
- fix(lookup): vault selection use wrong label in multi-vault


### Announcements

#### New Website

We updated our [website](https://www.dendron.so/) to better showcase Dendron's capabilities. Please take a look and leave any `#feedback` you might have in Discord or at `support@dendron.so`!

### Community

#### Tea Time 

We officially launched the [[Teatime|dendron://dendron.dendron-site/community.teatime]] channel last week for contributors. 

![[dendron://dendron.dendron-site/community.teatime#summary,1]]

Thanks to everyone that stopped by. This week, `@mobius#6646` will be hosting a few sessions in Asia time. You can see his slots in the [[community calendar|dendron://dendron.dendron-site/community#community-calendar]]

#### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.what-are-you-reading]] is pinned in the `#what-are-you-reading `

[The surprising downsides to planting trillions of trees](https://www.vox.com/platform/amp/down-to-earth/22679378/tree-planting-forest-restoration-climate-solutions)

Takeaway: be careful about proxy metrics - tree planting to offset and counter carbon emissions sounds great on paper but can lead to some bad incentives. At Dendron, we  promote sustainable forestry 🌲

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|community.discord.roles]]

- [Stedag](https://github.com/Stedag) `@Stephen#8544`
    - #role.horticulturalist
    - [Updated OpenLink command](https://github.com/dendronhq/dendron/pull/1317)
- [doctorboyMP](https://github.com/doctorboyMP) `@doctorboy#9882`
    - #role.taxonomist
    - fixing a few typos in publishing docs
- [codeluggage](https://github.com/codeluggage) `codeluggage#5635`
    - #role.taxonomist
    - fixing ctrl+tab documentation in tutorial and site docs
- [Aleksey Rowan](https://github.com/aleksey-rowan) `@aleksey#5276`
    - [A list of block references is not recognized correctly](https://github.com/dendronhq/dendron/issues/1443)
- [Tycholiz](https://github.com/Tycholiz) `Tychronos#6624`
    - #role.bugcatcher
    - [Select vault smart status/always prompt config option](https://github.com/dendronhq/dendron/issues/1462)

### Changelog
![[changelog#062,1:#0601]]


