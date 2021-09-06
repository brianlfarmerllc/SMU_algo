// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

// my solution
var mostSongsInPlaylist = function (arr) {
  // sort arr in accending order
  let sorted = arr.sort((a, b) => a - b);
  // empty count variables
  let min = 0;
  let count = 0;

  // loop over array checking min length and in creasing count
  for (let i = 0; i < sorted.length; i++) {
    if (min + sorted[i] <= 60) {
      min += sorted[i];
      count++;
    }
  }
  // return max somgs in 60 min
  return count;
};

// provided solution
var mostSongsInPlaylist2 = function (arr) {
  var sortedArr = arr.sort();
  var totalMins = 0;
  var totalSongs = 0;

  for (var i = 0; i < sortedArr.length; i++) {
    var currentSongDuration = sortedArr[i];

    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};

// All tests in test.html passed
