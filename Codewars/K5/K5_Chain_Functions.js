// We want to create a function that will add numbers together when called in succession.
// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.
// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.

// A single call should be equal to the number passed in.
// add(1); // == 1
// We should be able to store the returned values and reuse them.
// var addTwo = add(2);
// addTwo; // == 2
// addTwo + 5; // == 7
// addTwo(3); // == 5
// addTwo(3)(5); // == 10

// We can assume any number being passed in will be valid whole number.


function add(n) { // I've seen it before, but I always forget that functions can have their own separate methods, namely valueOf()
  const inner = (x) => add(n + x); // keeps accumulating
  inner.valueOf = () => n;         // for coercion (e.g. +, ==, etc.)
  inner.toString = () => n;        // just in case it's logged as a string
  return inner;
}