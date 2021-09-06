// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// my solution
var reverseInPlace = function (array) {
  // find middle of array rounded down
  let middle = Math.floor(array.length / 2);
  // declare temp value
  let temp;

  // loop over array swapping values at indexes from outside working toward middle
  // if array was [1, 2, 3, 4, 5] array is [5, 2, 3, 4, 1] after first pass.

  for (let i = 0; i < middle; i++) {
    // set value to temp at array index
    temp = array[i];

    // array value at [i] now equals value at end of array minus [i] value
    array[i] = array[array.length - 1 - i];

    // array minus [i] value equals valued stored in temp
    array[array.length - 1 - i] = temp;
  }
  console.log(array);
  return array;
};

// All Tests Passed when running test HTML
