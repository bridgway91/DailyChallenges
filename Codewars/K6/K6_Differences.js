// Given two array of integers(arr1,arr2). Your task is going to find a pair of numbers(an element in arr1, and another element in arr2), their difference is as big as possible(absolute value); Again, you should to find a pair of numbers, their difference is as small as possible. Return the maximum and minimum difference values by an array: [  max difference,  min difference  ]

// For example:
// Given arr1 = [3,10,5], arr2 = [20,7,15,8]
// should return [17,2] because 20 - 3 = 17, 10 - 8 = 2

// Note:
// arr1 and arr2 contains only integers(positive, negative or 0);
// arr1 and arr2 may have different lengths, they always has at least one element;
// All inputs are valid.

// Some Examples
// maxAndMin([3,10,5],[20,7,15,8]) === [17,2]
// maxAndMin([3],[20]) === [17,17]
// maxAndMin([3,10,5],[3,10,5]) === [7,0]
// maxAndMin([1,2,3,4,5],[6,7,8,9,10]) === [9,1]

function maxAndMin(arr1,arr2){ // feel like there's an easier way than a double-for-loop... 
    let diffs = []
    for (let i=0; i<arr1.length; i++) {
      for (let j=0; j<arr2.length; j++) {
        diffs.push(Math.abs(arr1[i]-arr2[j]))
      }
    }
    diffs = diffs.sort((a,b)=>b-a)
    return [diffs[0],diffs[diffs.length-1]]
  }