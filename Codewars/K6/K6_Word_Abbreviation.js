// The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

// Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

// A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
// Example
// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"



function abbreviate(string) { // this one was hard, and im not sure why the distinction is needed on line 27
    let start = 0
    let res = ''
    
    for (let i=0; i<string.length; i++) {
      if((string[i].toLowerCase() == string[i].toUpperCase()) || i == string.length-1) { //if equal, is not a letter
        let temp = i == string.length-1 ? string.slice(start,i+1) : string.slice(start,i)
        if (temp.length > 3) {
          res += `${temp[0]}${temp.slice(1,-1).length}${temp[temp.length-1]}`
        } else {
          res += temp
        }
        if (i != string.length-1) {
          res += string[i]
        }
        start = i+1
      }
    }
    
    return res
  }


// alternatively... ALL OTHER GOOD SOLNS USED REGEX

var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }
function abbreviate(string) {
  return string.replace(find, replace);
}


function abbreviate(string) { // apparently the \w in the regex is bad here and will cause issues with certain inputs "\w is equivalent to [A-Za-z0-9_]"
    return string.replace(/\w{4,}/g, function(word) {
      return word[0] + (word.length - 2) + word.slice(-1);
    });
  }


function abbreviate(string) {
    var na = /([^a-z])/i;                                                                      // 1 
    var ss = string.split(na);                                                                 // 2
    return ss
      .map(function(element) {                                                                 // 3
        if (element.length >= 4) {                                                             // 4
           return element = "" + element[0] + (element.length-2) + element[element.length-1];
        }                                                                                      // 5
        else return element                                                                    // 6
      })
      .join(separator = "")                                                                    // 7
  }
  /*1: Set up a remembered non-alphabetical delimiter for string.split(), 
    2: and split the input string along this delimiter, returning an array of strings.  
    3: For each element in the array of split input strings,
    4: If the length of that element (string) is >= 4 characters,
    5: Set that element to be an abbreviated version of itself.
    6: If the length of the element is not >=4, return the element as found.
    7: Finally, join all elements together, and return ss */


function abbreviate(string) { // probably the closest ive come to understand one
    return string.replace(/[A-Za-z]{4,}/gi, function(token) {
        return token[0] + (token.length - 2) + token.slice(-1);
    })
}