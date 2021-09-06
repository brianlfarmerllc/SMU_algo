// Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

// my solution
var isAnagram = function (strA, strB) {
  // sort letters in acending order in both strings and join together
  let sortedA = strA.split("").sort().join("");
  let sortedB = strB.split("").sort().join("");
  // compare two stings for equlity and return tru or false
  return sortedA === sortedB ? true : false;
};

//provided solution
var isAnagram2 = function (strA, strB) {
  if (strA.length !== strB.length) {
    return false;
  }

  var aLetterMap = {};
  var bLetterMap = {};
  var strLength = strA.length;

  for (var i = 0; i < strLength; i++) {
    var aLetter = strA[i];
    var bLetter = strB[i];

    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  }

  for (var key in aLetterMap) {
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }

  return true;
};

// All test.html test passed
