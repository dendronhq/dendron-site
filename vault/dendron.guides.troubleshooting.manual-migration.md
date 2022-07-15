---
id: 4119x15gl9w90qx8qh1truj
title: Manual Migration
desc: ''
updated: 1657008577615
created: 1657008134225
---

You are upgrading from a version that is below 0.63.0, which we do not support direct automatic migration.
You can either manually update the configuration or revert to a compatible older version before upgrading to the current version.

If you have not set custom values for the deprecated configurations listed in [[Deprecated Configs|dendron://dendron.dendron-site/dendron.ref.config.vscode-config.deprecated]], you may safely ignore this warning.

Otherwise, please follow the steps below:

## Method 1: Reverting to a compatible version

> This instruction reverts you to the last version of Dendron that supports automatic migration on upgrade.

1. Go to the Extensions panel and find Dendron
2. Click on the cog wheel icon and select `Install Another Version...`
3. Select `0.100.0`, and wait for the installation to complete
4. Reload VSCode and wait for Dendron to activate
5. Update Dendron back to the latest version
6. Confirm that configurations are migrated correctly

## Method 2: Manual Migration

> This instruction is for manually moving deprecated configurations to the correct location. If you've successfully migrated using the first method, you may skip this step.

1. Open `dendron.code-workspace` and `dendron.yml`
2. consult [[Deprecated Configs|dendron://dendron.dendron-site/dendron.ref.config.vscode-config.deprecated]] to find the deprecated configurations in `dendron.code-workspace` and move them to the correct location in `dendron.yml`
3. Reload VSCode