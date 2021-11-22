---
id: 716e2699-42e1-44bd-9b97-124f03173ddc
title: Todo Notes
desc: ''
updated: 1635371478041
created: 1621568116095
published: true
---

## Goals

Create a special note type for tasks. 

## Context

Task management is a popular use case with Dendron. Many users currently use [[scratch note|dendron.topic.special-notes#scratch-note]] for tasks. 

While it can work, tasks have a lot of additional considerations like priority, ownership and due date that are hard to track in a consistent way using simple scratch notes. 

A common pattern for task is using the `[ ]` syntax to track completion

```
- [ ] todo1
```

This works less well once the task becomes a scratch note that is present in multiple places
```markdown

<!-- weekly.journal.2021.01 --->
- [ ] [[todo1|scratch.journal.2021.01.01.todo1]]
...

<!-- daily.journal.2021.01.01 --->
- [ ] [[todo1|scratch.journal.2021.01.01.todo1]]
...
```

As a user, I now have to remember to check this task off in multiple places. 

## Proposal

To address previously mentioned issues, we introduce the concept of a **Task Note**. This is a new [[special note|dendron.topic.special-notes]] that is meant to make it easier to manage tasks in Dendron. 

This RFC aims to implement the following functionality:
- specify how to create and customize task notes
- specify how to change the status of task notes
- specify how to display task notes
- specify how to create different views for task notes

## Details

### Creating a task note

Task notes will be added to Dendron as a [[lookup modifier|dendron.topic.lookup.modifiers]] with the following default shortcuts:
- `CMD+SHIFT+T` (mac)
- `CTRL+SHIFT+T` (windows and linux)
<!-- -->
- NOTE: this conflicts with the built in shortcut to reopen a closed window

By default, task notes will be created as a child of the current note. For example, if the current note was `proj.build-a-cabin`, creating a task note would result in `proj.buid-a-cabin.task.{desc}` being created where `{desc}` is the human readable description of said note. 

### Customizing a task note

Task notes have the same configuration as Dendron's other [[special notes|dendron.topic.special-notes#configuration]].


#### notes.owner.hierarchy
- default: `people`

The hierarchy for task owners. 

### Properties

A task note has the following optional properties that can be set in the frontmatter

```yml
completed: boolean
due: date
owner: string
priority: L|M|H
tags: [tag1, tag2]
status: wip
```

#### completed

Indicates whether the project is complete

#### due

Date indicating when the task is due

#### owner

The individual responsible for the task

#### priority

The priority of the given task

#### status

The current status of the task. This should be customizable. The default list can be a simplified version of what we have in the [handbook](https://handbook.dendron.so/notes/0292b34e-47eb-4499-8f49-d9891accdb3d.html)

#### tags

Tags for the given task

### Log

Every time the status changes, it is updated in the log

### Display

When a task is completed, Dendron will create the following rendering

```markdown
<!-- raw markdown -->
- [[proj.build-a-cabin]]

<!-- rendered markdown in editor and preview-->
- [x] [[proj.build-a-cabin]]  
```

Note that in the editor, the `[x]` will be rendered as a [Text Decorator](https://code.visualstudio.com/api/references/vscode-api#TextEditorDecorationType) which means it won't be part of the document but only appear as a visual indicator. 

Using the same technique, Dendron can show the rest of the task properties using the text decorator trick. 

```yml
completed: false
status: a
due: friday
owner: kevin
priority: H
tags: [backend]
```

```markdown
- [ ] [[proj.build-a-cabin]] due:friday @kevin prio:H #backend
```

How a text note link is rendered can be configured using [[notes.task.render|dendron.rfc.13.todo-notes#notestaskrender]] property. 

## Configuration

### notes.task.render
- default: `- [{note.completed}] [{note.fname}] {% if due %} {% endif %}

{% if posts.length %}
{% else %}
<i>No project posts yet!</i>
{% endif %}

## Example

1. Jonny is in his daily journal,  `user.jonny.journal.2021.10.08`
    ```markdown
    ## Tasks
    - buy milk 
    ```
1. Jonny runs `Dendron: Create Task` when highlighting `buy milk`
    - this runs `lookup` with the new `todo` modifier checked
    - creates and opens `user.jonny.journal.2021.10.08.todo` while creating a wikilink in the original daily journal
        ```markdown
        ---
        title: buy milk
        completed: false
        due: null
        owner: jonny
        status: a
        priority: M
        tags: []
        ---
        ```
1. TBD

## Tradeoffs

## Discussion

Please see the [discussions page](https://github.com/dendronhq/dendron/discussions/1358) to add any thoughts or suggestions.

## PRs
- ![[dendron://dendron.docs/rfc.13.todo-notes.kevin-pr-comments]]
