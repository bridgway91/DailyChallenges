// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.


function solve(arr) { // easy again, today was a good day
    return arr.map(a=>a.filter((n,i)=>a.indexOf(n)==i)).reduce((acc,cur)=>acc * cur.length,1)
  };


// alternatively...

function solve(arr) { // unfamiliar with Set, though did think about trying to use it, but this seems pretty straight-forward
    return arr.reduce((res, curr) => res *= new Set(curr).size, 1);
  };