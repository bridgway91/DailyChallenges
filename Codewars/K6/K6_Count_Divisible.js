// Complete the function that takes 3 numbers x, y and k (where x ≤ y), and returns the number of integers within the range [x..y] (both ends included) that are divisible by k.

// More scientifically: { i : x ≤ i ≤ y, i mod k = 0 }

// Example
// Given x = 6, y = 11, k = 2 the function should return 3, because there are three numbers divisible by 2 between 6 and 11: 6, 8, 10

// Note: The test cases are very large. You will need a O(log n) solution or better to pass. (A constant time solution is possible.)



function divisibleCount(x, y, k) { // this one was a pain, had to look up other methods

    let xMod = x, yMod = y
    
    while (xMod % k) {
      xMod++
    }
    while(yMod % k) {
      yMod--
    }
    
    if (xMod > yMod) return 0
    return ((yMod - xMod) / k) + 1
  }
  

// alternatively...


function divisibleCount(x, y, k) { // I FUCKING MENTALLY TRIED SOMETHING SIMILAR, BUT FORGOT TO SUB 1 FROM THE X, DAMMIT, THOUGHT IT WOULDNT WORK
    return Math.floor(y/k) - Math.floor((x-1)/k)
  } // counting divisNums up to y, then removing count of up to (x-1)