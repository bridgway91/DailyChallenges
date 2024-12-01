// Given an integer n, find two integers a and b such that:
// A) a >= 0 and b >= 0
// B) a + b = n
// C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  

// You will return the digitSum(a) + digitsum(b).

// For example:
// solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
// n will not exceed 10e10.


function solve(n){ // starting attempt was having 2 counters, 0 and n, then converge them and add up all digits... but time-wise was too slow, so took half an hour trying to figure out a faster method, mostly by literally writing out that first attempt for each increment and finding out where the digit sums changed / maxed out... realized just by getting as many '9's as possible, the digit sum is maxed out, so just got the highest possible version of that, combined with the remaining bits and it worked
    let m = '9'.repeat((''+n).length-1)
    let digits = m+(n-m)
    return digits.split('').reduce((a,c)=>a + +c, 0)
  }