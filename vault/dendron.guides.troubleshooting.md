---
id: a6c03f9b-8959-4d67-8394-4d204ab69bfe
title: Troubleshooting
desc: ''
updated: 1622221019749
created: 1595952505025
---
## Diagnosing

You can get a better idea of what went wrong by checking out the [[logs|dendron.guides.cook#checking-logs]]. At that point, you should be able to narrow down the root cause to one of the issues below. If not, please bring it up on the [discord](https://discord.gg/AE3NRw9) or file a [bug report](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=)

## Common Errors

### Engine not Initialized
- cause: 
  - 1. You are not running inside a workspace
  - 2. Localhost is blocked
- diagnose
  - 1. See fix
  - 2. Look for `ECONNREFUSED` in the [[logs|dendron.topic.commands#dendrondev-open-logs]]
- fix: 
  - 1. [[Run Dendron inside a Workspace|dendron.guides.troubleshooting#run-dendron-inside-a-workspace]]
  - 2. [[Whitelisting localhost|dendron.guides.troubleshooting#whitelisting-localhost]]

### Notes from the graph/tree view show wrong results
- cause: Views are out of sync
- fix: [[Reload Dendron|dendron.guides.troubleshooting#reload-dendron]]

### Preview not Rendering Correctly
- causes: Using the built-in preview instead of the Dendron preview
- fixes: [[Use Dendron Markdown Preview|dendron.guides.troubleshooting#use-dendron-markdown-preview]]


## Common Fixes

### Uninstall Conflicting Extensions
Markdown Notes, Markdown Preview Enhanced, and Markdown All in One are known to interfere with Dendron

### Use Dendron Markdown Preview

The VSCode default markdown preview has the same icon as Dendron's Markdown Preview.  It is currently not possible to disable the builtin preview (we are looking into fixing this [here](https://github.com/dendronhq/dendron/issues/42)).

Meanwhile, you can open Dendron's markdown preview by clicking the preview button on the left of the menu bar or by using the `> Markdown Preview Enhanced: Open Preview to the Side` command

![Markdown preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble-md.png)

### Reload Dendron

Sometimes Dendron views can get out of sync with notes. To fix, run `Dendron: Reload Index` to manually sync. If that doesn't work, you can also try `Developer: Reload Window` to restart VSCode.

### Remove notes that extend from root

We currently don't support creating children of `root.md` This note is special. While the contents can be edited, creating a hierarchy off root is not officially supported

### Run Dendron inside a Workspace

Dendron requires a VSCode [workspace file](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files) to operate. Make sure to open the **dendron.code-workspace** file by following the instructions [here](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files)

### Clear the cache

Delete dendron [[cache|dendron.ref.caching#summary]] files.

### Whitelisting localhost

Dendron starts a [[local server|dendron.dev.design#overview]] in the background and the plugin connects to it to index notes. Check that you don't have anything that is running or blocking localhost.

## Upgrading

### Error upgrading

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble.upgrade.png)

Dendron will update keybindings/settings/etc to the latest defaults if not currently set on upgrade. If you see the above error, it means that Dendron had trouble parsing one of your settings files. This doesn't stop dendron from starting but it does mean that the latest settings aren't being applied.

The most likely culprit of this error is a bad snippets file. To fix, bring up the command prompt, type `>Configure User Snippets`, open `dendron.code-snippets` and see if there's anything funky with the json on the line mentioned by the error. You can also use tools like [jsonlint](https://jsonlint.com/) to validate your JSON.

## Schemas

### I'm getting a `you cannot define a mapping item when in a sequence` when trying to define a schema

That means there's an issue with your yaml. You can paste it in [yaml lint](http://www.yamllint.com/) to check that you are using the correct yaml syntax. 

### Schema Templates aren't working

Schema templates are defined as YAML objects. The most common mistake is putting them down as a list

For example, this is a valid schema.

```yml
- id: journal
  title: journal
  desc: ""
  parent: root
  children: 
    - daily
- id : daily
  namespace: true
  template:
    id: journal.template.daily
    type: note
```

This is not a valid schema.

```yml
- id: journal
  title: journal
  desc: ""
  parent: root
  children: 
    - daily
- id : daily
  namespace: true
  template:
    - id: journal.template.daily
      type: note
```

## Markdown Preview

### Why can't I click the checkbox?

It could be that you are using the VSCode default markdown instead of Dendron's Markdown Preview. 

![[dendron.guides.troubleshooting#using-the-wrong-preview,1:#*]]

### Still initializing.  Please close this window and try again after Dendron has been initialized.

When Dendron starts up, it initializes a local server which is responsible for indexing notes and fetching note metadata. Plugins like the preview depend on the server being initialized before activating. You'll know the server is initialized after you see a `Dendron is activated` notification.

### Get the logs

Open the [[output view|dendron.topic.workbench#output-view]] and use the dropdown menu to find the log titled `DENDRON`. 


## Linux

### Reference to Another Note on Ubuntu

If Ctrl+Shift+R (reference to another note) doesn't work on Ubuntu, do `sudo apt install xsel`.

## Publishing

### Can't open local preview

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

## Etc

### Error: spawn git ENOENT

Check if you have git installed. You can find more details [here](https://stackoverflow.com/questions/42545885/vs-code-error-spawn-git-enoent)

### Clicking on the link creates multiple files

This is likely due to other extensions that you have installed that provide conflicting definitions for [[wiki links|dendron.topic.links#wiki-links]].

The most likely culprits are `foam` or `markdown-notes`. Uninstalling them will fix this issue. 

You can see your installed 

### Dendron fails to initialize

- check if you have a file with two consecutive dots: `eg. pro..foo.bar`

### Multiple Vaults with the same name

You will get this if you have multiple [[vaults|dendron.topic.config.dendron#vaults]] that have the same name. This is an error with Dendron since Dendron requires all vault names be unique. You can fix this by removing the duplicate vaults or setting a unique [[name|dendron.topic.config.dendron#name]] property for the vault.  


## Send a support request

If none of the troubleshooting methods work, you can ping kevin on Discord or submit a github issue.

When doing either of these things, please include the following information:

- [[Plugin Logs|dendron.guides.cook#checking-logs]]
- [[Server Logs|dendron.guides.cook#server-logs]]
- Contents of your [[workspace settings|dendron.guides.settings]]
- Contents of [[dendron.yml|dendron.topic.commands#configure-yaml]]
