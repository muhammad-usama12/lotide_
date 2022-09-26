const assertEqual = require("./assertEqual");

const countLetters = function (words) {
  let result = {};
  let splitWords = words.split(" ").join("");
  for (let letter of splitWords) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;

// assertEqual(countLetters("Batman"));
// assertEqual(countLetters("LHL"));
