---
id: RjBkTbGuKCXJNuE4dyV6G
title: CLI
desc: ''
updated: 1661797238811
created: 1636500007852
---

## Summary

The Dendron CLI exposes Dendron's functionality via the command line. 

## Prerequisites

### Install Node.js

There are several approaches that can be taken to install Node.js to your desktop. Select one of the following:

- Easiest path for non-devs/non-engineers: Visit the official [nodejs.org](https://nodejs.org/en/) website to download Node.js directly and install the appropriate package for your operating system.
- [MacOS or Linux: Install Node.js via `nvm` (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [MacOS or Linux: Install Node.js via `nodenv` (instead of `nvm`)](https://github.com/nodenv/nodenv)
- Microsoft docs: [Windows: Install Node.js via `nvm-windows`](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)

### Verify Node.js

- Verify that node is available in VS Code in a terminal.

- Run the command: [`Terminal: Create New Terminal`](https://code.visualstudio.com/docs/editor/integrated-terminal)
- Run the following in the terminal: `node --version`
- You should see a version number printed out. It's recommended to at least be the latest LTS Version of Node.js
- If you see `command not found`, you might need to restart your terminal, login session, or system before attempting to verify again

## Installation

### Local directory

If dendron-cli is installed in the local directory via npm
- Creates a package.json and package-lock.json
- dendron-cli is only accessible in the directory this is ran in
- dendron commands must be run like: `npx dendron <cmd>`
- This is best practice for repos doing publishing, etc.

```sh
npm install @dendronhq/dendron-cli@latest
```

### Globally accessible

```sh
# If dendron-cli is installed at a global level via npm
# - dendron-cli is accessible via any directory
# - Ensures dendron-cli can run without the `npx` prefix
# - dendron commands must be run like: `dendron <cmd>`
npm install -g @dendronhq/dendron-cli@latest
```

## Common Options

### wsRoot

This only needs to be set if you are not executing the CLI from within the root of your [[workspace|dendron.concepts#workspace]] or in a subdirectory of an existing workspace

### vault

Path to a [[vaults|dendron.concepts#vaults]]. If not given and not a [[multi vault|dendron.topic.multi-vault]] workspace, Dendron will use the only existing vault. Otherwise, will ask for you to specify a vault

### useLocalEngine
Runs the command called using the in memory engine instead of connecting to a server.


## dev

```sh
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
