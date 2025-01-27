// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.
// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).
// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"

// param s: a string to be coded
// param shift: an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).
// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.
// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"

// an array of strings: s (possibly resulting from "movingShift", with 5 strings)
// an int shift
// "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"
// movingShift(u, 1) returns :
// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
// and demovingShift(v, 1) returns u.


const alph = 'abcdefghijklmnopqrstuvwxyz' // took some thought, but not too bad, if a little long... happy that the demoving version only required small changes from the moving version
function movingShift(s, shift) {
  let a = s.split('').map(e=>{
    let caps = e == e.toUpperCase() // boolean
    if(alph.includes(e.toLowerCase())) {
      let curInd = alph.indexOf(e.toLowerCase())
      let newInd = (curInd + shift) % 26
      shift++
      return caps ? alph[newInd].toUpperCase() : alph[newInd]
    } else {
      shift++
      return e
    }
  }).join('')

  let size = Math.ceil(a.length / 5)
  return [a.slice(0*size,1*size),a.slice(1*size,2*size),a.slice(2*size,3*size),a.slice(3*size,4*size),a.slice(4*size,5*size)]
}
function demovingShift(arr, shift) {
  let b = arr.join('').split('').map(e=>{
    let caps = e == e.toUpperCase() // boolean
    if(alph.includes(e.toLowerCase())) {
      let curInd = alph.indexOf(e.toLowerCase())
      let newInd = (curInd - shift + 260) % 26
      shift++
      return caps ? alph[newInd].toUpperCase() : alph[newInd]
    } else {
      shift++
      return e
    }
  }).join('')

  return b
}
