// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

// iterate i starting at 0 until equal to num console logging result if divisiable by 2 with remainder of 0
var logEvenNums = function (num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

// All Tests Passed when running test HTML
