---
id: f9b4fc21-7613-4c8a-9257-cec4c06b67f9
title: Migrating from Other Tools
desc: ''
updated: 1642712231393
created: 1603982164242
nav_order: 2.1
---
This note covers migrating your notes from other tools

## Obsidian

1. Use the [[Markdown pod|dendron.topic.pod.builtin.markdown]] to import your notes into Dendron

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/b2cb9672c6814ae5b149eae8e3fbca0b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## OneNote

1. Converting OneNote notebooks to Markdown is not trivial but there are some options:
   - convert manually using [this guide](https://itectec.com/superuser/how-to-export-all-onenote-pages-to-individual-markdown-files/),
   - export locally using [OneNote Md Exporter](https://github.com/alxnbl/onenote-md-exporter) console app (OneNote for Windows 10 is not supported), or
   - export from Microsoft 365 using [OneNote Export](https://github.com/sspeiser/onenote-export) app.
2. Use the [[Markdown pod|dendron.topic.pod.builtin.markdown]] to import your notes into Dendron

## Google Keep

1. Use [vHanda/google-keep-exporter](https://github.com/vHanda/google-keep-exporter) to transform keep files into Markdown
2. Use the [[Markdown pod|dendron.topic.pod.builtin.markdown#import]] to import your notes into Dendron

## Joplin

In 2021, Joplin introduced the ability to [export Markdown + Frontmatter](https://github.com/laurent22/joplin/pull/5465). This makes importing into Dendron a smooth process.

1. In Joplin: `File` -> `Export all` -> `MD - Markdown + Front Matter`
2. In Dendron: use the [[Markdown pod|dendron.topic.pod.builtin.markdown]] to import your notes

## Importing Files

Once Dendron is initialized, to import an individual Markdown file to your Dendron project.

1. drag the Markdown file into VS Code
2. run `Dendron Doctor` so Dendron recognizes the imported file. 

The second step will add some front matter to the head of the file.

