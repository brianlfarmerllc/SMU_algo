// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

// my solution
var isUnique = function (arr) {
  // inital true value for empty arr
  let unique = true;
  // loop over array to find duplicates
  for (let i = 0; i < arr.length; i++) {
    const found = arr.filter((el) => el === arr[i]);
    // if more than two found set to false and stop loop
    if (found.length > 1) {
      unique = false;
      break;
    }
  }
  //   return true or false
  return unique;
};

// provided solution
var isUnique = function (arr) {
  var numMap = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (numMap[currentNumber] === true) {
      return false;
    }

    numMap[currentNumber] = true;
  }

  return true;
};

// All Tests Passed when running test HTML
