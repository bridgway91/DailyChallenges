// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :

// (a^(p) + b^(p+1) + c^(p+2) + d^(p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.

// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2


function digPow(n, p){ // solution took a weirdly long time to calculate
    const nSplit = `${n}`.split('').map(el=>Number(el));
    let total = 0;
    for (let i=0; i<nSplit.length; i++) {
      total += Math.pow(nSplit[i],p+i);
    };
    if ((total >= n ) && (total % n == 0)) {
      return total / n;
    } else {
      return -1;
    }
  }

// alternatively...

function digPow(n, p) { // basically same as my soln in shortform, first line gets total (always forget reduce can have more than 2 parameters), second line gets the return
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return x % n ? -1 : x / n
  }