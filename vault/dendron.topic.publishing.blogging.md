---
id: 6d21fd60-e564-4a55-b4c0-d2586293b908
title: Blogging
desc: ''
updated: 1614547467552
created: 1614547017272
---


You can use Dendron for blogging. To do so, add [[collection specific options |dendron.topic.publishing.configuration#collection-options]] to your frontmatter. 


For example, the following frontmatter results in the page [here](https://www.kevinslin.com/notes/b9bc4aa1-4369-446d-91a9-13d4f2a4b8e5.html).

```yml
has_collection: true
sort_by: date
sort_order: reverse
```

You can also designate a journal hierarchy as a collection. The following frontmatter is responsible for the page [here](https://www.kevinslin.com/notes/2c7bc8d3-a017-4614-84c8-0ecd23250146.html)

```yml
has_collection: true
sort_by: date
sort_order: reverse
skipLevels: 2
```

The original hierarchy is

```sh
dendron.md
dendron.journal.md
dendron.journal.2021.02.01.md
dendron.journal.2021.02.02.md
dendron.journal.2021.02.03.md
...
```