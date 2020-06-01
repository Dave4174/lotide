const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const eqArrays = function(array1, array2) {
//   let match = true;
//   if (array1.length !== array2.length) {
//     match = false;
//   } else {
//     array1.forEach(function(arrayItem, i) {
//       if (arrayItem !== array2[i]) {
//         match = false;
//       }
//     });
//   }
//   return match;
// };

module.exports = assertArraysEqual;