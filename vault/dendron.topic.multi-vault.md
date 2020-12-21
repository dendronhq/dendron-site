---
id: 24b176f1-685d-44e1-a1b0-1704b1a92ca0
title: Multi-vault
desc: ''
updated: 1608585213034
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


Documentation for lookup is still being written. For *up to date* docs, see the [[multi vault project page|dendron.roadmap.project.n.2020.multi-vault]].

## Topics

### Commands

((ref: [[dendron.topic.commands]]#vault add:#*))

((ref: [[dendron.topic.commands]]#vault remove:#*))

### Lookup

Lookup supports multiple vaults. When using lookup to find a note, each search result is labeled with which vault it belongs to. 

When creating a note in lookup, the currently opened note's vault is used as the vault for the new note.

#### Specify Vault Location when Creating a Note

With this set, you can pick the vault for new notes.  To enable,  add `lookupConfirmVaultOnCreate: true` in the dendron configuration. Instructions to do so below.

1. > Dendron: Configure (yaml)
2. add `lookupConfirmVaultOnCreate: true` so your configuration looks like the following:
```yml
version: 0
...
lookupConfirmVaultOnCreate: true
```

### Publishing

You can publish from a multi-vault enabled workspace if you are using [[dendron-11ty|dendron.pro.dendron-11ty]] to publish. 

We have added a new configuration, `duplicateNoteBehavior`, which [[controls|dendron.topic.publishingv2.configuration#duplicatenotebehavior-optional]] how Dendron handles duplicate notes across multiple vaults. 

### Note References

[[Note references|dendron.topic.refs]] are vault specific. When you make a reference, Dendron will include the note from the same note. 