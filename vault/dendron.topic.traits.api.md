---
id: oOIEFJc6DTgS71mmh89WQ
title: API
desc: ''
updated: 1639157690633
created: 1638844803983
---

This contains API documentation for trait behavior. 

![[dendron://dendron.dendron-site/tags.stage.germ]]

With note traits, you can optionally override behavior for notes during their creation or modification by implementing callback functionality as detailed below. All behavior is optional - if you do not want to override a certain behavior, you can simply delete that function property from the Javascript trait definition file.

## OnWillCreate

This contains properties that are functions that will run as a note is being created. Functions in this category listed below.

### setNameModifier

#### Arguments

See [[Creation Properties|dendron://dendron.dendron-site/dendron.topic.traits.api#creation-properties]]

#### What Needs to be Returned
A JSON Object with the following properties:
- name: a string with the name of the note which is about to be created
- promptUserForModfication: a boolean value. If true, before the note is created, then a lookup control will appear, allowing the user to further modify the note name. The lookup will be pre-filled with the contents of the `name` property. If false, then no lookup control will appear and the note will be created with the name set by the `name` property.

> ❗️ Note: Dendron may further format the note name to make sure it is compatible. Spaces will be replaced with `-` and the note name will be converted to lower case.

## OnCreate

### setTitle

Specify behavior for altering the title of the note when it is created.

#### Arguments

See [[Creation Properties|dendron://dendron.dendron-site/dendron.topic.traits.api#creation-properties]]

#### What Needs to be Returned

A string containing the modified title.


## Example

This shows an example implementation of a note trait. Note, this is just the default template that is applied when you create a new note trait.

```javascript
module.exports = {
  /**
   * Specify behavior to modify the name of the note. If
   * promptUserForModification is true, the modified name will appear in a
   * lookup control to allow the user to further edit the note name before
   * confirming.
   */
  OnWillCreate: {
    setNameModifier(props) {
      return {
        name: [props.currentNoteName, props.selectedText, props.clipboard].join(','),
        promptUserForModification: true
      };
    }
  },
  /**
   * Specify behavior for altering the title of the note when it is created.
   */
  OnCreate: {
    setTitle(props) {
      return [props.currentNoteName, props.selectedText, props.clipboard].join(',');
    }
  }
}
```

## Creation Properties

- currentNoteName - for `setNameModifier()`, this contains the name of the Dendron note that is currently in focus in the editor. If no note is in focus, then this returns `undefined`.  For `setTitle()`, this contains the note name returned from `setNoteModifier()`.
- selectedText - contains the text that has been highlighted in the current editor of a Dendron Note. If no text is highlighted, or if the highlighted text is not in a Dendron note, this returns `undefined`.
- clipboard - contains any text currently on the clipboard, or `undefined` if there is no text.
