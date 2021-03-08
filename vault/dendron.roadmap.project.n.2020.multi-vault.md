---
id: 45cfb9f2-46cf-4f67-a41e-834818fbd06e
title: Multi Vault Support
desc: ''
updated: 1611593573560
created: 1599501659137
stub: false
start: 2020.10.07
end: 2020.10.29
status: Next
---
## Goals

Users should be able to create multiple vaults for a given workspace. Each vault is a folder that can contain any number of hierarchies. 

## Use Cases

- for **sensitive notes**, multi-vault enables local only vaults vs vaults that can are synced on file sharing services like dropbox 
- for **modularizing knowledge**, multi-vault enables users to mix and match existing vaults depending on context
- for **federating and curating knowledge**, multi-vault enables users to publish/subscribe to public vaults using protocols like `git`
- for **access control**, multi-vault lets users configure specific vaults to be **private** which turns off publication and sharing of any notes inside said vault

## Concepts

![[dendron.concepts#workspace:#*]]
![[dendron.concepts#vaults:#*]]
![[dendron.concepts#hierarchies:#*]]
![[dendron.concepts#domain:#*]]

## Specs

- a workspace can have one or more vaults
- a workspace can have one or more workspace configs
- vaults have a path relative to the workspace and an optional name
  <!-- - the initial vault is called `main` -->
  <!-- - vaults can be referred to by name using the `$` prefix  -->

## Flow

### Initialization

To facilitate separation and re-usability of vaults, we are changing how the initial workspace is laid out in Dendron.

Today, all files (configuration, vaults, docs) are located directly inside the **workspace root**.

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#file layout for legacy workspace,1:#*))

With multivault, workspace configuration  will be moved underneath a separate folder underneath the **configuration root**. By default, this will inside a folder named **config**.

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#file layout for multi-vault workspace,1:#*))

Inside a multi-vault workspace, each vault and config will be initialized as separate and independent git repositories. To initialize a multi-vault workspace, you can run `Dendorn: Initialize MultiVault Workspace` to bootstrap the folder layout that you see above. 

We will also be releasing a migration script that can convert a single vault workspace into a multi-vault workspace. 

### Configuration

The `dendron.yml` file will be modified to have additional metadata for vaults that have remote repositories associated with them. A remote root is not required unless you plan on cloning your workspace to other computers. 

```yml
vaults:
  - fsPath: vault1
    remote:
      type: git
      url: /path/to/vault1/repo
  - fsPath: vault2
    remote:
      type: git
      url: /path/to/vault2/repo
      branch: nightly # optional, target specific branch
```

### Cloning

Cloning is the act of checking out a workspace on another machine. To clone, Dendron will have the `Dendron: Clone Workspace` command. It will take the url of a remote **workspace configuration** repo as input as well as a local path for the **workspace root**. Cloning will checkout the _workspace configuration_ underneath the _workspace root_ and also checkout all the vaults that are associated with the configuration underneath the workspace.

### Add a new Vault

- run `Dendron: Add Vault`
  - specify file path relative to the current **workspace root**
  - specify an optional user friendly name for the vault
    - if no name is set, the last component of the file path will be used
- when the user hits enter, the vault is created as an "empty vault"
  - empty vaults will contain a `root.md` and `root.schema.yml` file

### Lookup

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#file layout for multi-vault workspace,1:#*))

- lookup: {empty query}
  - show all top level results of all vaults. note how the vault name shows up in parenthesis next to the result
  - results
    ```
    root (vault1)
    root (vault2)
    foo (vault1)
    foo (vault2)
    ```
- lookup: `vault1/`
  - by prefixing lookup with the vault name, you can narrow results to a particular vault
  - results
    ```
    root (vault1)
    foo (vault1)
    ```
- lookup: `foo.`
  - dendron will merge all results from all vaults when you do a lookup
  - results
    ```
    foo.one (vault2)
    foo.two (vault1)
    ```
- lookup: `foo.new`
  - when you lookup a note that doesn't exist, you'll have the option of creating the note in either vault
  - results
    ```
    Create New (vault2)
    Create New (vault1)
    ```

### Navigating Links

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#file layout for multi-vault workspace,1:#*))

- navigating  to `[[foo]]` will result in a display prompting the user to select the vault to navigate to 
  - the UI should be similar to the **Peek Action**
    ![](/assets/images/2020-10-19-20-48-52.png)

- navigating to `[[foo.two]]` will directly navigate to the note since it is unique across all vaults

- navigating to `[[vault1/foo]]` will open foo in vault1 

### Moving Notes Between Vaults

- TBD

### Publishing Notes

((ref:[[dendron.roadmap.project.n.2020.multi-vault]]#file layout for multi-vault workspace,1:#*))

- configuration to publish everything under foo
  - config
    ```yml
    vaults:
    - name: main
        path: vault1
    - name: private
        path: vault2
    publish:
        siteHierarchies: [foo] 
    ```
  - published notes:
    ```
    vault1/foo.md
    vault1/two.md
    vault2/foo.md
    vault2/one.md
    ```


- configuration that denies publication from vault2
  - config
    ```yml
    vaults:
    - name: main
        path: vault1
    - name: private
        path: vault2
        allowPublish: false
    publish:
        siteHierarchies: [foo] 
    ```
  - published notes:
    ```
    vault1/foo.md
    vault1/two.md
    ```

## Special Cases

### Adding a vault under another vault

- you want to put all notes from `vault2` under `vault1` under the `vault2` node
- eg: lookup should see the following hierarchy

```
├── foo.md
├── foo.two.md
├── vault2.foo.md
└── vault2.foo.one.md
```

This can be achieved with the following config

```yml
vaults:
- name: main
    path: vault1
- name: private
    path: vault2
    mountUnder: vault2
```

## Reference

### File Layout for Legacy Workspace

```
.
└── Dendron
    ├── .git
    ├── dendron.code-workspace
    ├── dendron.yml
    ├── docs 
    ├── pods
    ├── vault1
    │   ├── foo.md
    │   └── foo.two.md
    └── vault2
        ├── foo.md
        └── foo.one.md
```

### File Layout for Multi-Vault Workspace

```
.
└── Dendron
    |── .git
    |── dendron.code-workspace
    |── dendron.yml
    |── pods
    |── docs
    ├── vault1
    │   |── .git
    │   ├── foo.md
    │   └── foo.two.md
    └── vault2
        |── .git
        ├── foo.md
        └── foo.one.md
```

<!-- ```
.
└── Dendron
    ├── config
    │   |── .git
    │   |── dendron.code-workspace
    │   └── dendron.yml
    │   └── pods
    │   └── docs
    ├── vault1
    │   |── .git
    │   ├── foo.md
    │   └── foo.two.md
    └── vault2
        |── .git
        ├── foo.md
        └── foo.one.md
``` -->

### Configuration

#### vaults

- top level directive in `dendron.yml`
- collection of one or more vaults

#### {vault}.name

- name of vault

#### {vault}.path

- path to vault

#### {vault}.mountUnder

**NOTE**: this is not implemented yet

- optional
- by default, all hierarchies are mounted at the root
- you change this by adding a mountpoint which is equivalent of adding a **prefix** to all files within the vault

## Additional Resources

- [project docs](https://dendron.so/notes/45cfb9f2-46cf-4f67-a41e-834818fbd06e.html)
- [issues](https://github.com/dendronhq/dendron/labels/pro.multi-vault)

## Discussions

- [[name collision thread|dendron.roadmap.project.scratch.2020.09.07-121834]]
- [[sharing materials between vaults|dendron.roadmap.project.scratch.2020.09.07-121952]]

