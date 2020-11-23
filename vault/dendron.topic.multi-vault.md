---
id: 24b176f1-685d-44e1-a1b0-1704b1a92ca0
title: Multi-vault
desc: ''
updated: 1606145608619
created: 1605630383515
---

# Multi Vault

Multi vault lets you create multiple vaults for a given workspace. Each vault is a folder that can contain any number of hierarchies. 

## Use Cases
- for **sensitive notes**, multi-vault enables local only vaults vs vaults that can are synced on file sharing services like dropbox 
- for **modularizing knowledge**, multi-vault enables users to mix and match existing vaults depending on context
- for **federating and curating knowledge**, multi-vault enables users to publish/subscribe to public vaults using protocols like `git`
- for **access control**, multi-vault lets users configure specific vaults to be **private** which turns off publication and sharing of any notes inside said vault


## Quickstart

TBD

## Topics

### Commands

((ref: [[dendron.topic.commands]]#vault add:#*))

((ref: [[dendron.topic.commands]]#vault remove:#*))

### Lookup

Lookup supports multiple vaults. When using lookup to find a note, each
search result is labeled with which vault it belongs to. When creating a note
in lookup, the currently opened note's vault is used as the vault for the new
note.