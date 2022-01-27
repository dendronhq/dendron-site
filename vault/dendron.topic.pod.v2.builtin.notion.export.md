---
id: cYOPq6mbS7lqeSdCVgjlU
title: Export
desc: ''
updated: 1643092590391
created: 1642167410506
---

## Summary

The [Notion](https://www.notion.so/) export pod can export notes authored in Dendron to a Notion workspace.

You can view the example video [here](https://www.loom.com/share/d3d68896c1534405b2664b0d50806280)

## Workflow

Using Notion Export Pod is a two step process
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
1. Copy the "Internal Integration Token" on the next page and save it to the Notion service connection config file. 
You can configure a service connection file by running `Dendron: Configure Service Connection` command.

Step 2: Share a database with your integration
Integrations don't have access to any pages (or databases) in the workspace at first. A user must share specific pages with an integration in order for those pages to be accessed using the API.
Start from a new or existing page in your workspace. Click on the Share button and use the selector to find your integration by its name, then click Invite.

### Choosing the parent page

The exported notes cannot be attached at a workspace level and require a parent page.
The Pod will automatically query for pages on your Notion workspace and provide you with a drop down list of pages for you to choose as a Parent. The most recently created page will appear at the top of the dropdown.

## Configuration

In addition to the [[Common Properties|dendron://dendron.dendron-site/dendron.topic.pod.v2.config#common-properties]], the Notion Pod has the following properties:

### podType

This is actually a common property, but for the Notion Export pod this **must** be set to `NotionExportV2`.

### connectionId (required)

The ID of an notion connection. See [[Notion Connection|dendron://dendron.dendron-site/dendron.topic.pod.v2.connections.notion]]

### parentPage (required)

The ID of page in Notion which you want as parent of your exported notes. 