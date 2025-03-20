// We have a square matrix M of dimension n x n that has positive and negative numbers in the ranges [-9,-1] and [0,9],( the value 0 is excluded).
// We want to add up all the products of the elements of the diagonals UP-LEFT to DOWN-BOTTOM, that is the value ofsum1; and the elements of the diagonals UP-RIGHT to LEFT-DOWN and that is sum2. Then, as a final result, the value of sum1 - sum2.

// E.g.
// M = [[ 1,  4, 7,  6,  5],
//      [-3,  2, 8,  1,  3],
//      [ 6,  2, 9,  7, -4],
//      [ 1, -2, 4, -2,  6],
//      [ 3,  2, 2, -4,  7]]

// So the value of sum1 - sum2 is equal to:
// 1164 - 66 = 1098

// Create the code to do this calculation.

// Features of the random tests:
// Numbers of tests = 150
// 5 <= dimension <= 25 (python, ruby and COBOL)
// 5 <= dimension <= 20 (javascript)
// -10 < M[i,j] < 0 and 0 < M[i,j] < 10


function sumProdDiags(matrix) { // so most of this was obtained from chatgpt, i had been trying to implement a way to do the sum but could not figure out how to handle the transition from traveling up one side to then going across (for starting points), took so long trying to figure that out and failing that i just resorted to chatgpt
    let s1 = sumDiag(matrix, 'BL')
    let s2 = sumDiag(matrix, 'BR')
    return s1-s2
  }
function sumDiag(matrix, start) { // start = 'BL' || 'BR' (bottom left/right)
    const n = matrix.length;
    let sum = 0;
    if (start === 'BL') {
      // Traverse diagonals from bottom-left to top-right
      for (let startRow = n - 1; startRow >= 0; startRow--) {
        let product = 1;
        for (let i = 0; i <= n - 1 - startRow; i++) {
          product *= matrix[startRow + i][i];
        }
        sum += product;
      }
      for (let startCol = 1; startCol < n; startCol++) {
        let product = 1;
        for (let i = 0; i <= n - 1 - startCol; i++) {
          product *= matrix[i][startCol + i];
        }
        sum += product;
      }
    } else if (start === 'BR') {
      // Traverse diagonals from bottom-right to top-left
      for (let startCol = n - 1; startCol >= 0; startCol--) {
        let product = 1;
        for (let i = 0; i <= n - 1 - startCol; i++) {
          product *= matrix[n - 1 - i][startCol + i];
        }
        sum += product;
      }
      for (let startRow = n - 2; startRow >= 0; startRow--) {
        let product = 1;
        for (let i = 0; i <= startRow; i++) {
          product *= matrix[startRow - i][i];
        }
        sum += product;
      }
    }
    return sum;
  }

// or...

function sumProdDiags(matrix) { // not the shortest other soln, but the most similar to my method i think... how the fk did they manage this
    let s1 = 0, s2 = 0, l = matrix.length
    for(let k = l - 1; k > -l; k--){
      let n = 1
      for(let j = 0; j < l - k; j++){
        if(j < l && j + k >= 0) n *= matrix[j][j + k]
      }
      s1 += n
    }
    for(let i = 0; i < 2 * l - 1; i++){
      let n = 1
      for(let j = 0; j <= i; j++){
        if(j < l && i - j < l) n *= matrix[j][i - j]
      }
      s2 += n
    }
    return s1 - s2
  }