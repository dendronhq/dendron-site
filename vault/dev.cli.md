---
id: Y0cZsmfUdytwajRGeylMZ
title: CLI
desc: ''
updated: 1637524450987
created: 1631473249667
---

Dendron has a [[CLI|dendron.ref.cli]] command to help with development.

```sh
dendron dev <cmd>

commands related to development of Dendron

Positionals:
  cmd  a command to run
      [string] [required] [choices: "generate_json_schema_from_config", "build",
      "bump_version", "publish", "sync_assets", "prep_plugin", "package_plugin",
    "install_plugin", "enable_telemetry", "disable_telemetry", "show_telemetry",
                                             "show_migrations", "run_migration"]

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
  --migrationVersion  migration version to run
```

## Common Options

### upgradeType

What next semver version to upgrade to

## Commands

### generate_json_schema_from_config

Update json schema for `dendron.yml`

### build

Build vsix for a given upgradeType [^upgrade]

Options:
- --fast: when building fast mode, the following is skipped:
  - initial type checking
  - restoring `package.json` and `plugin-core` to original state
  - do not upload source map to sentry

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

Options:
- --fast: when set, skip installing packages, skip uploading to sentry

Env:
- ANALYZE_BUNDLE: if set, create a treemap of dependencies using [webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)

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

### show_migrations

Shows a list of available migrations that could be run with [[run_migration|dendron.dev.cli#run_migration]].

```sh
> dendron dev show_migrations

======Available Migrations======

Make note of the version number and use it in the run_migration command

e.g.)
> dendron dev run_migration --migrationVersion=0.64.1

------------------------------------------------------------------------
version          | description
------------------------------------------------------------------------
0.64.1           | migrate config
0.55.2           | migrate note lookup config
0.51.4           | migrate scratch config
0.51.4           | don't switch to legacy preview if not currently on it
0.47.1           | migrate journal config
0.46.0           | update cache
------------------------------------------------------------------------
>
```

### run_migration

Runs a migration specified by `--migrationVersion={version}`.
`--wsRoot` is required (explicitly provided, or run from the root directory).

```sh
// run from workspace root.
> dendron dev run_migration --migrationVersion=0.64.1

migration succeeded.
```
