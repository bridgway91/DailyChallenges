// Every natural number, n, may have a prime factorization like: n = p1^k1 * p2^k2 * p3^k3 ...
// We define the geometric derivative of n, as a number with the following value: n* = k1*p1^(k1-1) * k2*p2^(k2-1) ...

// For example: calculate the value of n* for n = 24500.
// 24500 = 2²5³7²
// n* = (2*2) * (3*5²) * (2*7) = 4200

// Make a function, f that can perform this calculation
// f(n) ----> n*

// Every prime number will have n* = 1.
// Every number that does not have an exponent ki, higher than 1, will give a n* = 1, too

// f(24500) == 4200
// f(997) == 1

// Do your best!


function f(num) { // easy, just probly not the most time-efficient
    let fact = {}, i=2, t=num
    while(t>1) {
      if(t%i==0) {
        fact[i] = fact[i] ? fact[i]+1 : 1
        t /= i
      } else {
        i++
      }
    }
    let p = [...Object.keys(fact)]
    p = p.map(n=>fact[+n] * Math.pow(+n,fact[+n]-1))
    return p.reduce((a,b)=>a*b,1)
  }