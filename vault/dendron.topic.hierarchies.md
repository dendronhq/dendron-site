---
id: f3a41725-c5e5-4851-a6ed-5f541054d409
title: Hierarchies
desc: ''
updated: 1645812976476
created: 1595611213607
---

## Summary

Dendron organizes your notes into hierarchies. These are `.` ("dot" or "period") delimited Markdown files. 

## Example
Below is a hypothetical hierarchy for a file tree:

```
.
└── project1/
    ├── designs/
    │   └── promotion.png
    ├── paperwork/
    │   └── legal.md
    └── tasks/
        ├── task1.md
        └── task2.md
```

The same hierarchy in Dendron would look like the following:

```
.
├── project1.md
├── project1.designs.md
├── project1.designs.promotion.md
├── project1.paperwork.md
├── project1.paperwork.legal.md
├── project1.tasks.md
├── project1.tasks.task1.md
└── project1.tasks.task2.md
```

## Concepts

In the following concepts, we will be using the following file tree

![[dendron._ref.layout#file-tree,1:#additional-folders]]

### Root

Every vault has a root. This is the `root.md`. 

### Domain

The domain is the root of a specific hierarchy. In our example vault, we have one domain - `dendron`.

## Why Hierarchies?

![[Why hierarchies?|dendron.faq#why-hierarchies,1:#*]]

## What's with the `.`'s?

1. It allows each **file** to also be a **folder**. This means your notes can have data but also contain other notes. 
2. It makes it much easier to perform certain refactoring operations. For example, say you had the following [[schema|dendron.topic.schema]]
   ```yml
   - id: a-parent
   children:
       - child-a
       - child-b
   - id: child-a
   - id: child-b
   ```
   Lets say you wanted to make `child-b` a child of `child-a`
   ```yml
   - id: a-parent
   children:
       - child-a
   - id: child-a
   children:
       - child-b
   - id: child-b
   ```
    With the classical folder hierarchy, you would need to turn `child-a` into a folder and then create a custom file to hold the content from the original `child-a`
   ```
   .
   └── a-parent
       └── child-a
           ├── child-a-note
           └── child-b
   ```
    With the `.` delimited hierarchy, this becomes a simple rename operation
   ```
   .
   ├── a-parent.child-a
   └── a-parent.child-a.child-b
   ```
3. It allows us to create [[stubs|dendron.topic.schema]] for parts of the hierarchy that don't exist and not clutter our file system with empty folders. With the classical folder hierarchy
   ```
   .
   └── a-parent
       └── child-a
           └── grandchild-a
               └── great-grandchild-a.md
   ```
   With the `.` delimited hierarchy
   ```
   .
   └── a-parent.child-a.grandchild-a.great-grandchild-a.md
   ```

## Basics
    - Create a parent note
    - Create a child note under a parent note
