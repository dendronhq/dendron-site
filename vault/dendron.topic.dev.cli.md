---
id: mmqulakecwvn0qd0u7ve9lj
title: CLI
desc: ''
updated: 1660956290080
created: 1654385374172
---

## Synopsis
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
- value: patch|minor

What next semver version to upgrade to

## Commands

### prep_plugin

Prepare plugin by updating `package.json`. Performs the following operations:
- change target name
- update target license
- remove testing dependencies

### package_plugin
![[dendron://dendron.dendron-site/dendron.topic.dev.cli.package-plugin]]