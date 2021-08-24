---
id: O4f9yfDoO7E7gRRDeBeCh
title: 22 Queries
desc: ''
updated: 1629777497388
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

Queries are fragments of javascript code. Helper functions are provided to find and search through notes easily.
The result of the query must be a list of notes.

#### Hierarchies

The `notes()` function returns a list of notes, even if it selects only a single note.

```
Select just one note:
?[[ notes("dendron.rfc.22-queries") ]]

Select all children of a note (note the trailing dot):
?[[ children(notes("dendron.rfc")) ]]

For all descendants (note 2 trailing dots):
?[[ descendants(notes("dendron.rfc")) ]]

All notes:
?[[ notes() ]]

Select all notes that end with `.config`:
?[[ notes().filter((n) => n.fname.endsWith(".config")) ]]

Select all notes that have a child `config`:
?[[ notes().filter((n) => _.some(n.child, (child) => child.fname.endsWith(".config"))) ]]

For all ancestors:
?[[ notes("..config") ]]

Notes in a specific vault:
?[[ notes("dendron.rfc").filter((n) => n.vault.name === "dendron.dendron-site") ]]

For a tag note
?[[ notes("tags.todo") ]]

For a user note
?[[ notes("user.Kathryn") ]]
```

#### Links

```
Notes that contain links to `tags.todo`, or notes that are linked from `tags.todo`:
?[[ notes().filter((n) => _.some(n.links, (l) => l.fname === "tags.todo")) ]]

Notes that contains links to `tags.todo`:
?[[ notes().filter((n) => _.some(n.links, (l) => l.type === "wikiLink" && l.fname === "tags.todo")) ]]

Notes that are linked from `tags.todo`:
?[[ notes().filter((n) => _.some(n.links, (l) => l.type === "backLink" && l.fname === "tags.todo")) ]]
```

#### Combining & Altering Queries

```
Notes that match both subqueries: 
?[[ children(notes("dendron.rfc")).filter((n) => _.some(n.links, (l) => l.fname === "tags.todo")) ]]

Notes that match either subquery:
?[[ notes().filter((n) => _.some(n.links, (l) => l.fname === "tags.todo") || n.fname.startsWith("dendron.rfc.")) ]]

Doesn't match the subquery:
?[[ _.reject(notes(), (n) => _.some(n.links, (l) => l.fname === "tags.todo")) ]]
```

#### Contents

Queries can also look into the contents of notes.

```
Searching for a specific string
?[[ notes().filter((n) => n.body.includes("blocked task")) ]]

Search for a regular expression
?[[ notes().filter((n) => n.body.match(/task[: ]blocked/)) ]]
```

#### Frontmatter

Queries can check for specific frontmatter properties.

```
All tags that have a color set
?[[ descendants(notes("tags")).filter((n) => n.color) ]]

All notes created before a certain time
?[[ notes().filter((n) => n.created < 1629395624110) ]]
```

#### Multiline

Queries may span multiple lines.

```
?[[
  notes()
    .filter(
      (n) => n.created < 1629395624110
    ) 
]]
```

Queries can also span multiple expressions. In this case, they must be surrounded by brackets and must explicitly return a list of notes.

<!-- Implementation hint: (new Function("x", "return (() => " + query + ")()"))(argX) -->

```
?[[ {
  const foundNotes = [];
  const allNotes = notes();
  for (const note of allNotes) {
    if (note.fname.startsWith("tags.")) {
      foundNotes.push(note);
    }
  }
  return foundNotes;
} ]]
```

## Examples

Find all notes under `dendron.rfc.` that have unfinished tasks:
```
?[[ children(notes("dendron.rfc")).filter((n) => _.some(n.link, (l) => l.fname === "tags.todo")) ]]
```

## Tradeoffs

Pros:
- JavaScript is a very popular language, and using it means instant familiarity for many users.
- Javascript has a lot of powerful features, which we get for free.
- VSCode has built-in support for nested languages (e.g. javascript in markdown), which we can leverage for better editing support.

Cons:
- The queries are complex and difficult to write, especially for non-programmers.
- Displaying immediate feedback may be difficult since we have to execute the query entirely, which may be expensive.

## Discussion
