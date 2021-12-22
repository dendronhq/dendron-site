---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: >-
  Creating notes, understanding hierarchy, and using Lookup to quickly find your
  notes
updated: 1640153279799
created: 1625563944736
nav_order: 1
---

## Lookup

The **Lookup Bar** is the main way to interact with Dendron. You can use it for both finding notes and creating new notes. To find a note, run `Dendron: Lookup` (`Ctrl+L` / `Cmd+L`) to bring up the [[Lookup Bar|dendron://dendron.dendron-site/dendron.topic.lookup]].

![[dendron://dendron.dendron-site/asset.preview#lookup,1:#*]]

## Creating a Note

> 🌱 **ACTION:** Let's use the lookup to create a note! Open the lookup bar with `Ctrl+L` / `Cmd+L`. Type `recipes` and hit `Enter`. Afterward, you can use the `Ctrl+Tab` / `Cmd+Tab` shortcut to get back to the previous note you were viewing.

This creates a note named `recipes.md`. Notes in Dendron are just plaintext [[markdown|dendron://dendron.dendron-site/dendron.topic.markdown]]. Notes:

- Live locally on your file system.
- Are portable across operating systems and a variety of software.
- Make importing/exporting easier, including [[publishing your notes to a hosted website|dendron://dendron.dendron-site/dendron.topic.publish]].

You can try to add some content to the body of your `recipes` note now.

## Frontmatter

![[Summary|dendron://dendron.dendron-site/dendron.topic.frontmatter#summary,1:#*]]

> 💡 **TIP:** Frontmatter attributes have some rules to keep in mind. Here are a few:
> - Don't modify the `id` or `created` attributes in frontmatter.
> - The `updated` attribute automatically _updates_ whenever you make a new modificaiton to a file.
> - See **[[reserved keys in frontmatter|dendron://dendron.dendron-site/dendron.topic.frontmatter#reserved-keys]]** for more information.

## Creating a hierarchy

![[dendron://dendron.dendron-site/dendron.topic.hierarchies#summary,1:#concepts]]

> 🌱 **ACTION:** To create a hierarchy, bring up lookup again (`Ctrl+L` / `Cmd+L`). Type `recipes.vegetarian` and then press enter.

You've created your first hierarchy! **[[Hierarchies|dendron://dendron.dendron-site/dendron.topic.hierarchies]]** in Dendron are created by having a `.` ("dot") delimiter in the file name. For more information on how this works, see [[What's with the .'s?|dendron://dendron.dendron-site/dendron.topic.hierarchies#whats-with-the-s]]

Take a look at the tree view to see the `vegetarian` note under the `recipes` hierarchy. You can also see the note stored as `recipes.vegetarian.md` in the File Explorer Pane.

### Children

In this case, **vegetarian** is considered a child note of **recipes**. When looking at the `recipes` note, the preview view will list `vegetarian` (and any other `recipes.*` notes) at the bottom as **Children.** Children can also be seen and navigated via the tree view.

![[dendron://dendron.dendron-site/asset.preview#children,1:#*]]

### Hierarchy at any level

You can create a hierarchy at any level.

> 🌱 **ACTION:** Type the following into lookup and hit enter: `recipes.italian.desserts.tiramisu`

You'll notice there is a `+` sign next to `italian` and `desserts` when viewing in the lookup or tree view. The plus sign indicates that this note is a stub. A **[[stub|dendron://dendron.dendron-site/dendron.concepts#stubs]]** is a placeholder for a note that hasn't been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies.

![[dendron://dendron.dendron-site/asset.preview#tree-view-dark,1:#*]]

Following this recipes example, you can create other related notes. Some examples:

```
recipes.favorites
recipes.italian.appetizers
recipes.chinese
recipes.chinese.appetizers.wontons
recipes.ingredients.favorites
recipes.ingredients.shopping-list
```

You may be wondering why Dendron uses hierarchies. You can [[read here|dendron://dendron.dendron-site/dendron.faq#why-hierarchies]] for our thoughts about structure. Dendron also allows you to easily change the hierarchies later if you change your mind on how to organize your notes. This is covered later in [[Refactoring in Dendron|dendron.tutorial.linking-notes#refactoring-in-dendron]].

## Finding Notes

To find notes, we use the same lookup interface that we used to create them.

> 🌱 **ACTION:** Open Lookup, and type `vege`. This will find your `recipes.vegetarian` note. Hit `Enter` to open that note.

Lookup uses _fuzzy search_, which means you can type out partial queries and still see the results. Entering multiple keywords delimited by space will lookup matching notes regardless of order of the keywords.

- Example: `vege rec` or `rec vege` will match the `recipes.vegetarian` note.

> 💡 **TIP:** More approaches to using lookup can be found in [[dendron://dendron.dendron-site/dendron.topic.lookup.find]].
> ![[dendron://dendron.dendron-site/dendron.topic.search]]

## Next Steps

- Tutorial Step 3: [[Linking Notes|dendron.tutorial.linking-notes]]
