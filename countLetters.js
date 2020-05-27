const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = 1;
      } else {
        results[letter]++;
      }
    }
  }

  return results;
};

const theSentence = "lighthouse in the house";

console.log(countLetters(theSentence));
const result1 = countLetters(theSentence);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);