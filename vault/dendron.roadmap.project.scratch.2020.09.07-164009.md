---
id: 700b02fc-1e6c-46b1-8d68-5d8e17a55d33
title: Evernote Pod Proposal
desc: ''
updated: 1640428652243
created: 1599522009420
stub: false
---
- link to tool: <https://evernote.com>

- one line description: online note taking tool that organizes notes using notebooks and tags

- is there a public api available (if so, please provide link)? yes
  - <https://dev.evernote.com/doc/>

- are there existing (preferably javascript compatible) libraries that can import and/or export to this pod? (if so, please list them. if there aren't libraries, an example of importing is also good): yes
  - import:
    - import del.icio.us bookmarks into Evernote: <https://github.com/jorgemanrubia/evernicious> #ruby #example
  - export:
    - export Evernote notes: <https://github.com/akosbalasko/yarle> #typescript

- are there existing (preferably javascript compatible) libraries that can convert from/to the data format used in this pod? (if so, please list them): yes
  - convert from
    - <https://github.com/akosbalasko/yarle> #typescript
  - convert to

## Import

&lt;What does import look like? How will the organization of the source pod be mapped onto Dendron's Hierarchy?>

### mappings

- notebook stack & notebooks: hierarchy
- tags -> tags

### example

- Evernote

```
- Cookbook (notebook stack)
    - Meat (notebook)
        - meat note 1
        - meat note 2
        - ...
    - Vegetables (notebook)
        - ...
```

- Dendron

```
- cookbook
- cookbook.meat
- cookbook.meat.meat-note-1
- cookbook.meat.meat-note-2
- cookbook.vegetables
```

## Build

&lt;What does build look like? What steps need to occur prior to exporting your Dendron notes>

## Export

&lt;What does export look like? How will we map Dendron's hierarchies to the destination pod's organization?>

### mappings

- hierarchy -> notebook stack or notebook (user can configure on a per hierarchy basis)

-

- Dendron

```
- cookbook.meat
- cookbook.meat.meat-note-1
- cookbook.meat.meat-note-2
- cookbook.vegetables
```

<!-- ## Configuration
<What might a configuration file look like to help make sure your data is formatted correctly ?>

e.g.
destinations:
  - destination:
      base: People
      table: Interactions
    src:
      meet.{today}.*
    mapping:
      fm.created: DateV2
      fm.type: Type
      section.noes: Notes
      section.people: People
 -->

## Example Use Cases

&lt;e.g. Sync notes from meetings with an Airtable tracking meetings across days and people> 

