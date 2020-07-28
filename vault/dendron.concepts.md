---
id: c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50
title: Concepts
desc: ''
updated: 1595169512265
created: 1595169512265
nav_order: 3
---
## Concepts

Below are some concepts that are helpful to know when using Dendron. Note that features with 🚧 are still under active development and might not be fully implemented.

### Markdown

Dendron supports markdown, a popular markup syntax that is like HTML but 1000x simpler. If you are new to markdown, you can read about the syntax [here](https://docs.gitbook.com/editing-content/markdown).

### Frontmatter

Frontmatter is [YAML](https://yaml.org/) that you can add to the front of your markdown file. It was first introduced by [jekyll](https://jekyllrb.com/docs/front-matter/) and is a convenient way of adding metadata to your plaintext documents. 

You can read more about the frontmatter used in Dendron [[here |dendron.topic.frontmatter]]

### Workspace
In Dendron, your **workspace** is the root of where all your files are located. It's definde by the `dendron.rootDir` property and created when you first run `Dendron: Initialize Workspace`

### Vaults 🚧
Your workspace is made up of **vaults**. You can think of a vault like  a git repository. By default, Dendron creates a *vault.main* folder when you first initialize a **workspace**. All your notes are stored on a per vault basis.

```
.
└── workspace
    ├── vault.main
    │   ├── foo.md
    │   ├── foo.one.md
    │   └── foo.two.md
    └── vault.secret (hypothetical)
        ├── secret.one.md
        └── secret.two.md
```

By default, when you look for notes in dendron, it will search over all vaults.

### Hierarchies

Within a vault, your notes are stored **hierarchically** as `.` delimited markdown files. 

Below is a hypothetical hierarchy for a file tree:

```
.
└── project1/
    ├── project1/designs/
    │   └── project1/designs/promotion.png
    ├── project1/paperwork/
    │   └── project1/paperwork/legal.md
    └── project1/tasks/
        ├── project1/tasks/task1.md
        └── project1/tasks/task2.md
```


The same hiearchy in Dendron would look like the following:

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

You can read more about hierarchies [[here |dendron.topic.hierarchies]]

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

### Schema  

As you end up creating more notes, it can be hard to keep track of it all. This is why Dendron has **schemas** to help you manage your notes. Think of schemas as an **optional type system** for your information. They describe the hierarchy of your notes and are themselves, represented as a hierarchy. 

You can create a schema by adding a YAML file with the following naming scheme `{name}.schema.yml` to your workspace. 

Below is an example of a three-level hierarchy describing cli commands. You don't need to concern yourself with the details of the schema syntax just yet, just know that this schema will match the following [glob patterns](https://facelessuser.github.io/wcmatch/glob/): `cli.*`, `cli.*.cmd`, `cli.*.cmd.*`, `cli.*.env`

```yml
- id: cli
  desc: command line interface reference
  parent: root
  data: 
    namespace: true
  children:
    - cmd
    - env
- id: env
  desc: variables relevant for command
- id: cmd
  desc: subcommands 
  data: 
    namespace: true
```

### Command Bar

The command bar is native to `vscode`. You can use it to run dendron commands, which will all be prefixed with `Dendron:`. You can use the following shortcut to open the command bar. 

- <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+SHIFT+P`
- <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘+SHIFT+P`
- <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+SHIFT+P`


### Lookup Bar

The lookup bar is how you interact with notes inside of Dendron. Use it to create, find, and delete notes. You can type `> Dendron: Lookup` in the `Command Bar` or use the `CTRL+L` shortcut. 

- <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `CTRL+L`
- <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `CMD+L`
- <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `CTRL+L`

![](assets/2020-07-07-20-14-57.png)
