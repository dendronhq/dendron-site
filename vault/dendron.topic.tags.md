---
id: 8bc9b3f1-8508-4d3a-a2de-be9f12ef1821
title: Tags
desc: ''
updated: 1626987080189
created: 1601910058115
stub: false
---

## Summary

Dendron includes support for tags. You can put a tag in your note by typing:

```md
#example.my-example
```

The tag will look like #example.my-example

In Dendron, tags are just a shorthand for writing [[tags.example.my-example]]. You can format your tags as wikilinks if you want to do something regular tags can't, for example adding an alias.

## Details
To find all notes that were tagged with this tag, you can click on it while holding down `Ctrl`, press `Ctrl+Enter` on your keyboard, or use the "Dendron: Goto Note" command.
Once you open the tag, expand the Backlinks section on your editor to see everywhere this tag was used.

You might have already noticed this when you opened the tag, but tags are just notes under the `tags.` hierarchy. This has a lot of benefits:

* You can use commands like [[Rename Note|dendron.topic.commands#rename-note]] or [[Refactor Hierarchy|dendron.topic.commands#refactor-hierarchy]] to rename or reorganize your tags, and it will update all notes where these tags were used.
* You can add content to your tag and it will show up when you hover over the tag in the editor, or when you publish it. Try clicking on the example tag above!
* You can organize your tags into hierarchies (like `#cuisine.ethiopian` and `#cuisine.swedish`).
* You can link tags together by adding links in their content.

## Autocomplete (intellisense)

Tags support autocomplete (intellisense), but tag notes must be created for
autocomplete to work. To create a tag note, `Ctrl+click` on a tag, or select the
tag and use "Dendron: Goto Note" command.

## Pretty Tags

You can further customize the look of tags in the preview by using the following CSS modification.

![[dendron.guides.tips#stylized-tags-using-custom-css:#*]]

