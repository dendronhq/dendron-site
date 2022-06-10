---
id: SEASewZSteDK7ry1AshNG
title: Tasks
desc: ""
updated: 1654198320134
created: 1635451738215
---

## Summary

One of the important use cases for Dendron is productivity and task management.
Whether it's a student keeping track of their homework assignments or a large
team tracking their short and long term plans, Dendron's task system can help
track and manage your work.

## Plain Tasks

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

## Task Notes

Writing down your tasks in plain Markdown is easy and most easily compatible
with other tools, but it doesn't work for everyone. If you ever find yourself
looking for more comprehensive features, you should go for task notes. This is
an upcoming feature that's currently in development, so send your feedback to
the [Task Notes RFC](https://docs.dendron.so/notes/716e2699-42e1-44bd-9b97-124f03173ddc/) and look out for updates!

### Creating a task note

There are 2 ways to create a task note, you can either use the toggle in your
regular lookup bar, or you can use the [[Create Task Note|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]] command.
They both achieve the same result, although the task create command comes with some default
settings.

![A screenshot displaying an open note that lists 3 tasks, each showing off different features of task notes. On the top right of the image is a lookup bar with the task toggle selected.](https://org-dendron-public-assets.s3.amazonaws.com/images/task-note-create-example.png)

Task notes are same as regular notes, except that they contain some special keys
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

### Task note internals

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

<!--
#### Task note links

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
-->

### Configuration

You can control where the task notes are created in the configuration file. Use [[Configure (yaml)|dendron.ref.commands#configure-yaml]] command, or open the `dendron.yml` file at the root of your workspace and look for the following options.

```yaml
workspace:
  task:
    name: "task"
    dateFormat: "y.MM.dd"
    addBehavior: asOwnDomain
```

#### addBehavior

- possible values: `asOwnDomain`, `childOfCurrent`, `childOfDomain`, `childOfDomainNamespace`

See [[dendron.topic.special-notes#defaultnodetypeaddbehavior]] for an explanation of how these values work.

#### name

This is the name that all notes will be under. For example if this is set to `task`, then all tasks will go under `task.…`. Leave it empty to skip it.

#### dateFormat

Set this to a format to add a date to the task note names. See [[dendron.topic.special-notes#defaultnodetypedateformat]] for an explanation of how it works.

### Customizing display

You can see how the task note displays the keys like due and owner. Some like the status and priority are a little more complicated, but you can figure them out once you take a look at the default configuration.

```yaml
workspace:
    ...
    task:
        statusSymbols:
            "": " "
            "done": "x"
            ...
        prioritySymbols:
            H: "high"
            M: "medium"
            L: "low"
        taskCompleteStatus: ["x", "done"]
```

Dendron uses this configuration to map the priority and status symbols used in the frontmatter to what gets displayed on the screen. By changing these configurations, you can change what gets displayed.

#### statusSymbols

You can use these to map note statuses to symbols, emojis, or anything else you
want. The mapped symbol is what will be displayed for a task that has that
status.

The key portion (left side of `:`) is the status of the task, and value portion
(right side of `:`) is what will displayed in the editor, preview, and
publishing for that task.

#### prioritySymbols

You can use these to map note priorities to symbols, emojis, or anything else you
want. The mapped symbol is what will be displayed for a task that has that
priority.

The key portion (left side of `:`) is the priority of the task, and value portion
(right side of `:`) is what will displayed in the editor, preview, and
publishing for that task.

#### taskCompleteStatus

A list of statuses that represent a task that is complete. If a task note has a
status that matches anything in this list, the task is considered to be
complete.

This is used in the preview and publishing, where a link to a completed task is
displayed with a checked box, as opposed to an empty checkbox for all other
tasks.

You'll likely want to use this only for tasks that are considered "successful",
so tasks that have been dropped, blocked, or failed are not displayed with a
checkmark.

### Todo Tree integration

You can integrate your tasks with [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree).
If you set `todoIntegration` to true, task notes will create a `TODO:` keyword in the frontmatter that should be picked up by TODO tree.

```yaml
workspace:
    ...
    task:
      todoIntegration: true
```
