// Suppose we know the process by which a string s was encoded to a string r (see explanation below). The aim of the kata is to decode this string r to get back the original string s.

// Explanation of the encoding process:
// - input: a string s composed of lowercase letters from "a" to "z", and a positive integer num
// - we know there is a correspondence between abcde...uvwxyzand 0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...
// - if c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num * x % 26, then find ch the corresponding character of f(x)
// - accumulate all these ch in a string r
// - concatenate num and r and return the result

// For example:
// encode("mer", 6015)  -->  "6015ekx"
// m --> 12,   12 * 6015 % 26 = 4,    4  --> e
// e --> 4,     4 * 6015 % 26 = 10,   10 --> k
// r --> 17,   17 * 6015 % 26 = 23,   23 --> x
// So we get "ekx", hence the output is "6015ekx"

// Task
// A string s was encoded to string r by the above process. complete the function to get back s whenever it is possible.
// Indeed it can happen that the decoding is impossible for strings composed of whatever letters from "a" to "z" when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

// Examples
// decode "6015ekx" -> "mer"
// decode "5057aan" -> "Impossible to decode"


function decode(r) { // so i did look at the solutions before solving, b/c i was so caught up in trying to reverse the modulus that i just could not see a way forward with the problem... did not think to just run a loop for each possible answer and see if the expectations match up
    const nums = r.replace(/[^0-9]/gm,'')
    const str = r.replace(/[0-9]/gm,'')
    const alph = 'abcdefghijklmnopqrstuvwxyz'
    let res = ''
    
    for (let i=0; i<str.length; i++) {
      const rLetter = str[i]
      for (let j=0; j<26; j++) {
        if ((j*nums)%26 == alph.indexOf(rLetter)) {
          res += alph.charAt(j)
        }
      }
    }
      
    return res.length == str.length ? res : "Impossible to decode"
  }