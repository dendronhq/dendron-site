---
id: f1af56bb-db27-47ae-8406-61a98de6c78c
title: References
desc: ''
updated: 1615430357861
created: 1597356582509
stub: false
---
Dendron allows you to reference content from other notes and embed them in your current note.

Currently, Dendron supports 3 types of references:

- note references
- block references
- block range references

References have the following syntax:

```
![[NAME.OF.NOTE]]
```

Another example with a header range:

```
![[NAME.OF.NOTE#STARTING-HEADER:#ENDING-HEADER]]
```

> NOTE: When referencing headers with spaces in them, the note ref needs to use `-` instead of spaces within the name. This is a limitation of adopting GitHub-style slugger references. This is also useful for when multiple subheaders on a page may have the same name, which would expect something else `#foo` vs. `#foo-1` vs. `#foo-2`. This can be automatically taken care of by highlighting a header, and using `cmd+shift+r` / `ctrl+shift+r` to add a properly-formatted note ref to the clipboard.
>
> For more information:
> - [StackOverflow: How to escape symbols in GitHub-flavored markdown internal links / heading anchors?](https://stackoverflow.com/a/48760076/5340149)
> - [Anchors in Markdown gist](https://gist.github.com/asabaylus/3071099)

> NOTE: Dendron recently switched the note ref syntax for `((ref: [[foo]]))` to `![[foo]]`. The videos have not yet been updated to reflect this change.

## Configuration

- note references by default come with an outline. They are called [[pretty refs|dendron.ref.terms#pretty-ref]]. 


Toggle the following configuration to turn off this setting.

![[dendron.topic.config#useprettyrefs:#*]]

## Commands

You can create a ref either by hand or using the `Copy Note Ref` command.

![[dendron.topic.commands#copy-note-ref:#*]]

## Note Reference

A note reference will include the entire contents of a note within another note. Below is an example of a note reference.

```
![[dendron.demo.refs.sample]]
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/refs.block.gif)

Note that references also respect the wildcard operator. The following example will include all child pages of sample. 

```
![[dendron.demo.refs.sample.*]]
```

## Block Reference

A block reference will include the entire contents of a note starting from a specified heading. 

```
![[demo.embed.block#head1]]
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block.gif)

## Block Range Reference

A block range reference will include the contents of a note starting from a `start` header and ending at a `end` header. 

```
![[demo.embed.block#head1:#head3]]
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/ref-block-range.gif)

## Note Reference Offset

A note reference offset is a way to skip a number of lines when using a note reference. The syntax is `,{number}`. Below is an example of using a note reference offset to offset an initial heading, skipping the actual header when doing the embeding.

- NOTE: currently, note reference offsets are limited to the first anchor inside a block reference. They must also be a positive value

```
![[demo.embed.block#head1,1]]
```

<a href="https://www.loom.com/share/31cb62916586453f8475f94ba68b74a1">  <img style="" src="https://cdn.loom.com/sessions/thumbnails/31cb62916586453f8475f94ba68b74a1-with-play.gif"> </a>

## Wildcard Header Reference

When you're referencing a header by reference, sometimes you don't care what the next header is, just that the reference covers all text up to the next header. You can now specify this using the `*` symbol in a header reference.

For example, the following would reference the content from header1 to the next header. 

```
![[demo.embed.block#head1:#*]]
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/refs.wildcard.gif)

## Recursive Reference

Note references can refer to notes with references inside. Dendron current supports references two levels deep. This applies to both the **local preview** as well as **publishing**.

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/refs.recursion.jpg)

## Wildcard Note Refs

[[Note references|dendron.topic.refs]] accept the `*` operator at the end which lets you grab all notes of a given level of hierarchy. This also works with typical note reference operation like block selection which means you can use it to grab specific blocks from every note in a level.

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/9401e5dfe60f4f589e14d50e280d11f5" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

