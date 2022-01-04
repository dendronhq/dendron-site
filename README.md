[![dendronhq on Twitter](https://img.shields.io/twitter/follow/dendronhq?style=social)](https://link.dendron.so/twitter)
[![Dendron on YouTube](https://img.shields.io/youtube/channel/subscribers/UC8GQLj4KZhN8WcJPiKXtcRQ?style=social)](https://link.dendron.so/youtube)
[![Discord](https://img.shields.io/discord/717965437182410783?color=blueviolet&label=Discord&style=flat-square)](https://link.dendron.so/discord)
[![VS Code Installs of Dendron](https://img.shields.io/visual-studio-marketplace/i/dendron.dendron?label=VS%20Code%20Installs%20of%20Dendron&color=blue&style=flat-square)](https://link.dendron.so/vscode)

[![Dendron site build](https://github.com/dendronhq/dendron-site/actions/workflows/dendron-action.yml/badge.svg)](https://github.com/dendronhq/dendron-site/actions/workflows/dendron-action.yml)
[![URL validator](https://github.com/dendronhq/dendron-site/actions/workflows/url-auditor.yml/badge.svg)](https://github.com/dendronhq/dendron-site/actions/workflows/url-auditor.yml)

# Dendron

![Dendron Logo](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/logo-256.png)

Dendron is an **open-source, local-first, markdown-based, note-taking tool**. It's a personal knowledge management solution (PKM) built specifically for developers and integrates natively with IDEs like [VS Code](https://code.visualstudio.com/) and [VSCodium](https://vscodium.com/).

## Why

Most PKM tools help you create notes but slam into a wall retrieving them once your knowledge base reaches a certain size threshold. That threshold varies with the tool, but virtually everything stops working past 10k notes unless the user was extremely diligent about organizing their knowledge. Past this threshold, entropy wins and every query becomes a keyword search and scrolling through pages of results.

> Dendron's mission is to help **humans organize, find, and work with any amount of knowledge**.

It not only helps you create notes but also retrieve them - retrieval works as well with ten notes as it does with ten thousand.

## How

Dendron builds on top of the past five decades of programming languages and developer tooling. We apply the key lessons from software to the management of general knowledge. 
We make managing general knowledge like managing code and your PKM like an IDE.

## Design Principles

### Developer Centric

Dendron aims to create a world class developer experience for managing knowledge.

Our goal is to provide a tool with the efficiency of Vim, the extensibility of Emacs, and the approachability of VS Code.

What this means:

- dendron features are text centric and composables
- dendron provides the lowest friction interface for working with your knowledge base
- dendron optimizes for efficiency, speed, and keyboard focused ux
- dendron comes with sane defaults and the ability to customize to your liking
- dendron can be extended along any dimension

### Gradual Structure

Dendron extends markdown with structural primitives to make it easier to manage at scale and tooling on top to work with this structure.

Different knowledge bases require different levels of structure - a PKM used for keeping daily journals is different than a company wide knowledge base used by thousands of developers.

Dendron works with any level of structure, meaning you can take free form notes when starting out and gradually layer on more structure as your knowledge base grows more.

### Flexible and Consistent

Dendron is both flexible and consistent. It provides a consistent structure for all your notes and gives you the flexibility to change that structure.

In Dendron, you can refactor notes and Dendron will make sure that your PKM is consistent throughout. This means that you have the best of both worlds: a basic structure for the organization but the flexibility to change it.

## Features

Dendron has hundreds of features. The following is a list of highlights.

### It's just Plaintext

- manage using git
- use git blame to see individual edits
- edit in anything that works on text files (eg. Vim)

<a href="https://www.loom.com/share/67b90027de974702a78753158822e96b">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/67b90027de974702a78753158822e96b.gif">
</a>

### Markdown and More

- create diagrams using mermaid
- write math using katex
- embed notes (and parts of notes) in multiple places using note references

<a href="https://www.loom.com/share/f7e710a3c3454e75a2938d2cbed359d9">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/f7e710a3c3454e75a2938d2cbed359d9.gif">
</a>

### Lookup

- one unified way to find and create notes
- quickly traverse and create new hierarchies

<a href="https://www.loom.com/share/29ec0fe0964648feae08387a7bb8c45f">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/29ec0fe0964648feae08387a7bb8c45f.gif">
</a>

### Schema

- ensure consistency for your knowledge base
- get autocomplete hints when creating new notes
- automatically apply common templates to notes on creation

<a href="https://www.loom.com/share/faee68959647441e86b9c4c183384ce5">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/faee68959647441e86b9c4c183384ce5.gif">
</a>

### Navigation

- explore relationships using backlinks
- navigate to notes, headers and arbitrary blocks
- visualize your knowledge base using the graph view

<a href="https://www.loom.com/share/2d365d965c104af2a1501d789aa2d2b1">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/2d365d965c104af2a1501d789aa2d2b1.gif">
  </a>

### Refactor

- restructure your knowledge base without breaking links
- rename a single note or refactor using arbitrary regex
- rename and move individual sections within notes

<a href="https://www.loom.com/share/b1a84decc53f4639b5bc60c885c56543">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/b1a84decc53f4639b5bc60c885c56543.gif">
</a>

### Vaults

- mix and match knowledge using vaults, a git backed folder for your notes
- use vaults to separate concerns, like personal notes and work notes
- publish vaults on git to collaborate and share knowledge with others

<a href="https://www.loom.com/share/c51e457ac2b0415ca91a8929411add64">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/c51e457ac2b0415ca91a8929411add64.gif">
  </a>

### Publish

- export your knowledge base as a static (nextjs) site
- lookup locally and share globally with generated links
- manage what you publish using fine grained permissions on a per vault, per hiearchy and per note basis

<a href="https://www.loom.com/share/727537e0fd49481cac2accc2b3362fa3">
    <img style="" src="https://org-dendron-public-assets.s3.amazonaws.com/images/727537e0fd49481cac2accc2b3362fa3.gif">
  </a>

## Use Cases

- personal knowledge management (PKM)
- documentation
- meeting notes
- tasks and todos
- blogging
- customer relationship management

## Getting Started

Interested in trying out Dendron? Jump right in with the [Getting Started guide](https://wiki.dendron.so/notes/678c77d9-ef2c-4537-97b5-64556d6337f1.html)!

## Join Us

Dendron wouldn't be what it is today without our wonderful set of members and supporters.

### Community Calendar

We have a bunch of community events that we host throughout the week. You can stay up to date on whats happening by taking a look at our community calendar!

- View and register for upcoming [Dendron Community Events on Luma](https://link.dendron.so/luma)

### Dendron Newsletter

- [Subscribe to the Dendron Newsletter](https://link.dendron.so/newsletter)

Dendron sends out a weekly newsletter highlighting:

- Latest release features
- Latest [Dendron blog](https://blog.dendron.so) posts
- Insights from the [Dendron Discord](https://link.dendron.so/discord) community
- RFC updates and [GitHub discussions](https://link.dendron.so/6WvK)
- and more!

### Join other Dendrologists

There are a variety of ways to connect with Dendron devs, contributors, and other members of the Dendron community:

- Join the [Dendron on Discord](https://link.dendron.so/discord) 
- Follow [Dendron on Twitter (`@dendronhq`)](https://link.dendron.so/twitter)
- Checkout [Dendron on GitHub](https://link.dendron.so/github)
- Read the [Dendron Blog](https://blog.dendron.so/)
- Subscribe to the [Dendron Newsletter](https://link.dendron.so/newsletter)

## Developer Getting Started

If you are interested in contributing to the Dendron source code, please see the [Dendron Development README](https://github.com/dendronhq/dendron/blob/master/docs/README.md) to get started.

## Contributors ✨

Dendron wouldn't be what it is today without help from the wonderful gardeners 👨‍🌾👩‍🌾

If you would like to contribute (docs, code, finance, or advocacy), you can find instructions to do so [here](https://wiki.dendron.so/notes/125c990b-6fe7-4ada-a65f-44cbde8b33f0.html).

## License

Dendron is distributed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3.

See [LICENSE](https://github.com/dendronhq/dendron/blob/master/LICENSE.md) and [NOTICE](https://github.com/dendronhq/dendron/blob/master/NOTICE.md) for more information.

> The above license information is in regard to the Dendron software project in the `dendronhq/dendron` repository. When it comes to this repository, the `dendronhq/dendron-site` repository of documentation, this is released under the [MIT License](https://github.com/dendronhq/dendron-site/blob/master/LICENSE.md)