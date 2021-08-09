---
id: PgwAXFfotfgpFVqHQRlBl
title: Dev
desc: |
  Development related
updated: 1628535582616
created: 1628376960868
---

## Build

See build instructions [[|heredendron.dev.setup#build]] 

## Run
<!-- How to run the program from the current source code -->
1. Navigate to the nextjs-template
  ```
  cd packages/nextjs-template
  ```
2. To run nextjs using sample data, you can run the following
  - TODO
  ```
  cd nextjs-template
  wget https://artifacts-prod-artifactb7980f61-19orqnnuurvwy.s3.us-west-2.amazonaws.com/artifacts/dendron-site.zip data.zip
  unzip data.zip
  ```
3. Run the nextj sapp
  ```sh
  yarn dev
  ```
4. Navigate to your browser. For example http://localhost:3000/notes/b0fe6ef7-1553-4280-bc45-a71824c2ce36 to go to a particular note

## Run with your own data
1. Navigate to your workspace root
1. Run the following command. 
  ```sh
  dendron exportPod --podId dendron.nextjs --genConfig
  ```
1. Update the generated config
  ```sh
  vim pods/dendron.nextjs/config.export.yml
  ```
  - update the `dest` field to `nextjs-template/data`. you can see an example below
  ```yml
  dest: /Users/bob/code/dendron/packages/nextjs-template/data
  ```
1. Run the pod
  ```sh
  dendron exportPod --podId dendron.nextjs
  ```