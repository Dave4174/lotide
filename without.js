const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let match = true;
  if (array1.length !== array2.length) {
    match = false;
  } else {
    array1.forEach(function(arrayItem, i) {
      if (arrayItem !== array2[i]) {
        match = false;
      }
    });
  }
  return match;
};

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  source.forEach(function(item) {
    filteredArray.push(item);
  });
  filteredArray.forEach(function(item, i) {
    itemsToRemove.forEach(function(itemToRemove) {
      if (item === itemToRemove) {
        filteredArray.splice(i, 1);
      }
    });
  });
  return filteredArray;
};

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);