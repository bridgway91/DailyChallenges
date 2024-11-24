// The factorial function is widely found in pure mathematics, most commonly in combinatorics and discrete probability. Typically the factorial is a function defined over nonnegative integers in such a way:
// For n=0, factorial(n) = 1. For n>0, factorial(n) = n*(n-1)*...*2*1.

// For example
// factorial(2) = 2
// factorial(4) = 24.

// It might seem odd that factorial(0) = 1, but it is more of a convenience than anything else.

// This problem requires you to define an extended version of the factorial function, one that accepts all integers! For nonnegative integers, your function should behave as above.
// For n<0, factorial(n) = (n)*(n+1)*...*(-2)*(-1).

// For example
// factorial(-1) = -1
// factorial(-2) = 2
// factorial(-3) = -6

// Get to it! Also, note that you will only get integers as input. No need for error messages:)


function factorial(n) { // apparently not mathematically correct, but creator just wanted to make a simple recursion problem for a friend, so solved it recursively
    if(n==0) return 1
    return n * (n<0 ? factorial(n+1) : factorial(n-1))
  }