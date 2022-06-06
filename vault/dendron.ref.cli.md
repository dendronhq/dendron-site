---
id: 23a1b942-99af-45c8-8116-4f4bb7dccd21
title: CLI
desc: ''
updated: 1654537474348
created: 1600033791071
nav_order: 1.1
---

## Summary

The [[Dendron CLI|dendron://dendron.dendron-site/dendron.topic.cli]] exposes Dendron's functionality via the command line. 

## Common Options

### wsRoot

This only needs to be set if you are not executing the CLI from within the root of your [[workspace|dendron.concepts#workspace]] or in a subdirectory of an existing workspace

### vault

Path to a [[vaults|dendron.concepts#vaults]]. If not given and not a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will use the only existing vault. Otherwise, will ask for you to specify a vault


### useLocalEngine
Runs the command called using the in memory engine instead of connecting to a server.

## Engine Commands

### doctor

Use doctor to perform specific fixes over your notes. 

- NOTE: the `fixFrontmatter` option is only available via the plugin at this time

```bash
doctor helps you fix your notes

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
  --action          what action the doctor should take
      [string] [choices: "fixFrontmatter", "h1ToTitle", "h1ToH2", "removeStubs",
              "createMissingLinkedNotes", "regenerateNoteId", "findBrokenLinks",
           "fixRemoteVaults", "fixAirtableMetadata", "addMissingDefaultConfigs",
                    "removeDeprecatedConfigs", "fixSelfContainedVaultsInConfig"]
  --query           run doctor over a query                             [string]
  --limit           limit num changes                                   [number]
  --dryRun          dry run                                            [boolean]
  --podId           podId used to export note(s) to Airtable            [string]
```

#### Actions

- NOTE: not all doctor commands are available in the CLI, please review above list of actions.

![[dendron.topic.doctor#commands,1:#CLI]]

#### Examples

- convert all `h1` tags to frontmatter `title` values for the `readings` hierarchy

```bash
dendron doctor --wsRoot . --action h1ToTitle --limit 10 --query "readings.*" 
```

- see log

```bash
LOG_LEVEL=info LOG_DST=stdout dendron doctor --wsRoot . --action h1ToTitle --limit 10 
```

### launchEngineServer

Launch the [[Dendron server|dendron.roadmap.project.n.2020.server-migration]]. Useful for development purposes or to launch the server in a specified port

The CLI will also write out `.dendron.*` [[metadata files|dendron._ref.layout#file-tree]] in the workspace root just the same as the Dendron plugin. 


```sh
launch instance of dendron engine

Options:
  --version      Show version number                                   [boolean]
  --help         Show help                                             [boolean]
  --wsRoot       location of workspace
  --vault        name of vault
  --quiet        don't print output to stdout
  --port         port to launch server                                  [number]
  --init         initialize server                                     [boolean]
  --noWritePort  don't write the port to a file                        [boolean]
  --fast         launch engine without indexing                        [boolean]
```


#### Examples

```bash
dendron launchEngineServer --wsRoot ~/Dendron/ --port 3005
```

## Publishing Commands

### publish

```bash
dendron publish <cmd>

commands for publishing notes

Positionals:
  cmd  a command to run
                 [string] [required] [choices: "init", "build", "dev", "export"]

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  --wsRoot     location of workspace
  --vault      name of vault
  --quiet      don't print output to stdout
  --dest       override where nextjs-template is located                [string]
  --attach     use existing dendron engine instead of spawning a new one
                                                                       [boolean]
  --noBuild    skip building notes                    [boolean] [default: false]
  --overrides  override existing siteConfig properties                  [string]
```

See [[dendron.topic.publish]] for more information about publishing your notes.

#### Examples

- build and preview the site locally

```bash
dendron publish dev
```


## Pod Commands

- NOTE: you can find pod ids in the [[pods|dendron.topic.pod]] page. Just add a `.import|.export` to the end of the id (eg. `dendron.pod.json.import`)

![[dendron://dendron.dendron-site/dendron.topic.pod.cli]]

## Vault Commands

```sh
dendron vault <cmd>

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

### Actions

#### Create

Create a vault. By default, also add entry to `dendron.yml`. If no `dendorn.yml` is present, will create one. 

```sh
dendron vault create --vaultPath kevin-test --wsRoot .
```

<!-- #### Convert

Convert a vault between `remote` and `local`.

```sh
dendron vault convert --vaultPath kevin-test --wsRoot . --type remote --remoteURL https://github.com/dendronhq/dendron-site.git
```
-->

## Workspace Command

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

<!-- #### removeCache

#### info 
-->

## Note Command
```bash
dendron note <cmd>

note related commands

Positionals:
  cmd  a command to run[string] [required] [choices: "lookup", "delete", "move"]

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
  --query           the query to run                                    [string]
  --output          format to output in
            [string] [choices: "json", "md_gfm", "md_dendron"] [default: "json"]
  --destFname       name to change to (for move)                        [string]
  --destVaultName   vault to move to (for move)                         [string]
```

### Actions

#### lookup
Find or create a note

Options

- `--query`: Note to query for. Same syntax as [[dendron.topic.lookup]]
  - type: string
- `--output`: controls how note is formatted
    - values: `json|md_gfm|md_dendron`
        - json: JSON output
        - md_dendron: dendron markdown
        - md_gfm: github flavored markdown 

Examples
- Creating a note

```bash
# creates hello if it does not exist
dendron note lookup --query "hello" 
```

- Querying a note

```bash
# retrieves hello.md if it does exist
dendron note lookup --query "hello" 
```

- Querying a note with GitHub Flavored Markdown output

```bash
# retrieves hello.md if it does exist
dendron note lookup --query "hello" --output md_gfm
```

#### find
Retrieve a note using lookup

Options

- `--query`: Note to query for. Same syntax as [[dendron.topic.lookup]]
  - type: string

Examples
```bash
# creates hello if it does not exist
dendron note find --query "tutorial" 
```

- output
    - NOTE: this is truncated for easy viewing

```json
[
    {
        "id": "tbilk9to67d0dwgnjanj5ph",
        "title": "Getting Started",
        "desc": "",
        "updated": 1652280532205,
        "created": 1608051264282,
        "nav_order": 1.1,
        "fname": "tutorial",
        "type": "note",
        "vault": {
            "fsPath": ".",
            "selfContained": true,
            "name": "Dendron"
        },
        "contentHash": "981f271a9d5f1bfbfd66781d3a16b9a8",
        "links": [
            {
                "type": "wiki",
                "from": {
                    "fname": "tutorial",
                    "id": "tbilk9to67d0dwgnjanj5ph",
                    "vaultName": "Dendron-2"
                },
                "value": "tutorial.user-interface",
                "alias": "overview of the Dendron UI",
                "position": {
                    "start": {
                        "line": 5,
                        "column": 27,
                        "offset": 156
                    },
                    "end": {
                        "line": 5,
                        "column": 81,
                        "offset": 210
                    },
                    "indent": []
                },
                "xvault": false,
                "sameFile": false,
                "to": {
                    "fname": "tutorial.user-interface"
                }
            }
        ],
        "anchors": {},
        "children": [
            "wmbd5xz40ohjb8rd5b737cq",
            "rjnqumna1ye82u9u76ni42k",
            "ie5x2bq5yj7uvenylblnhyr",
            "iq3ggn67k1u3v6up8ny3kf5",
            "kl6ndok3a1f14be6zv771c9"
        ],
        "parent": "root",
        "data": {},
        "body": "\nDendron is an IDE for general knowledge.\nCombine the simplicity of markdown with the power of a modern development environment.\n\nTo begin, lets do a quick [[overview of the Dendron UI|tutorial.user-interface]]!\n"
    },
    ...
]
```

#### delete

Examples

- Deleting a note
```bash
dendron note delete --query "foo" 
```

- Deleting a note within a multi-vault workspace
```bash
dendron note delete --vault vault2 --query "foo" 
```

#### move

Examples

- Moving a note
```bash
# renames the note "foo" to "bar" within a single-vault workspace
#   if there is no note in the vault already named "bar"
dendron note move --query "foo" --destFname "bar"
```

- Moving a note in a multi-vault workspace
```bash
# moves the note "foo" to vault2 and changes its name to "bar"
#    if there is no note in vault2 already named "bar"
dendron note move --vault vault --query "foo" --destFname "bar" --destVaultName vault2
```

## Dev Command

```bash
dendron dev <cmd>

commands related to development of Dendron

Positionals:
  cmd  a command to run
      [string] [required] [choices: "generate_json_schema_from_config", "build",
       "bump_version", "publish", "sync_assets", "sync_tutorial", "prep_plugin",
    "package_plugin", "install_plugin", "enable_telemetry", "disable_telemetry",
                           "show_telemetry", "show_migrations", "run_migration"]

Options:
  --version           Show version number                              [boolean]
  --help              Show help                                        [boolean]
  --wsRoot            root directory of the Dendron workspace
  --vault             name of vault
  --quiet             don't print output to stdout
  --upgradeType       how to do upgrade
                              [choices: "major", "minor", "patch", "prerelease"]
  --publishEndpoint   where to publish              [choices: "local", "remote"]
  --extensionTarget   extension name to publish in the marketplace
                                                 [choices: "dendron", "nightly"]
  --fast              skip some checks
  --skipSentry        skip upload source map to sentry
  --migrationVersion  migration version to run
                     [choices: "0.83.0", "0.55.2", "0.51.4", "0.47.1", "0.46.0"]

```

<!-- ### Actions

#### generate_json_schema_from_config

#### build

#### bump_version

#### publish

#### sync_assets

#### sync_tutorial

#### prep_plugin

#### package_plugin

#### install_plugin

#### enable_telemetry

#### disable_telemetry

#### show_telemetry

#### show_migrations

#### run_migration -->
