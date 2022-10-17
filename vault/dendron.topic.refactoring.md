---
id: srajljj10V2dl19nCSFiC
title: Refactoring
desc: ""
updated: 1665988665715
created: 1638900089932
---

## Summary

Features that help update the structure of Dendron.

## Features

### Automatic Link Synchronization

-   With refactoring, you can organize your notes without breaking links that exists to the notes you are organizing.
-   When you are renaming a note, moving a note to another vault, refactoring an entire hierarchy, or even renaming / moving a header section of a note, refactor will ensure that all the affected link are updated accordingly.

### Reorganize knowledge at any scale

-   Refactor lets you reorganize your knowledge with a single command regardless of scale; You can refactor a header in a note, an entire note, or multiple notes.
-   Beyond notes, entire hierarchies can be refactored by leveraging the power of regular expression to match and replace parts of the hierarchy.

## Getting Started

### Refactoring headers

> See [[dendron.topic.refactoring.commands.move-header]] and [[dendron.topic.refactoring.commands.move-header]] for more information

1. Create a note called `foo` with the following content:

    ```md
    ## One

    -   Some content

    ## Two

    -   More content

    ### Let's go deeper

    -   Deep content
    ```

2. Create a note called `bar` with the following content:
    ```md
    [[foo#two]]
    ```
3. Go back to the note `foo`, place the cursor anywhere on the line where the header `Two` is
4. Run [[dendron.topic.refactoring.commands.rename-header]] and type `Second`
5. The header is now renamed to `Second`, and the link in the note `bar` is automatically updated to `[[foo#second]]`
6. Position the cursor again on the header `Second` and run [[dendron.topic.refactoring.commands.move-header]]
7. Type `baz` in the lookup bar.
8. A new note `baz` is created and the header `Second` is moved to this note along with the child header `Let's go deeper`
9. Notice that the link in the note `bar` has been updated to `[[baz#second]]`

### Refactoring notes

#### Renaming a note

> See [[dendron.topic.refactoring.commands.rename-note]] for more information

1. Create a note called `foo` with any content
2. Create another note that contains a link to `foo`
3. Go back to the note `foo` and run [[dendron.topic.refactoring.commands.rename-note]]
4. Type `baz` in the lookup bar.
5. The note `foo` is now renamed to `baz`, and the link in the note is also updated to `[[baz]]`

#### Moving a note or multiple notes

> See [[dendron.topic.refactoring.commands.move-note]] for more information

1. Create notes called `foo`, `bar`, and `baz` with any content
2. Create a new local vault by running [[Create New Vault|dendron://dendron.dendron-site/dendron.topic.vaults#create-new-vault]]
3. Create another note in any vault that links to any of these notes.
4. Run [[dendron.topic.refactoring.commands.move-note]] in the command palette
5. Select note(s) you want to move to the new vault and hit enter. Clicking the square icon in the lookup bar will enable multi-select.
6. You will be prompted to select the vault you want to move the selected note(s) to.
7. Notice the notes have been moved to the selected vault and links to those notes have also been updated.

#### Merge one note with another note

> See [[dendron.topic.refactoring.commands.merge-note]] for more information

1. Create notes called `source`, `dest`, with any content, and `ref` with wikilinks that point to `source`.
2. Open the note `source`.
3. Run [[dendron.topic.refactoring.commands.merge-note]] in the command palette
4. When prompted for the destination, select `dest`.
5. Notice that the note `source` is deleted, and the content of `source` is appended at the end of note `dest`.
6. Also note that the wikilinks in `ref` that used to point to `source` is now updated to point to the note `dest`.

### Refactoring an entire hierarchy

> See [[dendron.topic.refactoring.commands.refactor-hierarchy]] for more information

1. Create notes called `foo`, `foo.child`, and `foo.child.grandchildren` with any content.
2. Create another note that links to any of these notes.
3. Run [[dendron.topic.refactoring.commands.refactor-hierarchy]] fron the command palette.
4. You will be prompted to enter a match text. Type `foo` and hit enter.
5. You will be prompted again to enter a replace text. Type `bar` and hit enter.
6. A preview of all the affected notes will appear along with another prompt to confirm the changes.
7. Hitting enter will rename all notes as listed in the preview, and links to all affected notes are also updated.

### Children

-   [[Commands|dendron://dendron.dendron-site/dendron.topic.refactoring.commands]]: Refactoring Commands
