// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  // convert string to arr
  let arr = str.split(" ");
  // map over array returning each word with capitalized first letter
  const capitalizedArr = arr.map((word) => {
    let cap = word.charAt(0).toUpperCase();
    let remainder = word.slice(1);
    return cap + remainder;
  });
  //   return new string
  return capitalizedArr.join(" ");
};

// All Tests Passed when running test HTML
