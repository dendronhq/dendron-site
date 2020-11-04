---
id: 61833b7d-1cfe-4500-b78d-b30962a906cd
title: Calendar Integration
desc: ''
updated: 1602708411014
created: 1602708411014
stub: false
---

# Calendar Integration

## Goals

Support integrating calendars like google calendar with Dendron

## Proposal

- incorporate as a Google Calendar Pod

### Import

```yml
apiToken: 
range: allEvents
```

### Sync

```yml


```

# Google Calendar Pod

## Publish

- configuration: 
    - summary
    - location
    - description
    - start
    - end
- not covered
    - recurrence
    - attendees
    - reminders
- flow

```sh
cd /path/to/workspace
dendron-cli dendron-cli publishPod --wsRoot . --vault ./vault --podId dendron.gcal --noteByName gcal.test --config /tmp/config.yml
```



### Resources
- api: https://developers.google.com/calendar/create-events
- sdk:
```ts
// Refer to the Node.js quickstart on how to setup the environment:
// https://developers.google.com/calendar/quickstart/node
// Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
// stored credentials.

var event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles',
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'},
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10},
    ],
  },
};

calendar.events.insert({
  auth: auth,
  calendarId: 'primary',
  resource: event,
}, function(err, event) {
  if (err) {
    console.log('There was an error contacting the Calendar service: ' + err);
    return;
  }
  console.log('Event created: %s', event.htmlLink);
});

```


### Export

## Flows
