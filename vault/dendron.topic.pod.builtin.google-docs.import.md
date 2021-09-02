---
id: tO6EFCHd2rw350zh
title: Import
desc: ''
updated: 1630579300814
created: 1626365094547
---


## Summary

The Google Docs Import Pod imports contents of a google document to a specified hierarchy in your selected vault as a note.
The import config has additional options to import comments in the doc.

## Workflow

There are several steps to using the gdoc import pod:
1. Authentication
1. Choosing Which Document To Import
1. Choosing the Destination

### Authentication

There are currently two ways to authenticate - through an OAuth workflow (currently in Beta) and a manual workflow.

#### OAuth Flow (Beta)

_**Note**: This feature is currently in Beta and requires your Google Account to be onboarded to our service. If you're interested in testing out this feature, please contact us at support@dendron.so or on Discord._

After getting your Google Account onboarded with us, simply run the GDoc import pod and you'll be redirected to your browser to sign in with your Google Account. Once signed in, your credentials will be saved and you can run the Import Pod again to import your docs.

#### Manual Workflow

To communicate with the Google Docs, you'll need to manually obtain OAuth token with the right scopes.
Follow the steps below to create a token. The scopes you require depends on the type of data you're trying to request, you can even select all and you are good to go.

1. Go to [Google Oauth2 Playground](https://developers.google.com/oauthplayground/) and select the `Google Docs API v1` with scope as `https://www.googleapis.com/auth/documents` and `https://www.googleapis.com/auth/drive` and click on Authorize APIs button. Authorize yourself by selecting your google account from the oauth popup.
1. On Step 2 in Oauth2 Playground, click on exchange authorization code for tokens. Copy the access token and store it in the  dendron gdoc import pod config file. 

### Choosing which Document to Import

The Pod will automatically query for documents on your Drive and provide you with a drop down list of documents for you to choose to import. Currently, only one file can be imported at a time. If it takes the engine too long to query for your documents (maybe if you have a lot of documents on your drive), then the operation will time out. In this case, you can manually enter the name of the document you want to import.

### Choosing the Destination

The final prompt in the workflow asks for the destination location of the note to put the gdoc contents in.  By default, the name of the document is populated.  If you import this document repeatedly, then the destination will be pre-populated with the path you picked during the previous import.


## Example

- config
```yml
src: gdoc
vaultName: vault
owner: dendronhq
accessToken: ***
refreshToken: ***
expirationTime: 1630569771.749
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

## Configuration

![[dendron.topic.pod.import#configuration,1]]

### Additional Google Doc Pod Specific Configurations:

### accessToken
- description: google doc personal access token
- type: string
- required: true

### refreshToken

- description: google doc refresh token. This will be used to automatically refresh the access token once it passes its expiration time.
- type: string
- required: false

### expirationTime

- description: Expiration Time of the Access Token. It is not necessary to manually modify this value.
- type: "number"
- required: false

### importComments

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

### confirmOverwrite

- description: prompt user for confirmation before overwriting existing note
- type: boolean
- required: false
- default: true