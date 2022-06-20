---
id: 9zwkp44wnlaa8p8dpt4w8tq
title: 'Dendron: Refactor Hierarchy'
desc: Rename multiple notes using regular expressions.
updated: 1655739540902
created: 1655129668280
---

## Summary
{{fm.desc}}

## Keybindings
none

## Details

**{{fm.title}}** is a command that works like [[Dendron: Rename Note|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.rename-note]], but on multiple notes. To specify which note should be renamed, you will be prompted for three inputs:

- Scope: The set of notes you want to apply the regular expression to.
- Match text: Regular expression that matches text you want to capture for replacement.
- Replace text: Given what has been captured with the match text, what the replaced hierarchy should look like.
  - This will provide a preview of renames, allowing you to confirm that the change is as expected before actually executuing the rename operations.

### Scope

**{{fm.title}}** will first prompt you to decide the scope of the operation. 

- If you have a selection in your active editor that contains at least one wikilink, the command will prompt you if you want to use the notes in the selection as the scope of refactor.
- If you do not wish to limit the scope with selection, don't select anything in your active note. The behavior will default to the entire workspace and you will not be asked to determine the scope of refactor.

### Match text

This text will be used to match and capture the parts of note's hierarchy string for each note within the scope. If you leave this blank, the command will match and capture the entire hierarchy.

For example,

Given a set of notes:

```md
- dendron.foo
- dendron.fries
- dendron.bar
- dendron.egg
- dendron.tree
- topic.cooking
- topic.gardening
```

The match text `(dendron)\.(.*)` will match all notes under the `dendron.` hierarchy.

Notice the parentheses in the regular expression. These are capture groups.
The first and second capture group `(dendron)` and `(.*)` will later be accessible in the `Replace text` prompt as `$1` and `$2` respectively.

See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to learn more about the regular expressions you can use to match and capture parts of your hierarchy.

### Replace text

This text will be used to replace the hierarchy of the notes that matched with `match text`. If you omit the replace text, Dendron will prompt for one until you provide one or cancel the operation.

Continuing with the above example, if the replace text is `awesome.$2.$1`, the result of refactoring would be:

```md
- awesome.foo.dendron
- awesome.fries.dendron
- awesome.bar.dendron
- awesome.egg.dendron
- awesome.tree.dendron
- topic.cooking
- topic.gardening
```

Recall that part of our match text were capture groups. The first and second capture group is available here as `$1` and `$2` respectively.

### Refactor Preview

After providing the three inputs after running **{{fm.title}}**, Dendron will open a preview that shows all files that will be affected if you confirm. You will be given an option in a dropdown to either proceed with the refactor or cancel the operation.

- NOTE: Dendron will warn you if refactoring will overwrite existing files. You will need to either change your `replace text` or move the affected files before Dendron will perform a refactor. If the preview shows any overwrites, Dendron will not allow you to proceed.
