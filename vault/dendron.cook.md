---
id: 401c5889-20ae-4b3a-8468-269def4b4865
title: Cook
desc: ''
updated: 1603816563670
created: 1595952505024
nav_order: 8.9
toc: true
---
# Cookbook

## Table of Contents

## Bucket

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

### Use Dendron on a separate instance of VS Code
You can use Dendron on a separate instance of VS Code by launching it with the [command line flags](https://code.visualstudio.com/docs/editor/command-line#_advanced-cli-options) `--user-data-dir` and `--extensions-dir`:
```
code --user-data-dir=/path/to/code-dendron --extensions-dir=/path/to/code-dendron-ext
```

### Mobile Support

Dendron does not have a dedicated mobile client at this time. There are numerous mobile markdown editors that can be used to view and edit Dendron notes. Some popular options are listed below:

- [Git Journal](https://github.com/GitJournal/GitJournal)
- [iA Writer](https://ia.net/writer)
- [Epsilon Notes](https://play.google.com/store/apps/details?id=com.ekartoyev.enotes&hl=en_US&gl=US)
- [Neutrinote](https://neutrinote.wordpress.com/) (Android only)


### WebClipper

You can use the [markdownload-markdown-web](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi) extension to clip content as markdown from Chrome. 

### Regex

To get familiar with regex syntax, try [regexr](https://regexr.com/) is a great place to experiment with different queries.

## VSCode

### Use Dendron with a current folder

- 1. start by initializing a workspace

((ref: [[dendron.topic.commands]]#initialize workspace:#*))

- 2. by default, dendron uses a `vaults` folder underneath your workspace to store you vaults. Update your [[settings|dendron.settings]] and change `vault` to the path of your current notes (alternatively, you can also copy your current notes into `vault`)

```
"folders": [
    {
        "path": "vault"
    },
    ...
],
```
- 3. Run `> Dendron: Reload Index` for Dendron to pick up changes


### Access Dendron Workspace from multiple windows

There are usually two scenarios:

1. you want two windows of different workspaces
2. you want two windows of the same workspace

- for 1, create a new window and initialize a new workspace in some directory that is different from your first workspace
- for 2, you have a few options
    - a. initialize a new workspace in a different directory. open the settings using `> Open User Workspace settings (JSON)`. change the folder to the path of your vault in the initial workspace. run `> Reload Window` for the changes to take affect
    - b. use a different version of vscode to open the same workspace (eg. vscode insider, vscodium, vscode regular). you need to do this because vscode will re-use the same window when opening the same workspace


## Navigation

### Enable Table of Contents

When viewing your notes locally, you can view the toc either from the outline view or by toggling the preview

- from the outline
((ref: [[dendron.topic.workbench]]#outline view,1:#*))

- from the preview
((ref: [[dendron.topic.preview]]#table of contents,1))


## Publishing


### Incremental Builds

You can do incremental builds from Jekyll and Dendron 

- when previewing the site locally, add the `incremental` flag
  ```sh
  bundle exec jekyll s --watch --incremental
  ```
- when building the site, also add an incremental flag
  - NOTE: you'll need `rsync` installed to use the incremental flag
```sh
dendron-cli buildSite --wsRoot {path/to/ws} --vault {path/to/vault} --incremental
```

### Automatically Update Site while editing

The following instructions cover how to update your local preview everytime you make a change to your notes

-  install `dendron-cli`
((ref: [[dendron.related.dendron-cli]]#installation,1:#*))

- have jekyll watch your site-root
```sh
cd {your-site-root}
bundle exec jekyll s --watch
```

- use `nodemon` to watch your vault

```sh
npm install -g nodemon
nodemon --watch {path/to/vault} --ext md dendron-cli buildSite --wsRoot {path/to/ws} --vault {path/to/vault}
```

- NOTE: you can combine this with incremental builds to have the best editing experience


### Publish password protected site using AWS Amplify

You can click [here](https://main.d19svbygngqnpb.amplifyapp.com/) to see a demo of the end result. 

You can access the site with username: `dendron`, password: `hierarchy`.

- NOTE: this requires hosting your site on AWS. For most people, this will end up costing you a few cents a month. 


#### Setup your github repo
1. Create a new github repo using this [template](https://github.com/dendronhq/dendron-amplify-template/generate).
1. In your Dendron workspace, remove the `docs` directory and clone your newly created repository 
    ```sh
    cd {your-workspace}
    rm -r docs
    git clone {your-repo} docs
    ```

#### Setup aws
1. Create an [aws account](https://aws.amazon.com/)
1. Login to your AWS account and go select the [Amplify Service](https://us-west-2.console.aws.amazon.com/amplify/home?region=us-west-2#/)
    - ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/amplify.select.jpg)
1. Follow the instructions [here](https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html) to connect your github with your amplify
1. Follow the instructions [here](https://docs.aws.amazon.com/amplify/latest/userguide/access-control.html) to restrict access to your site.
1. Verify that your site is now password protected

#### Publish your notes

1. Update `siteRepoDir` in `dendron.yml` with the location of your github directory
    - Your `dendron.yml` should look similar to the one below
      ```yml
      site:
          copyAssets: true
          siteHierarchies:
              - root
          siteRootDir: docs
          usePrettyRefs: true
          siteRepoDir: docs
      ```
2. Run `> Dendron: Publish` to build your notes for publication and push your notes
3. Your notes are now published privately behind a password


