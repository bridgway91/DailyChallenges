// We have the numbers with different colours with the sequence: ['red', 'yellow', 'blue'].
// That sequence colours the numbers in the following way:
// 1 2 3 4 5 6 7 8 9 10 11 12 13 .....

// We have got the following recursive function:
// f(1) = 1
// f(n) = f(n - 1) + n

// Some terms of this sequence with their corresponding colour are:
// term   value   colour
// 1        1     "red"
// 2        3     "blue"
// 3        6     "blue"
// 4       10     "red"
// 5       15     "blue"
// 6       21     "blue"
// 7       28     "red"
// The three terms of the same colour "blue", higher than 3, are: [6, 15, 21]

// We need a function `same_col_seq(), that may receive three arguments:
// val, an integer number
// k, an integer number
// colour, the name of one of the three colours(red, yellow or blue), as a string.

// The function will output a sorted array with the smallest k terms, having the same marked colour, but higher than val.

// Let's see some examples:
// same_col_seq(3, 3, 'blue') == [6, 15, 21]
// same_col_seq(100, 4, 'red') == [136, 190, 253, 325]
// The function may output an empty list if it does not find terms of the sequence with the wanted colour in the range [val, 2* k * val]
// same_col_seq(250, 6, 'yellow') == []
// That means that the function did not find any "yellow" term in the range [250, 3000]

// Tests will be with the following features:
// Nmber of tests: 100
// 100 < val < 1000000
// 3 < k < 20


function sameColSeq(val, k, colour) { // this problem and the next few are done using my pseudo-code input into chatgpt to return some code, when id then modify if needed, this problem in particular was easy enough
    const colours = ['red', 'yellow', 'blue'];
    const checkLimit = 2 * k * val;
    let foundInRange = false;
    let result = [];
  
    let n = 1;
    let term;
  
    while (result.length < k) {
      term = (n * (n + 1)) / 2;
      if (term > val && colours[(term - 1) % 3] === colour) {
        if (term <= checkLimit) foundInRange = true;
        result.push(term);
      }
      n++;
      // short-circuit: if we've passed the limit and foundInRange is still false, we return []
      if (term > checkLimit && !foundInRange) return [];
    }
  
    return result;
  }
  