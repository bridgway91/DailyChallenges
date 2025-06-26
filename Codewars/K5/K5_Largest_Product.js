// Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.
// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.
// The input string always has more than five digits.


function greatestProduct(input) { // simple method, sliding window examining product, then compare to first 5 result
  let maxProduct = 0;
  let currentProduct = 1;

  // Initialize first window
  for (let i = 0; i < 5; i++) {
    currentProduct *= Number(input[i]);
  }
  maxProduct = currentProduct;

  // Slide window through the string
  for (let i = 5; i < input.length; i++) {
    let exitingDigit = Number(input[i - 5]);
    let enteringDigit = Number(input[i]);

    // Handle zero cleanly: if exiting digit is 0, recalc entire product
    if (exitingDigit === 0) {
      currentProduct = 1;
      for (let j = i - 4; j <= i; j++) {
        currentProduct *= Number(input[j]);
      }
    } else {
      currentProduct = (currentProduct / exitingDigit) * enteringDigit;
    }

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
}


// or...

function greatestProduct(input) { // while much simpler, I feel like this is potentially slower in that it's doing 5 mults per step versus my 2... not sure how much that matters...
  var max = 0;
  for ( var i = 4; i < input.length; i++ ) {
    max = Math.max( max, input[i-4]*input[i-3]*input[i-2]*input[i-1]*input[i] );
  }
  return max;
}