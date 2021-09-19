---
id: duBTaQ58NeFFsSDF4yoSs
title: 30 Notion Pod
desc: ''
updated: 1631691021416
created: 1631689031756
---


## Goals
[POD](https://wiki.dendron.so/notes/66727a39-d0a7-449b-a10d-f6c438185d7f.html) for working with Notion. 

## Context
Some users are looking to switch from Notion to Dendron, or integrate Dendron as part of their team's Notion workflow.

Rough Prioritization
1. Export Pod - export Dendron notes into their Notion workspace.
2. Import Pod - import pages/database from notion workspace to dendron vault

## Proposal

The [Notion](https://www.notion.so/) export pod that can transfer contents of a dendron vault to a Notion workspace. The export config having additional options to export a specific vault.


## Details

Using Notion Export Pod can be a two step process
1. Authentication
1. Choosing the parent page

### Authentication

The Notion API uses tokens/api-key to authorize requests from integrations.

Step 1: Create an integration: 
1. Go to [My-Integrations](https://www.notion.com/my-integrations).
1. Click the "+ New integration" button.
1. Give your integration a name - I chose "Novels".
1. Select the workspace where you want to install this integration.
1. Click "Submit" to create the integration.
1. Copy the "Internal Integration Token" on the next page and save it to the dendron notion export pod config file.

Step 2: Share a database with your integration
Integrations don't have access to any pages (or databases) in the workspace at first. A user must share specific pages with an integration in order for those pages to be accessed using the API.
Start from a new or existing page in your workspace. Click on the Share button and use the selector to find your integration by its name, then click Invite.

### Choosing the parent page

The exported notes cannot be attached at a workspace level and require a parent page.
The Pod will automatically query for pages on your Notion workspace and provide you with a drop down list of pages for you to choose as a Parent. The most recently created page will appear at the top of the dropdown.

## Example

Here is an example [video](https://www.loom.com/share/3e2972062d6a46639a34d4d60e0e4a54) for an initial draft of Notion export pod.

## Tradeoffs

1. The Notion API has a rate limit of 3 requests per second. If the dendron vault contains a large number of notes, it might take several minutes to export, quite similar to when we manually import notes in Notion, it first uploads all the notes and them import.

1. Exporting Dendron Notes to Notion requires a change in the format of notes. The Markdown needs to be parsed into Notion Blocks for Notion to comprehend it and parse accordingly.

## Discussion

https://github.com/dendronhq/dendron/discussions/1364
