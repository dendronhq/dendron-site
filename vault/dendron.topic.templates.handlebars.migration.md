---
id: rwr5bosqp16r3mv5sgnlvl4
title: Migration
desc: ''
updated: 1654562370793
created: 1654561395846
---

### Updating old style template variables
If you are using old style template variables `<%= VARIABLE =>`, you will need to change them to handlebars style which is `{{ VARIABLE }}`

- replace all `<%=` symbols in your templates with `{{`
- replace all `%>` symbols in your templates with `}}`

- NOTE: if you are confident that you don't use these symbols anywhere outside of templates, you can do a find/replace across your workspace to replace all occurences at once

### Updating frontmatter variables

![[dendron://dendron.dendron-site/dendron.topic.templates.template-variables.cook#using-frontmatter-variable-substitution,1]]
