const mapping = require('./data/mapping');

try {
    console.log(mapping.checkMap('abc', 'bcd'));
} catch(e) {
    console.log(e);
}

try {
    console.log(mapping.checkMap('bar', 'foo'));
} catch(e) {
    console.log(e);
}

try {
    console.log(mapping.checkMap('foo', 'bar'));
} catch(e) {
    console.log(e);
}

try {
    console.log(mapping.checkMap(12, 'abb'));
} catch(e) {
    console.log(e);
}
