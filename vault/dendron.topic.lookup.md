---
id: a7c3a810-28c8-4b47-96a6-8156b1524af3
title: Lookup
desc: ''
updated: 1645930916585
created: 1595952505038
stub: false
---

To work with notes, Dendron uses  **lookups**. Lookups help you create, find, and organize your notes. You can watch the following video to see some of the things you can do with lookups.

<a href="https://www.loom.com/share/a409a621763548d395e48c9d4380cbe7"><img style="" src="https://cdn.loom.com/sessions/thumbnails/a409a621763548d395e48c9d4380cbe7-1600813345789-with-play.gif"> </a>

## Lookups
Dendron supports lookups by keywords separated by spaces/' ' without having to know the order where the keywords occur in the note. As example: `dendron rename` & `rename dendron` will both match note `dendron.dev.design.commands.rename`.

As mentioned in [[Details|dendron.topic.lookup#details]], the look up is accomplished through utilization of [fusejs](https://fusejs.io/). You can use [fusejs extended search](https://fusejs.io/examples.html#extended-search) syntax when looking up notes.  

For entries that have the same score, Dendron will sort results by their last updated time. Further info on lookup syntax can be found in [[dendron.topic.lookup.find]]

## Look up Auto Complete
Pressing `Tab` while having lookup view open will attempt to auto complete results. This is especially useful when dealing with hierarchies which adds on one level of hierarchy (from the highest matched result) at a time.

## Details

Behind the scenes, lookup uses [fusejs](https://fusejs.io/) to do fuzzy string matching based on the note hierarchy. You can see our parameters [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/fuse.ts#L31).

Scoring is explained [here](https://fusejs.io/concepts/scoring-theory.html).

You can see the pseudo code for how fusejs integrates with lookup [[here|pkg.plugin-core.t.lookup.ref.note-lookup]].

## Basics

- Note creation
- Note retrieval