---
id: 7tlxi5ejnnb8idhc1943zmp
title: Local Config Override
desc: ""
updated: 1656620663520
created: 1651708524625
published: true
---

## Summary

-   status: #stage.germ
    !#stage.germ

Local config overrides allows for a custom `dendronrc.yml` file, located either inside the `$WS_ROOT` or the `$HOME` folder to be merged with the values in `dendron.yml`.

## Usecases

-   add local configuration that you don't want to check in to a shared `dendron.yml`
-   add your own local vault to a shared team vault
-   keep a list of vaults that you want to have access to everywhere

## Concepts

### Local Config

-   alias: LC

The `dendronrc.yml` used to override existing configurations

### Local Config Vaults

-   alias: LCV

These are vaults that are added via a local dendronrc.yml file

## Limitations

-   LCVs will not be added to the workspace file: this results in some notable UX changes:
    -   you will not be able to use `cmd+p` to navigate notes inside LCV
    -   you will not be able to use the native code explorer pane to navigate inside a LCV
    -   the vscode breadcrump will show you the full path to a note inside a LCV
    -   the default source control view will not show a LCV (workspace sync will still work)
-   LCVs will not be automatically added to `.gitignore` - you will need to manually do this
-   LC can extend existing vaults but not delete or remove existing vaults
-   there is currently no built-in command to create/update/delete a LC

## Examples

### Add a local vault to your team workspace

1. Create a `dendronrc.yml` file
    ```yml
    cd $WS_ROOT
    touch dendronrc.yml
    ```
1. Add your own configuration
    - NOTE: the easiest way to set this up is by adding a vault locally in the workspace, copying the resulting yml from `dendron.yml`, and then removing the vault locally
    ```yml
    workspace:
        vaults:
            - fsPath: dependencies/localhost/local-vault
              selfContained: true
              name: local-vault
    ```
1. Add the vault to the `.gitignore`

    ```sh
    echo dependencies/localhost/local-vault >> .gitignore
    ```

1. Reload your workspace

### Command

`Dendron: Configure Local Override`

This command opens up `dendronrc.yml` file for a specified scope.

User is prompted to choose the configuration scope when running the command: `WORKSPACE` or `GLOBAL`.

`WORKSPACE` -> `dendronrc.yml` under `$WS_ROOT`: affects currently opened workpsace
`GLOBAL` -> `dendronrc.yml` under `$HOME`: affects all local workspaces of the current user

If `dendronrc.yml` doesn't exist for the specified scope, the command creates one.
