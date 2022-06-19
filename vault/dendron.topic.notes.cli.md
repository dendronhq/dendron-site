---
id: wti0omzx9zzfsfg67vc1kj0
title: CLI
desc: Manipulate notes using the CLI
updated: 1655658145629
created: 1655311792352
---

## Summary

## Usage
```sh
note related commands

Positionals:
  cmd  a command to run[string] [required] [choices: "lookup", "delete", "move"]

Options:
  --version         Show version number                                [boolean]
  --help            Show help                                          [boolean]
  --wsRoot          location of workspace
  --vault           name of vault
  --quiet           don't print output to stdout
  --enginePort      If set, connect to to running engine. If not set, create new
                    instance of Dendron Engine
  --attach          Use existing engine instead of spawning a new one
  --useLocalEngine  If set, use in memory engine instead of connecting to a
                    server                                             [boolean]
  --query           the query to run                                    [string]
  --output          format to output in
            [string] [choices: "json", "md_gfm", "md_dendron"] [default: "json"]
  --destFname       name to change to (for move)                        [string]
  --destVaultName   vault to move to (for move)                         [string]
```

### Commands

#### lookup

Find or create a note if one does not exist, outputting in a specified format.

#### delete

Delete a note from a vault.

#### move

Move a note to another vault, or rename a note within a workspace.


### Options
#### `--query`
Note to query for. Same syntax as [[dendron.topic.lookup]]

#### `--output`
Controls how note is formatted

Values:
- `json`: JSON output
- `md_dendron`: dendron markdown
- `md_gfm`: github flavored markdown 


## Examples
- Creating a note

```sh
# creates hello if it does not exist
dendron note lookup --query "hello" 
```

- Querying a note

```sh
# retrieves hello.md if it does exist
dendron note lookup --query "hello" 
```

- Querying a note with GitHub Flavored Markdown output

```sh
# retrieves hello.md if it does exist
dendron note lookup --query "hello" --output md_gfm
```

- Deleting a note
```sh
dendron note delete --query "foo" 
```

- Deleting a note within a multi-vault workspace
```sh
dendron note delete --vault vault2 --query "foo" 
```

- Moving a note
```sh
# renames the note "foo" to "bar" within a single-vault workspace
#   if there is no note in the vault already named "bar"
dendron note move --query "foo" --destFname "bar"
```

- Moving a note in a multi-vault workspace
```sh
# moves the note "foo" to vault2 and changes its name to "bar"
#    if there is no note in vault2 already named "bar"
dendron note move --vault vault --query "foo" --destFname "bar" --destVaultName vault2
```
