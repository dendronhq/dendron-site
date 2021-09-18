---
id: sLky6p4DfEp4ll6w9IZ8o
title: Arch
desc: ''
updated: 1631981007457
created: 1631979441703
---

## Summary

This goes over how CLI commands are architected in Dendron

## Details


All CLI in Dendron extend the `CLICommand` class

```ts
class CustomCLIComand extends CLICommand  {
    ...
}
```

The basic execution loop of a CLI command is described below

```ts
eval(args) {
    {error, ...opts}= @enrichArgs(args)
    if {error} log(error) && return

    {error, ...out} = @execute(opts)
    if {error} log(error) && return

    return out
}
```

* `enrichArgs` convert the CLI flags into objects, doing any validation as necessary
    - returned option object is described by `<TOpts>` and typically named `CommandOpts` by convention
* `execute` runs the logic of the given CLI command
    - returned output object is described by `<TOut>` and typically named `CommandOutput` by convention

The methods to implement for a CLI command

```ts
export abstract class CLICommand<
  TOpts extends CommandCommonProps = CommandCommonProps,
  TOut extends CommandCommonProps = CommandCommonProps> {

  abstract enrichArgs(args: any): Promise<TOpts>;
  abstract execute(opts?: TOpts): Promise<TOut>;
}
```


All commands are initialized in bin/dendron-cli.ts.

```ts
new VaultCLICommand().buildCmd(buildYargs);
...
```

`buildCmd` is responsible for building for creating CLI specific attributes. Child classes call override `buildCmd` to extend with custom options


## Case Study
Lets take a look at the publish command

```sh
dendron publish <cmd>

commands for publishing notes

Positionals:
  cmd  a command to run           [string] [required] [choices: "init", "build"]

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --wsRoot   location of workspace
  --vault    name of vault
  --quiet    do not print output to stdout
  --dest     override where nextjs-template is located                  [string]
  --attach   use existing dendron engine instead of spawning a new one [boolean]
```

### Options

#### Common Options

The following are common for all CLI commands

```sh
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --quiet    do not print output to stdout
```

#### Engine Options

All commands that use the Dendron engine will use these options

```sh
  --wsRoot   location of workspace
  --vault    name of vault
  --attach   use existing dendron engine instead of spawning a new one [boolean]
```

#### Custom Options

In the above example, the following is a custom option

```
  --dest     override where nextjs-template is located                  [string]
```

### Option Types

```ts
// common for all CLI related options and outputs
type CommandCommonProps = {
    error?: DendronError
}

// this is types for the CLI flags
type CommandCLIOpts =  {
    ...
}

// this is returned by `cmd.enrichArgs` Validated and clean version 
type CommandOpts =  { 
    ...
} & CommandCommonProps 

// this is returned by `cmd.execute`
type CommandOutput = {
    ...
} & CommandCommonProps
```

### Option Generics
All commands extend from `CLICommand`. `TOpts` stands for `CommandOpts` and `TOut` for `CommandOutput`

```ts
export abstract class CLICommand<
  TOpts extends CommandCommonProps = CommandCommonProps,
  TOut extends CommandCommonProps = CommandCommonProps
> extends BaseCommand<TOpts, TOut> {
}
```