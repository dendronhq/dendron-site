---
id: O4f9yfDoO7E7gRRDeBeCh
title: 22 Queries
desc: ''
updated: 1631684295665
created: 1629395624110
---

Queries allow you to explore your knowledge base and answer questions efficiently.

## Goals

- An easy-to-use query language should allow users to query their knowledge base. The query language should allow complex queries when needed.
- The editor should provide completions, warnings, and preview to provide immediate feedback when writing queries.
- Query results should be displayed in the preview, published pages, and if possible within the editor itself.

## Context

While Dendron lets users store and organize knowledge efficiently, extracting
knowledge from Dendron is currently not as easy. Users can follow links and
backlinks to discover related notes, use the graph view to see the interactions
between notes, and use the built-in VSCode search to look for keywords.

All of these options are limited in their capability, and must be done manually.
They can be time consuming and prone to mistakes. They also waste work: over
time the information extracted becomes stale and the user must search through
their notes again.

## Proposal

To make extracting information from Dendron streamlined and efficient, we can
add a query system to Dendron. This will allow users to search for information
in their knowledge base efficiently, and share this knowledge with others.

By writing a query, the user can find all notes that fit certain criteria,
answering a question that they had. The query is embedded into a note, and gets
published along with the note. This allows the user to share the results of the
query, and the results are always up-to-date as they are generated
automatically.

## Details

The following section describes proposes how queries work using some examples.

### Query References

The syntax for queries will be similar to references, but using a question mark instead.

```
?[[ ... ]]
```

### Query language definition

The language is defined as follows.

```
<Expr> -> ( <Expr> )
<MultiExpr> -> <Expr> <MultiExpr> | <Expr>
<Expr> -> or <MultiExpr>
<Expr> -> and <MultiExpr>
<Expr> -> <FName>
<Expr> -> #<TagName>
<Expr> -> @<TagName>
<Expr> -> link <Expr>
<Expr> -> to <Expr>
<Expr> -> from <Expr>
<Expr> -> connected <Expr>
<Expr> -> children <Expr>
<Expr> -> parent <Expr>
<Expr> -> descendants <Expr>
<Expr> -> ancestors <Expr>
<Expr> -> vault <VaultName>
<Expr> -> .<Property> <Relation> <Value>
<Value> -> <Constant> | ?<VariableName> | null
<Relation> -> == | !== | > | >= | < | <=

<VariableName> -> /* One or more letters or digits. */
<Constant> -> /* A string or number. */
<FName> -> /* A valid note name */
<TagName> -> /* A valid hashtag or user tag name */
<VaultName> -> /* A valid vault name */
```

In this definition, tokens surrounded by less than and greater than symbols like
`<X>` refers to a non-terminal token, and any other tokens refer to terminal
tokens.

Several terminal tokens are defined loosely in natural language at the end. These definitions are implementation-dependent.

Every expression in the query language represents a set of notes.

## Examples

Select this RFC:
```
?[[ dendron.rfc.22-queries ]]
```

Select all RFCs:
```
?[[ children dendron.rfc ]]
```

Notes that are tagged with `#todo`:
```
?[[ to tags.todo ]]
```

Parenthesis are optional at the top level of the queries. The following two queries are identical:
```
?[[ to tags.todo ]]
?[[ (to tags.todo) ]]
```

RFCs that are tagged with `#todo`:
```
?[[ and (link tags.todo) (children dendron.rfc) ]]
```

RFCs that are in the `dendron.dendron-site` vault:
```
?[[ and (vault dendron.dendron-site) (children dendron.rfc) ]]
```

All notes created before a certain time:
```
?[[ .created < 1629395624110 ]]
```

All tags that have a color set:
```
?[[ and (.color != null) (descendants tags) ]]
```

Queries may span multiple lines. For example, all RFCs that are tagged with `#todo` and are connected to a project:
```
?[[ or (to tags.todo)
       (children dendron.rfc)
       (connected (children projects))
]]
```

Find all notes that are tagged with any tag:
```
?[[ to (descendants tags) ]]
```

## Tradeoffs

Pros:
- Using a custom query language allows us to tailor it to Dendron. Users can write compact, efficient queries, and we can provide more immediate feedback.
- Lisp-like syntax is similar to Roam queries, and will be familiar to lisp users.

Cons:
- Building a custom query language requires more work, compared to something like allowing users to write queries in javascript.
- Lisp-like syntax may be confusing for users who are not familiar with lisp languages.

## Notes

The implementation will be internally based on
[DataScript](https://github.com/tonsky/datascript), which will allow us to
support very powerful queries while also simplifying the implementation.

## Discussion

Please send any suggestions, thoughts, questions or concerns to the [Discussions](https://github.com/dendronhq/dendron/discussions/1284) page.
