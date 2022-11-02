---
id: ba97866b-889f-4ac6-86e7-bb2d97f6e376
title: Markdown
desc: ''
updated: 1666853241598
created: 1598673110284
---

## Summary

Markdown is how you edit text in Dendron. It's a lightweight markup language. 


## Markdown Features

This article is a brief introduction to [GitHub Flavored Markdown writing](https://guides.github.com/features/mastering-markdown/).


## What is Markdown?

`Markdown` is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like `#` or `*`.

## Syntax guide

### Headers

```markdown
# This is an <h1> tag

## This is an <h2> tag

### This is an <h3> tag

#### This is an <h4> tag

##### This is an <h5> tag

###### This is an <h6> tag
```

### Emphasis

<!-- prettier-ignore -->

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

~~This text will be strikethrough~~
```

### Lists

#### Unordered List

```markdown
- Item 1
- Item 2
  - Item 2a
  - Item 2b
```

#### Ordered List

```markdown
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

#### Definition List

```markdown
Item 1
: Definition for Item 1

Item 2
~ Definition for Item 2
~ Another definition for Item 2, with a [link](http://www.example.com)
```

### Images

```markdown
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
```

### Links

```markdown
https://github.com - automatic!
[GitHub](https://github.com)
```

### Blockquote

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.
```

### Horizontal Rule

```markdown
Three or more...

---

Hyphens

---

Asterisks

---

Underscores
```

### Inline code

```markdown
I think you should use an
`<addr>` element here instead.
```

### Fenced code block

You can create fenced code blocks by placing triple backticks <code>\`\`\`</code> before and after the code block.

#### Syntax Highlighting

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

For example, to syntax highlight Ruby code:

````
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
````

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

### Task lists

```markdown
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

## Extended Syntax

These are non-standard Markdown syntax used in Dendron. Everything here is both available in Dendron's preview as well as when publishing.

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

<!-- prettier-ignore -->

The following markup

```markdown
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

Will look like the below table when rendered

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

<br/>

You can create a table from existing content using `> Markdown Shortcuts: Add Table` command.

![add table shortcut](https://raw.githubusercontent.com/mdickin/vscode-markdown-shortcuts/master/media/demo/table_with_header.gif)

- TIP: for additional table operations, try the [text tables extension](https://marketplace.visualstudio.com/items?itemName=RomanPeshkov.vscode-text-tables)

### Abbreviation

The HTML specification

```markdown
*[HTML]: Hyper Text Markup Language
*[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

### Footnotes

```markdown
Content [^1]

[^1]: Hi! This is a footnote
```

### Frontmatter Variable Substitution

You can use variables defined in your note frontmatter inside your note. The syntax is `{{ fm.VAR_NAME }}` where `VAR_NAME` is the name of your variable. The `fm` designates that you want to use a frontmatter variable.

Here is the list of all available default variables:
- `fm.id`: id of the current note.
- `fm.title`: title of the current note.
- `fm.desc`: description of the current note.
- `fm.created`: when the current note has been created.
- `fm.updated`: when the current note has been last updated.
- `{{ fm.VAR_NAME }}`any custom frontmatter variable set by the user.

Note that `fm.created` and `fm.updated` are pre-formatted with the default format option set in your workspace setting.
(See [[dendron.defaultTimestampDecorationFormat|dendron.ref.config.vscode-config#dendrondefaulttimestampdecorationformat]])

Here is an some examples of how you can use variable substitution

Given a Dendron note and format option set to `DATETIME_MED`,

```markdown
---
id: M9rOflmkDfdDRoyyt9KHa
title: Variables
desc: 'This is a demo note on variable substitution'
updated: 1636093082718
created: 1636078412308
alist: ["one", "two", "three"]
stage: "🌱"
---

> this note is in it's {{ fm.stage }} stage
>
> Created: {{ fm.created }}
>
> Updated: {{ fm.updated }}

**{{ fm.desc }}**
## {{ fm.title }}

- {{ fm.alist[0] }}
- {{ fm.alist[1] }}
- {{ fm.alist[2] }}
```

When this note is rendered in preview / publishing, it would be equivalent to rendering the Markdown below:

```markdown
> this note is in it's 🌱 stage
>
> Created: 11/5/2021 
>
> Updated: 11/5/2021

**This is a demo note on variable substitution**
## Variables

- one
- two
- three
```

### Diagrams 

Dendron lets you create Diagrams using [mermaid](https://mermaid-js.github.io/mermaid/#/)
Create a code block with mermaid support to use mermaid. The following block turns into the diagram below.

<pre>
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
</pre>


```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### Folding
You can create special folded sections with the below syntax.

```markdown
<details>
  <summary>Click to expand!</summary>

  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>
```
This is how it looks

<details>
  <summary>Click to expand!</summary>

  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>

_Note: To properly render the inner content, make sure there is a blank line below the summary tag with no white-spaces._

- TIP: we don't officially support images when folding. there's a workaround to make it work by adding extra spaces as mentioned [here](https://github.com/dendronhq/dendron/issues/2814)

## VS Code Specific Commands

### Markdown Smart Select

This allows you to expand and shrink selections of Markdown using a keyboard shortcut.

- Expand: ⌃⇧⌘→
- Shrink: ⌃⇧⌘←

Selection applies to the following, and follows a traditional hierarchical pattern:

- Headers
- Lists
- Block quotes
- Fenced code blocks
- Html code blocks
- Paragraphs

![preview](https://code.visualstudio.com/assets/updates/1_51/markdown-smart-select-demo.gif)

> Image by Microsoft

## Compatibility with CommonMark

[CommonMark](https://commonmark.org/) is _a strongly defined, highly compatible specification of Markdown_

When possible, Dendron will try to stay to `CommonMark` spec for syntax. That being said, many of the features we have (eg. block based note references) have no common mark equivalent which is why we've had to invent new syntax.

You can use the [[Markdown pod|dendron.topic.pod.builtin.markdown]] to migrate both individual notes and your entire vault to a CommonMark compatible format.

## Other Resources

- [GitHub Flavored Markdown (GFM)](https://github.github.com/gfm/)
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Daring Fireball: Markdown Basics](https://daringfireball.net/projects/markdown/basics)
- [Markdown Guide](https://www.markdownguide.org/)

## References

The content of this page is derived from the following sources:

1. [Markdown Preview Enhanced docs](https://shd101wyy.github.io/markdown-preview-enhanced/#/markdown-basics) published under the [University of Illinois/NCSA Open Source License](https://github.com/shd101wyy/markdown-preview-enhanced/blob/master/LICENSE.md)
2. [Markdown Shortcuts docs](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts) published under the [MIT License](https://marketplace.visualstudio.com/items/mdickin.markdown-shortcuts/license)

