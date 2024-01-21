// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

function getSum(a, b) {
  let arr = [];
  let low = (a > b) ? b : a;
  let high = (b > a) ? b : a;
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr.reduce((acc,cur)=>acc+cur, 0);
}

// alternatively...

function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
} // gauss summation, math trick for sum between two numbers

function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
} // a recursive variant! cool!

function GetSum( a,b ) {
    var result = 0;
    var bigger = a > b ? a : b;
    var smaller = a > b ? b : a;
    for (var i = smaller; i <= bigger; i++) { result += i }
    return result
} // basically what i did, but without the array (which is not needed on my part, oops)