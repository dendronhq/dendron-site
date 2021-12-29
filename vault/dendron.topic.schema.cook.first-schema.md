---
id: 5U4eAiqshI67VxIL40KWH
title: Making Your First Schema
desc: 'Learn to harness the powers of schema and automatically insert templates into new notes'
updated: 1640802690663
created: 1640784965050
---

## Summary

[[Schemas|dendron://dendron.dendron-site/dendron.topic.schema]] make management of new notes easier by automatically inserting Markdown [[templates|dendron://dendron.dendron-site/dendron.topic.templates]] into new notes. This guide will walkthrough making a template for daily journaling, using [The Five Minute Journal](https://www.intelligentchange.com/products/the-five-minute-journal) method, and using schema to handle where the template will be used in your [[hierarchy|dendron://dendron.dendron-site/dendron.topic.hierarchies]].

We'd like all daily journals to have 5MJ, in this scenario:

- `daily.journal.yyyy.mm.dd`: Logging tasks, and anything else we'd like in our daily journal. Dendron can automatically make these with the [[Daily Journal|dendron://dendron.dendron-site/dendron.topic.special-notes#daily-journal]] command (`Ctrl+Shift+I` / `Cmd+Shift+I`).

## Examples

- [5MJ Template](https://github.com/dendronhq/templates/tree/main/templates/templates.journal.5mj.md)

## Creating the 5MJ template

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

Replace the content of `5mj.schema.yml` with the following content. Here, we'll make use of [[Inline Schema|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]].

```yml
version: 1
schemas:
# Daily is the top most schema since its parent is 'root' it must have an identifier
# this identifier 'daily' will be used when using 'Lookup (schema)' command.
- id: daily
  parent: root
  title: daily
  desc: ""
  # Children of the top most schema do not need to contain identifier and just 
  # require a 'pattern' to be set to match the hierarchy of notes.
  children:
    - pattern: journal
      children:
        - pattern: "[0-2][0-9][0-9][0-9]"
          children:
            - pattern: "[0-1][0-9]"
              children:
                - pattern: "[0-3][0-9]"
                  # As with regular schema we can set the template to be used with
                  # the match of our notes. Below is an example usage of shorthand template
                  # definition (which defaults to type: note). 
                  desc: Five Minute Journal
                  template: templates.journal.daily.5mj
```

You now have a new schema with the 5MJ outline.

### Explanation of Schema Logic

The `pattern` attribute is using a globbing to match with the daily journal structure:

- Example: `daily.journal.2021.12.31`
- Patterns:
  - Year: `[0-2][0-9][0-9][0-9]` means match the range `0000 - 2999`
  - Month: `[0-1][0-9]` means match the range `00 - 19`
  - Day: `[0-3][0-9]` means match the range `00 - 39`

This means all new daily journal items will be within the pattern ranges.

## 5MJ Daily Journal

![[dendron.topic.special-notes#daily-journal,1:#*]]

Creating a daily journal entry should result in the `templates.journal.daily.5mj` template automatically inserted.

## Summary

After doing this, you've now:

- Created a 5MJ template, or added the `templates` seed to use our 5MJ template
- Created a 5MJ schema
- Created your first daily journal with the 5MJ template applied via schema