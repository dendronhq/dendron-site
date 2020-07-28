---
id: f3a41725-c5e5-4851-a6ed-5f541054d409
title: Hierarchies
desc: ''
updated: 1595611213607
created: 1595611213607
---
# Hierarchies

Dendron has hierarchies. They are represented by `.` delimited filenames. 

Below is the example of converting a normal hierarchy from a file system to a Dendron hierarchy. 

```
.
└── project1/
    ├── project1/designs/
    │   └── project1/designs/promotion.png
    ├── project1/paperwork/
    │   └── project1/paperwork/legal.md
    └── project1/tasks/
        ├── project1/tasks/task1.md
        └── project1/tasks/task2.md
```


The same hiearchy in Dendron would look like the following:

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

## Why Hierarchies?

Dendron is built around hierarchies and the axiom that a canonical hierarichal representation of notes is one of the most effective ways of managing large numbers of notes. You can read more about the thoughts behind this [here](https://kevinslin.com/organizing/its_not_you_its_your_knowledge_base/).

## What's with the `.`'s?


1. It allows each **file** to also be a **folder**. This means your notes can have data but also contain other notes. 
1. It makes it much easier to perform certain refactoring operations
    - for example, say you had the following [[schema |dendron.topic.schema]]
    ```yml
    - id: a-parent
    children:
        - child-a
        - child-b
    - id: child-a
    - id: child-b
    ```
    - lets say you wanted to make `child-b` a child of `child-a`
    ```yml
    - id: a-parent
    children:
        - child-a
    - id: child-a
    children:
        - child-b
    - id: child-b
    ```
    - with the classical folder hierarchy, you would need to turn `child-a` into a folder and then create a custo file to hold the content from the original `child-a`
    ```
    .
    └── a-parent
        └── child-a
            ├── child-a-note
            └── child-b
    ```
    - with the `.` delimited hierarchy, this becomes a simple rename operation
    ```
    .
    ├── a-parent.child-a
    └── a-parent.child-a.child-b
    ```
1. It allows us to create [[stubs | dendron.topic.schema ]] for parts of the hierarchy that don't exist and not clutter our file system with empty folders 
    - with the classical folder hierarchy
    ```
    .
    └── a-parent
        └── child-a
            └── grandchild-a
                └── great-grandchild-a.md
    ```
    - with the `.` delimited hierarchy
    ```
    .
    └── a-parent.child-a.grandchild-a.great-grandchild-a.md
    ```
