// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.

// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

function stringTransformer(str) {
    let res = str.split(' ').reverse().join(' ').split('')
    res = res.map(e=>{
      if (e == e.toLowerCase()) {
        return e.toUpperCase()
      } else {
        return e.toLowerCase()
      }
    })
    return res.join('')
  }


// pretty much best practice, only improvement would be ternary instead of if-else