---
id: fa3b1186-b50f-4b7e-9c46-2a116bfdde51
title: Vault Specific
desc: ''
updated: 1621076744504
created: 1620582474279
---

## Problem

This Proposal is meant to solve a Problem I can see happening in a multivault scenario.
Imagine you have 4+ Valuts:

- Personal
  - Public
  - Private
- Work
  - Public
  - Teams
    - 1
    - 2
    - etc.
  - Private

And now imagine that you have all Vaults inside one Workspace for ease of access, but you have the problem that the Work vaults contain certain schemas mandatory through company but your own schemas are Overlapping in the sense of Ids, since Projects are Projects. Your own may be more like a namespaces and being free from.

But the ones in your Workvaults, have the same Project schema but being more strict. Now you would need to split your Workspace into Work and Personal.
The next Problem could be that each Team would want to extend the Work Project scheme with team specific Hierachys which would not really be possible at the moment. 

## Goal

The goal should be in a first step to make it possible to specify if a schema in a vault should have Priority for this vault, making it Possible to have a Schema Vault that contains shared schemas and having schemas inside in each vault that can override the schared Schemas.

The next Step in this could be to make it possible to extend schemas. Making schemas more useable in general. See [[Reusability|rfc.12-schema-improvements.reusability]] for this.  

## Proposal

We can go two ways with this way one would be to just introduce a field `priority` for schemas that, can be `default` to set it as default for all vaults in this workspace and if it is not set it overrides the `default` schema for this vault if it is not set. Other values could be a vault name it applies to or a list of Vaultnames that it applies to. 

The second way could be to intruduce a vault specific config file `dendron.yaml` that has a `schema` field that lists all schemas of the vault with information of their `priority`
