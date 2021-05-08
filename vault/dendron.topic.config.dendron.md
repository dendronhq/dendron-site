---
id: f83c1d87-eac0-48f3-a5cf-8a69989d8ec1
title: Dendrons Config
desc: ''
updated: 1620495841000
created: 1619539817122
---

### Summary

`dendron.yml` located at the root of your workspace.

This file can be accessed using these Commands ![[dendron.topic.commands#Configure-yaml,0,:#workspace-add-and-commit]]

![[dendron.topic.config#legend,0:#*]]

## General

### defaultInsertHierarchy

Execute [[Insert Note|dendron.topic.commands#insert-note]] with a hierarchy in place

### generateChangelog
- default: false
- status: experimental 🚧

Turn on to enable [[changelogs|dendron.topic.publishing.changelogs]]

### hierarchyDisplayTitle
- default: Children

Controls the title for [[children links|dendron.topic.links#children-links]] in published sites

### lookupConfirmVaultOnCreate

With this set, you can pick the vault for new notes.  

### mermaid
- default: false

Turn on to enable [[mermaid support|dendron.topic.markdown#diagrams]]

### noCaching

Disable dendron [[caching|dendron.ref.caching]]

### noLegacyNoteRef
- default: true

Disable dendron legacy note refs

### noTelemetry

Disable [[telemetry|dendron.topic.telemetry]]

### hierarchyDisplay
- default: true
- frontmatter: true

Disable dendron showing hierarchies on published pages

### initializeRemoteVaults
- default: true

Determines if dendron pulls in un-initialized [[remote vault|dendron.concepts#remote-vault]] at startup

### noAutoCreateOnDefinition
- default: true

If a note doesn't exist, don't create it via the `GoToDefinition` 

### noXVaultWikiLink

If set, disable [[Cross Vault Links|dendron.topic.links#cross-vault-links]] when using [[Copy Note Link|dendron.topic.commands#copy-note-link]].

### useContainers
- default: false

Turn on to enable [remark-container support](https://github.com/Nevenall/remark-containers)

### useFMTitle

When set to true, use frontmatter as title when publishing and in the preview.

### useKatex
- default: true

Turn on [Katex](https://katex.org/) support

### useNoteTitleForLink

If true, use the note title when displaying naked links. This also applies to note references. 

- NOTE: this is not yet fully supported for multi-vault. specifically, cross vault links are not yet supported

### usePrettyRefs
- default: true

If set to false, don't use [[pretty refs|dendron.ref.terms#pretty-ref]]

### vaults

Tracks [[vaults|dendron.concepts#vaults]] for the workspace. You shouldn't have to manually edit this value. This is updated automatically when you first initialize a workspace and when you add or remove vaults to your workspace.

### Vault properties:

#### fsPath
- file path to vault

#### name
- default: last component of `fsPath`

vault name 

#### visibility
- choices: "private|public"

If set to private, notes in this vault will not be published regardless of any other configuration. This takes precedences over everything. 

#### remote
- added property for [[remote vaults|dendron.concepts#remote-vault]]
- properties
    - type: currently only `git` is supported (in the future, we might add additional types)
    - url: url to github repo


### Local Vault Example
```yml
vaults:
    - fsPath: vault
```


### Remote Vault Example
```yml
vaults:
    -
        fsPath: dendron-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/dendron-vault.git'
        name: dendron
    -
        fsPath: yc-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/yc-vault.git'
        name: yc
```

## Hooks

![[dendron.topic.hooks.config]]