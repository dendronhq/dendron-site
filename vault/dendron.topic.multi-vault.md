---
id: 24b176f1-685d-44e1-a1b0-1704b1a92ca0
title: Multi Vault Setup
desc: ''
updated: 1665988615313
created: 1605630383515
---

## Summary

A multi vault setup refers to a [[workspace|dendron://dendron.dendron-site/dendron.concepts.workspace]] with multiple 
to managing multiple [[vaults|dendron://dendron.dendron-site/dendron.concepts.vault]].

## Use Cases

- for **sensitive notes**, multi-vault enables local only vaults vs vaults that can be synced on file sharing services like Dropbox
- for **modularizing knowledge**, multi-vault enables users to mix and match existing vaults depending on context
- for **federating and curating knowledge**, multi-vault enables users to publish/subscribe to public vaults using protocols like `git`
- for **access control**, multi-vault lets users configure specific vaults to be **private** which turns off publication and sharing of any notes inside said vault

## Topics

### Lookup

Lookup supports multiple vaults. When using lookup to find a note, each search result is labeled with which vault it belongs to.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/roots.jpg)

#### Vault Location when Creating a Note

When creating a note in lookup, Dendron will try to create your note in the correct vault. By default, it will place the note into the same vault as the currently opened note. But if it detects that the new note matches an existing hierarchy in a different vault, you will get prompted to pick the destination vault:

![](https://org-dendron-public-assets.s3.amazonaws.com/images/create-note-multi-vault-selection.png)

#### Prompt for Vault Selection Each Time

![[dendron://dendron.dendron-site/dendron.ref.config#lookupconfirmvaultoncreate:#*]]

To enable,  add `lookupConfirmVaultOnCreate: true` in the Dendron configuration. Instructions to do so below.

1. > `Dendron: Configure (yaml)`
2. add `lookupConfirmVaultOnCreate: true` so your configuration looks like the following:

```yml
version: 0
...
lookupConfirmVaultOnCreate: true
```

### Moving Notes Between Vaults

This can be done with the `Move Note` command.

![[dendron://dendron.dendron-site/dendron.topic.refactoring.commands.move-note#summary,1:#*]]

### Navigating Links

- Using plain links like `[[recipes.pasta]]`:
    - If there is only one note with that name across all vaults, Dendron will open that note
    - If there are notes in multiple notes with that name across different vaults, Dendron will ask which one you wanted to open
- Using cross-vault links like `[[dendron://cooking/recipes.pasta]]`, it will always open `recipes.pasta` in the vault `cooking` even if there are notes with the same name in other vaults.

### Note References

When you make a reference, Dendron will include the note from the same note. You can create a reference to a note in a different vault by using [[cross vault links|dendron://dendron.dendron-site/dendron.topic.links#cross-vault-links]].

### Publishing

You can [[publish your notes|dendron://dendron.dendron-site/dendron.topic.publish]] from a multi-vault workspace just as you would from a single vault workspace.

We have added a new configuration, `duplicateNoteBehavior`, which [[controls|dendron://dendron.dendron-site/dendron.topic.publish-legacy.configuration#duplicatenotebehavior-optional]] how Dendron handles duplicate notes across multiple vaults.

### Version Control

For multi-vault, there are several approaches to version control. If you are using Git, you can either commit everything as one repo or version control each vault separately as separate, distinct repos.

#### Separate Repositories
If you want to keep your vaults in separate repositories, then you'll want to use remote vaults. You can [[convert existing local vaults to remote vaults|dendron://dendron.dendron-site/dendron.topic.vaults#convert-vault]], or if you already have vaults in git repositories you can add them into your workspace as remote vaults.

![[dendron://dendron.dendron-site/dendron.topic.vaults#remote,1:#*]]

#### Single Repository

If you want to keep all your vaults in the same repository, then create a local vault using
using [[Create New Vault | dendron://dendron.dendron-site/dendron.topic.vaults#create-new-vault]] command, and don't convert them to remote vaults.

Instead, open the `.gitignore` file at the root of your workspace and remove any
lines that that reference vaults, for example `<path-to-your-vault>/vaultName`
should be removed. Then you should be able to add and commit these vaults into
the same repository.

> ⚠️ If you add multiple vaults into the same repository, you won't be able to
> use that vault as a remote vault in another workspace. You'll need to set up
> separate repositories if you need that.

#### File Layout for Multi-Vault Workspace

```
.
└── Dendron
    ├── .git
    ├── dendron.code-workspace
    ├── dendron.yml
    ├── notes
    │   ├── root.md
    │   └── ...
    └── dependencies
        ├── github.com
        │  └── dendronhq
        │     └── dendron-site
        │         ├── root.md
        │         └── ...
        └── gitlab.com
           └── username
              └── vault
                  ├── root.md
                  └── ...
```

## Examples

Dendron uses a multi-vault setup with remote vaults to document the Dendron code.
You can look at [our public repository](https://github.com/dendronhq/dendron/tree/master/docs)
to see what our setup looks like. Because the vaults are remote, you won't see them in the folder itself: they get cloned automatically if you open the repository with Dendron.

This setup allows us to access the documentation when coding, while also
allowing us to access these vaults in other workspaces and publish them
independently.

## Related

- [[Cross Vault Links|dendron.topic.links#cross-vault-links]]
- [[Using Dendron Across Machines|dendron.guides.best-practices#using-dendron-across-machines]]

