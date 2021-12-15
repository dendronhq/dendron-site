---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: Creating notes, understanding hierarchy, and using Lookup to quickly find your notes
updated: 1639529157032
created: 1625563944736
nav_order: 1
---

### Create a Note

To create a note, run `Dendron: Lookup` (`Ctrl+L` / `Cmd+L`) to bring up the [[Lookup Bar|dendron://dendron.dendron-site/dendron.topic.lookup]].

> 💡 **TIP:** The lookup command is the main way to interact with Dendron. It's used for looking up and creating notes. When you do a lookup on a note that hasn't been created, Dendron will create it for you.

> 🌱 **ACTION:** Try it yourself! Open the lookup bar with `Ctrl+L` / `Cmd+L`. Type `recipes` and hit `Enter`. Afterward, you can use the `Ctrl+Tab` / `Cmd+Tab` shortcut to get back to the previous note you were viewing.

This creates a note named `recipes.md`. Notes in Dendron are just plaintext [[markdown|dendron://dendron.dendron-site/dendron.topic.markdown]]. Notes:

- Live locally on your file system.
- Are portable across operating systems and a variety of software.
- Make importing/exporting easier, including [[publishing your notes to a hosted website|dendron://dendron.dendron-site/dendron.topic.publish]].

You can try to add some content to the body of your `recipes` note now.

#### Frontmatter

![[Summary|dendron://dendron.dendron-site/dendron.topic.frontmatter#summary,1:#*]]

> 💡 **TIP:** Frontmatter attributes have some rules to keep in mind. Here are a few:
> - Don't modify the `id` or `created` attributes in frontmatter.
> - The `updated` attribute automatically _updates_ whenever you make a new modificaiton to a file.
> - See **[[reserved keys in frontmatter|dendron://dendron.dendron-site/dendron.topic.frontmatter#reserved-keys]]** for more information.

### Creating a hierarchy

![[dendron.topic.hierarchies#summary,1:#concepts]]

> 🌱 **ACTION:** To create a hierarchy, bring up lookup again (`Ctrl+L` / `Cmd+L`). Type `recipes.vegetarian` and then press enter.

You've created your first hierarchy! **[[Hierarchies|dendron://dendron.dendron-site/dendron.topic.hierarchies]]** in Dendron are created by having a `.` (a "period" or "dot") delimiter in the file name. For more information on how this works: [[What's with the .'s?|dendron://dendron.dendron-site/dendron.topic.hierarchies#whats-with-the-s]]

Take a look at the Tree View to see the `vegetarian` note under the `recipes` hierarchy. You can also see the the note stored as `recipes.vegetarian.md` in the File Explorer Pane.

#### Children

In this case, **vegetarian** is considered a child note of **recipes**. When looking at the `recipes` note, the preview view will list `vegetarian` (and any other `recipes.*` notes) at the bottom as **Children.** Children can also be seen and navigated via the tree view.

![[dendron://dendron.dendron-site/asset.preview#children,1:#*]]

#### Hierarchy at any level

You can create a hierarchy at any level.

> 🌱 **ACTION:** Type the following into lookup and hit enter: `recipes.italian.desserts.tiramisu`

You'll there is a `+` sign next to `italian` and `desserts` when viewing in the lookup or Tree View. The plus sign indicates that this note is a stub. A **[[stub|dendron://dendron.dendron-site/dendron.concepts#stubs]]** is a placeholder for a note that hasn't been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies.

![[dendron://dendron.dendron-site/asset.preview#tree-view-dark,1:#*]]

Following this recipes example, you can create other related. Some examples:

```
recipes.favorites
recipes.italian.appetizers
recipes.chinese
recipes.chinese.appetizers.wontons
recipes.ingredients.favorites
recipes.ingredients.shopping-list
```

You may wonder why Dendron uses hierarchies.

![[Why hierarchies?|dendron.faq#why-hierarchies,1:#*]]

### Finding Notes

To find notes, we use the same lookup interface that we used to create them.

> 🌱 **ACTION:** Open Lookup, and type `vege`. This will find your `recipes.vegetarian` note. Hit `Enter` to open that note.

Lookup uses _fuzzy search_, which means you can type out partial queries and still see the results. Entering multiple keywords delimited by space will lookup matching notes regardless of order of the keywords.

- Example: `vege rec` or `rec vege` will match the `recipes.vegetarian` note.

Further info on using lookup to find notes can be found in [[dendron://dendron.dendron-site/dendron.topic.lookup.find]].

![[dendron://dendron.dendron-site/dendron.topic.search]]

### Next Steps

- Tutorial Step 3: [[Linking Notes|dendron://dendron.dendron-site/dendron.tutorial.linking-notes]]
