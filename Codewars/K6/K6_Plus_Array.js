// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

function upArray(arr){ // leaving middle commented-out part in for learning purposes... basically JS can not handle super-large integers, so doing Number(x) on a 20-digit string will result in the last couple digits being 0
    if (!arr.every(el => (Number(el) === el) && (el < 10) && (el >= 0)) || arr.length == 0) return null;
  
  //   let num = (arr.join(''))
  //   num = Number(num)
  //   num = `${num+1}`
  //   while(num.length < arr.length) {
  //     num = '0' + num
  //   }
  //   let res = num.split('')
  //   res = res.map(n=>Number(n))
  //   return res
    
    let i = arr.length - 1
    arr[i] = arr[i] + 1
    
    while (i >= 0) {
      if (arr[i] >= 10) {
        arr[i] = 0
        if (i == 0) {
          arr.unshift(1)
        } else {
          arr[i-1] = arr[i-1] + 1
        }
      }
      i--
    }
    return arr
  }


// alternatively...

function upArray(arr) { // funny soln, turns any needed 9s to 0s first, then adds in the 1 or increment
    if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
    
    let i = arr.length - 1
    
    while (i >= 0 && arr[i] == 9)
      arr[i--] = 0
    
    if (i < 0)
      arr.unshift(1)
    else
      arr[i]++
    
    return arr
  }