---
id: y84kARyQhdUcyRG33pT2i
title: Visualize Task Notes with Airtable
desc: 'Use the Airtable Pod to export task notes from Dendron'
updated: 1644006658077
created: 1643995037072
---

## Summary

Dendron loves integrating with other tools.

The [[Airtable pod|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable]] can be used to [[Export|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export]] notes from Dendron into [Airtable](https://airtable.com). This tutorial will cover how to create [[Task Notes|dendron://dendron.dendron-site/dendron.topic.tasks]] that can be viewed inside of Airtable.

### Prerequisites

- This assumes you have an Airtable account.
    - If not, you can [create one](https://airtable.com/signup).

- Enable PodV2

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.quickstart#enable-podv2,1:#*]]

## Concepts

### Pods

[[Pods|dendron://dendron.dendron-site/dendron.topic.pod-v2]] are a set of plugins that help users synchronize their notes between Dendron and other tools.

### Task Notes

![[dendron://dendron.dendron-site/dendron.topic.tasks#summary,1:#*]]

These a special notes, created with the [[Create Task Note|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]] command, that contain include [[Custom frontmatter|dendron://dendron.dendron-site/dendron.topic.tasks#custom-configuration]] not normally included in notes by default (ex. `status`, `owner`, `due`, etc.)

Example:

![[dendron://dendron.dendron-site/dendron.topic.tasks#task-note-internals,1:#*]]

### Airtable bases

[Airtable bases](https://support.airtable.com/hc/en-us/articles/202576419-Introduction-to-Airtable-bases) are projects made up of [tables, records, and fields](https://support.airtable.com/hc/en-us/articles/360021333094-Getting-started-tables-records-and-fields). A quick way of understanding these terms is to think of a spreadsheet or table.

Example:

|FirstName|LastName|
|---------|--------|
|Bruce|Wayne|

- This is a **table** containing information about people. Multiple tables can exist in a base, similar to how multiple spreadsheet tabs can exist in a workbook.
- _FirstName_ and _LastName_ are **fields** in the table, like a column in a spreadsheet.
- Bruce Wayne is a **record** in the table, like a row in a spreadsheet.

## Steps: Airtable setup


### Add a base

- Login to Airtable
- Under `My First Workspace`, click `Add a base`
- Change the `Untitled Base` title, at the top of the screen, to `Tasks`

### Create Personal.Tasks table

- Near the first `Table1` tab, click `Add or import` -> `Create empty table`
- Title this table `Personal.Tasks`

Now let's create all the fields we'd like to use for tasks.

> For more information about how new fields are created and can be customized, feference [Getting started: Tables, records, and fields - New fields](https://support.airtable.com/hc/en-us/articles/360021333094-Getting-started-tables-records-and-fields#new-field).

- Leave the default `Name` as-is
- Leave the default `Notes` as-is
- Delete `Attachments` by clicking the drop down for the field, and selecting `Delete field`
- Leave the default `Status` as-is
- Add field: `Description`
  - Field type: `Single line text`
- Add field: `Priority`
  - Field type: `Single select`
  - Options:
    - `H`
    - `M`
    - `L`
- Add field: `Owner`
  - Field type: `Single select`
  - Options:
    - `bob`
    - `alice`
- Add field: `Type`
  - Field type: `Single select`
  - Options:
    - `type.art`
    - `type.chore`
- Add field: `Due`
  - Field type: `Date`
  - Date format: `ISO (2022-02-03)`
- Add field: `DendronId`
  - Field type: `Single line text`

## Steps: Dendron setup

### Update `.gitignore`

In order to avoid accidentally storing API keys, for service configs, inside of your git repository:

1. Open `.gitignore` from the root of your workspace
1. Add `pods/service-connections`
1. At a minimum, your `.gitignore` should look like the following:

```
node_modules
.next
.dendron.*
build
seeds
pods/service-connections
```

### Airtable pod service connection configuration

1. Run the `Export Pod V2` command
1. Select `New Export`
1. Select `Airtable Export`
1. Select `Create new Airtable Connection`
1. Name the id `personal.airtable`
1. Hit Enter, you should now see an editor for `svcconfig.personal.airtable.yml` open.
1. Obtain your API key from Airtable by following [Airtable docs: How do I get my API key?](https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-)
1. Update the configuration to match the following:

```yml
# description: configuration ID
# type: string
# required: true
connectionId: personal.airtable

# description: Connection Type
# type: string
# required: true
serviceType: Airtable

# description: API Key to access Airtable
# type: string
# required: true
# hint: Starts with `key`
# info: https://support.airtable.com/hc/en-us/articles/219046777-How-do-I-get-my-API-key-
apiKey: key*
```

### Airtable pod tasks configuration

1. Run `Dendron: Export Pod V2`
1. Select `New Export`
1. Select `Airtable Export`
1. Select the connection you just created in the previous step, `personal.airtable`
1. Select `Note` (Exports the currently opened note)
1. For base-id, enter the [base id](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
1. For table-id, enter the [table id](https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs)
1. For configuration-id, let's call it `personal.tasks`
1. Hit Enter, you should now see an editor for `config.personal.tasks.yml` open.
1. Update the configuration to match the following:

```yml
# description: configuration ID
# type: string
# required: true
podId: personal.tasks

# description: optional description for the pod
# type: string
description: Export personal tasks to Airtable for Kanban and more!

# description: export scope of the pod.
# type: string
# NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
exportScope: Note

# description: type of pod
# type: string
# required: true
podType: AirtableExportV2

# description: ID of the Airtable Connected Service
# type: string
# required: true
connectionId: personal.airtable

# description: Airtable base id
# type: string
# required: true
# hint: Starts with `app`
# info: https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs
baseId: app*

# description: Airtable table id
# type: string
# required: true
# hint: Starts with `tbl`
# info: https://support.airtable.com/hc/en-us/articles/4405741487383-Understanding-Airtable-IDs
tableName: tbl*

# description: mapping of airtable fields with the note eg: {Created On: created, Notes: body}
# type: object
# required: true
sourceFieldMapping: {
  DendronId: id, 
  Name: title,
  Description: desc,
  # Special type here refers to body of your note, the markdown
  Notes: {to: body, type: string},
  Owner: owner,
  # singleSelect type, targeting tag using `#type.*` format
  Type: {type: "singleSelect", filter: "tags.type.*", to: "tags"},
  Status: status,
  # use yyyy-mm-dd format (ISO) for this example
  Due: due,
  Priority: priority,
}

# description: undefined
# type: object
# filters: TODO
```

> Reference [[sourceFieldMapping|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#sourcefieldmapping]] and [[object values|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#object-value]] for more details on key values in Airtable Pod Export configurations.

### Create a task note

1. Run `Create Task Note`
1. Create `task.yyyy.mm.dd.write-short-story` (example: `task.2022.02.04.write-short-story`)
1. Update the frontmatter values (don't update `id`, `created`, or `updated` values):
  ```yml
  title: Write Short Story
  desc: Write about the Sun swallowing Earth
  tags:
    - type.art
  status: wip
  due: '2022-03-01'
  priority: M
  owner: alice
  ```
1. Add content to the body of the note:
  ```markdown
  ## Summary

  Whoa! This is a test!

  ## Details

  The Sun is hungry. Planet-eating hungry.
  ```

### Export task note

1. Run `Dendron: Export Pod V2`
1. Select `personal.tasks`

You should see a notification message:

> Finished Airtable Export. 1 records created; 0 records updated.

Subsequent updates to the task can be synced by running the same command, which would output:

> Finished Airtable Export. 0 records created; 1 records updated.

The task should now appear inside of Airtable.

If problems arise, reference [[Troubleshooting|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable.export#troubleshooting]] as there may be either a permissions problem or a mismatch in field values in the target table.

## Congratulations!

You can now use Airtable as a way to visualize and navigate your notes!

### Key takeaways

- Learned how to create a base in Airtable
- Learned how to create a table in Airtable
- Learned how to create an Airtable export pod service connection configuration in Dendron
- Learned how to create an Airtable export pod configuration for Dendron task notes

### Next Steps

- Create a [kanban view in Airtable](https://support.airtable.com/hc/en-us/articles/229848887-Guide-to-kanban-view)
