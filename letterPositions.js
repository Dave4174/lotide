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

const letterPositions = function(sentence) {
  const results = {};
  
  for (let index in sentence) {
    if (sentence[index] !== ' ') {
      if (!results[sentence[index]]) {
        results[sentence[index]] = [Number(index)];
      } else {
        results[sentence[index]].push(Number(index));
      }
    }
  }

  return results;
};

const theSentence = "lighthouse in the house";

assertArraysEqual(letterPositions(theSentence).l, [0]);
assertArraysEqual(letterPositions(theSentence).i, [1, 11]);
assertArraysEqual(letterPositions(theSentence).g, [2]);
assertArraysEqual(letterPositions(theSentence).h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions(theSentence).t, [4, 14]);
assertArraysEqual(letterPositions(theSentence).o, [6, 19]);
assertArraysEqual(letterPositions(theSentence).u, [7, 20]);
assertArraysEqual(letterPositions(theSentence).s, [8, 21]);
assertArraysEqual(letterPositions(theSentence).e, [9, 16, 22]);
assertArraysEqual(letterPositions(theSentence).n, [12]);