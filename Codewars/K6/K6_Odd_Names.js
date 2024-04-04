// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:
// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];

// Write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]

// Explanation of the above:
// - Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
// - Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number

// Notes:
// - Preserve the order of the original list.
// - Return an empty array [] if there is no developer with an "odd" name.
// - The input array and first names will always be valid and formatted as in the example above.


function findOddNames(list) { // easy enough, getting sum was a little convoluted, but w/e
    let oddnames = []
    for (let person of list) {
      let fName = person.firstName
      let sum = fName.split('').reduce((acc,_,ind)=>acc += fName.charCodeAt(ind),0)
      if (sum%2) oddnames.push(person)
    }
    return oddnames
  }


// alternatively...


var findOddNames = (list) => // im dumb, reduce doesnt need to reference back to original string, just use index 0 of the provided single letter
  list.filter(d=>d.firstName
                  .split('')
                  .map(c=>c.charCodeAt(0))
                  .reduce((a,b)=>a+b,0) 
                  % 2 !== 0);