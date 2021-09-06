// Write code to create a function that accepts a string and returns the string in camelCase

// my solution
var camelCase = function (str) {
  // convert to array to lower case
  let arr = str.toLowerCase().split(" ");
  // store first word
  let camel = [arr[0]];
  // iterate starting at 1st index caping fisrt letter and pushing to camel array
  for (let i = 1; i < arr.length; i++) {
    let cap = arr[i].charAt(0).toUpperCase();
    let rest = arr[i].slice(1);
    camel.push(cap + rest);
  }
  // join and return camelCase
  return camel.join("");
};

// provided solution
var camelCase = function (str) {
  var result = "";
  var words = str.toLowerCase().split(" ");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }

    result += letters.join("");
  }

  return result;
};

// All Tests Passed when running test HTML
