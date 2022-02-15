---
id: yTnBABnepuIcSJ5zxfwR4
title: Config
desc: ''
updated: 1644909017768
created: 1643282297207
---

## Export Configuration

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
- Hierarchy - exports all notes that fall under a hierarchy **(specific to a single vault)**
- Vault - exports all notes within a vault
- Workspace - exports all notes in the Dendron workspace
- LinksInSelection - exports all notes in wikilinks of current selected portion of text in the open note editor


#### podType (required)

This specifies the podType. It must be one of the following values:
- AirtableExportV2
- MarkdownExportV2
- GoogleDocsExportV2
- NotionExportV2
- JSONExportV2

#### connectionId (required for some pods)

This specifies the ID for the [[connection|dendron.topic.pod-v2.connections]] that will be used to connect to the external service when running this pod. Pods that require this include Notion, Google Docs and Airtable.  Pods that don't require this include Markdown or Json pods.


### Keybindings

You can add a command shortcut to run your particular pod configuration. Bring up your VS Code `keybindings.json` file by running `Preferences: Open Keyboard Shortcuts (JSON)`.  Then add the following shortcut definition: 

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
