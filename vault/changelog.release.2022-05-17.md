---
id: o674526ctxg6rt8bc144rdz
title: 0.95
desc: ''
updated: 1652809279352
created: 1652755065976
---

Dendron 0.95 has sprouted  🌱

**Local Configuration:** We are releasing an early build of Config Overrides, which allows a local configuration to override values in the default configuration. This lets you use your own settings and vaults within a shared team workspace.

- More information here about [[local configurations|dendron://dendron.dendron-site/dendron.topic.local-config-override]]

**Custom Themes:** You can now customize the style of your sites published with Dendron. Step right up, bring your own custom CSS theme, and be amazed with how good your knowledge can look!

- Learn more about [[custom themes|dendron://dendron.dendron-site/dendron.topic.theme.publish.md]]

**Initialization Speed-Up:** But wait, there's more: less waiting! This release drastically improves workspace initialization speed (10x faster for large workspaces 🚀 ).

## Highlights
- feat(chore): preview support for local configuration overrides
- feat(publish): custom theme support for publishing 
- enhance(workspace): speed up workspace initialization (up to 10x speed up of workspace initialization)

## Everything Else
- feat(views): allow customization of tree view display and sorting behavior
- enhance(views): set `full graph` as default
- enhance(views): display workspace information in full graph view
- enhance(workspace): new user tutorials
- fix(publish): published images missing leading forward slashes

## Community

### General Updates
**Self Contained Vaults:**  [Self contained vaults](https://blog.dendron.so/notes/g98s3m6jft4gnb546y7i4xg/) make it easier to sync and share your notes with others. They are backwards compatible with existing vaults which means you can experiment with them without breaking your current flow. Starting next week, we will be flipping the defaults so that newly created vaults will be self contained by default. If you would like to preserve the current behavior, you can manually set [[dendron.enableSelfContainedVaultWorkspace|dendron://dendron.dendron-site/dendron.ref.config.vscode-config#dendronenableselfcontainedvaultworkspace]] to false

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐  `kzilla#8818` shared a custom trait for [creating a monthly journal](https://discord.com/channels/717965437182410783/742532267058004098/969247847365107762)
- ⭐  `kfischer_okarin#2663` shared a link to [an Atom feed of changed files in their digital garden](https://kfischer-okarin.github.io/digital-garden/feed.xml): _"I wrote a little [ruby script](https://github.com/kfischer-okarin/digital-garden/blob/publish/build_rss_feed.rb) to generate an Atom feed with entries for each changed file in my most recent commits. And I also wrote a little [rough explanation](https://kfischer-okarin.github.io/digital-garden/notes/t1sez74d9glnkg06z2ffli7/) in my digital garden about it... "_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.05.17]]

### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: TBD
    - Description: TBD
    - Next: [Fri, May 27, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Jun 01, 09:00 AM PST / 17:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Jun 07, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
    
### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Tika](https://github.com/SR--) `@Tika#9526`
  - #role.horticulturalist
  - [typo](https://github.com/dendronhq/dendron-blog/pull/22)
  - [fixed the language](https://github.com/dendronhq/dendron-blog/pull/23#pullrequestreview-966870394)
  - [Fix alignment on published notes in the children section](https://github.com/dendronhq/dendron/issues/2921)

- [lexthanthree](https://github.com/lexthanthree) `@alexis<3#7889`
  - [Ordered list nesting behaves unexpectedly](https://github.com/dendronhq/dendron/issues/2927)

#### Surveyors

The following community members provided feedback in the Dendron user survey:

- `@NorbertK#2895`

## Changelog
![[changelog#0950,1:#0940]]