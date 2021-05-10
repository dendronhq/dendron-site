---
id: 06751374-7982-4df2-b30b-92b10aba733a
title: Process
desc: ""
updated: 1620668014109
created: 1619524509981
---

```mermaid
graph TD;
    A[New Issue] --> B["type.bug"];
    A[New Issue] --> C["type.feature"];
    C --> X["status.info-needed"];
    X--get info -->A;
    C--> A1[triage to feature area]
```
