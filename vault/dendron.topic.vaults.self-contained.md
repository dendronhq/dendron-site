---
id: o4i7a81j778jyh7wql0nacb
title: Self Contained Vaults
desc: ""
updated: 1646955005466
created: 1646953890139
---

[Self contained vaults](https://docs.dendron.so/notes/aOOBYTowLEKJDEtLWFiHb/) is
the new way Dendron will handle vaults in the future. Self contained vaults
simplify Dendron by combining together the concepts of vaults, workspaces,
native and code vaults, and workspace vaults.

Right now self contained vaults is an [[Early Seed 🌱|dendron://dendron.dendron-site/dendron._ref.status#early-seed-]]
feature, which is to say it is in early development. Not all Dendron features
work with self contained vaults yet, and you should avoid self contained vaults
unless you want to help us test out this upcoming feature.

## Configuration

Because it is still in development, self contained vaults are not enabled until
they are enabled. Please see the [[enableSelfContainedVaults|dendron://dendron.dendron-site/dendron.ref.config#enableselfcontainedvaults]]
option.

## Usage

When enabled, creating a new vault will cause a self contained vault to be
created. Self contained vaults are placed under the `dependencies` folder. This
works for both local and remote vaults. Different from regular vaults, self contained local vaults are not included in the git repository of the workspace they are in.

> ⚠️ Adding workspace vaults or seed vaults, using the `Vault Convert` or `Vault Remove` command are not supported. Many other features have not been
> thoroughly tested with self contained vault, and may not work correctly.
