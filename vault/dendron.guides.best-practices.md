---
id: 8d3c8142-7481-40da-9a5c-69a3d4bab697
title: Best Practices
desc: ''
updated: 1619103364269
created: 1619103186948
---

## Naming

We recommend using all lower [[kebab case|dendron.concepts#kebab-case]] when naming your files. For example, `awesome apples` would be `awesome-apples`. This would be stored in your file system as `awesome-apples.md`. 

Dendron will auto-generate a human friendly title based on the last part of your hierarchy. By default, Dendron uses [title.sh](https://title.sh/) to generate titles based on your note name. Titles generated are consistent with the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html). Dendron will replace `-` with a ` ` when generating titles. 

If you end up adding custom capitalization to your file name, Dendron will not attempt to generate a title but return the last part of your hierarchy as is.

Some examples below:

```
- awesome-apples.md -> title: Awesome Apples
- fruit.awesome-apples.md -> title: Awesome Apples
- fruit.Custom-Capitalization -> title: Custom-Capitalization
```

