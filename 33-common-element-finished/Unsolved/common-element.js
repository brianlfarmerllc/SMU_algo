// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method

// my solution
var commonElement = function (arrA, arrB) {
  // loop over first array
  for (let i = 0; i < arrA.length; i++) {
    // loop over second array comparing arrA value at index to arrB value at each array index
    for (let k = 0; k < arrB.length; k++) {
      // compare values and if equal return value at index
      if (arrA[i] === arrB[k]) {
        return arrA[i];
      }
    }
  }
};

// provided solution
var commonElement = function (arrA, arrB) {
  var elements = {};

  for (var i = 0; i < arrA.length; i++) {
    var num = arrA[i];
    elements[num] = true;
  }

  for (var i = 0; i < arrB.length; i++) {
    var num = arrB[i];

    if (elements[num] === true) {
      return num;
    }
  }
};

// all test.html passed
