// Do you know how to make a spiral? Let's test it!
// Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

// Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN two-dimensional array with numbers 1 through NxN represented as a clockwise spiral.
// Return an empty array if N < 1 or N is not int / number

// Examples:
// N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
// 1    2    3    
// 8    9    4    
// 7    6    5    
// N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
// 1   2   3   4
// 12  13  14  5
// 11  16  15  6
// 10  9   8   7
// N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
// 1   2   3   4   5    
// 16  17  18  19  6    
// 15  24  25  20  7    
// 14  23  22  21  8    
// 13  12  11  10  9


function createSpiral(N) { // simple idea, notable tricky part is keeping track of the ring you're on so you don't overwrite a previous input (aka you keep spiraling inward instead of just a square)
  if (typeof N !== 'number' || N < 1 || !Number.isInteger(N)) {
    return [];
  }

  const spiral = Array.from({ length: N }, () => Array(N).fill(0));

  let num = 1;
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = N - 1;

  while (num <= N * N) {
    // Go right
    for (let i = left; i <= right; i++) {
      spiral[top][i] = num++;
    }
    top++;

    // Go down
    for (let i = top; i <= bottom; i++) {
      spiral[i][right] = num++;
    }
    right--;

    // Go left
    for (let i = right; i >= left; i--) {
      spiral[bottom][i] = num++;
    }
    bottom--;

    // Go up
    for (let i = bottom; i >= top; i--) {
      spiral[i][left] = num++;
    }
    left++;
  }

  return spiral;
}