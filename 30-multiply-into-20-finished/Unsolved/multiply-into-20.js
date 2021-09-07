// Write code to create a function that accepts an array of unique numbers
// If any two numbers in the array product equals 20, return true, else return false

// my solution
var multiplyInto20 = function (arr) {
  // loop over array
  for (let i = 0; i < arr.length; i++) {
    // divide 20 by value at current index
    const lookingFor = 20 / arr[i];
    // filter array for looking for value -- this works because no number * itself equals 20
    const isThere = arr.filter((el) => el === lookingFor);
    // if it exists return tru
    if (isThere.length > 0) {
      return true;
    }
  }
  // else return false
  return false;
};

// provided solution
var multiplyInto20 = function (arr) {
  var numMap = {};

  for (var i = 0; i < arr.length; i++) {
    var currentNum = arr[i];

    var neededNumber = 20 / currentNum;

    if (numMap[neededNumber]) {
      return true;
    } else {
      numMap[currentNum] = true;
    }
  }

  return false;
};

// All test.html pass
