---
id: 137008c9-29ca-436c-a94c-dc378a942b1f
title: Markdown Integration
desc: ''
updated: 1621066575066
created: 1619807298632
---


## Design
- generate a `<div></div>` above the block element for the anchor with id equal to the block
- generate a `<a href="#id"></a>` element to given block 

## Tasks
- [x] compiling block links
- [x] compiling block anchors
- [x] compiling block link references

## Compiling block links
- add a compiler for a block link
- should generate
