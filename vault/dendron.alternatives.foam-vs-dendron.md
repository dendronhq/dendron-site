---
id: p5fMTi-6zOyX1TwhL6dM0
title: Foam Vs Dendron
desc: ''
updated: 1626057882250
created: 1626056573800
---

> Dendron is your IDE for General Knowledge, see how it stacks up vs. Foam.

Foam is a personal knowledge management system built as a collection of various tools that can expand its capabilities. Like Dendron, Foam is built on top of VSCode and can benefit from the endless list of extensions existing in the ecosystem. Like Dendron, Foam is open source and local-first. 

## Dendron is built with hierarchy in mind.
- It is possible for you to create notes in a hierarchical fashion in Foam by using dotted file names for your notes like you can do in Dendron.

- However, the tooling for efficiently navigating through the hierarchy is missing in Foam.
- Dendron's features are built so that navigating through your hierarchy comes naturally.
  - Vital features such as [[lookup|dendron.topic.lookup]], [[schemas|dendron.topic.schema]], [[refactor hierarchy|dendron.ref.commands#refactor-hierarchy]] are just a few of the examples of existing features that makes Dendron stand out.
  - You can find the full list of commands that you can use in Dendron for efficient hierarchical note taking [[here|dendron.ref.commands#hierarchies]].
- With a [clearly defined approach](https://www.kevinslin.com/notes/3dd58f62-fee5-4f93-b9f1-b0f0f59a9b64.html) to note taking, Dendron can focus on building new features that we believe will enable more efficient note taking and knowledge management.

## Dendron has better governance over core features.
- Foam depends on a couple of extensions that provide a significant chunk of Foam's capabilities:
  1. [Markdown All-in-one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) for various markdown editing conveniences.
  2. [Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes) to bring features that can be found in various note taking tools such as Notational Velocity, nvalt, Bear, FSNotes, and Obsidian to VSCode.

- While Dendron also makes use of third-party extensions like Foam does, the features that third-party extensions are providing are gradually being implemented into Dendron's core.
- Unlike Foam, Dendron's existing third-party dependencies are updated and released by Dendron as a fork; This frees Dendron from the need for careful orchestration of development cycles of external tools.
  - By doing so Dendron is able to focus attention to more important matters; feature implementation, enhancement, and troubleshooting are not at the mercy of third-party developers with Dendron.
  - On top of having autonomy on our core feature sets, Dendron prioritizes interoperability between other similar tools and third party extensions so that users can extend Dendron's capabilities if they choose to do so.
