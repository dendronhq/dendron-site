---
id: f1af56bb-db27-47ae-8406-61a98de6c78c
title: Note Reference
desc: ''
updated: 1636492098692
created: 1597356582509
stub: false
---

## Summary

Dendron allows you to reference content from other notes and **embed** them in your current note.  This is also known as [transclusion](https://en.wikipedia.org/wiki/Transclusion).  

Note references are different from regular [[links|dendron://dendron.dendron-site/dendron.topic.links]] in that they actually include the content of the destination in the current note.

Note references are extremely powerful and help you re-use your notes in a variety of places.

Currently, Dendron supports 4 types of references to help you control the amount of content that gets embedded:

 note references
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

### Full Note References

The simplest type is a full note reference, which will include the entire contents of a note within another note. Below is an example of a note reference.

```
![[dendron.demo.refs.sample]]
```

### Header References

A header reference will include the entire contents of a note starting from a specified heading.

```
![[demo.embed.block#head1]]
```

### Block References

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables. Block references use the `^` caret as the anchor.

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
    * Sub-item
* Minima quos consequatur quo eum quas aut.

^all-items

I want to refer to that paragraph again:

![[#^my-paragraph]]

And let's look at that list again:

![[#^all-items]]

I want to re-emphasize that second item:

![[#^second-item]]

The second item, without the sub-item under it:

![[#^second-item:#^second-item]]

You can reference across notes as well. Say you had a note named "other-note" which had an anchor "some-anchor" in it:

![[other-note#^some-anchor]]
```

When you refer to a block anchor, it will display the block that the block anchor is attached to. This means you can refer to an entire paragraph, table, list, or even a list item.

Below is an example to a block reference to an earlier part of this page.

![[#^block-ref-example]]

#### Block Anchor

A block anchor is a `^` character, followed by one or more digits, letters, dashes, and underscores. Dendron can automatically generate these, or you can add in custom anchors. 

To have Dendron automatically generate random block anchors, select the target line or lines (or parts thereof) and run the `Copy Note Link` or `Copy Note Ref` commands. If multiple lines are selected, `Copy Note Ref` will generate two block anchors: one for the initial line, and one for the final line.

The following are a few examples of block anchors:

```
Lorem ipsum dolor amet ^1234

* Item 1
* Item 2 ^second-item
  * Item 2a
  * Item 2b
* Item 3 ^third-item
* Item 4

^whole-list

| Sapiente | accusamus |
|----------|-----------|
| Laborum  | libero    |
| Ullam    | optio     | ^whole-table
```

`^whole-list`, `^whole-table`, and `^1234` reference the blocks they are attached to. List item block anchors reference the item they are attached to and any sub-items, e.g.
* `^second-item` references "Item 2", "Item 2a", and "Item 2b"
* `^third-item` references "Item 3"

#### Block Links

Block Anchors can also be used as links. A block link has the following format. It is created in a note that is referencing a piece of text. When navigating the link, users should be taken to the block anchor. 

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

A range reference will include the contents of a note starting from a starting header or block anchor, and ending at an ending header or block anchor. The syntax is `![[note#start:#end]]`.

#### Example With Headers as Range Boundary

```
![[demo.embed.block#head1:#head3]]
```

#### Example With Blocks as Range Boundary

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

You can create a reference either by hand or using the `Copy Note Ref` command.

![[dendron.topic.commands#copy-note-ref:#*]]

## Additional Options

### Line Offset

You can use line offsets to skip a number of lines when using a header reference. The syntax is `,{number}`. Below is an example of using a note reference offset to offset an initial heading, skipping the actual header when doing the embedding.

- NOTE: currently, note reference offsets are limited to the first anchor inside a block reference. They must also be a positive value

```
![[demo.embed.block#head1,1]]
```

### Wildcard Headers as a Range Boundary

When you're referencing a header by reference, sometimes you don't care what the next header is, just that the reference covers all text up to the next header. You can specify this using the `*` symbol in a header reference.

For example, the following would reference the content from header1 to the next header.

```
![[demo.embed.block#head1:#*]]
```

### Recursive References

References can refer to notes with references inside. Dendron current supports references two levels deep. This applies to both the **local preview** as well as **publishing**.

### Wildcard Link Reference

References accept the `*` operator at the end which lets you grab all notes of a given level of hierarchy. This also works with typical note reference operation like block selection which means you can use it to grab specific blocks from every note in a level.

```
![[demo.journal.2021.*]]
```

## Publishing

When you [[publish|dendron.topic.publish]] a note with a note reference, Dendron will embed the content of the reference in the page. If the content is part of a published page as specified by the publishing [[configuration|dendron.topic.publish-legacy.configuration]], dendron will include a link to the page. If not, Dendron will embed the content without a link. If the referenced content is not publishable (eg. `published: false` set on frontmatter), dendron will generate a custom [[404 link|dendron.topic.publish-legacy.features#selective-publication]].

## Configuration

- note references by default come with an outline. They are called [[pretty refs|dendron._ref.terms#pretty-ref]].

Toggle the following configuration to turn off this setting.

![[dendron.ref.config.dendron#useprettyrefs:#*]]
