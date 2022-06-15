---
id: 90mrtp10ucyyvt60qekuj4y
title: Wiki Link
desc: ''
updated: 1655252104726
created: 1655250901385
---

## Summary
Wiki links are surrounded by the two pairs of opening and closing brackes (eg. `[[hello]]`)

## Features

### Autocomplete
Wiki links support **autocomplete**. To initiate:
- create wikilink brackets and start typing
- link to specific sections of notes using the `[[wiki link#header]]` syntax.
  - NOTE: relative links will not go to the anchor if clicked on the preview, in that case, it becomes a normal link to the file
  - NOTE2: doesn't work when exported through a pod
- use the VS Code [intellisense shortcut](https://code.visualstudio.com/docs/editor/intellisense#_key-bindings) to trigger the autocomplete

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/links-autocomplete.gif)

### Highlights

Wiki links also have support for highlighting in the editor. Existing notes will be highlighted in blue, and missing notes will be highlighted in yellow. The exact shade of color depends on your theme.

![](https://i.imgur.com/aBcgyZX.png)

### Hovers

![Wikilink Hover](https://ik.imagekit.io/fpjzhqpv1/hover.wikilink_xV937-Kir.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1655252086550)

##