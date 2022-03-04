---
id: vsAxYld4zsbD2XjKoh7OP
title: Git
desc: ''
updated: 1645737555902
created: 1624965063661
---

## Summary

Git is the preferred version control system because it integrates with VS Code and GitHub. 

The most likely case is you have a local repository that you need to now add to Git. Follow these steps to add your local vault to Git and push up to GitHub. 

## Prerequisites

- Install [`git`](https://git-scm.com/download)
- [Join GitHub](https://github.com/join)
  - If new to GitHub, follow the [GitHub Quickstart](https://docs.github.com/en/get-started/quickstart) to become familiar with GitHub
- Further reading, to better understand these tools: [Learn Git and GitHub](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub)

### git defaults

By default, `git` will initialize repositories with a `master` branch. Modifications to this behavior can be done at the CLI:

```sh
# Change default branch names in initialized git repos
git config --global init.defaultBranch main
```

If wanting to make a change in a current repository:

```sh
# Change current main branch name
git branch -m main
```

## Using git with Dendron

1. VS Code ships with an extension that manages [Git source control support](https://code.visualstudio.com/docs/editor/versioncontrol). 
> Note: VS Code uses your computer's Git installation, so you need to [install Git](https://git-scm.com/download) first before you get these features. Make sure you install at least version 2.0.0.
2. Open your local Dendron workspace. 
> Note: If you are new to Git, the [git-scm website](https://git-scm.com/doc) is a good place to start, with a popular [online book](https://git-scm.com/book), [Getting Started](https://git-scm.com/video/what-is-git) videos and [cheat sheets](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf). This documentation assumes you are already familiar with Git. 
3. Click on `Initialize Repository` to set up a git repo in the Dendron vault. 
![](/assets/images/2021-06-29-16-52-17.png)
4. Then, once you've added and committed the files, use the command palette to `Publish to GitHub`. 
![](/assets/images/2021-06-29-16-56-34.png)
5. Follow the prompts and once you've entered in your GitHub credentials, you should be done. 
> If you don't want to publish your notes just yet, make sure to mark the Git repository [private](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility).


## [Lookup](https://handbook.dendron.so/notes/b89ba854-72fb-4ebc-a8a0-55960b89e9dc.html#lookup)

This section borrows heavily from the following:
- <https://stackoverflow.com/questions/46877667/how-to-add-a-new-project-to-github-using-vs-code/63898638#63898638>
- <https://code.visualstudio.com/docs/editor/versioncontrol>
