const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length && arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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
