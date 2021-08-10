---
id: f83c1d87-eac0-48f3-a5cf-8a69989d8ec1
title: Dendrons Config
desc: ''
updated: 1628572465048
created: 1619539817122
---

### Summary

`dendron.yml` located at the root of your workspace.

This file can be accessed using these Commands ![[dendron.topic.commands#Configure-yaml,0,:#workspace-add-and-commit]]

![[dendron.topic.config#legend,0]]

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

With this set, you will be prompted to select the vault location each time you create a note when you have multiple vaults in your workspace.

### mermaid
- default: false

Turn on to enable [[mermaid support|dendron.topic.markdown#diagrams]]

### noCaching

Disable dendron [[caching|dendron.ref.caching]]

### noLegacyNoteRef
- default: true

Disable dendron legacy note refs

### noTelemetry

Disable [[telemetry|dendron.ref.telemetry]]

### hierarchyDisplay
- default: true
- frontmatter: true

Disable dendron showing hierarchies on published pages

### initializeRemoteVaults
- default: true

Determines if dendron pulls in un-initialized [[remote vault|dendron.topic.vaults#remote]] at startup

- default: true

If a note doesn't exist, don't create it via the `GoToDefinition` 

### noXVaultWikiLink

If set, disable [[Cross Vault Links|dendron.topic.links#cross-vault-links]] when using [[Copy Note Link|dendron.topic.commands#copy-note-link]].

### randomNote

Configures the set of notes to include and exclude when using the [[Random Note|dendron.topic.commands#random-note]] command.

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

### workspaceVaultSync
- default: noCommit

See [[workspace sync configuration options|dendron.ref.workspace#configuration-options]] for valid options.

Sets the [[synchronization strategy|dendron.ref.workspace#Workspace: Sync]] for [[workspace vaults|dendron.topic.vaults#workspace-vault]]. For regular vaults, please use the [[per-vault configuration|dendron.topic.vaults#sync]].

### autoFoldFrontmatter
- default: true

When set to true, Dendron will automatically fold the frontmatter when opening new notes.
This includes newly created notes, and existing notes that are being opened for the first time in this session of Visual Studio Code.

### defaultDailyJournalVault

Execute [[Create Daily Journal Note|dendron.topic.commands#create-daily-journal-note]] with a default vault in place

### vaults

Tracks [[vaults|dendron.concepts#vaults]] for the workspace. You shouldn't have to manually edit this value. This is updated automatically when you first initialize a workspace and when you add or remove vaults to your workspace.

#### Vault properties:

See [[Vault Configuration|dendron.topic.vaults#configuration]]

## Journal
### dailyDomain
- type: string
- default: daily

### dailyVault
- type: string
- default: none

Name of vault where daily journal should be in. If not set, default to current open vault.

### dailyVault

domain where daily journals are kept
### name
- type: string
- default: journal

name used for journal notes

### dateFormat
- type: string
- default: y.MM.dd

Date format used for journal notes. Use [luxon style formatting](https://moment.github.io/luxon/docs/manual/formatting.html)

### addBehavior
- type: string
- default: childOfDomain
- options:  ['childOfDomain', 'childOfDomainNamespace', 'childOfCurrent', 'asOwnDomain']

strategy for adding new journal notes
- NOTE: this only applies to regular journal notes but not to  [[daily journal|dendron.topic.special-notes#daily-journal]] notes.

## Hooks

![[dendron.topic.hooks.config]]

## Graph

![[dendron.topic.graph-view#config,1:#*]]

## Dev
Development configuration covers option to enable [[experimental 🧪|dendron.ref.status#experimental-🧪]] features and when working on Dendron. 


### enableWebUI
- default: false

Enables turning on Dendron's new web ui. Currently (2021.05.20), this means enabling the new [Antd](https://ant.design/) based tree view

#### Example
It will work by adding it under the `dev` section (which is not created in default).  
```yml
dev:
    enableWebUI: true
```

