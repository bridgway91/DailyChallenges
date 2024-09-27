// Some numbers have the property to be divisible by 2 and 3. Other smaller subset of numbers have the property to be divisible by 2, 3 and 5. Another subset with less abundant numbers may be divisible by 2, 3, 5 and 7. These numbers have something in common: their prime factors are contiguous primes.

// Implement a function that finds the amount of numbers that have the first N primes as factors below a given limit.

// Let's see some cases:
// count_specMult(3, 200)  =>  6 
// The first 3 primes are: 2, 3 and 5.
// And the found numbers below 200 are: 30, 60, 90, 120, 150, 180.

// Happy coding!!


function countSpecMult(n, mxval) { // another easy Q.. did just assume i could look up some of the first primes
    const primes = [2,3,5,7,11,13,17,19,23]
    let factors = primes.slice(0,n)
    return Math.floor(mxval / factors.reduce((a,b)=>a*b,1))
  }