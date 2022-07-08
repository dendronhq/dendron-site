---
id: 65h7pdzxe43tupzsvik9sf1
title: enableSmartRefs
desc: Template for individual configuration property documents.
updated: 1657292693354
created: 1656701913295
---

## Summary
- type: `boolean`
- default: `true` 

## Description

Toggle behavior for [[Header References|dendron://dendron.dendron-site/dendron.topic.note-reference#header-references]] to reference everything from the given header to the next header of equal or lesser depth. If turned off, will transclude to the end of the note instead.

## Example
```yml
commands:
	enableSmartRefs: true
```