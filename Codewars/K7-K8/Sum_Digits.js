// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.


function sumDigits(number) { // got it onto one line, but honestly looks kinda dumb, curious to see if simpler solution
    return (`${number}`.split('')).reduce((a,c)=>c>=0?a+Number(c):a,0);
  }

// alternatively...

function sumDigits(number) { // why didnt i just abs at the very start? am i stupid?
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }