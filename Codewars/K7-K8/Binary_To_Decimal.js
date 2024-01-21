// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => { // pretty simple challenge; did look up algorithm for binary -> dec first
    let total = 0;  
    for(let i = 0; i < arr.length; i++){
      total = (total * 2) + arr[i]
    }
    return total;
  };


// alternatively...

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); // seems like there's something about 'parseInt' that I wasn't aware of.. seems like the second argument is the 'radix' or base of the number in the first argument... so this line joins the array into a single string of a binary number, tells the parseInt function that its a base-2 number, which then converts that and outputs a base-10 (so decimal) result... cool