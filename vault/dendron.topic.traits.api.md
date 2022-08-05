---
id: oOIEFJc6DTgS71mmh89WQ
title: API
desc: 'This contains API documentation for trait behavior'
updated: 1659714599999
created: 1638844803983
tags: [stage.germ]
---

![[dendron://dendron.dendron-site/tags.stage.germ#summary,1]]

{{fm.desc}}.

With note traits, you can optionally override behavior for notes during their creation or modification by implementing callback functionality as detailed below. All behavior is optional - if you do not want to override a certain behavior, you can simply delete that function property from the Javascript trait definition file.

## OnWillCreate

This contains properties that are functions that will run as a note is being created. Functions in this category listed below.

### setNameModifier

#### Arguments

See [[Creation Properties|dendron://dendron.dendron-site/dendron.topic.traits.api#creation-properties]]

#### Return
A JSON Object with the following properties:
- name: a string with the name of the note which is about to be created
- promptUserForModfication: a boolean value. If true, before the note is created, then a lookup control will appear, allowing the user to further modify the note name. The lookup will be pre-filled with the contents of the `name` property. If false, then no lookup control will appear and the note will be created with the name set by the `name` property.

> ❗️ Note: Dendron may further format the note name to make sure it is compatible. Spaces will be replaced with `-` and the note name will be converted to lower case.

## OnCreate

### setTitle

Specify behavior for altering the title of the note when it is created.

#### Arguments

See [[Creation Properties|dendron://dendron.dendron-site/dendron.topic.traits.api#creation-properties]]

#### Return

A string containing the modified title.

### setTemplate

When implemented, a template will be applied to the note being created.

#### Arguments

_None_

#### Return

The name of the note to use as the template. You can use a [[xvault link|dendron.topic.links#cross-vault-links]] to specify the vault in a multi-vault setting, otherwise, this will use the same vault as the current open note. 

Example:
```js
  OnCreate: {
		...
    setTemplate: () => {
      return "template.msg";
    },
  },
```

## Creation Properties

- currentNoteName - for `setNameModifier()`, this contains the name of the Dendron note that is currently in focus in the editor. If no note is in focus, then this returns `undefined`.  For `setTitle()`, this contains the note name returned from `setNoteModifier()`.
- selectedText - contains the text that has been highlighted in the current editor of a Dendron Note. If no text is highlighted, or if the highlighted text is not in a Dendron note, this returns `undefined`.
- clipboard - contains any text currently on the clipboard, or `undefined` if there is no text.

## Included Modules

[Lodash](https://lodash.com/docs) and [Luxon](https://moment.github.io/luxon/api-docs/index.html) modules are accessible in the code you write for your traits. There is no need to include any import statements.

## Examples

For example Javascript implementations of Traits, see the [[examples|dendron://dendron.dendron-site/dendron.topic.traits.examples]] hierarchy.