// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string


function mxdiflg(a1, a2) { // actually had some trouble with this, partially due to not understanding the instructions completely, but also left unsatisfied with my answer.. want something simpler
    if (!a1.length || !a2.length) return -1;
    let a1min = a1.reduce((a,c)=>Math.min(a, c.length),1000);
    let a1max = a1.reduce((a,c)=>Math.max(a, c.length),0);
    let a2min = a2.reduce((a,c)=>Math.min(a, c.length),1000);
    let a2max = a2.reduce((a,c)=>Math.max(a, c.length),0);
    return Math.max(Math.abs(a2max-a1min), Math.abs(a1max-a2min));
  }

// alternatively...

function mxdiflg(a1, a2) { // cleanest soln i found, so i wasnt too far off... did consider mapping at some point but was already partway through my soln so didnt bother
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }