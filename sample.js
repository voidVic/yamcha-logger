const Logger = require('./index.js').Logger;

let l1 = new Logger();
let l2 = new Logger();

l1.add({'method': 'fake-Method-1', 'data': 'Some-Fixed-Data'});
l1.info('Message without any object param');
l1.error('Message with object param', {'error': "fake-Error"});
l1.warn('Again a message without object params');
console.log('\n\n\n');
l2.add({'data': 'This is some other Data'});
l2.add({'data2': 'again adding some data'});
l2.info('Print this Log');
l2.delete('data2');
l2.info('data2 field is deleted now');

