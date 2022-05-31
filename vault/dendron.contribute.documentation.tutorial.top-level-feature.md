---
id: vyjmifzlvu4w85suec4vd6x
title: Top Level Feature
desc: ''
updated: 1653955956352
created: 1653954523395
---

## Documenting a topic
1. Create a new note under [[dendron.topic]]
1. This will apply the [[Feature Template|dendron://dendron.dendron-site/templates.topic]]
1. Fill out all areas to the best of your ability (note: all sections that don't have `required: false` should be filled out)

## Documenting topic children

### only add sections that are applicable, delete the rest
- good
```md
<!-- dendron.topic.template -->
- Features
    - [[Schema Template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]]: Automatically apply a template when it matches a particular hierarchy pattern
    - [[Template Variables|dendron.topic.templates.template-variables]]: Pre-defined template variables that are automatically included in your templates at run time

- Components
    - [[Handlebar Templates|dendron.topic.templates.handlebars]]: Use [handlebars](https://handlebarsjs.com/guide/), a powerful templating language which enables conditionals, for loops and custom helpers to apply to your templates without executing code

- Commands
    - [[Commands|dendron://dendron.dendron-site/dendron.topic.templates.commands]]: Template Specific Commands
```
- bad
```md
<!-- dendron.topic.template -->
- Concepts

- Features
    - [[Schema Template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]]: Automatically apply a template when it matches a particular hierarchy pattern
    - [[Template Variables|dendron.topic.templates.template-variables]]: Pre-defined template variables that are automatically included in your templates at run time

- Components
    - [[Handlebar Templates|dendron.topic.templates.handlebars]]: Use [handlebars](https://handlebarsjs.com/guide/), a powerful templating language which enables conditionals, for loops and custom helpers to apply to your templates without executing code

- Commands
    - [[Commands|dendron://dendron.dendron-site/dendron.topic.templates.commands]]: Template Specific Commands

- CLI

- ...
```


### for each of the sections (with the exception of `detail`, `upgrade` and `faq`, prefer to create a note for each section )
- good
```md
<!-- dendron.topic.template.command -->
## Apply Template Command
![[dendron.topic.template.command.apply-template]]
```
- bad
```md
<!-- dendron.topic.template.command -->
## Apply Template Command

The apply template command will...
```

## FAQ

### What is the difference between a 'Feature' and a 'Component'?

A feature is something that is performed "eg. template variables"
A component is rarely used. It applies when there are two different and separate ways a feature can be used (eg. handlebar templates vs regular templates > [[Components|dendron://dendron.dendron-site/dendron.topic.templates#components]])

## Example
- [[Templates|dendron://dendron.dendron-site/dendron.topic.templates]]