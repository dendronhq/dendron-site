---
id: f83c1d87-eac0-48f3-a5cf-8a69989d8ec1
title: Configuration
desc: ''
updated: 1638231042325
created: 1619539817122
nav_order: 2.1
---


## Summary

`dendron.yml` located at the root of your workspace.

It can be modified using the [[Configure (yaml)|dendron://dendron.dendron-site/dendron.ref.commands#configure-yaml]] command.

All commands are grouped by [[scope|tags.scope]] except those mentioned underneath `Legacy Configuration` 

## Scopes

- [[Commands|dendron://dendron.dendron-site/dendron.ref.config.commands]]
- [[Preview|dendron://dendron.dendron-site/dendron.ref.config.preview]]
- [[Workspace|dendron://dendron.dendron-site/dendron.ref.config.workspace]]

## Validation and AutoComplete

Dendron can provide validation when you edit the raw yaml using the[[Configure (yaml) Command|dendron.topic.commands#configure-yaml]]. In order to do so, you must have the `redhat.vscode-yaml` extension installed (this is a recommended extension for Dendron) The validator provides autocomplete, documentation & warnings when editing dendron.yml. Here's a few examples of what it looks like:

Hover over values to see documentation

![Hover over values to see documentation](https://camo.githubusercontent.com/f6cb94205c5f83dc6f17ecb843cc5fe27fbad12eb992f3ba5858bdafbfcae1cf/68747470733a2f2f692e696d6775722e636f6d2f534b48344b6a5a2e706e67)

Autocomplete existing values

![Autocomplete existing values](https://camo.githubusercontent.com/f934a307ba25613a539e3084e48e2c6e6bfa22df39fc39e326fc2256efa6f6cc/68747470733a2f2f692e696d6775722e636f6d2f65546750465a582e706e67)

Validate existing values

![Validate existing values](https://camo.githubusercontent.com/4e11001d0d14690c3cc37360e3a4ddab9debdca6d553373fac93fc027cbddf33/68747470733a2f2f692e696d6775722e636f6d2f436563554332482e706e67)

## Legacy Configuration

> We are currently in the middle of a major overhaul of configuration namespaces, and is subject to change in a weekly basis. All configurations described in this section will gradually be marked as "deprecated" as we move them to a better place. 

### defaultInsertHierarchy
> This setting is scheduled for deprecation 📆
>
> Use [[initialValue|dendron.ref.config.commands#initialvalue]] instead.

Execute [[Insert Note|dendron.topic.commands#insert-note]] with the hierarchy prefilled.


### generateChangelog
- default: false
- status: experimental 🚧

Turn on to enable [[changelogs|dendron.topic.publish-legacy.changelogs]]

### hierarchyDisplayTitle
- default: Children

Controls the title for [[children links|dendron.topic.links#children-links]] in published sites

### lookupConfirmVaultOnCreate
> This setting is scheduled for deprecation 📆 
>
> Use [[confirmVaultOnCreate|dendron.ref.config.commands#confirmvaultoncreate]] instead.

With this set, you will be prompted to select the vault location each time you create a note when you have multiple vaults in your workspace.

### lookupDontBubbleUpCreateNew
> This setting is scheduled for deprecation 📆
>
> Use [[bubbleUpCreateNew|dendron.ref.config.command#bubbleupCreateNew]] instead.
- default: false

With this set to `true`: `Create new` will NOT bubble up to the top when using [[Note Lookup|dendron.topic.lookup]]. Use this setting when your workflow largely consists of lookups and you want to keep `Create new` as the last entry in the look up results. 

### mermaid
- default: true

Turn on to enable [[mermaid support|dendron.topic.markdown#diagrams]] for publishing.

### noCaching

Disable Dendron [[caching|dendron._ref.caching]]

### noTelemetry
> This setting is scheduled for deprecation 📆
>
> Use [[disableTelemetry|dendron.ref.config.workspace#disabletelemetry]] instead.

Disable [[telemetry|dendron.ref.telemetry]]

### hierarchyDisplay
- default: true
- frontmatter: true

Disable Dendron showing hierarchies on published pages

### initializeRemoteVaults
> This setting is scheduled for deprecation 📆
>
> Use [[enableRemoteVaultInit|dendron.ref.config.workspace#enableremotevaultinit]] instead.

- default: true

Determines if Dendron pulls in un-initialized [[remote vault|dendron.topic.vaults#remote]] at startup

### noAutoCreateOnDefinition 
> This setting is scheduled for deprecation 📆
>
> Use [[enableAutoCreateOnDefinition|dendron.ref.config.workspace#enableautocreateondefinition]] instead.

- default: true

If a note doesn't exist, don't create it via the `GoToDefinition` 

### noXVaultWikiLink
> This setting is scheduled for deprecation 📆
>
> Use [[enableXVaultWikiLink|dendron.ref.config.workspace#enablexvaultwikilink]] instead.

If set, disable [[Cross Vault Links|dendron.topic.links#cross-vault-links]] when using [[Copy Note Link|dendron.topic.commands#copy-note-link]] and [[Insert Note Index|dendron.topic.commands#insert-note-index]].

### randomNote
> This setting is scheduled for deprecation 📆 
>
> Use [[randomNote|dendron.ref.config.commands#randomnote]] instead.

Configures the set of notes to include and exclude when using the [[Random Note|dendron.topic.commands#random-note]] command.

### useContainers
- default: false

Turn on to enable [remark-container support](https://github.com/Nevenall/remark-containers)

### useFMTitle

When set to true, use frontmatter as title when publishing.

### useKatex
- default: true

Turn on [Katex](https://katex.org/) support for publishing.

### enableUserTags
- default: true

Enables [[user tags|dendron.topic.users#user-tags]] support.

### enableHashTags
- default: true

Enables [[hashtags|dendron.topic.tags#hashtags]] support.

### useNoteTitleForLink

If true, use the note title when displaying naked links when published. This also applies to note references. 

- NOTE: this is not yet fully supported for multi-vault. specifically, cross vault links are not yet supported

### insertNoteIndex
> This setting is scheduled for deprecation 📆
>
> Use [[insertNoteIndex|dendron.ref.config.commands#insertnoteindex]] instead.

Configures how [[Insert Note Index|dendron.topic.commands#insert-note-index]] works.

#### marker
> This setting is scheduled for deprecation 📆
>
> Use [[enableMarker|dendron.ref.config.commands#enablemarker]] instead.

- default: false

If set to true, the inserted note index block will be wrapped between a marker like so:

```md
<!-- Autogenerated Index Start -->
## Index
- [[Child|foo.child]]
<!-- Autogenerated Index End -->
```

### usePrettyRefs
- default: true

If set to false, don't use [[pretty refs|dendron.concepts#pretty-ref]] when publishing.

### noRandomlyColoredTags
- default: false

Do not display the automatically generated colors for tags in the editor. Only tag colors set
by the user are used, other tags won't have colors and will look like regular
links.

### workspaceVaultSync
> This setting is scheduled for deprecation 📆
>
> Use [[workspaceVaultSyncMode|dendron.ref.config.workspace#workspacevaultsyncmode]] instead.

- default: noCommit

See [[workspace sync configuration options|dendron.topic.workspace#configuration-options]] for valid options.

Sets the [[synchronization strategy|dendron.topic.workspace#Workspace: Sync]] for [[workspace vaults|dendron.topic.vaults#workspace-vault]]. For regular vaults, please use the [[per-vault configuration|dendron.topic.vaults#sync]].

### autoFoldFrontmatter
> This setting is scheduled for deprecation 📆
>
> Use [[enableAutoFoldFrontmatter|dendron.ref.config.workspace#enableautofoldfrontmatter]] instead.

- default: true

When set to true, Dendron will automatically fold the frontmatter when opening new notes.
This includes newly created notes, and existing notes that are being opened for the first time in this session of Visual Studio Code.


### vaults
> This setting is scheduled for deprecation 📆 ^iDyNPId9bFGz
>
> Use [[vaults|dendron.ref.config.workspace#vaults]] instead.

Tracks [[vaults|dendron.concepts#vaults]] for the workspace. You shouldn't have to manually edit this value. This is updated automatically when you first initialize a workspace and when you add or remove vaults to your workspace.

#### Vault properties:

See [[Vault Configuration|dendron.topic.vaults#workspace-vault,1:#configuration-1]]

## Dev
Development configuration covers option to enable [[experimental 🧪|dendron._ref.status#experimental-🧪]] features and when working on Dendron. 

### enableWebUI
- default: false

Enables turning on Dendron's new web ui. Currently (2021.05.20), this means enabling the new [Antd](https://ant.design/) based tree view

#### Example
It will work by adding it under the `dev` section (which is not created in default).  
```yml
dev:
    enableWebUI: true
```

### enableExportPodV2
- default: false

When set to true, this config enables the new `Dendron: Export Pod V2`, `Dendron: Configure Export Pod V2` and `Dendron: Configure Service Connection` commands. By default, these commands are hidden.

#### Example
It will work by adding it under the `dev` section (which is not created in default).  
```yml
dev:
    enableExportPodV2: true
```
