const event = require('events');
const util = require('util');

const EventEmitter = event.EventEmitter;
class Person extends EventEmitter {
};

const p = new Person();
p.on('howAreYou', function() {
    console.log('howAreYou 이벤트 발생 ')
});


// 이벤트 핸들러가 정의된 이벤트
console.log('howAreYou 이벤트 발생');
const ret1 = p.emit('howAreYou');
console.log('이벤트 발생 결과 : ', ret1);

// 이벤트 핸들러가 없는 이벤트
console.log('WTH 이벤트 발생');
const ret2 = p.emit('WTH');
console.log('이벤트 발생 결과 : ', ret2);
