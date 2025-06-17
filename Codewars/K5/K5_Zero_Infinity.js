// Consider the following numbers (where n! is factorial(n)):
// u1 = (1 / 1!) * (1!)
// u2 = (1 / 2!) * (1! + 2!)
// u3 = (1 / 3!) * (1! + 2! + 3!)
// ...
// un = (1 / n!) * (1! + 2! + 3! + ... + n!)

// Which will win: 1 / n! or (1! + 2! + 3! + ... + n!)?
// Are these numbers going to 0 because of 1/n! or to infinity due to the sum of factorials or to another number?

// Task
// Calculate (1 / n!) * (1! + 2! + 3! + ... + n!) for a given n, where n is an integer greater or equal to 1.
// Your result should be within 10^-6 of the expected one.

// Remark
// Keep in mind that factorials grow rather rapidly, and you need to handle large inputs.
// Hint
// You could try to simplify the expression.


function going(n) { // had a bit of trouble working with cgpt on this one... simplified the code myself on paper, but wasn't fully sure that'd solve it... and cgpt kept doing some other weird approach that wouldn't work, eventually switched over to this, which is basically just the formula i came up with, and it works fine...
  let result = 0;
  let term = 1;

  for (let k = n; k >= 1; k--) {
    result += term;
    term /= k;
  }

  return result;
}
