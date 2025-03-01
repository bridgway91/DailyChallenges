// Given an array of numbers, calculate the largest sum of all possible blocks of consecutive elements within the array. The numbers will be a mix of positive and negative values. If all numbers of the sequence are nonnegative, the answer will be the sum of the entire array. If all numbers in the array are negative, your algorithm should return zero. Similarly, an empty array should result in a zero return from your algorithm.

// largestSum([-1,-2,-3]) == 0
// largestSum([]) == 0
// largestSum([1,2,3]) == 6

// Easy, right? This becomes a lot more interesting with a mix of positive and negative numbers:
// largestSum([31,-41,59,26,-53,58,97,-93,-23,84]) == 187
// The largest sum comes from elements in positions 3 through 7: 59+26+(-53)+58+97 == 187

// Once your algorithm works with these, the test-cases will try your submission with increasingly larger random problem sizes.


function largestSum(arr){ // knew from comments that a double loop to build out a start+end point for various sums would be too slow, so had to think of a way to get max's as each element is considered, eventually came to this
    let sums = [], max=0
  
    for (let i=0; i<arr.length; i++) {
      let last = sums.length ? sums[sums.length-1] : 0
      let n = arr[i]+last
      max = n>max ? n : max
      sums.push(n>0 ? n : 0)
    }
    
    return max
  }

// or

function largestSum(arr){ // basically same, just realizing that i dont need to use an array, just an int tracker
    var max = 0, cur = 0;
    for (var i of arr) {
      cur += i;
      if (cur < 0) cur = 0;
      if (cur > max) max = cur;
    }
    return max;
  }