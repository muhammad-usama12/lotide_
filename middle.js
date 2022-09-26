const eqArrays = require("./eqArrays");

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

module.exports = middle;
