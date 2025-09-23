// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial


function factorial(n){ // feel like i've done this before...
  return n * (n>1 ? factorial(n-1) : 1) || 1
}

// or...

const factorial = n => n ? factorial(n - 1) * n : 1; // slimmer version