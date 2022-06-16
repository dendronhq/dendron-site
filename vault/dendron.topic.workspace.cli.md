---
id: nlzj5ygmtlk68q0vj2lin23
title: Workspace CLI
desc: 'Manage your workspace via the CLI'
updated: 1655311542393
created: 1655311542393
---

## Summary

{{fm.desc}}

## Usage

```sh
dendron workspace <cmd>

workspace related commands

Positionals:
  cmd  a command to run
           [string] [required] [choices: "pull", "push", "addAndCommit", "sync",
                                                  "removeCache", "init", "info"]

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace
  --vault           name of vault
  --quiet           don't print output to stdout
  --enginePort      If set, connect to to running engine. If not set, create new
                    instance of Dendron Engine
  --attach          Use existing engine instead of spawning a new one
  --useLocalEngine  If set, use in memory engine instead of connecting to a
                    server                                             [boolean]
```

<!-- ### Options -->

#### init

Initialize a [[Workspace|dendron://dendron.dendron-site/dendron.topic.workspace]].

#### pull

Run `git pull --rebase` on all vaults inside workspace

#### push

Run `git push` on all vaults inside workspace

- NOTE: push currently skips [[workspace vaults|dendron.concepts#workspace-vault]]

#### addAndCommit

Run `git add . && git commit` on all vaults inside the workspace

#### sync

Run `addAndCommit`, `pull`, and `push` on all vaults inside the workspace. This follows the same configuration as the `Workspace: Sync` command in the extension, see [[Workspace Sync|dendron.topic.workspace#Workspace: Sync]] for details.

<!-- #### removeCache -->

<!-- #### info  -->

<!-- ## Examples -->


