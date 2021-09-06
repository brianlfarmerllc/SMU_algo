// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

// my solution
var linearSearch = function (arr, target) {
  // set inital value to be returned if target not in array
  let index = -1;
  // loop through array and check if value at index matches target
  for (let i = 0; i < arr.length; i++) {
    // if matches set index to i
    if (arr[i] == target) {
      index = i;
    }
  }
  // return index
  return index;
};

// provided solution
var linearSearch = function (arr, target) {
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber === target) {
      return i;
    }
  }

  return -1;
};

// All Tests Passed when running test HTML
