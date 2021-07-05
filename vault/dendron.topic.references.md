---
id: f1af56bb-db27-47ae-8406-61a98de6c78c
title: References
desc: ''
updated: 1623446290793
created: 1597356582509
stub: false
---

## Summary
Dendron allows you to reference content from other notes and embed them in your current note.

Currently, Dendron supports 4 types of references:

- note references
- header references
- block references
- range references

References have the following syntax:

```
![[name.of.note]]
```

Here's an example with a block anchor:

```
![[name.of.note#^important-paragraph]]
```

Another example with a header range:

```
![[name.of.note#starting-header:#ending-header]]
```

> NOTE: When referencing headers with spaces in them, the note ref needs to use `-` instead of spaces within the name. This is a limitation of adopting GitHub-style slugger references. This is also useful for when multiple subheaders on a page may have the same name, which would expect something else `#foo` vs. `#foo-1` vs. `#foo-2`. This can be automatically taken care of by highlighting a header, and using `cmd+shift+r` / `ctrl+shift+r` to add a properly-formatted note ref to the clipboard.
>
> For more information:
> - [StackOverflow: How to escape symbols in GitHub-flavored markdown internal links / heading anchors?](https://stackoverflow.com/a/48760076/5340149)
> - [Anchors in Markdown gist](https://gist.github.com/asabaylus/3071099)


## Reference Types

### Note Reference

A note reference will include the entire contents of a note within another note. Below is an example of a note reference.

```
![[dendron.demo.refs.sample]]
```

Note that references also respect the wildcard operator. The following example will include all child pages of sample. 

```
![[dendron.demo.refs.sample.*]]
```

### Header Reference

A block reference will include the entire contents of a note starting from a specified heading. 

```
![[demo.embed.block#head1]]
```

### Block Reference

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables.

^block-ref-example

```
![[example.my-note#^my-list]]
```

Block References allow you to embed a block marked by an anchor in another note. 

Here are a few examples:

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

Below is an example to a block reference to an earlier part of this page.

![[#^block-ref-example]]

### Block Anchor

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

### Block Links

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

### Range Reference

A block range reference will include the contents of a note starting from a `start` header or block anchor, and ending at a `end` header or block anchor. You can also mix headers and block anchors.

#### With Header

```
![[demo.embed.block#head1:#head3]]
```

#### With Blocks

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

## Commands

You can create a ref either by hand or using the `Copy Note Ref` command.

![[dendron.topic.commands#copy-note-ref:#*]]

## Advanced

### Reference Offset

A note reference offset is a way to skip a number of lines when using a header reference. The syntax is `,{number}`. Below is an example of using a note reference offset to offset an initial heading, skipping the actual header when doing the embeding.

- NOTE: currently, note reference offsets are limited to the first anchor inside a block reference. They must also be a positive value

```
![[demo.embed.block#head1,1]]
```

### Wildcard Header Reference

When you're referencing a header by reference, sometimes you don't care what the next header is, just that the reference covers all text up to the next header. You can now specify this using the `*` symbol in a header reference.

For example, the following would reference the content from header1 to the next header. 

```
![[demo.embed.block#head1:#*]]
```

### Recursive Reference

Note references can refer to notes with references inside. Dendron current supports references two levels deep. This applies to both the **local preview** as well as **publishing**.

### Wildcard Link Reference

[[Note references|dendron.topic.refs]] accept the `*` operator at the end which lets you grab all notes of a given level of hierarchy. This also works with typical note reference operation like block selection which means you can use it to grab specific blocks from every note in a level.


```
![[demo.journal.2021.*]]
```


## Publishing

When you [[publish|dendron.topic.publishing]] a note with a note reference, Dendron will embed the content of the reference in the page. If the content is part of a published page as specified by the publishing [[configuration|dendron.topic.publishing.configuration]], dendron will include a link to the page. If not, Dendron will embed the content without a link. If the referenced content is not publishable (eg. `published: false` set on frontmatter), dendron will generate a custom [[404 link|dendron.topic.publishing.features#selective-publication]].

## Configuration

- note references by default come with an outline. They are called [[pretty refs|dendron.ref.terms#pretty-ref]]. 


Toggle the following configuration to turn off this setting.

![[dendron.topic.config.dendron#useprettyrefs:#*]]
