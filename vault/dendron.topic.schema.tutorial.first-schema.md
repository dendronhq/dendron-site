---
id: 5U4eAiqshI67VxIL40KWH
title: Making Your First Schema
desc: >-
  Learn to harness the powers of schema and automatically insert templates into
  new notes
updated: 1652866426847
created: 1640784965050
canonicalUrl: https://blog.dendron.so/notes/P1DL2uXHpKUCa7hLiFbFA/
---

## Summary

As you write more notes, you might find yourself re-using the same template across multiple notes. You can use schemas to automatically apply a template to notes at a given hierarchy.

In this tutorial, we will walkthrough creating a schema for your [[daily journal|dendron.topic.daily-journal-note]] that can automatically apply [The Five Minute Journal](https://github.com/dendronhq/templates/blob/main/templates/templates.journal.daily.5mj.md) to all your entries.

## Concepts

- Schemas are cross vault. If you have multiple schemas with same starting pattern, the last schema loaded takes precedence.
- Every level in the schema needs to have children

### Daily journal notes

![[dendron://dendron.dendron-site/dendron.topic.daily-journal-note#summary,1:#*]]

### Templates

![[dendron://dendron.dendron-site/dendron.topic.templates#summary,1:#*]]

### Schemas

![[dendron://dendron.dendron-site/dendron.topic.schema#summary,1:#*]]

## Steps

### Create 5MJ template

- Open [[lookup|dendron://dendron.dendron-site/dendron.topic.lookup]] (`Ctrl+L` / `Cmd+L`)
- Type `templates.daily-5mj` in the text prompt and hit enter to create the template

- Copy and paste the following markdown:

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

- Replace the content of `5mj.schema.yml` with the following:

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

The `pattern` attribute is using a [[Glob Pattern|dendron://dendron.dendron-site/dendron.concepts#glob-pattern]], which is an expression used to match ranges and combinations of characters.

To match with the daily journal structure:

- Example: `daily.journal.2021.12.31`
- Patterns:
  - Year: `[0-2][0-9][0-9][0-9]` means match the range `0000 - 2999`
  - Month: `[0-1][0-9]` means match the range `00 - 19`
  - Day: `[0-3][0-9]` means match the range `00 - 39`

This means all new daily journal notes are the pattern ranges.

### Create a new daily journal

Creating a daily journal entry should result in the `templates.daily-5mj` template automatically inserted.

- Run `Create Daily Journal Note` (`Ctrl+Shift+I` / `Cmd+Shift+I`)

You should see a new daily journal note with the 5MJ template inserted.

![[dendron://dendron.dendron-site/asset.preview#create-5mj-daily-journal-from-schema-and-template,1:#*]]

## Congratulations!

### Key takeaways

After doing this, you've now:

- Created a 5MJ template
- Created a 5MJ schema
- Created your first daily journal with the 5MJ template applied via schema

### Next steps

- Learn to [[swiftly create schema targeting existing note hierarchies|dendron.topic.schema.create-from-hierarchy]]
- Learn to level-up your daily life with [[the bullet journaling workflow|dendron://dendron.dendron-site/dendron.guides.workflows.bullet-journal]]
- Learn to explore your schema visually using the [[schema graph|dendron://dendron.dendron-site/dendron.topic.graph-view#schema-graph]]
- Check out an end-to-end workstyle, managing 20k notes, using schemas and daily journals from [[A Day in Dendron|dendron://dendron.dendron-site/community.events.greenhouse.2021-07-23-using-dendron-with-20k-notes]]

