// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:
// 2332
// 110011
// 54322345

// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.
// For this kata, single digit numbers will NOT be considered numerical palindromes.
// Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

// palindrome(8) => 11
// palindrome(281) => 282 
// palindrome(1029) => 1001
// palindrome(1221) => 1221
// palindrome("1221") => "Not valid"


function palindrome(num) { // probably an easier way to do this... or at least slimmer way
    if(!Number.isInteger(num) || num<0) return 'Not valid'
    let up = num+1, dn = num-1
    while(!palcheck(num) || num<10) { // could just increment a counter and check for when adding or subtracting, then increase counter if fail
      if(palcheck(up) && up>9) return up // digits check could be included in palcheck fn
      if(palcheck(dn) && dn>9) return dn
      up++
      dn--
    }
    return num
  }
function palcheck(str) {
    str = ''+str // could just add .toString() method in assignment below
    const rev = str.split('').reverse().join('')
    return rev == str
  }