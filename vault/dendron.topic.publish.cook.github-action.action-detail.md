---
id: 25uh0il60900u5xxnqfyqku
title: GH Action Detail
desc: ''
updated: 1653577431767
created: 1653577416327
---

### 1st Run
1. Restore Node modules cache
    - This step restores all nodejs dependencies and nextjs dependencies 
    - The first time this is run, you will get a cache miss and see a message like this `Cache not found for input keys: Linux-dendronv2-99cb51177fdf291e959222d9bb8562af297a2b2733d7ab2441e4c17504a7cfbd-3`
    ```
    - dendron.yml
    - notes/
    ```
1. Install dependencies
    - This will install the `dendron-cli`
    ```
    - dendron.yml
    - notes/
    - node_modules/
    ```
1. Initialize or pull nextjs template
    - This checks if the dendron nextjs template is installed. if it is, pull down latest version. if not, clone the repo
    ```
    - dendron.yml
    - notes/
    - node_modules/
    - .next/
    ```
1. Restore Next cache
    - Since this is our first time running it, this will fail. You'll see something like `Cache not found for input keys: Linux-nextjs-61b2b3e4dca74cdd33dbcc112da684f69e6c0c225d6b169b28ed92b7dc2649dd-833f8bae681e0dd5c8e5e263681e4f9007a682048c151983788e12dc60d184de`
    ```
    - dendron.yml
    - notes/
    - node_modules/
    - .next/
    ```
1. Export notes
    - After notes are exported, next will generate its own cache file which will be saved for future runs
    ```
    - dendron.yml
    - notes/
    - node_modules/
    - .next/
        - .next/cache
    ```
### 2nd Run
1. Restore Node modules cache
    - cache key will be hit, restoring `node_modules` and `.next`
    ```
    - dendron.yml
    - notes/
    - node_modules/
    - .next/
    ```
1. Restore Next cache
    - cache key will be hit, restoring `.next/.cache`
    ```
    - dendron.yml
    - notes/
    - node_modules/
    - .next/
        - .next/cache
    ```

