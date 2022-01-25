---
id: j5wgTcRHQZomzSHsg41O8
title: Quickstart
desc: ''
updated: 1643099901005
created: 1638871404471
---

## Summary

To run a pod, you must first create a pod configuration, which specifies things like the type of pod, what data it should act on, connection information, and data translation behavior. After creating a configuration, you may optionally choose to persist that configuration, or to run it immediately without saving it.  If you persist the configuration, then you can easily re-run the pod later without having to set the configuration settings again.

## Creating a Pod Configuration

To create a pod configuration, run the `Dendron: Export Pod V2` command, and select 'New Export'.

## Editing a Saved Pod Configuration

To edit a saved pod configuration, run the `Dendron: Configure Export Pod V2` command, select your pod type and then select your configuration ID.  Pod Configurations are stored as YAML files in your local file system.

## Understanding the Pod Configuration

Pod configurations consist of a set of common properties and a set of unique properties for a particular Pod type.

### Common Properties

There are some common properties among all stored pod configurations

#### podId

A unique ID to identify this configuration. 

#### description (optional)

A description of the Pod. This will appear as additional information in the QuickPick UI.

#### exportScope 

Specifies what to export. Possible values are

- Note - exports the currently opened note
- Lookup - Prompts user to select note(s) for export 
- Hierarchy - exports all notes that fall under a hierarchy
- Vault - exports all notes within a vault
- Workspace - exports all notes in the Dendron workspace
- LinksInSelection - exports all notes in wikilinks of current selected portion of text in the open note editor


### podType (required)

This specifies the podType. It must be one of the following values:
- AirtableExportV2
- MarkdownExportV2
- GoogleDocsExportV2
- NotionExportV2
- JSONExportV2

#### connectionId (required for some pods)

This specifies the ID for the [[connection|dendron.topic.pod.v2.connections]] that will be used to connect to the external service when running this pod. Pods that require this include Notion, Google Docs and Airtable.  Pods that don't require this include Markdown or Json pods.

### Getting User Input for a Property at Runtime

For selective properties, you can also choose to not include a property in the configuration if you would like to set that property during the pod runtime. 

For example, say that you want to save a configuration to export to your personal Google Docs, but you want to be able to choose the scope during each export. If you delete the `exportScope` property in the pod configuration, then you will be prompted to specify the scope when you run the pod.  However, you won't have to specify the other properties that are in the config, such as the connection details to your Google account.

## Running a Saved Pod Configuration

To run a saved pod configuration, use the `Dendron: Export Pod V2`.  In the QuickPick, select the id of your configuration to run it.

## Adding a VS Code Shortcut

You can also add a command shortcut to run your particular pod configuration. Bring up your VS Code `keybindings.json` file by running `Preferences: Open Keyboard Shortcuts (JSON)`.  Then add the following shortcut definition: 

For "args", replace with {podId: <your_pod-ID>}.

MacOS example, using `cmd+k t`. For Windows or Linux, this could be `ctrl+k t` instead.

```json
{
    "key": "cmd+k t",
    "command": "dendron.exportPodv2",
    "args": {"podId": "my-pod-id"}
}
```
You can also provide export scope as an argument to the command. __If provided, this will override__ the `exportScope` saved in the configuration file. This way, you can configure different keybindings to run the same pod configuration but with different export scopes

```json
{
    "key": "cmd+k t",
    "command": "dendron.exportPodv2",
    "args": {"podId": "my-pod-id", "exportScope": "Note"}
}
```