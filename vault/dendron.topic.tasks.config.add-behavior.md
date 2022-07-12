---
id: tk53mnhwo6axdiutpik5vaq
title: addBehavior
desc: Determines how note is added in relation to current hierarchy
updated: 1657226555495
created: 1657225319260
---

## Summary
- type: `enum`
- values: `asOwnDomain`, `childOfCurrent`, `childOfDomain`, `childOfDomainNamespace`
    - NOTE: See [[dendron.topic.special-notes#defaultnodetypeaddbehavior]] for an explanation of how these values work.

## Description

{{fm.desc}}

## Example

```yml
workspace:
  task:
    addBehavior: "childOfCurrent"
```
