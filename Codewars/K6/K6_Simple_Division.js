// In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).


function solve(a,b){ // easy enough, did get primeFactors function from stackoverflow, but its understandable enough, so w/e
    const factors = [...new Set(primeFactors(b))]
    return factors.every(e=>a%e == 0)
  }
function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }