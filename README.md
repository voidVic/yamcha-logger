# yamcha-logger

light logger module
## How to use
---
## Require Logger
```
const Logger = require('yamcha-logger').Logger;
```

## Create new logger instance
```
let l1 = new Logger();
let l2 = new Logger();
```

## Add Static values to log instances
```
l1.add({'method': 'fake-Method-1', 'data': 'Some-Fixed-Data'});
```
## Print logs
```
l1.info('Message without any object param');
l1.error('Message with object param', {'error': "fake-Error"});
l1.warn('Again a message without object params');
```

## Adding static values multiple times
```
l2.add({'data': 'This is some other Data'});
l2.add({'data2': 'again adding some data'});
l2.info('Print this Log');
```

## Deleting some value from the log instance
```
l2.delete('data2');
l2.info('data2 field is deleted now');
```

check sample.js on how to use this logger
