---
id: nzqCi64LGetqAWqdDT2lK
title: Lookup
desc: Anything lookup related
updated: 1651837599674
created: 1631657275412
pods:
  airtable:
    dendron.scopes: recdeBYF1cA0yL8Sr
    task.scopes: recSc2AwMLA7GpNdD
---

Anything lookup related. This means anything to do with how results display in the lookup widget. 

This is used across a range of commands:
- NoteLookup, Rename, InsertNoteIndex, etc.

Logic for the particular commands should be grouped by their section. Anything to do with the lookup widget itself belongs to lookup.

## Examples
- Lookup results (applying to both schemas and notes)
- Lookup modifier display/functionality bugs 
- Things to do with lookup widget.

## Anti-examples
- Note lookup slow (or bad results). That should go into #feature.lookup
- refactor command would belong to #scope.structure
- note lookup would belong to #scope.retrieve

## Feature nodes
