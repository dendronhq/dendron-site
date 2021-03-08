---
id: 5f23182f-2936-4790-8d04-00bd502df723
title: Navigation
desc: ''
updated: 1609883540998
created: 1609563320271
---
Dendron has two navigation sections: the nav bar on the left and the table of contents on the bottom of each note. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.nav.jpg)

## Sort Order

## Navigation Side Bar

Nav order is controlled, in order of precedence, by the following: 

- custom [[nav_order|dendron.topic.publishing.configuration#nav_order]] property in the frontmatter
- alphabetically by title

The navbar will first show all notes with the `nav_order` property before showing notes alphabetically. Notes with the [[nav_exclude|dendron.topic.publishing.configuration#nav_exclude]] attribute will not be shown in the navbar

## Table of Contents

The nav order for the table of contents that is generated at the bottom of each node works in the same way as the navigation side bar.

## Nav Exclude

To exclude an item from navigation, you can set the [[nav_exclude|dendron.topic.publishing.configuration#nav_exclude]] on the note frontmatter. This will exclude it from both the navigation side bar and the table of contents.

