// Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

// chained([a,b,c,d])(input)
// Should yield the same result as
// d(c(b(a(input))))


function chained(functions) { // happy i remembered roughly how to do this (3rd time now) even though i did have to change the reduce direction
    return function(input) {
      return functions.reduce((acc,cur) => cur(acc), input)
    };
  }