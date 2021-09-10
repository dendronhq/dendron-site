---
id: AoaqCwCQfZyPWW4e
title: Calendar
desc: ''
updated: 1628074665025
created: 1627711827222
---


- Had a long discussion with my coworker on how to think about this
  * We tried to figure out what the right responses are when interacting with the calendar and opening daily notes
  * We asked us what is it that is happening for the user when he switches the calendar mode. What is an analogy to capture it
  * We figured it's a zoom and used googlemaps as an example
  * Then we asked us what the behavior would be if it is "only" a zoom and suddenly it made all sense. We could derive the correct implementation from it
  * This made us realize that we are working with different languages/dimensions. The implementation, representation and the user mental model as the zoom analogy
  * If you don't realize this you will get confused and frustrated.
  * We realized also that we worked it out bottom-up and not top-down also observing that we mostly work bottom-up.
    + Generally we can travers these dimensions/languages from either direction but to materialize them a bottom-up approach seems to be a good default.
  * Complicated code is a good sign your mental model is wrong
    + complication is reduced by the right concept, mental model, metapher
  * sources to read about this
    + https://pointjupiter.com/ux-mental-model-representation-implementation-user-experience-development/
    + https://hbr.org/2005/04/how-strategists-really-think-tapping-the-power-of-analogy
  * Conclusions we made based on that:
    + active month note `2021.07` should not have an active highlight in montly calendar view 
      + zooming in (month to day when month is active) should not change the active note
    + open a new calendar entry to the right and not replace it
      + allows the user to easily switch between already opened entries
    + show monthly mode when montly entry is active
      + adjusting the zoom to the appropriate level
    + meaning tabs lead calendar; calendar only leads when clicking on a field
      + user action determines behavior
      + mode switching is a kind of zooming
    + Inconsitencies
      + antd Calender does show current day but not current month
    + issues
      + calendar reload on every day change (stopped to happen now..)
      + when `Calendar`'s prop `value` is `null`, which has the purpose to have no active/assigned/highlighted day, causes an error when switching months from the header
        + This might be the reason why official `null` is not supported. But then how can I tell the antd's `Calendar` to not hightlight a day?
      + I came across a failure within `getMaybeDatePortion` where it was called with `journalName` being `undefined`.
