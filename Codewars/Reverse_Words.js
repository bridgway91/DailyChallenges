// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) { // took some thinking, but not that hard to work out as a 1-liner
    return str.split(' ').map(el=>el.split('').reverse().join('')).join(' ');
  }


// alternatively...

// honestly most of the other solutions are similar to mine or worse, so just leaving this as-is