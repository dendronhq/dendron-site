---
id: j5wgTcRHQZomzSHsg41O8
title: Quickstart
desc: ''
updated: 1643099901005
created: 1638871404471
---

## Summary

To run a pod, you must first create a pod configuration, which specifies things like the type of pod, what data it should act on, connection information, and data translation behavior. After creating a configuration, you may optionally choose to persist that configuration, or to run it immediately without saving it. If you persist the configuration, then you can easily re-run the pod later without having to set the configuration settings again.

## Enable PodV2

In order to make use of PodV2, due to it being in Preview, we need to explicitly enable it.

1. Open `dendron.yml` from the root of your workspace
1. Ensure `enableExportPodV2: true` is present:

```yml
dev:
    enableExportPodV2: true
```

## Creating a Pod Configuration

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

New pod configurations are saved in `pods/custom/` at the root of your workspace. This should create `pods/custom/config.markdown.note.clipboard.yml`, and open it in your editor.

### Editing a Saved Pod Configuration

To edit a saved pod configuration, if not currently opened in your editor:

1. Run the `Dendron: Configure Export Pod V2` command
1. Select `markdown.note.clipboard`

With the configuration opened, let's further customize our export pod.

- Uncomment `exportScope`, as so:

```yml
exportScope: Note
```

The contents should look as seen here:

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

## Understanding the Pod Configuration

![[dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties:#keybindings]]

### Getting User Input for a Property at Runtime

For selective properties, you can also choose to not include a property in the configuration if you would like to set that property during the pod runtime. 

For example, say that you want to save a configuration to export to your personal Google Docs, but you want to be able to choose the scope during each export. If you delete the `exportScope` property in the pod configuration, then you will be prompted to specify the scope when you run the pod.  However, you won't have to specify the other properties that are in the config, such as the connection details to your Google account.

## Running a Saved Pod Configuration

To run a saved pod configuration, use the `Dendron: Export Pod V2`.  In the QuickPick, select the id of your configuration to run it.

1. Open a note you'd like to copy to the clipboard
1. Run the `Dendron: Export Pod V2` command
1. Select `markdown.note.clipboard`

The markdown note should now be copied to your clipboard!

### Example

If your note contained the following:

```markdown
---
id: 50bdx4IdkgbytnEWUCxX9
title: Learning all the things
desc: ''
updated: 1643927217937
created: 1643925235105
---

My notes on taking notes.

## Note taking vs. doodling

During lectures, I take notes or I can't stop drawing stick figures.

### Combine powers

I've since learned that I can illustrate the lectures with drawings, making life easier.
```

Copied to the clipboard, it looks like:

```markdown
# Learning all the things

My notes on taking notes.

## Note taking vs. doodling

During lectures, I take notes or I can't stop drawing stick figures.

### Combine powers

I've since learned that I can illustrate the lectures with drawings, making life easier.
```

## Congratulations!

You have setup and used your first export pod to copy markdown to the clipboard!
