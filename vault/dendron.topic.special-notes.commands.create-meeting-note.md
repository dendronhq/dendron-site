---
id: 7q3wyp0dcvn2qhfnb4vdnlv
title: "Dendron: Create Meeting Note"
desc: Create a meeting note
updated: 1662097370235
created: 1659483968504
---

## Summary

{{fm.desc}}.
![[dendron://dendron.dendron-site/dendron.topic.special-notes.meeting-note#summary,1]]

## Keybindings
none

## Details

When you first run the command, a meeting note template and a meeting note schema will be created with the names `templates.meet`, and `dendron.meet.schema.yml`.

When the command is triggered, a lookup bar will appear with the query prefilled as `meet.{year}.{month}.{day}`.

Depending on your preference, you can add a separate name if you wish to track multiple meeting notes per day by their name by adding to the prefilled query like so: 

`meet.{year}.{month}.{day}.my-first-meeting`

or forgo the name and keep everything under the default note like so:

`meet.{year}.{month}.{day}`

To learn more about meeting notes, see [[Meeting Note|dendron://dendron.dendron-site/dendron.topic.special-notes.meeting-note]]