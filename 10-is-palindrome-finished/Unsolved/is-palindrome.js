// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  // create lowercase version of normal and reversed string
  let normal = str.toLowerCase();
  let reversed = str.toLowerCase().split("").reverse().join("");
  // compare and return true or false
  return normal === reversed ? true : false;
};

// All Tests Passed when running test HTML
