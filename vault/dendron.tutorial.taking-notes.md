---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: Taking Notes
updated: 1639115126552
created: 1625563944736
nav_order: 1
---

### Create a Note

To create a note, use `Ctrl+L` / `Cmd+L` to bring up [[Dendron's Lookup|dendron.topic.lookup]]. This is a shortcut for the Dendron: Lookup` command.

> 💡 The lookup command is the main way to interact with Dendron. It is used for both looking up your notes and creating new notes. When you do a lookup on a note that hasn't been created, Dendron will create it for you. Remember the `Ctrl+L` / `Cmd+L` shortcut.

> 🌱 Try it yourself - bring up the lookup bar with `Ctrl+L` / `Cmd+L`. Type `recipes` and hit Enter. Afterward, you can use the `Ctrl+Tab` / `Cmd+Tab` shortcut to get back to the previous note.

This should have created a note named `recipes.md`. Notes in Dendron are just plaintext [[markdown|dendron.topic.markdown]]. They live in your file system and are portable across any platform, which makes it very easy to import/ export your notes and even to [[publish your notes to a hosted website|dendron.topic.publish]]. You can try to add some content to the body of your `recipes` note now.

The --- section at the top of each note is _frontmatter_. Frontmatter contains custom attributes at the top of each markdown file. Dendron uses it to store metadata about each note for features like publishing. Don't modify the id attribute on the front matter.

### Creating a hierarchy

Dendron uses flexible hierarchies to help you organize your notes. [It's how people are able to manage tens of thousands of notes inside Dendron](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64/).

> 🌱 To create a hierarchy, bring up lookup again (`Ctrl+L` / `Cmd+L`). Type `recipes.vegetarian` and then press enter.

You have now created your first hierarchy. Hierarchies in Dendron are created by having a `.` delimiter in the file name. Take a look at the tree view in the side panel to see that the `vegetarian` note exists under the `recipes` hierarchy. You can also see in the Workspace panel that the note file is stored as `recipes.vegetarian.md`.

You can create a hierarchy at any level:

> 🌱 Type the following into lookup and hit enter: `recipes.italian.desserts.tiramisu`

You'll notice in the tree view that there is now a `+` sign next to `italian` and `desserts`. The plus sign indicates that this note is a stub. A stub is a placeholder for a note that hasn't actually been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies.

![Tree View](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-tree-view.png)

Following this recipes example, you can try creating other notes that might be relevant. Some examples: `recipes.italian.appetizers`, `recipes.chinese`, `recipes.chinese.appetizers`, `recipes.ingredients.favorites`, `recipes.ingredients.shopping-list`. Hierarchies are flexible, and you can create them in whichever way works best for you. Dendron allows you to easily change the hierarchies later if you change your mind on how to organize your notes.

### Finding Notes

To find notes, we use the same lookup interface that we used to create them.

> 🌱 Open Lookup, and type `vege`. This will find your `recipes.vegetarian` note. Hit `Enter` to open that note.

The lookup uses fuzzy search which means you can type out partial results and still see the results. Searching with * wildcards is supported. Also entering multiple keywords delimited by space will look up matching notes regardless of order of the keywords. Example: `vege rec`/`rec vege` will both match `recipes.vegetarian` note. Further info on looking up notes can be found in [[dendron.topic.lookup.find]]

When combined with hierarchies, this fast lookup system enables you to find your notes very quickly, even if you have thousands of notes in your vaults.

If you want to search for content within the notes, you can use VS Code's built-in search tools with `%KEYBINDING%+Shift+F`.

### Next Steps

- Tutorial Step 3: [[Linking Notes|dendron.tutorial.linking-notes]]
