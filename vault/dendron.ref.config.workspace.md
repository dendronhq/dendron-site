---
id: 3i4ABJutl7NGeXRHTnUEC
title: Workspace
desc: ''
updated: 1655718960854
created: 1634646633536
---

## Summary

This is the configuration namespace that holds all workspace related settings.

Below is an overview of what the workspace namespace looks like.

```yml
workspace:
  dendronVersion:
  workspaces:
  seeds:
  vaults:
  hooks:
  journal: 
    dailyDomain:
    dailyVault:
    name:
    dateFormat:
    addBehavior:
  scratch:
    name:
    dateFormat:
    addBehavior:
  graph:
    zoomSpeed:
  disableTelemetry:
  enableAutoCreateOnDefinition:
  enableXVaultWikiLink:
  enableRemoteVaultInit:
  workspaceVaultSyncMode:
  enableAutoFoldFrontmatter:
  maxPreviewsCached:
  maxNoteLength:
  enableFullHierarchyNoteTitle:
```

## dendronVersion

Dendron version. Set by the extension.

## workspaces

Tracks workspaces.

## seeds

Tracks seeds.
See [[Seeds 🚧|dendron.topic.seeds]]

## vaults

Tracks [[vaults|dendron.concepts#vaults]] for the workspace. You shouldn't have to manually edit this value. This is updated automatically when you first initialize a workspace and when you add or remove vaults to your workspace.
See [[Vault Configuration|dendron.topic.vaults#workspace-vault,1:#configuration-1]]

## hooks

Tracks information about hooks.
See [[hooks|dendron.topic.hooks.config]]

## journal

Namespace for Journal related configurations.

### dailyDomain

Sets the domain where the daily journals are kept

- default: "daily"

### dailyVault

Sets the name of the vault where daily journals are kept. If not set, defaults to current open vault.

- default: none

### name

Sets the name for journal notes

- default: "journal"

### dateFormat

Sets the date format to be used for journal notes.
Use [luxon style formatting](https://moment.github.io/luxon/#/formatting)

- default: "y.MM.dd"

### addBehavior

Sets the strategy for adding new journal notes.
This only applies to regular journal notes but not to [[Daily Journal Notes|dendron.topic.daily-journal-note#details]]. For possible options, see [[addBehavior options|dendron://dendron.dendron-site/dendron.topic.special-notes#defaultnodetypeaddbehavior]]

- default: "childOfDomain"

## scratch

Namespace for Scratch note related configurations.

### name

Sets the name for scratch notes

- default: "scratch"

### dateFormat

Sets the date format to be used for scratch notes.
Use [luxon style formatting](https://moment.github.io/luxon/#/formatting)

- default: "y.MM.dd.HHmmss"

### addBehavior

Sets the strategy for adding new scratch notes. For possible options, see [[addBehavior options|dendron://dendron.dendron-site/dendron.topic.special-notes#defaultnodetypeaddbehavior]]

- default: "asOwnDomain"

## graph

Namespace for graph related configurations.
See [[Graph view|dendron.topic.graph-view]]

### zoomSpeed

Determines the zoom speed in the graph view.

- default: 1

## disableTelemetry

Disables telemetry.
See [[telemetry|dendron.ref.telemetry]]

## enableAutoCreateOnDefinition

Sets the auto-create behavior when looking up definition.

- default: false

## enableXVaultWikiLink

Sets the x-vault wikilink behavior.
See [[Cross Vault Links|dendron.topic.links#cross-vault-links]]

- default: false

## enableRemoteVaultInit

Determines if Dendron should pull in un-initialized [[remote vaults|dendron.topic.vaults#remote]] at startup.

- default: true

## workspaceVaultSyncMode

Sets the [[synchronization strategy|dendron.topic.workspace#Workspace: Sync]] for [[workspace vaults|dendron.topic.vaults#workspace-vault]]. For regular vaults, please use the [[per-vault configuration|dendron.topic.vaults#sync]]
See [[workspace sync configuration options|dendron.topic.workspace#configuration-options]] for valid options.

- default: "noCommit"
- options: ["sync", "noCommit", "noPush", "skip"]

## enableAutoFoldFrontmatter

Sets the frontmatter folding behaviour.
When set to `true`, Dendron will automatically fold the frontmatter when opening new notes.
This includes newly created notes, and existing notes that are being opened for the first time in the current session of VS Code.

- default: false

## maxPreviewsCached

Sets the maximum number of rendered previews to be cached

- default: 10

## maxNoteLength

Maximum number of characters in a note. Notes with characters exceeding this number will have some Dendron features disabled.

- default: 204800

## enableEditorDecorations

Enables rich highlighting, decoration, and diagnostics when writing notes in
Dendron. For example if disabled: wikilinks, hashtags, and user tags will not be
highlighted, task note information will not be displayed, and Dendron will not
warn for broken note frontmatter.

- default: true

## enableFullHierarchyNoteTitle

When enabled, the note title will utilize the full hierarchy to generate the title when a note is created. For example, if the note being created is `one.two.three`, the title will become `One Two Three` instead of `Three`. This command will not affect the title formatting of journal notes, which will still only keep the date portion as the title.

- default: false
