---
id: a3lvzn5hlmnatci49y2ltan
title: '0.90'
desc: ''
updated: 1649785582932
created: 1649716293159
---

Dendron 0.90 has sprouted  🌱

**Vault-Level URLs**: We're improving the experience with published vaults. Vaults can now be configured with their own URL. These URLs will be used when copying or exporting notes, replacing wikilinks with the correct URL for the vault. 

## Highlights
- feature(publish): support custom urls for vaults

## Everything Else
- enhance(publish): open published tree view links in new tab
- fix(workspace): error when adding a self contained vault inside a native workspace
- fix(publish): publish issues with latest version of nextjs due to swc module
- fix(workspace): preserve wikilink metadata on export 
- fix(workspace): typo "hierarchy", "should" 
- fix(workspace): consistent tree item sort order

## Community
### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- 💡 `cosMoAntonius#1450` shared a quote by Andy Warhol: _"They always say time changes things, but you actually have to change them yourself."_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.04.12]]

### Event Reminders
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Apr 12, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Apr 14, 11:00 AM PDT / 18:00 UTC](https://link.dendron.so/luma)
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

### Thank You's
A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Pablo Lion](https://github.com/PabloLION) `@Pablo LION#3433`
    - #role.horticulturalist
    - [fix: typo "hierarchy", "should"](https://github.com/dendronhq/dendron/pull/2699)

- [Dmytro Shapovalov](https://github.com/dmytro-shapovalov)
    - #role.taxonomist
    - [Mistake in documentation example regarding Folding in md](https://github.com/dendronhq/dendron/issues/2729)
    
- [lexthanthree](https://github.com/lexthanthree)
  - #role.taxonomist
  - [Dendron documentation has some hard to read diagrams](https://github.com/dendronhq/dendron/issues/2725)

- [Nickolay Kondratyev](https://github.com/nickolay-kondratyev) `@nickolay-kond#9861`
    - [Publishing: Images do not show up with simplest publishing technique](https://github.com/dendronhq/dendron/issues/2698)
    
- [Tika](https://github.com/SR--) `Tika#9526`
    - [Images in embedded notes do not render in Preview](https://github.com/dendronhq/dendron/issues/2702)
    
- [MrGlitchByte](https://github.com/MrGlitchByte)
    - #role.bugcatcher
    - [[Bug] Import Markdown pod Maximum call stack size exceeded](https://github.com/dendronhq/dendron/issues/2710)
    
- [Steven Fan](https://github.com/stevefan)
    - #role.bugcatcher
    - [siteUrl, assetPrefix aren't prepended to links on dendron publish export](https://github.com/dendronhq/dendron/issues/2726)
    
- [Ding Fan](https://github.com/Ding-Fan) `@rainmaker#7370`
    - ["Go to Note" show error "bad path"](https://github.com/dendronhq/dendron/issues/2717)

#### Surveyors

The following community members provided feedback in the Dendron user survey:

- `@dy#4526`


## Changelog
![[changelog#0900,1:#0890]]
