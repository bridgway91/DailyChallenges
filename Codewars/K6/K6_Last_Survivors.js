// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):
// "aa" => "b", "bb" => "c", .. "zz" => "a".

// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:
// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"

// Notes
// - The order of letters in the result is not important.
// - The letters "zz" transform into "a".
// - There will only be lowercase letters.


function lastSurvivors(str) { // had to leave and come back to, second visit much easier with having the getNext function, and getting the idea of checking for lastIndex from previous solns... with those bits of info was rather easy
    while (str.length != [...new Set(str)].length) {
      let l = str[0]
      if (str.lastIndexOf(l)) {
        str = str
          .replace(l,getNext(l))
          .replace(l,'')
      } else {
        str = str.slice(1) + l
      }
    }
    return str
  }
function getNext(letter) {
    if (letter == 'z') return 'a'
    return String.fromCharCode(letter.charCodeAt(0)+1)
  }