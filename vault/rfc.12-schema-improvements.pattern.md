---
id: dd0058a4-ea02-41d3-8e22-fbcba85d2677
title: Pattern
desc: ''
updated: 1620592158017
created: 1620582369711
---

## Goal

Adding the ability to use the matched value from a pattern in the Title of a schema.

## Proposal

Adding the option to use matched values from the pattern in the title like substitution in RegEx. 

## Example

```yml
schemas: 
   - id: month
     pattern: /((?:0[1-9])|(?:1[0-2]))/
     title: "Month: $1"
```
