---
id: a379c9fe-6cb4-43a0-863e-5200fbce4181
title: Schema
desc: ''
updated: 1621461080862
created: 1621460732053
---


- src/dnode.ts
```ts
matchPath(notePath, schemaDict) {
    domain := notePath
    return if domain not in schemaDict

    domainSchema = schemaDict[domain]
    return @matchPathWithSchema(notePath, matched: "", schemaCandidates: [domainSchema], schemaModule: domainSchema)
}

matchPathWithSchema(notePath, matched, schemaCandidates, schemaModule) {

    nextNotePath := notePath, matched

    match = @matchNotePathWithSchemaAtLevel(
        notePath: nextNotePath,
        schemas: schemaCandidates,
    )
    return if !match
    return if notePath = nextNotePath

    ...
    nextSchemaCandidates := ...
    @matchPathWithSchema(
        notePath
    )


}

```
