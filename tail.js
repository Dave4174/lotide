const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(theArray) {
  return theArray.slice(1);
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Check that tail() works correctly
assertEqual(tail(words)[0], "Lighthouse");
assertEqual(tail(words)[1], "Labs");

const words2 = ["Yo Yo"];
assertEqual(tail(words2).length, 0);

const words3 = [];
assertEqual(tail(words3).length, 0);