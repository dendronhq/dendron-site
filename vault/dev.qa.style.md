---
id: 42iCXsVuFhAGs3IS83KFp
title: Style
desc: ''
updated: 1632725493627
created: 1632724441671
---

## Summary

Test-specific style guide and best practices. Largely derived from [[rfc.25-bdd-light]]

## Structure tests with BDD vocabulary
Utilize hierarchial test structure utilizing the BDD vocabulary of GWT (Given When Then).

* **GIVEN**: Where setup action goes.
* **WHEN**: When something happens such as calling something.
* **THEN**: Thats when our expected cases go.
* **AND**: Allows to stack additional conditions. 

Group the setup cases in `describe` blocks and add the the setup correlated with each block into a [beforeEach](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L4-L9) if the tests are readonly and the setup takes a long time (such as some integration tests) then consider using `beforeAll` (However, for unit tests always start out with beforeEach). Grouping the setup logic into `before` statements allows us to avoid duplicating the setup between the tests and everything within the describe block will get the appropriate context.


IF there is a single THEN (assert) for a WHEN scenario then we can combine the WHEN and THEN into a single statement as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L68-L70), while still utilizing the vocabulary to result in clear test names. 

IF there are multiple THEN assertions for a WHEN scenario then have the WHEN be a `describe` and multiple THENs nested under it as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L11-L16), allowing to not repeat the GIVEN & WHEN code for each THEN while still being able to depend on the previously performed steps (of GIVEN & WHEN).

IF we have an extra condition/branch under an existing WHEN then use and AND as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L24-L27). 

## Example test output
When this pattern is followed we can see much more clearly what has been tested (and what has not) just by looking at the output of tests and can add additional test cases to particular branch of the tests (without having to duplicate the setup logic).

```
 PASS  packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts (13.51s)
  lruCache.spec.ts
    GIVEN lruCache configured for 5 elements
      WHEN added 5 elements
        ✓ THEN all 5 elements are present in the cache (3ms)
        AND added 6th element
          ✓ THEN last 5 elements are present in the cache (1ms)
          ✓ THEN first element added is NOT in the cache
        AND asked for element #1
          AND added 6th element
            ✓ THEN element #1 is IN the cache (1ms)
            ✓ THEN element #2 is NOT in the cache
            ✓ THEN elements 3-6 are in the cache (1ms)
```


