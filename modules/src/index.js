const square = require('./modules/square');

console.log(square.area(4));

console.log('First');
console.log('Second');

setTimeout(function () {
  console.log('First');
}, 3000);
console.log('Second');
