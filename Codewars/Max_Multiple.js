// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .
// Input >> Output Examples
// divisor = 2, bound = 7 ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

function maxMultiple(divisor, bound){ // curious if there's a 1-line solution to this...
    let num = bound;
    while (num > 0) {
      if (num % divisor == 0) return num;
      num--;
    }
  }

// alternatively...

const maxMultiple = (divisor,bound) => bound - bound % divisor ; // oh... right, just subtract the remainder of the % from the original bound, duh