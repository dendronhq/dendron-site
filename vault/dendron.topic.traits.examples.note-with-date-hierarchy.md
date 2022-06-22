---
id: kwgbkl58xka0zsib8uhhkfw
title: Note with Date Hierarchy
desc: ''
updated: 1655718090379
created: 1655717424162
---

## Summary

This trait closely mirrors the functionality of [[Journal Notes|dendron://dendron.dendron-site/dendron.topic.special-notes#journal-note]], but allows you to put the notes under a different domain. This example creates a "planning" note with the following behavior:
- uses 'planning' as the domain, followed by a dated hierarchy in the format (yyyy.MM.dd)
- changes the title of the note to a format like `2020-07-14`
- Applies a template to the note

## Trait Definition

_planning-trait.js_:

```javascript
module.exports = {
  OnWillCreate: {
    /**
     * This example sets a prefix of 'planning', and then adds a date hierarchy
     * using the luxon module.
     */
    setNameModifier() {
      // This example sets a prefix of 'planning', and then adds a date
      // hierarchy using the luxon module.
      return {
        name: "planning." + luxon.DateTime.local().toFormat("yyyy.MM.dd"),
        promptUserForModification: true,
      };
    },
  },
  OnCreate: {
    setTitle(props) {
      // This example will use the currentNoteName property, extract the
      // yyyy.MM.dd date portion of the note name, and then reformat it with
      // dashes.
      return props.currentNoteName.split(".").slice(-3).join("-");
    },
    /**
     * Apply a template to each note. NOTE: If you want to use this code, you
     * will need a note file called `templates.planning-template.md` in your
     * Dendron workspace.
     */
    setTemplate: () => {
      return "templates.planning-template";
    },
  },
};

```
