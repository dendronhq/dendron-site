---
id: 95f7193b-9940-42ba-841f-3e2a4d937ba3
title: 10 Blocks
desc: ''
updated: 1622526720220
created: 1619804977969
---
## Goals

Implement Roam like block references in Dendron.

## Context

Block references let you link or embed blocks of text into different parts of your notes. This allows you to link and refer to any part of a note, including paragraphs, lists, and tables.

## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)

This section describes existing work that has been done on this topic. 

- [roam block references](https://roamresearch.com/)
- [obsidian links to blocks](https://help.obsidian.md/How+to/Link+to+blocks)

## Proposal

Extend Dendron syntax to support block references. Obsidian has a great implementation of this already - unless there are critical deficiencies, we should adhere to their implementation and strive for interoperability. 

## Concepts

### Block Links

A block link has the following format. It is created in a note that is referencing a piece of text. When navigating the link, users should be taken to the block anchor. 

```
[[somelink#^1234]]
```

### Block Anchor

A block anchor is a `^` character, followed by one or more digits, letters, dashes, and underscores. Dendron should automatically generate these anchors when requested, and users should be able to add in custom anchors. The following are a few examples of anchors:

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

### Block Reference Link

A block reference link is a reference to a block link. 

```
![[somelink#^1234]]
```

#### Block Range References

Block references should also support [[range references|dendron.topic.note-reference#block-range-reference]]. Any valid block anchor is also a valid target for the start or end of a range.

When referring to block anchors, the range will be inclusive on both ends. For example:

```
paragraph 1

paragraph 2 ^start

paragraph 3 ^end

paragraph 4

![[#^start:^end]]
```

The reference here will include both paragraph 2 and 3. A single paragraph can be referenced without the range.

The range can also refer to anchors inside lists. When referencing lists, the anchors will include the list items between them.

```
* Item 1
* Item 2 ^start
* Item 3 ^end
* Item 4

![[#^start:^end]]
```

This references the items 2 and 3.


## Details

- to create a block, add `#^{id}` to the end of a [[wiki link|dendron.topic.links#wiki-links]]
  ```
  [[filename#^1234]]
  ```
- typing `^` will trigger a search of all blocks that currently exist within the file
- inputting `enter` will generate a block anchor, a random id, in the target file 
- typing `^^` will trigger a search of all existing block anchors

## Tasks

- [x] [[Parsing block syntax|rfc.10-blocks.parsing-block-syntax]]
- [ ] [[Markdown integration|rfc.10-blocks.markdown-integration]]
- [ ] [[Html integration|rfc.10-blocks.html-integration]]
- [ ] [[Integration with Vscode|rfc.10-blocks.vscode-integration]]

## Example

### Block link inside same file

- link to block 

```md
Some notes ^dcf64c

[[#^dcf64c]]

More notes
```

- html

```html
<!-- source -->
<div id="dcf64c">
<a aria-hidden="true" href="#dcf64c"><span class="icon icon-link"></span></a>
<p> Some notes </p>
</div>

<a  href="...#^dcf64c">filename</a>

<div>
<p> More Notes </p>
</div>
```

### Block link to other file

- link to block 

  - file a

  ```md
  Some notes ^dcf64c
  ```

  - file b

  ```md
  [[filename#^dcf64c]]

  More notes
  ```

- html

  - a.html

  ```html
  <!-- source -->
  <div id="dcf64c">
  <a aria-hidden="true" href="#dcf64c"><span class="icon icon-link"></span></a>
  <p> Some notes </p>
  </div>
  ```

  - b.html

  ```html
  <a  href="...#^dcf64c">filename</a>

  <p> More Notes </p>
  ```

### Block reference to other file

- link to block 

  - file a

  ```md
  Some notes ^dcf64c
  ```

  - file b

  ```md
  ![[filename#^dcf64c]]

  More notes
  ```

- html

  - a.html

  ```html
  <!-- source -->
  <div id="dcf64c">
  <a aria-hidden="true" href="#dcf64c"><span class="icon icon-link"></span></a>
  <p> Some notes </p>
  </div>
  ```

  - b.html

  ```html
  <p>Some notes</p>

  <p> More Notes </p>
  ```

## Tradeoffs

- we are using a purely plaintext based approach of doing block references which means that we are leaving artifacts in the source doc when we generate a block reference
  - alternatives are using a separate mapping file or using a db, the former adds a layer of indirection that doesn't fit with our current note modal, the latter is currently out of scope

## Discussion

