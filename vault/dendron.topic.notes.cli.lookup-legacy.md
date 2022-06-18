---
id: vvphhu29krrk8hjs7x7clis
title: Lookup Legacy
desc: Find or create a note
updated: 1655577291927
created: 1654388213554
templateId: 39menlcx30lpo1ci4px7aew
---

## Summary

{{fm.desc}}

## Options

### query
- type: string

Note to query for. Same syntax as [[dendron.topic.lookup]]

### output
- defautl: `json`
- values: `json|md_gfm|md_dendron`
    - json: JSON output
    - md_dendron: dendron markdown
    - md_gfm: github flavored markdown 

Controls how note is formatted

## Examples

#### creating a note

```bash
# creates hello if it does not exist
dendron note lookup --query "hello" 
```

#### Querying a note

```bash
# retrieves hello.md if it does exist
dendron note lookup --query "hello" 
```

#### Querying a note with GitHub Flavored Markdown output

```bash
# retrieves hello.md if it does exist
dendron note lookup --query "hello" --output md_gfm
```

