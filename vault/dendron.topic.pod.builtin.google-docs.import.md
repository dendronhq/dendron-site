---
id: tO6EFCHd2rw350zh
title: Import
desc: ''
updated: 1627611958868
created: 1626365094547
---


## Summary

The Google Docs Import Pod imports contents of a google document to a specified hierarchy in your selected vault as a note.
The import config has additional options to import comments in the doc.

## Authentication

To communicate with the Google Docs, you'll need an OAuth token with the right scopes.
Follow the steps below to create a token. The scopes you require depends on the type of data you're trying to request, you can even select all and you are good to go.

- Go to [Google Oauth2 Playground](https://developers.google.com/oauthplayground/) and select the `Google Docs API v1` with scope as `https://www.googleapis.com/auth/documents` and `https://www.googleapis.com/auth/drive` and click on Authorize APIs button. Authorize yourself by selecting your google account from the oauth popup.


-  On Step 2 in Oauth2 Playground, click on exchange authorization code for tokens. Copy the access token and store it in the  dendron gdoc import pod config file. 




## Example

- config
```yml
src: gdoc
vaultName: vault
owner: dendronhq
token: ***
hierarchyDestination: gdoc.topic
documentId: ***
importComments: {enable: true, format: text}
confirmOverwrite: true
```

- Original 
```
└── vault
    └── projects
          ├─one.md
          ├─two.md
  
```
- After

```
  └── vault
        ├── projects.one.md
        ├── projects.two.md
        └── gdoc.topic.dendron

```

- Imported Doc

```md
---
title: Dendron
documentId: ***
revisionId: ***
---
## Dendron

Dendron is an **open-source**, **local-first**, **markdown-based**, **note-taking** tool built on top of [VSCode](https://code.visualstudio.com/). Like most such tools, Dendron supports all the usual features you would expect like :

- Tagging
- Backlink
- graph view
- split panes.

 Dendron helps you get notes back out and works better the more notes you have.

 ### Comments

 - John Doe: @adam can we add use cases in the note 

	 replies to this comment: 

	 - Adam Smith: Yes, added.
```

### Configuration

![[dendron.topic.pod.import#configuration,1]]


## token
- description: google doc personal access token
- type: string
- required: true

## hierarchyDestination
- description: name of hierarchy to import into
- type: string
- required: true

## documentId

- description: document Id of doc to import
- type: string
- required: true

document id can be referenced from the url of the google doc.
In the below url 14o1AVg10CBbLlqNqBrCz4HkR is the _document id._
`
https://docs.google.com/document/d/14o1AVg10CBbLlqNqBrCz4HkR
`


## importComments

- description: import comments from the doc in text or json format
- required: false
- type: object
- example: : {enable: true, format: text} 
- **enable**

      type: boolean
      default: false
      required: true

 - **format**

      type: string
      default: json
      accepted formats: json/text

## confirmOverwrite

- description: get confirmation before overwriting existing note
- type: boolean
- required: false
- default: true