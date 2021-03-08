---
id: 60c03500-98e4-4a02-a31e-2702b4068a88
title: Schemas
desc: ''
updated: 1608494693843
created: 1608494693843
---
Dendron also provides lookup for [[schemas|dendron.topic.schema]]. To lookup a schema, use `> Dendron: Lookup Schema` or the `Cmd+Shift+L` (`Ctrl+Shift+L` on windows and linux) shortcut to bring up the schema lookup.

### Finding Schemas

The process for finding schemas using Dendron is the same as that for finding notes. One lookup to rule them all. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-lookup.gif)

### Creating Schemas

Just like with notes, if you enter the name of a schema that does not exist, Dendron will create it for you.

Specifically, Dendron will create `{value}.schema.yml` in your vault. At this point, you are free to edit the schema. After you're satisfied with the result, you'll need to run [[> Dendron: Reload Index|dendron.topic.commands]] for it to take affect. 

- NOTE: if you get an error after running `Reload Index`, it is most likely because your YAML is malformed. You can paste it in [yaml lint](http://www.yamllint.com/) to check that you are using the correct yaml syntax. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/schema-create.gif)

### Deleting Schemas

The process for deleting schemas using Dendron is identical to deleting notes.

