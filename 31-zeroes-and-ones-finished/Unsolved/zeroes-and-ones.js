// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

// my solution also similar to provided soulution
var zeroesAndOnes = function (str) {
  // set inital count in case no zeros or ones or empty string
  let count0 = 0;
  let count1 = 0;
  // loop over string checking if index is 0 or 1 and increase count
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count0 += 1;
    } else if (str[i] === "1") {
      count1 += 1;
    }
  }
  // return true if counts are equal and false if not
  return count1 === count0 ? true : false;
};

// all test.html pass
