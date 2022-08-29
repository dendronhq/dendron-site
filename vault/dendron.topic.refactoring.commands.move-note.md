---
id: 98ywiw4211q9sx0v98lbo88
title: 'Dendron: Move Note'
desc: Move a note to another vault and update all backlinks to that note.
updated: 1661758274609
created: 1655129267874
---

> Dendron will not allow you to move a note if a note already exists in the destination.

> If you are looking to move a note within a hierarchy in one vault, or simply rename the note, use [[dendron.topic.refactoring.commands.rename-note]] instead.

## Summary
{{fm.desc}}

## Keybindings
none

## Details

**{{fm.title}}** is a command that lets you move a note between vaults when in a [[Multi-vault|dendron://dendron.dendron-site/dendron.topic.multi-vault]] workspace, and will also update all references in other notes of that note. This command can move several notes at once, too (i.e. a note and all their children)

1. Call **{{fm.title}}** from the command bar.
2. Type the note's title.
   1. (Optional, for moving multiple notes) Type the parent's note and click on the square icon on the right of the panel (see image below).
3. Select the new vault where you want to move the note(s) to.

![**{{fm.title}}**: Selecting several notes at once](https://org-dendron-public-assets.s3.amazonaws.com/images/move-multiple-notes.png))


### Moving a note using the file explorer
You can also select **{{fm.title}}** after right clicking on a note in the explorer to move that note. This will also update the backlinks as well.
