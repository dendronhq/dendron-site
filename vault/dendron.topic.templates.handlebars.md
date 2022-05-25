---
id: 1mu1qb1vilhqr7tlatwyqxm
title: Handlebar Templates
desc: ''
updated: 1653437476362
created: 1653437075977
---

## Summary

Dendron supports using [handlebars](https://handlebarsjs.com/guide/) based templates. This is a powerful templating language that allows you to incorporate conditionals, for loops and custom helpers to your templates without executing code.

## Getting Started

### Enable Handlebars Based Tempaltes
1. Run `Dendron: Configure (yaml)`
1. Under `workspace`, add the following setting:
  ```yml
  enableHandlebarTemplates: true
  ```
1. Run `> Reload Workspace`

### Create a template
A template is just a regular note. While any note can be a template, we recommend adding templates in the `[[template]]` hierarchy of your vault. 

1. Create a template note. Use lookup and create the note `template.pr-check-list`
1. Copy and paste the following contents
  ```md
  ## Tasks
  - [ ] code is tested
  - [ ] code has proper commit message
  - [ ] code does not impact performance
  ```
1. Create a new note `task.code-check-in`
1. Run `Dendron: Insert Note`
1. Choose `template.pr-check-list`
1. See the template being applied.
