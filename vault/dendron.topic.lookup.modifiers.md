---
id: ad270a7d-2aed-4273-8319-eb6536e38b29
title: Modifiers
desc: ''
updated: 1629793478562
created: 1604883459208
---

Modifiers allow you to change the behavior of lookup.

You can toggle a modifier by clicking on the respective modifier icons in the lookup bar or passing custom arguments to `dendron.lookupNote` when defining a custom keyboard shortcut in `keybindings.json`

## Overview

Here is a list of modifiers that are available for lookup:
- filter
- selection
- note
- split
- effect
- other

## Filter modifier

### directChildOnly

<svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/></svg>

#### Description

By default, unless you are at the root of your workspace, Dendron performs a fuzzy search of all notes that match your current hierarchy prefix.

This is useful to see your entire sub-tree in one glance but can be overwhelming if you have a lot of notes.

The `directChildOnly` filter is a toggle that limits lookup depth to one level deeper than the current value. It will also filter out [[stub notes|dendron.concepts#stubs]].

This filter is useful when exploring notes one level of depth at a time.

#### Enabling `directChildOnly` filter

There are two ways to enable this filter:
1. Toggle the <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/></svg> icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

```json
/* in keybindings.json. 
 * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
 */ 
[
  ...
  {
    "key": "{desired keybinding}",
    "command": "dendron.lookupNote",
    "args": {
      "filterMiddleWare": ["directChildOnly"]
    }
  },
  ...
]
```

#### Demonstration
<!-- TODO: update screenshot and recording! -->

<a href="https://www.loom.com/share/45b49b53bf324aeebe387d2ba9515d94"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/45b49b53bf324aeebe387d2ba9515d94-with-play.gif"> </a>

## selectionType

The `selectionType` modifiers determine the behavior of selected text in the active editor when creating a new note using lookup.

The default `selectionType` set by lookup is `selectionExtract`.

There are currently two types that you can choose: `selectionExtract` and `selection2link`. You can only apply one at a time.

### selectionExtract

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"/></svg>

#### Description

If the `selectionExtract` modifier is on, selection in the active text editor will be extracted to be included in the body of the newly created note.

The selected text will be removed from the active text editor and used to fill the initial body of the new note.

If the source of this selection is a non-Dendron file, the selection will not be removed from the source, but will still use it to prefill the new note.

#### Enabling `selectionExtract` modifier

There are three ways to enable `selectionExtract`:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"/></svg> icon to enable.
1. Configure default lookup selection type as below:

    ```yaml
    <!-- in dendron.yml -->
      ...
      lookup:
        note:
          selectionType: selectionExtract
      ...
    ```
3. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "selectionType": "selectionExtract"
        }
      },
      ...
    ]
    ```

### selection2link

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.4 3h3.085a3.4 3.4 0 0 1 3.4 3.4v.205A3.4 3.4 0 0 1 7.485 10H7V9h.485A2.4 2.4 0 0 0 9.88 6.61V6.4A2.4 2.4 0 0 0 7.49 4H4.4A2.4 2.4 0 0 0 2 6.4v.205A2.394 2.394 0 0 0 4 8.96v1a3.4 3.4 0 0 1-3-3.35V6.4A3.405 3.405 0 0 1 4.4 3zM12 7.04v-1a3.4 3.4 0 0 1 3 3.36v.205A3.405 3.405 0 0 1 11.605 13h-3.09A3.4 3.4 0 0 1 5.12 9.61V9.4A3.4 3.4 0 0 1 8.515 6H9v1h-.485A2.4 2.4 0 0 0 6.12 9.4v.205A2.4 2.4 0 0 0 8.515 12h3.09A2.4 2.4 0 0 0 14 9.61V9.4a2.394 2.394 0 0 0-2-2.36z"/></svg>

#### Description

If the `selection2link` modifier is on, selection in the active text editor will be used to create the note path.

The note path will be created with the following pattern: 

`{current-path}.{slug-of-selection}`

A [slug](https://stackoverflow.com/questions/19335215/what-is-a-slug) is the human readable portion of an url

#### Enabling `selection2link` modifier

There are three ways to enable `selectionExtract`:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.4 3h3.085a3.4 3.4 0 0 1 3.4 3.4v.205A3.4 3.4 0 0 1 7.485 10H7V9h.485A2.4 2.4 0 0 0 9.88 6.61V6.4A2.4 2.4 0 0 0 7.49 4H4.4A2.4 2.4 0 0 0 2 6.4v.205A2.394 2.394 0 0 0 4 8.96v1a3.4 3.4 0 0 1-3-3.35V6.4A3.405 3.405 0 0 1 4.4 3zM12 7.04v-1a3.4 3.4 0 0 1 3 3.36v.205A3.405 3.405 0 0 1 11.605 13h-3.09A3.4 3.4 0 0 1 5.12 9.61V9.4A3.4 3.4 0 0 1 8.515 6H9v1h-.485A2.4 2.4 0 0 0 6.12 9.4v.205A2.4 2.4 0 0 0 8.515 12h3.09A2.4 2.4 0 0 0 14 9.61V9.4a2.394 2.394 0 0 0-2-2.36z"/></svg> icon to enable.
1. Configure default lookup selection type as below:

    ```yaml
    # in dendron.yml
      ...
      lookup:
        note:
          selectionType: selection2link
      ...
    ```
3. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "selectionType": "selection2link"
        }
      },
      ...
    ]
    ```

#### Demonstration

<a href="https://www.loom.com/share/abaa8083d93f4192aa480f1acef1a8b7"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/abaa8083d93f4192aa480f1acef1a8b7-with-play.gif"> </a>

## noteType

The note type modifiers let you modify the note path in a special way.

There are two kinds of note type modifiers: `journal` and `scratch`. You can only select one at a time.

### journal

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z"/></svg>

#### Description

If the `journal` modifier is on, the lookup note path will be determined by the `journal` configuration in `dendron.yml`.

You can read more about the journal note [[here|dendron.topic.special-notes#journal-note]]

#### Enabling `journal` modifier

There are two ways to enable the `journal` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z"/></svg> icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "noteType": "journal"
        }
      },
      ...
    ]
    ``` 

### scratch

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"/></svg>

#### Description

If the `scratch` modifier is on, the lookup note path will be determined by the `scratch` configuration in `dendron.yml`.

You can read more about the scratch note [[here|dendron.topic.special-notes#scratch-note]]

#### Enabling `scratch` modifier

There are two ways to enable the `scratch` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 1.1l3.4 3.5.1.4v2h-1V6H8V2H3v11h4v1H2.5l-.5-.5v-12l.5-.5h6.7l.3.1zM9 2v3h2.9L9 2zm4 14h-1v-3H9v-1h3V9h1v3h3v1h-3v3z"/></svg>
icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "noteType": "scratch"
        }
      },
      ...
    ]

## splitType

This modifier type allows you to select which column of the editor you want the lookup result to be opened.

### horizontal

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zM8 13H3V2h5v11zm6 0H9V2h5v11z"/></svg>

#### Description

If the `horizontal` modifier is on, the result of the lookup will be opened in the column directly right of the active editor.

This is a _horizontal split_.

This will work for both existing notes and creating new notes.

#### Enabling the `horizontal` modifier

There are two ways to enable the `horizontal` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M14 1H3L2 2v11l1 1h11l1-1V2l-1-1zM8 13H3V2h5v11zm6 0H9V2h5v11z"/></svg> icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "splitType": "horizontal"
        }
      },
      ...
    ]

#### Demonstration

<a href="https://www.loom.com/share/814bccbdec384cf094e040f1cc6eebe9"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/814bccbdec384cf094e040f1cc6eebe9-with-play.gif"> </a>

## effectType

Effect type modifiers are a collection of modifiers that are not covered by the aforementioned modifier types.

There are currently three effect type modifiers:
`multiSelect`, `copyNoteLink` and `vaultSelectionMode`.
All three of these modifiers can work in any combination.

### multiSelect

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg>

#### Description

If the `multiSelect` modifier is on, you can select multiple items in the lookup bar. This lets you open multiple notes at once.

#### Enabling `multiSelect` modifier

There are two ways to enable the `multiSelect` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg>
icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "multiSelect": true
        }
      },
      ...
    ]

#### Demonstration

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/913ff5490ba9445787ff1063be749658" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### copyNoteLink

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.992H4v-9h8v2h1v-2.5l-.5-.5H11v-1h-1a2 2 0 0 0-4 0H4.94v1H3.5l-.5.5v10l.5.5H7v-1zm0-11.2a1 1 0 0 1 .8-.8 1 1 0 0 1 .58.06.94.94 0 0 1 .45.36 1 1 0 1 1-1.75.94 1 1 0 0 1-.08-.56zm7.08 9.46L13 13.342v-5.35h-1v5.34l-1.08-1.08-.71.71 1.94 1.93h.71l1.93-1.93-.71-.71zm-5.92-4.16h.71l1.93 1.93-.71.71-1.08-1.08v5.34h-1v-5.35l-1.08 1.09-.71-.71 1.94-1.93z"/></svg>

#### Description

If the `copyNoteLink` modifier is on, link(s) to the result of the lookup will be copied into your clipboard once the lookup has been executed.

If combined with the `multiSelect` modifier, you can copy multiple links at once.

This behavior is triggered after the lookup has been complete, so it will also work for newly created notes.

#### Enabling `copyNoteLink` modifier

There are two ways to enable the `copyNoteLink` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.992H4v-9h8v2h1v-2.5l-.5-.5H11v-1h-1a2 2 0 0 0-4 0H4.94v1H3.5l-.5.5v10l.5.5H7v-1zm0-11.2a1 1 0 0 1 .8-.8 1 1 0 0 1 .58.06.94.94 0 0 1 .45.36 1 1 0 1 1-1.75.94 1 1 0 0 1-.08-.56zm7.08 9.46L13 13.342v-5.35h-1v5.34l-1.08-1.08-.71.71 1.94 1.93h.71l1.93-1.93-.71-.71zm-5.92-4.16h.71l1.93 1.93-.71.71-1.08-1.08v5.34h-1v-5.35l-1.08 1.09-.71-.71 1.94-1.93z"/></svg> icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "copyNoteLink": true
        }
      },
      ...
    ]

### vaultSelectionMode

<svg width="48" height="48" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61 3l5.74 1.53L15 5v6.74l-.37.48-6.13 1.69-6.14-1.69-.36-.48V5l.61-.47L8.34 3h.27zm-.09 1l-4 1 .55.2 3.43.9 3-.81.95-.29-3.93-1zM3 11.36l5 1.37V7L3 5.66v5.7zM9 7v5.73l5-1.37V5.63l-2.02.553V8.75l-1 .26V6.457L9 7z"/></svg>

#### Description

The `vaultSelectionMode` modifier is a multimode modifier that determines how lookup should select vaults when creating new notes.

This mode is disabled by default, and is only configurable if `lookupConfirmVaultOnCreate` is set to true in `dendron.yml`

```yaml
# in dendron.yml
  ...
  lookupConfirmVaultOnCreate: true
  ...
```

Once it's visible, you can choose between `smart` mode and `alwaysPrompt` mode.

`smart` mode will try to suggest which vault should be used using the context of the current note / active editor state.

`alwaysPrompt` mode will always prompt before creating a new note.

#### Enabling `vaultSelectionMode` modifier

There are two ways to enable the `vaultSelectionMode` modifier:
1. Toggle the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.61 3l5.74 1.53L15 5v6.74l-.37.48-6.13 1.69-6.14-1.69-.36-.48V5l.61-.47L8.34 3h.27zm-.09 1l-4 1 .55.2 3.43.9 3-.81.95-.29-3.93-1zM3 11.36l5 1.37V7L3 5.66v5.7zM9 7v5.73l5-1.37V5.63l-2.02.553V8.75l-1 .26V6.457L9 7z"/></svg> icon to enable.
1. Pass it as an argument to a keyboard shortcut as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "vaultSelectionMode": 1 // 1: smart mode, 2: alwaysPrompt
        }
      },
      ...
    ]

## other

These modifiers are not exposed to a togglable button and only able to set programatically (by passing it as an argument).

### noConfirm

#### Description
If set, this will select the first option from lookup and execute immediately without confirmation.

#### Enabling `noConfirm` modifier.

`noConfirm` modifier is only configurable by passing it as an argument as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "noConfirm": true
        }
      },
      ...
    ]

### initialValue

#### Description

If set, it will be used as a custom initial value for lookup instead of the current active note's path.

#### Enabling `initialValue` modifier.

`initialValue` modifier is only conmfigurable by passing it as an argument as below:

    ```json
    /* in keybindings.json. 
    * Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
    */ 
    [
      ...
      {
        "key": "{desired keybinding}",
        "command": "dendron.lookupNote",
        "args": {
          "initialValue": "foo" 
        }
      },
      ...
    ]
    ```

## Examples

Below are some examples of keyboard shortcut settings. Use them as a starting point to customize various flavors of lookup to your liking.

Please refer to the [official documentation](https://code.visualstudio.com/docs/getstarted/keybindings) about setting key bindings for a full reference.

### Lookup with a frequently used initial value.

If you find yourself looking up a certain hierarchy a lot, it could be useful to set a keybinding that will automatically prefill the initial value with the frequently used hierarchy:

```json
[
  {
    ...
  },
  { // lookup `recipe.` hierarchy
    "key": "alt+l r",
    "command": "dendron.lookupNote",
    "args": {
      "initialValue": "recipe."
    }
  },
  { // lookup `meeting.{journal-format}.` hierarchy
    "key": "alt+l m",
    "command": "dendron.lookupNote",
    "args": {
      "initialValue": "meet",
      "noteType": "journal"
    }
  },
  {
    ...
  }
]
```

### Open a fixed note that you reference a lot to the side.

If you have a note that has a fixed hierarchy that you frequently look up while working on other notes, it is useful to have it open to the side (horizontal split) so that you can read it at the same time.

For example, one could have a single todo list that they use as a source of truth for everything that they need to do. (We are assuming this is the single file that holds all todo items.)

```json
[
  {
    ...
  },
  { // open the note `todo` to the side, without confirmation.
    "key": "alt+l 0",
    "command": "dendron.lookupNote",
    "args": {
      "initialValue": "todo",
      "splitType": "horizontal",
      "noConfirm": true
    }
  },
  {
    ...
  }
]
```

### Look up a note that you want to reference in another note, open it to the side.

When working on a note, you may want to reference another note by adding a link to it.
You may also want to read through that reference beforehand.

In this case, it may be useful to open the note you want to reference to the side, and also automatically copy the note link to the clipboard so that you can seamlessly go back to your original note and insert it.

```json
[
  {
    ...
  },
  { // look up note, then open it to the side. also copy selected note's link.
    "key": "alt+l .",
    "command": "dendron.lookupNote",
    "args": {
      "splitType": "horizontal",
      "copyNoteLink": true
    }
  },
  { // same as above, but with multi select.
    "key": "alt+l >",
    "command": "dendron.lookupNote",
    "args": {
      "splitType": "horizontal",
      "copyNoteLink": true,
      "multiSelect": true
    }
  },
  {
    ...
  }
]
```
