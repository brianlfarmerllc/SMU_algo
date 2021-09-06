// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

// my solution
var lookAndSay = function (n) {
  // convert number to array of string digets
  let numArray = n.toString().split("");
  // empty array to hold pairs
  let pairs = [];

  // iterate over array filtering array by current numArray index
  for (let i = 0; i < numArray.length; i++) {
    // value for number instances found
    let found = numArray.filter((element) => element === numArray[i]);
    // creating a pair of found values and number value
    let count = [found.length, numArray[i]];
    // checking to see if already exists in pair array
    let exists = pairs.find((el) => el[1] === numArray[i]);
    // if does not exist push to array
    if (!exists) {
      pairs.push(count);
    }
  }
  // joining together in number string
  let numString = pairs.join("").replace(/,/g, "");

  // returning as a whole number
  return parseInt(numString);
};

// provided solution
var lookAndSay2 = function (n) {
  var numString = n.toString();
  var result = "";

  var currentCount = 1;
  var currentDigit = numString[0];
  for (var i = 1; i <= numString.length; i++) {
    var digit = numString[i];

    if (digit === currentDigit) {
      currentCount++;
    } else {
      result += currentCount;
      result += currentDigit;
      currentCount = 1;
      currentDigit = digit;
    }
  }

  return parseInt(result);
};

// All Tests Passed when running test HTML
