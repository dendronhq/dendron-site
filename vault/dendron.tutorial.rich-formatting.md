---
id: 8DCgctK-RMD4EeHjC5_hI
title: Rich Formatting
desc: ''
updated: 1636524684640
created: 1625573403967
nav_order: 3
---

Dendron supports an extended Markdown syntax, which provides a lot of options for rich formatting. Take a look at some examples in this note to see what's possible.  Have the preview pane opened (`Dendron: Show Preview`) to see how these will get rendered.

#### Markdown Formatting Options

|Formatting|Example|
|:---|:---:|
|Bold|**Hello World**|
|Italics|_Hello World_|
|Strikethrough|~~Hello World~~|
|Highlight|==Hello World==|

#### Images

> 🌱 Copy any image onto your clipboard, and then use the `Paste Image` command while focused in your editor pane. This will automatically create a link for you and copy the file contents into the assets directory in your workspace.

Sample Image Link: `![Dendron Logo](assets/images/logo_small.png)`

Result:
![Dendron Logo](https://org-dendron-public-assets.s3.amazonaws.com/images/tutorial-logo_small.png)

#### Equations

Math typesetting can be written through [Katex](https://wiki.dendron.so/notes/b1919663-cc48-4054-b0cf-4b26fe444907.html)


$$
\int_{-\infty}^\infty f(x)dx
$$

#### Diagrams

Various types of diagrams are supported with the [mermaid](https://mermaid-js.github.io/mermaid/#/) visualization syntax.

##### Flow Charts

```mermaid
graph TD;
    A-->B;
    A-->C;
```

##### Sequence Diagrams

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### Note References

You can link to a specific section of a different note and have the content in-lined into the current note.

![[Join the community of Dendrologists|dendron.tutorial.conclusion#join-the-community-of-dendrologists:#^discord-block-ref]]

[[References Docs|dendron.topic.note-reference]]

### Next Steps

- [[Conclude the Tutorial|dendron.tutorial.conclusion]]
