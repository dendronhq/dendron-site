---
id: 8a70e9c9-bf7e-4060-af79-abd206f288df
title: Reusability
desc: ''
updated: 1620597302218
created: 1620582413279
---

## Goal

Improvements to the Reusability of Schemas

## Proposal

Make it possible to use JSON references and to improve the handlying of this turn the Id property value into a key for the schema object making it easier to reference them.

## Example

foo.schema.yml
```yml
version: 1
imports:
- bar: 
    $ref: bar.schema.yml#/schemas/bar
schemas:
- foo:
    parent: root
    children:
        - bar # notice that we prefix the id bar with the filename
```
bar.schema.yml
```yml
version: 1
schemas:
  bar:
    parent: root
    children: 
        - one
  one: {}
```