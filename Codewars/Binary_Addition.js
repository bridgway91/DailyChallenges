// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) { // kinda long, so not too happy with it, but it works
    let binary = [];
    let quotient = a+b;
    
    while (quotient > 0) {
      if (quotient % 2 == 0) {
        binary.unshift(0);
      } else {
        binary.unshift(1)
      }
      quotient = Math.floor(quotient / 2);
    }
    return `${binary.join('')}`;
  }

// alternatively...

function addBinary(a,b){ // I DID NOT KNOW OF THIS, WTF
    return (a+b).toString(2)
  }


function addBinary(a,b) { // similar to what I did, but cleaner
    var c = a + b;
    var res = '';
    while (c >= 1) {
        var res = c % 2 + res;
        c = Math.floor(c / 2);
    }
    return res;
  }