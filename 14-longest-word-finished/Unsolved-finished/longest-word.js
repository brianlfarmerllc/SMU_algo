// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

// my solution
var longestWord = function (str) {
  // create array of words
  const words = str.split(" ");
  // associate index to word length
  const lengths = words.map((word, index) => [word.length, index]);
  // sort word lengths and return index of longest word
  const longest = lengths.sort((a, b) => b[0] - a[0])[0][1];
  // return longest word
  return words[longest];
};

// provided solution
var longestWord2 = function (str) {
  // create array of words
  var words = str.split(" ");
  // set inital value for variable to return
  var longestWord = words[0];
  // loop over array comparing current word to length stored in longestWord variable
  for (var i = 1; i < words.length; i++) {
    var currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  // return longest word
  return longestWord;
};

// All Tests Passed when running test HTML
