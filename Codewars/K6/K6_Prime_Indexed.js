// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
// The first element of the array is at index 0.
// Good luck!


function total(arr){ // so... i did look up a function to determine primes... too much of a headache to do on my own and seemed like a common thing ppl would make.. after that was super-easy
    return arr.filter((e,i)=>isPrime(i)).reduce((a,b)=>a+b,0)
  };
function isPrime(number) {
    const checkPrime = (nr, limit) => {
      for (let start = 3; start <= limit; start += 2) {
        if (0 === nr % start) {
          return false;
        }
      }
      return nr > 1;
    };
    return number === 2 || number % 2 !== 0 && checkPrime(number, Math.sqrt(number));
  }