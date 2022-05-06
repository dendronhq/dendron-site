---
id: zsXLpFWS0ewoFsHwwAeoG
title: Trouble
desc: ''
updated: 1651790199641
created: 1637006198958
---


## Issues

### Certain hierarchies are not appearing

If you're only publishing a sub-set of your notes (i.e. not everything under root), all the hierarchies you want to appear on the site must be listed in dendron.yml under siteHierarchies. E.g.
```
site: 
    siteHierarchies:
        - topics
        - projects
        - areas
```

### My favicon isn't showing up

This might be due to favicon caching on localhost. It should resolve when published.

### Command failed when installing or upgrading dependencies

```bash
Command failed with ENOENT: npm install 
```

This could be due to multiple reasons:

```
- Make sure the default shell you have for VS Code is set to a shell that has npm in it. See [here](https://stackoverflow.com/questions/37823194/cannot-find-runtime-node-on-path-visual-studio-code-and-node-js) for changing your default shell.
- Make sure that `package.json` is not open during installation (you might see `operation not permitted` on windows)
```

## Diagnostics

### Check that you have the latest version of Dendron
```sh
dendron --version
```

## Remediations

### Upgrade to the latest version of Dendron

```sh
npm install -g @dendronhq/dendron-cli
```

### Inspect and Kill Existing Process

Dendron runs the preview on port 3000. Make sure you don't have something already running there.

- windows
```powershell
# get ids of processes
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess

# if you see any result, you can stop them using the following command
Stop-process -Id {IDS_FROM_ABOVE}
```

- linux
```bash
# get ids
lsof -l -n -P -i tcp:3000 

# kill
kill -9 {IDS}
```