// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(s) { // could pass most tests myself with just a counting setup, but that failed situations where things weren't nested properly (e.g. ([)] ), so cgpt helped figure this out, with a tactic I feel like i've seen used before... so I should probably memorize it... =\
  if (s.length % 2) return false;                 // odd length can't be valid
  const stack = [];
  const need = { ')':'(', ']':'[', '}':'{' };

  for (const ch of s) {
    if (need[ch]) {                               // it's a closing brace
      if (stack.pop() !== need[ch]) return false; // must match the last opener
    } else {
      stack.push(ch);                             // opener
    }
  }
  return stack.length === 0;
}
