---
id: OGhGvTM9GlW0jXjXDLiBl
title: >-
    20 - Your future self will thank you: Building your personal documentation 
desc: 'From the ReadME Project GitHub Blog: Monica explains how to build a second brain of knowledge you'll use over and over.'
updated: 1644861410288
created: 1644856540588
---

- [Your future self will thank you: Building your personal documentation ](https://github.com/readme/guides/private-documentation)

> Monica Powell explains how to build a second brain of knowledge you'll use over and over.

## PKM and TIL

_Personal Knowledge Management_ (PKM) and ["Second Brains"](https://fortelabs.co/blog/basboverview/) help us achieve the _Don't Repeat Yourself_ (DRY) mantra. Monica talks about building a note taking habit, and mentions the TIL format as an example:

> The "Today I Learned" (TIL) format of summarizing what you've learned in a few short sentences daily can be particularly helpful for folks who are committed to consistently taking notes in that particular format.

This format can be seen in [Josh Branchaud's `til` repository](https://github.com/jbranchaud/til/).

TIL can be a way to create daily notes outside of [[Daily Journal Notes|dendron.topic.daily-journal-note]], or even as an extension of them. Though Josh has his TIL published publicly, it could be helpful for your mind even if the notes stay as a private log of daily learnings.

## Optimized for search

When it comes to optimizing notes for searchability, Monica talked about the importance of:

- Ease of search, including tagged and untagged notes
- Ease in creation of new notes
- Ability to always refactor, expand, and re-organize notes later

The Dendron approach to these:

- Ease in creation (with or without keybinding shortcuts)
    - [[Lookup: Creating Notes|dendron.topic.lookup.create]]
    - [[Daily Journal Notes|dendron.topic.daily-journal-note]]
    - [[Task Notes|dendron.topic.tasks]]
    - [[Special Notes|dendron.topic.special-notes]] (scratch notes, etc.)
    - [[Templates|dendron.topic.templates]]
    - [[Making Your First Schema|dendron.topic.schema.tutorial.first-schema]]
- Ease of search
    - [[Lookup: Find|dendron.topic.lookup.find]]
    - [[VS Code Search|dendron.topic.search]]
    - [[Tags|dendron.topic.tags]]
    - [[Hierarchies|dendron.topic.hierarchies]]
- Organizing and refactoring
    - [[Amoeba workflow|dendron.guides.workflows.amoeba]]
    - [[Refactoring|dendron.topic.refactoring]]

## External docs vs. recreating the wheel

Monica mentions how referencing out to external, official documentation for step-by-step guides can help save time, brain power, and your notes from becoming outdated. A fun extension to this, with Dendron, is in cases where the external notes have a Markdown source or are already a Dendron vault.

For example, instead of linking out to reference the Dendron documentation, users can follow the [[Seed Bank Quickstart|dendron.topic.seed-bank.quickstart]] to quickly add all of the Dendron wiki documentation to their workspace. This makes it easy to locally lookup official documentation, and even remix it with your private/local notes by using [[Note References|dendron.topic.note-reference]] and other features.

For Markdown notes in general, the [[Markdown Import Pod|dendron.topic.pod.builtin.markdown.import]] could be used to import projects like the [Josh Branchaud's `til` repository](https://github.com/jbranchaud/til/). Now you've augmented your knowledge with the knowledge from others!

## Second "Command Line" Brain

The last piece touched on was about improving your CLI experience so that you aren't needing to memorize long commands, or retype commands you have already done in the past. For this, [Monica uses ZSH Autosuggestions](https://aboutmonica.com/blog/setting-up-zsh-with-autosuggestions/) to lean on the commands her past self has already learned.

Another CLI level-up could be [TLDR](https://tldr.sh/), a community-managed tool that helps explain the most common usages of other CLI tools. Dendron happens to have the [TLDR docs as a seed vault](https://github.com/kevinslin/seed-tldr), too, so feel free to add that to your workspace for simple lookup!
