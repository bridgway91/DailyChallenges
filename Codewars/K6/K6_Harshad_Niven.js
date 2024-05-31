// Harshad numbers (also called Niven numbers) are positive numbers that can be divided (without remainder) by the sum of their digits.

// For example, the following numbers are Harshad numbers:
// - 10, because 1 + 0 = 1 and 10 is divisible by 1
// - 27, because 2 + 7 = 9 and 27 is divisible by 9
// - 588, because 5 + 8 + 8 = 21 and 588 is divisible by 21
// While these numbers are not:
// - 19, because 1 + 9 = 10 and 19 is not divisible by 10
// - 589, because 5 + 8 + 9 = 22 and 589 is not divisible by 22
// - 1001, because 1 + 1 = 2 and 1001 is not divisible by 2
// Harshad numbers can be found in any number base, but we are going to focus on base 10 exclusively.

// Your task
// Your task is to complete the skeleton Harshad object ("static class") which has 3 functions:
// - isValid() that checks if n is a Harshad number or not
// - getNext() that returns the next Harshad number > n
// - getSerie() that returns a series of n Harshad numbers, optional start value not included
// You do not need to care about the passed parameters in the test cases, they will always be valid integers (except for the start argument in getSerie() which is optional and should default to 0).

// Examples
// Harshad.isValid(1)         ==>  true
// Harshad.getNext(0)         ==>  1
// Harshad.getSerie(3)        ==>  [ 1, 2, 3 ]
// Harshad.getSerie(3, 1000)  ==>  [ 1002, 1008, 1010 ]


var Harshad = ( function() { // super easy
    'use strict';
  
    return {
      isValid: function( number ) {
        const digits = `${number}`.split('').map(e=>Number(e))
        const sum = digits.reduce((a,b)=>a+b,0)
        return !(number%sum)
      },
      getNext: function( number ) {
        while (++number) {
          if (Harshad.isValid(number)) return number
        }
      },
      getSerie: function( count, start=0 ) {
        let res = []
        while (res.length < count) {
          start++
          if (Harshad.isValid(start)) res.push(start)
        }
        return res
      }
    };
  
  } () );