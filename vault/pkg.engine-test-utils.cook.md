---
id: 9884bdb4-8050-4659-bd51-143940b20db8
title: Cook
desc: ''
updated: 1623255663412
created: 1623255634411
---


### Stubbing dendron.yml in a test
- see [[Engine Test Utils|pkg.engine-test-utils]]
- see example [here](https://github.com/dendronhq/dendron/blob/dev-kevin/packages/engine-test-utils/src/__tests__/engine-server/markdown/backlinks.spec.ts#L68:L68)

```ts
test("backlink to home page", async () => {
  await runEngineTestV5(
    async ({ engine, vaults }) => {
      ...
    },
    {
      expect,
      preSetupHook: async (opts) => {
        ...
        TestConfigUtils.withConfig(
          (config) => {
            config.site = {
              siteHierarchies: ["alpha"],
              siteNotesDir: "docs",
              siteUrl: "https://foo.com",
              siteRootDir,
            };
            return config;
          },
          {
            wsRoot,
          }
        );
      },
    }
  );
});
```
