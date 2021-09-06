// Write code to create a function that accepts a string and determines if the string is a valid number. You may not use any regex, built-in methods type conversion to accomplish this.

// my solution
var isNumeric = function (str) {
  // convert string to number
  let isNumber = Number(str);
  // ternary operator to check if valid number
  return isNumber ? true : false;
};

// Provided solution
var isNumeric = function (str) {
  var digits = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };

  var hasNum = false;
  var hasDecimal = false;

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (digits[char]) {
      hasNum = true;
      continue;
    }

    if (i === 0) {
      if (char === "-" || char === "+") {
        continue;
      }
    }

    if (char === ".") {
      if (hasDecimal === true) {
        return false;
      }

      hasDecimal = true;
      continue;
    }

    return false;
  }

  if (hasNum) {
    return true;
  }

  return false;
};

// All Tests Passed when running test HTML
