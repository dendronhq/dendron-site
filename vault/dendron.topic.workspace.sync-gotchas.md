---
id: XIqGE3QNlUHirQjHQpCXd
title: Sync Gotchas
desc: ""
updated: 1643180516406
created: 1643180107264
---

## Synchronizing your workspace

"Workspace Sync" only synchronizes vaults, and not workspaces. However, if your workspace has a [[local vault|dendron.topic.vaults#local-vault]],
then the workspace will get synchronized along with that vault. The vault will
be considered a [[workspace vault|dendron.topic.vaults#workspace-vault]], so make sure to
set your [[workspace vault sync|dendron.ref.config.workspace#workspacevaultsyncmode]] configuration.

If you don't want your workspace synchronized, make sure to set your [[workspace vault sync|dendron.ref.config.workspace#workspacevaultsyncmode]] is set to [[skip|dendron.topic.workspace#skip]].
Or, [[convert|dendron.ref.commands#vault-convert]] all your local vaults to remote vaults.

## Pulling with noCommit vaults

If you have a vault or workspace configured with `noCommit`, and the workspace
has uncommitted changes to tracked files, then Workspace Sync will try to stash
your changes, pull remote changes, then restore your changes. This is necessary
because git will otherwise refuse to pull remote changes.

If Dendron were to crash in the middle of the sync (which we have never seen in practice),
there's a small chance that the stashed changes might not get restored. If that happens, run the [[Dendron:Dev: Open Logs|dendron.ref.commands#dendrondev-open-logs]] command, and then search the log file for `pullVaults`. You should find a line like this:

```json
{"level":30,"time":1643180040610,"pid":171594,"hostname":"eclipse","name":"logger","ctx":"pullVaults","vaults":[{"fsPath":"vault"}],"repo":"/tmp/test-ws","stashed":"f265fe01c2b75827b4b5a68ba26520da820454ea"}
```

Copy the value for "stashed" (`f265...4ea`), then open a terminal in the repository folder. Then, run `git stash apply <stashed value here>` to restore any changes that were stashed away.