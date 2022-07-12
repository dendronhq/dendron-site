---
id: 5c213aa6-e4ba-49e8-85c5-1bdcb33ce202
title: Special Notes
desc: ''
updated: 1657075105247
created: 1595004457029
stub: false
---

Dendron has built-in support for a variety of special note formats. These notes can be created using regular lookup - these commands provide convenient shortcuts for frequently used notes.

## Journal Note

A journal note is a self contained note that is meant to track something over time. Examples of journals include recording **workout sessions**, making **meeting notes**, and keeping a **mood journal**.

To create a journal note, trigger a lookup and then click on the calendar icon, or use the `Ctrl+Shift+J`/`Cmd+Shift+J` shortcut (depending on operating system).

<a href="https://www.loom.com/share/3c3ddc1dc63547cea8bf186bec31f71b"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/3c3ddc1dc63547cea8bf186bec31f71b-with-play.gif"> </a>

By default, Dendron will create the journal note with the following hierarchy `{domain}.journal.{y.MM.dd}`. `{domain}` is the **domain** of the current active note when you execute `New Journal Note`.

A reference for date formatting tokens can be found [here](https://moment.github.io/luxon/#/formatting)

## Scratch Note

A scratch note is a self contained note that is meant to be used as scratchpad. Use it for thoughts or when you want to expand on a bullet point. Scratch notes are created in the `scratch` domain and have the following format: `scratch.{y.MM.dd.HHmmss}`. To create a scratch note, trigger a lookup and then click the "create scratch note" icon, or use the keybind `Ctrl+Shift+S`/`Cmd+Shift+S` (depending on operating system).

<a href="https://www.loom.com/share/2fd3042119124df8bb4592d8ffe6d708"> 
<img style="" src="https://cdn.loom.com/sessions/thumbnails/2fd3042119124df8bb4592d8ffe6d708-with-play.gif"> </a>

## Meeting Note

![[dendron://dendron.dendron-site/dendron.topic.special-notes.meeting-note]]

## Proxy Notes

- status: #stage.seed

A [[Proxy Note|dendron://dendron.docs/rfc.38-links-to-non-note-files#proxy-notes]] is a note that contain a special property in their
frontmatter to specify that they are a proxy for a specific uri.

By adding a uri property to the frontmatter, executing [[dendron.ref.commands.goto]] over the link will open the uri instead of navigating to the note.  

### Additional Features

Enhance your meeting notes with additional capabilities provided by Dendron:

- To keep track of attendees and any follow up tasks they may have, you can create notes for each user and then add [[user tags|dendron://dendron.dendron-site/dendron.topic.users#user-tags]] to each follow up task. Then, from the user note, you can quickly search the backlinks panel to see which tasks they have assigned to them.
- For any follow up tasks that require more information, you can try out [[task notes|dendron://dendron.dendron-site/dendron.ref.commands#create-task-note]] to create a note with more details and track task completion.

## Configuration

To change the keybindings used to create special notes, you can [[define custom shortcuts|dendron.topic.lookup.keybindings]] in `keybindings.json` that will [[modify the behavior of the `Lookup` command|dendron.topic.lookup.modifiers]].

All special notes support the following configuration options

-   NodeType has the value of `Journal` or `Scratch`

### default{NodeType}Name

Determines the node name.

Defaults:

-   Journal: `journal`
-   Scratch: `scratch`

### default{NodeType}DateFormat

Determines the date format.

Defaults:

-   Journal: `Y-MM-DD`
-   Scratch: `Y-MM-DD-HHmmss`

### default{NodeType}AddBehavior

Determines how note is added in relation to current hierarchy. Say you have the following schema:

```yml
schema:
    - id: pro
      parent: root
      namespace: true
```

Possible values:

-   childOfDomain
    -   note is added as child of the [domain](https://dendron.so/notes/c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50.html#domain) of the current hierarchy
    -   eg:
        -   current open note: `pro.dendron.demo.md`
        -   path of new journal note: `pro.journal.2020-08-03.md`
-   childOfDomainNamespace
    -   note is added as child of the namespace of the current domain if it has a namespace. otherwise behaves the same as `childOfDomain`
    -   eg:
        -   current open note: `pro.dendron.demo.md`
        -   path of new journal note: `pro.dendron.journal.2020-08-03.md`
-   childOfCurrent
    -   note is added as a child of the current open note
        -   current open note: `pro.dendron.demo.md`
        -   path of new journal note: `pro.dendron.demo.journal.2020-08-03.md`
-   asOwnDomain
    -   note is created under the domain specified by the `dendron.default{NodeType}Name` config value
    -   eg:
        -   current open note: `pro.dendron.demo.md`
        -   config: `dendron.defaultJournalNoteName: "journal"`
        -   path of new journal note: `journal.2020-08-03.md`

Defaults:

-   Journal: `childOfDomain`
-   Scratch: `asOwnDomain`
