// Write code to create a function that accepts a string and returns an acronym for the given string

// My solution
var acronymBuilder = function (str) {
  // convert str to arr map over returning first character to uppercase
  const acronym = str.split(" ").map((word) => word.charAt(0).toUpperCase());
  // join letters and return
  return acronym.join("");
};

// Provided solution
var acronymBuilder2 = function (str) {
  var words = str.split(" ");
  var result = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    result += word[0].toUpperCase();
  }

  return result;
};

// All Tests Passed when running test HTML
