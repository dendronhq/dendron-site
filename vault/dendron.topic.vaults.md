---
id: 6682fca0-65ed-402c-8634-94cd51463cc4
title: Vaults
desc: ''
updated: 1641501358022
created: 1622841137387
---

## Summary

Your workspace is made up of one or more **vaults**. A Dendron vault stores a collection of related notes. If you're familiar with git, it's just like a code repo. By default, Dendron creates a _vaults_ folder when you first initialize a **workspace**. All your notes are stored on a per vault basis.

```
.
└── workspace
    ├── vault.main
    │   ├── foo.md
    │   ├── foo.one.md
    │   └── foo.two.md
    └── vault.secret (hypothetical)
        ├── secret.one.md
        └── secret.two.md
```

By default, when you look for notes in Dendron, it will search over all vaults.

## Commands

### Vault Add

- shortcuts: none

Add a new vault to your workspace.

When you add a vault, you can choose between adding a local vault or a remote vault. You can change this later with the [[Vault Convert|dendron.topic.vaults#vault-convert]] command.

#### Local Vault

A local vault is a folder in your file system.

#### Remote Vault

A remote vault is a git repository. If you choose a remote vault, you can choose from a vault from the registry or enter a custom git url.

##### Choosing from the registry

Currently, Dendron has four vaults in the registry:

- [Dendron Vault](https://wiki.dendron.so/)
- [AWS Vault](https://aws.dendron.so/)
- [TLDR Vault](https://tldr.dendron.so/)
- [XKCD Vault](https://xkcd.dendron.so/)

The first two correspond to the notes backing https://wiki.dendron.so/ and https://aws.dendron.so/ respectively.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/remote-vault.jpg)

When you add a remote vault, the url can also point to a remote workspace. In that case, Dendron will inspect the `dendron.yml` to get a list of all vaults within the workspace and add all vaults from inside the workspace.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b4171372f9794dd7be609c043f343fa3" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Vault Remove

- shortcuts: none

Remove a vault

Remove a vault from your workspace. Note that the underlying files will **not** be deleted - the vault will lose its association with your workspace.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/307effc22b8d4c59a32933529a8393e1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Vault Convert

You can convert a local vault to a remote vault, or a remote vault to a local
vault using this command. Simply run the command and follow the prompts.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/48fe047324c14949b0917861c79fd985" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Vault Sources

When adding new vaults, your vault can come from either of the following sources:
- local 
- remote

### Local 

A local vault is what you start off with. Its a vault that is local to your file system.

### Remote

A remote vault is what you get when you run the [[Vault Add|dendron.ref.commands#vault-add]] command and select a remote vault. This is a vault that is cloned from a git repo. It should be a similar format as what you see below

```yml 
vaults:
    -
        fsPath: dendron
        remote:
            type: git
            url: 'git@github.com:dendronhq/dendron.git'
```
^NiCCqLjTG2nbM6Qi

When someone pulls down a workspace with a `dendron.yml` that contains a remote vault, Dendron will automatically initialize the vault at the given `fsPath`. If the vault is a [[Workspace Vault|dendron.ref.vaults#workspace-vault]], Dendron will pull down the workspace to `{workspaceName}/fsPath`. 

## Vault Types

### Regular Vault

A regular vault is what you get by default when you first initialize your workspace. 

### Workspace Vault
A workspace vault is a vault that belongs to another [[workspace|dendron.topic.workspace]]. It is automatically created when you run [[Vault Add|dendron.topic.vaults#vault-add]] on a [[workspace|dendron.topic.workspace]]. Upon adding a workspace, Dendron will add all the vaults of the given workspace inside your `dendron.yml` 

You can see an example of the configuration [[here|dendron.topic.vaults#remote-workspace-vault]].

## Configuration

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
- added property for [[remote vaults|dendron.ref.vaults#remote]]
- properties
    - type: currently only `git` is supported (in the future, we might add additional types)
    - url: url to GitHub repo


### sync
- default: `sync`

See [[workspace sync configuration options|dendron.topic.workspace#configuration-options]] for valid options.

Sets the [[synchronization strategy|dendron.topic.workspace#Workspace: Sync]] for this vault. This overrides the [[workspace vault sync option|dendron.ref.config#workspaceVaultSync]] if it is set.

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
    -
        fsPath: dendron-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/dendron-vault.git'
        name: dendron
        sync: sync
    -
        fsPath: yc-vault
        remote:
            type: git
            url: 'git@github.com:kevinslin/yc-vault.git'
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
    -
        fsPath: handbook
        workspace: handbook-workspace
        name: handbook
workspaces:
    handbook-workspace:
        remote:
            type: git
            url: 'git@github.com:dendronhq/handbook.git'

```

This will have the following file layout
```
.
└── workspace
    └── handbook-workspace
        └── handbook-vault

```
