---
id: 9c6f600e-f1f3-423b-963a-c71bb081334c
title: Working with Publishing
desc: ''
updated: 1614201760918
created: 1614108618486
---
## Summary

In this module, we'll learn how to publish your notes using Dendron's Managed Publishing. 

You can read about dendron's publishing features [[here|dendron.topic.publishing]].

You can see the repo with the published results [here](https://github.com/kevinslin/tutorial-ws).

### Previewing your notes

1. Run `Site: Preview` to launch the site preview

   - The first time you run this, you will need to install the required dependencies. Hit install to do so
     ![Install dependencies](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/publishv2.site-preview.jpg)
   - when dependencies are done installing, Dendron will automatically open up a browser with a preview of your published notes (if this is the first time you've run this, VSCode will ask you for permission to open the link)

   <div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/42d2042241964dd29c03a6fc985b3ebc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Commit your notes

After you have previewed your notes, you're ready to publish. Dendron publishes notes using github. First, start by committing all your notes to git. 

> Create Integrated Terminal

```
git init
git add .
git commit -m "..."
```

### Create a github repo

If you don't already have an account, create a [github](https://github.com/) account. Afterwards create a new repository by clicking [here](https://github.com/new).

You can title your repository `tutorial-ws`. After Clicking create, you should be taken to the following page. 

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dendronhq_tutorial-ws.jpg)

Copy the text from `push an existing repository` section and run it in the terminal to sync your content with github.

### Publish your github repo

![[dendron.topic.managed-publishing.quickstart#instructions,1:#*]]

Your published site will be available at `https://{username}.dendron.wiki`

You can see an example of what this looks like at <https://hello.dendron.wiki>

