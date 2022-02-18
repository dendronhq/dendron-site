---
id: jRi65pVKU5ezEFMsKJy7b
title: Image
desc: 'Set the image for the published site.'
updated: 1645170013438
created: 1645169899331
---

- type: `object`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

The image will show up in preview on social media websites.

### url
Set the image URL.

### alt
Set the alternative text for image.

## Example

```yml
  publishing:
    seo:
      image:
        url: https://org-dendron-public-assets.s3.amazonaws.com/images/blog-mobile-editor-header.png
        alt: A tree with many branches in full bloom
```
