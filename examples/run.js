// var ibn = require('is-bounded-number'); // From npm
var ibn = require('../src/index');      // Local copy

console.log(`const ibn = require('is-bounded-number')`);
console.log(``);
console.log(`Examples returning true:`);
console.log(`ibn(0) returns ${ibn(0)}`);
console.log(`ibn(1) returns ${ibn(1)}`);
console.log(`ibn(1000000) returns ${ibn(1000000)}`);
console.log(`ibn(1e15) returns ${ibn(1e15)}`);
console.log(`ibn(-1e15) returns ${ibn(-1e15)}`);
console.log(`ibn(1000, 1e6) returns ${ibn(1000, 1e6)}`);
console.log(``);
console.log(`Examples returning false:`);
console.log(`ibn(1e15 + 1) returns ${ibn(1e15 + 1)}`);
console.log(`ibn(-1e15 - 1) returns ${ibn(-1e15 - 1)}`);
console.log(`ibn(1e6, 1000) returns ${ibn(1e6, 1000)}`);
console.log(`ibn(Infinity) returns ${ibn(Infinity)}`);
console.log(`ibn(NaN) returns ${ibn(NaN)}`);
console.log(`ibn(null) returns ${ibn(null)}`);
console.log(`ibn("aString") returns ${ibn("aString")}`);
console.log(`ibn(true) returns ${ibn(true)}`);
console.log(`ibn(false) returns ${ibn(false)}`);
console.log(``);
