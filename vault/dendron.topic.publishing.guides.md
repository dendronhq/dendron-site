---
id: 1d9c4d11-1536-449b-af6b-a4a1acb203e4
title: Guides
desc: ''
updated: 1611351277601
created: 1611351130281
---


## Vercel

To publish with vercel, you can use [this repo](https://github.com/dendronhq/workspace-vercel-sample) as a template. Output of this template is [here](https://workspace-vercel-sample.vercel.app/)

1. Fork the above repository
2. Deploy in vercel with the following values
    - build override
    ```bash
    npm run dendron-cli -- buildSiteV2 --wsRoot .  --stage prod
    ```
    - output override: `docs`
3. After deployment, update the `dendron.yml` `siteUrl` field to the url of your domain

    
