---
id: j5wgTcRHQZomzSHsg41O8
title: PodV2 Quickstart
desc: ''
updated: 1644005056446
created: 1638871404471
---

## Summary

The goal of this quickstart is to get you familiar with [[Pod V2|dendron://dendron.dendron-site/dendron.topic.pod-v2]].

In this quickstart, we will be using the [[Markdown Export Pod|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.markdown.export]] to export a note from Dendron Markdown to regular Markdown.

## Concepts

The following are concepts we will be referring to in this quickstart

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.concepts]]

## Enable PodV2

In order to make use of PodV2, due to it being in Preview, we need to explicitly enable it.

1. Open `dendron.yml` from the root of your workspace
1. Ensure `enableExportPodV2: true` is present:
    ```yml
    dev:
        enableExportPodV2: true
    ```
1. Run `Dendron: Reload Window`

## Export your note

### Create your first pod configuration

To run a pod, you must first create a [[Pod Configuration|dendron://dendron.dendron-site/dendron.topic.pod-v2.concepts#pod-configuration]]. This tells Dendron what and how to export. 

Let's use the [[Markdown Export Pod|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.markdown.export]].

To create a pod configuration:

1. Run the `Dendron: Export Pod V2` command
1. Select `New Export`
1. Select `MarkdownExportV2`
1. Select `Note` (Exports the currently opened note)
1. Select `clipboard` (Puts the contents of the export into your clipboard)
1. Select `Add note title from FM as h1 header` (Add note title from the frontmatter at the start of your exported note)
1. Select `Yes` (to persist the configuration, in order to run the export in the future)
1. Enter `markdown.note.clipboard`

New pod configurations are saved in `pods/custom/` at the root of your workspace. This should create `pods/custom/config.markdown.note.clipboard.yml`.

- TIP: if you want to edit your pod configuration, you can run `Dendron: Configure Export Pod V2` to open up the corresponding configuration

### Create some notes

Lets create some notes for exporting. 

1. Create a note titled `hello` using `Dendron: Note Lookup`. Add the following text:
    ```md
    Greetings world!
    ```
1. Create another note titled `garden` and add the following text.
    ```md
    Welcome to my digital garden.
    ```
1. Run `> Copy Note Ref` inside of the garden note. Then switch back to `hello` and paste the reference in a newline under `Greetings world!`. You should end up with the following text
    ```md
    Greetings world!
    ![[garden]]
    ```

### Run the export command

1. While inside the `hello` note, run the `Dendron: Export Pod V2` command
1. Select `markdown.note.clipboard`
1. You will be asked about an export scope. Select `Note`
1. Create a new note, called `pod-test` and paste the contents. It should look like the following
    ```md
    # Hello

    Greetings world!

    Welcome to my digital garden.
    ```

Some things to note:
- the frontmatter title has been converted to an `h1` title
- the [[Note Reference|dendron://dendron.dendron-site/dendron.topic.note-reference]] has been converted into inline markdown

## Updating your pod export scope

### Update your pod config
To tweak the export process, you can edit a saved pod configuration. 

1. Run the `Dendron: Configure Export Pod V2` command
1. Select `markdown.note.clipboard`
1. Uncomment `exportScope` by removing the `#` symbol in front of it
    ```yml
    # exportScope: Note
    ```

Your configuration should look like the following:
- NOTE: to get more details about what each config key controls, see [[Common Pod Properties|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties]]

```yml
# description: configuration ID
# type: string
# required: true
podId: markdown.note.clipboard

# description: optional description for the pod
# type: string
# description: TODO

# description: export scope of the pod.
# type: string
# NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
exportScope: Note

# description: type of pod
# type: string
# required: true
podType: MarkdownExportV2

# description: How to convert the wikilinks
# type: boolean
wikiLinkToURL: false

# description: export destination. Specify either a file path or 'clipboard' to export to your clipboard
# type: string
# required: true
destination: clipboard

# description: undefined
# type: boolean
convertTagNotesToLinks: false

# description: undefined
# type: boolean
convertUserNotesToLinks: false

# description: undefined
# type: boolean
addFrontmatterTitle: true
```

### Export your note again
1. Switch back to `hello` note 
1. Run the `Dendron: Export Pod V2` command
1. Select `markdown.note.clipboard`

Note that you were not prompted for a scope since you've already specified that in your config. 

## Add a keyboard shortcut

Currently, exporting your notes is a two step process that consists of:
1. Run the `Dendron: Export Pod V2` command
1. Select `markdown.note.clipboard`

We can improve this process by creating [[Keybindings|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#keybindings]] for your export pod. 

1. Run `Open Keyboard Shortcuts (JSON)`
1. Add the following keybinding
    ```json
    {
        "key": "ctrl+k m",
        "command": "dendron.exportPodv2",
        "args": {"podId": "markdown.note.clipboard"}
    },
    ````

Now you can run export using the keybinding instead.

1. Open up the `hello` note
1. Type `ctrl+k m`

## Congratulations!

You've setup your first pod configuration and exported it to your clipboard!

### Takeaways
- you can create new pod configurations using `Dendron: Export PodV2`
- you can configure a pod configuration using `Dendron: Configure Export Pod V2`
- by default, when creating a pod configuration, dendron will prompt you for a scope - you can explicitly set a scope in the pod config to remove the prompt
- you can create a keybinding to trigger your pod configuration

