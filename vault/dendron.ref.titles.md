---
id: 554023aa-e21d-4082-8239-a1032ac54e61
title: Titles
desc: ''
updated: 1609783328053
created: 1609783322468
---
We recommend using all lower kebab case when naming your files. For example, `awesome apples` would be `awesome-apples`. This would be stored in your file system as `awesome-apples.md`. 

Dendron will auto-generate a human friendly title based on the last part of your hierarchy. By default, Dendron uses [title.sh](https://title.sh/) to generate titles based on your note name. Titles generated are consistent with the [Chicago Manual of Style](https://www.chicagomanualofstyle.org/home.html). Dendron will replace `-` with a ` ` when generating titles. 

If you end up adding custom capitalization to your file name, Dendron will not attempt to generate a title but return the last part of your hiearchy as is.

Some examples below:

```
- awesome-apples.md -> title: Awesome Apples
- fruit.awesome-apples.md -> title: Awesome Apples
- fruit.Custom-Capitalization -> title: Custom-Capitalization
```

