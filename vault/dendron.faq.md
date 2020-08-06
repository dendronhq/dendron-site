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

## General

### What is Dendron?

Dendron is a local-first, markdown based, hierarchical note taking tool. It is meant to help you organize, manage, publish, and collaborate on knowledge bases of any size.

### How is Dendron different from X note taking tool?

Substitute X with `roam|obsidian|foam|one note|evernote|...`

Dendron is focused on helping you **organize your notes inside your knowledge base**.

All note taking tooks (try to make it) easy to get notes in. Its getting it back out again that's hard and it **becomes harder** as you get more notes.

Whether you are using notebooks tags, or backlinks, once you have more than a few hundred notes, you'll need to have some sort of structure in place (eg. naming convention, hierarchy, etc) to keep track of it. 

Dendron is a highly opinonated note taking tool that focuses on what I'm calling **structured note taking**. It provides the freedom of Roam's *every note exists everywhere philosophy* while offering **structure** through flexible hierarchies. 

While Dendron works with knowledge bases of any size, it really shines once you've accumulated a few hundred notes. I created it to handle my personal knowledge base of 20k+ markdown notes - Dendron lets me track and find any specific note in it in seconds.

### How does Dendron help me track my notes?

1. Dendron organizes and collapse all your  notes into managable chunks using [[hiearchies | dendron.topic.hierarchies ]].
2. Dendron helps you manage your hiearchies using [[schemas | dendron.topic.schema ]]
3. Dendron gets out of your way when your working with your notes during [[lookup |dendron.topic.lookup]]

You can read more about how all of this comes together in the [[ zen of dendron |dendron.zen]].

### Is Dendron Free? Will it stay free?

Dendron, the client, is free and will always remain free. It is also open source so anyone is free to make their own fork of Dendron.

That being said, I'm all in on Dendron and this is my full time gig. I want to make sure that developing Dendron remains sustainable. To that end, I plan on introducing value add server side functionality that folks may pay for. Examples of paid for features include: 
- private hosting (for folks who want to publish but not use github pages or want to add authentication)
- enterprisy things 
    - eg. on premise installations of Dendron with single sign on, active directory, and fine grained permissions
- offering private subscription based vaults (eg. think [substack](https://substack.com) but having people subscribe to vaults instead of newsletters )
- server side IFFT like functionality (eg. everytime I add an entry to airtable, add a note to Dendron)


## Working with notes

### Why markdown?

Markdown lets you write text in a simple human readable notation that is platform independent. You don't need to have microsoft word to read a markdown file and now a days, all new note taking tools support importing and displaying markdown.

For more context, you can see the original markdown declaration [here]( https://daringfireball.net/projects/markdown/) 

### Can I use Dendron with existing notes?

You can use Dendron with existing repositories of markdown notes.

Open the `Command Bar` in vscode and use the `Dendron: Change Workspace` command. It will ask you for a folder path as input.

Dendron will create a `dendron.code-workspace` file in specified directory and then open the workspace (if a workspace file already exists, it will use that). It will also create a `root.md` file in that directory if it doesn't exist (currently this is part of the internal working of dendron).

Dendron **does not** delete or overwrite any files during the **Change Workspace** operation.

### How do I save?

Dendron automatically saves when you change focus (switch tabs or applications). You can also manually save using `CMD+S` or `CTRL+S` depending on your operating system
