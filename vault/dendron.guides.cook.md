---
id: 401c5889-20ae-4b3a-8468-269def4b4865
title: Cookbook
desc: ""
updated: 1665988468741
created: 1595952505024
nav_order: 6.1
toc: true
---

## Basics

### Launch the command palette

This lets you execute commands inside VS Code

- Linux: `Ctrl+Shift+P`
- macOS: `Cmd+Shift+P`
- Windows: `Ctrl+Shift+P`

### Manual Install

To manually install a custom version of Dendron, first obtain the Dendron vsix file (most likely, Kevin will send you a dropbox link 😅). Afterwards, you can install it by the extended options in the extensions pane.

![Manual Instal](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/trouble.install.gif)

### Checking Logs

You can diagnose most problems by checking the logs. You can view the logs using the [[Open Logs Command|dendron.ref.commands#dendrondev-open-logs]]

#### Server Logs

Dendron has two sets of logs - client and server. The client logs you can access using the `Open Logs Command`. You can access the server logs by following the tutorial [here](https://www.loom.com/share/3d04cb1d6f904ac099d73e083e62ee2f).

#### Logs from previous session

Dendron has logs for the current session and the previous session.

You can get logs of the previous session by following instructions [here](https://www.loom.com/share/2ca740e8e09b4aaf927d8098e2e6dec0)

## Mobile Support

> A comparison of mobile apps for Markdown can be found on the [Dendron blog: Best Mobile Note-Taking Apps for Markdown](https://blog.dendron.so/notes/fDCVPEo3guCFWPdxokXHU/). For a more in-depth comparison of text editors focusing on iOS devices, also take a look at [this iOS Text Editor roundup by Brett Terpstra](https://brettterpstra.com/ios-text-editors/).

Dendron does not have a dedicated mobile client at this time. There are numerous mobile Markdown editors that can be used to view and edit Dendron notes. Some popular options are listed below, based on feedback in the Dendron community:

- [GitJournal](https://github.com/GitJournal/GitJournal)
- [iA Writer](https://ia.net/writer)
- [Obsidian](https://obsidian.md/mobile)
- [Notebooks App](https://www.notebooksapp.com/) (iOS, MacOS, and PC)
- [Epsilon Notes](https://play.google.com/store/apps/details?id=com.ekartoyev.enotes&hl=en_US&gl=US) (Android only)
- [Neutrinote](https://neutrinote.wordpress.com/) (Android only)
- [Noteless](https://github.com/redsolver/noteless) (Android only). This _just_ received experimental Dendron support so worth trying out.
- [Markor](https://github.com/gsantner/markor) (Android only)
- [Scarlet Notes](https://github.com/BijoySingh/Scarlet-Notes) (Android only)
- [Working Copy](https://workingcopyapp.com/) (iOS only)
- [Editorial](https://omz-software.com/editorial/) (iOS only)
- [Taio](https://taio.app/) (iOS only)
- [Textastic](https://www.textasticapp.com/) (iOS only)

Most mobile apps do not have git support. Here are some third-party guides that have been written up to assist:

- If you are on iOS, you can follow the instructions [here](https://victoria.dev/blog/a-remote-sync-solution-for-ios-and-linux-git-and-working-copy/) to sync your git backed Dendron with any note taking tool on iOS.
- If you are on Android, you can read [this writeup](https://mstempl.netlify.app/post/working-with-git-on-android/) by a user on having Git Sync on Android devices. [MGit](https://manichord.com/projects/mgit.html) is also recommended for Android users when it comes to syncing your git backed Dendron with any note taking tool on Android.

If using GitHub with SSH keys or access tokens, here is an alternative: SSH keys that have project/repo-limited permissions as [Deploy Keys on GitHub](https://docs.github.com/en/developers/overview/managing-deploy-keys#deploy-keys) (with `Allow write access` enabled). This prevents users from setting up SSH keys with user-wide permissions across GitHub, making it more secure and limited.

## Vaults

### Adding a Remote Vault to your Dendron Workspace

If you haven't already done so, install Dendron and initialize a workspace by following the instructions [[here|dendron._ref.install]].

Use the [[Add existing Vault | dendron://dendron.dendron-site/dendron.topic.vaults#add-existing-vault]] command via the [[command palette|dendron.concepts#command-palette]], select remote vault, and paste the git url of the vault that you like to add

### Converting a local vault to a remote vault

1. If your vault is committed along with your workspace, use `git rm --cached` to remove it from the workspace repo and use `git init` to initialize your vault as a standalone repo
1. Navigate to the root of your vault and initialize a git repository
   ```sh
   cd {vaultName}
   git init
   git add .
   git commit -m "initial commit"
   git add origin {your origin}
   git push -u origin HEAD
   ```
1. Run [[Configure (yaml)|dendron.ref.commands#configure-yaml]] and add the git [[remote|dendron.topic.vaults#remote]] urls to the repo. the entries should look like what you see below

![[dendron://dendron.dendron-site/dendron.topic.vaults#^NiCCqLjTG2nbM6Qi:#*]]

### Create note in a specific vault

There are multiple ways to create a note in a specific vault

- open a note that is already in the vault (all vaults have a `root` note by default so thats a quick way to select a particular vault)
- use the [[vaultSelectionMode|dendron.topic.lookup.modifiers#vaultselectionmode]] modifier on lookup to select a new vault on creation

### Renaming a Vault

We currently haven't implemented a command to do but you can use the current manual steps to implement.

1. Update the [[name|dendron.ref.config#name]] property in `dendron.yml`
1. Update the name property on the corresponding [[workspace folders|dendron.ref.config.vscode-config#folders]]
1. Replace any [[cross Vault Links|dendron.topic.links#cross-vault-links]] with the name of the new workspace

- ctrl search `dendron://{vaultName}` and replace it with the new vaultName

1. Run `> Reload Window` when these steps are completed

### Private Vaults

You can create private vaults that won't be published or initialized when others clone the workspace. To do this, run [[Add Existing Vault | dendron://dendron.dendron-site/dendron.topic.vaults#add-existing-vault]] and add your private vault as a local vault. After it's been added, run [[Configure (yaml)|dendron.ref.commands#configure-yaml]] and set the [[visibility|dendron.ref.config#visibility]] of the vault to "private" in `dendron.yml`.

```yml
vaults:
  - fsPath: vault
    visibility: private
```

## Publishing

### How do I exclude certain vaults from being published?

## Transferring

### Export your notes as a PDF

Our current guidance is to use [pandoc](https://pandoc.org/) to export your notes.
Pandoc supports a wide variety of export formats including pdf, doc, and HTML.

## Workspace

### Access Dendron Workspace from multiple windows

There are usually two scenarios:

1. you want two windows of different workspaces
2. you want two windows of the same workspace

- for 1, create a new window and initialize a new workspace in some directory that is different from your first workspace
- for 2, you have a few options
  - a. initialize a new workspace in a different directory. open the settings using `> Open User Workspace settings (JSON)`. change the folder to the path of your vault in the initial workspace. run `> Reload Window` for the changes to take affect
  - b. use a different version of VS Code to open the same workspace (eg. VS Code Insiders, VSCodium, VS Code regular). you need to do this because VS Code will re-use the same window when opening the same workspace

### Add Dendron to application launchers on Linux desktops

Linux desktop systems often include application launchers where you can see the applications installed on your computer and launch them. You can add an entry for Dendron to the application launcher by creating a file at `~/.local/share/applications/dendron.desktop`, then pasting the following contents into it.

```
[Desktop Entry]
Comment=A personal knowledge management tool that grows as you do.
Exec=code --no-sandbox --new-window ~/Dendron/dendron.code-workspace
Name=Dendron
Type=Application
StartupWMClass=code
Keywords=dendron;notes;pkm;
Categories=Utility;TextEditor;
```

Make sure the path to the Dendron workspace matches your setup. Then, run `update-desktop-database ~/.local/share/applications/` in a terminal or restart your system. You should now see Dendron in the launcher under the Utilities section, or if you search for Dendron in your launcher. Launching Dendron from here will launch VS Code with your Dendron workspace open.

### Change the sorting order in the Outline Panel

Click the three little dots next to outline to change the sorting order. You can sort by **Name** (alphabetical) or **Position** (linear order)

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/cook.vscode.outline.jpg)

### Drag and Drop files into Dendron

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/cook.drag.jpg)

To drag files into Dendron, open the workspace pane on the side to drag and drop. We currently recommend you only do this for non-Markdown files that you want to link to inside your vaults.

### Find Installed Extensions

1. Navigate to the extensions pane
2. Search for `@installed`

### Use Dendron with a current folder

1. start by initializing a workspace

![[dendron.ref.commands#initialize-workspace:#*]]

2. by default, Dendron uses a `vaults` folder underneath your workspace to store you vaults. Update your [[settings|dendron._ref.settings]] and change `vault` to the path of your current notes (alternatively, you can also copy your current notes into `vault`)

```
"folders": [
    {
        "path": "vault"
    },
    ...
],
```

3. Run `> Dendron: Reload Index` for Dendron to pick up changes

### Using Multiple Workspaces

The easiest current way to do this is to have multiple instances of VS Code open and toggle between the two. If you are very adventurous, you might even have [multiple versions of VS Code](https://www.kevinslin.com/notes/7f197479-279e-4b1e-9edd-21bf2da423b0.html#dendron-setup) for different contexts.

We are working on being able to run Dendron without the need for a workspace. You can track the progress of this on this [issue](https://github.com/dendronhq/dendron/issues/322)

### Updating a workspace

## Other

### Syncing Dendron between devices

#### Using git and GitHub

One of our users published a great guide on this [here](https://mstempl.netlify.app/post/dendron-git/)

### Use Dendron on a separate instance of VS Code

You can use Dendron on a separate instance of VS Code by launching it with the [command line flags](https://code.visualstudio.com/docs/editor/command-line#_advanced-cli-options) `--user-data-dir` and `--extensions-dir`:

```
code --user-data-dir=/path/to/code-dendron --extensions-dir=/path/to/code-dendron-ext
```

### Star/Favorite/Pin Notes

Dendron doesn't currently provide native support for this. You can download the [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks) extension to achieve the functionality in the interim.

### Analyze notes using Elasticsearch

- WARNING: this is advanced material

With Dendron, you can export your notes using the [[JSON Export Pod|dendron.topic.pod]] and then use that data to analyze your notes using Elasticsearch.

This video walkthrough walks you through that process.
<a href="https://www.loom.com/share/c85c7c81d8aa4e97b4bbdf2245ca8f9b"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/c85c7c81d8aa4e97b4bbdf2245ca8f9b-with-play.gif"> </a>

You can download the repo used in this walkthrough from [GitHub](https://github.com/dendronhq/sample-elasticsearch-demo)

Pre-requisites:

- download and run Elasticsearch

Steps:

1. Export your data using the JSON Export Pod
2. Create an index in Elasticsearch (we're using version 7.9)

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

```bash
cat /path/to/exported/notes.json | jq -c '.[] | {"index": {"_index": "notes", "notes", "_id": .id}}, .' | curl -H'Content-Type: application/json' -XPOST localhost:9200/_bulk --data-binary @-
```

4. Profit!

Some potential use cases you can do using Elasticsearch and Dendron:

- filter your notes by any logical combination of custom attributes
- make a heatmap of notes created by date
- get a full list of tags used across your vault and on a per hierarchy basis
- anything else you can thin of :)

Some useful additional links:

- [Elasticsearch docs](https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html)
- [Elasticsearch for VSCode extension](https://marketplace.visualstudio.com/items?itemName=ria.elastic)

### Convert timestamps in the frontmatter

Currently, Dendron notes show timestamps in epoch time which is not the most parsable for humans. You can use the [timestamp converter extension](https://marketplace.visualstudio.com/items?itemName=Stalinbalraj.timestamp-converter) order to see a human representation of said timestamp.

### Use Dendron with Anki

- [Anki for VSCode](https://marketplace.visualstudio.com/items?itemName=jasew.anki)

### WebClipper

You can use the [markdownload-markdown-web](https://chrome.google.com/webstore/detail/markdownload-markdown-web/pcmpcfapbekmbjjkdalcgopdkipoggdi) extension to clip content as Markdown from Chrome.

### Regex

To get familiar with regex syntax, try [regexr](https://regexr.com/) is a great place to experiment with different queries.

### Automatically Convert Casing on a Note

You can use the [string converter](https://marketplace.visualstudio.com/items?itemName=adamwalzer.string-converter) extension to change `[[normal note with spaces]]` to `[[normal-note-with-spaces]]` as well as a series of other text transformations.

### Displaying Dendron tree in its own side bar icon

You can drag the Dendron tree view, or any other view, to the side bar, it will get its own container.

<a href="https://www.loom.com/share/1fe35abb30d544aea6468db6eeef2974"> <img style="" src="https://cdn.loom.com/sessions/thumbnails/1fe35abb30d544aea6468db6eeef2974-with-play.gif"> </a>
