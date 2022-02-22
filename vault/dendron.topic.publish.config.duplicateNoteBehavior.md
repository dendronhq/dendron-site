---
id: qFX0OoWP5U7yD6NWPeEin
title: duplicateNoteBehavior
desc: 'Set the strategy to handle duplicate notes in a multi-vault workspace.'
updated: 1645178867556
created: 1645178733890
---

- type: `object`
- default: N/A
- required: `false`

## Description
{{fm.desc}}

Currently, only the `useVault` action is allowed.

It takes a list of vault names as payload. When a duplicate is found, Dendron will go through the provided list sequentially and resolve to the first vault that matches.

Note that this is done automatically when you run the [[Vault Add|dendron.ref.commands#vault-add]] command.

## Example
> If a duplicate note is found, try resolving them in `vault1` first, then followed by `vault2` and then finally `vault3`.

```yml
publishing: 
  duplicateNoteBehavior: # if a duplcate note is found,
    action: useVault
    payload: # try resolving them in this order of vault match
      - vault1
      - vault2
      - vault3
```
