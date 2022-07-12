---
id: h5173rzm248clfhht7v128c
title: Block Anchors
desc: ''
updated: 1657294831636
created: 1657294763971
---

A block anchor is a `^` (caret) character, followed by one or more digits, letters, dashes, and underscores. Dendron can automatically generate these, or you can add in custom anchors.

## Details
To have Dendron automatically generate random block anchors, select the target line or lines (or parts thereof) and run the `Copy Note Link` or `Copy Note Ref` commands. If multiple lines are selected, `Copy Note Ref` will generate two block anchors: one for the initial line, and one for the final line.

## Examples
```md
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
| Ullam    | optio     |

^whole-table
```

`^whole-list`, `^whole-table`, and `^1234` reference the blocks they are attached to. List item block anchors reference the item they are attached to and any sub-items, e.g.

- `^second-item` references "Item 2", "Item 2a", and "Item 2b"
- `^third-item` references "Item 3"

Please mind that block anchors can't be added into tables.
`| Ullam | optio | ^table` is not valid.