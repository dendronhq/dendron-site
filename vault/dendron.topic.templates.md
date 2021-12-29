---
id: 861cbdf8-102e-4633-9933-1f3d74df53d2
title: Templates
desc: ""
updated: 1640804035120
created: 1602033087611
stub: false
---

## Summary

Templates are notes with pre-outlined content meant for reuse. Templates can either be inserted into an open note with `Dendron: Insert Note`, or automatically applied at note creation with [[dendron://dendron.dendron-site/dendron.topic.schema]]. These are meant to reduce friction in the creation of new content, providing standardized outlines to your notes.

## Details

The supported ways of using templates:

1. The easiest way is to have a templates.\* hierarchy in your vault and store commonly used note templates there. You can then re-use these templates in other notes by using the `Dendron: Insert Note` command in VS Code. By default, this hasn't been assigned a keybinding, but you can always map this to something easy to remember if you find yourself using a lot of templates.

<div style="position: relative; padding-bottom: 59.900166389351085%; height: 0;"><iframe src="https://www.loom.com/embed/7de6f7aa9f474a0c8555e7d66928c3ac" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

2. A more automatic way is by referencing templates in your schema and then having the template automatically applied when a new note of a particular type is created. This is described in more detail in the [[note on schemas|dendron://dendron.dendron-site/dendron.topic.schema#template]].

### Built-In Templates 🚧

You can also pick from a set of built-in templates that contain a set of commonly used note styles to help you get started. These templates can be pulled down with the seeds mechanism. The seed containing templates is called `dendron.templates`, substitute `dendron.dendron-site` for `dendron.templates` in the example below

![[dendron://dendron.dendron-site/dendron.topic.seed-bank.quickstart#adding-a-seed-to-an-existing-workspace]]

We are continually working to expand the types of templates available in the `dendron.template` seed.
