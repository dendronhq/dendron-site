---
id: 84a0366a-eab5-4862-9bef-360f92a196dc
title: Finding Notes
desc: ''
updated: 1641893921957
created: 1608494616703
---

## Example
Below is an example of a simple two level hierarchy with notes on various [command line interface](https://en.wikipedia.org/wiki/Command-line_interface) commands. Use `Cmd+L` (we are going to use mac keybindings for this tutorial) to bring up the lookup and try some of the following queries.

```
- cli.tar
- cli.curl
- cli.dig
```

![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/lookup-cli.gif)

## Sort Ordering
When there are multiple matches they will be sorted in the following grouped order:
  1. By FuseJS match score.
  1. By whether the note is a stub or not (stubs go to the bottom of the score group).
  1. By Levenshtein distance to original query (closer non-stub values go to the top within the score group).
  1. By last update time. (Most recently updated notes with same Levenshtein distance will bubble up within score group). 

We first will group the results by FuseJS match scores and bubble up the groups of notes in the lookup results that have the best FuseJS match score. When there are notes with the same FuseJS match score we will apply further sorting on those notes within that FuseJS score group. First we will check if its a stub note or not. All the stub notes will be pushed down within the score group. Then we will check the Levenshtein distance to the original query string and the closer Levenshtein distance matches (that are not stubs) for will be bubbled (within the score group). Finally if there are notes with the same FuseJS score and same Levenshtein distance (most likely use case are journal notes) we will use last updated date to bubble up the notes within the group that were most recently updated. 

## Example queries
### Non ordered querying
Entering tokens separated by space will query without caring about the order of elements. For example this note `h1.h2.h3.h4` can be matched equally with the following non-ordered queries:
- `h1 h4`
- `h4 h1`
- `h2 h3`

### Hierarchy ordered querying
The above [[Non ordered querying|#non-ordered-querying]] is great to discover everything that matches our tokens. However, when we know the order of the hierarchy that we are querying it would be great to filter out matches that do not follow our order. Hence the ordered query is possible with separating query string by dots. So to match note `h1.h2.h3.h4` ordered query queries could look like:
- `h1.h4` (`h1` token must come before `h4`)
- `h2.h4` (`h2` token must come before `h4`)
- `h1.h2` (`h1` token must come before `h2`)
Where the elements in the matched files should match the order of the dot delimited tokens. 

### Dot at the end == Descendent query
The above [[Hierarchy ordered querying|#hierarchy-ordered-querying]] is great when you know the ancestor and descendent (Eg. parent/child) of the hierarchy that you want to query. However, what if you only know the ancestor/parent of the note that you want to look up? Well in that case placing a dot/'.' at the end of the query is what you want. It will look up the notes that have children/descendents coming from your query. Ordering the most exact top level matches first. 

For example if you query for `data.` And you had the following notes:
```ts
"level1.level2.data.integer.has-grandchild"
"l1.l2.with-data.and-child.has-grandchild"
"l1.l2.with-data.and-child"
"l1.l2.l3.data.bool"
"level1.level2.data.integer"
"data.driven"
// This one will get filtered out completely since it does not have any mention of `data.`
"i.completely.do-not.belong"
// This one will get filtered out since it has no children/descendents coming from `data.`
"i.have.no-data-children.hence-filter-me-out.data."
```

The order that you would get will be as follows:
```ts
// 'data.driven' is at the highest level of hierarchy, 
// cleanly matches our query `data.` 
// and only has child level note, hence it comes to the top
"data.driven"

// Absolute index of 'data.' match is closer to beginning in "l1.l2.l3.data.bool".
// However, from hierarchy perspective 'data.' is higher in "level1.level2.data.integer" 
// hence it comes before "l1.l2.l3.data.bool"
"level1.level2.data.integer",
"l1.l2.l3.data.bool",

// When there are "non clean match" of data we still keep it but lower it below
// all the "clean matches" regardless of hierarchy depth. Non clean match 
// is when our query has a prefix within the same level of hierarchy such as `with-data.`
// while querying for 'data.'
"l1.with-data.and-child",
"l1.l2.with-data.and-child",

// Now lastly come the nodes with grandchildren/descendents. 
// (Notice that all previous elements only had a child after our query)
// First with clean match, then with non clean match.
"level1.level2.data.integer.has-grandchild",
"l1.l2.with-data.and-child.has-grandchild",
```

## Extended Search Syntax
We use FuseJS for our note lookup and support the [extended search syntax](https://fusejs.io/examples.html#extended-search). 
 
| Token     | Match type                 | Description                          |
|-----------|----------------------------|--------------------------------------|
| `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`     |
| `=scheme`   | exact-match                | Items that are `scheme`              |
| `python`    | include-match              | Items that include python            |
| `!ruby`     | inverse-exact-match        | Items that do NOT include `ruby`     |
| `^java`     | prefix-exact-match         | Items that start with `java`         |
| `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang`|
| `js$`     | suffix-exact-match         | Items that end with `js`              |
| `!go$`     | inverse-suffix-exact-match | Items that do NOT end with `go`       |

 White space acts as an AND operator, while a single pipe (|) character acts as an OR operator. Hence multiple items can be used in a single query such as:
 * `^java awesome !verbose nice$` means query for items that start with `java`, do include `awesome` anywhere in the file name, do NOT include `verbose`, and end with `nice`.

 Note: `.` have special behavior in Dendron (Example [[#hierarchy-ordered-querying]]) Hence when using complex extended syntax searches in general its advised to avoid dots `.` if possible.  

## VS Code Search

![[dendron://dendron.dendron-site/dendron.topic.search]]
