---
id: 19f4e85e-da75-44cf-881c-51c43bf8aeea
title: Vaults
desc: ''
updated: 1621568608325
created: 1608098066514
nav_order: 2
---

## Summary

In this module, you'll learn how to add additional vaults to your workspace.

![[dendron.topic.multi-vault#summary,1:#concepts]]

### Adding a Local vault

Use the [[Vault Add|dendron.topic.commands#vault-add]] command and select a `local vault`. For the name, you can call it `vault2`. You will be prompted for a path to the vault. If you leave it blank, Dendron will create the vault under `{workspace}/{vaultName}`. After you make a selection, Dendron will reload the workspace with your new vault.

### Adding files to your second vault

To create a note, bring up lookup and type `root`. You should see two results with the name of the vault in parenthesis. Select `root` that belongs to `vault2`

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/roots.jpg)

Now create a new note using lookup. Bring it up and type `goodbye`. This will create the note `goodbye` in the new vault. By default, Dendron will create notes in the same vault of the current open file. You can change the behavior to have Dendron prompt you each time you want to create a new note. 

To do so, update the [[lookupConfirmVaultOnCreate|dendron.topic.config.dendron#lookupconfirmvaultoncreate]] configuration to true. 

### Adding a Remote Vault

In addition to adding a vault locally, you can add any valid Dendron vault that is available at an accessible git origin. Run the `Vault Add` command again and this time select `remote vault`. At this point, you can either paste the git url of a vault that you know or select from one of the presets.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/remote-vault.jpg)

In our case, we are going to use a preset. Select `dendron`. By default, the vault will be created with both the name and path of `dendron` but this is something that you can change. 

Afterwards, Dendron will clone the vault and reload your workspace. Congratulations, you now have the entire Dendron wiki locally inside your workspace!

### Cleaning Up (optional)

In order to remove a vault, you can use [[Vault Remove|dendron.topic.commands#vault-remove]]. Note that this command removes the vault from Dendron but not from your filesystem. You'll need to manually delete the folder to do that. 

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
