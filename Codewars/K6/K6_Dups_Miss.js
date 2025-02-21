// In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).
// They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.
// Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

// Let's see an example:
// arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]
// find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

// The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

// 500 <= a <= 50000
// a + k <= b and 100 <= k <= 1000000
// amount of duplicates variable, according to the length of the array


function findDupsMiss(arr) { // problem was simple enough, just worried about time to completion due to large input array sizes
    const sorted = arr.sort((a,b)=>a-b)
    let dups = [], miss
    
    for (let i=1; i<sorted.length; i++) {
      if(sorted[i]==sorted[i-1]) dups.push(sorted[i])
      if(sorted[i]-sorted[i-1] == 2) miss = sorted[i] - 1
    }
    
    return [miss,dups]
  }