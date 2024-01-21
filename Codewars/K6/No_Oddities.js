// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    return values.filter(el=>el%2==0)
  }

// alternatively...

var noOdds = values => values.filter(x => !(x % 2)); // pretty much the only "improvement" to be made, as the modulus-2 will already return a 0 or 1 result