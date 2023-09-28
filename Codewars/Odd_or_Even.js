// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) { // was skeptical of this at first, expected something to be wrong and need rewriting, but it worked!
    return ((array.reduce((a,b)=>a+b, 0)) % 2 == 0) ? 'even' : 'odd'
 }


// alternatively...

function oddOrEven(arr) { // while close to mine, this does show that because the "% 2" will always return a 1 or a 0, that can stand in as true or false
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
  }