---
id: 1b1aef8e-c9d5-42de-b850-d1b1467cf88b
title: '2020-10-19 Release Notes'
desc: ''
updated: 1603685766621
created: 1603123991664
---

# 2020-10-19 Release Notes (version 0.13)

Dendron 0.13 is here 🌱

It's been a few weeks since the last minor release. This iteration was mostly spent on our server migration as well as a series of quality of life improvements across Dendron's core features. You can find the details of all this in the highlights below. 

## Highlights
- move to the final phase of the [[server migration|dendron.roadmap.project.n.2020.server-migration]] 
    - Dendron server mode is now at feature parity with existing functionality 
    - the server migration is a complete re-write of Dendron's internal to go from a client to client (local) server model
    - this is pre-requisite for a bunch of upcoming features like [[multi vault support|dendron.roadmap.project.n.2020.multi-vault]], rich graphical interfaces, and realtime graph updates
    - server mode will be the default for all workspaces going forward
    - existing workspaces will be transparently migrated over after next week
- order of magnitude speed improvements (server mode only)
    - initializing large vaults
    - updating links through `Rename` and `Refactor` operations 
- better note references
    - note references can now be nested 
    - a reference to a header can be made by selecting any part of the header before running `Copy Note Ref`
- better timestamps (server mode only)
    - the `updated` timestamp on notes now updates on every save
    - timestamp will now print a human friendly label 
- improved publishing
    - dendron sites now support latex
    - dendron will generate a bad link report for all links that do not resolve when publishing
    - bad links will now resolve to a custom 404 link
    - you can define a custom site repository that will be used by publishing commands
- consolidated lookup
    - creating journal notes and scratch notes are now part of the `Lookup Command` instead of being separate commands (the old keyboard shortcuts still work - they now map to lookup commands with custom arguments)
    - lookup now accepts arguments that can be passed in via custom keyboard shortcuts
    - you can control the creation of special notes as well as note selection behavior from lookup

## Seeds

Aside from features, we've also launched two [[seeds|dendron.topic.seeds]]. Seeds are **open source dendron sites** that **consolidate reference material** about a **particular vertical**. Content from the catalogues is derived from existing open source content as well as manual user input. Your 🙏 is welcomed and encouraged. 

((ref: [[dendron.showcase]]#open pkm catalogue,1:#*))
((ref: [[dendron.showcase]]#open aws catalogue,1:#*))

## Sustainability

Finally, a bunch of you have asked if you can support Dendron financially. The answer is coming at the end of the month! Dendron will be coming out of **preview** in November, at which point we will launch our **Environmentalist Plan** 🌲. This is a monthly subscription to support the development of Dendron. **Environmentalist** will get a special badge on Discord, priority email/discord access to the development team, and stickers! More details on this soon.

## Thank You

Last and most of all, a big **thanks** to the following gardeners that brought up issues, contributions, and fixes to this release.
- [Britt](https://github.com/bs)
    - [silent log errors](https://github.com/dendronhq/dendron/issues/277)
    - various doc updates 
- [onwijsbegeerte](https://github.com/onwijsbegeerte)
    - [bad export pod placeholder text](https://github.com/dendronhq/dendron/issues/270)
- [agichim ](https://github.com/agichim)
    - [checkbox in preview doesn't render correctly](https://github.com/dendronhq/dendron/issues/269)
- [Emaro](https://github.com/Emaro)
    - [treeview empty in certain cases](https://github.com/dendronhq/dendron/issues/263)
- [robothor](https://github.com/robothor)
    - [issue refactoring with mixed case filenames](https://github.com/dendronhq/dendron/issues/250)


((ref: [[dendron.release.changelog]]#0.12.11,1))