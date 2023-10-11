// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function(test, original) { // took some thinking, but found a quick way to compare the two in a way that fits on one line (not my intention, but worked out that way)
    return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')
  };


// alternatively...

// so apparently everyone else mostly thought of the same solution i did... here i was thinking it was clever