---
id: 9884bdb4-8050-4659-bd51-143940b20db8
title: Cook
desc: ''
updated: 1630729645089
created: 1623255634411
---


### Stubbing dendron.yml in a test
- see [[Engine Test Utils|pkg.engine-test-utils]]
- see example [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/markdown/backlinks.spec.ts)

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

### Running a single test
While your current working directory is the mono repo you can run a single jest test as follows:

```
jest /usr/local/workplace/dendron/packages/engine-test-utils/src/__tests__/common-all/nodev2.spec.ts
```

If you are testing non UI tests you can speed up the test by setting `--testEnvironment=node` such as

```
jest --testEnvironment=node /usr/local/workplace/dendron/packages/engine-test-utils/src/__tests__/common-all/nodev2.spec.ts
```


