// Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.
// This should only work if the number has 4 digits or more. If not, return "Number is too small".

// Example
// lowestProduct("123456789") --> 24 (1x2x3x4)
// lowestProduct("35") --> "Number is too small"


function lowestProduct(input) { // had some trouble until i fully read the problem, then was simple
    if (input.length < 4) return 'Number is too small'
    let prods = []
    for (let i=0; i<=input.length-4; i++) {
      prods.push(input.slice(i,i+4))
    }
    return prods
            .map(e=>e.split('').map(f=>+f).reduce((a,c)=>a*c,1))
            .sort((a,b)=>a-b)[0]
  } // while not a 1-liner, i like my soln best