---
id: srajljj10V2dl19nCSFiC
title: Refactoring
desc: ''
updated: 1638900326417
created: 1638900089932
---

## Summary



### Refactor Hierarchy

- shortcuts: none

Update hierarchy using regular expressions.

This command works like `Rename Note` but on multiple notes. When using this command you will be prompted for three inputs:

- Scope: The set of notes you want to apply the operations to.
- Match text: Regular expression that matches text you want to capture for replacement.
- Replace text: Given what has been captured with the match text, what the replaced hierarchy should look like.
  - This will provide a preview of renames, allowing you to confirm that the change is as expected.

#### Scope

The command will first prompt you to decide the scope of the operation. 

- If you have a selection in your active editor that contains at least one wikilink, the command will prompt you if you want to use the notes in the selection as the scope of refactor.
- If you do not wish to limit the scope with selection, don't select anything in your active note. The behavior will default to the entire workspace and you will not be asked to determine the scope of refactor.

#### Match text

This text will be used to match and capture the parts of each note's hierarchy within the scope. If you leave this blank, the command will match and capture the entire hierarchy.

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
The first and second capture group `(dendron)` and `(.*)` will later be accessible in the `Replace text` prompt as `$1` and `$2` respectively.

See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to learn more about the regular expressions you can use to match and capture parts of your hierarchy.

#### Replace text

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

#### Refactor Preview

After running the command, you will be taken to a preview that shows all files that will be affected. You will be given an option in a dropdown to either proceed with the refactor or cancel the operation.

- NOTE: Dendron will warn you if refactoring will overwrite existing files. You will need to either change your `replace text` or move the affected files before Dendron will perform a refactor.

