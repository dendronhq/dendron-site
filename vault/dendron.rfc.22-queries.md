---
id: O4f9yfDoO7E7gRRDeBeCh
title: 22 Queries
desc: ''
updated: 1629751449657
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

### Queries

Queries operate on sets of notes. Each part of the query either introduces a set of notes, or selects a subset of the set of notes.

#### Hierarchies

```
Select just one note:
?[[ dendron.rfc.22-queries ]]

Select all children of a note (note the trailing dot):
?[[ dendron.rfc. ]]

For all descendants (note 2 trailing dots):
?[[ dendron.rfc.. ]]

Select all notes that end with `.config`:
?[[ *.config ]]

Select all notes that have a child `config`:
?[[ .config ]]

For all ancestors:
?[[ ..config ]]

All notes:
?[[ * ]]

Notes in a specific vault:
?[[ dendron://dendron.dendron-site/dendron.rfc.]]

For a tag note (identical to tags.todo)
?[[ #todo ]]

For a user note (identical to user.Kathryn)
?[[ @Kathryn ]]
```

These allow you to select specific notes or sets of notes based on their hierarchies. These can be useful in many ways, for example `?[[ dendron.rfc. ]]` will find all Dendron RFCs, and `?[[ .config ]]` will find all the configuration options of Dendron.

#### Links

```
Notes that contain links to `tags.todo`, or notes that are linked from `tags.todo`:
?[[ link tags.todo ]]

Notes that contains links to `tags.todo`:
?[[ to tags.todo ]]

Notes that are linked from `tags.todo`:
?[[ from tags.todo ]]

Notes that are connected to `tags.todo` through one or more links:
?[[ connected tags.todo ]]
```

#### Parens

Paranthesis are optional at the top level of the queries. The following two queries are identical:
```
?[[ to tags.todo ]]
?[[ (to tags.todo) ]]
```

#### Combining & Altering Queries

```
Notes that match both subqueries: 
?[[ and (link tags.todo) dendron.rfc. ]]

All subqueries:
?[[ and (link tags.todo) dendron.rfc. (connected proj.) ]]

Notes that match either subquery:
?[[ or (link tags.todo) dendron.rfc.* ]]

Any of the subqueries:
?[[ or (link tags.todo) dendron.rfc. (connected proj.) ]]

Doesn't match the subquery:
?[[ not (link tags.todo) ]]

From a specific vault:
?[[ vault dendron.dendron-site dendron.rfc. ]]
```

#### Contents

Queries can also look into the contents of notes.

```
Searching for a specific string
?[[ contains "blocked task" tasks. ]]

Search for a regular expression
?[[ contains /^blocked\s*[:.]/m tasks. ]]
```

#### Frontmatter

Queries can check for specific frontmatter properties.

```
All tags that have a color set
?[[ has-property color tags.. ]]

All notes created before a certain time
?[[ property-less-than created 1629395624110 * ]]

All notes updated after a certain time
?[[ property-greater-than updated 1629395624110 * ]]
```

#### Multiline

Queries may span multiple lines.

```
?[[ 
  (or
    (link tags.todo)
    dendron.rfc.
    (connected proj.))
]]

```

#### Escaping

The character `*` has a special meaning when querying notes. To refer to a note
that has the character `*` in its name, you must escape it as `\*`.

## Examples

Find all notes that are tagged with any tag:
```
?[[ (link tags..)]]
```

Find all notes under `dendron.rfc.` that have unfinished tasks:
```
?[[ (and (link tags.todo) dendron.rfc.*) ]]
```

## Tradeoffs

Pros:
- Using a custom query language allows us to tailor it to Dendron. Users can write compact, efficient queries, and we can provide more immediate feedback.
- Lisp-like syntax is similar to Roam queries, and will be familiar to lisp users.
- The ability to inspect the hierarchy by placing trailing/preceding dots is easy to type.

Cons:
- Building a custom query language requires more work, compared to something like allowing users to write queries in javascript.
- Lisp-like syntax may be confusing for users who are not familiar with lisp languages.
- Trailing/preceding dots may be prone to typos, and easy to miss at a glance.

## Discussion

> Any sufficiently complicated ... program contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Common Lisp. ~Philip Greenspun