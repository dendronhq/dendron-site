---
id: yhQTZLLzywUOzeTNyYfe9
title: '2021-11-14 Office Hours'
desc: ''
updated: 1641252239781
created: 1636988796598
documentId: 1FEEo_0aNiNfnW_tzo58m_HAM8wI_YMujHmKUaNBSzBk
revisionId: >-
  ALm37BW3NK5aEGvoaSs6zMT-fQeNs2Z-mBK9NOObYVz9gX0r8gQ8rM5ewIBfCPxh1my4-a19Xf4dwM5QxITL4g
commentsUpdated: true
---
##  Office hours

November 14 - Office Hours

- Upcoming Changes
  - Native Workspaces
  - Better lookup
  - Publishing fixes
- CLI interface for Dendron
  - Plug in to Dendron
  - Moving & Renaming notes using the engine
    - NoteCLICommand -> [https://github.com/dendronhq/dendron/blob/81e42fc6564489f836028c00122000d3954cc1ab/packages/dendron-cli/src/commands/notes.ts#L56](https://github.com/dendronhq/dendron/blob/81e42fc6564489f836028c00122000d3954cc1ab/packages/dendron-cli/src/commands/notes.ts#L56)
    - Developer docs will get a re-org
    - CLI Development Process: [https://wiki.dendron.so/notes/gxnwBlVKDivSDH1daqejk.html](https://wiki.dendron.so/notes/gxnwBlVKDivSDH1daqejk.html)
    - If you raise a feature request, I can add docs and guidance on the CLI
- Faster time to note
  - You can launch Dendron engine in the background
  - launchEngineServer: [https://wiki.dendron.so/notes/23a1b942-99af-45c8-8116-4f4bb7dccd21.html#launchengineserver](https://wiki.dendron.so/notes/23a1b942-99af-45c8-8116-4f4bb7dccd21.html#launchengineserver)
```

dendron launchEngineServer --wsRoot ~/Dendron/ --port 3005

```

- Making indexing faster
  - Two things
    - Persistent engine, startup once, and reuse 
    - Local db based storage: outsource indexing to something like pouchdb or sqlite

