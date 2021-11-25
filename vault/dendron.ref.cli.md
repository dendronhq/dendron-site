---
id: 23a1b942-99af-45c8-8116-4f4bb7dccd21
title: CLI
desc: ''
updated: 1635119294043
created: 1600033791071
nav_order: 1.1
---

## Summary
The Dendron CLI exposes Dendron's functionality via the command line. 

## Installation

```sh
npm install -g @dendronhq/dendron-cli
```

## Upgrade

```sh
npm install -g @dendronhq/dendron-cli@latest
```

## Common Options

### wsRoot

This only needs to be set if you are not executing the CLI from within the root of your [[workspace|dendron.concepts#workspace]] or in a subdirectory of an existing workspace

### vault

Path to a [[vaults|dendron.concepts#vaults]]. If not given and not a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will use the only existing vault. Otherwise, will ask for you to specify a vault

## Engine Commands

### doctor

Use doctor to perform specific fixes over your notes. 

- NOTE: the `fixFrontmatter` option is only available via the plugin at this time

```bash
doctor helps you fix your notes

Options:
  --version     Show version number                                    [boolean]
  --help        Show help                                              [boolean]
  --wsRoot      location of workspace                                 [required]
  --enginePort  If set, connecto to running engine. If not set, create new
                instance of Dendron Engine
  --action      what action the doctor should take
                            [array] [choices: "h1ToTitle", "h1ToH2"]
  --query       run doctor over a query                                 [string]
  --limit       limit num changes                                       [number]
  --dryRun      dry run                                                [boolean]
```

#### available actions

![[dendron.ref.commands#actions,1:#*]]

#### examples

- convert all `h1` tags to frontmatter `title` values for the `readings` hiearchy

```bash
dendron doctor --wsRoot . --action h1ToTitle --limit 10 --query "readings.*" 
```

- see log

```bash
LOG_LEVEL=info LOG_DST=stdout dendron doctor --wsRoot . --action h1ToTitle --limit 10 
```

### launchEngineServer

Launch the [[dendron server|dendron.roadmap.project.n.2020.server-migration]]. Useful for development purposes or to launch the server in a specified port

The CLI will also write out `.dendron.*` [[metadata files|dendron._ref.layout#file-tree]] in the workspace root just the same as the Dendron plugin. 


```sh
launch instance of dendron engine

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --wsRoot   location of workspace
  --vault    name of vault
  --quiet    don't print output to stdout
  --port     port to launch server                                      [number]
  --init     initialize server                                         [boolean]
```


#### Example

```
dendron launchEngineServer --wsRoot ~/Dendron/ --port 3005
```

## Publishing Commands

### buildSite

```bash
dendron buildSite

build notes for publication using 11ty

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace                             
  --enginePort      If set, connecto to running engine. If not set, create new
                    instance of Dendron Engine
  --serve           serve over local http server      [boolean] [default: false]
  --stage           serve over local http server
                                       [choices: "dev", "prod"] [default: "dev"]
  --output          if set, override output from config.yml             [string]
  --custom11tyPath  if set, path to custom 11ty installation            [string]
```

#### Using a different port

![[dendron.topic.publish-legacy.configuration#previewport,1:#*]]

#### Connect to Open Workspace

Normally, this command will spawn a new Dendron Engine that indexes your notes before building them for publication. You can skip this initial indexing if you have a current Dendron workspace running. 

In that case, the CLI can connect to the current engine instead of starting a new one using the following command. 

```bash ^Vn7zB1oSBz07
cd {root/of/workspace}
# .dendron.port has the port of the current running workspace
npx dendron buildSite --wsRoot . --stage dev --serve --enginePort `cat .dendron.port`
```

### Using a custom port


## Pod Commands

- NOTE: you can find pod ids in the [[pods|dendron.topic.pod]] page. Just add a `.import|.export` to the end of the id (eg. `dendron.pod.json.import`)

![[dendron://dendron.dendron-site/dendron.topic.pod.cli]]

## Vault Commands

```sh
dendron vault <cmd>

vault related commands

Positionals:
  cmd  a command to run                  [string] [required] [choices: "create"]

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace
  --vault           name of vault
  --quiet           don't print output to stdout
  --enginePort      If set, connect to to running engine. If not set, create new
                    instance of Dendron Engine
  --useLocalEngine  If set, use in memory engine instead of connecting to a
                    server                                             [boolean]
  --vaultPath       path to vault                            [string] [required]
  --noAddToConfig   if set, don't add vault to dendron.yml             [boolean]
```

### Actions

#### Create

Create a vault. By default, also add entry to `dendron.yml`. If no `dendorn.yml` is present, will create one. 

```sh
dendron vault create --vaultPath kevin-test --wsRoot .
```

## Workspace Command


```sh
dendron workspace <cmd>

workspace related commands

Positionals:
  cmd  a command to run            [string] [required] [choices: "pull", "push"]

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace
  --vault           name of vault
  --quiet           don't print output to stdout
  --enginePort      If set, connect to to running engine. If not set, create new
                    instance of Dendron Engine
  --useLocalEngine  If set, use in memory engine instead of connecting to a
                    server                                             [boolean]
```

### Actions

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

## Dev Command

![[etc.cli]]
