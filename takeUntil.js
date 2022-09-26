const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function (arr, callback) {
  let result = [];
  for (let element of arr) {
    if (callback(element)) {
      return result;
    }
    result.push(element);
  }
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, (x) => x < 0);
// console.log(results1);

// console.log("---");

// const data2 = [
//   "I've",
//   "been",
//   "to",
//   "Hollywood",
//   ",",
//   "I've",
//   "been",
//   "to",
//   "Redwood",
// ];
// const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);

// assertArraysEqual(results1, [-1, 2, 3, 5]);
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
