---
id: 784b8d5e-58eb-4e3e-98b0-8ed1690abc74
title: Working with Notes
desc: ''
updated: 1614109519084
created: 1608055635963
nav_order: 0
---

## Summary

In this module, we will demonstrate how to create and find notes inside Dendron.

### Creating your first note

To create a note, `<cmd>+L` (mac) or `<ctrl>+L` (windows/linux) to bring up Dendron's [[lookup|dendron.topic.lookup]]. 

![[dendron.topic.lookup.create#summary,1:#*]]

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.hello.png)

Note that notes in Dendron are just plaintext [[markdown|dendron.concepts#markdown]]. They live in your file system and are completely portable across any platform. 

The `---` section at the top is [[frontmatter|dendron.concepts#frontmatter]]. Frontmatter are custom attributes at the top of each markdown file. Dendron uses it to store metadata about each note and is used for features like [[publishing|dendron.topic.publishing]]. You can also add your own custom data to the frontmatter. 

### Creating a hierarchy

To create a hierarchy, bring up lookup again. Note that it will be pre-filled with the name of the current note. 

Enter ➡️ to move the cursor to the end, type `.world`, and then press enter. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.hello-world.jpg)

You have now created your first [[hierarchy|dendron.concepts#hierarchies]].

Hierarchy in dendron are just `.` delimited files. You can open the tree view (exhibit 1) to see the hierarchy more directly. You can see how the note looks on disk in the explorer view (exhibit 2).

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.tree-view.jpg)

Dendron uses (flexible) hierarchies to help you organize your notes. It's how people are able to manage tens of thousands of notes inside Dendron. This will become more clear as we go through this tutorial.

Note that you can create a hierarchy at any level without friction. For example, type the following into lookup and hit enter: `lets.go.deep`

You'll notice in the tree view that there is now a `+` sign next to `lets` and `go`. The plus sign indicates that this note is a [[stub|dendron.concepts#stubs]]. A stub is a placeholder for a note that hasn't actually been created. Dendron uses stubs to avoid cluttering your file system with empty notes when creating hierarchies. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.deep.jpg)

### Finding Notes

To find notes, we use the same lookup interface that we used to create them. Type the path of the note that you want to find them. Note that lookup uses fuzzy search which means you can type out partial results and still see the results. In practice, you'll only need to type a couple of characters to find any note stored inside Dendron.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/quickstart.lookup-fuzzy.jpg)


### Files

At the end of this module, you should have the following files in your vault

```
.
└── vault
    ├── dendron.md
    ├── dendron.welcome.md
    ├── hello.md
    ├── hello.world.md
    └── lets.go.deep.md
```

### Next
- [[Working with Links|dendron.tutorial.links]]