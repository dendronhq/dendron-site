---
id: NT1cFX6DRkTnzcWwduj2I
title: 16 Better Tags
desc: ''
updated: 1624922522303
created: 1624922522303
---

## Goals

Tags support in Dendron right now is somewhat limited. Added features and better UX can make tags more useful, improving note discoverability.

## Context

## Proposal

### Hashtags

Hashtags should be recognized as tags. This makes it easier to input tags. For example, the following:

```markdown
Beatae porro aut vero aut in molestiae voluptas. #foo
```

Should have the same effect as:

```markdown
Beatae porro aut vero aut in molestiae voluptas. [[tags.foo]]
```

### Frontmatter tags
Being able to add tags in the frontmatter provides a more structured place for the tags, and also makes it possible to hide the tags from the body of the text itself.

```markdown
. . .
created: 1624922522303
tags: foo, bar
---
```

For example, for backlinks this should have the effect of adding `[[tags.foo]] [[tags.bar]]` to the note, except that the links of these tags will not appear inside of the text.

In preview and HTML, frontmatter tags should be displayed at the end of the note, like blog and news websites where tags will appear in a separate box at the start or end of a page.
This keeps tags from disrupting the text, while allowing users to discover other content with these tags.

### Tag colors

Setting colors for tags would make it quicker to recognize them at a glance, and would improve organization and aesthetics. Dendron should automatically generate distinct colors for tags, and users should be allowed to customize the tag colors.

Tag colors should be set in the frontmatter of the tag note:

```
desc: ''
tagColor: '#ff8524'
```

The custom colors should allow hexadecimal RGB (`#FFAA88`), RGB (`rgb(24,135,240)`), RGBA (`rgba(255, 255, 255, .5)`), HSL (`hsl(100, 100%, 50%)`), HSLA (`hsla(235, 100%, 50%, .5)`), as well as [[color keywords|https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords]].
These colors are all widely supported in browsers, which means they should work both within publishing and preview without extra effort.
Optionally, we can warn users for color options that are incorrect or not widely supported.

### Tags in the graph view

* Filter notes in the graph view by the tags they have
* Tag many notes at once by selecting all of them (using frontmatter tags)

### Tags in the tree view

Tags should get a special symbol in the tree view to set them apart, and the treeview should highlight them using the configured colors.
Tags should also get sorted to the top or the bottom of the tree view to make them easier to find at a glance.

### Hiding tags in publishing

Tags should follow existing Dendron mechanisms for hiding notes, such as setting `published: false` in the frontmatter.
Once a tag is hidden, this should not only hide the tag note, but also hide this tag from being rendered in the frontmatter tags.

## Details

### Tag organization

It should be possible to organize tags using the hierarchy, such as `#quis.quidem`, `#quis.temporibus`.
If a parent tag in the hierarchy has a [[tag color|#tag-colors]] set or is [[hidden|#hiding-tags-in-publishing]], this should propagate to child tags.

Organizing tags makes it possible to set colors for a group of tags, and also allows the use of existing features like rename and refactor to control the tags.
## Example

## Tradeoffs

Hashtags are a pretty general syntax, reserving that syntax entirely for tags could be detrimental to future features (for example integration with Github issues, which look like `#123`).

## Discussion

Please use the [RFC 16 Discussion Board](https://github.com/dendronhq/dendron/discussions/885) for any feedback.
