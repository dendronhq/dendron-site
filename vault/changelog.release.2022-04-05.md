---
id: wog4e1u144pyb72bhvhsmju
title: 0.89
desc: ''
updated: 1649129980544
created: 1649129980544
---

Dendron 0.89 has sprouted  🌱

<!-- [[Release Highlights|dendron://dendron.handbook/area.product.sop.release-highlights]] -->

**Contributors:** Interested in contributing to the development of Dendron? We've added a CONTRIBUTING.md file so that you can find out how to get started shaping the future of Dendron!

- More information in the [Contributing Guide](https://github.com/dendronhq/dendron/blob/master/CONTRIBUTING.md)


## Highlights
- enhance: create CONTRIBUTING.md file 

## Everything Else
- feat(workspace): detect and fill missing default configs on extension upgrade
- fix(workspace): typo in dendron.yml
- fix(markdown): issue with angle brackets syntax in mermaid
- fix(workspace): updated timestamp not updating properly on save
- fix(workspace): copyNoteLink not getting updated title if note isn't saved
- fix(views): dendron-next-server to pass port-forwarded url

## Community

### General Updates

#### Blog post
[Growing Knowledge Bases from the Bottom Up](https://blog.dendron.so/notes/072ed07tikrhv6e4ilwcv2q/)

Curious how to go about adding new knowledge to Dendron? Read our newest blog post to find out how you can grow your knowledge base in **smart** and **simple** ways. 

#### Derek Sendoff

If you've checked out our Discord, you've probably come across Derek, our product evangelist. Derek is transitioning from his role as evangelist to community member and has the following words to share. If you have words you want to share, you can reply to  [Derek's sendoff thread in Discord](https://discord.com/channels/717965437182410783/892453144632627200/960908495614513182).

>
Hey! I'm Derek, also known as ScriptAutomate here in Discord and other social channels. I may have helped you with an onboarding session, answered some questions in an Office Hours, or helped with publishing your Dendron notes to the world. I wanted to take a moment to announce that I'm transitioning from a full-time team member to a community member, and to reflect on my time on the Dendron team.
>
I met Kevin Lin at a WriteTheDocs Meetup a few years ago, in Seattle, where he showed me an early version of Dendron. I was blown away. When Dendron was open sourced, and became a company, I wanted to jump in. I could see all the potential!
>
I was working on Salt Project, at VMware, before I joined Dendron. I worked in a unique role that was a combination of SRE and Technical Writer in open source projects. I love open source, and I knew that if I were to work somewhere else in a full-time role, it would need to be part of that world.
>
I wanted to help Dendron succeed, and share the power of it with others, so I took the leap and jumped in as a Dendron Evangelist last year.
>
Some big draws for me, about Dendron, were:
- Multi-vault: Being able to treat knowledge bases as plugins, especially with the initial version of Seeds. I'm looking forward to what vaults the community will continue to produce and create.
- Publishing: Publishing notes/documentation from multiple projects was a problem I ran into quite a bit with technical docs pipelines.
- Refactoring superpowers: Update all of your internal links, automatically, whenever you update your note names, hierarchies, and headers. This saves a lot of work whenever redesigning the structure of your notes.
- Asynchronous meetings, and everything written somewhere: The Dendron team runs in a unique fashion, avoiding meeting hell and making sure we document everything we are working on. This was a new way of working for me, and I loved it.
>
That's just a snapshot. Dendron reminded me of what pop was doing in Python, approaching development as plugin-oriented knowledge from the start. The idea of pulling down vaults of knowledge, related to your favorite subjects and tools, directly into your own personal knowledge base like lego pieces was something I hadn't seen before. I want to work toward making it a norm.
>
There are many things I'm interested in doing that include Dendron, and I want to make use of it wherever I can. I feel that I can serve Dendron well, as a community member, as I move forward to work on other content creation and open source projects (which will continue to include Dendron!) 🌱

### Starboard and TIL Highlights
> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `cameron#9185` shared a link to [a Google Docs update](http://workspaceupdates.googleblog.com/2022/03/compose-with-markdown-in-google-docs-on.html): _"Google Docs is getting in on the Markdown game"_

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

![[community.events.reading-series.2022.04.05]]

### Event Reminders
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Apr 06, 09:00 AM PDT / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Wed, Apr 09, 9:00 PM PDT / 04:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Apr 12, 8:30 AM PDT / 15:30 UTC](https://link.dendron.so/luma)
- **Greenhouse Talks:** Visit the [[Greenhouse Talks page|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Subject: Publishing workflows with Dendron.
    - Description: Interested speakers will present their workflows for publishing content, followed by an open discussion. The event will be recorded and later published online.
    
    This is a good opportunity to share tips and tricks about nifty things about your workflow, and ask for advice and input on challenges and pain-points in your current system.
    - Next: [Fri, Apr 29, 04:00 PM PDT / 23:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Grndstt](https://github.com/oolonek) `@grndstt#1420`
  - #role.bugcatcher
  - [npx dendron publish init not finishing](https://github.com/dendronhq/dendron/issues/2659)


- [Tika](https://github.com/SR--) `@Tika#9526`
  - [Journal sorting in Loookup does not work](https://github.com/dendronhq/dendron/issues/2661)


- [Nickolay Kondratyev](https://github.com/nickolay-kondratyev) `@nickolay-kond#9861`
  - [Lookup & Auto complete: lookup does not do full search after completion is used](https://github.com/dendronhq/dendron/issues/2666)
  - [Refactoring does not work across vaults](https://github.com/dendronhq/dendron/issues/2686)


- [Andrey Jef](https://github.com/andrey-jef) `@evanAndiez#9559`
  - [Rename Header command does not update header reference](https://github.com/dendronhq/dendron/issues/2674)


- [Saine](https://github.com/Mettcon) `@Saine#4136`
  - #role.bugcatcher
  - [Backlink points to wrong URL](https://github.com/dendronhq/dendron/issues/2675)


- [Slay](https://github.com/LamentConfiguration) `@Slaytanical#9737`
  - #role.bugcatcher
  - [Floating node dots in Note Graph](https://github.com/dendronhq/dendron/issues/2680)


- [IrishAndyB](https://github.com/irishandyb) `@IrishAndyB#8566`
  - #role.bugcatcher
  - [siteUrl is undefined on publish dev command · Issue #2685 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/2685)

## Changelog
![[changelog#0890,1:#0880]]
