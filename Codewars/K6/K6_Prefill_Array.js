// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"


function prefill(n, v = undefined) { // SOMEHOW FAILS WITH N BEING TRUE OR FALSE
    console.log(n,v)
    if (n == 0) return []
    if (!(+n >= 0) || !Number.isInteger(n)) throw new TypeError(n+` is invalid`)
    let arr = new Array(n)
    return arr.fill(v)
  }
function prefill(n, v = undefined) { // VERSION 2: FALSE WAS GETING CAUGHT IN LINE 2, BUT NOW ITS NOT ACCEPTING N AS 0 (its throwing error instead of [])
    console.log(n,v)
    if (n == 0 && Number.isInteger(n)) return []
    if (!(+n >= 0) || !Number.isInteger(n)) throw new TypeError(n+` is invalid`)
    let arr = new Array(n)
    return arr.fill(v)
  }
function prefill(n, v = undefined) { // REWROTE, CLEANER NOW BUT SAME PROBLEM
    console.log(n,v)
    if (Number.isInteger(n) && n >= 0) {
      let arr = new Array(n)
      return arr.fill(v)
    } else {
      throw new TypeError(n + ' is invalid')
    }
  }
function prefill(n, v = undefined) { // FINALLY WORKS BUT ITS FKING UGLY HAVING TO ADD IN A SPECIFIC EXCEPTION
    if ((Number.isInteger(n) && n >= 0) || (n === '0')) {
      let arr = new Array(Number(n))
      return arr.fill(v)
    } else {
      throw new TypeError(n + ' is invalid')
    }
  }


// alternatively...


function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`);
    return +n ? Array(n).fill(v) : [];
  }

function prefill(num, value) { // why didnt i think to just do a typeof check for boolean? am i stupid?
    if(typeof num === 'boolean' || ~~num != num || +num < 0) throw new TypeError(num + ' is invalid')
    return Array.apply(null, Array(+num)).map(function (d,i) { return value })
  }
function prefill(n, v) {
    if (!Number.isInteger(+n) || +n < 0 || typeof n === 'boolean') throw new TypeError(`${n} is invalid`);
    return Array.from(Array(+n), x => v); 
  }
const prefill = (n = 0, value) => {
    const length = parseFloat(n)
    if (length < 0 || !Number.isInteger(length)) throw new TypeError(n + ' is invalid')
    return Array(length).fill(value)
  }