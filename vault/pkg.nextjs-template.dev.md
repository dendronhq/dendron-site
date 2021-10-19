---
id: PgwAXFfotfgpFVqHQRlBl
title: Dev
desc: |
  Development related
updated: 1631554070420
created: 1628376960868
---

## Build

See build instructions [[here|pkg.plugin-core.quickstart#build]] 

## Run
<!-- How to run the program from the current source code -->
1. Navigate to the nextjs-template
  ```
  cd packages/nextjs-template
  ```
1. To run nextjs using sample data, run the following ^gDKNFAxVBU4u
  ```
  curl -LO https://artifacts-prod-artifactb7980f61-19orqnnuurvwy.s3.us-west-2.amazonaws.com/artifacts/dendron-site.zip 
  unzip dendron-site.zip
  ```
1. Run the nextj sapp
  ```sh
  yarn dev
  ```
1. Navigate to your browser. For example http://localhost:3000/notes/b0fe6ef7-1553-4280-bc45-a71824c2ce36 to go to a particular note
1. Build your notes for static hosting
  ```sh
  yarn export
  ```
1. Preview your statically hosted notes 
  ```sh
  cd out
  python -m SimpleHTTPServer 8000
  # open localhost:8000 to see your notes
  ```

## Run with your own data
1. Navigate to your workspace root
1. Run the following command. 
  ```sh
  dendron exportPod --podId dendron.nextjs --config "dest={path/to/nextjs-template]"
  ```
