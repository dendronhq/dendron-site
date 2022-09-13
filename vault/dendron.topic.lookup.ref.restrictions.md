---
id: v21pacjod0eqgdhb7zo7fvw
title: Restrictions
desc: ''
updated: 1662470038800
created: 1659714906699
---

## Summary

Dendron disallows certain characters and or patterns in the file name of a note.

## Details

There are a few restrictions on how you can name your notes. 
This is mainly due to compatibility across different platforms, as well as some restrictions that are imposed by VSCode.

> ⚠️ Introduction of new restrictions are very rare, but it can happen in the future.  
> In that case, a detailed guide will be provided on how to automatically fix your existing notes' file names so that they conform to the new restrictions.

### Automatically finding and fixing invalid filenames

You can use the [[dendron.topic.doctor]] command with the action [[fixInvalidFileNames|dendron://dendron.dendron-site/dendron.topic.doctor#fixinvalidfilenames]] to find and fix invalid filenames.

If an automatic fix is not possible, the doctor command will notify you with the file names that were not automatically fixable so that you can manually review and [[rename|dendron://dendron.dendron-site/dendron.topic.refactoring.commands.rename-note]] them.

### Restrictions 

#### Empty hierarchies

Hierarchies cannot be empty strings.
This means:
- file names (excluding the `.md` extension) cannot start or end with a `.`, which delineates a hierarchy.
- file names cannot have consecutive dots.

```md
# good

foo.bar.md
foo.bar.baz.md

# bad

foo..baz.md
.foo.md
foo..md
```

#### Mixed case

When you [[lookup|dendron.topic.lookup]] a note, the query ignores cases.
VSCode will also not allow you to have two files with mixed cases but same characters.

To avoid confusion, we recommend using lower-kebab-case for all your notes if possible, and keep the casing consistent at minimum on a per-hierarchy basis.

```md
# good

foo.md
foo-bar.md

# bad

Foo.md
fOO.md
FoO.md
Foo_Bar.md

```

#### Symbols / special characters

There are a few non-alphanumeric characters that are disallowed in filenames due to compatibility across different platforms and backends.

Currently these are the disallowed characters:
- `(` (open parentheses)
- `)` (close parentheses)
- `'` (single quote)
- `,` (comma)

We recommend replacing the occurences of these symbols to `-`, or [[refactor|dendron.topic.refactoring]] the note to have a simpler file name that doesn't require special characters to be described.
