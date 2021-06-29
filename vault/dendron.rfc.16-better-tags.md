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


## Details

## Example

## Tradeoffs

Hashtags are a pretty general syntax, reserving that syntax entirely for tags could be detrimental to future features (for example integration with Github issues, which look like `#123`).

## Discussion

Please use the [RFC 16 Discussion Board](https://github.com/dendronhq/dendron/discussions/885) for any feedback.