---
id: gHERCRoEXzASfXorBgZN0
title: Create Schema From Note Hierarchy
desc: ''
updated: 1636388742845
created: 1636386619301
---

## Example use case
You have created a set of notes in a hierarchy and want to re-use the pattern elsewhere. For example, let's say you've created some notes for python in a pattern you like and want this schema when authoring notes for other languages:

```
languages
└── python
    └── data
        ├── bool
        ├── integer
        └── string
```

You wish to extend this schema to other languages for future notes:

```
languages
└── python
    └── data
        ├── bool
        ├── integer
        └── string
└── java
    └── data
        ├── bool
        ├── integer
        └── string
└── c-sharp
    └── data
        ├── bool
        ├── integer
        └── string
```

You can use `Dendron: Create Schema From Note Hierarchy` command to swiftly accomplish this goal. 

## Steps
### 1: Activate command
 While having the editor open in the note that is within the hierarchy that you want to create (Eg. `languages.python.data.bool` Activate `Dendron: Create Schema From Note Hierarchy` command

### 2: Choose variable part of hierarchy
Choose which part of the hierarchy will be globed/pattern replaced. For example you would see options along the lines of:
* languages.*.data.bool
* languages.python.*.bool 

In our example we want to choose `languages.*.data.bool` since the language is the part that varies. 

### 3: Choose which descendents to include
Then choose which parts of the hierarchy that currently fall under `languages.python` you want to be included within the schema. 

We would like to include the following:

* languages.python.data
* languages.python.data.bool
* languages.python.data.integer
* languages.python.data.string
### 4: Choose schema file name
And lastly choose the name of the schema file.

### 5 
Congratulations! Now you should have a schema that can be re-used for other languages along the lines of:
```
version: 1
imports: []
schemas:
  - id: languages
    title: languages
    parent: root
    children:
      - pattern: '*'
        children:
          - pattern: data
            children:
              - pattern: bool
              - pattern: integer
              - pattern: string
```

You can edit this schema to your liking. 

If you want to remake the schema for hierarchy, delete the schema and start from step 1. 

## Related
* [[dendron.rfc.35-easier-schemas]]
