---
id: 401c5889-20ae-4b3a-8468-269def4b4865
title: Cook
desc: ''
updated: 1595952505024
created: 1595952505024
stub: false
nav_order: 8.9
---
# Cookbook

### Use Dendron with a current workspace

Copy the settings in this [sample workspace](https://github.com/dendronhq/dendron-template/blob/master/dendron.code-workspace) file. Dendron uses your first folder as the index for where it will look for notes.

```
"folders": [
    {
        "path": "vault"
    },
    ...
],
```

Rename your current workspace file to `dendron.code-workspace`. Use the [Dendron: Change Workspace](dendron.topic.commands) command and set the workspace to the directory containing `dendron.code-workspace`.

### Star/Favorite/Pin Notes

Dendron doesn't currently provide native support for this. You can download the [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) extension to achieve the functionality in the interim.

### Launch the command bar

This lets you execute commands inside vscode

- Linux: `Ctrl+Shift+P`
- macOS: `Cmd+Shift+P`
- Windows: `Ctrl+Shift+P`

### Analyze notes using elasticsearch

- WARNING: this is advanced material 

With Dendron, you can export your notes using the [[JSON Export Pod|dendron.topic.pod]] and then use that data to analyze your notes using elasticsearch.

This video walkthrough walks you through that process.
<a href="https://www.loom.com/share/c85c7c81d8aa4e97b4bbdf2245ca8f9b"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c85c7c81d8aa4e97b4bbdf2245ca8f9b-with-play.gif"> </a>

You can download the repo used in this walkthrough from [github](https://github.com/dendronhq/sample-elasticsearch-demo)

Pre-requisites:
- download and run elasticsearch 

Steps:

1. Export your data using the JSON Export Pod
2. Create an index in elasticsearch (we're using version 7.9)
```json
PUT notes
{
  "mappings": {
    "properties": {
      "created": {
        "type":   "date",
        "format": "epoch_millis"
      }
    }
  }
}
```
3. Pipe exported JSON into the newly created index.
```sh
cat /path/to/exported/notes.json | jq -c '.[] | {"index": {"_index": "notes", "notes", "_id": .id}}, .' | curl -H'Content-Type: application/json' -XPOST localhost:9200/_bulk --data-binary @-
```
4. Profit!

Some potential use cases you can do using elasticsearch and Dendron:
- filter your notes by any logical combination of custom attributes
- make a heatmap of notes created by date
- get a full list of tags used across your vault and on a per hierarchy basis
- anything else you can thin of :) 

Some useful additional links: 
- [elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html)
- [elasticsearch vscode extension](https://marketplace.visualstudio.com/items?itemName=ria.elastic)

### Convert timestamps in the frontmatter

Currently, Dendron notes show timestamps in epoch time which is not the most parsable for humans. You can use the [timestamp converter extension](https://marketplace.visualstudio.com/items?itemName=Stalinbalraj.timestamp-converter) order to see a human representation of said timestamp.


### Use Dendron with Anki

- [Anki for VSCode](https://marketplace.visualstudio.com/items?itemName=jasew.anki)
