---
id: SEASewZSteDK7ry1AshNG
title: Tasks
desc: ""
updated: 1661498129020
created: 1635451738215
---

## Summary

One of the important use cases for Dendron is productivity and task management.
Whether it's a student keeping track of their homework assignments or a large
team tracking their short and long term plans, Dendron's task system can help
track and manage your work.

## Features

### Plain Tasks

The simplest method to keep track of tasks is to simply use Markdown checkmarks. Here's what that can look like:

```
- [ ] Prepare for the party
    - [ ] Send invitations
    - [ ] Order food
- [x] Rent payment #important
```

And here's how it looks like in the preview or publishing:

> - [ ] Prepare for the party
>   - [ ] Send invitations
>   - [ ] Order food
> - [x] Rent payment #important

You can put these in a [[Journal|dendron.guides.workflows.bullet-journal]] to keep
track of when you completed them, and add [[Tags|dendron.topic.tags]] like in
the example above to organize them. Using list nesting, you can even describe a
hierarchy of a big task and the parts of that task that need to be completed. If
you need to jot down more information about a task, you can always create a
[[dendron.topic.special-notes#scratch-note]] and [[link|dendron.topic.links]] to
it in the task.

### Task Notes

Task notes are a special type of note that represent a task. Task notes have special frontmatter that give additional context. 

```yaml
---
id: sEnzNEw04L4BZ2lN00zuI
title: Task Example
desc: "This is an example of task note frontmatter"
updated: 1635228981637
created: 1635228506689
status: "x"
due: "2021.10.29"
priority: "H"
owner: "kaan"
tags:
  - size.small
---
```

### Smart Links

When referencing a task note, rendering works differently when compared to other checkboxes in Markdown. Using the above example as a referenced note at `task.example`:

```markdown
- [x] This is a task without note links
- [ ] This is a task with a [[referenced wikilink|dendron.topic.tasks]]
- [x] [[task note|task.example]] due:wed @kaan prio:high
  - The checkbox is automatically rendered from the `task.example` frontmatter values for task notes. `due:2021.10.29 @kaan prio:high`, along with the `[x]` prefix, is automatically rendered in the workspace editor.
    - `@kaan`: Comes from `owner: 'alice'` in the `task.example` frontmatter
    - `prio:high`: Comes from `priority: 'H'` in the `task.example` frontmatter
    - `due:2021.10.29`: Comes from `due: 'wed'` in the `task.example` frontmatter
```

### Todo Tree Integration

![[dendron://dendron.dendron-site/dendron.topic.tasks.config.todo-integration#description,1:#*]]

## Getting Started

### Creating a task note

There are 2 ways to create a task note, you can either use the toggle in your
regular lookup bar, or you can use the [[Create Task Note|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]] command.
They both achieve the same result, although the task create command comes with some default
settings.

![A screenshot displaying an open note that lists 3 tasks, each showing off different features of task notes. On the top right of the image is a lookup bar with the task toggle selected.](https://org-dendron-public-assets.s3.amazonaws.com/images/task-note-create-example.png)

Task notes are same as regular notes, except that they contain some special keys ^g9e24kq5g9q7
in their [[frontmatter|dendron.topic.frontmatter]]. These keys are inserted by
default when you use the toggle or the command, but you can also add them
yourself.

Whenever you link to a task note, these keys will display the status of that
task: this works in the editor, preview, and published sites. You can disable
the status view in preview and publishing by setting [[enableTaskNotes|dendron://dendron.dendron-site/dendron.topic.publish.config.enableTaskNotes]].

### Setting task status / Marking a task as complete

You can use the [[Set Task Status|dendron://dendron.dendron-site/dendron.ref.commands#set-task-status]]
and [[Complete Task|dendron://dendron.dendron-site/dendron.ref.commands#complete-task]] commands
to change the status of a task, or to mark it as complete. Alternatively,
you can also manually edit the frontmatter to change the status to anything you want.

#### Keyboard shortcut for a task status

You can create a keyboard shortcut that sets the task to a specific status.

To do so, use the `Preferences: Open Keyboard Shortcuts (JSON)` command to open
the shortcuts file. In this file, add a section so the file will look like the following:

```json
[
  // ... other keybindings
  {
    "key": "ctrl+shift+t y", // or any other shortcut you want to use
    "command": "dendron.setTaskStatus",
    "when": "editorFocus && dendron:pluginActive",
    "args": {
      "setStatus": "y" // the status you want to set
    }
  }
]
```

## Configuration

![[dendron://dendron.dendron-site/dendron.topic.tasks.config]]

