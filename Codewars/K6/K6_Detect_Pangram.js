// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){ // wish i knew a regex way to get out of typing the whole alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return alphabet.every(e=>string.toLowerCase().includes(e))
  }


// alternatively...

function isPangram(string){ // main thing to note here, as a comment on a solution similar to my own pointed out, you dont want to call toLowerCase() inside of an every method, so it's best to do that first
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }