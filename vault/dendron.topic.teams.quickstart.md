---
id: 31cb97b5-4ac7-48dd-abcf-107ce78ea8ae
title: Quickstart
desc: ''
updated: 1661572715686
created: 1617296496891
---

This guide will go over setting up the workspace for a team of engineers. 

## Steps when using Github
1. Go to [eng-workspace-starter](https://github.com/dendronhq/eng-workspace-starter) and click [use this template](https://github.com/dendronhq/eng-workspace-starter/generate) to create your own copy of the repo.
2. Share the repo with team members and make sure they have permission to read/write to this repository


## Steps when using another git provider
1. Clone [eng-workspace-starter](https://github.com/dendronhq/eng-workspace-starter) locally 
  ```sh
  git clone https://github.com/dendronhq/eng-workspace-starter.git
  ```
  1. Remove the existing origin and add your own
  ```sh
  git remote remove orgiin
  git remote add origin {YOUR_ORIGIN}
  git branch -M main
  git push -u origin main
  ```
2. Share the repo with team members and make sure they have permission to read/write to this repository
