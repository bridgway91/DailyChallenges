// In this kata you have to write a method that folds a given array of integers by the middle x-times.

// An example says more than thousand words:
// Fold 1-times:
// [1,2,3,4,5] -> [6,6,3]

// A little visualization (NOT for the algorithm but for the idea of folding):
//  Step 1         Step 2        Step 3       Step 4       Step5
//                      5/           5|         5\          
//                     4/            4|          4\      
// 1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
// ----*----      ----*          ----*        ----*        ----*


// Fold 2-times:
// [1,2,3,4,5] -> [9,6]
// As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.
// The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.
// If an array with one element is folded, it stays as the same array.
// The input array should not be modified!
// Have fun coding it and please don't forget to vote and rank this kata! :-)
// I have created other katas. Have a look if you like coding and challenges.

function foldArray(array, runs) { // took some time but mostly got it on first try, just forgot the array indexing in the last temp.push (was just pushing a length)
    if (array.length == 1) return array
    
    let res = array // [1,2,3,4,5]
    
    for (let r = 1; r <= runs; r++) { // run 2 times // second run: temp = [6,6,3]
      let temp = []
      for (let i = 0; i < Math.floor(res.length / 2); i++) { // i = 0, 1 // second run: i = 0
        temp.push(res[i] + res[res.length - 1 - i]) // push(1+5,2+4) -> temp = [6,6] // second run: push(6+3) -> temp = [9]
      }
      if (res.length % 2) temp.push(res[Math.floor(res.length / 2)]) // odd length -> temp = [6,6,3] // temp = [9,6]
      
      console.log(temp)
      res = temp
    }
    
    return res
  }


// alternatively...

function foldArray(a, n) { // recursive method that's imo much nicer (although a little too abbreviated for my tastes)
    const r = [], c = a.slice(); // basically uses same setup as me in a temp and a copy
    while (c.length) r.push(c.pop() + (c.shift() || 0)); // while the copy has anything in it, pushing to temp the last (pop) plus the first (shift || 0) values, removing from copy at same time
    return n - 1 ? foldArray(r, n - 1) : r; // if there's any runs left, runs the function again with inputs being the temp (now completed) array and runs minus 1
  }

// honestly a lot of the cleaner solutions include recursive bits and / or shift() and pop() methods... need to remember they exist