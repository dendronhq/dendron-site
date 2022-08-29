---
id: 6d21fd60-e564-4a55-b4c0-d2586293b908
title: Blogging
desc: ''
updated: 1661757922445
created: 1614547017272
---

![[dendron://dendron.dendron-site/dendron.topic.publish-legacy#deprecated,1]]

You can use Dendron for blogging. To do so, add [[collection specific options|dendron.topic.publish-legacy.configuration#collection-options]] to your frontmatter. 


### Using Collections

You can use the following frontmatter:

```yml
has_collection: true
sort_by: date
sort_order: reverse
```

The original hierarchy :

```sh
blog.thoughts.md
blog.thoughts.2021-02-03-foo.md
blog.thoughts.2021-02-03-bar.md
...
```

### Using Journal Notes
You can also designate a journal hierarchy as a collection. 

```yml
has_collection: true
sort_by: date
sort_order: reverse
skipLevels: 2
```

The original hierarchy :

```sh
dendron.md
dendron.journal.md
dendron.journal.2021.02.01.md
dendron.journal.2021.02.02.md
dendron.journal.2021.02.03.md
...
```