// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  // value of 1 stored in variable if num is 0
  let total = 1;
  // multiply total by all integers  less than or equal to num
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  // return total
  return total;
};

// All Tests Passed when running test HTML
