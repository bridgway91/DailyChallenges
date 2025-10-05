// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 


function partlist(arr) {
  let res = []
  for (let i=1; i<arr.length; i++) {
    let front = arr.slice(0,i).join(' ')
    let back = arr.slice(i).join(' ')
    res.push([front, back])
  }
  return res
}