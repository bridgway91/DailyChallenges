// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:
// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.
// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23

// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes
// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).


function decomp(n) { // a bit long considering it's a rather easy solution, basically just broke down each number involved in the factorial into its prime factors, rather than multiplying out and trying from there (considering comp probly couldve have handled nums that big)
    let breakdown = {}
    for (let i=n; i>1; i--) {
      let num = i, d = 2
      while(num > 1) {
        if(num%d == 0) {
          if(breakdown[d]) {
            breakdown[d] += 1
          } else {
            breakdown[d] = 1
          }
          num /= d
        } else {
          d++
        }
      }
    }
    let res = []
    for (let k in breakdown) {
      res.push(breakdown[k] > 1 ? `${k}^${breakdown[k]}` : `${k}`)
    }
    return res.join(' * ')
  }