---
id: a6c03f9b-8959-4d67-8394-4d204ab69bfe
title: Troubleshooting
desc: ''
updated: 1595952505025
created: 1595952505025
nav_order: 9
---

# Troubleshooting

## General

90% of all issues can be solved with one of the following steps:

1. Reload your window. This is the equivalent of restarting your computer. 
    - `> Developer: Reload Window`


The most common reason why something isn't working is because a necessary extension isn't installed. Make sure you have the necessary extensions by checking searching for `@enabled dendron` inside the extensions pane and making sure that you have the latest version of all dendron extensions.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble-extensions.jpg)


## Markdown Preview

### Why can't I click the checkbox?

It could be that you are using the VSCode default markdown instead of Dendron's Markdown Preview. 

They both have identical icons and its currently not possible to disable the builtin preview (we are looking into fixing this [here](https://github.com/dendronhq/dendron/issues/42)).

Meanwhile, you can open Dendron's markdown preview by clicking the preview button on the left of the menu bar or by using the `> Markdown Preview Enhanced: Open Preview to the Side` command

![Markdown preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble-md.png)

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