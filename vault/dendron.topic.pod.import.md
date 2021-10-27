---
id: 34893663-b1cc-4c4f-aea7-6f1728365b89
title: Import
desc: ''
updated: 1624552540838
created: 1615607767935
---

Import pods let you import data from a data source into Dendron

## Configuration

### src
* description: "Where to import from"
* type: "string" as const
* required: true

### vaultName
* description: "name of vault to import into"
* type: "string" as const
* required: true

### concatenate
* description: "whether to concatenate everything into one note"
* type: "boolean"
* default: false

When importing, you can either import everything from source as multiple files or concatenate it all together as one file

### frontmatter
* description: "frontmatter to add to each note"
* type: "object"

You can add custom [[frontmatter|dendron.topic.frontmatter]] to notes as you import them. This is useful for example, when you want to set custom [[publishing options|dendron.topic.publishing-legacy.configuration#note-configuration]] for imported notes

### fnameAsId
* description: "use the file name as the id"
* type: "boolean"

By default, random uuids are generated as the id for each imported note. This makes the id equivalent to that of the filename

### destName
* description: "If `concatenate` option is set, this is the name of the destination path
* type: "string" as const

