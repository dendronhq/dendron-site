---
id: a6c03f9b-8959-4d67-8394-4d204ab69bfe
title: Troubleshooting
desc: ''
updated: 1635722702072
created: 1595952505025
nav_order: 7.1
---

## Summary

This goes over diagnosing issues in Dendron. Troubleshooting issues are grouped by feature area. 

<!-- 
## Diagnosing

You can get a better idea of what went wrong by checking out the [[logs|dendron.guides.cook#checking-logs]]. At that point, you should be able to narrow down the root cause to one of the issues below. If not, please bring it up on the [discord](https://discord.gg/AE3NRw9) or file a [bug report](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=)

### Dendron-CLI

Check the version numbers of your dependencies. You can get version numbers by running the following commands

```sh
npm info @dendronhq/dendron-cli
``` -->

## Workspace

### Dendron is stuck on loading
- fixes:
  - [[Whitelisting localhost|dendron.guides.troubleshooting#whitelisting-localhost]]

### Engine not Initialized
- cause: 
  - 1. You are not running inside a workspace
  - 2. Localhost is blocked
- diagnose
  - 1. See fix
  - 2. Look for `ECONNREFUSED` in the [[logs|dendron.ref.commands#dendrondev-open-logs]]
- fix: 
  - 1. [[Run Dendron inside a Workspace|dendron.guides.troubleshooting#run-dendron-inside-a-workspace]]
  - 2. [[Whitelisting localhost|dendron.guides.troubleshooting#whitelisting-localhost]]
  - 3. [[Fixing a localhost issue with the Cloudflare WARP VPN|dendron.guides.troubleshooting#whitelisting-localhost]]

### Notes from the graph/tree view show wrong results
- cause: Views are out of sync
- fix: [[Reload Dendron|dendron.guides.troubleshooting#reload-dendron]]

### Preview not Rendering Correctly
- causes: Using the built-in preview instead of the Dendron preview
- fixes: [[Use Dendron Markdown Preview|dendron.guides.troubleshooting#use-dendron-markdown-preview]]

### Lookup Shortcut is not working
- causes:
  - you have the vim extension installed and its overriding the default dendron shortcut
- fix: 
  1. open command palette and run `Open Keyboard Shortcuts (JSON)`
  2. add the following shortcut override
    - NOTE: replace `cmd+l` with `ctrl+l` if you are on windows
  ```json
  {
    "key": "cmd+l",
    "command": "-expandLineSelection",
    "when": "textInputFocus"
  }
  ```

### Cannot read property 'name' of undefined

This is an issue with upgrading to 0.47.0. If you are encountering this, you'll want to copy the following into `dendron.yml`

```yml
journal:
    dailyDomain: daily
    name: journal
    dateFormat: y.MM.dd
    addBehavior: childOfDomainNamespace
    firstDayOfWeek: 1
```

### Can't autocomplete snippets inline

To get snippets to autocomplete, make sure you don't have snippets disabled

1. go to > workspace: open user settings (json)
2. change the following line to `true`

```json
"editor.suggest.snippetsPreventQuickSuggestions": false,
"editor.suggest.showSnippets": true,
"editor.tabCompletion": "on",
```

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

You will get this if you have multiple [[vaults|dendron.ref.config#vaults]] that have the same name. This is an error with Dendron since Dendron requires all vault names be unique. You can fix this by removing the duplicate vaults or setting a unique [[name|dendron.ref.config#name]] property for the vault.  


## Common Diagnostics

### Check Dendron CLI Version

```sh
dendron --version
```

### Launch a new workspace

To check if there is something wrong with Dendron vs your particular workspace setup, launch Dendron in a new workspace by running [[Initialize Workspace|dendron.ref.commands#initialize-workspace]]. 

### Check the logs

Run `Dendron: Open Logs` and search for `"level":50` (these are lines with errors in them). The logs provide a more detailed description of what went wrong and can point what is happening. 

### Check if its a conflicting extension

Sometimes existing extensions will not play nicely with Dendron. To see if a problem is a Dendron specific issue and not another extension, you can do the following:
- do a clean install of a VSCode flavor you do not currently have (eg. VSCodium if you have VSCode or vice versa, see instructions [[here|dendron://dendron.dendron-site/dendron.tutorial#pre-requisites]])
- install only the Dendron extension 
- see if your issue reproduces

## Common Fixes

### Uninstall Conflicting Extensions
Markdown Notes, Markdown Preview Enhanced, and Markdown All in One are known to interfere with Dendron

### Reload Dendron

Sometimes Dendron views can get out of sync with notes. To fix, run `Dendron: Reload Index` to manually sync. If that doesn't work, you can also try `Developer: Reload Window` to restart VSCode.

### Remove notes that extend from root

We currently don't support creating children of `root.md` This note is special. While the contents can be edited, creating a hierarchy off root is not officially supported

### Run Dendron inside a Workspace

Dendron requires a VSCode [workspace file](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files) to operate. Make sure to open the **dendron.code-workspace** file by following the instructions [here](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files)

You can have Dendron create one if you hold down "Cmd+Shift+P" (CTRL+SHIFT+P on windows) and use the [[Launch Tutorial Command|dendron.ref.commands#launch-tutorial]]

### Clear the cache

Delete dendron [[cache|dendron._ref.caching#summary]] files.

### Whitelisting localhost

Dendron starts a [[local server|dendron.dev.design#overview]] in the background and the plugin connects to it to index notes. Check that you don't have anything that is running or blocking localhost.  If you happen to have [Cloudflare WARP VPN](https://1.1.1.1) on a Mac, then your localhost might be broken.  To fix that, update your version of the VPN (a recent update fixed it).

### Correctly Format the Note

Dendron can sometimes fail to load due to a malformed note. Common issues:
- [[Frontmatter|dendron.topic.frontmatter]] is missing
- frontmatter has no id

### Look for large files

Dendron currently has trouble parsing notes larger than 1MB in size. Check if you have any notes like this and move them out of your workspace.

### Upgrade your CLI

- upgrading local version
  - run inside the root of your workspace
```sh
npm install --save @dendronhq/dendron-cli@latest
```

- upgrading global 
```sh
npm -g install @dendronhq/dendron-cli@latest
```

If upgrading doesn't work, run the following first

```sh
npm uninstall -g @dendronhq/dendron-cli
```

### Book a one on one

If all else fails, schedule a diagnostic session. 

## Send a support request

If none of the troubleshooting methods work, you can ping kevin on Discord or submit a github issue.

When doing either of these things, please include the following information:

- [[Plugin Logs|dendron.guides.cook#checking-logs]]
- [[Server Logs|dendron.guides.cook#server-logs]]
- Contents of your [[workspace settings|dendron._ref.settings]]
- Contents of [[dendron.yml|dendron.ref.commands#configure-yaml]]
