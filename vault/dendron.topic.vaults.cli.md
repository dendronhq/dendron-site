---
id: x9li78kk08yxpatyf68je4h
title: Vaults CLI
desc: 'Manage your vaults via the CLI'
updated: 1655310549913
created: 1655310549913
---

## Summary

{{fm.desc}}

## Usage

```sh
vault related commands

Positionals:
  cmd  a command to run       [string] [required] [choices: "create", "convert"]

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
  --vaultPath       path to vault                            [string] [required]
  --noAddToConfig   if set, don't add vault to dendron.yml             [boolean]
  --remoteUrl       If converting to a remote vault, URL of the remote to use.
                    Like https://github.com/dendronhq/dendron-site.git or
                    git@github.com:dendronhq/dendron-site.git           [string]
  --type            If converting a vault, what type of vault to convert it to.
                                           [string] [choices: "remote", "local"]
```

<!-- ### Options -->

<!-- ### Actions -->


## Examples
- Create a new vault 

```sh
dendron vault create --vaultPath kevin-test --wsRoot .
```

- Convert a vault to `remote` from `local`
```sh
dendron vault convert --vaultPath kevin-test --wsRoot . --type remote --remoteURL https://github.com/dendronhq/dendron-site.git
```
