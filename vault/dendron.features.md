---
id: 4bb85c39-d8ac-48ad-a765-3f2a071f7bc9
title: Features
desc: ''
updated: 1622573830579
created: 1596320368075
nav_exclude: true
---

#repot

## Hierarchies

Dendron proposes **hierarchies** as the **human solution** to information overload. This is because there are few things as effective as a multi-level hiearchy for quickly filtering an overwhelming amount of information to something humans can work with. You can read [this blog post](https://www.kevinslin.com/notes/e1455752-b052-4212-ac6e-cc054659f2bb.html) for the extended rationale behind this.

In Dendron, you can quickly **lookup** related notes by their hierarchy. Hierarchies are simply `.` delimited filenames, similar to the hierarchies made by domain names (eg. `github.com`).

The following are a few notes that have this hierarchical naming format.

```
- cli.tar.md
- cli.tar.env.md
- cli.curl.md
- cli.dig.md
```

### Flexible structure

Whereas notes can end up in a tangled mess when you only have backlinks and folders, Dendron has a flexible and emergent series of tools to help you structure your data. [[dendron.topic.hierarchies]] function as support beams, they help enforce the foundations of your knowledge base. Dendron encourages you to be flexible with your mental models by allowing you to [[refactor|dendron.ref.commands#refactor-hierarchy]] them. And once you've got a handle on a particular topic, [[schemas|dendron.topic.schema]] can help you scale out to other domains and see patterns that you otherwise wouldn't.

## Lookup

**Lookup** is the process of finding a note by traversing its hierarchy.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-cli.gif)

> Lookups are **quick**

What's nice about using the `.` delimited format is that a note **can be** both **a file** (something that contains data) and **a folder** (something that contains other files) **at the same time**.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-folder_and_file.gif)

> You **can** be a file and have your folder **too**

Dendron uses fuzzy matching on paths so you don't have to type out the whole path.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-fuzzy.gif)

> Lazyness is the key to success

You can use **lookup** to figure out what is true!

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-bool.gif)

## Schemas

If you're paying close attention, you might have noticed some icons popup during lookup.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-closeup.jpg)

These icons indicate the **schema** associated with the note. Think of schemas as an **optional type system** for your information. They describe the hierarchy of your notes and are themselves, represented as a hierarchy.

You can create a schema by adding a YAML file with the following naming scheme `{name}.schema.yml` to your workspace.

Below is an example of a three-level hierarchy describing cli commands. You don't need to concern yourself with the details of the schema syntax just yet, just know that this schema will match the following [glob patterns](https://facelessuser.github.io/wcmatch/glob/): `cli.*`, `cli.*.cmd`, `cli.*.cmd.*`, `cli.*.env`

```yml
- id: cli
  desc: command line interface reference
  parent: root
  namespace: true
  children:
      - cmd
      - env
- id: env
  desc: variables relevant for command
- id: cmd
  desc: subcommands
  namespace: true
```

Schemas help you organize your notes by letting you know what comes next.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-suggest.gif)

The `+` sign next to the suggestion indicates that the note does not exist but is part of the schema.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-plus.jpg)

**Schema suggestions** don't show you an endless lineup of tags or folders - they only show you suggestions scoped to your specific level of the hierarchy that you are looking at.

The nice thing about these suggestions is that you can also ignore them.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-ignore.gif)

> Sometimes ~~rules~~ schemas are meant to be broken

Dendron will show you a `?` next to the result in future results but otherwise will assume that you know best.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-question.jpg)

## VS Code

Dendron is built on top of VS Code, the open-source IDE from Microsoft.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/code-banner.jpg)

Dendron runs as a plugin inside VS Code. If you use VS Code today, it means that all your current knowledge, settings and extensions will carry over into Dendron. If you don't, no sweat, because Dendron will create an optimal workspace with recommended settings and extensions when you first launch it.

## Recommended Extensions

Since Dendron runs on top of VS Code, it means that you also have access to thousands of extensions to customize Dendron exactly how you like it.

By default, Dendron will initialize your first workspace with the following extensions and features.

-   [Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
    -   [wiki links](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
    -   [tags](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes)
    -   [backlinks](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes) (think Roam)
-   [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)
    -   Quickly toggle bullet points
    -   Easily generate URLs
    -   Convert tabular data to tables
-   [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    -   [live markdown preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
    -   [math](https://shd101wyy.github.io/markdown-preview-enhanced/#/math) (KaTeX or MathJax)
    -   [sequence diagrams](https://shd101wyy.github.io/markdown-preview-enhanced/#/diagrams?id=mermaid) (mermaid)
    -   [pandoc support](https://shd101wyy.github.io/markdown-preview-enhanced/#/pandoc)
    -   [code chunks](https://shd101wyy.github.io/markdown-preview-enhanced/#/code-chunk)
    -   [presentations](https://rawgit.com/shd101wyy/markdown-preview-enhanced/master/docs/presentation-intro.html)
-   [Material Theme](https://marketplace.visualstudio.com/items?itemName=equinusocio.vsc-material-theme)
    -   beautiful colors built using the [Material design system](https://material.io/)
-   [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image)
    -   easily add images from your clipboard to your markdown files
-   [Spell Right](https://marketplace.visualstudio.com/items?itemName=ban.spellright)
    -   Spell Check

## Fast and performant

Dendron operates completely on local data and is able serve your notes to you without ever having to pull from a server. That means there's no downtime. We index your notes so [[dendron.topic.lookup]] is fast and everything (and I mean [[everything|dendron.topic.keybindings]]) has keyboard shortcuts so you never have to leave the home row.

## Local-first

Did we mention we're local first? We'll never send your notes off your system unless you want to explicitly. We also have easy guides for syncing with Github or you can always use your own service (Dropbox, Onedrive) to sync your notes wherever you want. Because you own your data.

## Extensible and open-source

Dendron is built into VS Code and can take advantage of all the extensions you've come to love. Whether you want vim keybindings, mermaid diagram support or snippet support, the extension ecosystem has you covered. And if you can't find something that you need, we also offer [[dendron.topic.hooks]] so you can build advanced workflows, right into Dendron.

## Additional Features

The following extensions also work well with Dendron but are not bundled by default. You can download them separately to unlock additional functionality.

-   [Gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 🔍
    -   Repository/File/Line history and annotations of all your files
-   [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
    -   VIM key bindings 😍
-   [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
    -   Bookmark lines within files
