// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

// Loops through array of numbers checking at each array index if divisable by 3&5, 5 or 3 and console logging result
var fizzBuzz = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 15 === 0) {
      console.log("Fizz Buzz");
    } else if (arr[i] % 5 === 0) {
      console.log("Buzz");
    } else if (arr[i] % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(arr[i]);
    }
  }
};

// All Tests Passed when running test HTML
