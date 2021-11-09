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

NOTE: The reason for this is because markdown links & markdown preview both declare a dependency on dendron extension. This dependency exists because we have an ordering requirement (dendron needs to start first and initialize the engine and the extensions connect to it) Vscode prevents you from uninstalling an extension that has active dependents, hence the sequence above. 

