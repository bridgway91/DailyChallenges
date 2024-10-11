// You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

//     Be careful about your timing!


function notPrimes(a,b){ // took a bit of work, but was mostly a messed up prime-check function causing the issue.. once that was resolved it worked out fine
    let arr = []
    for (let i = a; i < b; i++) {
      let digits = `${i}`.split('').map(e=>+e)
      if (digits.every(isPrime)) {
        if (!isPrime(i)) arr.push(i)
      }
    }
    return arr
  }
function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x%i == 0) return false
    }
    return x > 1
  }

// alternatively...

function notPrimes(a,b){ // i couldve just checked for 014689 being in the num... im dumb (overall not a big deal)
    let arr = []; 
    for (let i = a; i < b; i++){
      if (!/[014689]/.test(i)) {
        for (let j = 2; j <= Math.sqrt(i); j++){
          if (i % j === 0) { arr.push(i); break;}
        }
      }
    }
    return arr;
   }