const mapping = require('./data/mapping');

console.log(mapping.checkMap('abc', 'bcd'));
console.log(mapping.checkMap('bar', 'foo'));
console.log(mapping.checkMap('foo', 'bar'));
console.log(mapping.checkMap(12, 'abb'));