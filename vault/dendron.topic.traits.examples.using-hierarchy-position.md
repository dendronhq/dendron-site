---
id: dws0n0eez2i3ln5as6eur0i
title: Using Hierarchy Position
desc: ''
updated: 1655882859665
created: 1655719097688
---

## Summary

This trait demonstrates how you can use your current hierarchy position to create a new note, similar to how the [[childOfDomain addBehavior|dendron://dendron.dendron-site/dendron.topic.special-notes#defaultnodetypeaddbehavior]] works for special notes like Journal notes or scratch notes. In fact, all of the add-behaviors can be implemented with the note trait system.

This example creates a 'weekly-assignments' type of note with the following behavior:
- re-uses the current domain. For example, if you're currently viewing a note `physics.lectures.quantum-mechanics`, then the new note's name will start with `physics.assignments.*`
- Appends the year + week-year.
- Applies a template to the note

Because this note trait falls under your current domain, you can then re-use this trait to create notes to track your weekly assignments in your other hierarchies, i.e.  `computer-science`, `biology`, `english`, etc.

## Trait Definition

_weekly-assignments-trait.js_:

```javascript
module.exports = {
  OnWillCreate: {
    /**
     * This example takes the domain of the current note (the first segment of the hierarchy), 
     * adds 'assignments', followed by the year and the week number
     */
    setNameModifier(props) {
      const nameComponents = [
        props.currentNoteName.split('.')[0],
        "assignments",
        luxon.DateTime.local().year.toString(),
        luxon.DateTime.local().weekNumber.toString()
      ];

      return {
        name: nameComponents.join('.'),
        promptUserForModification: true,
      };
    },
  },
  OnCreate: {
    setTitle(props) {
      const domain = props.currentNoteName.split('.')[0];
    
      // Lodash '_' is available if needed
      return `${_.capitalize(domain)} Week ${props.currentNoteName.split(".").slice(-1)} Assignments` 

    },
    /**
     * Apply a template to each note. NOTE: If you want to use this code, you
     * will need a note file called `templates.planning-template.md` in your
     * Dendron workspace.
     */
    setTemplate: () => {
      return "templates.assignments-template";
    },
  },
};
```

