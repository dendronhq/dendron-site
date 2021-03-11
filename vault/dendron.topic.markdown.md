---
id: ba97866b-889f-4ac6-86e7-bb2d97f6e376
title: Markdown
desc: ''
updated: 1615348545027
created: 1598673110284
---
- Notice: all references of `MPE` in this guide is in reference to `Dendron Markdown Preview Enhanced`, the default markdown renderer of Dendron

## Markdown Basics

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

These are non-standard markdown syntax used in Dendron. Everything here is both available in Dendron's preview as well as when publishing.

### Tables

You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

<!-- prettier-ignore -->

```markdown
First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
```

You can create a table from existing content using `> Markdown Shortcuts: Add Table` command.

![](https://raw.githubusercontent.com/mdickin/vscode-markdown-shortcuts/master/media/demo/table_with_header.gif)

### Abbreviation

The HTML specification

```markdown
_[HTML]: Hyper Text Markup Language
_[W3C]: World Wide Web Consortium
The HTML specification
is maintained by the W3C.
```

### Footnotes

```markdown
Content [^1]

[^1]: Hi! This is a footnote
```

### Frontmatter Variable Substitution

You can use variables defined in your note frontmatter inside your note. The syntax is `{{fm.VAR_NAME}}` where `VAR_NAME` is the name of your variable. The `fm` designates that you want to use a frontmatter variable. 

### Nunjuck Templates
- status: EXPERIMENTAL

You can use a limited set of [nunjucks](https://mozilla.github.io/nunjucks/) to customize your notes. 

To enable, you can set the following to true inside your `dendron.yml`.
```yml
useNunjucks: true
```

Once enabled, you'll have access to nunjucks specific constructs. You'll have the same variables available as during [[frontmatter variable substitution|dendron.topic.markdown#frontmatter-variable-substitution]]. Nunjucks templates also get access to the `fname` builtin variable which will be substituted with the filename of the current note. 

Below is an example of what you can do with nunjucks.

- Raw Markdown
```md
## Variables

- special variables: {{fname}}
- special variable as link: [[{{fname}}]]
- special variable as note ref: ![[{{fname}}#footer]]

## Loops

{% for item in fm.alist %}

- Item: {{item}}
  {% endfor %}

## Footer

This is some footer content
```

- Compiled 
![nunjucks example](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/topic.nunjucks.jpg)


Nunjucks will work for both the preview and for publishing. It is still an experimental feature which means it might change in backwards in-compatible ways at any point.

It currently also has the following limitations:
- disables live preview of markdown (you'll need to refresh the markdown to see changes)
- will throw an error if you currently have nunjucks like strings inside your notes `eg. {% %}`
- will throw errors if you refer to an undefined variable `{{ foo }}` 

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

- NOTE: in order to publish diagrams, you'll need to enable [[mermaid in the config|dendron.topic.config#mermaid-optional]]

## VSCode Specific Commands

### Markdown Smart Select

This allows you to expand and shrink selections of markdown using a keyboard shortcut.

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

You can use the [[markdown pod|dendron.topic.pod.builtin.markdown]] to migrate both individual notes and your entire vault to a CommonMark compatible format.

## Other Resources

- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
- [Daring Fireball: Markdown Basics](https://daringfireball.net/projects/markdown/basics)
- [Markdown Guide](https://www.markdownguide.org/)

## References

The content of this page is derived from the following sources:

1. [markdown preview enhanced docs](https://shd101wyy.github.io/markdown-preview-enhanced/#/markdown-basics) published under the [University of Illinois/NCSA Open Source License](https://github.com/shd101wyy/markdown-preview-enhanced/blob/master/LICENSE.md)
2. [markdown shortcuts docs](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts) published under the [MIT License](https://marketplace.visualstudio.com/items/mdickin.markdown-shortcuts/license)

