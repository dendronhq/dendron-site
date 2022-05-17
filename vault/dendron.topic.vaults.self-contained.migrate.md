---
id: aikv0yamnfkcowlol7qeldy
title: Migrating to Self Contained Vaults
desc: ""
updated: 1652776135488
created: 1651741592127
---

Migrating to self contained vaults is automated for basic vaults (not workspace
vault). See the next section for instructions.
For workspace vaults, so you'll have to follow the [[manual migration instructions|dendron://dendron.dendron-site/dendron.topic.vaults.self-contained.migrate#migrating-a-workspace-vault]]
at the moment while we work on automating the process.

Before migrating your vaults:

- Make sure your notes are backed up: put them on a remote git repository, use backup software, or at least copy them to a second location.
- Check that you have the latest versions of Dendron and VSCode.
- Make sure you have the latest config version (`dendron.yml` should say `version: 5`). Dendron should prompt you to upgrade when you start, or you can use [[Run Migration|dendron://dendron.dendron-site/dendron.ref.commands#dendrondev-run-migration]] if you didn't get the prompt.
- If you are collaborating with other people in this vault, let them know you are migrating. They should sync their workspace before and after you migrate to avoid merge conflicts.

## Migrating a regular vault

Run the `Dendron: Migrate to Self Contained Vault` command to start the
migration. You'll then be prompted with a list of vaults to migrate: pick the
vault you would like to migrate and Dendron will handle the rest.

If you don't see the vault you wanted to migrate on this list, then that vault
is either already a self contained vault or we don't support migrating it yet.
In that case you can follow the manual migration instructions listed below.

### How it works

The migration tool works by temporarily renaming the old vault, creating a new
self contained vault with the same name, then moving the old vault into the self
contained vault to complete the migration. This allows the tool to move all your
notes and any other files you have inside the vault quickly. In more detail:

1. The folder for the vault selected to be migrated (old) is renamed with a
   unique name like `vault-migrate-aiky0`
1. A self contained vault (new) with the same name is created in place of the old vault
1. The old vault is moved into the new vault as the `notes` folder
1. The vault is marked as self contained in the configuration files
1. If there's a `.git` folder inside the old vault, it's moved up to the new vault

While unlikely, should the automatic migration tool fail after renaming your
existing vault, you can abort the migration by renaming the vault folder to what
it used to be before. This is usually the same as the name of the vault, you can
confirm what it is by looking at the `fsPath` value in the `dendron.yml`
configuration file.

If you have any files inside the vault that you want to keep at the root of the
vault, for example a README file, VSCode configuration files, or a gitignore,
you can move these files out of the `notes` folder and into the root of the
vault afterwards.


## Manual Migration Instructions

### Migrating a workspace with a single vault

<a href="https://www.loom.com/share/67791e91290048b092ad9dcd069e25db">
    <img src="https://cdn.loom.com/sessions/thumbnails/67791e91290048b092ad9dcd069e25db-with-play.gif">
  </a>

1. Rename your vault folder (usually `vault`) to `notes`
1. Open the `dendron.yml`, then update the vaults configuration as follows:

```yaml
workspace:
  vaults:
    - fsPath: .
      name: vault # or whatever name you would prefer
      selfContained: true
```

1. Open `dendron.code-workspace`, then update the folders configuration as follows:

```json
"folders": [
  {
      "path": "notes",
      "name": "vault" // or the name you'd prefer for your vault
  }
]
```

Restart VSCode to make sure everything is updated, and you are done!
Try doing a lookup, you should be able to access the notes in your vault.

### Migrating a workspace with multiple vaults

<a href="https://www.loom.com/share/e7acb5698df54d83a986b8c99cc0543d">
    <img src="https://cdn.loom.com/sessions/thumbnails/e7acb5698df54d83a986b8c99cc0543d-with-play.gif">
  </a>

1. Figure out what folder each vault is stored in. You can find this in the
   `vaults` section of `dendron.yml`, where the `fsPath` key will tell you what
   the folder is named. This is usually the same as the name of the vault.
1. For each vault you have:

   1. Create a subfolder called `notes` inside the vault folder
   1. Move all notes, schemas, and assets into the `notes` folder.
   1. Copy the `dendron.yml` and `dendron.code-workspace` files from the root of your workspace into the vault folder (not inside `notes`, inside the original folder).
   1. Edit the vault `dendron.yml` so it looks like the following:

   ```yaml
   workspace:
     vaults:
       - fsPath: .
         name: vault # enter the name for your vault here
         selfContained: true
   ```

   1. Edit the vault `dendron.code-workspace` so it looks like the following:

   ```json
   "folders": [
       {
           "path": "notes",
           "name": "vault" // enter the name for your vault here
       },
   ```

1. Edit the workspace root `dendron.yml` to mark every vault as self contained:

```yaml
workspace:
  vaults:
    - fsPath: vault1 # enter the folder for the vault
      name: vault1 # enter the name for the vault, usually same as the folder
      selfContained: true
    - fsPath: vault2
      name: vault2
      selfContained: true
```

1. Edit the workspace root `dendron.code-workspace` to correct the folder paths:

```json
"folders": [
  {
      "path": "vault1/notes",
      "name": "vault1"
  },
  {
      "path": "vault2/notes",
      "name": "vault2"
  }
],
```

Restart VSCode and your now self contained vaults should now work!
Try doing a lookup, you should be able to access the notes in your vaults.

### Migrating a Workspace Vault

If you have a [[workspace vault|dendron://dendron.dendron-site/dendron.topic.vaults#workspace-vault]], you can migrate them as well.

1. Follow the [[instructions for a single vault|#migrating-a-workspace-with-a-single-vault]] inside of the workspace vault.
1. Inside the actual workspace, edit `dendron.yml` to remove `workspace: ...` for that vault and add `selfContained: true` instead.

```yaml
workspace:
  vaults:
    - fsPath: my-workspace-vault
      name: my-workspace-vault
      selfContained: true
```

1. Remove the workspace from the `workspaces:` section.

```yaml
workspace:
  vaults: ...
  workspaces:
    my-workspace-vault: # Remove this
      ...
```

Restart VSCode and your now self contained vault should now work!
Try doing a lookup, you should be able to access the notes in your vaults.
