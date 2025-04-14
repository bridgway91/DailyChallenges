// Given a certain integer n, we need a function big_primefac_div(), that give an array with the highest prime factor and the highest divisor (not equal to n).

// Let's see some cases:
// big_primefac_div(100) == [5, 50]
// big_primefac_div(1969) == [179, 179]

// If n is a prime number the function will output an empty list:
// big_primefac_div(997) == []
// If n is an negative integer number, it should be considered the division with the absolute number of the value.
// big_primefac_div(-1800) == [5, 900]
// If n is a float type, will be rejected if it has a decimal part with some digits different than 0. The output "The number has a decimal part. No Results". But n  will be converted automatically to an integer if all the digits of the decimal part are 0.
// big_primefac_div(-1800.00) == [5, 900]
// big_primefac_div(-1800.1) == "The number has a decimal part. No Results"

// Optimization and fast algorithms are a key factor to solve this kata. Happy coding and enjoy it!


function bigPrimefacDiv(n) { // its been a bit, but pretty sure i did all this myself, and rather proud of it
    if(Number.isFinite(n) && !Number.isInteger(n)) { return "The number has a decimal part." }
    let num = Math.abs(n), res = []
    const isPrime = (a) => {
      let t=a
      for (let i=2; i*i<=t; i++) {
        while (t%i == 0) { t/=i }
      }
      return t==a
    }
    if(isPrime(num)) { return res }
    for (let i=2; i*2<=num; i++) {
      if(num%i==0) {
        do {
          num /= i
          if(!res[1]) { res[1] = num }
          if(!res[0]) { if(isPrime(num)) res[0] = num}
        } while (num%i==0)
      }
    }
    return res
  }