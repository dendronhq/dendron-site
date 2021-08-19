---
id: fYU3mSfr096DYui0O2cRp
title: Release Notes (version 0.55)
desc: ''
updated: 1629239141602
created: 1629234795602
---

Dendron 0.55 has sprouted  🌱

### Highlights
- workspace: addition **Insert Note Index** command to quickly create index notes ([[docs|dendron.release.changelog#insert-note-index-command]])
- workspace: autocomplete and validation for `dendron.yml` ([[docs|dendron.release.changelog#validation-and-autocomplete-for-dendronyml]])
- views: calendar view is now generally available ([[docs|dendron.ref.web-ui#calendar-view]])
- tags: set custom colors 
- tags: colored tags now show up decorated in tree view 
- pods: markdown export will now export notes with leading slash
- pods: markdown publish pod will can resolve `siteUrl` 
- lots of bug fixes

### Next(js) Publishing (preview)

Excited to announce that Dendron's new publishing experience using NextJS and React is now available in developer preview. You can get a feel for the new web client at https://wiki-next.dendron.so. 

Some features of note:
- even though this is now a React app, all pages are still statically generated which means you still get full SEO benefits 
- after the first load, all links are pre-fetched and loaded client side which which results in instant page transitions :rocket:
- the lookup for the web client uses the same lookup that exists in the desktop application
- the web client is a vanilla nextjs app with some dendron defaults - this means you will be able to customize it like you would a regular nextjs/react app
- the frontend for the web client re-uses the same code that we use internally for the web ui which means published pages will look near identical online and inside your workspace

You can find setup instructions [here](https://wiki.dendron.so/notes/PgwAXFfotfgpFVqHQRlBl.html)
Details and rationale behind this change is [here](https://wiki.dendron.so/notes/nB75cmdPhL7CTOATG6wpT.html)

We've created a github discussion thread for comments about the new web client [here](https://github.com/dendronhq/dendron/discussions/1145)

If you'd like to help us work on this, you can find an (incomplete) list of mvp milestone items [here](https://wiki.dendron.so/notes/eQ5w4eqHrf4m1peq.html#mvp-milestones). Ping me on [discord](https://discord.gg/AE3NRw9) `@kevins8#0590 ` if you do and I'll make sure to create a corresponding github issue as well as provide more context.

### Community

#### CROP Issues
- [x] [Create Index Note](https://github.com/dendronhq/dendron/issues/603)
- WIP: [References: Support reference to an explicit single block · Issue #1131 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1131)

#### Office Hours

You can find notes from our latest office hours [[here|dendron.community.office-hours.2021.08.15]]

#### Thank You's

A big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release :man_farmer: :woman_farmer: 
You can see an overview of all roles [[here|dendron.community.roles]]

- @Belesiu#4701
  - #dendron.bugcatcher
  - preview v2 not opening links to external files
- [Chris Na](https://github.com/buxel) @Buxel#7181 
  - [guide on publishing to azure static pages](https://github.com/dendronhq/dendron-site/pull/160)
- [Derek Ardolf](https://github.com/ScriptAutomate) @ScriptAutomate#6833 @icanteven#0264 
  - make license clear on the dendron-site
- [Jack](https://github.com/imalightbulb) @I'm a lightbulb#6986
  - rfc for spaced repetition
- [Bassmann](https://github.com/Bassmann) @Bassmann#5300 
  - issue with  schema in template seed
  - [lookup with `lookuupOnConfirmVault` not working](https://github.com/dendronhq/dendron/pull/1150)
- [Denis Di Fazio](https://github.com/denisdifazio) @denisdifazio#6427 
  - #dendron.bugcatcher
  - [No backlink from frontmatter tags · Issue #1143 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1143)
- [craSH](https://github.com/craSH) craSH#0159
  - #dendron.horticulturalist
  - [Add support for Linux/Wayland with wl-paste by craSH · Pull Request #1 · dendronhq/dendron-paste-image](https://github.com/dendronhq/dendron-paste-image/pull/1)
- [r-neal-kelly](https://github.com/r-neal-kelly)
  - #dendron.bugcatcher
  - [Faulty CSS Classes Disabling Reference Links · Issue #1148 · dendronhq/dendron](https://github.com/dendronhq/dendron/issues/1148)

### Changelog
![[dendron.release.changelog#055,1:#054]]

