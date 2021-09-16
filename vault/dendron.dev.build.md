---
id: 12Fdg5uE6nZdukrdLNRdm
title: Build
desc: ''
updated: 1631749324206
created: 1631029707711
---


## Cook

### Building from clean repo

Sometimes you'll need to rebuild the workspace from scratch. Run the following command to do so

```
./bootstrap/scripts/cleanup.sh
yarn setup
```


### Building without uploading to sentry

```sh
export SKIP_SENTRY=1 yarn build:patch:local
```