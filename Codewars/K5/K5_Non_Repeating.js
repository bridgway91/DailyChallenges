// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.


function firstNonRepeatingLetter(str) { // first thought process was too time-complex, didnt try it but didnt like it, so CGPT clued me in to this method
  const counts = {};
  // First pass: count lowercase frequency
  for (const char of str) {
    const lower = char.toLowerCase();
    counts[lower] = (counts[lower] || 0) + 1;
  }
  // Second pass: find the first with count 1, return original-case char
  for (const char of str) {
    if (counts[char.toLowerCase()] === 1) {
      return char;
    }
  }
  return "";
}
