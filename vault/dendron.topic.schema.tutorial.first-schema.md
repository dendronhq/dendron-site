---
id: 5U4eAiqshI67VxIL40KWH
title: Making Your First Schema
desc: >-
  Learn to harness the powers of schema and automatically insert templates into
  new notes
updated: 1641256374720
created: 1640784965050
---

## Summary

You may find yourself wanting to use templates in your notes, especially when finding yourself using the same outline and headers over time. This tutorial will walkthrough making a template for daily journaling, using [The Five Minute Journal](https://www.intelligentchange.com/products/the-five-minute-journal) (5MJ) method, as an example, and automatically applying that template whenever you create a new journal.

## Concepts

- **[[Daily Journal|dendron.topic.special-notes#daily-journal]]**: Special notes meant to be easily made with the `Create Daily Journal Note` (`Ctrl+Shift+I` / `Cmd+Shift+I`) command. These are also what appear in the [[Calendar View|dendron._ref.web-ui#calendar-view]].
- **[[Templates|dendron.topic.templates]]**: Notes containing content meant to reuse in new notes, such as outlines meant to guide you throught specific note types or journal entries.
- **[[Schemas|dendron://dendron.dendron-site/dendron.topic.schema]]**: These help you apply consistent structure to all your notes. One of its primary capabilities is to automatically insert [[templates|dendron://dendron.dendron-site/dendron.topic.templates]] into new notes. 

## Steps

### Create 5MJ template

- Open [[lookup|dendron://dendron.dendron-site/dendron.topic.lookup]] (`Ctrl+L` / `Cmd+L`)
- Type `templates.daily-5mj` in the text prompt and hit enter to create the template

Copy and paste the following markdown:

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

- Save the file.

You now have a new template with the 5MJ outline.

### Create 5MJ schema

> Templates can be used with or without schemas. Run [[Insert Note|dendron.ref.commands#insert-note]] to insert a template into the currently opened note.

- Open [[schema lookup|dendron://dendron.dendron-site/dendron.topic.lookup.schemas]] (`Ctrl+Shift+L` / `Cmd+Shift+L`)
- Type `5mj` in the text prompt and hit enter to create the schema, which should look like the following:

```yml
version: 1
imports: []
schemas:
  - id: 5mj
    children: []
    title: 5mj
    parent: root

```

### Update 5MJ schema contents

We are going to use [[Inline Schema|dendron://dendron.dendron-site/dendron.topic.schema#inline-schema-anatomy]], which is a simpler form of schema taking less configuration lines while using indentation for visual understanding.

Replace the content of `5mj.schema.yml` with the following:

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
          # This pattern matches the YYYY (year) child hierarchy
        - pattern: "[0-2][0-9][0-9][0-9]"
          children:
              # This pattern matches the MM (month) child hierarchy
            - pattern: "[0-1][0-9]"
              children:
                  # This pattern matches the DD (day) child hierarchy
                - pattern: "[0-3][0-9]"
                  # As with regular schema we can set the template to be used with
                  # the match of our notes. Below is an example usage of shorthand template
                  # definition (which defaults to type: note). 
                  desc: Five Minute Journal
                  template: templates.daily-5mj
```

The `pattern` attribute is using a globbing to match with the daily journal structure:

- Example: `daily.journal.2021.12.31`
- Patterns:
  - Year: `[0-2][0-9][0-9][0-9]` means match the range `0000 - 2999`
  - Month: `[0-1][0-9]` means match the range `00 - 19`
  - Day: `[0-3][0-9]` means match the range `00 - 39`

This means all new daily journal items will be within the pattern ranges.

### Create a 5MJ daily journal

Creating a daily journal entry should result in the `templates.daily-5mj` template automatically inserted.

- Run `Create Daily Journal Note` (`Ctrl+Shift+I` / `Cmd+Shift+I`)

You should see a new daily journal note with the 5MJ template inserted.

## Congratulations!

### Key takeaways

After doing this, you've now:

- Created a 5MJ template, or added the `templates` seed to use our 5MJ template
- Created a 5MJ schema
- Created your first daily journal with the 5MJ template applied via schema

### Next steps

#todo
