---
id: 1399b5d2-28fb-4077-aa5f-c8edbe52bc5d
title: Preview Your Site
desc: ''
updated: 1614965542494
created: 1610844309611
nav_order: 1
---
## VSCode

The following describes how to prepare your notes for publication using VSCode.

### Pre-requisites

- node version 0.12 or higher, see installation guide [[here|dendron.guides.install-node]]

### Preview your notes

1. Navigate to a Dendron workspace. If you don't have one, you can create one by running `> Dendron: Initialize Workspace` and choosing `empty repository`
2. Run `Site: Preview` to launch the site preview
   - The first time you run this, you will need to install the required dependencies. Hit install to do so
     ![Install dependencies](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.site-preview.jpg)
   - when dependencies are done installing, Dendron will automatically open up a browser with a preview of your published notes (if this is the first time you've run this, VSCode will ask you for permission to open the link)
     ![Dendron Site Preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.preview.jpg)

### Add a note

1. Right now or page is pretty sparse. Lets add some more notes

   - first hit cancel on the site preview
     ![Cancel preview](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.preview-cancel.jpg)
   - add a `hello` note (see instructions for creating notes [[here|dendron.tutorial.notes#creating-your-first-note]])
   - add `How do you do?` in the body so your note looks like the below (note that the id and times will be different)

   ```md
   ---
   id: 7cefc5e1-2073-4327-86f0-a5319385a483
   title: Hello
   desc: ''
   updated: 1610686311651
   created: 1610686307785
   ---

   How do you do?
   ```
2. run `Site: Preview` again to see the results
   ![Dendron site with new note](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.with-hello.jpg)
3. click `hello` to navigate to your new note
   ![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.with-hello.jpg)
4. Alternatively, you can also use the search bar on the top to do a lookup of your note by path or title
   <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/0cf674234df34854a988176b189156b2" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Get ready to publish

When you are ready, you can go to [[publishing your site|dendron.topic.publishing.quickstart.publishing-your-site]] for instructions on announcing your site to the world.

## CLI

The following describes how to prepare your notes for publication using [[Dendron CLI|dendron.topic.cli]].

### Requirements

- pre-requisitie: 
  - node version 0.12 or higher, see installation guide [[here Node|dendron.guides.install-node]]

### Setup

In order to to use the 11ty based publishing, initialize your workspace with the following commands.

```bash
npm init -y
npm install @dendronhq/dendron-cli@latest
npm install @dendronhq/dendron-11ty@latest
```

### Local Preview

After you have your dependencies installed, build your your site using the following command.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage dev --serve
```

This will both compile your site locally and make it available at `localhost:8080` for instant preview. When building your site locally, the pages will be build to `{wsRoot}/build/site`. 

<!--
### Adding metadata

Currently, your site is rather spare. You can add metadata to your site. Open the config by going to `Dendron: Configure (yaml)`. This should take you to the following configuration file

```yaml
version: 1
vaults:
    -
        fsPath: vault
site:
    copyAssets: true
    siteHierarchies:
        - root
    siteRootDir: docs
    usePrettyRefs: true
```

Try adding some of the following properties underneath site
    - replace `{YOUR NAME}` with your actual name

```yml
...
site:
    ...
    title: {YOUR NAME} Digital Garden
    description: This is {YOUR NAME} piece of the internet
    author:  `{YOUR NAME}`
```

When your done, run the pre

-->

### Build for deployment

When you are ready to publish to github, make sure to change the stage to `prod`.

```bash
npx dendron-cli buildSiteV2 --wsRoot .  --stage prod 
```

This will build your site to the path specified by [[siteRootDir|dendron.topic.publishing.configuration#siterootdir-required]] in `dendron.yml`.  By default, this is located at `{wsRoot}/docs`.

![[dendron.topic.publishing.quickstart.preview-your-site#get-ready-to-publish,1:#*]]

