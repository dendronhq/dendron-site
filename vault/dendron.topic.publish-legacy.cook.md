---
id: 1d9c4d11-1536-449b-af6b-a4a1acb203e4
title: Cook
desc: ''
updated: 1645120327322
created: 1611351130281
---

![[dendron://dendron.dendron-site/dendron.topic.publish-legacy#deprecated,1]]

### Publishing on Vercel

To publish with vercel, you can use [this repo](https://github.com/dendronhq/workspace-vercel-sample) as a template. Output of this template is [here](https://workspace-vercel-sample.vercel.app/)

1. Fork the above repository
2. Deploy in vercel with the following values
    - build override
    ```bash
    npm run dendron-cli -- buildSiteV2 --wsRoot .  --stage prod
    ```
    - output override: `docs`
3. After deployment, update the `dendron.yml` `siteUrl` field to the url of your domain

    
### Custom Domain on GitHub Pages

1. Set the url as well as the `githubCname` property
    ```yml
    site:
        siteUrl: 'https://wiki.dendron.so'
        githubCname: wiki.dendron.so
    ```
1. Make sure to configure this on the provider side to create an Alias record to your cname.
