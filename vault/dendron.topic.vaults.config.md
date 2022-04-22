---
id: o55qc0bc18ykz7qrhxvapbq
title: Configuration
desc: 'All vault related settings'
updated: 1650500590769
created: 1648839983354
---

## Summary
{{fm.desc}}

## Vault Properties

### fsPath

- file path to vault

### name

- default: last component of `fsPath`

vault name

### visibility

- choices: "private|public"

If set to private, notes in this vault will not be published regardless of any other configuration. This takes precedences over everything.

### workspace

- required: false

If set, specifies the workspace that this vault belongs

### remote

- added property for [[remote vaults|#remote]]
- properties
  - type: currently only `git` is supported (in the future, we might add additional types)
  - url: url to GitHub repo

### sync

- default: `sync`

See [[workspace sync configuration options|dendron.topic.workspace#configuration-options]] for valid options.

Sets the [[synchronization strategy|dendron.topic.workspace#workspace-sync]] for this vault. This overrides the [[workspace vault sync option|dendron.ref.config#workspacevaultsync]] if it is set.

## Publishing Properties

- [[siteUrl|dendron://dendron.dendron-site/dendron.topic.publish.config.siteUrl]]
- [[siteIndex|dendron.topic.publish.config.siteIndex]]

Example:
```yml
workspace:
  vaults: 
        -
            fsPath: vault2
            siteUrl: "https://dendron.so"    
```

### Configuration Examples

#### Local Vault

```yml
vaults:
  - fsPath: vault
```

This will have the following file layout

```
.
└── workspace
    └── vault

```

#### Remote Vault

```yml
vaults:
  - fsPath: dendron-vault
    remote:
      type: git
      url: "git@github.com:kevinslin/dendron-vault.git"
    name: dendron
    sync: sync
  - fsPath: yc-vault
    remote:
      type: git
      url: "git@github.com:kevinslin/yc-vault.git"
    name: yc
    sync: noPush
```

This will have the following file layout

```
.
└── workspace
    |── dendron-vault
    └── yc-vault

```

#### Remote Workspace Vault

```yml
vaults:
  - fsPath: handbook
    workspace: handbook-workspace
    name: handbook
workspaces:
  handbook-workspace:
    remote:
      type: git
      url: "git@github.com:dendronhq/handbook.git"
```

This will have the following file layout

```
.
└── workspace
    └── handbook-workspace
        └── handbook-vault

```
