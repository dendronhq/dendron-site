---
id: 1mu1qb1vilhqr7tlatwyqxm
title: Handlebar Templates
desc: 'Use [handlebars](https://handlebarsjs.com/guide/), a powerful templating language which enables conditionals, for loops and custom helpers to apply to your templates without executing code.'
completion: sprout
updated: 1655169668499
created: 1653437075977
---

## Summary

{{fm.desc}}

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
1. Run [[`Dendron: Apply Template`|dendron://dendron.dendron-site/dendron.topic.templates.commands.apply-template]]
1. Choose `template.pr-check-list`
1. See the template being applied.

## Related
- [[Schema Template|dendron.topic.templates.schema-template]]
