---
id: 5f23182f-2936-4790-8d04-00bd502df723
title: Sort-order
desc: ''
updated: 1609564707527
created: 1609563320271
---

# Sort Order


## Navigation Side Bar

Nav order is controlled, in order of precedence, by the following: 
- custom [[nav_order|dendron.topic.publishingv2.configuration#nav_order]] property in the frontmatter
- alphabetically by title

The navbar will first show all notes with the `nav_order` property before showing notes alphabetically. Notes with the [[nav_exclude|dendron.topic.publishingv2.configuration#nav_exclude]] attribute will not be shown in the navbar

## Table of Contents

The nav order for the table of contents that is generated at the bottom of each node works in the same way as the navigation side bar.