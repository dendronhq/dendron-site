---
id: ceca23ee-6181-4fa6-9724-9943433c6e96
title: 3 Standalone Vaults
desc: ''
updated: 1620049097047
created: 1612908742957
---

## Goals

Make it possibel to use Dendron outside of a workspace using standalone vaults.

## Details

Currently Dendron requires a `dendron.code-workspace` file and to be in an active VSCode Workspace to work. This is cumbersome for a few reasons:

-   it requires that a user be in an active vscode workspace
-   it doesn't let you use Dendron in an existing VSCode project (eg. editing `docs` folder inside a code workspace)

See this [issue](https://github.com/dendronhq/dendron/issues/402) for more details.

## Proposal

Standalone Vaults will make it possible for Dendron to work outside of a workspace.

Vaults will be initialized with their own config file like the one below

```
- vault/
    - dendron.vault.yml
```

This file will be similar to [[dendron.yml|dendron.ref.config]] but with vault specific properties which are listed below

-   notes: string
    -   specify where to look for notes
    -   by default, this will be `.` which stands for all files in this directory
    -   you can add multiple rules and standard globbing rules will apply
-   vault:
    -   this is similar to the [[vault property|dendron.ref.config#vault-properties]] of `dendron.yml`
    -   when a standalone vault is included in a dendron workspace, the vault properties in `dendron.vault.yml` will be merged and take precedence
    -   no `fsPath` property

```
- docs/
    - dendron.vault.yml
    - README.md
    - notes/
    - assets/
```

## Related
