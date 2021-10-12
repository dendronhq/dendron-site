---
id: Y0cZsmfUdytwajRGeylMZ
title: CLI
desc: ''
updated: 1634011214546
created: 1631473249667
---

Dendron has a [[CLI|dendron.topic.cli]] command to help with development.

```sh
dendron dev <cmd>

commands related to development of Dendron

Positionals:
  cmd  a command to run
      [string] [required] [choices: "generate_json_schema_from_config", "build",
      "bump_version", "publish", "sync_assets", "prep_plugin", "package_plugin", "install_plugin", "enable_telemetry", "disable_telemetry", "show_telemetry"]

Options:
  --version           Show version number                              [boolean]
  --help              Show help                                        [boolean]
  --wsRoot            location of workspace
  --vault             name of vault
  --quiet             don't print output to stdout
  --upgradeType       how to do upgrade
                              [choices: "major", "minor", "patch", "prerelease"]
  --publishEndpoint  where to publish              [choices: "local", "remote"]
```

## Common Options

### upgradeType

What next semver version to upgrade to

## Commands

### generate_json_schema_from_config

Update json schema for `dendron.yml`

### build

Build vsix for a given upgradeType [^upgrade]

### bump_version

Bump up version number for upgradeType [^upgrade]

### publish

Publish packages to npm

```sh
# publish to remote endpoint
dendron dev publish  --publishEndpoint remote
```

### sync_assets

Re-built static HTML used in plugin

### prep_plugin

Format `package.json` of plugin to make it compatible with `vsce package`


### package_plugin

Equivalent to running the following

```sh
yarn 
vsce package --yarn
```

### install_plugin

Install latest vsix in all local vscode versions

<!-- Citations -->
[^upgrade]: [[upgradeType|dendron.dev.cli#upgradetype]]

### enable_telemetry

Enables telemetry. This also affects telemetry while using Dendron in VSCode.

### disable_telemetry

Disables telemetry. This also affects telemetry while using Dendron in VSCode.

### show_telemetry

Shows telemetry notice.