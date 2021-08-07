---
id: 8bc9b3f1-8508-4d3a-a2de-be9f12ef1821
title: Tags
desc: ""
updated: 1628316726909
created: 1601910058115
stub: false
---

## Hashtags

Dendron includes support for tags. You can put a tag in your note by typing:

```md
#example.my-example
```

The tag will look like #example.my-example.

In Dendron, tags are just a shorthand for writing `[[#example.my-example|tags.example.my-example]]`. You can format your tags as wikilinks if you run into any limitations with tags.

### Details

To find all notes that were tagged with this tag, you can click on it while holding down `Ctrl`, press `Ctrl+Enter` on your keyboard, or use the "Dendron: Goto Note" command.
Once you open the tag, expand the Backlinks section on your editor to see everywhere this tag was used.

You might have already noticed this when you opened the tag, but tags are just notes under the `tags.` hierarchy. This has a lot of benefits:

-   You can use commands like [[Rename Note|dendron.topic.commands#rename-note]] or [[Refactor Hierarchy|dendron.topic.commands#refactor-hierarchy]] to rename or reorganize your tags, and it will update all notes where these tags were used.
-   You can add content to your tag and it will show up when you hover over the tag in the editor, or when you publish it. Try clicking on the example tag above!
-   You can organize your tags into hierarchies (like `#cuisine.ethiopian` and `#cuisine.swedish`).
-   You can link tags together by adding links in their content.

### Tags in sentences

One thing to remember: You can't include things like spaces, quotation marks,
question marks in hashtags. For #example, see how "these #tags" don't include
the punctuation marks around them. This makes it natural to use tags within
sentences.

### Multi-vault

Tags can't specify which vault they are in. This is not a problem most of the
time, Dendron will find your tag wherever it is. But if you have the
same tag in multiple vaults and you want to clarify which one, you can use a
[[Cross Vault Link|dendron.topic.links#cross-vault-links]] instead since tags
are just wikilinks.

### Autocomplete (intellisense)

Tags support autocomplete (intellisense), but tag notes must be created for
autocomplete to work. To create a tag note, `Ctrl+click` on a tag, or select the
tag and use "Dendron: Goto Note" command.

### Custom tag colors

Tags are automatically assigned colors to help you identify them easily. If you
don't like the automatic colors, you can always override what color the tags
should be by setting the `color` in the frontmatter of the tag note. For
example, the following tag is #blue, and you can click on it to see how to customize the color.

## Frontmatter tags

You can also put tags in the [[frontmatter|dendron.topic.frontmatter]] of your note. For example, the frontmatter of your note with a tag may look like this:

```
---
id: QXPVbTIZTch9hUOVtScsu
title: My Note
desc: ""
updated: 1628065917670
created: 1628065917670
tags: my.example
---
```

This will link the note to the tag `tags.my.example`. To add multiple tags, you can write them in multiple lines:

```
tags:
    - my.example
    - other.one
```

Or, within a single line:

```
tags: [my.example, other.one]
```

## Pretty Tags

You can further customize the look of tags in the preview by using the following CSS modification.

![[dendron.guides.tips#stylized-tags-using-custom-css:#*]]
