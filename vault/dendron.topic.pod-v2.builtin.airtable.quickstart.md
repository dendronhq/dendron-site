---
id: jClXr7kEH96nMiANga12W
title: Quickstart
desc: ''
updated: 1643388849397
created: 1643388849397
---

## Summary

This example demonstrates how to setup an Export Pod V2 to Airtable for managing taskks

## Steps

### Create a new Airtable Connection

1. Use `> Dendron: Export Pod V2`
1. Select `New Export`
1. Select `Airtable Export`
1. Select `Create new Airtable Connection`
1. Name the id `me.tasks`
1. A YAML config file should show up. You can obtain your API key by following the instructions [here](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
    ```yml
    apiKey: TODO
    ```

### Create a Pod Configuration

1. Run `Dendron: Export Pod V2`
1. Select `New Export`
1. Select `Airtable Export`
1. Select the connection you just created in the previous step, `me.tasks`
1. Select 'Note' (This is the export scope, lookup UI tweaks WIP)
1. For base-id, enter the [base id](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
1. For table-id, enter the [table id](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
1. For configuration-id, let's call it `me.tasks`
1. Hit Enter, you should now see an editor for `config.me.tasks.yml` open.
1. Add the following value for `sourceFieldMapping`:
    ```yml
    sourceFieldMapping:  {
      DendronId: {to: id, type: string}, 
      Name: {to: title, type: string},
      Notes: {to: body, type: string}, 
      Updated: {to: updated, type: date}, 
      Created: {to: created, type: date},
      Status: {to: status, type: string},
    }
    ```
1. Check final result. The config should look like below, if it isn't, you can just copy/replace the contents with the value below.

```yml
    # description: configuration ID
    # type: string
    # required: true
    podId: me.tasks
    
    # description: optional description for the pod
    # type: string
    description: Exports to Dendron Tasks Airtable
    
    # description: export scope of the pod
    # type: string
    # NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
    # exportScope: Note
    
    # description: type of pod
    # type: string
    # required: true
    podType: AirtableExportV2
    
    # description: ID of the Airtable Connected Service
    # type: string
    # required: true
    connectionId: me.tasks
    
    # description: Airtable base id
    # type: string
    # required: true
    baseId: ***
    
    # description: Name of the Airtable
    # type: string
    # required: true
    tableName: ***
    
    # description: mapping of Airtable fields with the note eg: {Created On: created, Notes: body}
    # type: object
    # required: true
    sourceFieldMapping:  {
      DendronId: {to: id, type: string}, 
      Name: {to: title, type: string},
      Notes: {to: body, type: string}, 
      Updated: {to: updated, type: date}, 
      Created: {to: created, type: date},
      Status: {to: status, type: string},
    }
```

### Run the Pod to Export a Task to Airtable

1. Open a task note that you want to export to Airtable. For example, you can copy and paste the below note 
![[dendron://dendron.dendron-site/dendron._ref.eg.sample-task-note]]
1. Run `Dendron: Export Pod V2` while your task note is in focus.
1. Select your new `me.tasks` config.
1. Check the [task view here](https://airtable.com/appKOgvtfSzZyj1YM/tblLjBKhYtXnZ2t1w/viwzfUhwxGiomaGjt?blocks=hide) in our Airtable here to see if the task was successfully added.
1. If it's not added, then check out common errors below


### Troubleshooting

- You get an error like the following:
    ```
    "Error while running Airtable Export Pod: {\"error\":\"INVALID_MULTIPLE_CHOICE_OPTIONS\",\"message\":\"Insufficient permissions to create new select option \\\"\\\"NON-REPRO\\\"\\\"\",\"statusCode\":422}"
    ```

    Some fields in Airtable are like enums - if you try to upload a value that's not in the enum set, then you'll get this error. Scope, Size, and Status are enum fields. Scope must match a value in [[tags.scope]].  When in doubt, check what values are allowed in Airtable.
