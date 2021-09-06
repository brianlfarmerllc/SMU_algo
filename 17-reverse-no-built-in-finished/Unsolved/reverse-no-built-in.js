// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// my solution
var reverse = function (str) {
  // empty array
  const reversed = [];
  // loop over string adding each letter to front of array
  for (let i = 0; i < str.length; i++) {
    reversed.unshift(str[i]);
  }
  // join and return
  return reversed.join("");
};

// provided solution
var reverse2 = function (str) {
  var result = "";

  for (var i = str.length - 1; i >= 0; i--) {
    var letter = str[i];
    result += letter;
  }

  return result;
};

// All Tests Passed when running test HTML
