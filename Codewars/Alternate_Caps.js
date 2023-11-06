// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){ // honestly feels unnecessarily long and complicated, but turns out near-best method
    return [s.split('').map((el,ind)=>ind%2==0?el.toUpperCase():el).join(''),s.split('').map((el,ind)=>ind%2==1?el.toUpperCase():el).join('')];
  };