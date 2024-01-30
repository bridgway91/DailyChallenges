// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

function solve(s) { // misunderstood the instructions like 3 fking times
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    const vowels = ['a','e','i','o','u']
    
    let max = 0
    let total = 0
    
    for (let letter of s) {
      if (!vowels.includes(letter)) { // if consonant
        total += alph.indexOf(letter) + 1
        if (total > max) max = total
      } else { // if vowel
        total = 0
      }
    }
    
    return max
  };


// alternatively...

function solve(s) { // so pretty much all other solns involved regex, and this was just the one easiest to understand
    var alph = ' abcdefghijklmnopqrstuvwxyz';
    var x = s.split(/[aeiou]/g);
    let res = x.map(el => el.split('').reduce((a,b)=>a+alph.indexOf(b),0))
    return Math.max(...res);
    }