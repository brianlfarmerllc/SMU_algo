// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

// my solution
var arraySearch2D = function (arr) {
  // join arrays into a single array
  const single = arr.join("").split("");
  // filter single array for "X" and return length
  return single.filter((el) => el === "X").length;
};

// provided solution using a loop insidde a loop and increasing count if index === "X"
var arraySearch2D2 = function (arr) {
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === "X") {
        count++;
      }
    }
  }

  return count;
};

// All test.html passed
