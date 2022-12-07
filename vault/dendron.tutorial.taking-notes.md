---
id: 4RFQMNA91cRW12VJl_PFd
title: Taking Notes
desc: >-
  Creating notes, understanding hierarchy, and using Lookup to quickly find your
  notes
updated: 1670372812493
created: 1625563944736
nav_order: 1
---

## Access the Lookup Bar

You can interact with Dendron using the Lookup bar. Use the **Lookup Bar** for both finding notes and creating new notes. Enter `Dendron: Lookup` (`Ctrl+L` / `Cmd+L`) to open the [[Lookup Bar|dendron://dendron.dendron-site/dendron.topic.lookup]]. 

![[dendron://dendron.dendron-site/asset.preview#lookup,1:#*]]

## Create a Note

To create a note in Dendron, do the following:
1. Enter `Ctrl+L` / `Cmd+L` to open the lookup bar. 
2. Enter a name for your new note. For example, you can type `recipes`
3. Click **Create New**.
4. Press **Enter**. A new note titled `recipes.md` is created in the system. You can now add content to the body of your `recipes` note.

> 💡 **TIP:** Enter `Ctrl+Tab` / `Cmd+Tab` shortcut to go back to the previous note that you were viewing.

> 💡 **INFO:** Notes in Dendron are just plaintext [[markdown|dendron://dendron.dendron-site/dendron.topic.markdown]]. Notes:
> - Live locally on your file system.
> - Are portable across operating systems and a variety of software.
> - Make importing/exporting easier, including [[publishing your notes to a hosted website|dendron://dendron.dendron-site/dendron.topic.publish]].

## Add metadata information to your Note

![[Summary|dendron://dendron.dendron-site/dendron.topic.frontmatter#summary,1:#*]]

You can add metadata information to your note using frontmatter attributes.

> 💡 **TIP:** Keep in mind the following rules while entering the frontmatter attributes to your note.
> - Don't modify the `id` or `created` attributes.
> - The `updated` attribute automatically _updates_ whenever you make a new modification to a file.
> - See **[[reserved keys in frontmatter|dendron://dendron.dendron-site/dendron.topic.frontmatter#reserved-keys]]** for more information.

## Create a hierarchy for your Note

![[dendron://dendron.dendron-site/dendron.topic.hierarchies#summary,1:#concepts]]
To create a hierarchy, do the following:
1. Enter `Ctrl+L` / `Cmd+L` to open the lookup bar. 
2. Enter a name with a `.` ("dot") delimiter. For example, you can type `recipes.vegetarian` to create a note to store your vegetarian recipes.
3. Press **Enter**.
You've created your first hierarchy! 

> 💡 **TIP:** Lookup support tab-autocomplete. Typing `rec` in the Lookup Bar, and hitting `tab` should automatically spell out `recipes`.

Click **Tree View** to see the `vegetarian` note under the `recipes` hierarchy. You can also see the note stored as `recipes.vegetarian.md` in the File Explorer Pane.

**[[Hierarchies|dendron://dendron.dendron-site/dendron.topic.hierarchies]]** in Dendron are created by having a `.` ("dot") delimiter in the file name. See [[What's with the .'s?|dendron://dendron.dendron-site/dendron.topic.hierarchies#whats-with-the-s]] for detailed information on how hierarchy works.

### View children Notes

In the example listed above, **vegetarian** is considered as a child note of **recipes**. When looking at the `recipes` note, the preview view will list `vegetarian` (and any other `recipes.*` notes) at the bottom as **Children.** Children notes can also be seen and navigated via the tree view.

![[dendron://dendron.dendron-site/asset.preview#children,1:#*]]

### Create a hierarchy at any level

You can create a hierarchy at any level. For example, type `recipes.italian.desserts.tiramisu` in the lookup bar and press **Enter**.

You'll see there is a `+` sign next to `italian` and `desserts` when viewing in the lookup or tree view. The plus sign indicates that this note is a stub. A **[[stub|dendron://dendron.dendron-site/dendron.concepts#stubs]]** is a placeholder for a note that hasn't been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies.

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

Read [[Why Dendron uses hierarchies|dendron://dendron.dendron-site/dendron.faq#why-hierarchies]] for detailed information on Dendron note structure. Dendron also allows you to change the hierarchy at a later date. Read [[Refactoring in Dendron|dendron.tutorial.linking-notes#refactoring-in-dendron]] in case you change your mind on how to organize your notes.

## Find your Notes

To find your notes, do the following:
1. Enter `Ctrl+L` / `Cmd+L` to open the lookup bar. 
2. Enter the name of your note. For example, you can type `vege` to find your `recipes.vegetarian` note.
3. Press **Enter**. The note is opened.

> 💡 **INFO:** Lookup uses _fuzzy search_, which means you can type out partial queries and still see the results. Entering multiple keywords delimited by space will lookup matching notes regardless of order of the > keywords.
> - Example: `vege rec` or `rec vege` will match the `recipes.vegetarian` note.

> 💡 **TIP:** Read [[dendron://dendron.dendron-site/dendron.topic.lookup.find]] to understand the different ways of querying the lookup.
> ![[dendron://dendron.dendron-site/dendron.topic.search]]

## Next steps

- Tutorial Step 3: [[Linking Notes|dendron.tutorial.linking-notes]]