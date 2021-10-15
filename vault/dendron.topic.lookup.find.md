---
id: 84a0366a-eab5-4862-9bef-360f92a196dc
title: Finding Notes
desc: ''
updated: 1634281588990
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

## Example queries
### Non ordered querying
Entering tokens separated by space will query without caring about the order of elements. For example this note `h1.h2.h3.h4` can be matched equally with the following non-ordered queries:
- `h1 h4`
- `h4 h1`
- `h2 h3`

### Hierarchy ordered querying
The above [[#non-ordered-querying]] is great to discover everything that matches our tokens. However, when we know the order of the hierarchy that we are querying it would be great to filter out matches that do not follow our order. Hence the ordered query is possible with separating query string by dots. So to match note `h1.h2.h3.h4` ordered query queries could look like:
- `h1.h4` (`h1` token must come before `h4`)
- `h2.h4` (`h2` token must come before `h4`)
- `h1.h2` (`h1` token must come before `h2`)
Where the elements in the matched files should match the order of the dot delimited tokens. 


