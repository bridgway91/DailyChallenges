// In this task, you need to restore a string from a list of its copies.
// You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").
// You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.
// If the array is empty, then return an empty string.

// Examples:
// input = [
//   "a*cde",
//   "*bcde",
//   "abc*e"
// ]
//      result = "abcde"
// input = [
//   "a*c**",
//   "**cd*",
//   "a*cd*"
// ]
//      result = "a#cd#"


function assembleString(array){ // worked first try, was pretty straight-forward, but dont like how long it is, would want to trim it down
    let res = '', i = 0, j = 0
    if (!array.length) return res
    
    const size = array[0].length
    while (res.length < size) {
      if (array[i][j] != '*') {
        res += array[i][j]
        i = 0
        j++
      } else {
        i++
        if (i >= array.length) {
          res += '#'
          i = 0
          j++
        }
      }
    }
    
    return res
  }

// alternatively...

function assembleString(array){ // dont think i ever would have thought of something like this
    return !array.length ? "" : [...array[0]].map((x, i) => { // starts with a spread of the first str given
      let s = array.find(y => y[i] != "*") // runs a find through all the strings searching for a value that isn't *
      return !s ? "#" : s[i] // if none are found s==-1, so does a check, returning the potential found value in the map of the spread
    }).join``
  }

function assembleString(array){ // similar to my approach, and my actual initial attempt that i had trouble thinking through for some reason
    if (!array || array.length === 0) { return ''; }
    let restored = '';
    for (let i=0; i<array[0].length; ++i) {
      let ch = '#';
      for (let j=0; j<array.length; ++j) {
        const curCh = array[j][i];
        if (curCh !== '*') { ch = curCh; }
      }
      restored += ch;
    }
    return restored;
  }