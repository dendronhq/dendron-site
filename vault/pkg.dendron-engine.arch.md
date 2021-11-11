---
id: ebf58a4a-18f8-498d-95eb-04d856c0a000
title: Dendron Engine Architecture
desc: ''
updated: 1636583048065
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

## Modules

The Dendron Engine is organized into modules that are a top level folder

```
- src/  
    - metadata/
        - service.ts
        - index.ts
        - ...
    - migration/
        - service.ts
        - index.ts
        - ...
```

## Related
- [[Dendron Startup|pkg.dendron-engine.internal.startup]]
- [[Lookup|pkg.dendron-engine.t.lookup]]
