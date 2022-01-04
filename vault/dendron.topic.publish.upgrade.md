---
id: cToymvsc33870ctRFeBA8
title: Upgrade
desc: ''
updated: 1637714523949
created: 1637714364533
---

In order to uupgrade to the latest version of publishing, make sure to run the following.

1. Navigate to your workspace
    ```sh
    cd {path/to/workspace}
    ```
1. Go into your .next folder and upgrade to the latest
    ```sh
    cd .next
    echo "reset workspace..."
    git reset --hard
    echo "pulling latest version..."
    git pull
    echo "checking for new dependencies..."
    npm install
    ```
