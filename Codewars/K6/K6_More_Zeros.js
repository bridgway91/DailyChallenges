// Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

// You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

// Examples

// 'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
//                True       True       False      True       False       
//         --> ['a','b','d']

// 'DIGEST'--> ['D','I','E','T']

// All input will be valid strings of length > 0. Leading zeros in binary should not be counted.


function moreZeros(s){ // not too hard, first filter is messy but i got it, yay
    return s.split('')
      .map(e => e.charCodeAt(0).toString(2))
      .filter(e => e.match(/0/g) ? e.match(/1/g) ? e.match(/0/g).length > e.match(/1/g).length : 1 : 0)
  //     .filter(e => e.match(/0/g).length > e.match(/1/g).length)
      .map(e => String.fromCharCode(parseInt(e, 2)))
      .filter((e,i,a) => a.indexOf(e) == i)
  }


// alternatively...

const moreZeros = s => // not the most popular other soln, but i like this one for recognizing the binary representations are naturally only 1s and 0s, so it removes all the 1s and checks the length of 0s to be more than 3, neat idea... also im guessing the new Set that this and most other solns are doing just creates a unique array from a given one (so no repeated values)
  [...new Set(s)].filter(val => val.charCodeAt().toString(2).replace(/1/g, ``).length > 3);