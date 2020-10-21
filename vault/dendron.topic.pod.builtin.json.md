---
id: 28dfaaf8-4944-447c-be30-39c514a80bb0
title: Json
desc: ''
updated: 1603306962029
created: 1603306959022
---

# JSON Pod
- id: `dendron.json`
- coverage
    - ✅ import
    - ✅ export 
    - ✅ publish

### Import

Imports a JSON file as Dendron notes

- format:
  - fname: name of note (without extension)
  - body: contents of note
- eg:
```json
[
  {
    "fname": "one",
    "body": "one body"
  }
]
```

<a href="https://www.loom.com/share/375b64a6597346ec8e6be5ca35049194"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/375b64a6597346ec8e6be5ca35049194-with-play.gif"> </a>


#### Export

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

Video example of exporting to JSON

<a href="https://www.loom.com/share/d49e5f4155af485cadc9cd810b6cab28"> <img src="https://cdn.loom.com/sessions/thumbnails/d49e5f4155af485cadc9cd810b6cab28-with-play.gif"> </a>

### Publish Pod

Publish notre to JSON and copy into clipboard

Sample output
```json
{
    "id": "814f9a2c-f011-4852-a077-c887dd985656",
    "title": "Two",
    "type": "note",
    "desc": "",
    "links": [
        {
            "type": "wiki",
            "from": {
                "fname": "bar.two",
                "id": "814f9a2c-f011-4852-a077-c887dd985656"
            },
            "original": "bar.two.child",
            "value": "bar.two.child",
            "alias": "bar.two.child",
            "pos": {
                "start": 23,
                "end": 40
            },
            "to": {
                "fname": "bar.two.child"
            }
        },
        {
            "type": "wiki",
            "from": {
                "fname": "bar.two",
                "id": "814f9a2c-f011-4852-a077-c887dd985656"
            },
            "original": "bar.two.child",
            "value": "bar.two.child",
            "alias": "bar.two.child",
            "pos": {
                "start": 50,
                "end": 67
            },
            "to": {
                "fname": "bar.two.child"
            }
        }
    ],
    "fname": "bar.two",
    "updated": 1603305706789,
    "created": 1602872932440,
    "parent": "93f6a3ad-2b0f-4843-9b65-961c65de9237",
    "children": [
        "8e19c23d-4335-4684-846e-ca7fed893b51"
    ],
    "body": "\n\n# Inner Note\n\n((ref: [[bar.two.child]]))\n((ref: [[bar.two.child]]))",
    "data": {},
    "custom": {},
    "schema": {
        "schemaId": "bar",
        "moduleId": "bar"
    }
}
```
