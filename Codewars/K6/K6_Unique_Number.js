// Write a function called findUnique which returns the only unique number from an array.
// All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

// Example
// Input:
// [ 1, 8, 4, 4, 6, 1, 8 ]
// Expected output:
// 6


function findUnique(numbers) { // getting a general soln was easy...finding one that was fast enough for million-length arrays was a pain.. had to google for it
    numbers.sort()
    for (let i=0; i<numbers.length; i++) {
      let n = numbers[i]
      if (n != numbers[i-1] && n != numbers[i+1]) return n
    }
  }


// alternatively...

function findUnique(numbers) { // a bit-approach, which i never wouldve thought of... ^ is a XOR operator, "when you XOR two numbers, only bits that are different between them become 1's in the result, so XOR'ing a number with itself will always result in 0", so note that this only works so long as there is only a single unique number, and all others exist as pairs (or factors of 2)
    return numbers.reduce((a, b) => a ^ b);
  }