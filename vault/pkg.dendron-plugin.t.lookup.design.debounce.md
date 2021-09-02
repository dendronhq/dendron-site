---
id: Y49ti3zvCqmI6dSajW3MT
title: Debounce
desc: ''
updated: 1630426296025
created: 1630426296025
---

`_.debounce()` with { maxWait } causes the debounced version of `onUpdatePickerItem` to actually act like `_.throttle()`, which then ensured that `onUpdatePickerItem` to fire at least every `maxWait` ms.

This sounds like what we want, but `onUpdateDebounced` calls were stacking up before the debounced `onUpdatePickerItem` had the chance to return.

This caused the initial `onUpdatePickerItem` call to be blocked. The first call to it was blocked by the second call, the second blocked by the third, ... and so on.


```sh
# _.debounce(func, 100, { leading: true, maxWait: 200 })
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 578} # first debounced call triggers immediately because of `leading`: true
{ctx: 'onUpdateDebounced'} # all subsequent calls to the debounced updatePickerItem are stacked up here.
{ctx: 'onUpdateDebounced'} # since maxWait is set, it waited for that amount until it fired another one.
{ctx: 'onUpdateDebounced'} # with our workspace with +10K notes, the `updatePickerItems` call takes about 520~530ms, so this exceeded the
{ctx: 'onUpdateDebounced'} # maxWait, firing another one.
{ctx: 'onUpdateDebounced'}
{ctx: 'onUpdateDebounced'}
{ctx: 'onUpdateDebounced'} # until it reached the final call (I typed 8 characters)
{ctx: 'updatePickerItems', profile: 4045} # This should have not fired if we were actually debouncing.
{ctx: 'updatePickerItems', profile: 3518} # Notice each of the subsequent `updatePickerItems` took 530ms-ish less milliseconds
{ctx: 'updatePickerItems', profile: 2995}
{ctx: 'updatePickerItems', profile: 2471}
{ctx: 'updatePickerItems', profile: 1945}
{ctx: 'updatePickerItems', profile: 1422}
{ctx: 'updatePickerItems', profile: 893}
```

This is how it looks like when you remove the `maxWait` option.

```sh
# _.debounce(func, 100, { leading: true })
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 624} # first one triggered immediately because of `leading`: true
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 605} # at some point I typed slower than 100ms, so it fired once more.
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 560} # last call waited 100ms and then triggered.
```

Waiting for longer than how long `updatePickerItems` usually takes would prevent this as well.
```sh
# _.debounce(func, 700, { leading: true, maxWait: 700 })
# this is essentially _.throttle(func, 700, { leading: true })
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 568} # leading: true fired it immediately
{ctx: 'onUpdateDebounced'}
{ctx: 'updatePickerItems', profile: 564} # all subsequent keystroke reset the timer before 700ms, so never triggered until last.
```

Two options:
1. remove `maxWait`
  - This does not guarantee `updatePickerItems` firing until the user make a sufficient pause, 
  - but need no more tweaking.

2. adjust `wait` as well as `maxWait` (use throttle).
  - Need constant tweaking, may need some analytics to figure out the sweet spot.
  - will ensure it fires at least once in a while.

I am leaning towards option 1, but I think it's a good idea to add some analytics on the `updatePickerItems` call duration regardless.
