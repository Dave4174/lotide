const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(theObject, callback) {
  let theKey;
  
  for (let index in theObject) {
    if (callback(theObject[index])) {
      if (!theKey) {
        theKey = index;
      }
    }
  }

  return theKey;
};

assertEqual(findKey({"Blue Hill": { stars: 1 },
                     "Akaleri":   { stars: 3 },
                     "noma":      { stars: 2 },
                     "elBulli":   { stars: 3 },
                     "Ora":       { stars: 2 },
                     "Akelarre":  { stars: 3 }}, x => x.stars === 2), "noma");

assertEqual(findKey({"Blue Hill": { stars: 1 },
                     "Akaleri":   { stars: 3 },
                     "noma":      { stars: 2 },
                     "elBulli":   { stars: 3 },
                     "Ora":       { stars: 2 },
                     "Akelarre":  { stars: 3 }}, x => x.stars === 4), undefined);