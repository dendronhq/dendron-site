---
id: 53dd4b9b-d3a7-4398-9511-b7a281039f9d
title: Dendron Publishing
desc: ''
updated: 1615999527801
created: 1608181727204
---

## Repo
- https://github.com/dendronhq/dendron-11ty


## Cook

- check all notes that are published
```bash
cat /tmp/notes.log | jq '[. | to_entries[] | .value ] | .[].fname'
```

- check all published notes using search-data 
```bash
cat assets/js/search-data.json | jq '.[].hpath'
```
