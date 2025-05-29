// For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

// The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

// Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. Can you make it so the memoization cache is private to this function?


const fibonacci = (function () { // would not have thought of this method... my way wouldve been a second parameter, but apparently thats not fully 'private'
  const cache = {}; // private cache, scoped inside the IIFE

  function fib(n) {
    if (n in cache) return cache[n];
    if (n < 2) return n;
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }

  return fib;
})();
