---
id: mwDT040wz5nBKtctjvNrQ
title: Build
desc: ''
updated: 1635706538721
created: 1635705939396
---


## Cleanup

```sh
echo "removing all deps..."
./bootstrap/scripts/cleanup.sh
echo "re-installing..."
yarn setup
```