---
id: GelEQPZrSgr3CK9y10Nrg
title: Schema Template
desc: 'Automatically apply a template when it matches a particular hierarchy pattern'
updated: 1653440497387
created: 1643737499035
---

## Summary

{{fm.desc}}
This is extremely useful whenever you want to re-use the outline of a note. Examples include daily journals, weekly shopping lists, and weekly reviews.  

## Getting Started
<!-- #todo: written examples -->

<a href="https://www.loom.com/share/481b7ab051394c1caa383383bd265755"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/481b7ab051394c1caa383383bd265755-with-play.gif"> 
</a>


## [[Template Variables|dendron.topic.templates#template-variables]]

![[dendron.topic.templates.template-variables#summary,1:#^w9f1tyetgq6z]]

To use template variables, use the angle bracked syntax `<%= VARIABLE %>` 

> NOTE: the text enclosed in `<%= VARIABLE %>` will be replaced when the template is applied

An example of using template variables in your template:
- input
    ```md
    Today is <%=CURRENT_YEAR%>.<%= CURRENT_MONTH%>.<%= CURRENT_DAY%>,
    ```
- output
    ```
    Today is 2022.01.04
    ```

## [[Variable Substitution|dendron.topic.templates#variable-substitution]]

To use variable substitution in your template, use `{{ VARIABLE }}`. 

> NOTE: the text enclosed in `{{ VARIABLE }}` will not be replaced but rendered dynamically in the preview/publishing based on the value in the frontmatter. 

- input:
    ```md
    ---
    name: John
    ---

    Hello {{fm.name}}
    ```
- output (in preview):

    ```md
    Hello John!
    ```