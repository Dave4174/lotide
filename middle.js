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

module.exports = middle;