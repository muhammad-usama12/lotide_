const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (arr) {
  if (arr) {
    return arr.slice(1);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

const words2 = ["Hello", "World"];
tail(words2);
console.log(assertEqual(words2.length, 1));

// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));
// console.log(tail(["Yo Yo"]));
// console.log(tail([]));
