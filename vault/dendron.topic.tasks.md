---
id: SEASewZSteDK7ry1AshNG
title: Tasks
desc: ''
updated: 1637695024745
created: 1635451738215
---

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
>     - [ ] Send invitations
>     - [ ] Order food
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
the [[Todo Notes RFC|rfc.13.todo-notes]] and look out for updates!

### Creating a task note

There are 2 ways to create a task note, you can either use the toggle in your
regular lookup bar, or you can use the [[Task Create|dendron.ref.commands#task-create]] command.
They both achieve the same result, although the task create command comes with some default 
settings.

![A screenshot displaying an open note that lists 3 tasks, each showing off different features of task notes. On the top right of the image is a lookup bar with the task toggle selected.](https://org-dendron-public-assets.s3.amazonaws.com/images/task-note-create-example.png)

Task notes are same as regular notes, except that they contain some special keys
in their [[frontmatter|dendron.topic.frontmatter]]. These keys are inserted by
default when you use the toggle or the command, but you can also add them
yourself. Whenever you link to a task note, these keys will display the status
of that task. This currently only works in the editor, but keep an eye out for
updates as we enable it for preview and publishing as well!

### Marking tasks as complete

We are working on enhancing the task note experience. In the meantime, you can
edit the task note and change the status to `x` to display a completed checkmark.

### Task note internals

```yaml
---
id: sEnzNEw04L4BZ2lN00zuI
title: Task Example
desc: 'This is an example of task note frontmatter'
updated: 1635228981637
created: 1635228506689
status: 'x'
due: '2021.10.29'
priority: 'H'
owner: 'kaan'
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

#### Custom configuration

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
```

Dendron uses this configuration to map the priority and status symbols used in the frontmatter to what gets displayed on the screen. By changing these configurations, you can change what gets displayed.
