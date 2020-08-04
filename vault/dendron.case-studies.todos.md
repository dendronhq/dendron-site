---
id: 593206ea-5658-4874-bafd-18a138870f91
title: Todos
desc: ''
updated: 1596566533712
created: 1596566533712
---

# Todos

This is a video of managing todos in Dendron. It goes over the following:
- using [[journal notes | dendron.topic.special-notes]] to keep a daily todo list
- using [[snippets | dendron.topic.snippets]] to create check boxes
- using [[scratch notes | dendron.topic.special-notes]] to create nested todos in new notes
- using [search editor commands](https://code.visualstudio.com/updates/v1_47#_new-search-editor-command-arguments) to get an aggregration of all my tasks in a given day

<a href="https://www.loom.com/share/88cfdc3e900a4f4eadf7b14429e01d65"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/88cfdc3e900a4f4eadf7b14429e01d65-with-play.gif"> 
</a>

## Resources

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