// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

function reverseLetter(str) { // easy enough but did need to look some stuff up (name regex details)
    return str.replace(/[^a-z]+/gi, '').split('').reverse().join('')
  }

// alternatively....

function reverseLetter(str) { // originally thought to try with filter, but wasn't sure the syntax id use
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }

const reverseLetter = str => str.match(/[a-z]/g).reverse().join(''); // apparently match already transforms into an array