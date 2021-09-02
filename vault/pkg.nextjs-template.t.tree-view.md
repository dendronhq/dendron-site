---
id: dHRMZ8Qy3t4UUe5AXoyG3
title: Tree View
desc: ''
updated: 1629993695917
created: 1629993468111
---

# Architecture

## Design
- author: [[user.sam]]
- source: [Nextjs template style improvements by namjul · Pull Request #1193 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1193#issuecomment-906258835)

  Based on an obversation from a community member https://discord.com/channels/717965437182410783/739186036495876126/880136154253516851 the question arose which icons are the right one to use for signaling an opening of a submenu (accordion movement).

  There was a study done https://www.nngroup.com/articles/accordion-icons/ to answer that exact question. The result was more or less that there is no significant difference between using the caret, arrow or plus sign but still showing that the caret performed slightly best.

  Based on this I would say we leave it the way it is currently implemented (caret).
