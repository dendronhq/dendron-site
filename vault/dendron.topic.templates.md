---
id: 861cbdf8-102e-4633-9933-1f3d74df53d2
title: Templates
desc: "Templates are notes whose content can be copied to other notes"
updated: 1653537360821
created: 1602033087611
completion: sprout
config:
  global:
    enableChildLinks: false
---

## Summary

{{fm.desc}}
Templates can either be applied into an open note with the [[Template Apply Command|dendron://dendron.dendron-site/dendron.topic.templates.commands.template-apply]], or automatically applied at note creation with [[dendron://dendron.dendron-site/dendron.topic.schema]]. 
These are meant to reduce friction in the creation of new content, providing standardized outlines to your notes.

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

> NOTE: Only available when using [[Schema Templates|dendron.topic.templates.schema-template]]

Add custom variables in your [[dendron.topic.frontmatter]] and use them inside of your templates

```md
---
...
name: John
---

Hello {{fm.name}},

Congratulations on the offer!
```

### Template Variables

> NOTE: Only available when using [[Schema Templates|dendron.topic.templates.schema-template]]

Dendron comes with pre-defined template variables that are automatically included in your templates at run time. 

You can see the full list [[here|dendron.topic.templates.template-variables]]

### Comments
Comment your template to remember the context. 

```md
<!-- Markdown comment, will show up when template is applied -->

{{! Handlebar comment, will be stripped out when template is applied }}
```

### Conditionals 

> NOTE: only available when [[Handlebar Templates|dendron.topic.templates.handlebars]] are enabled

Use if/else clauses to conditionally apply templates

```handlebars
{{#if fm.name }}
Hello {{fm.name}}
{{else}}
To whom it may concern,
{{/if}}
```

### Iteration

> NOTE: only available when [[Handlebar Templates|dendron.topic.templates.handlebars]] are enabled

<!-- #todo -->

See https://handlebarsjs.com/guide/builtin-helpers.html#each

## Components

Dendron has 2 types of templates

### Handlebar Templates
![[dendron.topic.templates.handlebars#summary,1:#*]]

### Regular Templates
Regular templates are text based templates without handlebar functionality. They will be deprecated in future versions of Dendron. 

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
1. Congrats, you just applied your first template!

## Children
- [[Handlebar Templates|dendron.topic.templates.handlebars]]: Use [handlebars](https://handlebarsjs.com/guide/), a powerful templating language which enables conditionals, for loops and custom helpers to apply to your templates without executing code
- [[Schema Template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]]: Automatically apply a template when it matches a particular hierarchy pattern
- [[Template Variables|dendron.topic.templates.template-variables]]: Pre-defined template variables that are automatically included in your templates at run time
- [[Commands|dendron://dendron.dendron-site/dendron.topic.templates.commands]]: Template Specific Commands
