---
id: 90mrtp10ucyyvt60qekuj4y
title: Wiki Link
desc: ''
updated: 1660886217545
created: 1655250901385
---

> Relative links will not go to the anchor if clicked on the preview.  
> In this case, it becomes a normal link to the file

> Links to headers will not work when exported through a [[pod|dendron://dendron.dendron-site/dendron.topic.pod]]

## Summary
Wiki links are links surrounded by the two pairs of opening and closing brackets (eg. `[[hello]]`)

## Details

### Getting started

#### Alias

By default, wikilinks are rendered as the linked note's title when viewed by the [[note preview|dendron.topic.preview]] or when [[published|dendron.topic.publish]]. You can change how wikilinks are rendered by giving them an alias. To give an alias to a wikilink, simply add the alias in front of the wikilink followed by a `|` like so:

```
Wikilinks are [[awesome|some-awesome-note]]!
```

Wikilinks without alias are also called [[Naked Links|dendron://dendron.dendron-site/dendron.topic.links.concepts#naked-links]]

#### Autocomplete

![Wikilink Autocomplete](https://ik.imagekit.io/fpjzhqpv1/feature.autocomplete_kKSluZQRh.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655758517724)

- Type `[[` to trigger the autocomplete
- Link to specific sections of notes using the `[[wiki link#header]]` syntax
- Use the VS Code [intellisense shortcut](https://code.visualstudio.com/docs/editor/intellisense#_key-bindings) to trigger the autocomplete

#### Syntax highlighting

![](https://i.imgur.com/aBcgyZX.png)

Wikilinks also have support for syntax highlighting in the editor.
Existing notes will be highlighted in blue, and missing notes will be highlighted in yellow.
The exact shade of color depends on your theme.

#### Previewing the note that is linked

![Wikilink Hover](https://ik.imagekit.io/fpjzhqpv1/hover.wikilink_xV937-Kir.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655252086550)

You can preview the content of the note that the link is pointing to by hovering your mouse over the wikilink.