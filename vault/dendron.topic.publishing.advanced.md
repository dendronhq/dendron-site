---
id: e9f26a4b-ddce-41b3-9619-8f4f64761f86
title: Advanced
desc: ''
updated: 1600564193281
created: 1600564193281
stub: false
nav_order: 4
---

# Advanced

### Exclude from publication

To exclude a page from publication, you can add the following to the frontmatter. If you set `publishByDefault: false` for a hierarchy, this needs to be set to `true` to publish

```yml
...
published: false
```

### Exclude from indexing

To tell google to not index a page, you can add the following tag to the frontmatter. You can also have this as a default for a given hierarchy by setting `noIndexByDefault: true` in the site config.

```yml
...
noindex: true
```


### Exclude line from publication

Sometimes, you just want to keep a few lines private while publishing the rest of your vault. You can do that with `Local only`. In order to mark a line as `Local Only`, add the following markdown comment at the end of the line: `<!--LOCAL_ONLY_LINE-->`

```markdown
Hello World!  <!-- Will be published -->

This is a secret <!--LOCAL_ONLY_LINE--> <!-- won't be published -->
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/pod-local.gif)
