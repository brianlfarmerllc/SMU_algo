// Write code to add all the numbers in `arr` and return the total

// using the reduce methond to sum numbers in array
var sumArray = function (arr) {
  return arr.reduce((total, current) => total + current);
};

// using for loop to sum numbers in array
var sumArray2 = function (arr) {
  // give total an initial value of 0
  let total = 0;

  // iterate through array adding each value at index to total
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }

  // return total holding sum of array
  return total;
};

// All Tests Passed when running test HTML
