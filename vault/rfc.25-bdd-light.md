---
id: m7iWYQRtPIYsIEd3zVPqg
title: 25 Bdd Light
desc: ''
updated: 1631100817523
created: 1631099989749
---

## Goals
Improve our overall testing through improving organization of test code, lowering duplication and improving the clarity of test output.

## Summary 
BDD (Behavior Driven Development) Light is a style of testing of using BDD verbage to hierarchically organize tests and test setup. 

## Context
Typical [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development) allows writing tests in English (Eg. cucumber is a popular BDD tool) and then having separate code regexes match parts of the written English and make it executable. Important benefit is that it allows non tech people to contribute/see test cases that are happening. The big big downside of Vanilla BDD is its overhead, its not at all cheap to do BDD. And this isn't a suggestion that we start doing BDD.

Now when it comes to regular testing typical unit test names tend to fall short in describing the scenarios in question. Even if developer tries to write out a descriptive name of the test the length of the screen often falls too short to actually give the **context** of the test in a single name. Plus its quite an overhead if we try to add context into each test name. So that's where BDD Light style comes in to add additional clarity to test structure. 

## Proposal

BDD Light attempts to organize tests in such a way that we get the benefit from BDD verbage showing clearly what we are testing (and what we are potentially missing) while keeping the agility of regular tests. 

In short to use BDD-Light we start off by using BDD verbs: GIVEN, WHEN, THEN, AND
* GIVEN: Where setup action goes.
* WHEN: When something happens such as calling something.
* THEN: Thats when our expected cases go.
* AND: Allows to stack additional conditions. 

Next step is to add the setup correlated with each block into a [beforeEach](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L4-L9) if the tests are readonly and the setup takes a long time (such as some integration tests) than consider using beforeAll (However, for unit tests always start out with beforeEach). This way we don't duplicate the setup between the tests and everything within the describe block will get the appropriate context.

If there is a single THEN (assert) for a WHEN scenario then we can combine the WHEN and THEN into a single statement as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L68-L70). If there are multiple THEN assertions for a WHEN scenario then have the WHEN be a describe and multiple THENs nested under it as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L11-L16). If we have an extra condition/branch under an existing WHEN then use and AND as in [example](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts#L24-L27). 

## Example

Here is an example of using BDD-Light setup [lruCache.spec.ts](https://github.com/dendronhq/dendron/blob/master/packages/engine-test-utils/src/__tests__/engine-server/util/lruCache.spec.ts) 

Which produces the output:

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

The test cases that are being tested can be seen from the output. 

## Tradeoffs
### PROs
* Makes the output of tests readable (to understand what is happening from output).
    * Quite often looking at the clearly defined output makes one see another test case to add to particular branch.
        * And since the setup is re-used adding such test is cheap.
* Makes the failures much more clear since context is given from test naming.
* Allows for writing one assert per test, without it being a headache.
* Avoids duplicating setup.  
* Compliments 'jest' well. Since jest doesn't allow messages in their 'expect' asserts having descriptive focused test names fills this gap. 


### CONs
* Takes a little bit of time to get used to, since its a bit cludgy to add things into beforeEach especially for 'WHEN' action cases. But after a little bit of time it becomes pretty natural. 
* If beforeEach used with slow initialization tests can run slower since setup is triggered per test.
* If beforeAll is not used carefully, can cause confusing test failures due to tests modifying shared state (same CON with any common initialization though).

## Discussion
[Github discussion thread](https://github.com/dendronhq/dendron/issues/1309)
