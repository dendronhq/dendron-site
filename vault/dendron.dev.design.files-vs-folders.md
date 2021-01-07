---
id: da241d31-8a05-429c-a041-02ac6170bf20
title: Dotted filenames
desc: ''
updated: 1600270046572
created: 1600270046572
stub: false
---
- note renames are simpler, no need to create / delete folders
- note containers can be created with a single artifact (e.g. foo.bar.md is the container for foo.bar vs. foo/bar.md + foo/bar/)
- note stubs can be created without intermediate folders

# Folder Hierarchies

- familiarity - dendron file structure looks like any other part of the file system. Less to learn, faster to adopt
- you can place any files (e.g. pdfs, xlsx or draw.io diagrams) into the folders without renaming them (and reference them with the same mechanics)
- easier to save files into the right place of the structure without the assistance of vscode (e.g. normal drag-and-drop works)
- natural "zoom" functionality into the structure (just open the folder)
- filenames look cleaner in vscode (in several views, like explorer, file tabs, git etc) as well as in normal OS utilities
- large amount of files in the same folder makes normal file system tools less useful (OS file explorer, commands like ls or tree, potential choking of operations)
- less implementation needed for dendron (e.g. no need for dendron tree view since normal file explorer works)
- other vscode extensions rely on file structures for cleaner views (e.g. TODO tree). Not all views can be re-implemented for dendron
- normal file system permissions could be used to limit visibility to certain sub-hierarchies
- various sub-parts of the hierarchy can be brought into the same workspace via symlinks
- Is compliant with enterprise setting, many companies just wouldn't adopt dot-based hierarcies for their knowledge-base (it's "too weird", "unproven" etc.)

