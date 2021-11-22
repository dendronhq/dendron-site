---
id: VellOqHuzrUyzrWc0ajvg
title: 29 Contextual UI
desc: ''
updated: 1631615992440
created: 1631615714452
---

## Goals

Improve UI and feature discoverability for Dendron commands and workflows.

## Context

Almost all of of Dendron's user-initiated behaviors are performed through the command pallette via `Ctrl+Shift+P` / `Cmd+Shift+P`. While this is a very efficient UI and a first-class paradigm in VS Code, there are a lot of areas where being able to initiate commands without the command pallette can be fast and more familiar to users. Let's call this contextual UI, as most of these interaction points occur at the place where a user is trying to perform an interaction (i.e. within the editor, or within a pane).

There are a few benefits to this:
- improve discoverability of features
- reduce learning curve of adopting Dendron by adopting UI paradigms that are familiar to general users and developers in VS Code
- overall efficiency gains while using Dendron

This will also hopefully solve some user pain points around stale cache problems and reduce (and eventually eliminiate) the need for explicitly running the `Reload Index` command, which is not user-friendly.

## Proposal

To add additional contextual UI as entry points to commonly used Dendron commands. Some of the proposals below may not be possible with the current VS Code API - some more investigation into the feasibility of some of the proposals may be required.

_**Note**: This spec is evolving. We will likely continue to add additional items as we think of better ways to optimize the UI and as the VS Code API expands._

There are a few main places where we can add contextual UI
- Context Menus (Right Click on something such as a folder or file, or within the editor)
- [Code Actions](https://code.visualstudio.com/api/references/vscode-api#CodeActionProvider)


## Details

### Panes
_UI on the (typically) left hand side panel of VS Code_

#### Explorer Pane

##### Add/Remove Vault

Proposed UI: `Add Vault` and `Remove Vault` options in explorer pane by the context menu - Right Click > [Add|Remove] Vault.

Intuitively, people are used to modifying their folders via explorer. Right now, if someone removes a vault via explorer by removing folder, this will only update the code-workspace file and not update `dendron.yml`. This should also cover seeds behavior, although it's important to note that we're in the process of converging seed behavior with vault behavior.

Also see Lookup Section below for Standalone Vaults and how that may affect this feature.

##### Delete Note

Proposed UI: Right click on a note in explorer > delete.

This UI option already exists - however, if a user does this instead of using the `Delete Node` command, then the engine/cache may not properly update.

TODO: Seems like this already works? Can anyone verify engine and cache are properly updated on manual note deletion?

##### Create Note

Proposed UI: Right clicking > New File. Our engine should automatically be aware of the new note.

##### Rename Note

Proposed UI: Right click on existing Note > Rename File.

Engine automatically picks up this behavior. VS Code also has a feature for languages where it will prompt if you want to rename references as well. Can we achieve that same functionality here? Can we also make this a part of the built in vs-code `rename` context menu option? Requires a little more investigation as to how this works.

#### Tree View

- Rename Title by Right Clicking on an element

### Editor

#### Rename Header via F2

Proposed UI: Rename Note with `F2` semantics - in the same way we can rename a variable in code by clicking on the variable name and then hitting `F2`, then typing a new variable name, and all references are updated automatically - let's do the same with a header within a note.

Developer Notes for this feature:
- https://code.visualstudio.com/api/language-extensions/programmatic-language-features#rename-symbols
- https://code.visualstudio.com/docs/editor/refactoring

#### Code Errors and Warnings

Ideas TBD - but in what additional ways can we take advantage of code errors and warnings? See [this VS Code API Feature](https://code.visualstudio.com/api/language-extensions/programmatic-language-features#possible-actions-on-errors-or-warnings)

Some ideas:
- Broken Links or References - can we incorporate executing a doctor command from the code warning context menu, potentially as a [QuickFix Code Action](https://code.visualstudio.com/api/references/vscode-api#CodeActionKind)
- TBD

Some ways we are already doing this:
- Invalid Frontmatter

#### Refactor Extract

We can extract highlighted text using refactor extract to move it to a new note (TBD, API should be explored more in depth). This could be similar to the current functionality of creating a new note in 'Selection Extract' mode.

See [Refactor Extract](https://code.visualstudio.com/api/references/vscode-api#CodeActionKind)

## Tradeoffs

Potentially by adding more UI, we introduce more complexity to the interaction model of Dendron. Some of these entry points may be a bit harder to test reliably in automation.

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/1336
