// Write code to return the largest number in the given array

var maxNum = function (arr) {
  // sorts array in decending order and stored in the sorted variable
  let sorted = arr.sort((num1, num2) => num2 - num1);

  // return first number in the sorted array
  return sorted[0];
};

// All Tests Passed when running test HTML
