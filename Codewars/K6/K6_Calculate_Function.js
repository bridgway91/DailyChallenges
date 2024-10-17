// This time, for any given linear sequence, calculate the function [f(x)] and return it as a function in Javascript or Lambda/Block in Ruby.

// For example:
// getFunction([0, 1, 2, 3, 4])(5) => 5
// getFunction([0, 3, 6, 9, 12])(10) => 30
// getFunction([1, 4, 7, 10, 13])(20) => 61

// Assumptions for this kata are:
// The sequence argument will always contain 5 values equal to f(0) - f(4).
// The function will always be in the format "nx +/- m", 'x +/- m', 'nx', 'x' or 'm'
// If a non-linear sequence simply return 'Non-linear sequence' for javascript, ruby, and python. For C#, throw an ArgumentException.


function getFunction(sequence) { // easy
    // y = ax + b
    const b = sequence[0]
    const a = (sequence[4] - sequence[0]) / 4
    if(sequence[2] != (2*a + b)) return 'Non-linear sequence'
    return (n) => {
      return (a * n) + b
    }
  }