---
id: z2gv1b7yc986fv93lunx6rc
title: "Dendron: Create Scratch Note"
desc: Create a scratch note
updated: 1662715199264
created: 1661169226535
---

## Summary

{{fm.desc}}.
![[dendron://dendron.dendron-site/dendron.topic.special-notes.scratch-note#summary,1]]

## Keybindings
- windows: `ctrl+k s`
- mac: `cmd+k s`

## Details

When the command is triggered, a lookup bar will appear with the query prefilled as per the [[scratch configuration|dendron://dendron.dendron-site/dendron.ref.config.workspace#scratch]].

As a default, it will be pre-filled with `scratch.{year}.{month}.{day}.{HHmmss}` if you don't have any text selected in the note, or `scratch.{year}.{month}.{day}.{HHmmss}.{selected text}` if you do have any text selected.

The behavior is identical to [[creating a note using lookup|dendron.topic.lookup.create]] with the [[scratch note modifier|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#scratch]] and [[selection2link modifier|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#selection2link]] enabled.

To learn more about scratch notes, see: [[Scratch Note|dendron://dendron.dendron-site/dendron.topic.special-notes.scratch-note]]