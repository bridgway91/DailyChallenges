// Your task is to finish two functions, minimumSum and maximumSum, that take 2 parameters:
// values: an array of integers with an arbitrary length; may be positive and negative
// n: how many integers should be summed; always 0 or bigger

// Example:
// var values = [5, 4, 3, 2, 1];
// minimumSum(values, 2); // should return 1+2 = 3
// maximumSum(values, 3); // should return 3+4+5 = 12

// All values given to the functions will be integers. Also take care of the following special cases:
// - if values is empty, both functions should return 0
// - if n is 0, both functions should also return 0
// - if n is larger than values's length, use the length instead.


function minimumSum(values, n) { // super easy
    const sorted = values.sort((a,b)=>a-b).filter((e,i)=>i<n)
    return sorted.length ? sorted.reduce((a,b)=>a+b) : 0
  }
  function maximumSum(values, n) {
    const sorted = values.sort((a,b)=>b-a).filter((e,i)=>i<n)
    return sorted.length ? sorted.reduce((a,b)=>a+b) : 0
  }