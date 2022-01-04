---
id: c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50
title: Concepts
desc: ''
updated: 1640804575093
created: 1595169512265
nav_order: 5.01
---
Below are some concepts that are helpful to know when using Dendron. Note that features with 🚧 are still under active development and might not be fully implemented.

### Markdown

Dendron supports Markdown, a popular markup syntax that is like HTML but 1000x simpler. If you are new to Markdown, you can read about the syntax [here](https://docs.gitbook.com/editing-content/markdown).

### Frontmatter

Frontmatter is a convenient way of adding extra information to your documents like a shorthand title or longer description (think any extra information you can use to describe a note). This type of information is generally called metadata and the structure used is called [YAML](https://yaml.org/). You can add it to the front of your Markdown file and it won't show up in the preview. It was first introduced by [Jekyll](https://jekyllrb.com/docs/front-matter/). 

You can read more about the frontmatter used in Dendron [[here|dendron.topic.frontmatter]]

### Workspace

![[dendron.topic.workspace#summary,1]]

### Vaults

![[dendron.topic.vaults#summary,1:#*]]

### Hierarchies

![[Why hierarchies?|dendron.faq#why-hierarchies,1:#*]]

![[dendron.topic.hierarchies#summary,1:#concepts]]

You can read more about hierarchies [[here|dendron.topic.hierarchies]].

### Domain

A domain is the root of a hierarchy. In the example below, `project1` would be the domain.

```
.
├── project1.md
├── project1.designs.md
├── project1.designs.promotion.md
├── project1.paperwork.md
├── project1.paperwork.legal.md
├── project1.tasks.md
├── project1.tasks.task1.md
└── project1.tasks.task2.md
```

### Templates

![[dendron.topic.templates#summary,1:#*]]

### Schema

![[dendron.topic.schema#summary,1:#*]]

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

### Stubs

Stubs are notes that don't exist but that you might want to create. They will show up as suggestions in lookup results.
There are two reasons why these suggested notes might show up: 

- they are the uncreated parent of a note deeper in the hierarchy (eg. `foo.bar` might be a stub for `foo.bar.foobar`)
- they are possible notes according to the schema

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-plus.jpg)

> The `+` sign next to the suggestion indicates that the note is a stub and does not exist 

### Pods

[[Pods|dendron.topic.pod]] are the mechanisms Dendron uses to import and export notes. Dendron has a different pod depending on where you are getting and publishing your data to. 

### Command Palette

The command palette is native to `VS Code`. You can use it to run Dendron commands, which will all be prefixed with `Dendron:`. You can use the following shortcut to open the command palette.

- <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+Shift+P`
- <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `Cmd+Shift+P`
- <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+Shift+P`

### Lookup Bar

The lookup bar is how you interact with notes inside of Dendron. Use it to create, find, and delete notes. You can type `> Dendron: Lookup` in the `Command Palette` or use the `Ctrl+L` shortcut. 

- <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+L`
- <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `Cmd+L`
- <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+L`

![](assets/2020-07-07-20-14-57.png)


## Misc

### Glob Pattern

Glob patterns are a way of pattern matching characters. You can test and see more example of glob patterns [here](https://facelessuser.github.io/wcmatch/glob/).

### Kebab Case

![[dendron.guides.best-practices#naming,1:#*]]
