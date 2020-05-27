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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(myArray) {
  let outputArray = [];
  if (myArray.length > 2) {
    if (myArray.length % 2 === 1) {
      outputArray.push(myArray[(myArray.length - 1) / 2]);
    } else {
      outputArray.push(myArray[(myArray.length / 2) - 1]);
      outputArray.push(myArray[myArray.length / 2]);
    }
  }
  return outputArray;
};

// Test cases
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);

const words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);