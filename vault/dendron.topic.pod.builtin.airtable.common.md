---
id: NcvPTWlmdaFfB0fcWQ8RC
title: Common
desc: ''
updated: 1633394316942
created: 1633392951754
---

## Requirements
- the table must exist in airtable
- all collumns that you want to write to must exist in airtable
- you must have a collumn named `DendronId` (case sensitive)

## Side Effects
- this pod will add `airtableId` in the frontmatter of your note 

## Configuration

### apiKey  
airtable api key

### baseId  
base ID of airtable base.

### tableName  
name of resulting table.

### srcFieldMapping  

Mapping of airtable fields with the note.  This can either be a plain string or a dictionary that specifics additional properties. You can see the type definition below

```ts
type SrcFieldMapping =
  | {
      to?: string;
      type: "string" | "date" | "singleTag";
      filter?: string;
    }
```

In all cases, the key represents the name of the column in airtable.

- NOTE: the key must exist in airtable before you are able to create a new value

#### string value

String value is the name of the field in Dendron. You can use any valid [[NoteProps|dendron://dendron.dendron-site/pkg.common-all#noteprops]] as the value

```yml
srcFieldMapping: {Note ID : id, Title : title, Summary: body}
```

#### object value
- `to`: the name of the field in Dendron
- `type`: what type this field is on airtable
    - `string`: regular string
    - `date`: will convert a unix time liked the `updated` prop in a Dendron note to an airtable date
    - `singleTag`: creates a `Single Select` field on airtable that is populated with [[Tags|dendron://dendron.dendron-site/dendron.topic.tags]] found in Dendron note
        - NOTE: airtable does not let you create new values in single select via API. Make sure that all values exist or set the field as a string on airtable before exporting and then convert back into a `Single Select` field
- `filter`: used with `type: singleTag`, used to restrict what tags are parsed from Dendron
    - eg: `{type: "singleTag", filter: "tags.foo.*"}` -> this will add tags that start with `#foo.*` but will ignore all `#bar.*` tags


## 