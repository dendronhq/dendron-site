---
id: 5ca2fe99-0abc-413d-aa06-50f9a66e13e0
title: Troubleshooting
desc: ''
updated: 1623863531700
created: 1609525003662
---

## Diagnostics

## Issues

### Site Preview shows "Cannot Get/"

Causes:

1. You have another program running on port 8080
2. You have a firewall that is blocking port 8080

Diagnosis:

1. Check if something is running on port 8080 and close it
2. Check if your firewall is blocking port 8080
   - [windows](https://windowsreport.com/is-windows-firewall-blocking-port-program/)
3. See [[Inspect and Kill Existing Process|dendron.topic.publishing.troubleshooting#inspect-and-kill-existing-process]] for more details

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

### Search isn't working on the site

This could be the result of a CORS issue. Make sure that both `siteUrl` and `cname` are referring to the same domain.

This is good

```
siteUrl: https://foo.com
cname: foo.com
```

This is bad

```
siteUrl: https://www.foo.com
cname: foo.com
```

### My image isn't showing up

- Make sure your images have a leading `/`. So `/assets/images/foo.jpg` instead of `assets/images/foo.jpg`.
- If you are publishing to GitHub, check if [[assetsPrefix|dendron.topic.publish-legacy.configuration#assetsprefix-optional]] is set

### Command failed when installing or upgrading dependencies

```bash
Command failed with ENOENT: npm install 
```

This could be due to multiple reasons:

```
- Make sure the default shell you have for VS Code is set to a shell that has npm in it. See [here](https://stackoverflow.com/questions/37823194/cannot-find-runtime-node-on-path-visual-studio-code-and-node-js) for changing your default shell.
- Make sure that `package.json` is not open during installation (you might see `operation not permitted` on windows)
```

## Fixes

### Inspect and Kill Existing Process

Dendron runs the preview on port 8080. Make sure you don't have something already running there.

- windows
```powershell
# get ids of processes
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess

# if you see any result, you can stop them using the following command
Stop-process -Id {IDS_FROM_ABOVE}
```

- linux
```bash
# get ids
lsof -l -n -P -i tcp:8080 

# kill
kill -9 {IDS}
```
