const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const [key, value] of Object.entries(object1)) {
    if (value.length > 1) {
      if (!eqArrays(value, object2[key])) {
        return false;
      }
    } else if (value !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;

// // Primitives as Values (test)

// const ab = { a: "1", b: "2" };

// const ba = { b: "2", a: "1" };

// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };

// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);

// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };

// const dc = { d: ["2", 3], c: "1" };

// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };

// assertEqual(eqObjects(cd, cd2), false); // => false
