---
id: 849ee8ee-05a5-47bf-b44d-d7c257117bc4
title: Engine
desc: ''
updated: 1598652399447
created: 1598652399447
---

# Summary

These documents are a high level overview of the code inside Dendron. They are written in a type script like pseudo code. The code blocks are broken down into the following structure:
```
# {Function}  --> what is happening
## Summary    --> high level function call of what is happening
## Flows      --> pseudo code describing high level functions

### {Flow Entry}

- loc: ... --> where code is located. {package}/{basename}
- desc: ... --> description 
```

## Pseudo Code

The code description is typescript-ish. The goal isn't to write valid typescript but be a **summarized** version of the code. The syntax is evolving but here is a loosely documented starting point:
- @: equivalent of `this.`
- $: referencing a global variable
- `...`: code that is omitted because it would clutter the summary
- `=:` magic equality, 

The places where you see this convention being broken (eg. actual valid typescript) are areas where the author got lazy and just copied code into the summary. Try to not do this because that defeats the point of a *summarized* view. That being said, Dendron is all about being pragmatic and taking an iterative approach to things. 

# Initializing the Engine

## Summary
- engine.query
  - store.query
    - FileParser.parse
      ```ts
      allFiles {
        getFileMeta
        toNode
      }
      ```
    - NodeBuilder.buildNoteFromProps
      ```ts
      {
        root, childrenIds = getRoot
        nodes = [root]
        while nodes {
          toNote it
        }
      }
      ```
## Flow

### Initialize the engine
- loc: engine-server/engine.ts
- desc: initial query to index all notes 
```ts
init {
  @query("**/*", "schema", {
    fullNode: false,
    initialQuery: true,
  });

  @query("**/*", "note", {
    fullNode: false,
    initialQuery: true,
  });
}

```
### Query - Engine
- loc: engine-server/engine.ts
- desc: engine will query the store
```ts
async query(scope: Scope, queryString: string, opts?: QueryOpts) {
  opts = _.defaults(opts || {}, {
    fullNode: false
  });
  if (queryString === '**/*') {
    const data = await this.store.query(scope, '**/*', opts);
    this.refreshNodes(data.data);
  }
}
```

### Query - Store
- loc: engine-server/store.ts
  - FileStore.query
- desc: store is swappable. currently, we only support `FileStore`
```ts
  if (@isQueryAll(queryString)) {
      noteProps = @_getNoteAll() {
          allFiles = getAllFiles({
              root: this.opts.root,
              include: ["*.md"]
          })
          return @files2Notes(allfiles) {
              fp = new FileParser({ errorOnEmpty: false })
              data = fp.parse(allFiles);
              return data.map(n => n.toRawProps());
          }
      }
      const data = new NodeBuilder().buildNoteFromProps(noteProps);
  }
```

#### Parse Files

- loc: engine-server/parser.ts
- details: read files
```ts
parse(data: string[]): Note[] {
    fileMetaDict: FileMetaDict = getFileMeta(data) {
      metaDict: FileMetaDict = {};
      _.forEach(fpaths, fpath => {
        { name } = path.parse(fpath);
        lvl = name.split(".").length;
        if (!_.has(metaDict, lvl)) {
          metaDict[lvl] = [];
        }
        metaDict[lvl].push({ prefix: name, fpath });
      });
      return metaDict;
    }
    ...
    root = fileMetaDict[1].find(n => n.fpath === "root.md") as FileMeta;
    const { node: rootNode } = this.toNode(root, [], store, {
      isRoot: true,
      errorOnBadParse: this.opts.errorOnBadParse
    }) as { node: Note };
    ...
    while (_.has(fileMetaDict, lvl)) {
        ...
        const { node, missing } = this.toNode(ent, prevNodes, store, {})
    }
}

toNode {
    noteProps = mdFile2NodeProps(path.join(store.opts.root, ent.fpath)) {
        const { data, content: body } = (matter.read(fpath, {}) as unknown) as {
        const { name: fname } = path.parse(fpath);
        const dataProps = DNodeRaw.createProps({ ...data, fname, body });
    }
    // missing
    if (!parent && !opts.isRoot) {
      missing = parentPath;
      if (opts.errorOnEmpty) {
        throw new Error(JSON.stringify(errorMsg));
      }
    }
    const note = new Note({ ...noteProps, parent, children: [] });
}
```

#### Build Nodes
- loc: src/node.ts
```ts
buildNoteFromProps(nodes) {
    // initialize root
    out = []
    root, childrenIds = getRoot nodes {
        if root not in nodes
            throw DendronError // this gets caught in the engine
        return root
    }
    out.push root
    parentNodes = [root]
    nodeIds = childrenIds

    while nodeIds {
      nodeIds.map {
        nodeProps = nodes.find it.id
        @toNote nodeProps, parentNodes
      }
    }
}

toNote {
  note = new Note(..., children: [], parent: null)
  parent = find(parents)
  parent.addChild note
  ret
}
```

# New Node

## Flow
- loc: engine-server/engine.ts
```ts
write(node){
  @store.write
  @updateNodes node
}
```


# Updating a Node

## Summary

## Flow
- loc: engine-server/engine.ts

```ts
updateNodes(nodes) {
  if node.type == 'schema' {
    ...
  } else {
    @_updateNote(nodes)
  }
}

_updateNote(nodes, opts) {
  addParent(nodes) if !opts.noAddParent
  @refreshNodes
}

```

# Deleting a Node

## Summary

## Flow
- loc: engine-server/engine.ts

```ts
delete(idOrFname, mode, opts) {
  if (mode == 'note') {
    noteToDelete := @notes
  } else {
    // schemas
    ...
  }

  // delete from store
  if !opts.metaOnly {
    @store.delete(noteToDelete)
  }

  // remove from index
  @deleteFromNodes noteToDelete

  // if node has children , keep it in index as a stub
  if noteToDelete.children {
    noteToDelete.stub = true
    @refreshNotes noteToDelete
  } else {
    // remove node from parent 
    noteToDelete.parent.children.reject { noteToDelete } if noteToDelete.parent
  }



}
```

# Reference

## Refresh Node

- loc: engine-server/src/engine.ts
```ts
refreshNodes(nodes) {
  ...
  type = nodes[0].type
  if type == schema {

  } else {
    ...
  }
  @updateLocalCollection nodes {
    @schemaFuse.setCollection nodes
  }
  @store.updateNodes nodes
}

```
