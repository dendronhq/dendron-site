---
id: PTj1tVa4wp2PaaJ2bEY6r
title: Export
desc: ''
updated: 1643294457099
created: 1642172814070
---

## Summary

The JSON export pod will take Dendron Markdown and convert it to JSON object.

## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties]], the JSON Pod has the following properties:

### podType

This is actually a common property, but for the JSON Export pod this **must** be set to `JSONExportV2`.

### destination

For single note export(`Note` as export scope), you can choose either clipboard or local file system as destination. Multi Note export prompts for a file picker to select the export destination.

### Example Configuration

```yml
# description: configuration ID
# type: string
# required: true
podId: json-clipboard

# description: export scope of the pod.
# type: string
# NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
exportScope: Note

# description: type of pod
# type: string
# required: true
podType: JSONExportV2

# description: export destination. Specify either a file path or 'clipboard' to export to your clipboard
# type: string
# required: true
destination: clipboard
```


## Example

Below is sample output from an export of a vault with the following files

```
.
└── vault
    ├── root.md
    ├── sample.child.md
    └── sample.md
```

Exported JSON

```json
[
  {
    "id": "root",
    "title": "root",
    "desc": "",
    "type": "note",
    "updated": 1599430958377,
    "created": 1599430958377,
    "fname": "root",
    "data": {},
    "stub": false,
    "custom": {},
    "parent": null,
    "children": [
      "01d712a3-3676-403c-87d7-f3e7057ca43e",
      "01d712a3-3676-403c-87d7-f3e7057ca43e"
    ]
  },
  {
    "id": "01d712a3-3676-403c-87d7-f3e7057ca43e",
    "title": "Sample",
    "desc": "",
    "type": "note",
    "updated": 1599430965554,
    "created": 1599430965554,
    "fname": "sample",
    "data": {},
    "stub": false,
    "custom": {
      "tags": [
        "one",
        "two",
        "three"
      ]
    },
    "parent": "root",
    "children": [
      "1d947d6e-39c4-4d31-9bec-749a467fc514"
    ]
  },
  {
    "id": "1d947d6e-39c4-4d31-9bec-749a467fc514",
    "title": "Child",
    "desc": "",
    "type": "note",
    "updated": 1599430969355,
    "created": 1599430969355,
    "fname": "sample.child",
    "data": {},
    "stub": false,
    "custom": {
      "customProp": "yellow",
      "customStat": 5
    },
    "parent": "01d712a3-3676-403c-87d7-f3e7057ca43e",
    "children": []
  }
]
```
