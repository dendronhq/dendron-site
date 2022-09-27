---
id: 9qwkfmnftzlj6f0oqi2wj35
title: 0.114
desc: ''
updated: 1664300851751
created: 1664203197858
---

Dendron 0.114 has sprouted  🌱
September 27, 2022

**Custom Sidebar Support**: You can now customize the contents of the menu in the published dendron sidebar. This gives you greater flexibility in what to showcase and lets you nest content from different hierarchies under a common category.

- More information: [[Sidebar|dendron://dendron.dendron-site/dendron.topic.publish.sidebar]]

## Highlights

- feat(publish): add configuration option for sidebar ([[docs|dendron://dendron.dendron-site/dendron.topic.publish.sidebar]])

## Everything Else

- enhance(publish): upgrade nextjs to [12.3.0](https://nextjs.org/blog/next-12-3) with 7x faster minification when building
- fix(publish): click into "empty area" on sidebar submenu item
- fix(views): make preview theme background color render correctly
- fix(workspace): Disallow note creation through go to note if filename is invalid
- fix(publish): display headings pleasantly when containing non-text content nodes
- fix(workspace): Update backlinks after engine updates
- fix(workspace): engine init with note candidates enabled

## Community

### General Updates


#### Updated Release Schedule

We're changing our release schedule starting October. Instead of weekly, we will release every two weeks. 
An early preview of changes will be available to [[supporters|dendron://dendron.dendron-site/dendron.contribute.financial]] on a weekly basis. 

Dendron has been on a weekly release cycle since our inception and we've shipped hundreds of features within the last two years under this model.
This has allowed us to iterate quickly based on community feedback but it also came with some downsides - many of you have told us that it was becoming hard to keep up with all the changes, it made it hard to work on bigger issues, and sometimes, our releases would break things.

Dendron is now approaching 100k installs and has become an essential part of the daily workflow of thousands of developers. 
We want to ensure that you can always rely on Dendron to be available when you need it and at the same time, do some of the groundwork to address larger issues that many of you have been asking for for years.

Some projects we're working on: real-time performance on all operations (<100ms), a sqlite based backend, mobile support, and a managed publishing service. 


### A new blog post has sprouted

Many of you have asked us for more examples of how to take notes in Dendron. 

Our [[latest blog post|dendron://dendron.blog/blog.2022.09-27-cache-all-the-things]] goes over our recommended workflow for building a personal knowledge base of any size. 

Please let us know what you think and consider [subscribing](https://buttondown.email/dendron) to our blog to stay up to date on new posts!


**Greenhouse this Friday!**

We have a [[Greenhouse Talk|dendron://dendron.dendron-site/community.events.greenhouse]] this week! Come listen to Bob Doto (https://twitter.com/thehighpony), a published author and zettlekasten enthusiast, speak on 'Zettelkasten 101: Terminology and methods of keeping a slip-box' 

- [Greenhouse Talk](https://lu.ma/knu8uopf) (Fri, Sep 30, 09:00 AM PST / 16:00 UTC)

#### CROP Updates

##### CROP Shipped
A CROP is an issue that is submitted and voted on by the community. This week, we shipped the following CROP:
- [Rename note command doesn't update wikilinks to the renamed note if they are inside the renamed note](https://github.com/dendronhq/dendron/issues/1207) ships this week, submitted by `@foureyedsoul#0796`

A list of all current crops can be found on [github](https://github.com/orgs/dendronhq/projects/7#card-84287943)


### Starboard and TIL Highlights

> These are highlights from the [[Dendron Discord|dendron://dendron.dendron-site/community.discord.channels]] `#starboard` and `#today-i-learned` channels.

- ⭐ `Streetlamp#7680` shared a tip on writing code blocks where you can add the name of the language to make the code block follow that programming language's syntax and make the code block more readable. Shared his sample syntax here [link to message](https://discord.com/channels/717965437182410783/742532267058004098/1021298351997730897)
- 💡 `rlh1994#9754` shared his learning that not only you can embed wildcard notes using ![my.notes.starts.with.*] but this also supports heading references ![my.notes.starts.with.*#Section2]. 

### Dendron Reading Series

This week's entry in the [[Dendron Reading Series|dendron://dendron.dendron-site/community.events.reading-series]].

[[How I’m a Productive Programmer With a Memory of a Fruit Fly|dendron://dendron.dendron-site/community.events.reading-series.2022.09.27]]


### Event Reminders

- **Greenhouse Talks:** Visit the [[Greenhouse Talks|dendron://dendron.dendron-site/community.events.greenhouse]] for notes from previous sessions.
    - Next: [Fri, Sep 30, 09:00 AM PST / 16:00 UTC](https://link.dendron.so/luma)
    - [Greenhouse Talk Recordings - YouTube Playlist](https://link.dendron.so/greenhouse)
- **Office Hours:** Visit the [[Office Hours page|dendron://dendron.dendron-site/community.events.office-hours]] for notes from previous sessions.
    - Next: [Wed, Oct 05, 09:00 AM PST / 16:00 UTC](https://link.dendron.so/luma)
    - [Office Hour Recordings - YouTube Playlist](https://link.dendron.so/6yPa)
- **Community Teatime:** Drink tea, eat food, and hangout with the Dendron crew!
    - Next: [Thu, Sep 29, 11:00 AM PST / 18:00 UTC](https://link.dendron.so/luma)
- **New User Tuesdays:** Visit the [[New User Tuesdays page|dendron://dendron.dendron-site/community.events.new-user-tuesdays]] for notes from previous sessions.
    - Next: [Tue, Oct 18, 8:30 AM PST / 15:30 UTC](https://link.dendron.so/luma)

### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
Visit [[Discord Roles|dendron://dendron.dendron-site/community.discord.roles]] for more information.

- [Ryan Hill](https://github.com/rlh1994) `@rlh1994#9754`
  - [Unable to use ` type text in note title](https://github.com/dendronhq/dendron/issues/3557)

- [frstlvl](https://github.com/frstlvl)
  - #role.taxonomist
  - ["dendron" misspelled in "when" clause](https://github.com/dendronhq/dendron-site/pull/658)

- [Joe Peterson](https://github.com/jeep) `@jeep#0301`
  - #role.bugcatcher
  - [Email autolinks not working](https://github.com/dendronhq/dendron/issues/3558)
  
- [Vianney Stroebel](https://github.com/vibl)
  - #role.bugcatcher
  - [Clicking on any internal link in the doc site (apart from the TOC) reloads the page](https://github.com/dendronhq/dendron/issues/3570)
  
- [Tanamr](https://github.com/samuelxyz) `@Tanamr#3739`
  - [Task notes do not render correctly inside note references (in the preview)](https://github.com/dendronhq/dendron/issues/3578)

  
## Changelog
![[changelog#01140,1:#01130]]


