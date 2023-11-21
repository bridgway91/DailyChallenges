// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) { // recursive method, kinda proud of it, but curious if there's an easier method
    let count = A.filter(n=>n==A[0]).length;
    if (count % 2 == 0) {
      let newArr = A.filter(n=>n!==A[0]);
      return findOdd(newArr);
    } else {
      return A[0];
    }
  }


// alternatively...

const findOdd = (xs) => xs.reduce((a, b) => a ^ b); // so ^ is a XOR bitwise operator... not too familiar with it, returns 0 if operands are same, 1 if different (and starts by converting nums into binary format)... seems like going through a serious of numbers with ^'ing each, any number that appears an even number of times will have an effect that will cancel itself out, leaving only the single odd impact remaining, which gives that number

function findOdd(A) {
    return A.reduce(function(c,v){return c^v;},0);
}

function findOdd(A) {
    return A.reduce((l, r) => l ^ r);
}

// a.k.a. -- The XOR operation has a special property: if you XOR a number with itself an odd number of times, the result will be the number itself. If you XOR a number with itself an even number of times, the result will be 0. Since all numbers in the array appear even times except for one, the XOR operation will eventually leave you with the number that appears an odd number of times.