// Definition (Primorial Of a Number)
// Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

// Task
// Given a number N , calculate its primorial.
// Notes
// Only positive numbers will be passed (N > 0) .
// Input >> Output Examples:
// 1- numPrimorial (3) ==> return (30)
// Explanation: Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
// 2- numPrimorial (5) ==> return (2310)
// Explanation: Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .
// 3- numPrimorial (6) ==> return (30030)
// Explanation: Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .



function numPrimorial(n){ // admittedly this is probably cheating, but w/e
    const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
    return primes.slice(0,n).reduce((a,c)=>a*c,1)
  }



// alternatively...


function isPrime(num) { // apparently this first fn is time-costly, so not ideal, but this is most upvoted other soln, if real problem id just google quickest method to get prime list (or use an API, idk, w/e faster)
    for(var i = 2; i < num; i++){
      if(num % i === 0){
        return false
      }
    }
    return true
  }
function numPrimorial(n){
    let arr = []
    let i = 2
    while(arr.length < n){
      if(isPrime(i)){
        arr.push(i)
      }
     i++
    }
    return arr.reduce((a,b) => a * b)
  }