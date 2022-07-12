---
id: 8hwz4bvyy556frx9y04c1cv
title: Task Management
desc: >-
    Learn to use different features in Dendron to manage your tasks
updated: 1652355197557
created: 1650385442920
canonicalUrl: https://blog.dendron.so/notes/1jynrsx70fh3mihhrhikrf8/
---

![page in a journal with a checklist titled "today" and numbered one through four](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-task-header.png)

## Summary

Tasks come in all **shapes** and **sizes**. 

Sometimes, we simply need a checkbox and a bullet to know what's complete and what's left to-do. Other times, we need to track more complex attributes of our tasks like deadlines, priorities, statuses, assignments, dependencies and more. 

In this tutorial, we'll explore a **simple** and **scalable** solution to task management with [Dendron](https://www.dendron.so/). Dendron is a developer-focused note taking tool for that is open source, local-first, and integrated with Visual Studio Code.

## Concepts

### Task Notes

Task Notes are a **special note** in Dendron, like [Scratch Notes](https://wiki.dendron.so/notes/5c213aa6-e4ba-49e8-85c5-1bdcb33ce202) or [Daily Journal Notes](https://wiki.dendron.so/notes/5c213aa6-e4ba-49e8-85c5-1bdcb33ce202). Task Notes use metadata in their frontmatter to help track and display task-related information. 



## Prerequisites

If you'd like to follow along, make sure you've read [Getting Started](https://wiki.dendron.so/notes/678c77d9-ef2c-4537-97b5-64556d6337f1), and are able to open a workspace. 

## Steps

Let's imagine a friend is having a birthday, and we want to bake some cookies to help celebrate. The party is in a few hours, so we'll need to act fast!

To show up to the party with cookies, we'll need to complete three tasks: 

1. go to the store and buy the ingredients
2. mix the ingredients and bake the cookies
3. bring the freshly-baked cookies to the party 

### Create bullet tasks

We can begin with the simplest form of task management: **a bullet list of checkmarks**. 

- Open [lookup](https://wiki.dendron.so/notes/a7c3a810-28c8-4b47-96a6-8156b1524af3) (`Ctrl+L` / `Cmd+L`)
- Type `birthday-cookies` in the text prompt and hit enter to create a note
- Copy the following into the `birthday-cookies` note:

```markdown
- [ ] buy ingredients
- [ ] bake cookies
- [ ] bring cookies to party
```

### Check off a bullet task

After writing down our list, we make a quick trip to the store and return, ingredients in hand. We have completed our first task! Let's mark it off our list. 

- Type `x` into the brackets next to `buy ingredients`

```markdown
- [x] buy ingredients
- [ ] bake cookies
- [ ] bring cookies to party
```

Your bullet list should now render Markdown checkboxes in [Preview](https://wiki.dendron.so/notes/Lnp1URddmWEWweyf).

![bullet list of tasks with "buy ingredients" checked off](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-task-checklist.png)

### Create a task note

Now that we have the ingredients, it's time to bake. Looking at our `bake cookies` task, something feels missing...we don't know the steps involved in baking! Let's fix that...

- Delete the bracket next to `bake cookies`. Your note should look like the following:

```markdown
- [x] buy ingredients
- bake cookies
- [ ] bring cookies to party
```

- Select the text `bake cookies`
- Open the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and type `task`
- Select the `Dendron: Create Task Note` command and hit `Enter`
- You should see the text `birthday-cookies.bake-cookies`. If not, correct the text. Hit  `Enter` again. 

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/323024198aa341b7b20a3e9271a5ec5d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

For reference, we are using the following configuration for this tutorial (the default in Dendron):

```yaml
    task:
        name: task
        dateFormat: y.MM.dd
        addBehavior: asOwnDomain
        statusSymbols:
            '': ' 'p
            wip: w
            done: x
            assigned: a
            moved: m
            blocked: b
            delegated: l
            dropped: d
            pending: 'y'
        prioritySymbols:
            H: high
            M: medium
            L: low
```

Visit here for more information on [the configuration of special notes like task notes](https://wiki.dendron.so/notes/5c213aa6-e4ba-49e8-85c5-1bdcb33ce202).

### Check off a task note

Congrats, you've created a task note! You may notice something strange with this new note. There's something extra in the [frontmatter](https://wiki.dendron.so/notes/ffec2853-c0e0-4165-a368-339db12c8e4b) (the `YAML` text at the top of the file). 

> 🗒 **Note**: Frontmatter is hidden by default in task notes. To expand, click the arrow next to the top line.

- Add an `'x'` next to `status` so it reads:

```markdown
status: 'x'
due: ''
priority: ''
owner: ''
```

- Navigate back to the `birthday-cookies` note. 

> 💡 **Tip**: To quickly go back to the previous note, use the `Alt-Tab` shortcut

You should see that the `bake-cookies` note has a filled checkbox.

```markdown
- [x] buy ingredients
- [x] [[bake cookies|birthday-cookies.bake-cookies]]
- [ ] bring cookies to party
```

Task notes give we get an up-to-date view of the task's status any place it is linked to. But let's not get ahead of ourselves, we haven't done any baking yet!

- Return to `birthday-cookies.bake-cookies` and remove the `x` next to `status` so that it reads: `status: ''`. 

> 🚧 **Under Construction**: We appreciate your patience as we develop new features like task notes. Currently, checkboxes are under construction, and are not rendering correctly in Preview.

### Break into subtasks

Let's make a task for each step:

1. prepare the oven and ingredients
2. mix the ingredients
3. form dough balls and bake in the oven

- Copy the following into `birthday-cookies.bake-cookies` 

```markdown
- prepare oven and ingredients
- mix ingredients
- form balls and bake
```

For the `mix ingredients` and `form balls and bake` subtasks, create a task note as you did above:

- Select the text for the new task
- Open the `Command Palette` 
- Run the `Dendron: Create Task Note` command

Your `bake-cookies` task should now look as follows:

```markdown
- [ ] [[prepare oven and ingredients|bake-cookies.prepare-oven-and-ingredients]]
- [ ] [[mix ingredients|bake-cookies.mix-ingredients]]
- [ ] [[form balls and bake|bake-cookies.form-balls-and-bake]]
```

- Navigate to `bake-cookies.prepare-oven-and-ingredients` and check out at the backlinks of the note

![Backlinks window with a backlink to the "bake cookies" note](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-task-backlink.png)

> 💡 **Tip**: By nesting our tasks notes (linking to a task inside another task), we can monitor which tasks are dependent on others using backlinks.  

- Return to your `birthday-cookies` note and hover your mouse above the link to the `bake-cookies` note. You should see the newly created tasks in Quick Preview. 

![Quick Preview window showing links in "bake cookies" note](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-task-preview.png)

> 💡 **Tip**: Try clicking on one of the tasks in the Quick Preview. Look, it's a link!

Look at you go, you've created subtasks! 

Now, you can track your progress at a more granular level through the different baking steps. Soon, the smell of cookies will be in the air, and it will be time to party! 🥳

## Wrap-up

### Takeaways

Upon completing this tutorial, you've learned about:

- creating a simple tasks using `[ ]`
- creating a task note
- adding subtasks

Task management in Dendron is flexible. Through task-specific features like bullet tasks, task notes, subtasks and configs, as well as familiar features like [hierarchies](https://wiki.dendron.so/notes/f3a41725-c5e5-4851-a6ed-5f541054d409) and [bidirectional links](https://wiki.dendron.so/notes/3472226a-ff3c-432d-bf5d-10926f39f6c2), Dendron gives you the tools to tackle tasks at any scale. 

### Next Steps

- Customize your task notes with a [custom configuration](https://wiki.dendron.so/notes/SEASewZSteDK7ry1AshNG) 
- Learn about the process of starting simple and reshaping with the [Amoeba Pattern](https://wiki.dendron.so/notes/e780000d-c784-4945-8e42-35218a3ecf10)
- Learn more about how Dendron supports other workflows, like [Bullet Journaling](https://wiki.dendron.so/notes/e65dfe53-41f7-4b16-b870-dadec1775497) and [Todos](https://wiki.dendron.so/notes/593206ea-5658-4874-bafd-18a138870f91)
- Read through the proposal for [task notes](https://wiki.dendron.so/notes/716e2699-42e1-44bd-9b97-124f03173ddc) and give your feedback on tasks in Dendron 
- See how other Dendrologist manage tasks from a [live demonstration](https://wiki.dendron.so/notes/ordz7r99w1v099v14hrwgnp)
- Learn how Dendron manages tasks as a team in our [organization handbook](https://handbook.dendron.so/notes/nvv2jssywd0e3wvqg6jem8j)
