// Write code to merge two sorted arrays into a new sorted array

// using a merge sort algorithim to handle 2 sorted arrays merged into 1 sorted array
var mergeSorted = function (arr1, arr2) {
  // empty array to push in sorted elements
  const output = [];
  // index vars for each array starting at 0
  let leftIndex = 0;
  let rightIndex = 0;
  // check to see if there are elements left in both arrays to compare against each other
  while (leftIndex < arr1.length && rightIndex < arr2.length) {
    // select elements from both array based on index count
    let leftEl = arr1[leftIndex];
    let rightEl = arr2[rightIndex];
    // check to see what element is lower and push number to output
    //also increase index of left or right
    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  // return output and remaining sorted in left or right array.
  // If no elements past index nothing returns

  return [...output, ...arr1.slice(leftIndex), ...arr2.slice(rightIndex)];
};

// provided solution
var mergeSorted2 = function (arr1, arr2) {
  var result = [];

  var idx1 = 0;
  var idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    var num1 = arr1[idx1];
    var num2 = arr2[idx2];

    if (num1 < num2) {
      result.push(num1);
      idx1++;
    } else {
      result.push(num2);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    var num1 = arr1[idx1];
    result.push(num1);
    idx1++;
  }

  while (idx2 < arr2.length) {
    var num2 = arr2[idx2];
    result.push(num2);
    idx2++;
  }

  return result;
};

// all test.html passed
