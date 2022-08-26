---
id: uz13dadm4umn3882awr1087
title: Journal Note
desc: 'Journal notes are self contained notes that are meant to track something over time.'
updated: 1661497410486
created: 1660898691081
---

## Summary

{{fm.desc}}

## Details

### Use Case
Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

### How are journal notes different from daily journal notes?

While [[daily journal notes|dendron.topic.special-notes.daily-journal-note]] are meant to be the general place to track your daily tasks and notes, journal notes are used for specific topics.

For instance, you may have a daily journal note to keep track of todo items that need to be taken care of each day, and have links your workout journals that live under `workout.YYYY.MM.DD`, and mood journals that live under `mood.YYYY.MM.DD`.

### Getting Started

![journal note](https://cdn.loom.com/sessions/thumbnails/3c3ddc1dc63547cea8bf186bec31f71b-with-play.gif)

To create a journal note, use the [[dendron.topic.special-notes.commands.create-journal-note]] command, or use lookup with the [[journal note modifier|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#journal]] enabled.

By default, Dendron will create the journal note with the following hierarchy `{domain}.journal.{y.MM.dd}`.
`{domain}` is the **domain** of the current active note.

You can change how journal notes are created by modifying configurations in the [[journal|dendron://dendron.dendron-site/dendron.ref.config.workspace#journal]] configuration namespace.