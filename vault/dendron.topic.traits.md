---
id: bdZhT3nF8Yz3WDzKp7hqh
title: Note Traits
desc: 'Note traits let you customize the data of notes using code'
updated: 1657121699475
created: 1638842998292
---

## Summary

- _Note: This is a [[germ stage|dendron://dendron.dendron-site/tags.stage.germ]] feature that may have breaking changes in future versions of Dendron!_

{{fm.desc}}

## Use Cases
- You want to have some of the characteristics of Dendron's built-in [[journal notes|dendron://dendron.dendron-site/dendron.topic.special-notes#journal-note]] or [[scratch notes|dendron://dendron.dendron-site/dendron.topic.special-notes#scratch-note]], but you want to customize the behavior yourself
- You want to apply a template to notes when they are created instead of defining a [[schema template|dendron://dendron.dendron-site/dendron.topic.templates.schema-template]].

## Getting Started

This example will show you how you can create your own note traits and apply them to your new notes.  In this example, we'll create a trait that will modify the name and title of the note automatically when you create a new note.

### 1. Create a new Note Trait

Run the command `Dendron: Configure Note Traits`. Give your new trait a unique name.  In this example, we'll call the trait professional-connections. Hit `Enter` and a `professional-connections.js` file will appear in your editor. This is where you define your custom trait logic.

### 2. Add the trait behavior

Add in Javascript code to have custom settings when creating the note name and the note title.

> ❗️ Note: The API's here may have breaking changes in future iterations. More functionality will also be exposed to note traits in the future.

For now, replace the contents of `professional-connections.js` with the code below.  To see documentation of how the API works, you can take a look [[here|dendron.topic.traits.api]].

This code will behave as follows:

For the note name:
- Prepend the current year and date to the name to form a year/month hierarchy
- If any highlighted text of a Dendron Note, use that for the note name
- Else, if there are clipboard contents, use that for the note name
- Otherwise, just use a placeholder 'John Doe'
- Allows the user to further modify the note name before confirming

For the note title:
- Extract from the note the person's name, and capitalize it.

```javascript
module.exports = {
  /**
   * Creates a note name with a year.month.name format.
   */
  OnWillCreate: {
    setNameModifier(props) {

      // placeholder name:
      let nameModifier = "John Doe";

      // Try to get the name first from selected Text, and secondly from the clipboard
      if (props.selectedText) {
        nameModifier = props.selectedText
      }
      else if (props.clipboard) {
        nameModifier = props.clipboard;
      }

      // Add a date component with year and month
      const curDate = new Date();
      const year = curDate.getFullYear();
      const month = curDate.getMonth() + 1; // getMonth is 0 indexed

      return {
        name: [year, month, nameModifier].join('.'),
        promptUserForModification: true
      };
    }
  },
  /**
   * Extracts the name component of the note title and capitalizes it
   */
  OnCreate: {
    setTitle(props) {
      const fName = props.currentNoteName;

      if (fName.includes(".") && fName.lastIndexOf(".") < fName.length) {
        const namepart = fName.substring(fName.lastIndexOf(".") + 1);
        const capitalized = namepart.split('-').map(element => element[0].toUpperCase() + element.substring(1));

        return capitalized.join(' ');
      }
      else {
        return fName;
      }
    }
  }
}
```

### 3. Create a new note with the Trait applied

Run the command `Dendron: Create Note With Custom Trait`. Select your trait, `professional-connections`. This will bring up a lookup command with pre-filled contents in the input box for the note name. Click confirm. You should see a new note get generated, with the title modified automatically applied.

### 4. (Optional) Create a shortcut for your trait

You can also assign a VSCode keybinding to create a note with your trait applied, similar to how there are keybindings for Scratch Notes and Journal Notes.

For every note trait, a command is registered called `dendron.customCommand.your-note-trait-name`.  So in this example, the command would be `dendron.customCommand.professional-connections`. To create a VSCode keybinding: 

1. Run the VSCode Command `Preferences: Open Keyboard Shortcuts (JSON)`
1. Add the following entry to the bottom of your `keybindings.json` file, with the shortcut key combo of your choice:

```json
  {
    "key": "cmd+j q",
    "command": "dendron.customCommand.your-note-trait-name"
  },
```

_Note: The name of this command may change in future versions of Dendron_

### More Examples

For more examples including how to replicate [[journal|dendron://dendron.dendron-site/dendron.topic.special-notes#journal-note]] or [[scratch note|dendron://dendron.dendron-site/dendron.topic.special-notes#scratch-note]] behavior, see the [[examples|dendron://dendron.dendron-site/dendron.topic.traits.examples]] note.