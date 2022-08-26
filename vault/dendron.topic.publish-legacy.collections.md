---
id: e4ea4fe3-0350-492e-863a-687d9fc15993
title: Collections
desc: ''
updated: 1661524401732
created: 1609433737726
---

![[dendron://dendron.dendron-site/dendron.topic.publish-legacy#deprecated,1]]

Sometimes, you might want to publish a page that has all its children listed like in a blog archive format. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.collection.jpg)

This format is called a `collection` in Dendron. You can designate that a page be published as a collection by setting the [[has_collection|dendron.topic.publish-legacy.configuration#has_collection]] property in the note frontmatter. 

## Sorting

Sorting is by the `created` attribute by default. If you wish to set an override, you can add a `date` attribute in `YYYY-MM-DD` format (eg. `date: '2019-08-08'`)

You can control sort order via the [[sort_order|dendron.topic.publish-legacy.configuration#sort_order]] attribute.

## Skip Levels

![[dendron.topic.publish-legacy.configuration#skiplevels,1:#*]]

