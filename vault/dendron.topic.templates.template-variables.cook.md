---
id: jafjxz17pe2wt4vpndu6jhv
title: Cook
desc: ''
updated: 1654562119842
created: 1654561844106
---

### Using Frontmatter Variable Substitution

[[Frontmatter Variable Substitution|dendron://dendron.dendron-site/dendron.topic.markdown#frontmatter-variable-substitution]] lets you substitute values from the frontmatter into your note when viewed in the preview and publishing. There's a problem if you try to use it in a template

Take the following example:
    - NOTE: `...` is meant to represent text that is not shown to keep the example short

```md
---
...
color: 
---

Tim ate a {{fm.color}} apple
```

When used as a template, the resulting note would look like the following:

```md
---
...
color: 
---

Tim ate a apple
```

When a template is applied, it looks at all `{{ }}` blocks and tries to resolve them. If you do not want the template to do this, you will need to escape your templates using the followng syntax

```md
---
...
color: 
---

Tim ate a {{{ {{ }}}fm.color{{{ }} }}} apple

```

If you try to apply this as a template, you now get the expected result


```md
---
...
color: 
---

Tim ate a {{fm.color}} apple
```
