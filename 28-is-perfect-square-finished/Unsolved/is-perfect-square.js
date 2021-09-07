// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method

// my solution as well as provided
var isPerfectSquare = function (num) {
  let i = 0;
  // loop that runs till return called checking perfect squares against num
  while (true) {
    let currentSquare = i * i;
    // if current perfect square same as number return true
    if (currentSquare === num) {
      return true;
      // if current square greater than num, num not a perfect square. return false
    } else if (currentSquare > num) {
      return false;
      // continue adding 1 to current i value
    } else {
      i++;
    }
  }
};

// or using math.sqrt
var isPerfectSquare2 = function (num) {
  const squared = Math.sqrt(num);
  const floored = Math.floor(Math.sqrt(num));

  return squared === floored ? true : false;
};

// All test.html passed
