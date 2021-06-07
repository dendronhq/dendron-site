---
id: 21bc1caa-d815-42db-bc16-27d6c16a3115
title: Block References
desc: ''
updated: 1623095579857
created: 1622400954171
---


## Summary
- status: [[Experimental 🧪|dendron.ref.status#experimental-🧪]]

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables.

Currently, we support:
* navigating to block references by using the [[Goto Note|dendron.topic.commands#goto-note]] command, and by clicking on links while holding down `Ctrl`
* block references in publishing

We currently (2021.06.04) **do not** support, but are working on:
* block references in the preview
* auto-complete support for block references

^block-ref-example


## Block Anchor

A block anchor is a `^` character, followed by one or more digits, letters, dashes, and underscores. In the future Dendron will automatically generate these, but for now you can add in custom anchors. The following are a few examples of anchors:

```
Lorem ipsum dolor amet ^1234

* Item 1
* Item 2 ^second-item
* Item 3

^whole-list

| Sapiente | accusamus |
|----------|-----------|
| Laborum  | libero    |
| Ullam    | optio     | ^whole-table
```

`^whole-list`, `^whole-table`, and `^1234` reference the blocks they are attached to. Lists are special though, `^second-item` only references the list item it is next to.

## Block Links

A block link has the following format. It is created in a note that is referencing a piece of text. When navigating the link, users should be taken to the block anchor. 

```
[[somelink#^1234]]
```

Block links can link to anchors within the same note without writing the name of the note. For example:

```
Ab voluptatem commodi maiores.
Nemo qui voluptatem dolores. ^my-paragraph

Let's look back at that paragraph: [[#^my-paragraph]]
```

## Block Anchor References

Block anchors can be used in references as well. Here are a few examples:

```
Ab voluptatem commodi maiores.
Nemo qui voluptatem dolores. ^my-paragraph

* Culpa autem et voluptatem reiciendis id sint.
* Qui quos ut a deserunt. ^second-item
* Minima quos consequatur quo eum quas aut.

^all-items

I want to refer to that paragraph again:

![[#^my-paragraph]]

And let's look at that list again:

![[#^all-items]]

I want to re-emphasize that second item:

![[#^second-item]]

You can reference across notes as well. Say you had a note named "other-note" which had an anchor "some-anchor" in it:

![[other-note#^some-anchor]]
```

When you refer to a block anchor, it will display the block that the block anchor is attached to. This means you can refer to an entire paragraph, table, list, or even a list item.

You can also refer to block anchors in ranges. This allows you to refer to multiple paragraph, multiple list items etc. using a single reference. Let's look at a few examples of this as well:

```
# Section

Sunt animi inventore atque quia ex aut minus.
Voluptate ipsa et esse. ^paragraph-1

Porro ad nesciunt sed eius ut enim est eveniet.
Omnis sint necessitatibus aut. ^paragraph-2

* Aliquam et sit autem. ^first
* Est sapiente quis ut est.
* Est incidunt et debitis vel ab. ^third
* Maxime harum aut mollitia debitis ipsa.

Both paragraphs:

![[#^paragraph-1:#^paragraph-2]]

First 3 items in my list:

![[#^first:#^third]]

From the header, to the second paragraph:

![[#section:#^paragraph-2]]
```


## Block Reference

Block References allow you to embed a block in another note. 

### Example

```
![[#^block-ref-example]]
```

will render into the following output

![[#^block-ref-example]]

## Configuration
- status: [[Work In Progress 🚧|dendron.ref.status#work-in-progress-]]
