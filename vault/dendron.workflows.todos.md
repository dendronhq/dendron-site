---
id: 593206ea-5658-4874-bafd-18a138870f91
title: Todos
desc: ''
updated: 1596566533712
created: 1596566533712
stub: false
---

# Todos

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

((ref:[[dendron.tips]]#Moving lines,1:#*))

## Kevin's Workflow

This is a video of how Kevin manages todos in Dendron. It goes over the following:

- using [[journal notes | dendron.topic.special-notes]] to keep a daily todo list
- using [[snippets | dendron.topic.snippets]] to create check boxes
- using [[scratch notes | dendron.topic.special-notes]] to create nested todos in new notes
- using [search editor commands](https://code.visualstudio.com/updates/v1_47#_new-search-editor-command-arguments) to get an aggregration of all tasks in a given day

<a href="https://www.loom.com/share/88cfdc3e900a4f4eadf7b14429e01d65"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/88cfdc3e900a4f4eadf7b14429e01d65-with-play.gif"> 
</a>

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
