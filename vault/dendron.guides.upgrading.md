---
id: 21c1288a-6fb8-42f5-90c0-9b3cc7d872ad
title: Upgrading
desc: ''
updated: 1631833309340
created: 1595010631247
stub: false
nav_order: 1.1
---
VS Code auto updates outdated extensions periodically but if you want to trigger it manually, you can click the extensions tab and look for Dendron. If there's an update available, it will be done at this point.

<a href="https://www.loom.com/share/796a10cab7204733877e7f708b6aaaca">
<img style="" src="https://cdn.loom.com/sessions/thumbnails/796a10cab7204733877e7f708b6aaaca-with-play.gif"> 
</a>

To check what version of Dendron you're on, you can open the lookup bar and look for the version number in the title. 

## Bundled Extensions

Upgrading a recommended extension goes through the same process as upgrading Dendron. It should happen automatically but you can manually trigger it by looking for the extension by name in the extension tab. 

You can find the list of all bundled extensions [[here|dendron.topic.extensions]].

## Dendron CLI 

To upgrade the CLI and 11ty, you need to manually run the following commands in your workspace:

```
npm install --save @dendronhq/dendron-cli@latest
```

