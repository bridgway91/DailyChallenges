// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
// 2332
// 110011
// 54322345

// For this kata, single digit numbers will not be considered numerical palindromes.
// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.
// Note: Palindromes should be found without permutating num.

// palindrome(5) => false
// palindrome(1221) => true
// palindrome(141221001) => true
// palindrome(1215) => true 
// palindrome(1294) => false 
// palindrome("109982") => "Not valid"


function palindrome(num) { // dont like using double loops... =\
    if(!Number.isInteger(num) || num<1) return 'Not valid'
    let numstr = ''+num
    for (let i=0; i<numstr.length; i++) {
      for (let j=i+2; j<=numstr.length; j++) {
        let forward = numstr.slice(i,j)
        let back = forward.split('').reverse().join('')
        if (forward == back) return true
      }
    }
    return false
  }

// or

function palindrome(num) { // fk me, fk me, fk me... COULD HAVE JUST USED REGEX... finds where if any set of digits are followed by the same set of digits reversed (granted, idk how to handle the reversing part, but should be able to figure it out on the regex site)
    return  ! Number.isInteger(num) || num<0 ? "Not valid" : /(\d)\d?\1/.test(''+num)
  }