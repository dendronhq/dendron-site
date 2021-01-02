---
id: a6c03f9b-8959-4d67-8394-4d204ab69bfe
title: Troubleshooting
desc: ''
updated: 1609553239273
created: 1595952505025
---
# Troubleshooting

## Diagnosing 

You can get a better idea of what went wrong by checking out the [[logs|dendron.guides.cook#checking-logs]]. At that point, you should be able to narrow down the root cause to one of the issues below. If not, please bring it up on the [discord](https://discord.gg/AE3NRw9) or file a [bug report](https://github.com/dendronhq/dendron/issues/new?assignees=&labels=&template=bug_report.md&title=)

## General

### Engine not initialized

This is most likely due to the VSCode [workspace file](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files) not being open. Make sure to open the **dendron.code-workspace** file by following the instructions [here](https://code.visualstudio.com/docs/editor/multi-root-workspaces#_opening-workspace-files)

### Notes from the graph/tree view are out of sync

Run `Dendron: Reload Index` to manually sync. If that doesn't work, you can also try `Developer: Reload Window` to restart VSCode.

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

They both have identical icons and its currently not possible to disable the builtin preview (we are looking into fixing this [here](https://github.com/dendronhq/dendron/issues/42)).

Meanwhile, you can open Dendron's markdown preview by clicking the preview button on the left of the menu bar or by using the `> Markdown Preview Enhanced: Open Preview to the Side` command

![Markdown preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble-md.png)


## Linux

### Reference to Another Note on Ubuntu

If Ctrl+Shift+R (reference to another note) doesn't work on Ubuntu, do `sudo apt install xsel`.

