---
id: aikv0yamnfkcowlol7qeldy
title: Migrating to Self Contained Vaults
desc: ''
updated: 1651827188676
created: 1651741592127
---

Migrating to self contained vaults is not automated yet, so you'll have to do it
manually if you want to try them out right now with your existing vaults.

Before migrating your vaults:
- Make sure your notes are backed up: put them on a remote git repository, use backup software, or at least copy them to a second location.
- Check that you have the latest versions of Dendron and VSCode.
- Make sure you have the latest config version (`dendron.yml` should say `version: 5`). Dendron should prompt you to upgrade when you start, or you can use [[Run Migration|dendron://dendron.dendron-site/dendron.ref.commands#dendrondev-run-migration]] if you didn't get the prompt.
- If you are collaborating with other people in this vault, let them know you are migrating. They should sync their workspace before and after you migrate to avoid merge conflicts.

## Migrating a workspace with a single vault

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

## Migrating a workspace with multiple vaults

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

## Migrating a Workspace Vault

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
    vaults:
      ...
    workspaces:
      my-workspace-vault: # Remove this
        ...
  ```

Restart VSCode and your now self contained vault should now work!
Try doing a lookup, you should be able to access the notes in your vaults.
