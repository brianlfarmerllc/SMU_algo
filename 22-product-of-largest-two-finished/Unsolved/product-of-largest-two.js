// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

// my solution
var productOfLargestTwo = function (arr) {
  // sort array in decending order
  let sorted = arr.sort((a, b) => b - a);
  // return product of two largest
  return sorted[0] * sorted[1];
};

// provided solution
var productOfLargestTwo2 = function (arr) {
  var largest = null;
  var secondLargest = null;

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber > largest || largest === null) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest || secondLargest === null) {
      secondLargest = currentNumber;
    }
  }

  return largest * secondLargest;
};

// All Tests Passed when running test HTML
