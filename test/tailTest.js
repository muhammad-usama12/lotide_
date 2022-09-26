const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("removes index 0 / first element to provide the rest of the arrays", () => {
    const result = tail(["3", "6", "7"]);
    assert.deepEqual(tail(["3", "6", "7"]), result);
  });
});
