const assert = require("chai").assert;
const middle = require("../middle");

describe("#tail", () => {
  it("it provides the middle index of an array", () => {
    const result = middle(["3", "6", "7"]);
    assert.deepEqual(middle(["3", "6", "7"]), result);
  });

  it("it states undefined if no values are present in the array", () => {
    const result = middle([]);
    assert.deepEqual(middle([]), result);
  });
});
