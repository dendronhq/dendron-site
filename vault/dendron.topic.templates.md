---
id: 861cbdf8-102e-4633-9933-1f3d74df53d2
title: Templates
desc: ""
updated: 1653438261568
created: 1602033087611
config:
  global:
    enableChildLinks: false
---

## Summary

Templates are notes with pre-outlined content meant for reuse. Templates can either be inserted into an open note with `Dendron: Insert Note`, or automatically applied at note creation with [[dendron://dendron.dendron-site/dendron.topic.schema]]. These are meant to reduce friction in the creation of new content, providing standardized outlines to your notes.

## Features

### Reusable Notes

Instead of starting from scratch, create notes that can be re-used inside of other notes

```md
### Grocery Checklist

- [ ] buy milk
- [ ] buy flowers
- [ ] buy eggs
```

### Variable Substitution

Add custom variables in your [[dendron.topic.frontmatter]] and use them inside of your templates

```md
---
...
name: John
---

Hello {{fm.name}},

Congratulations on the offer!
```

### Comments
Comment your template to remember the context. 

```md
<!-- Markdown comment, will show up when template is applied -->

{{! Handlebar comment, will be stripped out when template is applied }}
```

### Conditionals 
- [[Handlebars|dendron.topic.templates.handlebars]] only

Use if/else clauses to conditionally apply templates

```handlebars
{{#if fm.name }}
Hello {{fm.name}}
{{else}}
To whom it may concern,
{{/if}}
```

### Iteration
- [[Handlebars|dendron.topic.templates.handlebars]] only

<!-- #todo -->

See https://handlebarsjs.com/guide/builtin-helpers.html#each

## Components

Dendron has 2 types of templates

### Handlebar Templates

### Regular Templates

## Getting Started

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

## Children
- [[Schema Template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]]: Automatically apply a template when it matches a particular hierarchy pattern

---
## Details

2. A more automatic way is by referencing templates in your schema and then having the template automatically applied when a new note of a particular type is created. This is described in more detail in the [[note on schemas|dendron://dendron.dendron-site/dendron.topic.schema#template]].

### Built-In Templates 🚧

You can also pick from a set of built-in templates that contain a set of commonly used note styles to help you get started. These templates can be pulled down with the seeds mechanism. The seed containing templates is called `dendron.templates`, substitute `dendron.dendron-site` for `dendron.templates` in the example below

![[dendron://dendron.dendron-site/dendron.topic.seed-bank.quickstart#adding-a-seed-to-an-existing-workspace]]

We are continually working to expand the types of templates available in the `dendron.template` seed.

## Children
- Topics
    - [[Schema Template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]]

