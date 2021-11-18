---
id: 1jIkH5R6W3pM8IYR2gOji
title: Cookbook
desc: ''
updated: 1637185314831
created: 1634737110155
---

## Configuration

### Add New Config 
> Configuration is currently under active migration and the information here will be revised once the configs have been fully migrated.
> As of this writing, we are on v3, where _commands_ and _workspace_ related configurations are migrated.

Dendron configuration in `dendron.yml` is defined in the following places:
  - new style configuration defined [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/configs/dendronConfig.ts) 
  - legacy style configuration defined [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/workspace.ts).

During config migration, these two types are used to compose an [IntermediateDendronConfig](https://github.com/dendronhq/dendron/blob/6a7be61db3ec7e6fab61871b30ec215c47f1cb59/packages/common-all/src/types/intermediateConfigs.ts#L28), which has both old and new config keys.

***

When introducing a new config key, consider these points below:

1. What namespace does this new config belong? Is the namespace migrated yet?
    - If the namespace is already migrated, 
      - Add the new config to an appropriate namespace of the new `DendronConfig`.
    - If the namespace is not yet migrated, 
      - Add the config to the top level of the old `DendronConfig`
      - These will later be migrated when the namespace is migrated.
        - Follow the config conventions descirbed below as if you are adding to the new namespace to simplify the migration process.
1. How should I name the config? Should it be optional or required?
    - For the sake of consistency, please consult the [[configuration conventions|dendron.dev.style.config]] note.
1. When adding a config key to the new namespace type(s), you also have to add a corresponding entry in the [DendronConfigEntryCollection](https://github.com/dendronhq/dendron/blob/6a7be61db3ec7e6fab61871b30ec215c47f1cb59/packages/common-all/src/constants/configs/dendronConfig.ts#L10)
    - This is an object that holds every possible config key's label and description that will later be used to automatically generate a configuration view.
    - If this step is omitted, Typescript will complain that `DendronConfigEntryCollection` is missing a key.
1. As per the [[configuration conventions|dendron.dev.style.config]], consider adding a sensible default of the newly introduced config key in the appropriate `genDefault{namespace}Config` method.
    - Each namespace is divided into separate modules [here](https://github.com/dendronhq/dendron/tree/master/packages/common-all/src/types/configs), and the namespace type and default generating methods live in the same module.
    - These default generating methods will be used by the `ConfigUtils` that are used to get and set configs later, so it is important to define a default here to simplify the process down the line.
1. You will notice that when introducing a new config that is required and has a default value, `Extension.test.ts` will fail. Some test in `engine-test-utils` may fail as well since the snapshot should be updated.
    - Update the failing test in `Extension.test.ts`
    - Update the snapshot by running `yarn run test:updateSnapshot`
1. Any time the config is changed, our the JSON schema that is validationg `dendron.yml` should be updated.
    - Run `yarn gen:data` at the root of the monorepo

### Accessing config values from `dendron.yml`

`ConfigUtils` is a collection of helpers that let you get or set config values from `dendron.yml`.
Prefer using the getters and setters defined here over directly accessing from the config object.

e.g.)

```js
  const config = engine.config;
  // bad
  const noteLookupConfig = config.commands.lookup.note;
  // good
  const noteLookupConfig = ConfigUtils.getLookup(config).note;

  ...
  // bad
  config.commands.lookup.note = someProcessedNoteConfig;
  // good
  ConfigUtils.setNoteLookupProps(config, "confirmVaultOnCreate", true);
```

The advantage over directly accessing
  - All helpers defined in `ConfigUtils` recursively account for missing values and replace them with the default values defined for the key you are accessing / modifying. 
  ```js
  static getProp<K extends keyof StrictConfigV3>(
    config: IntermediateDendronConfig,
    key: K
  ): StrictConfigV3[K] {
    const defaultConfig = ConfigUtils.genDefaultConfig();
    const configWithDefaults = _.defaultsDeep(config, defaultConfig);
    return configWithDefaults[key];
  }
  ```
  - It will also narrow down the types for you.
    - This is especially important during active config migration because we can avoid unnecessary type assertions.

Some commonly used getters and setters are defined in `ConfigUtils`. Use the best of your knowledge to use existing helpers or define a new one in a similar fashion if it doesn't exist.

## NoteProps

- try having plain objects on the note props

### Adding a new frontmatter property

In VSCode, you can use the "Goto symbol in workspace" command and type the function name or class name to find the following locations.

1. In `DNodeProps`, add the prop to the type. Unless the prop has to be mandatory for all notes, it should be optional (`prop?: type`). Most props don't have to be mandatory!
2. In `DNodeUtils.create` add prop name to `optionalProps`.
3. In `NoteUtils.serializeMeta` add prop name to `builtinProps`.
4. In `DNodeUtils.getCustomProps` add prop name to `blacklist`.
5. In `SchemaUtils.TEMPLATE_COPY_PROPS` add prop name if the prop should be copied over when a template note is used.
6. **If and only if** it's a prop that's required (mandatory) for all notes, in `foundation.ts` add prop name to `REQUIRED_DNODEPROPS`. Again, most props don't have to be mandatory.
