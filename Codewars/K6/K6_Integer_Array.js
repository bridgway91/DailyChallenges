// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.


function isIntArray(arr) { // i know there's a shorter way to write this, im just too lazy and tired to think of it right now
    if (!arr) return false
    if (Array.isArray(arr) && arr.length == 0) {
      return true
    } else if (arr.every(n=>Number.isInteger(n))) {
      return true
    } else {
      return false
    }
  }


// alternatively...


function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
  }


let isIntArray = arr => !!arr && arr.every(Number.isInteger); // see? not even a full line of code, wtf is wrong with me, coming up with that abomination up above