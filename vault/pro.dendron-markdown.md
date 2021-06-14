---
id: 69746008-2fa0-4036-b443-b15076a3d6bf
title: Dendron Markdown
desc: ''
updated: 1623640787131
created: 1618848143084
---

## Summary

Markdown toolchain for Dendron


## Lookup
- [syntax-tree/unist](https://github.com/syntax-tree/unist#unist-utilities)
- [syntax-tree/mdast](https://github.com/syntax-tree/mdast#list-of-utilities)
- [remarkjs/remark](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)


## Details
- See [walthrough](https://youtu.be/uEOnZiZaiCc) of the code 

```mermaid
sequenceDiagram
	participant processor1
	participant processor2
	participant processor3

```

## Unified
- unified
	- remark: parse/compile markdown
		- mdast
			- https://github.com/syntax-tree/mdast
	- rehype: parse/compile html

- processor
	- parser(text): AST
	- compiler(ast): text
	- transformer(ast): AST
	- data(key, value)
- methods
	- parse -> parse
	- process()
		- parse -> transform -> compile
	- processSync()
	- toString -> compile

## Dendron
- dest:
	- DENDRON_MD: identiy transformation
	- REGULAR_MD: regular markdown
	- PREVIEW_ENHANCED: hack for preview
	- HTML: for publishing, make transformations in HTML
