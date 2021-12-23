---
id: e45dc24b-b673-4144-a905-4a1c88378e28
title: Uninstall
desc: ''
updated: 1607889337490
created: 1607889245545
---
To uninstall Dendron, uninstall the following extensions in order.

1. Dendron Markdown Links
2. Dendron Markdown Preview Enhanced
3. Dendron

NOTE: The reason for this is because Markdown links & Markdown preview both declare a dependency on Dendron extension. This dependency exists because we have an ordering requirement (Dendron needs to start first and initialize the engine and the extensions connect to it) VS Code prevents you from uninstalling an extension that has active dependents, hence the sequence above. 

