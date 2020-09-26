---
id: 700b02fc-1e6c-46b1-8d68-5d8e17a55d33
title: pod proposal issue
desc: ''
updated: 1599522009420
created: 1599522009420
stub: false
---

# Evernote Pod Proposal

- link to tool: https://evernote.com
- one line description: online note taking tool that organizes notes using notebooks and tags
- is there a public api available (if so, please provide link)? yes
    - https://dev.evernote.com/doc/
- are there existing (preferably javascript compatible) libraries that can import and/or export to this pod? (if so, please list them. if there aren't libraries, an example of importing is also good): yes
    - import:
        - import del.icio.us bookmarks into evernote: https://github.com/jorgemanrubia/evernicious #ruby #example
    - export:
        - export evernote notes: https://github.com/akosbalasko/yarle #typescript

- are there existing (preferably javascript compatible) libraries that can convert from/to the data format used in this pod? (if so, please list them): yes
    - convert from
        - https://github.com/akosbalasko/yarle #typescript
    - convert to

## Import
<What does import look like? How will the organization of the source pod be mapped onto Dendron's Hierarchy?>

### mappings
- notebook stack & notebooks: hierarchy
- tags -> tags

### example

- evernote

```
- Cookbook (notebook stack)
    - Meat (notebook)
        - meat note 1
        - meat note 2
        - ...
    - Vegetables (notebook)
        - ...
```

- dendron
```
- cookbook
- cookbook.meat
- cookbook.meat.meat-note-1
- cookbook.meat.meat-note-2
- cookbook.vegetables
```

## Build
<What does build look like? What steps need to occur prior to exporting your Dendron notes>

## Export
<What does export look like? How will we map Dendron's hierarchies to the destination pod's organization?>

### mappings
- hierarchy -> notebook stack or notebook (user can configure on a per hierarchy basis)
- 

- dendron
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
<e.g. Sync notes from meetings with an airtable tracking meetings across days and people> 
