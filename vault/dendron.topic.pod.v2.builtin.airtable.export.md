---
id: oTW7BFzKIlOd6iQnnNulg
title: Export
desc: ''
updated: 1643294568625
created: 1638945970366
---
## Summary

The Airtable export pod will export a Dendron note to a row in an Airtable. Various aspects of the note can be exported - from frontmatter fields to the note body.
You can view the example video [here](https://www.loom.com/share/ed27a420fd794715873f87667572e245)
## Requirements
- the table must already exist in Airtable
- all columns that you want to write to must exist in Airtable
- you must have a column named `DendronId` (case sensitive)

## Side Effects
- this pod will add `airtableId` in the frontmatter of your note 

## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod.v2.config#common-properties]], the Airtable has the following properties:

### podType

This is actually a common property, but for the Airtable Export pod this **must** be set to `AirtableExportV2`.

### connectionId (required)

The ID of an Airtable connection. See [[Airtable|dendron://dendron.dendron-site/dendron.topic.pod.v2.connections.airtable]].

### baseId
base ID of Airtable base.

### tableName
Name of the destination table in Airtable.

### filters
- type: `{fname: string[]}`

Filter export scope by given patterns. Filter currently only supports the `fname` filter which filters by the file name.

Example:

Given the following notes:

```
- foo
- foo.one
- foo.one.alpha
- foo.two
```

and the following filter

```yml
filters:
  fname: [foo, foo.one*]
```

Then the following notes would be exported

```
- foo.two
```

### sourceFieldMapping

This contains a mapping of Airtable fields with the note contents and properties.  This can either be a plain string or a dictionary that specifics additional properties. You can see the type definition below

```ts
type SrcFieldMapping =
  | {
      to?: string;
      type: "string" | "date" | "singleTag";
      filter?: string;
    }
```

In all cases, the key represents the name of the column in Airtable.

- NOTE: the key must exist in Airtable before you are able to create a new value


#### common options

The following options apply for `string`, `boolean`, and `number` values

- required: if set, throw error if field is not present
- strictNullChecks: if set, throw error if field is null 


#### string value

String value is the name of the field in Dendron. You can use any valid [[NoteProps|dendron://dendron.docs/pkg.common-all#noteprops]] as the value

```yml
srcFieldMapping: {Note ID : id, Title : title, Summary: body}
```

#### boolean
- value: boolean

You can represent a boolean by using the `boolean` type

```yml
IsChecked: {type: boolean, to: "custom.checked" }
```

#### number

```yml
ANumber: {type: number, to: "custom.anumber" }
```


#### multiSelect

This fields let you pick multiple values. You can either select an arbitrary frontmatter field or use the special `tags` key to select tags in the note.

Example of multi select using frontmatter field

Config
```yml
# sourceFieldMapping
Role: {type: "multiSelect", to: "foo"},
```

Note
```md
---
foo: ["two", "three"]
---
```

Export
```
foo: ["two", "three"]
```


Example of multi select using tags
```yml
Role: {type: "multiSelect", filter: "tags.dendron.role.*", to: "tags"},
```

Note
```md
---
...
---

#role.foo
#role.bar
```

Export
```
foo: ["role.foo", "role.bar"]
```


#### object value
- `to`: the name of the field in Dendron
- `type`: what type this field is on Airtable
    - `string`: regular string
    - `date`: will convert a unix time liked the `updated` prop in a Dendron note to an Airtable date
    - `singleTag`: creates a `Single Select` field on Airtable that is populated with [[Tags|dendron://dendron.dendron-site/dendron.topic.tags]] found in Dendron note
        - NOTE: Airtable does not let you create new values in single select via API. Make sure that all values exist or set the field as a string on Airtable before exporting and then convert back into a `Single Select` field
- `filter`: used with `type: singleTag`, used to restrict what tags are parsed from Dendron
    - eg: `{type: "singleTag", filter: "tags.foo.*"}` -> this will add tags that start with `#foo.*` but will ignore all `#bar.*` tags

### Example Complete Configuration
```yml
# description: configuration ID
# type: string
# required: true
podId: novels-airtable

# description: export scope of the pod.
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
connectionId: test-airtable

# description: airtable base id
# type: string
# required: true
baseId: appCuzX6AAg7gw3RF

# description: Name of the airtable
# type: string
# required: true
tableName: Novels

# description: mapping of airtable fields with the note eg: {Created On: created, Notes: body}
# type: object
# required: true
sourceFieldMapping: {
  Author: author,
  Summary: body,
  Title: title,
  Status: status,
  DendronId: id
}

# description: undefined
# type: object
# filters: TODO
```

## Troubleshooting


### Insufficient Permissions to Create New Select Option

If you see an error like the following:

`"Error while running Airtable Export Pod: {\"error\":\"INVALID_MULTIPLE_CHOICE_OPTIONS\",\"message\":\"Insufficient permissions to create new select option \\\"\\\"NON-REPRO\\\"\\\"\",\"statusCode\":422}"`

Columns in Airtable that are of the type 'Single Select' or 'Multi Select' behave like enums - if you try to upload a value that's not in the enum set, then you'll get this error. If you see this error, check in Airtable what acceptable values for that column and change your field to one of those accepted values.
