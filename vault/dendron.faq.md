---
id: 683740e3-70ce-4a47-a1f4-1f140e80b558
title: Faq
desc: ''
updated: 1595952505025
created: 1595952505025
nav_order: 6
---
# FAQ

All the questions we thought you might ask. 

## Why use Dendron?

### I'm overwhelmed with the number of options. Would you mind give me a quick sense of how Dendron is going to distinguish itself from other note taking apps?

Being overwhelmed is exactly the problem dendron tries to solve. The problem with **every** note taking application, newcomers included, is that the more notes you add, the harder it becomes to find any of it. 

The only way to really scale a large corpus of notes is to apply some sort of structure on top of it - this is true if you are using notebooks like in one note or graphs as in roam. 

Dendron not only supports the features of the aforementioned tools but is built from the ground up to help you structure and organize your notes. This means that whether you have a few notes to a few thousand notes, you will always be able to find the notes that matter to you. 

### How does Dendron help me find my notes?

1. Dendron organizes and collapse all your  notes into managable chunks using [[hiearchies | dendron.topic.hierarchies ]].
2. Dendron helps you manage your hiearchies using [[schemas | dendron.topic.schema ]]
3. Dendron gets out of your way when your working with your notes during [[lookup |dendron.topic.lookup]]

You can read more about how all of this comes together in the [[ zen of dendron |dendron.zen]].

## Working with notes

### Can I use Dendron with existing notes?

You can use Dendron with existing repositories of markdown notes.

Open the `Command Bar` in vscode and use the `Dendron: Change Workspace` command. It will ask you for a folder path as input.

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### How do I save?
- Dendron automatically saves when you change focus (switch tabs or applications). You can also manually save using `CMD+S` or `CTRL+S` depending on your operating system

## Misc

### Why does Dendron create `root.*` files in my vault?
- Dendron currently creates a `root.md` file and a `root.schema.yml` file where you initialize your vault. these files will be used in the future to automatically generate an index of everything in your vault. you may safely ignore them for now

### What is the extra text that is created at the beginning of each note?
- currently, you might see the following text added to the top of your note. This is additional metadata that Dendron uses to manage your files. 

```yml
---
id: 4407f75d-7334-47a5-9f19-18b458618136
title: dendron.lookup.hello
desc: ''
updated: 1594078624566
created: 1594078624566
data: {}
custom: {}
fname: dendron.lookup.hello
parent: null
children: []
---
```

### Why are there two `book` icons that do markdown preview?

We use an extension to do markdown preview. VSCode comes with its default markdown preview extension and its not currently possible to hide the button. You can re-open and upvote the issue [here](https://github.com/microsoft/vscode/issues/86994) if you want to fix this.

### How are hierarchies created?

Hierarchies today are created automatically when dendron crawls your folder for `.` delimited file names and custom schema.yml files.
