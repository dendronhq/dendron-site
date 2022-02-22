---
id: jRi65pVKU5ezEFMsKJy7b
title: Image
desc: 'Set the default image for the published site.'
updated: 1645170013438
created: 1645169899331
---

- type: `object`
- default: N/A 
- required: `false`

## Description
{{fm.desc}}

The image will show up in preview on social media websites. If this isn't configured, no image will be used when sharing links to pages on the published site.

Images can also be set at the note level with [[image|dendron.topic.publish-legacy.configuration#image]], and are configured with the same settings (`url`, `alt`). Images at the note level will override the default image set in `dendron.yml`.

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
