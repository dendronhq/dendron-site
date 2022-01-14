---
id: hA02kromgLKegxaG2VHKE
title: export
desc: ''
updated: 1641276981484
created: 1640102463646
published: false
---

## Summary

The Google Docs Export Pod exports a Dendron note to google docs. It overwrites an existing google doc if the note has `documentId` in frontmatter, else creates a new document. The title of the new google document will be same as the filename. 
The google docs export pod supports exporting a note, selection in a note, data from clipboard and exporting an entire hierarchy. 

## Requirements
- Your Google Account must be onboarded to our service.

_**Note**: This feature is currently in Beta and requires your Google Account to be onboarded to our service. If you're interested in testing out this feature, please contact us at support@dendron.so or on Discord._

## Side Effects
-  this pod will add `documentId` and `revisionId` in the frontmatter of your note.
- side effects are not added to the note if the exportScope is either clipboard or selection. It creates a new doc named "Untitled Document" in your google docs.

## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod.v2.quickstart#common-properties]], the Google Docs has the following properties:

### podType

This is actually a common property, but for the Google Docs Export pod this **must** be set to `GoogleDocsExportV2`.

### connectionId (required)

The ID of an google docs connection. See [[Google Docs Connection | dendron.topic.pod.v2.connections.google]]


### Example Complete Configuration
```yml
# description: configuration ID
# type: string
# required: true
podId: gdoc

# description: optional description for the pod
# type: string
description: Export Note to Google Docs

# description: export scope of the pod
# type: string
# required: true
exportScope: Note

# description: type of pod
# type: string
# required: true
podType: GoogleDocsExportV2

# description: ID of the Google Docs Connected Service
# type: string
# required: true
connectionId: dendron-gdoc
```
