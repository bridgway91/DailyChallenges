// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){ // easy problem... am happy that i remembered map can take 3 parameters for call-back function tho, getting the array in there made things easier
    return word.toLowerCase().split('').map((e,i,a)=> {
      if (a.filter(el=>el == e).length > 1) {
        return ')'
      } else {
        return '('
      }
    }).join('')
}


// alternatively...

function duplicateEncode(word){ // seems like the only 'optimization' i could work in is just comparing indexes instead of the if/else statement
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }