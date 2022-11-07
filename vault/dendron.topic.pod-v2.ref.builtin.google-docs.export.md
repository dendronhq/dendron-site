---
id: hA02kromgLKegxaG2VHKE
title: Google Doc Export Pod
desc: ''
updated: 1667859403603
created: 1640102463646
---

## Summary

The Google Docs Export Pod exports notes authored in Dendron to google docs. It overwrites an existing google doc if the note has `documentId` in frontmatter, else creates a new document. The title of the new google document will be same as the filename. 
 You can view the example video [here](https://www.loom.com/share/5a1fbc85d77040ae8c1dacd7c0395cad)

## Requirements
- Your Google Account must be onboarded to our service.
    - > _**Note**: This feature is currently in Beta and requires your Google Account to be onboarded to our service. If you're interested in testing out this feature, please [sign up for the beta here](https://airtable.com/shrP1yKjIDPFU4wHN)
- You must enable the `Export V2` functionality from your dendron.yml. See [[dendron.topic.pod-v2.quickstart]]

## Side Effects
-  this pod will add `documentId`, `revisionId` and `uri` in the frontmatter of your note. `uri` points to the URL of the editor for the google doc created, making the note a [[proxy note|dendron.topic.special-notes#proxy-notes]].

## Limitations

Since this is still an experimental feature, there are some features that are still missing:
- exporting images.
- exporting links with anchor.
## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod-v2.config#common-properties]], the Google Docs has the following properties:

### podType

This is actually a common property, but for the Google Docs Export pod this **must** be set to `GoogleDocsExportV2`.

### connectionId (required)

The ID of an google docs connection. See [[Google Docs Connection|dendron.topic.pod-v2.connections.google]]

### parentFolderId

The folder ID where the document should be exported. Upon exporting a document, Dendron asks for a destination folder. The folder ID `root` exports the document outside of all folders. Click [here](https://www.loom.com/share/75d1f0396cc041519c7060931b6dd080) to see video.


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
# NOTE: When a setting is missing from this config, you will get a UI prompt to select a value for that setting while running the export pod. For this particular exportScope setting, if you would rather not be prompted and always have the same exportScope, simply uncomment the line below.
# exportScope: Note

# description: type of pod
# type: string
# required: true
podType: GoogleDocsExportV2

# description: ID of the Google Docs Connected Service
# type: string
# required: true
connectionId: dendron-gdoc

# description: ID of parent folder in google drive
# type: string
parentFolderId: 1RqFIRc-iQDqpGwKRUv_
```
