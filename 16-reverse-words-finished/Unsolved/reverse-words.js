// Write code to create a function that accepts a string (`str`) and reverses the order of the words in the string

var reverseWords = function (str) {
  // convert to array and reverse
  const reversed = str.split(" ").reverse();
  // join and return
  return reversed.join(" ");
};

// All Tests Passed when running test HTML
