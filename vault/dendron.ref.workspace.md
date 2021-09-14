---
id: c4cf5519-f7c2-4a23-b93b-1c9a02880f6b
title: Workspace
desc: ''
updated: 1623008236045
created: 1622841295415
---


## Summary

In Dendron, your **workspace** is the root of where all your files are located. It's set when you first run `Dendron: Initialize Workspace`. The folder that contains your workspace is also known as your **workspace root**.

A workspace has a `dendron.yml` file that specifies its [[vaults|dendron.topic.vaults]].

## Commands

### Workspace: Add and Commit

Add and commit all notes across all vaults to git.

### Workspace: Sync

Synchronizes all notes across all vaults with git. Any changes you made will be pushed back to remote, and any changes in the remote will be pulled.

In more detail: Dendron will first commit all your changes, then pull changes from the remote, and finally push everything back to the remote. This workflow is good in most cases: private notes, internal shared vaults, or your personal writings. This workflow doesn't work as well in some cases however, so we offer per-vault configuration options which you can use to adjust how your notes are synchronized.

You can set these configuration options in your `dendron.yml`, either for each vault with the `sync` option, or for all [[workspace vaults|dendron.topic.vaults#workspace-vault]] with the `workspaceVaultSync` option. The configuration will look like this:

```yml
... rest of your dendron.yml
workspaceVaultSync: noPush
vaults:
    -
        fsPath: my-website
        sync: noCommit
        remote:
            type: git
            url: 'git@github.com:my-username/my-website.git'
    -
        fsPath: my-notes
        sync: sync
        type: git
            url: 'git@github.com:my-username/my-notes.git'
```

#### configuration options

##### sync

Dendron will try to synchronize everything: Dendron will first commit all your changes, then pull changes from the remote, and finally push everything back to the remote. This is the default for regular vaults.

##### noCommit

Pull and push updates if the workspace is clean, but don't commit. You manually commit your local changes, but automatically share them once you committed. This is good for vaults where you want to write a meaningful commit message and control what is being committed, for example a shared knowledge base or wiki. This is the default for [[Workspace Vaults|dendron.topic.vaults#workspace-vault]].

##### noPush

Commit any changes and pull updates, but don't push. You can watch the repository and make local changes without sharing them back. This is good if you want to watch the updates in a vault and maybe even note your own thoughts in the vault without sharing them, for example an organization handbook that you don't want to edit yourself.

##### skip

Don't do any synchronization. This may be useful if you use some other tool to synchronize this vault.
