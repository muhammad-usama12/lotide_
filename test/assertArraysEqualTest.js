const assertArraysEqual = require("../assertArraysEqual");
// test

assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
