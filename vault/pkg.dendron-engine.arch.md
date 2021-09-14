---
id: ebf58a4a-18f8-498d-95eb-04d856c0a000
title: Dendron Engine Architecture
desc: ''
updated: 1631209065252
created: 1619535999168
---


## Initialization

Dendron initialization process

```mermaid
sequenceDiagram
    participant client
    participant engine
    participant store
    participant fileSystem
    participant noteParser
    client->>engine: initialize
    engine->>store: initialize
    store->>fileSystem: fetchAllnotes
    fileSystem->>store: sendNotes;
    store->>noteParser: parseAllNotes
    noteParser->>store: parsedNotes
    store->>engine: return status
    engine->>client: return status
```

- [Video walkthrough](https://youtu.be/nWJCP1DR5Io)


## Related
- [[Dendron Startup|pkg.dendron-engine.internal.startup]]
- [[Lookup|pkg.dendron-engine.t.lookup]]
