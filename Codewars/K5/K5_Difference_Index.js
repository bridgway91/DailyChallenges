// Summary: Write a function which takes an array data of numbers and returns the largest difference in indexes j - i such that data[i] <= data[j]

// Long Description:
// The largestDifference takes an array of numbers. That array is not sorted. Do not sort it or change the order of the elements in any way, or their values.
// Consider all of the pairs of numbers in the array where the first one is less than or equal to the second one.
// From these, find a pair where their positions in the array are farthest apart.
// Return the difference between the indexes of the two array elements in this pair.

// Example:
// [ 1, 2, 3] returns 2 because here j = 2 and i = 0 and 2 - 0 = 2


function largestDifference(data) { // brute-force method takes too long, so apparently ideal method is to build up an array of mins starting from left, and maxs starting from right, then loop through both looking for spots where i<=j, and then increasing j to try and get the furthest distance where that relation still applies
  const n = data.length;
  if (n === 0) return 0;

  const minLeft = Array(n).fill(0);
  const maxRight = Array(n).fill(0);

  minLeft[0] = data[0];
  for (let i = 1; i < n; i++) {
    minLeft[i] = Math.min(minLeft[i - 1], data[i]);
  }

  maxRight[n - 1] = data[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    maxRight[j] = Math.max(maxRight[j + 1], data[j]);
  }

  let i = 0, j = 0, maxDiff = 0;
  while (i < n && j < n) {
    if (minLeft[i] <= maxRight[j]) {
      maxDiff = Math.max(maxDiff, j - i);
      j++;
    } else {
      i++;
    }
  }

  return maxDiff;
}


// or...

var largestDifference = function(data) { // this is the brute-force method, that is O(n^2), so not ideal, but obv nicer to look at
  var result = 0;
  for(var i = 0; i < data.length; ++i) {
    for(var j = 1; j < data.length; ++j) {
      if (data[i] <= data[j]) {
        if(j-i > result)
          result = j-i;
      }
    }
  }
  return result;
};