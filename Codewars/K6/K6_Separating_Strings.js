// Create a function that takes a string and separates it into a sequence of letters.

// The array will be formatted as so:
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]

// The function should separate each word into individual letters, with the first word in the sentence having its letters in the 0th index of each 2nd dimension array, and so on.
// Shorter words will have an empty string in the place once the word has already been mapped out. (See the last element in the last part of the array.)

// Examples:
// sepStr("Just Live Life Man")
// // => [['J','L','L','M'],
// // => ['u','i','i','a'],
// // => ['s','v','f','n'],
// // => ['t','e','e','']]);
// sepStr("The Mitochondria is the powerhouse of the cell")
// // => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// // => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// // => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// // => [ '', 'o', '', '', 'e', '', '', 'l' ],
// // => [ '', 'c', '', '', 'r', '', '', '' ],
// // => [ '', 'h', '', '', 'h', '', '', '' ],
// // => [ '', 'o', '', '', 'o', '', '', '' ],
// // => [ '', 'n', '', '', 'u', '', '', '' ],
// // => [ '', 'd', '', '', 's', '', '', '' ],
// // => [ '', 'r', '', '', 'e', '', '', '' ],
// // => [ '', 'i', '', '', '', '', '', '' ],
// // => [ '', 'a', '', '', '', '', '', '' ]]


function sepStr(str) { // took a bit of thinking, but eventually got there
    let words = str.split(' '), res = []
    let max = words.reduce((a,c)=>Math.max(a, c.length),0)
  
    for (let w of words) {
      for (let i=0; i<max; i++) {
        res[i] = (res[i]||[]).concat(w[i]||'')
      }
    }
    return res
  }