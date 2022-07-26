---
id: mmi3gcxq9m0kz6ozocbqhok
title: Insert Note Link
desc: ''
updated: 1658831418732
created: 1658831128582
---

Insert the note link into the current document using lookup.

There are two modifiers that can be passed into this command:

1. `multiSelect`
1. `aliasMode`

#### multiSelect

This modifier enables the multi-select mode.
With multi-select enabled, you can select all the notes you want the links to be inserted.

This can be toggled on by clicking on the <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M3 3v10h10V3H3zm9 9H4V4h8v8z"/></svg> button, or setting `multiSelect: true` in `dendron.yml` as below:

```yaml
---
insertNoteLink:
  multiSelect: true
  ...
---
```

You can also pass it as a command argument through a custom keybinding as below:

```json
/* in keybindings.json.
* Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
*/
[
  ...
  {
    "key": "{desired keybinding}",
    "command": "dendron.insertNoteLink",
    "args": {
      "multiSelect": true
    }
  },
  ...
]
```

#### aliasMode

This modifier enables different alias modes.

Here is the list of available alias modes:

1. `snippet`: Inserted note link resolves into a VS Code snippet string
1. `selection`: Extracts the selection of the active note and use it as the alias.
1. `title`: Use the note title of the linked note as alias.
1. `prompt`: Open an input box that will prompt for an input for the alias.
1. `none`: Does not add alias. (default)

You can override the default alias mode in `dendron.yml` as below:

```yaml
// dendron.yml
insertNoteLink:
  aliasMode: "snippet" // choose one from the list
```

You can also pass it as a command argument through a custom keybinding as below:

```json
/* in keybindings.json.
* Use `Preference: Open Keyboard Shortcuts (JSON)` to open.
*/
[
  ...
  {
    "key": "{desired keybinding}",
    "command": "dendron.insertNoteLink",
    "args": {
      "aliasMode": "snippet" // choose one from the list
    }
  },
  ...
]
```

##### snippet

Inserted note link will resolve into a [VS Code snippet](https://code.visualstudio.com/docs/editor/userdefinedsnippets) in the form of

`[[{$1: alias}|note-name]]$0`

If multi-select is enabled, each subsequent alias field will be available as separate tabstops like so:

```
[[{$1: alias}|note1]]
[[{$2: alias}|note1]]
[[{$3: alias}|note1]]
[[{$4: alias}|note1]]
[[{$5: alias}|note1]]
...
[[{$n: alias}|note1]]$0
```

##### selection

Selection present in the active editor will be extracted and used as the alias.

The original selection will be replaced by the link inserted.

If multi-select is enabled, all inserted note links will have identical aliases.

##### title

The title of the note that is being linked is used as the link's alais.

##### prompt

An input box will be prompted that will let you type in the desired alias.

If multi-select is enabled, you will be prompted for each of the note links you want to insert.

##### none

No alias will be used for the inserted note link(s).
