// Write code to create a function takes a string and returns the string with all of the letter cases swapped

// using regex to match each letter and convert to lower or uppercase
var swapCase = function (str) {
  const arr = str.split("");
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/[a-z]/)) {
      newArr.push(arr[i].toUpperCase());
    }
    if (arr[i].match(/[A-Z]/)) {
      newArr.push(arr[i].toLowerCase());
    }
    if (arr[i].match(/[" "]/)) {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
};
// using comparative operator to check if letter is upper or lowercase
var swapCase2 = function (str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var letter = str[i];

    if (letter === letter.toUpperCase()) {
      result += letter.toLowerCase();
    } else {
      result += letter.toUpperCase();
    }
  }

  return result;
};

// All Tests Passed when running test HTML
