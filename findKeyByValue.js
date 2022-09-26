const assertEqual = require("./assertEqual");

const findKeyByValue = (object, key) => {
  let objectKeys = Object.keys(object);
  let index = 0;
  for (let element in object) {
    if (object[element] === key) {
      return objectKeys[index];
    }
    index++;
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// // extra test scenarios

// assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "THe Boys"), "sci-fi");
