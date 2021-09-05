// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  // convert string to lower case for comparability and to an array for iteration
  let arr = str.toLowerCase().split("");
  // initial global value to return if no vowels present
  let total = 0;
  // iterate arr to compare for vowels and increase count
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[aeiou]/)) {
      total += 1;
    }
  }
  // return number of vowels
  return total;
};

// All Tests Passed when running test HTML
