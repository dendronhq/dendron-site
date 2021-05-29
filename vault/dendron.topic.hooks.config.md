---
id: fcadb1e1-57eb-49fa-a5f8-df11c2a8c685
title: Config
desc: ''
updated: 1620495807325
created: 1620495789507
---

This configuration covers all [[hooks|dendron.topic.hooks]] related sections

### General Options

#### id

Unique id for the note. This also corresponds to the javascript file that will be created under `{workspace}/hooks/{id}.js`

#### pattern
- default: `*`

A [[glob pattern|dendron.concepts#glob-pattern]] that determines what notes the hook will be active for. 

#### type

Type of script. Currently we support `js` scripts and might add additional options in the future. 


### Hook Types

#### onCreate

Runs when a note is created 

### Examples

```yml
hooks:
    onCreate:
        -
            id: hello
            pattern: '*'
            type: js
```
