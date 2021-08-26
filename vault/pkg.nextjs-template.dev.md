---
id: PgwAXFfotfgpFVqHQRlBl
title: Dev
desc: |
  Development related
updated: 1629138822516
created: 1628376960868
---

## Build

See build instructions [[here|dendron.dev.setup#build]] 

## Run
<!-- How to run the program from the current source code -->
1. Navigate to the nextjs-template
  ```sh
  cd packages/nextjs-template
  ```
2. To run nextjs using sample data, you can run the following
  ```
  curl -LO https://artifacts-prod-artifactb7980f61-19orqnnuurvwy.s3.us-west-2.amazonaws.com/artifacts/dendron-site.zip 
  unzip dendron-site.zip
  ```
4. Run the nextjs app
  ```sh
  yarn dev
  ```
5. Navigate to your browser. For example http://localhost:3000/notes/b0fe6ef7-1553-4280-bc45-a71824c2ce36 to go to a particular note
6. Build your notes for static hosting
  ```sh
  yarn export
  ```
7. Preview your statically hosted notes 
  ```sh
  cd out
  python -m SimpleHTTPServer 8000
  # open localhost:8000 to see your notes
  ```

## Run with your own data
1. Navigate to your workspace root
2. Run the following command.
  ```sh
  dendron exportPod --podId dendron.nextjs --genConfig
  ```
3. Update the generated config
  ```sh
  vim pods/dendron.nextjs/config.export.yml
  ```
  - update the `dest` field to the location of `nextjs-template`
  ```yml
  # example path
  dest: /Users/bob/code/dendron/packages/nextjs-template
  ```
4. Run the pod
  ```sh
  dendron exportPod --podId dendron.nextjs
  ```