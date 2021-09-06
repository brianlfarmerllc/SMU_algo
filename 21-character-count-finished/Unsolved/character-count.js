// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

// my solution
var characterCount = function (str) {
  // convert string to array
  let arr = str.split("");
  // empty object for character count
  let count = {};
  // loop over array filtering for letters equal to letter at current index
  for (let i = 0; i < arr.length; i++) {
    let found = arr.filter((letter) => letter === arr[i]);
    // create key pair to add to count object
    count[arr[i]] = found.length;
  }
  // return count object
  return count;
};

// provided solution
var characterCount2 = function (str) {
  var charMap = {};

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char in charMap) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  return charMap;
};

// All Tests Passed when running test HTML
