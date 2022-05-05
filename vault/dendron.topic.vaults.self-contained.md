---
id: o4i7a81j778jyh7wql0nacb
title: Self Contained Vaults
desc: ""
updated: 1651741716305
created: 1646953890139
---

[Self contained vaults](https://docs.dendron.so/notes/aOOBYTowLEKJDEtLWFiHb/) is
the new way Dendron is handling vaults. Self contained vaults make sharing,
publishing, and synchronizing your vaults easier.

## Features

Self contained vaults include all the files Dendron needs to open the vault and use it. This means:

- You can publish any vault you have by itself
- You can share the vault with someone, and Dendron will work immediately when they open it in VSCode without having to set up workspaces
- When you [[convert your vault|dendron.ref.commands#vault-convert]] to a remote vault, it will include all your settings and everything you need for Dendron

## Configuration

Self contained vaults are a new feature that's in active development, so you should make sure to update to the latest Dendron version if you want to try them.

Self contained vaults are currently being rolled out to some of our new users
for testing. For users who are randomly chosen for this test, any workspaces and
vaults they create will be self contained vaults.

If you would like to join the test, or if you are in the test but would like to
leave it, then you can change the
[[enableSelfContainedVaults|dendron://dendron.dendron-site/dendron.ref.config#enableselfcontainedvaults]]
configuration in VSCode. You can find this setting by going to the settings page and searching for self contained vaults.

![VSCode settings page, with "self contained vaults" typed in the search bar, and a setting titled "Enable Self Contained Vault Workspace" below.](https://org-dendron-public-assets.s3.amazonaws.com/images/self-contained-vaults-settings.png)

For existing users, self contained vaults are not enabled by default. You can
enable the setting above to create a new self contained workspace, or set the
config
[[enableSelfContainedVaults|dendron://dendron.dendron-site/dendron.ref.config#enableselfcontainedvaults]]
in your existing workspace to make any new vaults you create self contained.
Dendron doesn't have an automated way to migrate your existing vaults yet, but
you can follow the [[migration guide|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate]] to migrate your vaults manually.

## What's different about self contained vaults?

There are a few key differences between self contained vaults and regular vaults.

- Self contained vaults always include the `dendron.yml` and `dendron.code-workspace` files.
- Self contained vaults keep their notes under the `notes` folder.
- When you add a new vault when using self contained vaults, the new vault will go under the `dependencies` folder.
