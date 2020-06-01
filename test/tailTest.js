const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns an empty array when 0 items in submitted array", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns an empty array when 1 item in submitted array", () => {
    assert.deepEqual(tail(["Lighthouse"]), []);
  });

  it("returns the remaining items when > 1 item in submitted array", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});