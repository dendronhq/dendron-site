---
id: 9MZBqhrijEM4QpZRa5t08
title: Linking Notes
desc: Linking Notes
updated: 1639620593242
created: 1625563999532
nav_order: 2
---

## Links

Dendron helps you create links between notes. These links help you organically discover relationships and build out your knowledge graph.

> 🌱 **ACTION:** To create a link, start typing `[[` and Dendron will show you a list of notes in your workspace that you can link to. Let's go with `[[recipes.vegetarian]]`. Try it in the editor view, now.

- Example Text: `[[recipes.vegetarian]]`
- Resulting Link: [[recipes.vegetarian]]

To navigate to the note in the link, click the link in the preview view. In the editor pane, move the cursor into the link and hit `Ctrl+Enter`. You might wonder what will do if the note doesn't exist: it will create the note!

You can switch back to the previous note with the tab switching shortcut: `Ctrl+Tab` on most systems.

> 💡 **TIP:** When you create a wikilink, Dendron automatically registers the link as a **backlink** for the destination note. These are what appear in the [[Backlinks Pane|dendron.tutorial.user-interface#7-backlinks-pane]]. For more information on backlinks:
> - [[Links: Backlinks|dendron://dendron.dendron-site/dendron.topic.links#backlinks]]
> - [[Workbench: Backlinks Panel|dendron://dendron.dendron-site/dendron.topic.workbench#backlinks-view]]

### Link to headers

> 🌱 **ACTION:** You need headers to link to for this, so add an `## Ingredients` section to [[recipes.italian.desserts.tiramisu]]. Try it in the editor view, now.

If wanting to link to a specific header within a note, add the header name to the end.

- Example: `[[Tiramisu Ingredients|recipes.italian.desserts.tiramisu#ingredients]]`
- Resulting Link: [[Tiramisu Ingredients|recipes.italian.desserts.tiramisu#ingredients]]

The `#ingredients` at the end will link directly to the header `## Ingredients`. A shortcut to grabbing the link is to place the cursor in the `## Ingredients` header, then run the command `Dendron: Copy Note Link` (`Ctrl+Shift+C` / `Cmd+Shift+C`). That will copy the link to the clipboard, allowing you to paste in other notes.

> 💡 **TIP:** Notice how these links use custom link titles, like **Tiramisu Ingredients**. This is called a **labelled wikilink**: `[[label|your.note.to.link]]`. If a label isn't used, either the `title` attribute from the frontmatter, or the title of the header you are linking to, is used.

## Explore Your Knowledge Graph

> 🌱 **ACTION:** To get a visual representation of your notes, use the `Dendron: Show Note Graph` command.

This is the **[[graph view|dendron://dendron.dendron-site/dendron.topic.graph-view]]**. You can explore the hierarchical organization of your notes and how they are linked together. We're continually working to improve this feature so keep on the lookout for new capabilities in the note graph view in the future!

![[Local Note Graph|dendron.topic.graph-view#local-note-graph:#*]]

![[Local Note Graph|dendron.topic.graph-view#full-note-graph:#*]]

## Next Steps

- Tutorial Step 4: [[Rich Formatting|dendron.tutorial.rich-formatting]]
