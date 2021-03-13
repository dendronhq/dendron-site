---
id: 34893663-b1cc-4c4f-aea7-6f1728365b89
title: Import
desc: ''
updated: 1615608061285
created: 1615607767935
---

Import pods let you import data from a data source into Dendron

## Configuration

### src
* description: "Where to import from"
* type: "string" as const
* required: true

### vaultName
- status: [[Early Seed 🌱|dendron.ref.status#early-seed-]]
* description: "name of vault to import into"
* type: "string" as const
* required: true


### concatenate
* description: "whether to concatenate everything into one note"
* type: "boolean"

### ignore
* description: "whether to ignore a given file"
* type: "boolean"


### frontmatter
- status: [[Early Seed 🌱|dendron.ref.status#early-seed-]]
* description: "frontmatter to add to each note"
* type: "object"

### fnameAsId
- status: [[Early Seed 🌱|dendron.ref.status#early-seed-]]
* description: "use the file name as the id"
* type: "boolean"

### destName
* description: "If concatenate is set name of destination path"
* type: "string" as const
