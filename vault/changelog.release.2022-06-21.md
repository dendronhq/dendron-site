---
id: 14h74cnp9no9joxavmo7gr6
title: "0.100"
desc: ''
updated: 1655749209042
created: 1655737056633
---

Dendron 0.100 has sprouted  🌱

**v100:** Today marks 100 releases of Dendron! Two years ago, we launched Dendron because we believed there was a better way of managing knowledge. Over six hundred feature releases later, we think we're 3% of the way there 😅!

To celebrate the v100 milestone, we're also launching on product hunt today! If Dendron has been of use to you, please leave feedback on our [product hunt page](https://www.producthunt.com/posts/dendron-v100) today (product hunt is heavily skewed for launch day feedback) - this would help us out a lot! 🙏

**Recent Workspaces Panel:** Navigating through multiple workspaces has never been easier! This new panel will show you your last 5 opened Dendron workspaces and you can access them with just a click.
- More information: [[Recent Workspaces|dendron://dendron.dendron-site/dendron.topic.sidebar.recent-workspaces]]

## Highlights
- feat(views): recent workspaces panel

## Everything Else
- enhance(cli): updated dendron lookup command 
- enhance(views): add tooltip on hover for graph nodes
- enhance(edit): this sets handlebars as the default template format
- enhance(edit): configute templateHierarchy when applying template 
- enhance(retrieve): faster link completions
- enhance(edit): remove deprecated `Insert Note` command
- enhance(workspace): prompt to update seed vault configuration during sync if the seed configuration changed
- enhance(workspace): v100 landing page
- enhance(publish): support a custom banner on published page
- fix(workspace): migrate to self contained vault causes `EBUSY` errors on Windows
- fix(refactor): updated refactor hierarchy message to include no. of files changed
- fix(views): issue with help and feedback panel launching a link once even if was clicked multiple times
- fix(edit): autocomplete issues with tags and mentions

## Community
    
### General Updates

#### Greenhouse Series

![[community.events.greenhouse#summary,1:#*]]

Are you interested in speaking at our next greenhouse? If so, fill out the [Greenhouse Proposal Form](https://airtable.com/shrHMMl1NwefpM689?prefill_SurveyName=GreenhouseProposal&hide_SurveyName=true) to apply for a slot!

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[Local-First Software: You Own Your Data, in Spite of the Cloud|dendron://dendron.dendron-site/community.events.reading-series.2022.06.21]]

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Jun 24, 04:00 PM PST / 00:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jul 06, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Jun 23, 11:00 AM PST / 19:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jul 12, 8:30 AM PST / 16:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Derek Ardolf](https://github.com/ScriptAutomate) `@icanteven#0264`
    - [Fix items failing awesome-lint checks](https://github.com/dendronhq/awesome-dendron/pull/4)

- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
    - #role.taxonomist
    - [`--help` text does not match full list of arguments for CLI commands](https://github.com/dendronhq/dendron/issues/3093)
    - [update cli template and enforce via schema](https://github.com/dendronhq/dendron-site/pull/546)

- [Kevin Fischer](https://github.com/kfischer-okarin) `@kfischer_okarin#2663`
    - #role.planter
    - [Add Kevin Fischer's digital garden to showcase](https://github.com/dendronhq/dendron-site/pull/536/files)

- [Murali]() `@Murali#9289`
    - #role.env.seed

## Changelog
![[changelog#01000,1:#0990]]
