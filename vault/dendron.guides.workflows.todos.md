---
id: 593206ea-5658-4874-bafd-18a138870f91
title: Todos
desc: ''
updated: 1616692663207
created: 1596566533712
stub: false
---
## Snippets

The default dendron workspace comes with the `to` snippet that expands to `- [ ]`. You can use this to quickly create bulleted checkboxes. 

## Interactive Checkboxes

Markdown preview renders an empty checkbox for any line that starts with `- [ ]`. A checked checkbox is rendered for lines starting with `- [x]`. Clicking a checkbox changes its state in the markdown file.

## General Workflows

When working with todos sometimes you need more states than `unfinished|finished`. Below are three different workflows to delineate todo state. 

### Inside the Checkbox

- put state in checkbox
- note that custom checkbox states such as `[w]` are displayed as plain text in markdown previews. Todo lists of this type look best in the editor.

```
- [ ] : not started
- [w] : work in progress
- [x] : done
- [?] : feedback
- [>] : postponed
```

### Kanban Based

- put state in a header

```
# wip
- [ ] foo

# pending
- [ ] bar

# done
- [ ] baz
```

### Tag Based

- put tags in todo items

```
- [ ] foo #wip
- [ ] bar #feedback
- [ ] baz
```

## Reordering tasks

![[dendron.guides.tips#moving-lines,1:#*]]

## Kevin's Workflow

This is a video of how Kevin manages todos in Dendron. It goes over the following:

- using [[journal notes|dendron.topic.special-notes]] to keep a daily todo list
- using [[snippets|dendron.topic.snippets]] to create check boxes
- using [[scratch notes|dendron.topic.special-notes]] to create nested todos in new notes
- using [search editor commands](https://code.visualstudio.com/updates/v1_47#_new-search-editor-command-arguments) to get an aggregration of all tasks in a given day

<a href="https://www.loom.com/share/88cfdc3e900a4f4eadf7b14429e01d65"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/88cfdc3e900a4f4eadf7b14429e01d65-with-play.gif"> 
</a>

#### Example of a daily journal note

- fname: `daily.journal.2021.03.5`

```md
---
id: f06dcdd8-9880-46c5-8e02-ca4d515f59b9
title: '2021-03-25'
desc: ''
updated: 1616682579084
created: 1616647136455
---

## Tasks
- [ ] respond to missed discussions
- [ ] file tasks from yesterday
- [ ] file discussions
- [ ] github issues
- [ ] github pull request
- [ ] update weekly release
- [ ] commit all notes for the day

### New
<!-- Any new tasks that come up during the day go here -->

### Current
<!-- Long running tasks I'm focused on -->

### Today
<!-- This is usually created the day before -->

<!-- A lot of bullets are scratch notes that have additional context inside the note -->
- [[bob issue|scratch.2021.03.24.073330.tristan-issue]]
- [[weekly bug bash|scratch.2021.03.24.072120.bugs]]
- [[weekly performance improvements|scratch.2021.03.24.074210.perf]]
- Performance improvements
- Better Onboarding UX
- Custom Markdown Preview

### Blocked
<!-- Things that I run into blockers with-->

### Pending 
<!-- Features that are completed and pending deployment -->

### Done for Today
<!-- Features that are not completed but will take multiple days to complete -->

### Done
<!-- Stuff that I can leave here -->
```

### Resources

Below are some of the settings used in the above video

- non-default settings

```json
"settings": {
    "dendron.defaultJournalDateFormat": "Y.MM.DD",
    "dendron.defaultScratchDateFormat": "Y.MM.DD-HHmmss",
}
```

- snippets used

```json
  "todo": {
    "prefix": "to",
    "scope": "markdown",
    "body": "- [ ] ",
    "description": "todo box"
  }
```

- search editor command used

```json
  {
    "key": "ctrl+s t",
    "command": "search.action.openNewEditor",
    "args": {
      "query": "## Tasks",
      "triggerSearch": false,
      "focusResults": false,
      "includes": "*.journal.*"
    }
  }
```

## Other Resources

- [Markdown Checkbox Extension](https://marketplace.visualstudio.com/items?itemName=PKief.markdown-checkbox): automatically check todos

