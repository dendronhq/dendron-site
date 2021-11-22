---
id: pD2gKvrDU2PjvrcGlKnU8
title: 36 Pods V2
desc: ''
updated: 1636673506085
created: 1635730038760
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4AN--1
url: 'https://github.com/dendronhq/dendron/discussions/1656'
author: 'https://github.com/dendron-bot'
---

## Goals

1. Making pods easier to use
2. Making pods more flexible to use
3. Making pods easier to extend

## Context

The proposal here covers a lot of ground. We should break it down into phases. 

## Proposal
1. Instead of having both a "Export Pod" and a "Publish Pod", only have an Export Pod
    - refactor existing commands
        - `Export Pod` -> `Export`
        - `Publish Pod` -> `Export One` ^NWDbwthvJ0xm
1. Introduce the equivalent of a `Export One` to `Import`
    - refactor existing command:
        - `Import Pod` -> `Import`
    - introduce new command:
        - `Import One`
1. Introduce a new pod command: `From Clipboard` ^k2tGQOBXQrOK
    - `Export From Clipboard`  
    - `Import From Clipboard` 
    - options to support:
        - splitLine: should we consider each line as its own record? default, false
    - example use case:
        - export a selection of task notes to airtable
        - import a part of google doc
1. Support pod destination
    - Import:
        - New Note
        - Clipboard
    - Export:
        - New Entry
        - Clipboard
1. Extend pod capabilities
    - all pods should have the ability to handle merge conflicts 
        - on import, merge would update local note
        - on export, merge would update remote source
    - all pods should have the ability to specify field mappings
        - on import, map fields from the source to fields in the note
        - on export, map fields from note to export destination
        - fields from the note includes anything in the note frontmatter as well as sections within notes
            - in the future, we can also include backlinks 
1. Support interactive mode
    - should be a toggle on the quickpick
    - if interactive, instead of reading `src/dest` from config, prompt user for this
    - eg. orbit import pod, when importing interactively, user enters a username
1. Introduce a webview to configure pods
    - users can use a form widget with live validation instead of YAML
1. Support pod profiles ^XE6ArsJsqgyG
    - users have different targets for the same pods (eg. publish a task note to airtable task table but publish a user note to airtable user table)
    - pod configuration should support custom profiles
    - should be supported in webview
1. support custom pod plugins
    - a user should be able to contribute their own pods

## Alternatives
- instead of having a unique Export/Import command for different use cases, just have a single command wiith different flags and modifiers 

## Details

## Example

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/1656
