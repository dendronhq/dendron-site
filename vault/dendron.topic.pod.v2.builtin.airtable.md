---
id: rHxjw4xX6EynKAWSUxAo6
title: Airtable
desc: ''
updated: 1643092087024
created: 1638945959590
---

## Example

> Note: This workflow is in flux and is subject to change

This example demonstrates how to setup an Export Pod V2 to Airtable for Dendron Tasks

### Create a new Airtable Connection

Currently, the way to do this is to run the following steps:

1. `Dendron: Export Pod V2`
1. Select `New Export`
1. Select `Airtable Export`
1. Select `Create new Airtable Connection`
1. Name the id `dendron-airtable`
1. A YAML config file should show up. Obtain the apiKey via RPass and enter that value for the `apiKey` field:
    ```yml
    apiKey: TODO
    ```

### Create a Pod Configuration

1. Run `Dendron: Export Pod V2`
1. Select `New Export`
1. Select `Airtable Export`
1. Select the connection you just created in the previous step, `dendron-airtable`
1. Select 'Note' (This is the export scope, lookup UI tweaks WIP)
1. For base-id, enter `appKOgvtfSzZyj1YM`
1. For table-id, enter `tblLjBKhYtXnZ2t1w`
1. For configuration-id, let's call it `dendron-tasks`
1. Hit Enter, you should now see an editor for `config.dendron-tasks.yml` open.
1. Add the following value for `sourceFieldMapping`:
    ```yml
    sourceFieldMapping:  {
      DendronId: id, 
      Name: title,
      Owner: owner,
      Notes: body, 
      Updated: {to: updated, type: date}, 
      Created: {to: created, type: date},
      Scope: {type: "singleTag", filter: "tags.scope.*"},
      Size: {type: "singleTag", filter: "tags.size.*"},
      Sprint.Tag: {type: "singleTag", filter: "tags.sprint.*"},
      Creator: creator,
      Status: status,
    }
    ```
11. Check final result. The config should look like below, if it isn't, you can just copy/replace the contents with the value below.

```yml
    # description: configuration ID
    # type: string
    # required: true
    podId: dendron-tasks
    
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
    connectionId: dendron-airtable
    
    # description: Airtable base id
    # type: string
    # required: true
    baseId: appKOgvtfSzZyj1YM
    
    # description: Name of the Airtable
    # type: string
    # required: true
    tableName: tblLjBKhYtXnZ2t1w
    
    # description: mapping of Airtable fields with the note eg: {Created On: created, Notes: body}
    # type: object
    # required: true
    sourceFieldMapping:  {
          DendronId: id, 
          Name: title,
          Owner: owner,
          Notes: body, 
          Updated: {to: updated, type: date}, 
          Created: {to: created, type: date},
          Scope: {type: "singleTag", filter: "tags.scope.*"},
          Size: {type: "singleTag", filter: "tags.size.*"},
          Sprint.Tag: {type: "singleTag", filter: "tags.sprint.*"},
          Creator: creator,
          Status: status,
        }
```

### Run the Pod to Export a Task to Airtable

1. Open a task note that you want to export to Airtable.  An example task note is [[task.pod.podsv2-support-export-hierarchy]]
1. Run `Dendron: Export Pod V2` while your task note is in focus.
1. Select your new `dendron-tasks` config.
1. Check the [task view here](https://airtable.com/appKOgvtfSzZyj1YM/tblLjBKhYtXnZ2t1w/viwzfUhwxGiomaGjt?blocks=hide) in our Airtable here to see if the task was successfully added.
1. If it's not added, then check out common errors below


### Troubleshooting

- You get an error like the following:
    ```
    "Error while running Airtable Export Pod: {\"error\":\"INVALID_MULTIPLE_CHOICE_OPTIONS\",\"message\":\"Insufficient permissions to create new select option \\\"\\\"NON-REPRO\\\"\\\"\",\"statusCode\":422}"
    ```

    Some fields in Airtable are like enums - if you try to upload a value that's not in the enum set, then you'll get this error. Scope, Size, and Status are enum fields. Scope must match a value in [[tags.scope]].  When in doubt, check what values are allowed in Airtable.
