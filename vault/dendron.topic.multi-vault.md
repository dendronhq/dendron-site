---
id: 24b176f1-685d-44e1-a1b0-1704b1a92ca0
title: Multi Vault
desc: ''
updated: 1614637478785
created: 1605630383515
---
## Summary

Multi vault lets you create multiple vaults for a given workspace. Each vault is a folder that can contain any number of hierarchies. 

## Use Cases

- for **sensitive notes**, multi-vault enables local only vaults vs vaults that can are synced on file sharing services like dropbox 
- for **modularizing knowledge**, multi-vault enables users to mix and match existing vaults depending on context
- for **federating and curating knowledge**, multi-vault enables users to publish/subscribe to public vaults using protocols like `git`
- for **access control**, multi-vault lets users configure specific vaults to be **private** which turns off publication and sharing of any notes inside said vault

## Quickstart

- TODO

## Concepts

![[dendron.concepts#workspace:#*]]
![[dendron.concepts#vaults:#*]]
![[dendron.concepts#hierarchies:#*]]
![[dendron.concepts#domain:#*]]

## Topics

### Commands

((ref:[[dendron.topic.commands]]#vault add:#*))

((ref:[[dendron.topic.commands]]#vault remove:#*))

### Lookup

Lookup supports multiple vaults. When using lookup to find a note, each search result is labeled with which vault it belongs to. 

When creating a note in lookup, the currently opened note's vault is used as the vault for the new note.

#### Specify Vault Location when Creating a Note

![[dendron.topic.config#lookupconfirmvaultoncreate:#*]]

To enable,  add `lookupConfirmVaultOnCreate: true` in the dendron configuration. Instructions to do so below.

1. > Dendron: Configure (yaml)
2. add `lookupConfirmVaultOnCreate: true` so your configuration looks like the following:

```yml
version: 0
...
lookupConfirmVaultOnCreate: true
```

### Navigating Links
- Sample workspace

![[dendron.roadmap.project.n.2020.multi-vault#file-layout-for-multi-vault-workspace,1:#*]]

- navigating  to `[[foo]]` will result in a display prompting the user to select the vault to navigate to 
- navigating to `[[foo.two]]` will directly navigate to the note since it is unique across all vaults
- navigating to `[[vault1/foo]]` will open `foo` in vault1 
- navigating to `[[dendron://vault2/foo]]` will open `foo` in vault1

### Note References

~~[[Note references|dendron.topic.refs]] are vault specific~~ When you make a reference, Dendron will include the note from the same note. You can create a reference to a note in a different vault by using [[cross vault links|dendron.topic.links#cross-vault-links]].


### Publishing

You can publish from a multi-vault enabled workspace if you are using [[dendron-11ty|dendron.pro.dendron-11ty]] to publish. 

We have added a new configuration, `duplicateNoteBehavior`, which [[controls|dendron.topic.publishing.configuration#duplicatenotebehavior-optional]] how Dendron handles duplicate notes across multiple vaults. 

### Version Control

For multi-vault, there are several approaches to version control. If you are using Git, you can either commit everything as one repo or version control your workspace and each vault separately as distinct repos.

If you use `Vault: Add` with a remote vault, Dendron will automatically add the remote properties to your `dendron.yml` file. See example below.

![[dendron.topic.config#remote-vault-example,1:#*]]

Versioned controlled vaults will be auto-initialized when someone pulls in the workspace. 

If you want to convert a local vault to a remote vault, you can follow the instructions [[here|dendron.guides.cook#convert-local-vault-to-a-remote-vault]].

#### File Layout for Multi-Vault Workspace

```
.
└── Dendron
    ├── .git
    ├── dendron.code-workspace
    ├── dendron.yml
    ├── ...
    ├── vault1
    │   ├── .git
    │   ├── root.md
    │   └── ...
    └── vault2
        ├── .git
        ├── root.md
        └── ...
```


## Related
- [[Cross Vault Links|dendron.topic.links#cross-vault-links]]