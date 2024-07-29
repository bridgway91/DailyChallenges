// For any given linear sequence, calculate the function [f(x)] and return it as a string.

// Assumptions for this kata are:
// the sequence argument will always contain 5 values equal to f(0) - f(4).
// the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
// if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.

// Examples (input -> output):
// [0, 1, 2, 3, 4]   -> "f(x) = x"
// [0, 3, 6, 9, 12]  -> "f(x) = 3x"
// [1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
// [0, 0, 1, 1, 1]   -> "Non-linear sequence"


function getFunction(sequence) { // was an absolute pain getting everything to type out properly
    const b = sequence[0]
    const a = sequence[1] - sequence[0]
    const first = a>1 ? a+'x' : a==1 ? 'x' : a==0 ? '' : a==-1 ? '-x' : a+'x'
    const second = a!=0 ? b>0 ? ' + '+b : b==0 ? '' : ' - '+Math.abs(b) : b
  
    return (4*a + b)==(sequence[4]) ? `f(x) = ${first}${second}` : 'Non-linear sequence'
  }