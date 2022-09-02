---
id: yddujnt9s4glcudcwczdobl
title: "Dendron: Create Journal Note"
desc: Create a journal note
updated: 1662097536778
created: 1661169220970
---

## Summary

{{fm.desc}}.

## Keybindings
- windows: `ctrl+shift+j`
- mac: `cmd+shift+j`

## Details

When the command is triggered, a lookup bar will appear with the query prefilled as per the [[journal configuration|dendron://dendron.dendron-site/dendron.ref.config.workspace#journal]].

> Note that the configuration namespace is shared with [[daily journal notes|dendron.topic.special-notes.daily-journal-note]].  
>The keys [[dailyDomain|dendron://dendron.dendron-site/dendron.ref.config.workspace#dailydomain]] and [[dailyVault|dendron://dendron.dendron-site/dendron.ref.config.workspace#dailyvault]] do not affect journal notes, and only control how [[daily journal notes|dendron.topic.special-notes.daily-journal-note]] are created.

As a default, it will be pre-filled with `{domain name}.journal.{year}.{month}.{day}`.

The behavior is identical to [[creating a note using lookup|dendron.topic.lookup.create]] with the [[journal note modifier|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers#journal]].

To learn more about journal notes, see [[dendron.topic.special-notes.journal-note]].