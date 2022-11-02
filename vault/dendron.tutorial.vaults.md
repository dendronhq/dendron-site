---
id: 19f4e85e-da75-44cf-881c-51c43bf8aeea
title: Vaults
desc: ''
updated: 1665988936215
created: 1608098066514
nav_order: 10
published: false
---

## Summary

In this module, you'll learn how to add additional vaults to your workspace.

![[dendron.topic.multi-vault#summary]]

### Creating a new Local vault

Use the [[Create New Vault|dendron://dendron.dendron-site/dendron.topic.vaults#create-new-vault]] command to create a `local vault`. For the name, you can call it `vault2`. You will be prompted for a path to the vault. The new vault is created in this path. After you make a selection, Dendron will reload the workspace with your new vault.

### Adding files to your second vault

To create a note, bring up lookup and type `root`. You should see two results with the name of the vault in parenthesis. Select `root` that belongs to `vault2`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/roots.jpg)

Now create a new note using lookup. Bring it up and type `goodbye`. This will create the note `goodbye` in the new vault. By default, Dendron will create notes in the same vault of the current open file. You can change the behavior to have Dendron prompt you each time you want to create a new note. 

To do so, update the [[lookupConfirmVaultOnCreate|dendron.ref.config#lookupconfirmvaultoncreate]] configuration to true. 

### Adding a Remote Vault

In addition to adding a vault locally, you can add any valid Dendron vault that is available at an accessible git origin. Run the `Add Existing Vault` command and select `remote vault`. At this point, you can either paste the git url of a vault that you know or select from one of the presets.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/remote-vault.jpg)

In our case, we are going to use a preset. Select `dendron`. By default, the vault will be created with both the name and path of `dendron` but this is something that you can change. 

Afterwards, Dendron will clone the vault and reload your workspace. Congratulations, you now have the entire Dendron wiki locally inside your workspace!

### Cleaning Up (optional)

In order to remove a vault, you can use [[Remove Vault|dendron.ref.commands#remove-vault]]. Note that this command removes the vault from Dendron but not from your filesystem. You'll need to manually delete the folder to do that. 

### Files

At the end of this module, you should have the following files in your vault

```
.
└── vault
    ├── daily.journal.{date}.md
    ├── dendron.md
    ├── dendron.welcome.md
    ├── hello.md
    ├── hello.world.md
    ├── lets.go.deep.md
    ├── onboarding.md
    ├── pro.skynet.md
    └── pro.skynet.principles.md
└── vault2
    └── goodbye.md
└── dendron
    ├── ...
    └── ...
```

### Next
-   [[Publishing your notes|dendron.tutorial.publishing]]
