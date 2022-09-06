---
id: 0qvgnwf7ox5skwv7e95b3w3
title: categoryId
desc: 'ID of the category where the discussion will be searched'
updated: 1662438880607
created: 1662438690584
---

> Please use the [configuration tool](https://giscus.app) to figure out your category ID.  
> When you select your public repository from the tool, you will be given a dropdown of available Github Discussions categories in your repository.  
> When you select the category from the dropdown, the category ID will be automatically be generated.

- type: `string`
- default: N/A
- required: `false`

## Description

{{fm.desc}}.

## Example

```yml
  publishing:
    giscus:
      categoryId: "1234567890"
```