const assertEqual = require("../assertEqual");
const eqArrays = require("./eqArrays");

// eqArrays test

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

// assert test

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should fail
assertEqual(eqArrays([1, 2, 3], [4, 5, 6]), true); // => should fail
assertEqual(eqArrays([1, 2, 3], [4, 5, 6]), false); // => should pass
