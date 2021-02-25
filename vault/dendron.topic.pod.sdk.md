---
id: 6301a5b4-d88f-4ecd-ad72-0880b1bf14b0
title: Sdk Reference
desc: ''
updated: 1614215063307
created: 1614214703771
---


## PublishPod

Base class to be extended when creating a pod for [[publishing|dendron.topic.pod#publish]]

### plant(opts: PublishPodPlantOpts<T>)
- opts
    - engine: DEngineClientV2
    - config: PublishPodConfig
    - note: NotePropsV2
```ts
export type NotePropsV2 = {
  id: string;
  title: string;
  desc: string;
  links: DLink[];
  fname: string;
  updated: string;
  created: string;
  parent: DNodePointerV2 | null;
  children: DNodePointerV2[];
  body: string;
  custom?: any;
  schema?: { moduleId: string; schemaId: string };
  vault: DVault;
  ...
};
```