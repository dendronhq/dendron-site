---
id: 9MZBqhrijEM4QpZRa5t08
title: Linking Notes
desc: Linking Notes
updated: 1625573468621
created: 1625563999532
nav_order: 2
---

### Links

Dendron supports links between your notes, which can help you organically connect your thoughts and build up a powerful and **personal** knowledge graph.

> 🌱 To create a link, just start typing [[ and Dendron will show you a list of notes in your workspace that you can link to. Try it in the editor pane now.

Example Text: `[[dendron.tutorial]]`
Resulting Link: [[dendron.tutorial]]

To navigate to the note in the link, you can just click on the link in the preview pane. In the editor pane, you can move the cursor into the link and hit `Ctrl+Enter / Cmd+Enter`.

You can switch back to the previous note by pressing `Ctrl+Tab / Cmd+Tab`

#### Backlinks

Take a look at the backlinks panel on the bottom left section of your sidebar. The backlinks panel shows you all notes that have linked to the current note. This is useful for helping to establish context.

![Backlinks](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-backlinks.png)

### Explore Your Knowledge Graph

> 🌱 To get a visual representation of your notes, use the `Dendron: Show Note Graph` command.

You can explore the hierarchical organization of your notes and how your notes are linked together. We're continually working to improve this feature so keep on the lookout for new capabilities in the graph view in the future!

![Graph View](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-graph-view.png)

### Next Steps

- Tutorial Step 4: [[Rich Formatting|dendron.tutorial.rich-formatting]]
- Try out some additional features of links:
  - Create a note directly from a link - place your cursor inside this link `[[recipes.new-recipes-to-try]]`, hit `Ctrl+Enter/Cmd+Enter`.
  - Add an alias to a link to change how it shows in the preview. Example: [[My Alias|tutorial]]
  - Relative Links - Link to a specific section of a page with a `#` suffix. Example: [[Additional Link Features|tutorial.3-links-and-graphs#additional-link-features]]
  - [[Note References|dendron.topic.references]] - Add a section from another note with its content embedded into the current note.
