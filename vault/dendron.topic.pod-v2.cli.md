---
id: D4b67Wzu8th1MW21euFRp
title: CLI
desc: ''
updated: 1644929235183
created: 1643651440692
---

## Export Pod

### Pre-requisite

- [[Config|dendron://dendron.dendron-site/dendron.topic.pod-v2.config]]

### Common Options

- --wsRoot: location of workspace
- --podConfig: path to custom yml configuration for the pod
- --podId: pod id of the custom yml configuration for the pod. If provided, dendron looks for configuration file at `<dendron-workspace>/pods/custom/config.<podId>.yml`.
- --inlineConfig: the inline config for pod. If provided, this will overwrite the config options saved in the configuration file. It takes space separated key value pairs. eg: Key=podType,Value=MarkdownExportV2 Key=destination,Value=clipboard

### Options

- --vault: vault to export
- --fname: full name of note to export
- --hierarchy: hierarchy of notes to export

### Limitations

The pods V2 CLI does not support the following [[Export Scopes |dendron://dendron.dendron-site/dendron.topic.pod-v2.config#exportscope]]

- Lookup
- LinksInSelection

### Examples

#### Exporting whole workspace as markdown

config: config.dendron.markdown.yml

```markdown
podId: dendron.markdown
exportScope: Workspace
podType: MarkdownExportV2
wikiLinkToURL: true
destination: E:\notes\dendron-workspace
convertTagNotesToLinks: false
convertUserNotesToLinks: false
addFrontmatterTitle: true
```
- with --podId
```sh
dendron exportPodV2 --podId dendron.markdown --wsRoot .
```
- with --inlineConfig
```sh
dendron exportPodV2 --inlineConfig Key=podType,Value=MarkdownExportV2 Key=exportScope,Value=Workspace Key=destination,Value=E:/dendron-workspace --wsRoot .
```

- with --podConfig
```sh
dendron exportPodV2 --podConfig /pods/custom/config.dendron.markdown.yml --wsRoot .
```

#### Exporting a Vault

In a multi-vault workspace, you need to specify the vault with `--vault` argument. It can be skipped for a single vault workspace.

```sh
dendron exportPodV2 --podId dendron.markdown --inlineConfig Key=exportScope,Value=Vault --vault vault1 --wsRoot .
```

#### Exporting a Note

In a multi-vault workspace, you need to specify the vault with `--vault` argument. It can be skipped for a single vault workspace.

- exporting to file system
```sh
dendron exportPodV2 --podId dendron.markdown --inlineConfig Key=exportScope,Value=Note --fname root --vault vault1 --wsRoot .
```
- exporting to std-out

```sh
dendron exportPodV2 --podId dendron.markdown --inlineConfig Key=exportScope,Value=Note Key=destination,Value=clipboard --fname root --vault vault1 --wsRoot .
```