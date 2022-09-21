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

const middle = function (arr) {
  let result = [];
  if (arr.length < 3) {
    return result;
  } else if (arr.length % 2 !== 0) {
    result.push((arr.length - 1) / 2 + 1);
  } else {
    result.push(arr.length / 2, arr.length / 2 + 1);
  }
  return result;
};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [3]
console.log(middle([1, 2]));
console.log(middle([1]));
