---
id: svoot2ea4v5imu6rdrwuwmu
title: Localhost
desc: ''
updated: 1661744582404
created: 1661744257398
---

This goes over hosting a Dendron published site on your local machine. 

## Prerequisites
Follow instructions from [[dendron://dendron.dendron-site/dendron.topic.publish.quickstart]] and have publishing setup locally

## Steps
1. Build the metadata for your notes
    ![[dendron://dendron.dendron-site/dendron.topic.publish.cook.common#build-notes]]
1. Build the HTML for your notes
    ```
    cd .next && npm run build
    ```
1. Run the local server
    ```
    npm run start
    ```

This will start a local server on `localhost:3000`. Unlike the dev server which you get when you run `npx dendron publish dev`, this is a production server that optimizes all your pages and makes sure to serve everything in seconds. 

> NOTE: when you want to sync your latest changes, you'll need to run the above steps again. If you host using `localhost`, we recommend setting up a cron job to pull, build and restart your local server so that your notes are always up to date!