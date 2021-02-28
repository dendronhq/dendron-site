---
id: e4ea4fe3-0350-492e-863a-687d9fc15993
title: Collections
desc: ''
updated: 1614538231995
created: 1609433737726
---
Sometimes, you might want to publish a page that has all its children listed like in a blog archive format. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.collection.jpg)

This format is called a `collection` in Dendron. You can designate that a page be published as a collection by setting the [[has_collection|dendron.topic.publishing.configuration#has_collection]] property in the note frontmatter. 

You can see an example of it [here](https://www.kevinslin.com/notes/e9c72b4f-adb8-4f15-a6aa-9f9d81538561.html).

## Sorting

Sorting is by the `created` attribute by default. If you wish to set an override, you can add a `date` attribute in `YYYY-MM-DD` format (eg. `date: '2019-08-08'`)

You can control sort order via the [[sort_order|dendron.topic.publishing.configuration#sort_order]] attribute.

## Skip Levels

![[dendron.topic.publishing.configuration#skiplevels,1:#*]]

