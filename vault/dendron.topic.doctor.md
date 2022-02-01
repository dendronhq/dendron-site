---
id: ZeC74FYVECsf9bpyngVMU
title: Doctor
desc: ""
updated: 1643352249329
created: 1640418184682
---

## Summary

The doctor family of commands will automatically fix various issues with Dendron

## Details

- Doctor performs it's actions on **_the entire workspace_** by default
- You can toggle this behavior with the `Change Scope` button on the top right corner of panel so that it runs **_only on the active open document_**.
- This requires you to have a note open and in focus before running the doctor command.

## Commands

### fixFrontmatter

- Fixes notes that are missing the frontmatter, or that have broken frontmatter.
- Setup a `docs` folder if it doesn't exist. Required if you want to [[publish|dendron.topic.publish]] your notes

<a href="https://www.loom.com/share/bd045f708f8e474193de8e3de0dc820f"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/bd045f708f8e474193de8e3de0dc820f-with-play.gif"> </a>

### h1ToTitle

- Remove initial `h1` header and use it to replace contents of `title` field in frontmatter

### h1ToH2

- Convert all initial `h1` header to `h2` header

### removeStubs

- Remove all stub docs

### createMissingLinkedNotes

- Create notes that do not exist yet but has a wikilink to it.
- A preview pane will appear with the notes that will be created before proceeding.
- In a multi-vault workspace, wikilinks that do not specify a vault prefix will be omitted from the candidates.
  - In a workspace that has 2 vaults named `foo` and `bar`, the wikilink `[[missing-note]]` will not be a candidate for missing note creation with this command.
  - However, `[[dendron://foo/missing-note]]` and / or `[[dendron://bar/missing-note]]` will be recognized as a missing note and will be listed as candidates.

### findBrokenLinks

Similar to [[createMissingLinkedNotes|dendron.topic.doctor#createmissinglinkednotes]]: find all broken links (that have a vault prefix). This does note create new notes.

- Command: `Dendron: Doctor`
- Option: `findBrokenLinks`

This simply lists all broken links in the scope.

### findIncompatibleExtensions

- Detects if the user has enabled extensions that are known to be incompatible when used with Dendron concurrently, and provides a guide on how to fix the issue.
- A full list of incompatible extensions is listed in [[dendron.guides.troubleshooting.incompatible-extensions]]

### regenerateNoteId

Regenerates the IDs of your notes.

- Command: `Dendron: Doctor`
- Option: `regenerateNoteId`

If you publish your notes, this **will break the published links to your notes.**

To change the scope of using this command (single note vs. workspace), remember to follow the notice in [[Dendron Doctor Details|dendron://dendron.dendron-site/dendron.topic.doctor#details]].

## CLI

Doctor commands are also available via the CLI. Note that not all doctor commands are available in the CLI
