---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: Taking Notes
updated: 1639270562777
created: 1625563944736
nav_order: 1
---

### Create a Note

To create a note, use `Ctrl+L` / `Cmd+L` to bring up [[Dendron's Lookup|dendron://dendron.dendron-site/dendron.topic.lookup]]. This is a shortcut for the `Dendron: Lookup` command.

> 💡 **TIP:** The lookup command is the main way to interact with Dendron. It is used for both looking up your notes and creating new notes. When you do a lookup on a note that hasn't been created, Dendron will create it for you. Remember the `Ctrl+L` / `Cmd+L` shortcut.

> 🌱 **ACTION:** Try it yourself! Open the lookup bar with `Ctrl+L` / `Cmd+L`. Type `recipes` and hit `Enter`. Afterward, you can use the `Ctrl+Tab` / `Cmd+Tab` shortcut to get back to the previous note you were viewing.

This should have created a note named `recipes.md`. Notes in Dendron are just plaintext [[markdown|dendron://dendron.dendron-site/dendron.topic.markdown]]. They live in your file system and are portable across any platform, which makes it very easy to import/export your notes and even to [[publish your notes to a hosted website|dendron://dendron.dendron-site/dendron.topic.publish]]. You can try to add some content to the body of your `recipes` note now.

The `---` section at the top of each note is **frontmatter**. [[Frontmatter|dendron://dendron.dendron-site/dendron.topic.frontmatter]] contains custom attributes at the top of each markdown file. Dendron uses it to store metadata about each note for features like publishing.

- Don't modify the `id` or `created` attributes in frontmatter.
- The `updated` attribute automatically _updates_ whenever you make a new modificaiton to a file.

### Creating a hierarchy

![[dendron.topic.hierarchies#the-why,1:#*]]

> 🌱 **ACTION:** To create a hierarchy, bring up lookup again (`Ctrl+L` / `Cmd+L`). Type `recipes.vegetarian` and then press enter.

You have now created your first hierarchy! **[[Hierarchies|dendron://dendron.dendron-site/dendron.topic.hierarchies]]** in Dendron are created by having a `.` (a "period" or "dot") delimiter in the file name. For more information on how this works: [[What's with the .'s?|dendron://dendron.dendron-site/dendron.topic.hierarchies#whats-with-the-s]]

Take a look at the Tree View in the side panel to see that the `vegetarian` note exists under the `recipes` hierarchy. You can also see in the File Explorer Pane that the note file is stored as `recipes.vegetarian.md`.

You can create a hierarchy at any level.

> 🌱 **ACTION:** Type the following into lookup and hit enter: `recipes.italian.desserts.tiramisu`

You'll notice in the Tree View that there is now a `+` sign next to `italian` and `desserts` when viewing in the lookup. The plus sign indicates that this note is a stub. A **[[stub|dendron://dendron.dendron-site/dendron.concepts#stubs]]** is a placeholder for a note that hasn't actually been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies.

![Tree View](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-tree-view.png)

Following this recipes example, you can try creating other notes that might be relevant. Some examples:

```
recipes.italian.appetizers
recipes.chinese
recipes.chinese.appetizers
recipes.ingredients.favorites
recipes.ingredients.shopping-list
```

Hierarchies are flexible, and you can create them in whichever way works best for you. Dendron allows you to [[easily change the hierarchies later|dendron://dendron.dendron-site/dendron.topic.refactoring]] if you change your mind on how to organize your notes.

### Finding Notes

To find notes, we use the same lookup interface that we used to create them.

> 🌱 **ACTION:** Open Lookup, and type `vege`. This will find your `recipes.vegetarian` note. Hit `Enter` to open that note.

Lookup uses _fuzzy search_  which means you can type out partial results and still see the results. Searching with `*` wildcards is supported. Also entering multiple keywords delimited by space will lookup matching notes regardless of order of the keywords.

- Example: `vege rec` or `rec vege` will match the `recipes.vegetarian` note. 

Further info on using lookup to find notes can be found in [[dendron://dendron.dendron-site/dendron.topic.lookup.find]].

When combined with hierarchies, this fast lookup system enables you to find your notes very quickly, even if you have thousands of notes in your vaults.

![[dendron://dendron.dendron-site/dendron.topic.search]]

### Next Steps

- Tutorial Step 3: [[Linking Notes|dendron://dendron.dendron-site/dendron.tutorial.linking-notes]]
