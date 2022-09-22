const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length && arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => word[1]);
console.log(results2);
assertArraysEqual(results2, ["g", "c", "t", "m", "t"]);

const results3 = map(words, (word) => word[4]);
console.log(results3);
assertArraysEqual(results3, [
  "undefined",
  "undefined",
  "undefined",
  "undefined",
  "undefined",
]);
