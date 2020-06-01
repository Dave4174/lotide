const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array when 0 items in submitted array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an empty array when 1 item in submitted array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle item when an odd # of items in submitted array", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("returns the two middle items when an even # items in submitted array", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});