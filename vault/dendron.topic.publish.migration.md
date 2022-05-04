---
id: rYbs1qLh9VJBXCJlSzMt4
title: Migration
desc: ''
updated: 1650378725026
created: 1632351743935
---

## Summary

Upgrading Dendron configurations and `dendron-cli` for the latest and greates publishing updates.

## Upgrade Dendron CLI

Please note that if you have an automated pipeline set up for publishing that uses `dendron-cli`, you need to manually upgrade `dendron-cli` so that is compatible with the current configuration version. Upgrading helps avoid errors due to configuration mismatch.

If there is a compatibility mismatch, running the CLI will display a message that the version does not meet the minimum compatible version. If you see this message, please upgrade `dendron-cli` to the latest version.

![[dendron://dendron.dendron-site/dendron.topic.cli.upgrade#steps,1]]

## Upgrade dendron.yml configurations

### General Configuration Upgrades

Dendron automatically checks your workspace for an outdated `dendron.yml` configuration when you open in VS Code / VSCodium. You will be prompted about migrating if a migration is necessary.

Migrations automatically create a backup configuration file in case you need to revert to an older CLI.

### Manual upgrade of configurations via CLI

Instead of automatically through the VS Code / VSCodium, users can migrate the `dendron.yml` configuration to the latest version if the latest [[Dendron CLI|dendron://dendron.dendron-site/dendron.topic.cli]] is installed.

#### show_migrations

List available migration versions.

```bash
npx dendron dev show_migrations
```

#### run_migration

Migrate a config to the target version.

```bash
# Example
npx dendron dev run_migration --migrationVersion=0.83.0
```

### Upgrading from Legacy 11ty

If you are coming from Dendron's legacy publishing (based on 11ty), you can look at the following guides for publishing.

If you were publishing using github pages without using github actions, follow the [[GitHub Pages|dendron://dendron.dendron-site/dendron.topic.publish.cook.github]] guide.

If you were publishing using github pages with github actions, follow the [[GitHub Pages with GitHub Actions|dendron://dendron.dendron-site/dendron.topic.publish.cook.github-action]] guide.

If you are publishing using an alternate platform, consult the [[GitHub Pages|dendron://dendron.dendron-site/dendron.topic.publish.cook.github]] guide and adapt it for your specfic platform. 

If you run into any issues or have general questions, post in the [[publishing|dendron://dendron.dendron-site/community.discord.channels#publishing]] channel in discord for help. 

## Breaking Changes

### Pretty Links

Dendron Next.js publishing uses pretty urls which means pages will no longer have a `.html` suffix.  If you are migrating an existing 11ty based Dendron site to Next.js, make sure to redirect `.html` pages to preserve existing links
