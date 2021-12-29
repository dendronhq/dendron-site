---
id: 5U4eAiqshI67VxIL40KWH
title: Making Your First Schema
desc: 'Learn to harness the powers of schema and automatically insert templates into new notes'
updated: 1640789533041
created: 1640784965050
---

## Summary

[[Schemas|dendron://dendron.dendron-site/dendron.topic.schema]] make management of new notes easier by automatically inserting Markdown [[templates|dendron://dendron.dendron-site/dendron.topic.templates]] into new notes. This guide will walkthrough making a template for daily journaling, using [The Five Minute Journal](https://www.intelligentchange.com/products/the-five-minute-journal) method, and using schema to handle where the template will be used in your [[hierarchy|dendron://dendron.dendron-site/dendron.topic.hierarchies]].

We'd like all daily journals to have a child note for our 5MJ:

- `daily.journal.yyyy.mm.dd`: Logging tasks, and anything else we'd like in our daily journal. Dendron can automatically make these with the [[Daily Journal|dendron.topic.special-notes#daily-journal]] command (`Ctrl+Shift+I` / `Cmd+Shift+I`).
- `daily.journal.yyyy.mm.dd.5mj`: Our 5MJ for the day. This is kept separate in order for `daily.journal.yyyy.mm.dd` templates to be maintained separately. If wanting to target these, information will be provided on how to.

## Examples

- [`templates` seed repository](https://github.com/dendronhq/templates)
  - [5MJ Template](https://github.com/dendronhq/templates/tree/main/templates/templates.journal.5mj.md)

## 5MJ Template

### Optional: Add templates seed to your workspace

Dendron has a `templates` seed which can be imported into your workspace, if it isn't already. This includes the 5MJ template, as stated in [examples](#examples). [[Seeds|dendron://dendron.dendron-site/dendron.topic.seed-bank]] are public workspaces which are configured to easily import into your existing workspace.

- Run `Dendron: Add Seed to Workspace`
- Select `dendron.templates`

Your workspace now has the `templates` seed imported, and you can use the 5MJ template.

### Creating the 5MJ template

If creating the template on your own:

- Open [[lookup|dendron://dendron.dendron-site/dendron.topic.lookup]] (`Ctrl+L` / `Cmd+L`)
- Create a note called `templates.journal.daily.5mj`
  - This creates a `templates.journal.daily` hierarchy if there wasn't one, and a new note called `5mj`

Enter in the following markdown:

```markdown
<!--
Based on the journaling method created by Intelligent Change:
- [Intelligent Change: Our Story](https://www.intelligentchange.com/pages/our-story)
- [The Five Minute Journal](https://www.intelligentchange.com/products/the-five-minute-journal)
-->

## Morning

<!-- Fill out this section after waking up -->

### Gratitude

I am grateful for:

1.
2.
3.

### What would make today great?

1.
2.
3.

### Daily affirmations

I am...

## Evening

<!-- Fill out this section before going to sleep, reflecting on your day -->

### Amazing things that happened today

1.
2.
3.

### How could I have made today even better?

I could have made today better by
```

You now have a new template with the 5MJ outline.

## 5MJ Schema

> Keep in mind: templates can be used with or without schemas automatically applying them. Running the [[Insert Note|dendron.ref.commands#insert-note]] command is a way to insert a template into the currently opened note.

### Creating the 5MJ Schema

- Open [[schema lookup|dendron://dendron.dendron-site/dendron.topic.lookup.schemas]] (`Ctrl+Shift+L` / `Cmd+Shift+L`)
- Create a schema called `5mj`

This creates `5mj.schema.yml`, which should have default content looking like the following.

```yml
version: 1
imports: []
schemas:
  - id: 5mj
    children: []
    title: 5mj
    parent: root

```

#### 5MJ Schema Contents

Replace the content of `5mj.schema.yml` with the following content.

```yml
version: 1
schemas:
- id: daily
  title: daily
  desc: ""
  parent: root
  children:
    - journal
- id: journal
  title: journal
  desc: ""
  parent: root
  children:
    - year
- id: year
  title: year
  pattern: "[0-2][0-9][0-9][0-9]"
  children: 
    - month
- id: month
  title: month
  pattern: "[0-9][0-9]"
  children: 
    - day
- id: day
  title: day
  pattern: "[0-9][0-9]"
  namespace: true
  children:
    - 5mj
- id: 5mj
  title: 5mj
  desc: Five Minute Journal
  template: templates.journal.daily.5mj
```

You now have a new schema with the 5MJ outline.

## 5MJ Daily Journal

Let's create a new 5MJ for today.

- Run `Create Daily Journal Note` (`Ctrl+Shift+I` / `Cmd+Shift+I`)
- After note is created, open lookup (`Ctrl+L` / `Cmd+L`)
- Add a new `5mj` child to the current note (ex. `daily.journal.yyyy.mm.dd.5mj`)

This should create a new 5MJ note with the `templates.journal.daily.5mj` template automatically inserted.

## Summary

After doing this, you've now:

- Created a 5MJ template, or added the `templates` seed to use our 5MJ template
- Created a 5MJ schema
- Created your first 5MJ note