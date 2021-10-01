---
id: zIBErZ8tT7oU6nm0JESFc
title: Export
desc: ''
updated: 1632944918808
created: 1623502889261
---


## Summary

The [Airtable](https://airtable.com/) export pod can transfer contents of a dendron hierarchy to an airtable table. The export config have additional options to export a specific hierarchy.

The pod also maintains a checkpointing file to keep track of the latest file that has been successfully exported to airtable.


### Config Options
All the config options are required.
- `apiKey` :  airtable api key.
- `baseId` :  base ID of airtable base.
- `tableName` : name of resulting table.
- `srcHierarchy` : The src .md file from where to start the sync
- `srcFieldMapping` : mapping of airtable fields with the note


## Example

- Create a airtable table with fields with single/Long text field type  : 

Note ID | Title | Summary
---------|----------|---------



- config
```yml
dest: workspace # eg. appGB8ES***
tableName: Novels
srcHierarchy: books
apiKey: ***
baseID: ***
srcFieldMapping: {Note ID : id, Title : title, Summary: body}
```

- Layout
```
└── vault
    ├── books.harrypotter.md
    └── books.alchemist.md
```

- Output

| Note ID       | Title       | Summary                                                                                                                                                                        |                    |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| 04236d97-d45b | Harrypotter | Harry Potter, a boy who lives in the fictional town of Little Whinging, Surrey with his aunt, uncle, and cousin                                                                |                    |
| 07736d97-d45b | Alchemist   | The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town | about its meaning. |



 